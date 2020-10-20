function get_alerts_based_on_group(web_location, dt) {
    
    /* get value for alert group */
    var grp = 'none';
    var aaExists = 0;
    var aa = document.getElementById("alert-area");
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

    xmlhttp.onload = function (e) {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                // console.log(xmlhttp.responseText);
                print_alerts_based_on_group(xmlhttp.responseXML, grp, dt, aaExists);
            } else {
                console.error(xmlhttp.statusText);
            }
        }
    };

    xmlhttp.ontimeout = function () {
        console.error("The request for " + url + " timed out.");
    };

    xmlhttp.onerror = function (e) {
        console.error(xmlhttp.statusText);
    };

    xmlhttp.open("GET", web_location + "?cache=" + dt, true);

    xmlhttp.timeout = 5000;

    xmlhttp.send(null); 
    
}

function print_alerts_based_on_group(xmlDoc, grp, dt, aaExists) {
    var x = xmlDoc.getElementsByTagName("alert");
    var defaultText = '<p>There are no alerts at this time.</p>';

    var alertCount = 0;

    if (x.length > 0) {
        
        // Assemble alert list
        var alertRow = '<div id="alert-list">';

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
                    // Check main = Y
                    if ( (main.charAt(0) ==  'Y') || (main.charAt(0) ==  'y') || (main.charAt(0) ==  '1') ) {
                        // Create alert item
                        if ((faIcon !== 'null') && (body !== 'null')) {
                            alertRow += '<div class="row alert alert-info ' + customClass + ' mb-3 mr-1 ml-1 alert-dismissible fade show" id="' + itemID + '" style="' + customStyle + '" role="alert">' ;
                            alertRow += '<div class="col" style="min-width: 25px; max-width: 40px;"><i class="fa ' + faIcon + '"></i></div>';
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
                document.getElementById("alert-area").innerHTML = alertRow;
                document.getElementById("alert-area").style.display = "block";
            } else {
                document.getElementById("alert-area").innerHTML = defaultText;
            }
        }
        
    } else {

        console.log("No data");
        if (aaExists == 1) {
            document.getElementById("alert-area").innerHTML = defaultText;
        }

    }
}

$( document ).ready(function() {
    var dt = moment().tz("America/New_York").format('YYYYMMDDHHmmss');
    // var web_location = "http://localhost:8080/_assets/alerts/feed.xml";
    var web_location = "https://forms.registrar.gatech.edu/grade-change/_assets/alerts/feed.xml";
    get_alerts_based_on_group(web_location, dt);
});