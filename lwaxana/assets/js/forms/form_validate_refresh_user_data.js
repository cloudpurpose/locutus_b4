function form_validate_refresh_user_data() {

    // Assume validation will pass
    var form_ok = 1;

    // Checkbox 1 must be checked
    if($("#checkbox1").prop("checked") == false){
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox1").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-1", "alert-danger bsclassic-alert-danger", "You cannot refresh this user without indicating your sureness.");
    } else {
        document.getElementById("checkbox1").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-1");
    }

    // Validation fails
    if (form_ok == 0) {
        event.preventDefault();
        return false;
    }

    // Validation passes
    if (form_ok == 1) {
        form_submit_generic();
        return true;
    }
    
};

function checkbox_validate(x,y) {
    if ( document.getElementById(x).checked == true ) {
        document.getElementById(y).checked = false;
    } else {
        document.getElementById(y).checked = true;
    }
}