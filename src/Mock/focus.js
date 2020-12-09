const Mock = require('mockjs');

function getRandomNumberByRange(start, end) {
    return Math.round(Math.random() * (end - start) + start)
}
export default [
    {
        url: '/focus/list',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: '公平正义',
                        img: `https://picsum.photos/257/160/?image=` + getRandomNumberByRange(0, 1084)
                    },
                    {
                        id: 2,
                        title: '诚信友爱',
                        img: `https://picsum.photos/257/160/?image=` + getRandomNumberByRange(0, 1084)
                    },
                    {
                        id: 3,
                        title: '和谐相处',
                        img: `https://picsum.photos/257/160/?image=` + getRandomNumberByRange(0, 1084)
                    }
                ]
            }
        }
    }
]
// `https://picsum.photos/257/160/?image=` + this.getRandomNumberByRange(0, 1084)
