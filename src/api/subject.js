/**
 * Mocking client-server processing
 */
const articleListPackage = {
  total: 13,
  articlelist: [
    {
      id: 123,
      type: 'v',
      imglink:
        'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-768x550.jpg',
      duration: '15:00',
      title: '这是第一个测试项目这是第一个测试项目这是第一个测',
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

const subjectListPackage = {
  total: 23,
  subjectlist: [
    {
      id: 123,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 124,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 125,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 126,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 127,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 128,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 129,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 130,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 131,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 132,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 133,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 134,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 135,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 136,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 137,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 138,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 139,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 140,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 141,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 142,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 143,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 144,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
    {
      id: 145,
      category: '留言',
      title: '这是第一个测试项目这个测试项目这是第一个测',
      meta: ['img'],
      tags: ['精','分'],
      authorid: 333,
      author: '隔壁老王老王',
      headicon:
        'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
      grade: 6,
      postdate: '2018/1/26',
      replydate: '1小时前',
      views: '10万',
      comments: '1000'
    },
  ]
}

export default {
  //获取博客文章列表
  getArticleList(selector) {
    // console.log(selector)
    var ap = new Object()
    ap.total = articleListPackage.total
    ap.articlelist = articleListPackage.articlelist.slice(selector.start, selector.start + selector.amounts)
    return ap
  },
  //获取社区主题列表
  getSubjectList(selector) {
    // console.log(subjectListPackage)
    var sp = new Object()
    sp.total = subjectListPackage.total
    sp.subjectlist = subjectListPackage.subjectlist.slice(selector.start, selector.start + selector.amounts)
    return sp
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