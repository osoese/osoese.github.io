// Call REST API to retrieve coin info

function getCoinInfo() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.egem.io/api/v1/egem_prices';

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var coinResponse = JSON.parse(this.responseText);
            document.getElementById('block-height').innerHTML = coinResponse.BLOCK_HEIGHT;
            document.getElementById('total-egem-supply').innerHTML = coinResponse.TOTAL_EGEM_SUPPLY;
            document.getElementById('market-cap-usd').innerHTML = coinResponse.MARKET_CAP_USD;
            document.getElementById('average-usd').innerHTML = coinResponse.AVERAGEUSD;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

    try {
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
            alert('AJAX is not supported. Please upgrade your browser!');
        };
    };
};