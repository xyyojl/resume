var APP_ID = 'QQ1Nqrp88ugKFRtId9KknVKl-gzGzoHsz';
var APP_KEY = 'Jgi6JnSQIp2aixTwjHEi12o1';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (messages) {
    //messages 是一个数组
    let array = messages.map(item=>item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}：${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    });
    //下面两个东西都没有用
}).then(function() {
  // 更新成功
}, function (error) {
  // 异常处理
});

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('textarea[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        // window.location.reload()
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}：${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('textarea[name=content]').value = ''
        myForm.querySelector('input[name=name]').value = ''
    })
})