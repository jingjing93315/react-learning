import {ADD_PERSON} from '../constant';
// 初始化人的列表
 const initState = [{
   id: '001',
   name: 'gaojing',
   age: 18
 }]
export default function personReducer(preState=initState,action){
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:// 若添加一个人
      /**
       * preState.unshift(data)此处不可以这样写，这样会导致preState被改写，
       * personReducer不再是纯函数
       */
      return [data, ...preState]
    default:
      return preState
  }
}