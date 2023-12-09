const allNotifications = document.querySelectorAll(".notification");
const readAll = document.querySelector(".readAll");
const allTimes = document.querySelectorAll(".notificationTime");
const allReadStatus = document.querySelectorAll(".readStatus");
const allDots = document.querySelectorAll(".dot");
const unread = document.querySelector(".unread");

// on page load, adds the red dots to all new notifications, sums up the number of notifications showing and adds it to the header
var count = 0;
onLoadCheck();

function onLoadCheck() {
  allNotifications.forEach((notification, i) => {
    if (!notification.classList.contains("new")) {
      allDots[i].style.visibility = "hidden";
    } else {
      allDots[i].style.visibility = "visible";
      count += 1;
    }
    unread.innerHTML = count;
  });
}

// toggles notification read/unread status when click on a single notification, updates the number of unread notificaitons
allNotifications.forEach((notification, i) => {
  notification.addEventListener("click", () => {
    notification.classList.toggle("new");
    if (!notification.classList.contains("new")) {
      allDots[i].style.visibility = "hidden";
      count -= 1;
    } else {
      allDots[i].style.visibility = "visible";
      count += 1;
    }
    unread.innerHTML = count;
  });
});

// clears all the notificatioons

readAll.addEventListener("click", () => {
  allNotifications.forEach((notification, i) => {
    notification.classList.remove("new");
    allDots[i].style.visibility = "hidden";
    count = 0;
    unread.innerHTML = count;
  });
});
