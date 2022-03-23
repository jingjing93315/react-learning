/**
 * 该文件专门为count组件生成action对象
 */
import {INCREMENT, DECREMENT} from './constant'
// 同步action，指action的值为Object类型的一般对象
export const createIncrementAction = data => ({
  type: INCREMENT,
  data
})

export const createDecrementAction = data => ({
  type: DECREMENT,
  data
})
/**
 * 异步action，指action的值为函数,异步action中一般都会调用同步action
 * 异步action 并不是必须要用的
 */
export const createIncrementAsyncAction = (data,delay) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    },delay)
  }
}