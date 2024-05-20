const readButton = document.getElementById("read-button");
const notificationsCounter = document.getElementById("notifications-counter");
readButton.addEventListener("click", (e) => {
  const unreadNotfications = document.querySelectorAll(".notification--new");
  unreadNotfications.forEach((item) => {
    item.classList.remove("notification--new");
    notificationsCounter.textContent = 0;
  });
});
