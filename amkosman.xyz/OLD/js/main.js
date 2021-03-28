(function () {
    'use strict';

    let logo = document.getElementsByClassName("logo")[0];
    let video = document.getElementsByClassName("video-background")[0];
    let menu = document.getElementsByClassName("menu1")[0];
    let main = document.getElementsByClassName("main")[0];
    let width = window.innerWidth;
    let menuChoice = ["ABOUT", "WORKS", "LISTEN", "WATCH", "SHOP"];

    let timer = 1000;
    centerElement(logo)
    centerElementY(logo)
    glitch(logo)

    logo.addEventListener("click", function() {
        glitch(logo)
        logo.style.opacity = 0;
        video.style.opacity = 1;

        window.setTimeout(function () {
            for (let i = 0; i < menuChoice.length; i++) {
                let random = Math.floor(Math.random() * width/2);
                let div0 = document.createElement("div");
                let div1 = document.createElement("h1");

                div0.className = `${menuChoice[i].toLowerCase()}-link`;
                div1.innerHTML = `<a>${menuChoice[i]}</a>`;
                div0.appendChild(div1);
                menu.appendChild(div0);
            }

            menu.addEventListener("click", function() {
                glitch(menu);
                menu.style.left = "0%";
                if (event.target.text == "ABOUT") {
                    console.log("ABOUT")
                    aboutMenu();
                } else if (event.target.text == "WORKS") {
                    worksMenu();
                } else if (event.target.text == "LISTEN") {
                    listenMenu();
                } else if (event.target.text == "WATCH") {
                    watchMenu();
                }
            });

            function aboutMenu() {
                let box = document.createElement("div");
                let text1 = document.createElement("p");
                let text2 = document.createElement("p");

                box.className = "box";
                main.appendChild(box);

                text1.className = "slide-text";
                text1.innerHTML = "Electroacoustic composer, performer and vocalist AMKosman, aka Adele marcia Kosman, explores sound and space mainly through field recordings, synthesis, algorithmic composition and vocals, along with careful and audio editing. Their latest pieces embrace concepts of emotional relationships to time, chopping and glitch, as well as formlessness and intense turbulence. Here follows a short bio:";
                text2.className = "slide-text2";
                text2.innerHTML = "The spring of 2020 I completed a bachelor degree in electro acoustic composition at the royal college of music in Stockholm and Universität der Künste in Berlin. The final year of this degree I studied alongside Kirsten Resee (UdK) and Henrik Frisk (KMH), who have supported me in building tools for live processing and live composing in SuperCollider. This work was accompanied by my thesis titled Livekonserten som kompositionsverktyg i elektroakustisk musik (The Live Concert as a Compositional Tool in Electro Acoustic Music), where I expressed and explored the wish to fully cater to the live medium when composing for just that – live, in electronic music. During my years studying composition I have written acousmatic pieces for surround sound, music for saxophone and tape, a sound installation for Stockholm Konst Ljudbänken and a piece for organ and vocals, which I myself participated in as a vocalist. More information about these works can be found in WORKS. </br></br>Alongside my compositional work I am since year 2020 involved in Konstmusiksystrar as a board member, while also doing hands on work in various projects initiated by members of the network. Year 2021 I was elected chair person of the network. </br></br>Before starting my endeavour studying and composing art music I was active in the electronic experimental pop scene releasing music as AMKosman. Prior to that I was a vocalist and songwriter in the electronic pop group For BDK. Together with the late Marcus Borrman I released a record with Warner Music Sweden, toured Europe and Sweden and performed live on Swedish Radio.</br></br>xo Adler </br></br></br>"

                centerElement(box);
                addClose(box);
                box.appendChild(text1);
                box.appendChild(text2);
            };

            function worksMenu() {
                let box = document.createElement("div");
                let text1 = document.createElement("p");
                let text2 = document.createElement("p");
                let text3 = document.createElement("p");
                let text4 = document.createElement("p");

                box.className = "box";
                main.appendChild(box);

                text1.className = "slide-text";
                text1.innerHTML = "SOUND"

                text2.className = "slide-text2";
                text2.style.marginRight = "50px";
                text2.innerHTML = "2020</br></br>Title: Degree concert 'Give/Take/in concert'</br>Durata: 35</br>Format: 4.1</br></br></br>Title: Lead You Home</br>Durata: 6:45</br>Format: 22.1</br>Program note:</br>This is a gift to Marcus, a friend whom I shared everything with. As I did not have time to tell him just how much this meant and came to mean for me I interpreted one of our creations from 2014 to try and honor that everything which we once shared. This is a new and a last and a lonely For BDK. Through me alone and through that which I am today. I take your hand, I am going to lead you home. Rest in peace dear.</br>Brown and white noise with pop-song deconstructed. Pop-song: “Lead You Home” by For BDK.</br> Realised in SuperCollider and mixed for 22.1 speakers in reaper.</br></br>2019</br></br>Title: the mean of give and take</br>Durata: 5:15</br>Format: stereo</br>Program note: Sound meet/collide/fuse to create/bend/alter new. Live input with Live processing in supercollider.</br></br>Titel: For Dancemusic You’d Emit to Formless</br>Format: sound installation Ljudbänken for Stockholm Konst, 4 channels</br>Durata: 50 min</br></br>Title: now that you are done: Formless</br>Durata: 6:15</br>Format: 29.4</br>Program note: In the aftermath of the previous piece – A formless moving stream of sound. Again the piece follows rigid iterations, now with continuous hits without repetition where the meeting point for the material changes at every instance. </br></br>Title: EMIT</br>Durata: 10 + 10</br>Format: 29.4</br>Program note:</br>EMIT I </br>Language and seconds and 'Jag frågade mig själv men glömde svara' and arrivals</br>Came together and back for this piece</br>This will give rise to yet something new</br>EMIT II</br>Then they came back and back again </br>This is something new</br></br>2018</br></br>Title: if it were for me you'd piece me up</br>Durata: 6:20</br>Format: 29.4</br>Program note: The simple and rigid controls the mass of sound. The rich and colourful bends for the iterations. In mutual understanding, mutual pleasure, the two worlds of material meet. Misunderstandings occur, but at no loss. Between every hit there is a window, an opening, and in every glance I have found something new. I have thoroughly searched to find the very core of this place, my findings will be presented in 'if it were for me you'd piece me up'.</br></br></br>Title: dancemusic</br>Durata: 7:20</br>Format: 29.4</br>Program note: Clap, woodblock, rhythm, space, bell, pattern, cluster. </br>Explore.</br></br></br>";

                text3.className = "slide-text";
                text3.innerHTML = "RELEASES";

                text4.className = "slide-text2";
                text4.innerHTML = "VOLVM 1. turbulence</br>Cherish label</br>Year: 2018</br>Tracks: confidence . nervous . intermission . save time . Santorini</br></br>VOLVM 0</br>self release</br>Year: 2016</br>Tracks: this 1 time . open yourself 2 . those 3 words</br></br></br>";

                centerElement(box);
                box.appendChild(text1);
                box.appendChild(text2);
                box.appendChild(text3);
                box.appendChild(text4);
                addClose(box)
            };

            function listenMenu() {
                let box = document.createElement("div");
                let musics = ['music1', 'music2', 'music3', 'music4'];
                let text1 = document.createElement("p");

                box.className = "box";
                main.appendChild(box);

                text1.className = "slide-text";
                text1.innerHTML = "sounds to listen to sounds to listen to sounds";

                box.appendChild(text1);

                for (let i = 0; i < musics.length; i++) {
                    var div = document.createElement('div');

                    div.innerHTML = document.getElementById(`${musics[i]}`).innerHTML;
                    div.className = "music";
                    box.appendChild(div);
                }
                centerElement(box);
                addClose(box);
            };

            function watchMenu() {
                let box = document.createElement("div");
                let videos = ['video0', 'video1', 'video2', 'video3'];
                let text1 = document.createElement("p");

                box.className = "box";
                main.appendChild(box);

                text1.className = "slide-text";
                text1.innerHTML = "video to watch to video to watch to video";

                box.appendChild(text1);

                for (let i = 0; i < videos.length; i++) {
                    var div = document.createElement('div');

                    div.innerHTML = document.getElementById(`${videos[i]}`).innerHTML;
                    div.className = "video";
                    box.appendChild(div);
                }
                centerElement(box);
                addClose(box);
            };
        }, timer);
    });

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

    function glitch(element) {
      let colors = ["#02F702", "#FF7000", "#D600F6", "#00F7EE", "white"];
      let random = Math.floor(Math.random() * colors.length);

      element.style.backgroundColor = colors[random];
      window.setTimeout(function() {
          element.style.backgroundColor = "";
      }, 30);
    }

    function addClose(element) {
      let close = document.createElement("div");
      let close_1 = document.createElement("p");

      close.className = "hide1";
      close_1.innerHTML = "X";
      close.appendChild(close_1);
      close.addEventListener("click", function() {
          menu.style.left = "20%";
          glitch(element);
          window.setTimeout(function() {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
          }, 35);
      })
      element.appendChild(close);
    }

})();
