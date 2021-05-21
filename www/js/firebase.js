function initFirebase() {

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //Firestore
  fs = firebase.firestore();

  fs.settings({
    timestampsInSnapshots: true
  });
  fs.collection('Oefeningen').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data())
    })
  });

  //DOM-elements
  var defaultPhoto = document.getElementById("defaultUserPhoto")
  var userPhoto = document.getElementById("userPhoto")
  var displayName = document.getElementById("displayName")

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.

        var userInfo = authResult.additionalUserInfo;
        user = firebase.auth().currentUser;

        // console.log(userInfo)
        //create a document for new users 
        if (userInfo.isNewUser == true) {

          fs.collection("Users").doc(user.uid).set({
            DisplayName: user.displayName,
            Email: user.email,
            Uid: user.uid,
          })

          // fs.collection("Users").doc(user.uid).collection("Sessions").add({});
          // fs.collection("Users").doc(user.uid).collection("Locations").add({});


          // Send email verification to new users logged in with email/password
          if (userInfo.providerId == "password") {
            user.sendEmailVerification()
          }
        }

        //if user has no PP set default image placeholder
        if (user.photoURL != null) {
          defaultPhoto.classList.add("hide")
          userPhoto.classList.remove("hide")
        }
        btnLogIn.classList.add("hide")
        btnLogOut.classList.remove("hide")
        userPhoto.src = user.photoURL
        displayName.innerHTML = user.displayName
        app.loginScreen.close('#my-login-screen');
        GetLocationsFromFS();
        GetSessionsFromFS();


        // reminder to verify the email address
        if (user.emailVerified == false) {
          app.dialog.alert('Please verify you email address!');
        }

        return false;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'redirect',
    // signInSuccessUrl: 'index.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account'
        }
      },
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        customParameters: {
          // Forces password re-entry.
          auth_type: 'reauthenticate'
        }
      },
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true
      }
    ],
    // Terms of service url.
    tosUrl: 'https://burhan-atesalp.be/Shredder/TermsOfService.html',
    // Privacy policy url.
    privacyPolicyUrl: 'https://burhan-atesalp.be/Shredder/PrivacyPolicy.html'
  };

  var btnLogOut = document.getElementById("btnLogOut")
  btnLogOut.addEventListener("click", function () {
    FireBaseSignOut();
  })

  var btnLogIn = document.getElementById("btnLogIn")
  btnLogIn.addEventListener("click", function () {
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  })

  function FireBaseSignOut() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      btnLogIn.classList.remove("hide")
      btnLogOut.classList.add("hide")
      displayName.innerHTML = "Log in om uw profielinformatie te zien"
      defaultPhoto.classList.remove("hide")
      userPhoto.classList.add("hide")
      placesVirtualList.deleteAllItems()
      planningVirtualList.deleteAllItems()
    }).catch((error) => {
      // An error happened.
    });
  }
}

//Firestore Locations
function AddLocationToFS() {
  try {
    fs.collection("Users").doc(user.uid).collection("Locations").add({
      Name: document.getElementById('plekNaam').value,
      Longitude: document.getElementById('plekLongitude').value,
      Latitude: document.getElementById('plekLatitude').value,
      CreationDate: Date.now()
    });
    GetLocationsFromFS()
  } catch (error) {
    app.dialog.alert("Log in om een locatie te kunnen toevoegen");
  }
}

function GetLocationsFromFS() {
  var placeNames = []
  try {
    placesVirtualList.deleteAllItems()
    firebase.firestore().collection("Users").doc(user.uid).collection("Locations").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        placesVirtualList.appendItem(doc.data());
        placeNames.push(doc.data().Name)
      });
    });
    placesVirtualList.update()
    return placeNames
  } catch (error) {
    app.dialog.alert("Log in om locaties te weergeven");
  }
}

function DeleteLocationFromFS(CD) {
  try {
    firebase.firestore().collection("Users").doc(user.uid).collection("Locations").where("CreationDate", "==", CD)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          firebase.firestore().collection("Users").doc(user.uid).collection("Locations").doc(doc.id).delete();

        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    placesVirtualList.update()
  } catch (error) {
    app.dialog.alert("Log in om locaties te tonen");
  }
}

//Firestore Sessions
function AddSessionToFS(place, date) {
  try {
    fs.collection("Users").doc(user.uid).collection("Sessions").add({
      Location: place,
      Date: firebase.firestore.Timestamp.fromDate(new Date(date)),
      CreationDate: Date.now()
    });
    GetSessionsFromFS()
  } catch (error) {
    app.dialog.alert("Log in om een sessie te kunnen toevoegen");
  }
}

function GetSessionsFromFS() {
  try {
    planningVirtualList.deleteAllItems()
    firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        planningVirtualList.appendItem({
          Location: doc.data().Location,
          // Date : doc.data().Date.toDate().toLocaleString(),
          DisplayDate: new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'full',
            timeStyle: 'short'
          }).format(doc.data().Date.toDate()),
          Date: new Date(doc.data().Date.toDate()),
          CreationDate: doc.data().CreationDate
        })
      });
    });
    planningVirtualList.update();
  } catch (error) {
    app.dialog.alert("Log in om sessies te weergeven");
  }

}

function DeleteSessionFromFS(CD) {
  try {
    firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").where("CreationDate", "==", CD)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

          firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").doc(doc.id).delete();

        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    placesVirtualList.update()
  } catch (error) {
    app.dialog.alert("Log in om sessies te tonen");
  }
}

//Firestore Exercises (to append in sessions) (full CRUD)
//...

function AddExerciseToFS(CD) {
  try {
    firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").where("CreationDate", "==", parseInt(CD)).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        fs.collection("Users").doc(user.uid).collection("Sessions").doc(doc.id).collection("Exercises").add({
          Exercise: document.getElementById('exercise-picker').value,
          Reps: 0,
          Weight:0,
          CreationDate: Date.now()
        })
      });
    })
    GetExercisesFromFS(CD)
  } catch (error) {
    app.dialog.alert("Couldn't add exercise to session");
  }
}

function GetTypeExercisesFromFS(type) {
  exercisesList = []
  try {
    firebase.firestore().collection("Exercises").where("Type", "==", type).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data())
        exercisesList.push(doc.data().Name)
      });
    });
  } catch (error) {
    app.dialog.alert("type error");
  }

}

function GetExercisesFromFS(CD) {
  try {
    sessionVirtualList.deleteAllItems();
    // sessionVirtualList.update();
    firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").where("CreationDate", "==", parseInt(CD)).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        fs.collection("Users").doc(user.uid).collection("Sessions").doc(doc.id).collection("Exercises").get().then((querySnapshot) => {
          querySnapshot.forEach((doc2) => {
            // doc.data() is never undefined for query doc snapshots
            sessionVirtualList.appendItem(doc2.data())
          });
        });
      });
      sessionVirtualList.update();
    })
  } catch (error) {
    app.dialog.alert("couldn't get exercises for this session");
  }
}

function DeleteExerciseFromFS(SCD, ECD) {
  //TODO
  firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").where("CreationDate", "==", parseInt(SCD)).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      fs.collection("Users").doc(user.uid).collection("Sessions").doc(doc.id).collection("Exercises").where("CreationDate", "==", parseInt(ECD)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc2) => {
            firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").doc(doc.id).collection("Exercises").doc(doc2.id).delete();
            });
        });
    });
  })
}

function UpdateExerciseInFS(SCD, ECD, reps, weight) {
  //TODO
  firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").where("CreationDate", "==", parseInt(SCD)).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      fs.collection("Users").doc(user.uid).collection("Sessions").doc(doc.id).collection("Exercises").where("CreationDate", "==", parseInt(ECD)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc2) => {
          firebase.firestore().collection("Users").doc(user.uid).collection("Sessions").doc(doc.id).collection("Exercises").doc(doc2.id).update({
            Reps: reps,
            Weight: weight
          }).then(() => {
            GetExercisesFromFS(SCD)
          });
        });
      });
    });
  })
}

//Firestore UserData
function GetDataFromFS() {
  try {
    mijnLichaamVirtualList.deleteAllItems()
    firebase.firestore().collection("Users").doc(user.uid).collection("Data").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          mijnLichaamVirtualList.appendItem(
            {
              BMI : doc.data().BMI,
              BMR : doc.data().BMR,        
              DisplayDate : new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(doc.data().Date.toDate()),       
              CreationDate : doc.data().CreationDate
            }
          )         
      });
    });
    mijnLichaamVirtualList.update();
  } catch (error) {
    app.dialog.alert("Log in to view your data");
  }
  
}

function AddDataToFS(bmi, calories) {
  try {
    fs.collection("Users").doc(user.uid).collection("Data").add({
      BMI: calories,
      BMR: bmi,
      Date: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),
      CreationDate : Date.now()
    });
    GetDataFromFS()
  } catch (error) {
    app.dialog.alert("Login to add a calculation");
  }
}

function DeleteDataFromFS(CD) {
  try {
    firebase.firestore().collection("Users").doc(user.uid).collection("Data").where("CreationDate", "==",CD)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                firebase.firestore().collection("Users").doc(user.uid).collection("Data").doc(doc.id).delete();

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }); 

    mijnLichaamVirtualList.update()
  } catch (error) {
    app.dialog.alert("Log in to view your data");
  }
}

//Firestore Pics

function GetImagesFromFS() {
  try {
    fotoVirtualList.deleteAllItems()
    firebase.firestore().collection("Users").doc(user.uid).collection("Images").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        fotoVirtualList.appendItem(
            {
              Date: new Date(doc.data().CreationDate).toLocaleDateString('en-GB'),
              Time : new Date(doc.data().CreationDate).getHours() +":"+ new Date(doc.data().CreationDate).getMinutes(),
              DisplayDate: new Intl.DateTimeFormat('en-GB', {
                dateStyle: 'full',
                timeStyle: 'short'
              }).format(new Date(doc.data().CreationDate)),
              CreationDate: doc.data().CreationDate,
              Url: doc.data().Url
            }
          )         
      });
    });
    fotoVirtualList.update();
  } catch (error) {
    app.dialog.alert("Log in to view your images");
  }
  
}

function AddImageToFS(url) { //TODO
  try {
    fs.collection("Users").doc(user.uid).collection("Images").add({
      Url: url,
      CreationDate : Date.now()
    });
    GetImagesFromFS()
  } catch (error) {
    app.dialog.alert("Login to add an image");
  }
}

function DeleteImageFromFS(CD) {
  try {
    firebase.firestore().collection("Users").doc(user.uid).collection("Images").where("CreationDate", "==",CD)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                firebase.firestore().collection("Users").doc(user.uid).collection("Images").doc(doc.id).delete();

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }); 

        fotoVirtualList.update()
  } catch (error) {
    app.dialog.alert("Log in to view your images");
  }
}