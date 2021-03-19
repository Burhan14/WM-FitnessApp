function initFB() {

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Create an instance of the Google provider object:
  var provider = new firebase.auth.GoogleAuthProvider();
  // cordovaSignInRedirect(provider);


  // Authenticate with Firebase using the Google provider object using signInWithRedirect. Note that signInWithPopup is not supported in Cordova.



  // firebase.auth().signInWithRedirect(provider).then(() => {
  //   return firebase.auth().getRedirectResult();
  // }).then((result) => {
  //   /** @type {firebase.auth.OAuthCredential} */
  //   var credential = result.credential;

  //   // This gives you a Google Access Token.
  //   // You can use it to access the Google API.
  //   var token = credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   console.table(user);
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });

  // function cordovaSignInRedirect(provider) {
    // [START auth_cordova_sign_in_redirect]
    firebase.auth().signInWithRedirect(provider).then(() => {
      return firebase.auth().getRedirectResult();
    }).then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token.
      // You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.table(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    // [END auth_cordova_sign_in_redirect]
  // }

  // function cordovaRedirectResult() {
    // [START auth_cordova_redirect_result]
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        // ...
      }
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    // [END auth_cordova_redirect_result]
  // }

  // To handle the case where the app activity is destroyed before the sign-in operation completes, call getRedirectResult when your app loads.

//   firebase.auth().getRedirectResult().then((result) => {
//     if (result.credential) {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a Google Access Token.
//       // You can use it to access the Google API.
//       var token = credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       console.log(user);

//       // ...
//     }
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
 }