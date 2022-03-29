### 1. setState

setState更新状态的两种写法

(1). setState(stateChange, [callback]) ----- 对象形式的setState
  1. stateChange为状态改变对象(该对象可以体现出状态的更改)
  2. callback是可选的回调函数，它在状态更新完毕，界面也更新后(render也调用后)才被调用
(2). setState(updator,[callback]) --- 函数式的setState
  1. updator为返回stateChange对象的函数
  2. updator可以接收到state和props
  3. callback是可选的回调函数，它在状态更新完毕，界面也更新后(render也调用后)才被调用

总结： 
  1. 对象式的setState是函数式的setState的简写方式(语法糖)
  2. 使用原则： 
    (1). 如果新状态不依赖于原状态 ===> 使用对象方式
    (2). 如果新状态依赖于原状态 ===> 使用函数方式
    (3). 如果需要setState()执行后获取最新的状态数据，要在第二个callback函数中读取
### 2. lazyLoad

路由组件的lazyload

1. 通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件会被分开打包
const Login = lazy(() => import('@/pages/Login'))

2. 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
```
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Suspense>
```
### 3. Hooks

1. React Hook/Hooks是什么？
  (1). Hook是React 16.8.0 版本新增加的特性，新语法
  (2). 可以让你在函数组件使用state以及其他的React特性

2. 三个常用的Hook
  (1). State Hook: React.useState()
  (2). Effect Hook: React.useEffect()
  (3). Ref Hook: React.useRef()

3. State Hook

  (1). State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
  (2). 语法： const [xxx, setXXX] = React.useState(initValue)
  (3). useState()说明：
    参数：第一次初始化制定的值在内部做缓存
    返回值：包含2个元素的数组，第1个为内部当前状态值，第二个为更新状态值的参数
  (4). setXxx(2中写法)
    setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
    setXxx(value => newValue)： 参数为函数，接收原来的状态的值，返回新的状态值，内部用其覆盖原来的状态值。

4. Effect Hook
  (1). Effect Hook可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
  (2). React中的副作用操作：
    - 发ajax请求数据获取
    - 设置订阅/启动定时器
    - 手动更改真是DOM
  (3). 语法和说明

    ```
    useEffect(()=>{
      // 在此可以执行任何带副作用操作
      return () => {
        // 在组件卸载前执行
        // 在此做一些收尾工作，比如清楚定时器/取消订阅等
      }
    }, [stateVal])// 如果指定是[],回调函数只会在第一次render()后执行
    ```
  (4). 可以把useEffect Hook看作如下三个函数的组合
    componentDidMount()
    componentDidUpdate()
    componentWillUnmount()

5. Ref Hook
  (1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
  (2). 语法：const refContainer = useRef()
  (3). 作用：保存标签对象，功能与React.createRef()一样