var socket = io();

socket.on('connect', function () {
    var name = prompt('반갑습니다!', '');

    if (!name) {
        name = '익명';
    }
    socket.emit('newUser', name);
})

socket.on('update', function (data) {
    var chat = document.getElementById('chat');
    var time = new Date();
    console.log('time :', time);
    var message = document.createElement('div');
    var node = document.createTextNode(`${data.name}: ${data.message} 시간 : ${time}`);
    console.log('node : ', node);
    var className = '';

    switch (data.type) {
        case 'message':
            className = 'other';
            break;

        case 'connect':
            className = 'connect';
            break;
    };

    message.classList.add(className);
    message.appendChild(node);
    chat.appendChild(message);
});

function send() {
    var message = document.getElementById('test').value;

    document.getElementById('test').value = '';

    var chat= document.getElementById('chat');
    var msg = document.createElement('div');
    var time = new Date();
    var node= document.createTextNode(' 보낸시간 : ' + time + message);
    msg.classList.add('me');
    msg.appendChild(node);
    var time = new Date();
    chat.appendChild(msg);

    socket.emit('message', {
        type   : 'message',
        message: message, 
    });
}