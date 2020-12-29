const apiAddress = "https://burhan-atesalp.be/wm/FitnessApp/ShredderWEBAPI.php?";

// het bestand op jouw server (zie les 2 : php).
var opties = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "no-cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "omit", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};

function LocatieToevoegen(loc, lat, lon) {
    // var data = {
    //     "format": "json",
    //     "title": title,
    //     "latitude": lat,
    //     "longitude": lon,
    // };

    // app.request.postJSON({
    //     url: apiAddress + "m=LocatieToevoegen",
    //     crossDomain: true,
    //     data: data,
    //     withCredentials: false,
    //     success: function (responseData, textStatus, jqXHR) {
    //         var jsonRes = JSON.parse(responseData);

    //         if (jsonRes["data"].indexOf("db error") > -1) {
    //             app.dialog.alert('Er is iets fout met de database. Contacteer de database beheerder.');
    //         } else {
    //             app.dialog.alert(jsonRes["data"]);
    //         }
    //     },
    //     error: function (responseData, textStatus, errorThrown) {
    //         console.log("dUpdatePersoonlijkeGegevens error function");
    //         app.dialog.alert('Verbinding met de server is niet gelukt. Probeer later nog eens.');
    //     }
    // });


     // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    locatie: loc,
    latitude: lat,
    longitude: lon,
  });

  // test de api
  fetch(apiAddress + "m=LocatieToevoegen", opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
        var jsonRes = JSON.parse(responseData);
        app.dialog.alert(jsonRes['data']);

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert("fout : " + error);
    });

  return true;
}