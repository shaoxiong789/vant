import axios from 'axios';
import moment from 'moment';
export default {
  // 无日历调用
  getData(params, cback, err) {
    if (!params.date) {
      params.date = moment().format('YYYY-MM-DD');
    }
    const dateParams = {
      year: moment(params.date).year(),
      month: moment(params.date).month() + 1,
      eid: params.eid || '',
      scene: params.scene || ''
    };
    console.log(dateParams);
    axios.post(params.url, dateParams).then(({ data }) => {
      if (data.result === 0) {
        // const shiftList = require('./demo/demo.json');
        const shiftObj = data.data.attendance;
        const dayArr = shiftObj.days;
        const shiftArr = shiftObj.shifts;
        console.log(params.date);
        const item = dayArr.filter(item => {
          // 判断选中的日历，并传给父级
          // moment same方法
          if (moment(item.date).isSame(params.date, 'day')) {
            return item;
          }
        });
        console.log(item);
        const backParams = {
          date: params.date,
          shift: shiftArr,
          data: item[0]
        };
        // 输出信息
        cback(backParams);
      } else {
        err(data.message);
      }
    });
  }
};
