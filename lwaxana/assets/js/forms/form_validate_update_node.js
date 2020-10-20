function form_validate_update_node() {

    // Assume validation will pass
    var form_ok = 1;

    // Title required
    var nodeTitle_value = document.getElementById("nodeTitle").value;
    var nodeTitle_value_trimmed = nodeTitle_value.trim();
    if (nodeTitle_value_trimmed === "") {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("nodeTitle").classList.add("is-invalid");
        form_generate_alert("alert-no-descriptor", "alert-danger bsclassic-alert-danger", "A title is required.");
    } else {
        document.getElementById("nodeTitle").classList.remove("is-invalid");
        form_erase_alerts("alert-no-descriptor");
    }
    
    // Title must be 4 characters or longer
    if (nodeTitle_value_trimmed.length < 4) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("nodeTitle").classList.add("is-invalid");
        form_generate_alert("alert-short-descriptor", "alert-danger bsclassic-alert-danger", "The title must be at least 4 characters in length.");
    } else {
        document.getElementById("nodeTitle").classList.remove("is-invalid");
        form_erase_alerts("alert-short-descriptor");
    }

    // Checkbox 1 must be checked
    if($("#checkbox1").prop("checked") == false){
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox1").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-1", "alert-danger bsclassic-alert-danger", "Node author must have permission.");
    } else {
        document.getElementById("checkbox1").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-1");
    }

    // One of these must be checked: Checkbox 8, 9, or 10
    if (($("#checkbox8").prop("checked") == false) && ($("#checkbox9").prop("checked") == false) && ($("#checkbox10").prop("checked") == false)) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox8").classList.add("is-invalid");
        document.getElementById("checkbox9").classList.add("is-invalid");
        document.getElementById("checkbox10").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-8-9-10", "alert-danger bsclassic-alert-danger", "You must indicate if a link will be featured or not.");
    } else {
        document.getElementById("checkbox8").classList.remove("is-invalid");
        document.getElementById("checkbox9").classList.remove("is-invalid");
        document.getElementById("checkbox10").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-8-9-10");
    }

    // If checkbox 8 is checked, there must be a linkText value
    var linkText_value = document.getElementById("linkText").value;
    var linkText_value_trimmed = linkText_value.trim();
    if (($("#checkbox8").prop("checked") == true) && (linkText_value_trimmed == '')) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox8").classList.add("is-invalid");
        document.getElementById("linkText").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-8-no-linkText", "alert-danger bsclassic-alert-danger", "Provide text for the link.");
    } else {
        document.getElementById("checkbox8").classList.remove("is-invalid");
        document.getElementById("linkText").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-8-no-linkText");
    }
    
    // If checkbox 8 is checked, there must be a linkText value of 12 characters or longer
    if (($("#checkbox8").prop("checked") == true) && (linkText_value_trimmed.length < 12)) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox8").classList.add("is-invalid");
        document.getElementById("linkText").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-8-short-linkText", "alert-danger bsclassic-alert-danger", "The text for the link must be at least 12 characters in length.");
    } else {
        document.getElementById("checkbox8").classList.remove("is-invalid");
        document.getElementById("linkText").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-8-short-linkText");
    }

    // If checkbox 8 is checked, there must be a linkURL value
    var linkURL_value = document.getElementById("linkURL").value;
    var linkURL_value_trimmed = linkURL_value.trim();
    if (($("#checkbox8").prop("checked") == true) && (linkURL_value_trimmed == '')) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox8").classList.add("is-invalid");
        document.getElementById("linkURL").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-8-no-linkURL", "alert-danger bsclassic-alert-danger", "Provide a URL for the link.");
    } else {
        document.getElementById("checkbox8").classList.remove("is-invalid");
        document.getElementById("linkURL").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-8-no-linkURL");
    }
    
    // If checkbox 8 is checked, there must be a linkURL value of 12 characters or longer
    if (($("#checkbox8").prop("checked") == true) && (linkURL_value_trimmed.length < 6)) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox8").classList.add("is-invalid");
        document.getElementById("linkURL").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-8-short-linkURL", "alert-danger bsclassic-alert-danger", "The URL for the link must be at least 6 characters in length.");
    } else {
        document.getElementById("checkbox8").classList.remove("is-invalid");
        document.getElementById("linkURL").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-8-short-linkURL");
    }

    // If checkbox 9 is checked, there must be a selectFile value other than '---'
    var e = document.getElementById("selectFile");
    var selectFile_val = e.options[e.selectedIndex].value;
    if (($("#checkbox9").prop("checked") == true) && ((selectFile_val == '---') || (selectFile_val == ''))) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("checkbox9").classList.add("is-invalid");
        document.getElementById("selectFile").classList.add("is-invalid");
        form_generate_alert("alert-checkbox-9-selectFile", "alert-danger bsclassic-alert-danger", "Select a file.");
    } else {
        document.getElementById("checkbox9").classList.remove("is-invalid");
        document.getElementById("selectFile").classList.remove("is-invalid");
        form_erase_alerts("alert-checkbox-9-selectFile");
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
    
    // Get checked properties of checkboxes
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

function checkbox_validate_multi(x, arr) {
    if ( document.getElementById(x).checked == true ) {
        var i;
        for (i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).checked = false;
        }
    }
}

function toggle_link_fields() {
    // Get checked properties of checkboxes
    var cb8 = document.getElementById("checkbox8").checked;
    var cb9 = document.getElementById("checkbox9").checked;
    // Show or hide fields accordingly
    if (cb8 == true) {
        document.getElementById("link-fields").style.display = 'block';
        document.getElementById("file-fields").style.display = 'none';
    } else if (cb9 == true) {
        document.getElementById("link-fields").style.display = 'none';
        document.getElementById("file-fields").style.display = 'block';
    } else {
        document.getElementById("link-fields").style.display = 'none';
        document.getElementById("file-fields").style.display = 'none';
    }
}

function toggle_tag_fields() {
    // Get checked properties of checkboxes
    var cb11 = document.getElementById("checkbox11").checked;
    // Show or hide fields accordingly
    if (cb11 == true) {
        document.getElementById("tag-fields").style.display = 'block';
    } else {
        document.getElementById("tag-fields").style.display = 'none';
    }
}

function set_initial_tag_values(arr) {
    var opts = document.getElementById("selectTag").getElementsByTagName("option");
    if (opts !== '') {
        var i;
        for (i = 0; i < arr.length; i++) {
            var j;
            for (j = 0; j < opts.length; j++) {
                if (opts[j].value == arr[i]) {
                    opts[j]["selected"] = "selected";
                }
            }
        }
    }
}

var initial_tag_values = document.getElementById("initial-tag-values").getAttribute("numbers");

function set_initial_file_value(number) {
    var opts = document.getElementById("selectFile").getElementsByTagName("option");
    if (opts !== '') {
        var i;
        for (i = 0; i < opts.length; i++) {
            if (opts[i].value == number) {
                opts[i]["selected"] = "selected";
            }
        }
    }
}

var initial_file_value = document.getElementById("initial-file-value").getAttribute("number");

$(document).ready(function() {
    toggle_tag_fields();
    toggle_link_fields();
    if (initial_tag_values) {
        set_initial_tag_values(initial_tag_values);
    }   
    if (initial_file_value) {
        set_initial_file_value(initial_file_value);
    } 
});