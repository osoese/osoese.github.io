// ***********************************
// Call REST API to retrieve coin info
// ***********************************
// Create the XHR object
function getCoinInfo() {
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
            console.log("AJAX is not supported. Please upgrade your browser!");
            console.log("AJAX is not supported. Please upgrade your browser!");
        }
    }

    // Get coin info
    $.ajax({
        url: 'http://api.egem.io',
        dataType: 'jsonp',
        crossDomain: true,
        type: 'GET',
        data: '/api/v1/egem_prices',
        success: function (coinData) {
            console.log('GET completed');

        }
    });
}