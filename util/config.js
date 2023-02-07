var env = 1 // 0正式 1测试
var config = {}
if (env === 0) {
    // 正式
    config = {
        'appID': 'wx3e4673eaece40b43',
        'appsecret': '7f55b61a28405e4bde0bf26f23769276',
        'token': '0nxz6oCCcJnlYCyO'
    }
} else {
    // 测试
    config = {
        'appID': 'wx3e4673eaece40b43',
        'appsecret': '7f55b61a28405e4bde0bf26f23769276',
        'token': '0nxz6oCCcJnlYCyO' // 与access_token不一样，这个是固定的
    }
}

module.exports = config