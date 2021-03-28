(function () {
    'use strict';


    //let logo = document.getElementsByClassName("logo")[0];
    let video = document.getElementsByClassName("video-background")[0];
    let menu = document.getElementsByClassName("menu1")[0];
    let main = document.getElementsByClassName("main")[0];
    let width = window.innerWidth;
    let menuChoice = ["ABOUT", "WORKS", "LISTEN", "WATCH", ">>Live"];

    function centerElement(elmt) {
        let windowWidth = window.innerWidth;
        let width = elmt.offsetWidth;
        elmt.style.left = (windowWidth - width)/2 + "px";
    }

    function centerElementY(elmt) {
        let windowHeight = window.innerHeight;
        let height = elmt.offsetHeight;
        elmt.style.top = (windowHeight - height)/2 + "px";
    }

    let div = document.createElement("div");
    div.className = "text-header";
    div.innerHTML = "GIVE/TAKE in concert";
    window.setTimeout(function() {
        div.innerHTML = "PRESS THE BUTTON";
    }, 700);

    let intervall = setInterval(function() {
        div.innerHTML = "JOIN THIS EVENT";
        window.setTimeout(function() {
            div.innerHTML = "PRESS THE BUTTON";
        }, 700);
        window.setTimeout(function() {
            div.innerHTML = "2021-03-04 20:00 GMT+1";
        }, 1400);
    }, 2100);

    div.style.backgroundColor = "red";
    div.style.top = "50%";
    div.style.textAlign = "center";
    div.style.cursor = "pointer";
    centerElementY(div);
    main.appendChild(div);

    div.addEventListener("click", function() {
        window.location.replace("https://fb.me/e/G0R5y3ge");
    })

})();
