setInterval(function() {
    var body = document.getElementById('green-flag');
    if (body) {
        body.removeAttribute('id');
    }
}, 10000);