const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                  avatar: 'https://nos.netease.com/mail-online/5a480f7f09e60760807e74f14d1ee7d4/mail180x180.jpg',
                    slogan: 'The way up is not crowded, and most chose ease.',
                    name: 'yingzhixiaoyi′blog',
                    domain: 'http://yingzhixiaoyi.gitee.io/',
                    notice: '点滴积累，未来可期',
                    desc: '一个It技术的探索者'
                }
            }
        }
    },
    // 站点社交信息
    {
        url: '/social',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'QQ',
                        icon: 'iconqq',
                        color: '#1AB6FF ',
                        href: 'https://www.zhihu.com/people/ying-zhi-xiao-yi'
                    },
                    {
                        id: 2,
                        title: 'Gitee',
                        icon: 'icongitee',
                        color: '#d81e06',
                      href: 'http://yingzhixiaoyi.gitee.io/'
                    },
                    {
                        id: 3,
                        title: 'GitHub',
                        icon: 'icongithub',
                        color: '',
                        href: 'https://github.com/yingzhixiaoyi'
                    },
                    {
                        id: 4,
                        title: 'csdn',
                        icon: 'iconcsdn',
                        color: 'red',
                        href: 'https://www.zhihu.com/people/ying-zhi-xiao-yi'
                    }
                ]
            }
        }
    }
]
