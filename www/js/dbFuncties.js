var apiAddress = "https://burhan-atesalp.be/wm/FitnessApp/ShredderAPI.php?";

var opties = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "omit", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};

function GetLocatiesFromDB() {
  // de data opvragen van de andere server (zie les 2)

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "sportLocaties",
    bewerking: "get"
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      var list = responseData.data;

      if (list.length > 0) {

        // // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
        // let tlines = "";
        // for (let i = 0, len = list.length; i < len; i++) {
        //   tlines += `<div class='row'><span class='col'>${list[i].PR_naam}</span><span class='col'>${ list[i].prijs}</span><button onClick='sendAjax(${list[i].PR_ID});' class='button button-fill button-raised button-small color-orange col'>Verwijder</button></div>`;
        // }

        // $$("#pList").html(tlines);

        console.log(list);
        placesVirtualList.deleteAllItems()
        for (const l of list) {
          placesVirtualList.appendItem(l);
        }
        placesVirtualList.update()

      } else {
        app.dialog.alert("Locaties konden niet opgevraagd worden");
      }

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert("fout : " + error);
    });

  return true;
}

function LocatieToevoegen(loc, lat, lon) {

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "sportLocaties",
    bewerking: "addLocatie",
    locatie: loc,
    latitude: lat,
    longitude: lon,
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {

      if (responseData.status === "fail") {
        app.dialog.alert("Sorry, probeer nog een keer met meer data ...", responseData.error);
      } else {
        app.dialog.alert("ok", "Locatie toegevoegd");
      }
      // refresh de lijst
      GetLocatiesFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Toevoegen is niet gelukt");
    });

  return true;
}

function LocatieVerwijderen(id) {
  // fetch request opzetten om een item te verwijderen.
  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "sportLocaties",
    bewerking: "delete",
    id: id
  });

  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      app.dialog.alert("Locatie verwijderd", "Doei...");
      // refresh de lijst
      GetLocatiesFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Item toegevoegd");
    });

}

function GetBerekeningenFromDB() {
  // de data opvragen van de andere server (zie les 2)

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "mijnLichaam",
    bewerking: "get"
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      var list = responseData.data;

      if (list.length > 0) {

        // // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
        // let tlines = "";
        // for (let i = 0, len = list.length; i < len; i++) {
        //   tlines += `<div class='row'><span class='col'>${list[i].PR_naam}</span><span class='col'>${ list[i].prijs}</span><button onClick='sendAjax(${list[i].PR_ID});' class='button button-fill button-raised button-small color-orange col'>Verwijder</button></div>`;
        // }

        // $$("#pList").html(tlines);

        console.log(list);
        mijnLichaamVirtualList.deleteAllItems()
        for (const l of list) {
          mijnLichaamVirtualList.appendItem(l);
        }
        mijnLichaamVirtualList.update()

      } else {
        app.dialog.alert("Berekeningen konden niet opgevraagd worden");
      }

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert("fout : " + error);
    });

  return true;
}

function BerekeningToevoegen(_bmr, _bmi, _datum) {

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "mijnLichaam",
    bewerking: "addBerekening",
    bmr: _bmr,
    bmi: _bmi,
    datum: _datum,
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {

      if (responseData.status === "fail") {
        app.dialog.alert("Sorry, probeer nog een keer met meer data ...", responseData.error);
      } else {
        app.dialog.alert("ok", "Berekening toegevoegd");
      }
      // refresh de lijst
      GetBerekeningenFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Toevoegen is niet gelukt");
    });

  return true;
}

function BerekeningVerwijderen(id) {
  // fetch request opzetten om een item te verwijderen.
  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "mijnLichaam",
    bewerking: "delete",
    id: id
  });

  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      app.dialog.alert("Berekening verwijderd", "Doei...");
      // refresh de lijst
      GetBerekeningenFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Item toegevoegd");
    });
}

function GetFotosFromDB() {
  // de data opvragen van de andere server (zie les 2)

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "fotoDagboek",
    bewerking: "get"
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      var list = responseData.data;

      if (list.length > 0) {

        // // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
        // let tlines = "";
        // for (let i = 0, len = list.length; i < len; i++) {
        //   tlines += `<div class='row'><span class='col'>${list[i].PR_naam}</span><span class='col'>${ list[i].prijs}</span><button onClick='sendAjax(${list[i].PR_ID});' class='button button-fill button-raised button-small color-orange col'>Verwijder</button></div>`;
        // }

        // $$("#pList").html(tlines);

        // console.log(list);
        fotoVirtualList.deleteAllItems()
        for (const f of list) {
          fotoVirtualList.appendItem(f);
        }
        fotoVirtualList.update()

      } else {
        app.dialog.alert("Fotos konden niet opgevraagd worden");
      }

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert("fout : " + error);
    });

  return true;
}

function FotoToevoegen(_title, _subtitle, _url, _caption, _nr) {

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "fotoDagboek",
    bewerking: "addFoto",
    title: _title,
    subtitle: _subtitle,
    url: _url,
    caption: _caption,
    nr: _nr,
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {

      if (responseData.status === "fail") {
        app.dialog.alert("Sorry, probeer nog een keer met meer data ...", responseData.error);
      } else {
        app.dialog.alert("ok", "Foto toegevoegd");
      }
      // refresh de lijst
      GetFotosFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Toevoegen is niet gelukt");
    });

  return true;
}

function FotoVerwijderen(id) {
  // fetch request opzetten om een item te verwijderen.
  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "fotoDagboek",
    bewerking: "delete",
    id: id
  });

  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      app.dialog.alert("Foto verwijderd", "Doei...");
      // refresh de lijst
      GetFotosFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Item toegevoegd");
    });

}

function GetSessiesFromDB() {
  // de data opvragen van de andere server (zie les 2)

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "trainingSessies",
    bewerking: "get"
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      var list = responseData.data;

      if (list.length > 0) {

        // // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
        // let tlines = "";
        // for (let i = 0, len = list.length; i < len; i++) {
        //   tlines += `<div class='row'><span class='col'>${list[i].PR_naam}</span><span class='col'>${ list[i].prijs}</span><button onClick='sendAjax(${list[i].PR_ID});' class='button button-fill button-raised button-small color-orange col'>Verwijder</button></div>`;
        // }

        // $$("#pList").html(tlines);

        // console.log(list);
        planningVirtualList.deleteAllItems()
        for (const s of list) {
          planningVirtualList.appendItem(s);
        }
        planningVirtualList.update()

      } else {
        app.dialog.alert("Sessies konden niet opgevraagd worden");
      }

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert("fout : " + error);
    });

  return true;
}

function SessieToevoegen(_training, _workout, _momentShow, _moment) {

  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "trainingSessies",
    bewerking: "addSessie",
    training: _training,
    workout: _workout,
    momentShow: _momentShow,
    moment: _moment,
  });

  // test de api
  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {

      if (responseData.status === "fail") {
        app.dialog.alert("Sorry, probeer nog een keer met meer data ...", responseData.error);
      } else {
        app.dialog.alert("ok", "Sessie toegevoegd");
      }
      // refresh de lijst
      GetSessiesFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Toevoegen is niet gelukt");
    });

  return true;
}

function SessieVerwijderen(id) {
  // fetch request opzetten om een item te verwijderen.
  // body data type must match "Content-Type" header
  opties.body = JSON.stringify({
    format: "json",
    table: "trainingSessies",
    bewerking: "delete",
    id: id
  });

  fetch(apiAddress, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // de verwerking van de data
      app.dialog.alert("Sessie verwijderd", "Doei...");
      // refresh de lijst
      GetSessiesFromDB();

    })
    .catch(function (error) {
      // verwerk de fout
      app.dialog.alert('POST failed. :' + errorThrown, "Item toegevoegd");
    });

}