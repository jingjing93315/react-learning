import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
  state = { carName: '奔驰' }
  changeCar = () => {
    // this.setState({ carName: '迈巴赫' })
    // const obj = this.state //引用地址传递 ，浅对比
    // obj.carName = '哈哈哈哈'
    // console.log(obj === this.state)
    // this.setState(obj) //使用过setState的时候，不要再跟原来的对象发生关系
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(this.props, this.state) // 当前的props和state
  //   // console.log(nextProps, nextState) // 接下里变化的目标props，目标state
  //   if(this.state.carName === nextState.carName)return false
  //   else return true
  // }
  render() {
    console.log('Parent--render')
    const { carName } = this.state
    return (
      <div className="parent">
        <h3>我是parent组件</h3>
        <span>我的车是{carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   console.log(this.props) // 当前的props和state
  //   console.log(nextProps) // 接下里变化的目标props，目标state
  //   return !this.props.carName === nextProps.carName
  // }
  render() {
    console.log('Child---render')
    return (
      <div className="child">
        <h3>我的Child组件</h3>
        <span>我接收到的车是{this.props.carName}</span>
      </div>
    )
  }
}
