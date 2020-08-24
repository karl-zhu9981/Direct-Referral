function signOut() {
    firebase.auth().signOut().then(function() {
    console.log('Signed Out');
    window.location.replace("/");
    },  function(error) {
            console.error('Sign Out Error', error);
        });
    }