<template>
  <div class="wq_employee_field">
    <van-search
      v-if="searchShow" @change="searchEmployee"
      ref="search" placeholder="找人" v-model="search" :show-action='showAction'
      @focus="onFocus" @cancel="onCancel"/>
    <div v-if="showAction" class="search_list">
      <!-- <vue-better-scroll
        :scrollbar="true" style="height:100%;" v-if="searchEmployeesData.list.length>0" ref="search_list"
        :pull-up-load="{
          threshold: 0,
          txt: {
            more: '',
            noMore: '没有更多数据了'
          }
        }"
        @pullingUp="onSearchPullingUp"> -->
      <div v-if="searchEmployeesData.list.length>0">
        <van-checkbox-group v-model="result[group.groupType]" v-for="(group, index) in searchEmployeesData.list" :key="index">
          <van-cell-group>
            <van-cell :title="employee.title" :label="employee.subTitle" class="employee_cell" v-for="(employee,index) in group.groupDatas" :key="index">
              <template slot="icon">
                <van-checkbox key-name="identity" class="em_checkbox" :name="employee"/>
                <avatar :name="employee.iconName.name" size="30px" font-size="12px" style="margin-right: 10px;"/>
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
      <!-- </vue-better-scroll> -->
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
              <!-- <van-checkbox-group v-model="result.departmentList">
                <van-cell-group>
                  <van-cell @click="clickDepartment(department)" :title="department.name" :key="i" v-for="(department,i) in departmentMap[departmentParent.id].departmentData.list" is-link >
                    <template slot="icon">
                      <van-checkbox class="em_checkbox" :name="department"/>
                    </template>
                  </van-cell>
                </van-cell-group>
              </van-checkbox-group> -->
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
                        <avatar :name="item.iconName.name" size="30px" font-size="12px" style="margin-right: 10px;"/>
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
var mockData = {
  'optBtns': [
    {
      'action': 'web_view',
      'actionData': '',
      'url': '',
      'urlParams': ''
    }
  ],
  'search': {
    'show': true,
    'url': '/app/chooser/search.htm',
    'accessory': '按姓名或手机',
    'params': 'key'
  },
  'accessory': '1000人',
  'sections': [
    {
      'groupTitle': '',
      'groupType': 'dep',
      'groupDatas': [
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '族最议取期',
          'subTitle': '速心将立太',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '320000199202156560',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '810000198808309463',
          'data': {
            'id': '430000200309053407',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '至高都取话',
          'subTitle': '斗容院为个',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '310000201004093034',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '150000201105041276',
          'data': {
            'id': '410000201711250266',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '起意位却易',
          'subTitle': '确龙间团据',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '150000199503279669',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '43000019950618163X',
          'data': {
            'id': '430000197201113311',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '联队感也酸',
          'subTitle': '织影计达技',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '990000197912163496',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '820000198108079435',
          'data': {
            'id': '150000199009241083',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '指毛第往场',
          'subTitle': '由清开器证',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '420000200101232447',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '430000197611030287',
          'data': {
            'id': '530000198110051555',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '专导派易任',
          'subTitle': '通由结子你',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '360000200811262281',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '530000197009176455',
          'data': {
            'id': '530000200005044062',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '层铁重次回',
          'subTitle': '验安信离交',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '120000199208157401',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '340000197306203688',
          'data': {
            'id': '610000198012199337',
            'type': 'dep'
          }
        }
      ]
    },
    {
      'groupTitle': '联系人',
      'groupType': 'emp',
      'groupDatas': [
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '身京有她门',
          'subTitle': '门走理毛了',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '990000199104251892',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '640000199210055553',
          'data': {
            'id': '370000200508133577',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '许听近起名',
          'subTitle': '半些比土用',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '340000198409106033',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '320000197406025344',
          'data': {
            'id': '320000199304303808',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '面连斗张治',
          'subTitle': '交联张进南',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '640000199201145864',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '150000199305085951',
          'data': {
            'id': '460000201307243135',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '意给用体白',
          'subTitle': '难美局备候',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '130000197807291437',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '120000198109102654',
          'data': {
            'id': '410000199403246919',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '商办等化意',
          'subTitle': '着格张见类',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '540000197902261769',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '310000200910281497',
          'data': {
            'id': '350000200402258159',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '力复大究后',
          'subTitle': '千特用较率',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '460000197003223144',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '150000197004155726',
          'data': {
            'id': '530000200001234774',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '话历学员证',
          'subTitle': '走行角组拉',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '450000200508062377',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '310000198804204631',
          'data': {
            'id': '650000197608213171',
            'type': 'dep'
          }
        },
        {
          'icon': 'http://',
          'iconName': {
            'name:': '喔趣',
            'color': '#f09039'
          },
          'title': '矿想家群术',
          'subTitle': '向火线石实',
          'clickable': true,
          'action': 'activity',
          'actionData': {
            'subType': 'CONTACTS',
            'data': {
              'url': '/app/chooser/books.htm',
              'urlParams': {
                'did': '810000198308312324',
                'usage': 'attend_mode_setting',
                'modes': []
              }
            }
          },
          'accessory': '100',
          'accessoryType': 'arrow',
          'identity': '110000200511241749',
          'data': {
            'id': '620000198108018184',
            'type': 'dep'
          }
        }
      ]
    }
  ]
};
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
      debugger;
      this.currentRequest = { url, urlParams };
      // window.setTimeout(() => {
      this.$set(this.departmentMap, urlParams.did, mockData);
      this.searchShow = mockData.search.show;
      // }, 50);
      // this.ajaxRequest({ url, urlParams }).then((data) => {
      //   console.log(urlParams, data, 2);
      //   this.$set(this.departmentMap, urlParams.did, data);
      //   this.searchShow = data.search.show;
      //   resolve(data);
      // });

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
