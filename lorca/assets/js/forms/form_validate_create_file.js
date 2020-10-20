function form_validate_create_file() {

    // Assume validation will pass
    var form_ok = 1;

    // File required
    var file_upload = document.getElementById("fileToUpload").files;
    if (file_upload.length == 0) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("fileToUpload").classList.add("is-invalid");
        form_generate_alert("alert-no-file", "alert-danger bsclassic-alert-danger", "A file upload is required.");
    } else {
        document.getElementById("fileTitle").classList.remove("is-invalid");
        form_erase_alerts("alert-no-file");
    }

    // Unique descriptor required
    var fileTitle_value = document.getElementById("fileTitle").value;
    var fileTitle_value_trimmed = fileTitle_value.trim();

    if (fileTitle_value_trimmed === "") {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("fileTitle").classList.add("is-invalid");
        form_generate_alert("alert-no-descriptor", "alert-danger bsclassic-alert-danger", "A unique descriptor is required.");
    } else {
        document.getElementById("fileTitle").classList.remove("is-invalid");
        form_erase_alerts("alert-no-descriptor");
    }
    
    // Unique descriptor must be 12 characters or longer
    if (fileTitle_value_trimmed.length < 12) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("fileTitle").classList.add("is-invalid");
        form_generate_alert("alert-short-descriptor", "alert-danger bsclassic-alert-danger", "The unique descriptor must be at least 12 characters in length.");
    } else {
        document.getElementById("fileTitle").classList.remove("is-invalid");
        form_erase_alerts("alert-short-descriptor");
    }

    // Checkbox 1 must be checked
    if($("#checkbox1").prop("checked") == false){
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox1").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-1", "alert-danger bsclassic-alert-danger", "Checkbox 1 must be checked.");
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

function checkbox_validate() {
    
    // Get checked properties of all checkboxes
    var cb1 = document.getElementById("checkbox1").checked;
    var cb2 = document.getElementById("checkbox2").checked;
    var cb3 = document.getElementById("checkbox3").checked;
    var cb4 = document.getElementById("checkbox4").checked;
    var cb5 = document.getElementById("checkbox5").checked;

    // Set "checked" and "disabled" as needed
    if (cb5 == true) {
        // checked
        document.getElementById("checkbox5").checked = true;
        document.getElementById("checkbox4").checked = true;
        document.getElementById("checkbox3").checked = true;
        document.getElementById("checkbox2").checked = true;
        document.getElementById("checkbox1").checked = true;
        // disabled
        document.getElementById("checkbox5").disabled = false;
        document.getElementById("checkbox4").disabled = true;
        document.getElementById("checkbox3").disabled = true;
        document.getElementById("checkbox2").disabled = true;
        document.getElementById("checkbox1").disabled = true;
    } else {
        if (cb4 == true) {
            // checked
            document.getElementById("checkbox5").checked = false;
            document.getElementById("checkbox4").checked = true;
            document.getElementById("checkbox3").checked = true;
            document.getElementById("checkbox2").checked = true;
            document.getElementById("checkbox1").checked = true;
            // disabled
            document.getElementById("checkbox5").disabled = false;
            document.getElementById("checkbox4").disabled = false;
            document.getElementById("checkbox3").disabled = true;
            document.getElementById("checkbox2").disabled = true;
            document.getElementById("checkbox1").disabled = true;
        } else {
            if (cb3 == true) {
                // checked
                document.getElementById("checkbox5").checked = false;
                document.getElementById("checkbox4").checked = false;
                document.getElementById("checkbox3").checked = true;
                document.getElementById("checkbox2").checked = true;
                document.getElementById("checkbox1").checked = true;
                // disabled
                document.getElementById("checkbox5").disabled = false;
                document.getElementById("checkbox4").disabled = false;
                document.getElementById("checkbox3").disabled = false;
                document.getElementById("checkbox2").disabled = true;
                document.getElementById("checkbox1").disabled = true;
            } else {
                if (cb2 == true) {
                    // checked
                    document.getElementById("checkbox5").checked = false;
                    document.getElementById("checkbox4").checked = false;
                    document.getElementById("checkbox3").checked = false;
                    document.getElementById("checkbox2").checked = true;
                    document.getElementById("checkbox1").checked = true;
                    // disabled
                    document.getElementById("checkbox5").disabled = false;
                    document.getElementById("checkbox4").disabled = false;
                    document.getElementById("checkbox3").disabled = false;
                    document.getElementById("checkbox2").disabled = false;
                    document.getElementById("checkbox1").disabled = true;
                } else {
                    if (cb1 == true) {
                        // checked
                        document.getElementById("checkbox5").checked = false;
                        document.getElementById("checkbox4").checked = false;
                        document.getElementById("checkbox3").checked = false;
                        document.getElementById("checkbox2").checked = false;
                        document.getElementById("checkbox1").checked = true;
                        // disabled
                        document.getElementById("checkbox5").disabled = false;
                        document.getElementById("checkbox4").disabled = false;
                        document.getElementById("checkbox3").disabled = false;
                        document.getElementById("checkbox2").disabled = false;
                        document.getElementById("checkbox1").disabled = false;
                    } else {
                        // checked
                        document.getElementById("checkbox5").checked = false;
                        document.getElementById("checkbox4").checked = false;
                        document.getElementById("checkbox3").checked = false;
                        document.getElementById("checkbox2").checked = false;
                        document.getElementById("checkbox1").checked = false;
                        // disabled
                        document.getElementById("checkbox5").disabled = false;
                        document.getElementById("checkbox4").disabled = false;
                        document.getElementById("checkbox3").disabled = false;
                        document.getElementById("checkbox2").disabled = false;
                        document.getElementById("checkbox1").disabled = false;
                    }
                }
            }
        }
    }
}

function checkbox_validate_2(x,y) {
    if ( document.getElementById(x).checked == true ) {
        document.getElementById(y).checked = false;
    } else {
        document.getElementById(y).checked = true;
    }
}