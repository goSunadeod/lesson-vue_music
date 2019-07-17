var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT || config.build.port

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg' // 原api
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
}),
apiRoutes.get('/getDiscSongList', function (req, res) {
var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg' // 原api
axios.get(url, {
  headers: {
    referer: 'https://c.y.qq.com/',
    host: 'c.y.qq.com'
  },
  params: req.query
}).then((response) => {
  res.json(response.data)
}).catch((e) => {
  console.log(e)
})
}),
apiRoutes.get('/music', function (req, res) {
var url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg' // 原api
axios.get(url, {
  headers: {
    referer: 'https://c.y.qq.com/',
    host: 'c.y.qq.com'
  },
  params: req.query
}).then((response) => {
  res.json(response.data)
}).catch((e) => {
  console.log(e)
})
}),
apiRoutes.get('/getSearch', function (req, res) {
var url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
axios.get(url, {
  headers: {
    referer: 'https://m.y.qq.com/',
    Origin: 'https://m.y.qq.com'
  },
  params: req.query
}).then((response) => {
  res.json(response.data)
}).catch((e) => {
  console.log(e)
})
}),
apiRoutes.get('/lyric', function (req, res) {
    var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e)
    })
  })

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

// 端口9000 在index.js build 下配置
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
