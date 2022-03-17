## 一、todoList案例相关知识点
  1. 拆分组件、实现静态组件，注意：className,style的写法
  2. 动态初始化列表，如何确定将数据放在哪个组件的state中
    - 某个组件使用：放在其自身的state中
    - 某些组件使用：放在他们共同的父组件state中(官方称此操作为:状态提升)
  3. 关于父子之间通信
    1. 【父组件】给【子组件】传递数据:通过props传递
    2. 【子组件】给【父组件】传递数据:通过props传递，要求父提前给子传递一个函数
  4. 注意defaultChecked和checked的区别，类似的还有：defaultValue和value
  5. 状态在哪里，操作状态的方法就在哪里


## 二、github搜索案例相关知识点

  1. 设计状态时要考虑全面，例如带网络请求的组件，需要考虑请求失败怎么办
  2. ES6小知识点：解构赋值+重命名
    ```
    let obj = { a: { b: 1 } }
    const { a } =  obj // 传统解构赋值
    const {a:{b}} = obj //连续解构赋值
    const {a: {b:value}} = obj // 连续解构赋值+重命名
    ```
  3. 消息订阅与发布机制
    - 先订阅，再发布(理解：有一种隔空对话的感觉)
    - 适用于任意组件间通信
    - 要在组件的componentWillUnmount中取消订阅
  4. fetch 发送请求(关注分离设计思想)
    ```
    try {
      const response = await fetch(`/api/search/users2?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('updateState', {
        isLoading: false,
        users: data.items
      })
    } catch (error) {
      PubSub.publish('updateState', {
        isLoading: false,
        err: error.message
      })
      console.log('请求出错', error)
    }
    ```
    

## 三、路由的基本使用
  1. 明确好界面中的导航区、展示区
  2. 导航区a标签改为Link标签
    ```
    <Link to="/xxxx">Demo</Link>
    ```
  3. 展示区Route标签进行路径的匹配
    ```
      <Routes>
        <Route path="/xxxx" element={<XXX/>} / >
      </Routes>
    ```
  4. <App>最外侧包裹了一个<BrowserRouter>或<HashRouter>


## 四、路由组件与一般组件
  1. 写法不同：
    - 一般组件:<Demo/>
    - 路由组件: <Route path="/xxxx" element={<XXX/>} / > 
  2. 存放位置不同
    - 一般组件: components
    - 路由组件: pages
  3. 接收到的props不同
    - 一般组件：写组件标签时传递了什么，就能收到什么
    - 路由组件：接收到三个固定的参数(history，location，match)
        history:
          go:f go(n)
          goBack:f goBack()
          goForward: f goForward()
          push: f push(path,state)
          replace: f replace(path, state)
        location:
          pathname: "/about"
          search: ""
          state: undefined
        match:
          params: {}
          path: "/about"
          url: "/about"



## 五、 NavLink与封装NavLink
  1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
  2. 标签体内容是一个特殊的标签属性
  3. 通过this.props.children可获取标签体内容


## 六、 Routes的使用
  1. 通常情况下，path和element是一一对应的关系
  2. Routes可以提高路由匹配效率(单一匹配)

## 七、 解决多级路径刷新页面样式丢失的问题
  1. public/index.html中，引入样式时路径把./改为/(常用)
  2. public/index.html中引入样式时不写./，写%PUBLIC_URL%(常用)
  3. 使用HashRouter

## 八、 路由的严格匹配与模糊匹配(react-router-dom v5版本)
  1. 默认使用的是模糊匹配(输入的路径必须要包含匹配的路径，且顺序要一致)
  2. 开始严格匹配：<Route exact path="/about" component={About} />
  3. 严格匹配不要随便开启，需要时再开，有些时候开启会导致无法继续匹配二级路由



  ## 九、 BrowserRouter与HashRouter的区别

  1. 底层原理不同：BrowserRouter使用的是H5的history API,不兼容IE9及以下版本
，HashRouter使用的是URL的哈希值
  2. path表现形式不一样：BrowserRouter路径中没有#，HashRouter的路径包含#。
  3. 刷新前后对路由state参数的影响：BrowserRouter没有任何影响，因为state保存在history对象中，HashRouter刷新后会导致路由state参数的丢失
  4. 备注：HashRouter可以用于解决一些路径错误相关的问题