// Add the RingCentral Web Widget
(function () {
  var rcs = document.createElement("script");
  rcs.src = "https://ringcentral.github.io/ringcentral-web-widget/adapter.js?disableGlip=false";
  //https://ringcentral.github.io/ringcentral-web-widget/app.html?stylesUri=https://embbnux.github.io/ringcentral-web-widget-styles/GameofThrones/styles.css
  var rcs0 = document.getElementsByTagName("script")[0];
  rcs0.parentNode.insertBefore(rcs, rcs0);
})();

// Inbound Screen Pop Based in Message Event
(function () {
  var registered = false;
  let contacts = getContacts();
  window.addEventListener("message", function (e) {
    const data = e.data;
    console.log(data)


    if (data) {
      switch (data.type) {
        case "rc-login-status-notify":
          if (data && data.type === "rc-login-status-notify" && data.loggedIn) {
          
          }
        case "rc-route-changed-notify":         
          break;
        case "rc-call-ring-notify":
          var id = number2id(data.call.from, number2user);
          if (id) {
            var contact = id2user[id];
            window.title = contact.character.displayName;
            window.history.pushState(
              "",
              contact.character.displayName,
              "?id=" + id
            );
            loadSingleUser(id, id2user);
          }
          break;
        default:
          break;
      }
    }
  });
})();

