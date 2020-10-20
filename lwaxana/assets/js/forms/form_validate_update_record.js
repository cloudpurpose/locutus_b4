function form_validate_update_record() {

    // Assume validation will pass
    var form_ok = 1;

    // Subject must be 3 characters or longer
    /*
    var recordSubject_value = document.getElementById("recordSubject").value;
    var recordSubject_value_trimmed = recordSubject_value.trim();
    if (recordSubject_value_trimmed.length < 3) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordSubject").classList.add("is-invalid");
        form_generate_alert("alert-Subject", "alert-danger bsclassic-alert-danger", "Subject must be at least 3 characters in length.");
    } else {
        document.getElementById("recordSubject").classList.remove("is-invalid");
        form_erase_alerts("alert-Subject");
    }
    */

    // GTID must begin with '9'
    var recordGTID_value = document.getElementById("recordGTID").value;
    var recordGTID_value_trimmed = recordGTID_value.trim();
    if (recordGTID_value_trimmed.charAt(0) != '9') {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordGTID").classList.add("is-invalid");
        form_generate_alert("alert-GTID-nine", "alert-danger bsclassic-alert-danger", "GTID must begin with \'9.\'");
    } else {
        document.getElementById("recordGTID").classList.remove("is-invalid");
        form_erase_alerts("alert-GTID-nine");
    }

    // GTID must be numeric
    if (isNaN(recordGTID_value_trimmed) != false) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordGTID").classList.add("is-invalid");
        form_generate_alert("alert-GTID-numeric", "alert-danger bsclassic-alert-danger", "GTID must be numeric.");
    } else {
        document.getElementById("recordGTID").classList.remove("is-invalid");
        form_erase_alerts("alert-GTID-numeric");
    }

    // GTID must be exactly 9 characters
    if (recordGTID_value_trimmed.length != 9) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordGTID").classList.add("is-invalid");
        form_generate_alert("alert-GTID", "alert-danger bsclassic-alert-danger", "GTID must be 9 characters in length.");
    } else {
        document.getElementById("recordGTID").classList.remove("is-invalid");
        form_erase_alerts("alert-GTID");
    }

    // Field01 (Semester) must be 6 characters or longer
    var recordField01_value = document.getElementById("recordField01").value;
    var recordField01_value_trimmed = recordField01_value.trim();
    if (recordField01_value_trimmed.length < 6) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField01").classList.add("is-invalid");
        form_generate_alert("alert-Field01", "alert-danger bsclassic-alert-danger", "Semester must be at least 6 characters in length.");
    } else {
        document.getElementById("recordField01").classList.remove("is-invalid");
        form_erase_alerts("alert-Field01");
    }

    // Field02 (CRN) must be numeric
    var recordField02_value = document.getElementById("recordField02").value;
    var recordField02_value_trimmed = recordField02_value.trim();
    if (isNaN(recordField02_value_trimmed) != false) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField02").classList.add("is-invalid");
        form_generate_alert("alert-CRN-numeric", "alert-danger bsclassic-alert-danger", "CRN must be numeric.");
    } else {
        document.getElementById("recordField02").classList.remove("is-invalid");
        form_erase_alerts("alert-CRN-numeric");
    }

    // Field02 (CRN) must be exactly 5 characters
    if (recordField02_value_trimmed.length != 5) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField02").classList.add("is-invalid");
        form_generate_alert("alert-CRN", "alert-danger bsclassic-alert-danger", "CRN must be 5 characters in length.");
    } else {
        document.getElementById("recordField02").classList.remove("is-invalid");
        form_erase_alerts("alert-CRN");
    }

    // Field03 must be 6 characters or longer
    var recordField03_value = document.getElementById("recordField03").value;
    var recordField03_value_trimmed = recordField03_value.trim();
    if (recordField03_value_trimmed.length < 4) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField03").classList.add("is-invalid");
        form_generate_alert("alert-Field03", "alert-danger bsclassic-alert-danger", "Subject and course number must be at least 6 characters in length.");
    } else {
        document.getElementById("recordField03").classList.remove("is-invalid");
        form_erase_alerts("alert-Field03");
    }

    /*
    // Field04 must be 4 characters or longer
    var recordField04_value = document.getElementById("recordField04").value;
    var recordField04_value_trimmed = recordField04_value.trim();
    if (recordField04_value_trimmed.length < 4) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField04").classList.add("is-invalid");
        form_generate_alert("alert-Field04", "alert-danger bsclassic-alert-danger", "Field 04 must be at least 4 characters in length.");
    } else {
        document.getElementById("recordField04").classList.remove("is-invalid");
        form_erase_alerts("alert-Field04");
    }
    */

    // Field05 must be 4 characters or longer
    var recordField05_value = document.getElementById("recordField05").value;
    var recordField05_value_trimmed = recordField05_value.trim();
    if (recordField05_value_trimmed.length < 4) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField05").classList.add("is-invalid");
        form_generate_alert("alert-Field05", "alert-danger bsclassic-alert-danger", "Course title must be at least 4 characters in length.");
    } else {
        document.getElementById("recordField05").classList.remove("is-invalid");
        form_erase_alerts("alert-Field05");
    }

    // Field06 must be 2 characters or longer
    var recordField06_value = document.getElementById("recordField06").value;
    var recordField06_value_trimmed = recordField06_value.trim();
    if (recordField06_value_trimmed.length < 2) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField06").classList.add("is-invalid");
        form_generate_alert("alert-Field06", "alert-danger bsclassic-alert-danger", "Student first name must be at least 2 characters in length.");
    } else {
        document.getElementById("recordField06").classList.remove("is-invalid");
        form_erase_alerts("alert-Field06");
    }

    // Field07 must be 2 characters or longer
    var recordField07_value = document.getElementById("recordField07").value;
    var recordField07_value_trimmed = recordField07_value.trim();
    if (recordField07_value_trimmed.length < 2) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField07").classList.add("is-invalid");
        form_generate_alert("alert-Field07", "alert-danger bsclassic-alert-danger", "Student last name must be at least 2 characters in length.");
    } else {
        document.getElementById("recordField07").classList.remove("is-invalid");
        form_erase_alerts("alert-Field07");
    }

    // Field08 must be 1 character or longer
    var recordField08_value = document.getElementById("recordField08").value;
    var recordField08_value_trimmed = recordField08_value.trim();
    if (recordField08_value_trimmed.length < 1) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordField08").classList.add("is-invalid");
        form_generate_alert("alert-Field08", "alert-danger bsclassic-alert-danger", "'Change grade to' must be at least 1 character in length.");
    } else {
        document.getElementById("recordField08").classList.remove("is-invalid");
        form_erase_alerts("alert-Field08");
    }

    // Body must be 4 characters or longer
    var recordBody_value = document.getElementById("recordBody").value;
    var recordBody_value_trimmed = recordBody_value.trim();
    if (recordBody_value_trimmed.length < 4) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("recordBody").classList.add("is-invalid");
        form_generate_alert("alert-Body", "alert-danger bsclassic-alert-danger", "Reason must be at least 4 characters in length.");
    } else {
        document.getElementById("recordBody").classList.remove("is-invalid");
        form_erase_alerts("alert-Body");
    }

    // There must be a selectPhase value other than '---'
    var e = document.getElementById("selectPhase");
    var selectPhase_val = e.options[e.selectedIndex].value;
    if ((selectPhase_val == '---') || (selectPhase_val == '')) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("selectPhase").classList.add("is-invalid");
        form_generate_alert("alert-selectPhase", "alert-danger bsclassic-alert-danger", "Select a phase.");
    } else {
        document.getElementById("selectPhase").classList.remove("is-invalid");
        form_erase_alerts("alert-selectPhase");
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

function set_initial_phase_value(str) {
    var opts = document.getElementById("selectPhase").getElementsByTagName("option");
    if (opts !== '') {
        var j;
        for (j = 0; j < opts.length; j++) {
            if (opts[j].value == str) {
                opts[j]["selected"] = "selected";
            }
        }
    }
}

var initial_phase_value = document.getElementById("initial-phase-value").getAttribute("numbers");

function set_initial_viewer_values(input_arr) {
    var arr = input_arr.split(',');
    var opts = document.getElementById("selectViewer").getElementsByTagName("option");
    if (opts !== '') {
        var i;
        for (i = 0; i < arr.length; i++) {
            var j;
            for (j = 0; j < opts.length; j++) {
                // add single quotes to opt values to match the single quotes on the array values
                if ('\'' + opts[j].value + '\'' == arr[i]) {
                    opts[j]["selected"] = "selected";
                }
            }
        }
    }
}

var initial_viewer_values = document.getElementById("initial-viewer-values").getAttribute("usernames");

$(document).ready(function() {
    if (initial_phase_value) {
        set_initial_phase_value(initial_phase_value);
    }   
    if (initial_viewer_values) {
        set_initial_viewer_values(initial_viewer_values);
    } 
});