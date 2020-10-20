function form_validate_reroute_record() {

    // Assume validation will pass
    var form_ok = 1;

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
    if (initial_viewer_values) {
        set_initial_viewer_values(initial_viewer_values);
    } 
});