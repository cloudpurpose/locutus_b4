
function highlight_search_results() {
    var elementExists = document.getElementById("srch-term");
    if (elementExists) {
        var criteria = document.getElementById("srch-term").value;
        var table_data = document.getElementsByClassName("searchable_data");
        var i;
        for (i = 0; i < table_data.length; i++) {

            // Get values
            var inner = table_data[i].innerHTML;

            // Match cases
            var inner_up = inner.toUpperCase();
            var criteria_up = criteria.toUpperCase();

            if (inner_up.includes(criteria_up)) {
                var highlighted_criteria = '<span class="found">' + criteria_up + '</span>';
                var changed_html = inner.replace(new RegExp(criteria, 'gi'), highlighted_criteria);
                document.getElementsByClassName("searchable_data")[i].innerHTML = changed_html;
            }
        }
    }
}

$( document ).ready(function() {
    highlight_search_results();
});