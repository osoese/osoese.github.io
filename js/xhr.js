// ***********************************
// Call REST API to retrieve coin info
// ***********************************
/*function getCoinInfo() {
    var xhr = new XMLHttpRequest();
    var url = 'http://api.egem.io/api/v1/egem_prices';

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var coinArr = JSON.parse(this.responseText);
            parsedResponse(coinArr);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

    function parsedResponse(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += 'arr[i]' + arr[i].display;
        }
        document.getElementById("id01").innerHTML = out;
    }
    /*try {
        // Compliant browsers
        xhr = new XMLHttpRequest();
    }
    catch (e) {
        try {
            // IE7+
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            // AJAX is not supported
            console.log("AJAX is not supported. Please upgrade your browser!");
        }
    }
    */
$(document).ready(function () {
    // Get coin info
    $.ajax({
        url: 'http://api.egem.io',
        dataType: 'jsonp',
        crossDomain: true,
        type: 'GET',
        data: '/api/v1/egem_prices'}).then(function(coinData) {
            $('.block-height').append(coinData.BLOCK_HEIGHT);
            $('.total-egem-supply').append(coinData.TOTAL_EGEM_SUPPLY);
            $('.market-cap-usd').append(coinData.MARKET_CAP_USD);
            $('.average-usd').append(coinData.AVERAGEUSD);
        });
    });