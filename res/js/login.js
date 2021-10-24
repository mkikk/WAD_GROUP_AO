$(function() {
   $("#submitButton").on('click', function() {
        sessionStorage.setItem('password', $("#Password").val());
        sessionStorage.setItem('email', $("#Email").val());
        sessionStorage.setItem('username', $("#Username").val());
   });
   
});

