/**
 * Mocking client-server processing
 */
const userInfo = {
  uid: 10001,
  name: '隔壁老王',
  email: 'aaa@a.com',
  icon: 'http://n.sinaimg.cn/translate/20170317/yOGS-fycnyhk8443863.jpg',
  grade: 6,
  points: 2,
  subject: 123,
  comment: 123456,
  online: 1234569
}

export default {
  getUserInfo(cb) {
    setTimeout(() => cb(userInfo), 1000)
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