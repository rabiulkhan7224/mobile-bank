document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('input-number').value
    const pinNumber = document.getElementById('input-pin').value
    if (phoneNumber === '0177989' && pinNumber === '1234') {
        // console.log('all ok')

        window.location.href = '/home.html';

    } else {
        alert('please your enter currate number and pin')
    }


})