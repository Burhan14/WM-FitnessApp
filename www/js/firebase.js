function initFirebase() {
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

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
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        var userInfo = authResult.additionalUserInfo;
        if (userInfo.IsNewUser && providerId === 'password') {
          // verify if email user is new => send email for confirmation and continue handling

        }
        console.log(authResult)
        console.log(userInfo)
        console.log(authResult.user.uid)
        defaultPhoto.classList.add("hide")
        userPhoto.classList.remove("hide")
        userPhoto.src = authResult.user.photoURL
        displayName.innerHTML = authResult.user.displayName
        btnLogIn.classList.add("hide")
        btnLogOut.classList.remove("hide")
        app.loginScreen.close('#my-login-screen');

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
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
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
    console.log("should open firebaseUI");
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
    }).catch((error) => {
      // An error happened.
    });
  }
}