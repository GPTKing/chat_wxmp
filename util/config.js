var env = 1 // 0正式环境 1测试环境
var config = {}
if (env === 0) {
    // 正式环境
    config = {
        'appID': 'wx3e4673eaece40b43',
        'appsecret': '',
        'token': ''
    }
} else {
    // 测试环境
    config = {
        'appID': 'wx3e4673eaece40b43',
        'appsecret': '',
        'token': ''
    }
}

module.exports = config