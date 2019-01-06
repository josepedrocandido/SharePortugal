$(document).ready(function() {
    $("#signup_btn").click(function() {
        $("#main").animate({ left: "22.5%" }, 400);
        $("#main").animate({ left: "30%" }, 500);
        $("#loginform").css("visibility", "hidden");
        $("#loginform").animate({ left: "25%" }, 400);

        $("#signupform").animate({ left: "17%" }, 400);
        $("#signupform").animate({ left: "30%" }, 500);
        $("#signupform").css("visibility", "visible");
    });

    $("#login_btn").click(function() {
        $("#main").animate({ left: "77.5%" }, 400);
        $("#main").animate({ left: "70%" }, 500);
        $("#signupform").css("visibility", "hidden");
        $("#signupform").animate({ left: "75%" }, 400);

        $("#loginform").animate({ left: "83.5%" }, 400);
        $("#loginform").animate({ left: "70%" }, 500);
        $("#loginform").css("visibility", "visible");
    });
});


$(function() {

    var $locals = $('#locals');

    var $email = $('#email');
    var $password = $('#password');
    var $birthday = $('#birthday');
    var $citizenship = $('#citizenship');
    var $languages = $('#languages');
    var $citiesToShare = $('#citiesToShare');
    var $job = $('#job');
    var $aboutMe = $('#aboutMe');
    var $name = $('#name');
    var $localImage = $('#localImage');

    var $emailLogin = $('#emailLogin');
    var $passwordLogin = $('#passwordLogin');

    // $.ajax({
    //     type: 'GET',
    //     url: 'http://localhost:3000/local',
    //     success: function(locals) {
    //         $.each(locals, function(i, local) {
    //             $locals.append('<li>name:' + local.name + '</li>');
    //             $locals.append('<img src="../sharePortugal-api/' + local.localImage + '" height="42" width="42">');
    //         });
    //     }
    // });

    $('#createLocal').on('click', function() {

        var local = {
            email: $email.val(),
            password: $password.val(),
            birthday: $birthday.val(),
            citizenship: $citizenship.val(),
            languages: $languages.val(),
            citiesToShare: $citiesToShare.val(),
            job: $job.val(),
            aboutMe: $aboutMe.val(),
            name: $name.val(),
            localImage: $localImage.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/local/signup',
            data: local,
            success: function(newLocal) {
                alert('Local created successfully!');
            },
            error: function() {
                alert('Local creation error! Try again!');
            }
        }).done(function(response) {
            console.log(response);
            alert(response.message);
        });
    });


    $('#loginLocal').on('click', function() {
        var loginLocal = {
            email: $emailLogin.val(),
            password: $passwordLogin.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/local/login',
            data: loginLocal,
            success: function(login) {
                alert('Login was successfully!');
            },
            error: function() {
                alert('Login error! Try again!');
            }
        }).done(function(response) {
            alert(response.message);
            alert(response.token);
            $("#box").hide();
            $('#room').show();

        });
    });
});