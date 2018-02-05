/**
 * Mocking client-server processing
 */
const userInfo = {
  uid: 10001,
  name: '隔壁老王',
  email: 'aaa@a.com',
  headicon: 'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
  grade: 6,
  points: 2,
  subject: 123,
  comment: 123456,
  online: 1234569
}

export default {
  getUserInfo(uid) {
    userInfo.uid = uid
    return userInfo
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