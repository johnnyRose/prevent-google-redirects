
browser.runtime.onMessage.addListener(function (message) {
    window.location.href = message;
});
