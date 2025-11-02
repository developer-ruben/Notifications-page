document.addEventListener("DOMContentLoaded", () => {
  const markReadButton = document.getElementById("mark-read");
  const notificationCounter = document.getElementById("notification-counter");

  if (!markReadButton || !notificationCounter) return;

  markReadButton.addEventListener("click", () => {
    const notifications = document.querySelectorAll(".notification--unread");

    if (notifications.length === 0) return;

    notifications.forEach((item) =>
      item.classList.remove("notification--unread")
    );

    notificationCounter.textContent = "0";
    notificationCounter.dataset.count = "0";
  });
});
