const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notifications = new Notification("Testing Notification", {
        body: "This is more text", //content of notification
        data: { hello: "world" },
        icon: "javascript.png", //icon on notification
        tag: "Welcome Message", //repeation of message
      });
      notifications.addEventListener("error", (e) => {
        alert("error");
      });
    }
  });
});

//Advance method for Notifications

// let notification;
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "hidden") {
//     notification = new Notification("Come back to website", {
//       body: "Open our website",
//       tag: "please",
//     });
//   } else {
//     notification.close();
//   }
// });
