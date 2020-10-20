function print_hero_alerts_based_on_group(web_location, dt) {
    
    /* get value for alert group */
    var grp = 'none';
    var aaExists = 0;
    var aa = document.getElementById("hero-alert-area");
    if (aa) {
        aaExists = 1;
        grp = aa.getAttribute("group");
    }
    
    /* get xml feed */
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", web_location + "?cache=" + dt, false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var x = xmlDoc.getElementsByTagName("alert");
    var defaultText = '<p>There are no alerts at this time.</p>';

    var alertCount = 0;

    if (x.length > 0) {
        
        // Assemble alert list
        var alertRow = '<div id="hero-alert-list">';

        for (i = 0; i < x.length; i++) {

            // Parse values from XML data
            var itemID = xmlDoc.getElementsByTagName("itemID")[i].childNodes[0].nodeValue;
            var customClass = xmlDoc.getElementsByTagName("customClass")[i].childNodes[0].nodeValue;
            var customStyle = xmlDoc.getElementsByTagName("customStyle")[i].childNodes[0].nodeValue;
            var faIcon = xmlDoc.getElementsByTagName("faIcon")[i].childNodes[0].nodeValue;
            var body = xmlDoc.getElementsByTagName("body")[i].childNodes[0].nodeValue;
            var fromDT = xmlDoc.getElementsByTagName("display")[i].getElementsByTagName("from")[0].childNodes[0].nodeValue;
            var untilDT = xmlDoc.getElementsByTagName("display")[i].getElementsByTagName("until")[0].childNodes[0].nodeValue;
            var alpha = xmlDoc.getElementsByTagName("audience")[i].getElementsByTagName("alpha")[0].childNodes[0].nodeValue;
            var beta = xmlDoc.getElementsByTagName("audience")[i].getElementsByTagName("beta")[0].childNodes[0].nodeValue;
            var gamma = xmlDoc.getElementsByTagName("audience")[i].getElementsByTagName("gamma")[0].childNodes[0].nodeValue;
            var delta = xmlDoc.getElementsByTagName("audience")[i].getElementsByTagName("delta")[0].childNodes[0].nodeValue;
            var theta = xmlDoc.getElementsByTagName("audience")[i].getElementsByTagName("theta")[0].childNodes[0].nodeValue;
            var omega = xmlDoc.getElementsByTagName("audience")[i].getElementsByTagName("omega")[0].childNodes[0].nodeValue;
            var hero = xmlDoc.getElementsByTagName("area")[i].getElementsByTagName("hero")[0].childNodes[0].nodeValue;
            var main = xmlDoc.getElementsByTagName("area")[i].getElementsByTagName("main")[0].childNodes[0].nodeValue;
            
            var answer = 'N';

            if (grp == "alpha") {
                answer = alpha;
            }
            if (grp == "beta") {
                answer = beta;
            }
            if (grp == "gamma") {
                answer = gamma;
            }
            if (grp == "delta") {
                answer = delta;
            }
            if (grp == "theta") {
                answer = theta;
            }
            if (grp == "omega") {
                answer = omega;
            }

            // Check dates
            if ( (fromDT < dt) && (untilDT > dt) ) {
                // Check group = Y
                if ( (answer.charAt(0) ==  'Y') || (answer.charAt(0) ==  'y') || (answer.charAt(0) ==  '1') ) {
                    // Check hero = Y
                    if ( (hero.charAt(0) ==  'Y') || (hero.charAt(0) ==  'y') || (hero.charAt(0) ==  '1') ) {
                        // Create alert item
                        if ((faIcon !== 'null') && (body !== 'null')) {
                            alertRow += '<div class="row alert alert-info ' + customClass + ' mb-3 mr-1 ml-1 alert-dismissible fade show" id="' + itemID + '" style="' + customStyle + '" role="alert">' ;
                            alertRow += '<div class="col" style="min-width: 45px; max-width: 60px;"><i class="fa ' + faIcon + ' fa-2x"></i></div>';
                            alertRow += '<div class="col">';
                            alertRow += body;
                            alertRow += '</div>';
                            alertRow += '</div>';
                            alertCount++;
                        } 
                    }
                }
            }
        }

        alertRow += '</ul>';

        // Print alerts or don't.
        if (aaExists == 1) {
            if (alertCount > 0) {
                document.getElementById("hero-alert-area").innerHTML = alertRow;
                document.getElementById("hero-alert-area").style.display = "block";
            } else {
                document.getElementById("hero-alert-area").innerHTML = defaultText;
            }
        }
        
    } else {

        if (aaExists == 1) {
            document.getElementById("hero-alert-area").innerHTML = defaultText;
        }

    }
}

$( document ).ready(function() {
    var dt = moment().tz("America/New_York").format('YYYYMMDDHHmmss');
    var web_location = "http://localhost:8080/alerts/feed.xml";
    print_hero_alerts_based_on_group(web_location, dt);
});