<template>
  <div class="wq_employee_field">
    <div class="employee_field_wrapper">
      <van-search
        v-if="searchShow"
        ref="search" placeholder="找人" v-model="search" :show-action='showAction'
        @focus="onFocus" @cancel="onCancel">
        <template slot="action">
          <div :style="search.trim().length>0?'':'color: rgba(59, 155, 248, 0.36)'" style="padding: 0 10px;" @click="searchEmployee">确定</div>
          <div style="padding-right: 10px;" @click="onCancel">取消</div>
        </template>
      </van-search>
      <div v-if="showAction" class="search_list">
        <div v-if="searchEmployeesData.list.length>0">
          <van-checkbox-group v-model="result[group.groupType]" v-for="(group, index) in searchEmployeesData.list" :key="index">
            <van-cell-group>
              <van-cell :title="employee.title" :label="employee.subTitle" class="employee_cell" v-for="(employee,index) in group.groupDatas" :key="index">
                <template slot="icon">
                  <van-checkbox key-name="identity" class="em_checkbox" :name="employee"/>
                  <avatar :src="employee.icon" :name="employee.iconName.name" size="30px" font-size="12px" style="margin-right: 10px;"/>
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
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
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div v-for="(departmentItem, i) in departmentMap[departmentParent.id].sections" :key="i">

                  <div class="block__title" v-if="departmentItem.groupTitle">{{ departmentItem.groupTitle }}</div>
                  <van-checkbox-group v-model="result[departmentItem.groupType]">
                    <van-cell-group >
                      <van-cell
                        :is-link="departmentItem.groupType == 'dep'"
                        @click="clickDepartment(item, departmentItem.groupType)" class="cell_department_employee" :title="item.title" :label="item.subTitle" v-for="(item,i) in departmentItem.groupDatas"
                        :key="i">
                        <template slot="icon">
                          <van-checkbox key-name="identity" class="em_checkbox" :name="item"/>
                          <avatar :src="item.icon" :name="item.iconName.name" size="30px" font-size="12px" style="margin-right: 10px;"/>
                        </template>
                      </van-cell>
                    </van-cell-group>
                  </van-checkbox-group>
                </div>
              </van-pull-refresh>
            </template>
          </transition>
        </div>
      </div>
    </div>
    <div class="wq_employee_field_actions">
      <van-row>
        <van-col span="18" class="action_result">
          <template v-for="(list) in result">
            <template v-for="(value, k) in list">
              <div :key="k" class="action_result_item">
                <div class="avatar">
                  <van-icon @click="$delete( list, k )" class="clear" name="clear" color="red"/>
                  <avatar :src="value.icon" :name="value.iconName.name" size="30px" font-size="12px"/>
                </div>
                <div class="title">{{ value.title }}</div>
              </div>
            </template>
          </template>
        </van-col>
        <van-col span="6" class="action_button">
          <span @click="onFinish">完成({{ resultCount }})</span>
        </van-col>
      </van-row>
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
// import axios from 'axios';
export default create({
  name: 'employee-field',
  components: {
    Crumb, CrumbItem, VanCheckboxGroup: CheckboxGroup, VanCheckbox: Checkbox, VanPullRefresh: PullRefresh, Avatar, VueBetterScroll, VanSearch: Search
  },
  props: {
    // departmentRequest: {
    //   type: Function,
    //   required: true
    // },
    // employeeRequest: {
    //   type: Function,
    //   required: true
    // },
    ajaxRequest: {
      type: Function,
      required: true
    },
    value: {
      type: Object,
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
    result: {
      handler() {
        this.$emit('input', this.result);
      },
      deep: true
    }
  },
  computed: {
    resultCount() {
      return Object.keys(this.result).reduce((count, key) => {
        return count + this.result[key].length;
      }, 0);
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
      isLoading: false,
      searchShow: false,
      currentRequest: {}
    };
  },
  mounted() {
    // 第一次进去初始化部门列表
    const did = this.companyId;
    this.departments.push({
      id: did,
      name: this.companyName,
      paramsData: {
        urlParams: {
          did
        }
      }
    });
    // window.setTimeout(() => {
    //   this.$refs.crumb.initScroll();
    // }, 500);
    this.initDepartmentMap({ urlParams: { did }});
    // this.departmentRequest({ id: id, currentPage: 1 }).then((data) => {
    //   this.$set(this.departmentMap, id, data);
    //   this.employeeRequest({ departmentId: id }).then(() => {
    //     this.departmentMap[id] = data;
    //   });
    // });
    // 绑定搜索框监听
    // this.bindSearchChange();
  },
  methods: {
    // 部门下拉刷新
    onRefresh() {
      this.initDepartmentMap(this.departments[this.departments.length - 1].paramsData).then(() => {
        this.isLoading = false;
      });
    },
    initDepartmentMap({ url, urlParams } = {}) {
      console.log('initDepartmentMap');
      this.currentRequest = { url, urlParams };
      // window.setTimeout(() => {
      // }, 50);
      return new Promise((resolve, reject) => {
        this.ajaxRequest({ url, urlParams }).then((data) => {
          console.log(urlParams, data, 2);
          this.$set(this.departmentMap, urlParams.did, data);
          this.searchShow = data.search.show;
          resolve(data);
        });
      });
      // Promise.all([this.departmentRequest({ id: id }), this.employeeRequest({ departmentId: id })])
      //   .then(([departmentData, employeeData]) => {
      //     this.$set(this.departmentMap, id, {
      //       departmentData,
      //       employeeData
      //     });
      //     resolve();
      //   });
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
    clickDepartment(data, groupType) {
      if (groupType === 'dep') {
        const { title, actionData } = data;
        this.departments.push({
          id: actionData.data.urlParams.did,
          name: title,
          paramsData: actionData.data
        });
        this.initDepartmentMap(actionData.data);
      }
      // this.departmentRequest({ id: id, currentPage: 1 }).then((data) => {
      //   this.$set(this.departmentMap, id, data);
      // });
      // window.setTimeout(() => {
      //   this.$refs.crumb.initScroll();
      // }, 500);
    },
    //
    // 绑定搜索框输入监听时间，对中文输入法进行优化
    bindSearchChange() {
      if (!this.$refs.search) {
        return;
      }
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
      console.log(1);
      if (this.search) {
        this.ajaxRequest({ key: this.search }).then(({ sections }) => {
          this.searchEmployeesData.list = sections;
          // this.$set(this.departmentMap, urlParams.did, data);
          // this.searchShow = data.search.show;
        });
        // this.employeeRequest({ search: this.search }).then(({ list, currentPage, total, pageSize }) => {
        //   this.searchEmployeesData.list = list;
        //   this.searchEmployeesData.currentPage = currentPage;
        // });
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
      this.search = '';
      this.searchEmployeesData.list = [];
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
      this.clearSearch();
    },
    // 人员选择完成
    onFinish() {
      this.$emit('finish', this.result);
    }
  }
});
</script>
