<template>
  <div class="wq_employee_field">
    <van-search
      ref="search" placeholder="找人" v-model="search" :show-action='showAction'
      @focus="onFocus" @cancel="onCancel"/>
    <div v-if="showAction" class="search_list">
      <vue-better-scroll
        :scrollbar="true" style="height:100%;" v-if="searchEmployeesData.list.length>0" ref="search_list" :pull-up-load="{
          threshold: 0,
          txt: {
            more: '',
            noMore: '没有更多数据了'
          }
        }"
        @pullingUp="onSearchPullingUp">
        <div v-if="searchEmployeesData.list.length>0">
          <van-checkbox-group v-model="result">
            <van-cell-group>
              <van-cell :title="employee.name" :label="employee.title" class="employee_cell" v-for="(employee,index) in searchEmployeesData.list" :key="index">
                <template slot="icon">
                  <van-checkbox class="em_checkbox" :name="employee"/>
                  <avatar :src="employee.portrait" :name="employee.name" size="30px" font-size="12px" style="margin-right: 10px;"/>
                </template>

                <!-- <span class="employee_title">前端开发工程师</span> -->
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
      </vue-better-scroll>
    </div>
    <div class="branch_list" v-else>
      <div class="crumb">
        <crumb ref="crumb">
          <crumb-item @click.native="backDep(index)" v-for="(department,index) in departments" :key="index" v-text="department.name"/>
        </crumb>
      </div>
      <div v-for="(departmentParent,index) in departments" v-if="index == departments.length-1" :key="index">
        <transition enter-active-class="animated slideInRight">
          <template v-if="departmentMap[departmentParent.id]!=undefined">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh(departmentParent.id)">
              <van-checkbox-group v-model="result">
                <van-cell-group>
                  <!-- {{departmentParent.id}}
                  {{getDepartmentList(departmentParent.id)}} -->
                  <van-cell @click="clickDepartment(department)" :title="department.name" :key="i" v-for="(department,i) in departmentMap[departmentParent.id].departmentData.list" is-link >
                    <template slot="icon">
                      <van-checkbox class="em_checkbox" :name="department"/>
                    </template>
                  </van-cell>
                </van-cell-group>
              </van-checkbox-group>
              <div class="block__title">联系人</div>
              <van-checkbox-group v-model="result">
                <van-cell-group>
                  <van-cell class="cell_department_employee" :title="employee.name" :label="employee.title" v-for="(employee,i) in departmentMap[departmentParent.id].employeeData.list" :key="i">
                    <template slot="icon">
                      <van-checkbox class="em_checkbox" :name="employee"/>
                      <avatar :src="employee.portrait" :name="employee.name" size="30px" font-size="12px" style="margin-right: 10px;"/>
                    </template>
                  </van-cell>
                </van-cell-group>
              </van-checkbox-group>
            </van-pull-refresh>
          </template>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import create from '../utils/create';

import Crumb from '../crumb';
import CrumbItem from '../crumb-item';
import Avatar from '../avatar';
import Search from '../search';
import PullRefresh from '../pull-refresh';
import Checkbox from '../checkbox';
import CheckboxGroup from '../checkbox-group';
import VueBetterScroll from 'vue2-better-scroll';

export default create({
  name: 'employee-field',
  components: {
    Crumb, CrumbItem, VanCheckboxGroup: CheckboxGroup, VanCheckbox: Checkbox, VanPullRefresh: PullRefresh, Avatar, VueBetterScroll, VanSearch: Search
  },
  props: {
    departmentRequest: {
      type: Function,
      required: true
    },
    employeeRequest: {
      type: Function,
      required: true
    },
    value: {
      type: Array,
      default: []
    },
    companyName: {
      type: String,
      default: '全公司'
    },
    companyId: {
      type: String,
      default: '0'
    }
  },
  watch: {
    result() {
      this.$emit('input', this.result);
    }
  },
  data() {
    return {
      result: this.value,
      search: '',
      showAction: false,
      searchEmployeesData: {
        list: [],
        currentPage: 1
      },
      departments: [],
      departmentMap: {
      },
      isLoading: false
    };
  },
  mounted() {
    // 第一次进去初始化部门列表
    const id = this.companyId;
    this.departments.push({
      id: id,
      name: this.companyName
    });
    // window.setTimeout(() => {
    //   this.$refs.crumb.initScroll();
    // }, 500);
    this.initDepartmentMap(id);
    // this.departmentRequest({ id: id, currentPage: 1 }).then((data) => {
    //   this.$set(this.departmentMap, id, data);
    //   this.employeeRequest({ departmentId: id }).then(() => {
    //     this.departmentMap[id] = data;
    //   });
    // });
    // 绑定搜索框监听
    this.bindSearchChange();
  },
  methods: {
    // 部门下拉刷新
    onRefresh(id) {
      this.initDepartmentMap(id).then(() => {
        this.isLoading = false;
      });
    },
    initDepartmentMap(id) {
      return new Promise((resolve, reject) => {
        Promise.all([this.departmentRequest({ id: id }), this.employeeRequest({ departmentId: id })])
          .then(([departmentData, employeeData]) => {
            this.$set(this.departmentMap, id, {
              departmentData,
              employeeData
            });
            resolve();
          });
      });
    },
    backDep(index) {
      console.log(12);
      const outer = this.departments.slice(index + 1);
      this.departments = this.departments.slice(0, index + 1);
      outer.map(({ id }) => {
        delete this.departmentMap[id];
      });
      // window.setTimeout(() => {
      //   this.$refs.crumb.initScroll();
      // }, 500);
    },
    clickDepartment({ id, name }) {
      this.departments.push({
        id,
        name
      });
      // this.departmentRequest({ id: id, currentPage: 1 }).then((data) => {
      //   this.$set(this.departmentMap, id, data);
      // });
      this.initDepartmentMap(id);
      // window.setTimeout(() => {
      //   this.$refs.crumb.initScroll();
      // }, 500);
    },
    //
    // 绑定搜索框输入监听时间，对中文输入法进行优化
    bindSearchChange() {
      const input = this.$refs.search.$el.querySelector('input');
      let cpLock = false;
      input.addEventListener('compositionstart', () => {
        cpLock = true;
      });
      input.addEventListener('compositionend', (e) => {
        cpLock = false;
        if (!cpLock) this.searchEmployee();
      });
      input.addEventListener('input', (e) => {
        if (!cpLock) this.searchEmployee();
      });
    },
    // 搜索人员
    searchEmployee() {
      if (this.search) {
        this.employeeRequest({ search: this.search }).then(({ list, currentPage, total, pageSize }) => {
          this.searchEmployeesData.list = list;
          this.searchEmployeesData.currentPage = currentPage;
        });
      } else {
        this.clearSearch();
      }
    },
    // 搜索人员上拉加载
    onSearchPullingUp() {
      this.employeeRequest({ search: this.search, currentPage: this.searchEmployeesData.currentPage + 1 }).then(({ list, currentPage, total, pageSize }) => {
        if ((this.searchEmployeesData.currentPage + 1) * pageSize >= total) {
          this.$refs.search_list.forceUpdate(false);
          return;
        }
        this.searchEmployeesData.list = this.searchEmployeesData.list.concat(list);
        this.searchEmployeesData.currentPage = this.searchEmployeesData.currentPage + 1;
        this.$refs.search_list.forceUpdate(true);
      });
    },
    // 搜索人员分页查询
    searchEmployeePageNext() {
      if (this.search) {
        this.employeeRequest({ search: this.search }).then(({ list, currentPage, total, pageSize }) => {
          this.searchEmployeesData.list = list;
          this.searchEmployeesData.currentPage = currentPage;
        });
      } else {
        this.clearSearch();
      }
    },
    // 清除人员搜索
    clearSearch() {
      this.searchEmployeesData.list = [];
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
      this.clearSearch();
    }
  }
});
</script>
<style lang="postcss" scoped>
.em_checkbox{
  margin-right: 10px;
  line-height: 22px;
}
.crumb{
  padding: 5px 15px;
}
.employee_cell{
  .employee_title{
    font-size: 12px;
    color: #999;
  }
}
.search_list{
  height: calc(100% - 42px);
  overflow: hidden;
  position: relative;
}
.wq_employee_field{
  position: relative;
}
.block__title{
  color: rgba(69,90,100,.6);
  padding: 0px 15px;
  line-height: 30px;
}
.cell_department_employee,.employee_cell{
  padding: 3px 15px;
  justify-content: center;
  align-items: center;
}
</style>
