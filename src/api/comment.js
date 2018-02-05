/**
 * Mocking client-server processing
 */
const commentItem = {
  subjectid: 1234,
  cid: 10001,
  authorid: 222,
  authorname: '隔壁老王',
  headicon: 'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
  grade: 6,
  floor: 1,
  postdate: '2018/1/6 12:20',
  content: '<p>那么如何访问这个 meta 字段呢？首先，我们称呼 routes 配置中的每个路由对象为 路由记录。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录 例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。 一个路由匹配到的所有路由记录会暴露为 $route 对象（还有在导航守卫中的路有对象）的 $route.matched 数组。</p><p><img class="img-fluid" src="http://demo.shapedtheme.com/kotha/wp-content/uploads/2015/07/photo-1428865798880-73444f4cbefc-1140x600.jpeg" alt="Responsive image" /></p><p>因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。</p>',
  reply: 123,
}

const replyItem = {
  cid: 10003,
  rid: 2378,
  authorid: 222,
  authorname: '楼下小张',
  headicon: 'http://img.woyaogexing.com/touxiang/katong/2014/0509/f947397e25c42e2c!200x200.jpg',
  grade: 6,
  floor: 1,
  postdate: '2018/1/6 12:20',
  content: '<p>Cras sit amet nibh libero, in gravida nulla. Donec lacinia congue felis in faucibus.</p>'
}

export default {
  getCommentList(selector) {
    // console.log(selector)
    var cp = new Object()
    cp.total = 12
    cp.commentlist = []
    for (var i = 0; i < cp.total; i++) {
      let ci = Object.assign({}, commentItem)
      ci.cid += i
      ci.floor = i+1
      cp.commentlist.push(ci)
    }
    cp.commentlist = cp.commentlist.slice(selector.start, selector.start + selector.amounts)
    return cp
  },
  getReplyList(selector) {
    var rp = new Object()
    rp.total = 18
    rp.replylist = []
    for (var i = 0; i < rp.total; i++) {
      let ri = Object.assign({}, replyItem)
      ri.rid += i
      ri.floor = i+1
      rp.replylist.push(ri)
    }
    rp.replylist = rp.replylist.slice(selector.start, selector.start + selector.amounts)
    return rp
  }
}  