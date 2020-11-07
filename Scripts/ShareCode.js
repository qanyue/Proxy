const $ = new Env()

const bean_ShareCode = "http://api.turinglabs.net/api/v1/jd/bean/create/olmijoxgmjutyw3xraw4bu7jkcdvszaezqfffiq/"
const farm_ShareCode = "http://api.turinglabs.net/api/v1/jd/farm/create/118ef90ea2be4106ab45f3ff31c2a8f1/"
const pet_ShareCode = "http://api.turinglabs.net/api/v1/jd/pet/create/MTAxODc2NTEzNTAwMDAwMDAyNzQ1OTEzOQ==/"

$.notify("京东", "种豆得豆", "上传您的互助码", bean_ShareCode)
$.notify("京东", "东东农场", "上传您的互助码", farm_ShareCode)
$.notify("京东", "东东萌宠", "上传您的互助码", pet_ShareCode)
$done()

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
