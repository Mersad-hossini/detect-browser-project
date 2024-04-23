window.addEventListener("load", () => {
  let userAgent = navigator.userAgent;
  let userMinBrowser = null;

  if (userAgent.match(/edg/i)) {
    userMinBrowser = "edge";
  } else if (userAgent.match(/firefox/i)) {
    userMinBrowser = "firefox";
  } else if (userAgent.match(/Opera/i)) {
    userMinBrowser = "opera";
  } else if (userAgent.match(/chrome/i)) {
    userMinBrowser = "chrome";
  } else if (userAgent.match(/safari/i)) {
    userMinBrowser = "safari";
  }

  let userBrowserImage = document.querySelector(`.${userMinBrowser}`);

  if(userBrowserImage) {
    userBrowserImage.style.opacity = 1;
  }

});