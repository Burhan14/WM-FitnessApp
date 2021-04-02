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

          fs.collection("Users").doc(user.uid).collection("Sessions").add({});
          fs.collection("Users").doc(user.uid).collection("Locations").add({});

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
        GetLocationsFromFS()


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
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  //Handle login
  // var redLog = document.getElementById("redirectLogin")
  // redLog.addEventListener("click", function () {
  //   GoogleSignInRedirect(GoogleAuthProvider);
  // })

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
  try {
    placesVirtualList.deleteAllItems()
    firebase.firestore().collection("Users").doc(user.uid).collection("Locations").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());

        // placesVirtualList.appendItem(doc.data());
        placesVirtualList.appendItem(doc.data());

      });
    });
    placesVirtualList.update()
  } catch (error) {
    app.dialog.alert("Log in om locaties te tonen");
  }
}
function DeleteLocationsFromFS(CD) {
  try {
    firebase.firestore().collection("Users").doc(user.uid).collection("Locations").where("CreationDate", "==",CD)
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
//...

//Firestore UserCalc
//...

//Firestore Pics
//...

