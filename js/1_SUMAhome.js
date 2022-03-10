console.log("--------------------------Home-------------------------------------------- ");
//toma la url del frame1 
chrome.storage.local.get('Paso', function(data) {
    if (data.Paso == 0) {
        alert("se cargo la informacion a la extension, saludos")

    }
});


console.log("-------- Home---------------- ");