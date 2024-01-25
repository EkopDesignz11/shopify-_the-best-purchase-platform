function auth(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
if(email=="Admin.shopify@gmail.com" && password=="1975")
{
   window.location.assign("AdminPage.html");
   alert("Entry successfully");
}
else{
    alert("invalid information");
    return;
}
}


















// // alert('Is Js Script')
// var email = document.forms['form']['email'];
// var pass = document.forms['form']['password'];


// var email_error = document.getElementById('email_error');
// var pass_error = document.getElementById('pass_error');

// email.addEventListener('textInput', email_Verify);
// password.addEventListener('textInput', pass_Verify);

// function validated(){
//     if(email.value.length < 9){
//       email.style.border = "1px solid red";
//       email_error.style.display = "block";
//       email.focus();
//       return false;
//     }

//     if(password.value.length < 6){
//       password.style.border = "1px solid red";
//       pass_error.style.display = "block";
//       password.focus();
//       return false;
//     }
  
//     function email_Verify(){
//         if (email.value.length >= 8) {
//             email.style.border = "1px solid silver";
//             email_error.style.display = "none";
//             return true;            
//         }
//     }
// }
