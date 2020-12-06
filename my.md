# 1 学习资源汇总


1. [视频学习地址](
https://www.rails365.net/movies/you-ren-de-react-shi-pin-jiao-cheng-ji-chu-pian-6-tong-guo-props-chuan-di-shu-ju -)


2. [中文官网](https://react.docschina.org/docs/)

3. [react-router](http://react-guide.github.io)
   [视频](https://www.rails365.net/movies/qing-song-react-router-01-jie-shao)

   https://github.com/ReactTraining/react-router/blob/v3/docs/Introduction.md

# 2 本项目要点

1. 组件prop (src/components/MyProps.js)

2. react-router  注意版本差异

3. 图片引入资源(Header.js)

4. react中的双向绑定(src/pages/select/selectLink.js)

# 3 总结
## 1. 事件 
```
// 不传参
<a href="javascript:;" onClick={this.handleDelete}>删除</a> 
<a href="javascript:;" onClick={this.handleDelete(record.key)}>删除</a>  //报错
// 传参
<a href="javascript:;" onClick={ () => this.handleDelete(record.key)}>删除</a>
```
2. 阻止事件冒泡（collapse/collpase.js）



## 2. react中的双向绑定(通过state)
```
    state = {
        isShow: false,
        selectName: defineArr[0].name,
        filedName: defineArr[0].things[0],
        filedOptions: defineArr[0].things.map((item, index) => { return <Option key={index} value={item}>{item}</Option> })
    };
    submit = ()=> {
        console.log(this.state);
    }

    render() {
        const formItemLayout = { labelCol: { xs: 24, sm: 4 }, wrapperCol: { xs: 24, sm: 12 } };
        const offsetLayout = { wrapperCol: { xs: 24, sm: { span: 12, offset: 4 } } };
        const nameOptions = defineArr.map((item, index) => {
            return <Option key={item} value={item.name}>{item.name}</Option>
        });

        return (
            <div>
                <Form layout="horizontal">
                    <FormItem label="数据库" {...formItemLayout}>
                        <Select value={this.state.selectName} onChange={this.changeName}>
                            {nameOptions}
                        </Select>
                    </FormItem>
                    <FormItem label="修改字段" {...formItemLayout} >
                        <Select value={this.state.filedName} onChange={this.changeFiled}>
                            {this.state.filedOptions}
                        </Select>
                    </FormItem>
                    <FormItem {...offsetLayout}>
                        <Button type="primary" onClick={this.submit}>提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
```

## 3. 生命周期
```
    1.Mounting 已插入真实DOM componentWillMount() componentDidMount()
    componentDidMount(){console.log(1)}
    2.Updating 正在被重新渲染 componentWillUpdate(object nextProps, object nextState) componentDidUpdate(object prevProps, object prevState)
    3.Unmounting 已移除真实DOM componentWillUnmount()
    4.React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。

    componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
    shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用
```
   
## 4. redux (actions、reducers、store) 定义全局变量
store 中定义变量，
action中定义操作可以传入变量，
reducers连接store和action 根据action中传入type和参数操作store
1. actions:
```
    function changeTable(index) {
            return { type: "channgTable", data:index }
    }
```

2. reducers:
```
    const reducer = function(state={"tableIndex":0}, action={}) {
        switch(action.type){
              //当发出type为changeTable的action对state的操作
              case "changeTable":
                    let backup = state;
                    backup["tableIndex"] = action.data;
                    return Object.assign({}, state,backup);
              default :
                    return Object.assign({}, state);
        }
    }

```

3. store:
store.getState()
store.dispatch(action)
store.subscribe(listener)
```
    var store = createStore(reducer);
```

## 5. react-router(3.x) (嵌套路由、路由钩子(离开提示、权限控制))
1. 使用onEnter钩子替代<Redirect>组件。
```  
    <Route path="inbox" component={Inbox}>
    <Route
        path="messages/:id"
        onEnter={
        ({params}, replace) => replace(`/messages/${params.id}`)
        } 
    />
    </Route>
```

2.onEnter钩子还可以用来做认证。
```
    const requireAuth = (nextState, replace) => {
        if (!auth.isAdmin()) {
            // Redirect to Home page if not an Admin
            replace({ pathname: '/' })
        }
    }
    export const AdminRoutes = () => {
    return (
        <Route path="/admin" component={Admin} onEnter={requireAuth} />
    )
    }
```

3. 下面是一个高级应用，当用户离开一个路径的时候，跳出一个提示框，要求用户确认是否离开。
```
    const Home = withRouter(
    React.createClass({
        componentDidMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route, 
            this.routerWillLeave
        )
        },

        routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        if (!this.state.isSaved)
            return '确认要离开？';
        },
    })
    )
```

## 6. react-redux  (provider和connect)


## 7. 引入antd
