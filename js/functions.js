// Call coin info API
const http = new XMLHttpRequest;
const url = 'http://api.egem.io/api/v1/egem_prices';

http.open("GET", url);
http.send();

http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(http.responseText)
    }
}

// Smooth page scrolling
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 2;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
}

// jQuery pop-up handlers
$(document).ready(function () {
    $("#showSongs").click(function () {
        $("#lockout").show(0);
        $("#songs").fadeIn(500);
    });
    $("#hideSongs").click(function () {
        $("#songs").fadeOut(500);
        $("#lockout").hide(0);
    });
    $("#showSetLists").click(function () {
        $("#lockout").show(0);
        $("#setLists").fadeIn(500);
    });
    $("#hideSetLists").click(function () {
        $("#setLists").fadeOut(500);
        $("#lockout").hide(0);
    });
    $("#showMailingList").click(function () {
        $("#lockout").show(0);
        $("#mailingList").fadeIn(500);
    });
    $("#hideMailingList").click(function () {
        $("#mailingList").fadeOut(500);
        $("#lockout").hide(0);
    });
    $("#showQuincy").click(function (divId) {
        $("#lockout").show(0);
        $("#quincy").fadeIn(750);
    });
    $("#hideQuincy").click(function (divId) {
        $("#quincy").fadeOut(500);
        $("#lockout").hide(0);
    });
    $("#showMatt").click(function (divId) {
        $("#lockout").show(0);
        $("#matt").fadeIn(750);
    });
    $("#hideMatt").click(function (divId) {
        $("#matt").fadeOut(500);
        $("#lockout").hide(0);
    });
    $("#showTracy").click(function (divId) {
        $("#lockout").show(0);
        $("#tracy").fadeIn(750);
    });
    $("#hideTracy").click(function (divId) {
        $("#tracy").fadeOut(500);
        $("#lockout").hide(0);
    });
    $("#showEric").click(function (divId) {
        $("#lockout").show(0);
        $("#eric").fadeIn(750);
    });
    $("#hideEric").click(function (divId) {
        $("#eric").fadeOut(500);
        $("#lockout").hide(0);
    });
    $("#submitToMailer").click(function () {
        $(".AJAXResponse").delay(3000).fadeOut(1000);
    });
});
