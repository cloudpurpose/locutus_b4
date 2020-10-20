function form_validate_annotate_record() {

    // Assume validation will pass
    var form_ok = 1;

    // Comment required
    var noteBody_value = document.getElementById("noteBody").value;
    var noteBody_value_trimmed = noteBody_value.trim();
    if (noteBody_value_trimmed === "") {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("noteBody").classList.add("is-invalid");
        form_generate_alert("alert-no-comment", "alert-danger bsclassic-alert-danger", "A comment is required.");
    } else {
        document.getElementById("noteBody").classList.remove("is-invalid");
        form_erase_alerts("alert-no-comment");
    }

    // Comment must be 4 characters or longer
    if (noteBody_value_trimmed.length < 4) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("noteBody").classList.add("is-invalid");
        form_generate_alert("alert-short-comment", "alert-danger bsclassic-alert-danger", "The comment must be at least 4 characters in length.");
    } else {
        document.getElementById("noteBody").classList.remove("is-invalid");
        form_erase_alerts("alert-short-comment");
    }

    // Comment must be 255 characters or shorter
    if (noteBody_value_trimmed.length > 255) {
        form_ok = 0;    // Indicates validation will fail
        document.getElementById("noteBody").classList.add("is-invalid");
        form_generate_alert("alert-long-comment", "alert-danger bsclassic-alert-danger", "The comment must be no more than 255 characters in length.");
    } else {
        document.getElementById("noteBody").classList.remove("is-invalid");
        form_erase_alerts("alert-long-comment");
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