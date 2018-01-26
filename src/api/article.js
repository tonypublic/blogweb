/**
 * Mocking client-server processing
 */
const articleListPackage = {
  totle: 13,
  articlelist: [
    {
      id: 123,
      type: 'v',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第一个测试项目这是第一个测试项目这是第一个测试项目',
      istop: true,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '木作'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 124,
      type: 'v',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第二个测试项目',
      istop: true,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '木作'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 125,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 126,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 127,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 128,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 129,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 130,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 131,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 132,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 133,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 134,
      type: 'p',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第三个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      tags: ['家装', '电子', 'KIDS'],
      views: '10万',
      comments: '1000'
    },
    {
      id: 135,
      type: 'v',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第四个测试项目',
      istop: false,
      postdate: '2018/1/4',
      info:
        '目前在响应式设计中最流行的技术，就是对于不同浏览器和设备的动态布局设计。',
      views: '10万',
      comments: '1000'
    }]
}

export default {
  getArticleList(selector, cb) {
    // console.log(selector)
    var a = new Object()
    a.totle = articleListPackage.totle
    a.articlelist = articleListPackage.articlelist.slice(selector.start, selector.start + selector.amounts)
    setTimeout(() => cb(a), 200)
  }

  // 	buyProducts(products, cb, errorCb) {
  // 		setTimeout(() => {
  // 			// simulate random checkout failure.
  // 			(Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
  // 				? cb()
  // 				: errorCb()
  // 		}, 100)
  // 	}
}