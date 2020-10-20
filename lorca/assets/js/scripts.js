// INITIALIZE ALL BS4 TOOLTIPS
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// GET PAGE

function get_page(pagekey, base_path, folder) {
    if (folder != "") {folder = folder + '/'; }
    location.href = base_path + folder + 'read-page.php?page_key=' + pagekey;
    return false;
}

// GET EDITOR

function get_editor(username, base_path, folder) {
    if (folder != "") {folder = folder + '/'; }
    location.href = base_path + folder + 'read-editor.php?username=' + username;
    return false;
}

// GET MANAGER

function get_manager(username, base_path, folder) {
    if (folder != "") {folder = folder + '/'; }
    location.href = base_path + folder + 'read-manager.php?username=' + username;
    return false;
}

// GET FILE

function get_file(uuid, base_path, folder) {
    if (folder != "") {folder = folder + '/'; }
    location.href = base_path + folder + 'retrieve-secure-file.php?uuid=' + uuid;
    return false;
}

// GET NODE

function get_node(uuid, base_path, folder) {
    if (folder != "") {folder = folder + '/'; }
    location.href = base_path + folder + 'node.php?uuid=' + uuid;
    return false;
}

// GET RECORD

function get_record(uuid, base_path, folder) {
    if (folder != "") {folder = folder + '/'; }
    location.href = base_path + folder + 'record.php?uuid=' + uuid;
    return false;
}

// GET USER DATA

function get_user_data(uuid, base_path, folder) {
    if (folder != "") {folder = folder + '/'; }
    location.href = base_path + folder + 'user-data.php?user=' + uuid;
    return false;
}


// NAVBAR TOGGLE

function toggle_navbar_show() {
    if ($(window).width() > 992) {
        document.getElementById("navbarSupportedContent").classList.add("show");
    }
    if ($(window).width() <= 991) {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }
}

function toggle_navbar_mobile() {
    if ($(window).width() > 992) {
        document.getElementById("navbarSupportedContent").classList.remove("mobile");
    }
    if ($(window).width() <= 991) {
        document.getElementById("navbarSupportedContent").classList.add("mobile");
    }
}

$(window).on("resize", function() {
    toggle_navbar_mobile();
    toggle_navbar_show();
});

$( document ).ready(function() {
    toggle_navbar_mobile();
    toggle_navbar_show();
    // show main only after page loads
    $("#main").fadeIn(750);
});