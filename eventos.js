var vTipoLinea = null;
var vIdentificacion = null;
var vLineaTelefono = null;
var vReclamo = null;

//Paso 0
chrome.storage.local.set({ 'Paso': 0 }, function() {
    console.log("almacenado Paso como: " + 0);
});


//Se lanza cuando una pestaña se actualiza
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.local.get('Paso', function(data) {
        //____________________________________HOME________________________________   

        //HOME home paso 1

        if (changeInfo.url.includes("https://ingenieriadenegocios.000webhostapp.com/power/")) {
            if (tabId.status = "complete") {
                console.log('Ingreso a Home');

                chrome.tabs.executeScript(tabId, {
                    file: 'js/1_SUMAhome.js'
                })
            }
        }


    });
});