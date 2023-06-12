var user = document.querySelector('.noti .row');

var mail = document.querySelector('#mail');

var pass = document.querySelector('#pass');

console.log(mail);

console.log(pass);

var check = document.querySelector('.section1 .button');

var infor;

var check = () => {

    if(mail.value == '') {
        mail.focus();
        mail.placeholder = 'hãy nhập email của bạn';
        return false;
    } else if(mail.value > 0 || mail.value < 0) {
        mail.value = null;
        mail.focus();
        mail.placeholder = 'email không phải là 1 dãy số';
        return false;
    } else if(mail.value.lastIndexOf('@') == -1) {
        mail.value = null;
        mail.focus();
        mail.placeholder = 'email phải có kí tự @';
        return false;
    } else if(mail.value.lastIndexOf('gmail') == -1) {
        mail.value = null;
        mail.focus();
        mail.placeholder = 'email phải có đuôi gmail';
        return false;
    } 

    if(pass.value == '') {
        pass.focus();
        mail.placeholder = 'hãy nhập mật khẩu của bạn';
        return false;
    } else if(pass.value > 0 || pass.value < 0) {
        pass.value = null;
        pass.focus();
        pass.placeholder = 'mật khẩu không phải là 1 dãy số';
        return false;
    }

    infor = {
        mail : mail.value,
        pass : pass.value,
    }

    // localStorage.setItem('infor', JSON.stringify(infor));
    
    var block = document.querySelector('.background');
 
    block.classList.add('open');

    var write = document.querySelector('.noti .row');
    
    const noti = `
        Email bạn đã nhập là: ${infor.mail} <br>
        Mật khẩu bạn đã nhập là: ${infor.pass} 
    `;
    
    write.innerHTML = noti;
    
    document.getElementById('confirm').onclick = function () {
        document.querySelector('.background').classList.remove('open');
        // localStorage.removeItem('infor');
    }
}

// var i4 = JSON.parse(localStorage.getItem('infor'));




