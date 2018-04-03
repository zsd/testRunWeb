routes = [
    { // 作品首页
        path: '/',
        url: './index.html',
    },
    { // 关于应用
        path: '/about/',
        url: './pages/about.html',
    },
    { // 作品编辑
        path: '/workEdit/',
        url: './pages/workEdit.html',
    },
    { // 作品点评
        path: '/workRemark/',
        url: './pages/workRemark.html',
    },
    { // 作品
        path: '/work/',
        url: './pages/work.html',
    },
    { // 我的作品列表
        path: '/myWorks/',
        componentUrl: './pages/myWorks.html',
    },
    {
        path: '/product/:id/',
        componentUrl: './pages/product.html',
    },
    {
        path: '/user/',
        url: './pages/user.html',
    },
    // Page Loaders & Router
    {
        path: '/page-loader-template7/:user/:userId/:posts/:postId/',
        templateUrl: './pages/page-loader-template7.html',
    },
    {
        path: '/page-loader-component/:user/:userId/:posts/:postId/',
        componentUrl: './pages/page-loader-component.html',
    },
    {
        path: '/request-and-load/user/:userId/',
        async: function (routeTo, routeFrom, resolve, reject) {
            // Router instance
            var router = this;

            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            // User ID from request
            var userId = routeTo.params.userId;

            // Simulate Ajax Request
            setTimeout(function () {
                // We got user data from request
                var user = {
                    firstName: 'Vladimir',
                    lastName: 'Kharlampidi',
                    about: 'Hello, i am creator of Framework7! Hope you like it!',
                    links: [
                        {
                            title: 'Framework7 Website',
                            url: 'http://framework7.io',
                        },
                        {
                            title: 'Framework7 Forum',
                            url: 'http://forum.framework7.io',
                        },
                    ]
                };
                // Hide Preloader
                app.preloader.hide();

                // Resolve route to load page
                resolve(
                    {
                        componentUrl: './pages/request-and-load.html',
                    },
                    {
                        context: {
                            user: user,
                        }
                    }
                );
            }, 1000);
        },
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },
];
