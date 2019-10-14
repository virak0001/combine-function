$(document).ready(function(){
    $("#btn").on('click', function(){
         var user = $('#username').val();
         var pass = $("#pass").val();
         isUser(user);
         isPass(pass);
    });
});

function setSuccess(success) {
    $("#"+ success).addClass("border-success").removeClass("border-danger");
}
function setError(error) {
    $("#"+ error).addClass("border-danger").removeClass("border-success");
}
function isUser(u){
    (u != "") ? (setSuccess('username'), $.notify("User Correct", "success")) : (setError('username'), $.notify("User Incorect", "error"));
}
function isPass(p) {
    (p != "") ? (setSuccess('pass'), $.notify("Password Correct", "success")) : (setError('pass'), $.notify("Password Incorrect", "error"));
}