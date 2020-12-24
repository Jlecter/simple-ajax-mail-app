$("#sendMail").on("click", function (){
    let email = $("#email").val().trim();
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let message = $("#message").val().trim();
    if (email === "") {
        $("#errorMessage").text("Please enter email")
        return false;
    }else if (name === "") {
        $("#errorMessage").text("Please enter name")
        return false;
    }else if (phone === "") {
        $("#errorMessage").text("Please enter phone")
        return false;
    }else if (message.length < 1) {
        $("#errorMessage").text("Please enter message")
        return false;
    }
    $("#errorMessage").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'email': email,
            'name': name,
            'phone': phone,
            'message': message
        },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if (!data) {
                $("#errorMessage").text("Sorry, some problems. Wait for updates!");
            }else {
                $("#mailForm").trigger("reset");
                $("#errorMessage").text("Your feedback was sent!");
            }
            $("#sendMail").prop("disabled", false);
        }
    });
});