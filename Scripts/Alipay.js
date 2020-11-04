const $ = new Env()
const zhuangyuan = "alipays://platformapi/startapp?appId=66666674"
const senlin = "alipay://platformapi/startapp?appId=60000002"

$.notify("", "蚂蚁森林", "收能量", senlin)
sleep(6000) // 1000=1S
$.notify("", "蚂蚁庄园", "喂小鸡", zhuangyuan)
$done()

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds) {
    }
}

function Env() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
        if (_isLoon) return $persistentStore.read(key)
    }
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
