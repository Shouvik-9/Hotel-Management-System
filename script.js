document.addEventListener("DOMContentLoaded", function () {
    const loginWrapper = document.getElementById("loginWrapper");

    // Animate form entrance
    setTimeout(() => {
        loginWrapper.style.opacity = "1";
        loginWrapper.style.transform = "translateY(0)";
    }, 100);

    // Background transition on login button click
    const loginButton = document.querySelector(".btn");
    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.alert("confirm!!");
        location.href = "mainpage.html";
    });
});
