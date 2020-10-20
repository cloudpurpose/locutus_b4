function form_validate_update_user_data() {

    // Assume validation will pass
    var form_ok = 1;

    // There must be a selectPrivileged value other than '---'
    var e = document.getElementById("selectPrivileged");
    var selectPrivileged_val = e.options[e.selectedIndex].value;
    if ((selectPrivileged_val == '---') || (selectPrivileged_val == '')) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("selectPrivileged").classList.add("is-invalid");
        form_generate_alert("alert-selectPrivileged", "alert-danger bsclassic-alert-danger", "Indicate if user is reviewer or not.");
    } else {
        document.getElementById("selectPrivileged").classList.remove("is-invalid");
        form_erase_alerts("alert-selectPrivileged");
    }

    // There must be a selectAdmin value other than '---'
    var e = document.getElementById("selectAdmin");
    var selectAdmin_val = e.options[e.selectedIndex].value;
    if ((selectAdmin_val == '---') || (selectAdmin_val == '')) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("selectAdmin").classList.add("is-invalid");
        form_generate_alert("alert-selectAdmin", "alert-danger bsclassic-alert-danger", "Indicate if user is admin or not.");
    } else {
        document.getElementById("selectAdmin").classList.remove("is-invalid");
        form_erase_alerts("alert-selectAdmin");
    }

    // There must be a selectNotify value other than '---'
    var e = document.getElementById("selectNotify");
    var selectNotify_val = e.options[e.selectedIndex].value;
    if ((selectNotify_val == '---') || (selectNotify_val == '')) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("selectNotify").classList.add("is-invalid");
        form_generate_alert("alert-selectNotify", "alert-danger bsclassic-alert-danger", "Indicate if user recieves notifications or not.");
    } else {
        document.getElementById("selectNotify").classList.remove("is-invalid");
        form_erase_alerts("alert-selectNotify");
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

function checkbox_validate_2(x,y) {
    if ( document.getElementById(x).checked == true ) {
        document.getElementById(y).checked = false;
    } else {
        document.getElementById(y).checked = true;
    }
}

function checkbox_validate_multi(x, arr) {
    if ( document.getElementById(x).checked == true ) {
        var i;
        for (i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).checked = false;
        }
    }
}

$(document).ready(function() {

});