function form_generate_alert(alert_unique_class, alert_class, inner_mssg) {

    // get form-alert-area
    var alert_area = document.getElementById("form-alert-area");

    // get innerHTML of form-alert-area
    var alert_area_html = document.getElementById("form-alert-area").innerHTML;

    // generate new alert
    var new_alert = '';
    new_alert += '<div class="' + alert_unique_class + ' alert ' + alert_class + ' mb-3">';
    new_alert += inner_mssg;
    new_alert += '</div>';

    // check to make sure alert isn't already showing
    var divs = document.getElementsByClassName(alert_unique_class);
    if (divs.length == 0) {

        // append new alert to existing innerHTML
        alert_area_html = alert_area_html + new_alert;

        // replace innerHTML
        document.getElementById("form-alert-area").innerHTML = alert_area_html;

    }

    // make alert area visible
    alert_area.style.display = "block";

    // null return
    return;

}

function form_erase_alerts(alert_unqiue_class) {
    var divs = document.getElementsByClassName(alert_unqiue_class);
    if (divs.length > 0){
        // loop through them, in case there are more than one
        var i;
        for (i = 0; i < divs.length; i++) {
            // make alert invisible
            divs[i].style.display = "none";
        }
    }

    // null return
    return;

}