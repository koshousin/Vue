## Vue router 总结
    使用须知:
        - 一般建立一个router文件夹 , 在入口文件导入
          时 ，导入文件夹即可.同时需要在 VM 配置对象
          中添加

    1 . 使用步骤
        - 定义路由组件 （在routes里定义）
        - 注册路由组件
        - 使用组件
            - 两个标签 ： router-link / router-view
            - 路由通信：
                1 . 借助 path 传递信息，并通过路由组件里
                    的 $roote 属性（params,query）获取
                2 . 借助 route-view 标签传递属性

    2 . 编程式导航
        - 借助 $rooter 对象的 push 、replace 、 back 实现页面的跳转

    3 . 路由组件的两个重要对象
         - $roote
         - $rooter

    注意：使用 route-link 里的 to 属性时 ,如果是
         模板字符串则需要外层嵌套引号


