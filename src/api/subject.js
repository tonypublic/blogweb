/**
 * Mocking client-server processing
 */
const subjectContent = {
  title: '',
  posted: '',
  tags: [],
  status: [],
  info: '',
  content: '',
  attachment: []
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