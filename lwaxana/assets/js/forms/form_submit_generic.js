function form_submit_generic() {
    
    // Hide the form while it's processing
    $("#form-area").hide();

    // Show the "Form Processing. Please wait." message
    $("#form-processing-area").show();

    // Hide any alerts currently showing
    var alerts = document.getElementsByClassName("alert");
    var i;
    for (i = 0; i < alerts.length; i++) {
        alerts[i].style.display = 'none';
    }

    return true;
};