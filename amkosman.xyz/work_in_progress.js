(function () {
    'use strict';

    let logo = document.getElementsByClassName("logo")[0];
    let video = document.getElementsByClassName("video-background")[0];
    let menu = document.getElementsByClassName("menu1")[0];
    let main = document.getElementsByClassName("main")[0];
    let width = window.innerWidth;
    let menuChoice = ["ABOUT", "WORKS", "LISTEN", "WATCH", ">>Live"];

    let timer = 1000;
    centerElementY(logo)
    centerElement(logo)

    window.addEventListener('dblclick', function() {
        while (menu.firstChild) {
            menu.removeChild(menu.firstChild);
        }
        logo.style.opacity = "1";
        logo.style.pointerEvents = "auto";
    })

    logo.addEventListener("click", function() {
        glitch(logo)

        logo.style.pointerEvents = "none";
        logo.style.opacity = 0;
        video.style.opacity = 1;


        window.setTimeout(function () {
            let div = document.createElement("div");
            div.className = "text-header";
            div.innerHTML = ". under construction .";
            let intervall = setInterval(function() {
                div.innerHTML = ".. under construction ..";
                window.setTimeout(function() {
                    div.innerHTML = "... under construction ...";
                }, 500 );
                window.setTimeout(function() {
                    div.innerHTML = ". under construction .";
                }, 1000);
            }, 1500);
            div.style.fontSize = "1.6vw";
            div.style.backgroundColor = "red";
            div.style.top = "50%";
            div.style.textAlign = "center";
            centerElementY(div);
            main.appendChild(div);
        //     for (let i = 0; i < menuChoice.length; i++) {
        //         let div0 = document.createElement("div");
        //         let div1 = document.createElement("h1");
        //
        //         div0.className = `${menuChoice[i].toLowerCase()}-link`;
        //         div1.innerHTML = `<a>${menuChoice[i]}</a>`;
        //         div0.appendChild(div1);
        //         menu.appendChild(div0);
        //     }
        //
        //     menu.addEventListener("click", function() {
        //         glitch(menu);
        //         menu.style.left = "0%";
        //         while (main.firstChild) {
        //             main.removeChild(main.firstChild);
        //         }
        //         if (event.target.text == "ABOUT") {
        //             console.log("ABOUT")
        //             aboutMenu();
        //         } else if (event.target.text == "WORKS") {
        //             worksMenu();
        //         } else if (event.target.text == "LISTEN") {
        //             listenMenu();
        //         } else if (event.target.text == "WATCH") {
        //             watchMenu();
        //         } else if (event.target.text == ">>Live") {
        //             concertMenu();
        //         }
        //     });
        //
        //     function concertMenu() {
        //         let box = document.createElement("div");
        //         let text = document.createElement("p");
        //         var div = document.createElement('div');
        //         let video = 'video0';
        //
        //
        //         box.className = "box";
        //
        //         text.className = "text-header";
        //         text.innerHTML = "LIVE TO LIVE STREAM TO LIVE STREAM TO LIVE IN STREAM TO STREAM TO IN LIVE";
        //
        //         div.innerHTML = document.getElementById(`${video}`).innerHTML;
        //         div.className = "video";
        //         div.style.marginLeft = "0px";
        //         div.style.marginRight = "0px";
        //
        //         main.appendChild(box);
        //         box.appendChild(text);
        //         box.appendChild(div);
        //         centerElement(box);
        //         addClose(box);
        //     };
        //
        //     function aboutMenu() {
        //         let box = document.createElement("div");
        //         let text1 = document.createElement("p");
        //         let text2 = document.createElement("p");
        //         let text3 = document.createElement("p");
        //
        //         box.className = "box";
        //         main.appendChild(box);
        //
        //         text1.className = "text-header";
        //         text1.innerHTML = "Electroacoustic composer, performer and vocalist AMKosman, aka Adele marcia Kosman, explores sound and space mainly through field recordings, synthesis, algorithmic composition and vocals, along with careful audio editing. Their latest pieces embrace concepts of emotional relationships to time, chopping and glitch, as well as formlessness and intense turbulence. Here follows a short bio:";
        //         text2.className = "text-body";
        //         text2.innerHTML = "The spring of 2020 I completed a bachelor degree in electro acoustic composition at the royal college of music in Stockholm and Universität der Künste in Berlin. The final year of this degree I studied alongside Kirsten Resee (UdK) and Henrik Frisk (KMH), who have supported me in building tools for live processing and live composing in SuperCollider. This work was accompanied by my thesis titled Livekonserten som kompositionsverktyg i elektroakustisk musik (The Live Concert as a Compositional Tool in Electro Acoustic Music), where I expressed and explored the wish to fully cater to the live medium when composing for just that – live, in electronic music. During my years studying composition I have written acousmatic pieces for surround sound, music for saxophone and tape, a sound installation for Stockholm Konst Ljudbänken and a piece for organ and vocals, which I myself participated in as a vocalist. More information about these works can be found in WORKS. </br></br>Alongside my compositional work I am since year 2020 involved in Konstmusiksystrar as a board member, while also doing hands on work in various projects initiated by members of the network. Year 2021 I was elected chair person of the network. </br></br>Before starting my endeavour studying and composing art music I was active in the electronic experimental pop scene releasing music as AMKosman. Prior to that I was a vocalist and songwriter in the electronic pop group For BDK. Together with the late Marcus Borrman I released a record with Warner Music Sweden, toured Europe and Sweden and performed live on Swedish Radio.</br></br>xo Adler </br></br></br></br></br></br></br></br></br>"
        //
        //         text3.className = "text-body";
        //         text3.style.textAlign = "right";
        //         text3.innerHTML = "amkosman.xyz credit: </br></br>Joakim Aronsson – Design</br>Kathrine Skibsted – Video</br>Adele Kosman – Code";
        //         centerElement(box);
        //         addClose(box);
        //         box.appendChild(text1);
        //         box.appendChild(text2);
        //         box.appendChild(text3);
        //     };
        //
        //     function worksMenu() {
        //         let box = document.createElement("div");
        //         let counter_text = 0;
        //         let text_title = [
        //             "SOUND", "2020", "Degree concert 'Give/Take/in concert'", "Lead You Home", "2019", "the mean of give and take", "now that you are done: Formless", "EMiT", "2018", "if it were for me you'd piece me up", "dancemusic",
        //             "INSTALLATION", "2021", "'WAVE' in collaboration with Fathia Mohidin", "2019", "For Dancemusic You’d Emit to Formless",
        //         ];
        //         let text_body = [
        //             "<strong>Durata:</strong> 35'  </br><strong>Format:</strong> 4.1</br><strong>Program note:</strong> Live coding live performance live conert. Along with my thesis 'The Live Concert as a Compositional Tool in Electro Acoustic Music' I have create tools for live compostion in SuperCollider. These tools were used in my degree concert at KMH on the 9th of September 2020. This was recorded and filmed. ",
        //             "<strong>Durata:</strong> 6' 45  </br><strong>Format:</strong> 22.1</br><strong>Program note:</strong>This is a gift to Marcus, a friend whom I shared everything with. As I did not have time to tell him just how much this meant and came to mean for me I interpreted one of our creations from 2014 to try and honor that everything which we once shared. This is a new and a last and a lonely For BDK. Through me alone and through that which I am today. I take your hand, I am going to lead you home. Rest in peace dear.</br>Brown and white noise with pop-song deconstructed. Pop-song: “Lead You Home” by For BDK. Realised in SuperCollider and mixed for 22.1 speakers in reaper.",
        //             "<strong>Durata:</strong> 5' 15  </br><strong>Format:</strong> stereo</br><strong>Program note:</strong> Sound meet/collide/fuse to create/bend/alter new. Live input with Live processing in supercollider.",
        //             "<strong>Durata:</strong> 6' 15  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong> In the aftermath of the previous piece – A formless moving stream of sound. Again the piece follows rigid iterations, now with continuous hits without repetition where the meeting point for the material changes at every instance.",
        //             "<strong>Durata:</strong> 20  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong>EMIT I – Language and seconds and 'Jag frågade mig själv men glömde svara' and arrivals</br>Came together and back for this piece</br>This will give rise to yet something new </br>EMIT II – Then they came back and back again </br>This is something new",
        //             "<strong>Durata:</strong> 6' 20  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong>The simple and rigid controls the mass of sound. The rich and colourful bends for the iterations. In mutual understanding, mutual pleasure, the two worlds of material meet. Misunderstandings occur, but at no loss. Between every hit there is a window, an opening, and in every glance I have found something new. I have thoroughly searched to find the very core of this place, my findings will be presented in 'if it were for me you'd piece me up'",
        //             "<strong>Durata:</strong> 7' 20  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong> Clap, woodblock, rhythm, space, bell, pattern, cluster.</br>Explore.",
        //             "<strong>Durata:</strong> 10' </br><strong>Format:</strong> 6.0 </br>Exhibited at Luleå Biennalen",
        //             "<strong>Durata:</strong> 35' </br><strong>Format:</strong> 4.0 </br>Ljudbänken for Stockholm Konst",
        //         ];
        //
        //         box.className = "box";
        //         main.appendChild(box);
        //
        //         for (let i = 0; i < text_title.length; i++) {
        //             let head = document.createElement("p");
        //             let title = document.createElement("p");
        //             let body = document.createElement("p");
        //
        //             title.className = "text-title";
        //             title.innerHTML = text_title[i];
        //
        //             if (text_title[i][0] == "2") { //När det är ett årtal!
        //                 title.style.color = "black";
        //                 title.style.marginLeft = "360px";
        //                 box.appendChild(title);
        //             } else if (text_title[i] == text_title[i].toUpperCase()) {
        //                 head.className = "text-header"; //När det är en ny kategori
        //                 head.innerHTML = text_title[i];
        //                 box.appendChild(head);
        //             } else {
        //                 body.className = "text-body";
        //                 body.innerHTML = text_body[counter_text]  + "</br></br>";
        //                 box.appendChild(title);
        //                 box.appendChild(body);
        //                 counter_text += 1;
        //             }
        //         }
        //         centerElement(box);
        //         addClose(box)
        //     };
        //
        //     function listenMenu() {
        //         let box = document.createElement("div");
        //         let musics = ['music1', 'music2', 'music3', 'music4'];
        //         let text = document.createElement("p");
        //
        //         box.className = "box";
        //         main.appendChild(box);
        //
        //         text.className = "text-header";
        //         text.innerHTML = "sounds to listen to sounds to listen to sounds listen to sounds listen to sounds to listen to me";
        //
        //         box.appendChild(text);
        //
        //         for (let i = 0; i < musics.length; i++) {
        //             var div = document.createElement('div');
        //
        //             div.innerHTML = document.getElementById(`${musics[i]}`).innerHTML;
        //             div.className = "music";
        //             box.appendChild(div);
        //         }
        //         centerElement(box);
        //         addClose(box);
        //     };
        //
        //     function watchMenu() {
        //         let box = document.createElement("div");
        //         let videos = ['video1', 'video2', 'video3'];
        //         let text = document.createElement("p");
        //
        //         box.className = "box";
        //         main.appendChild(box);
        //
        //         text.className = "text-header";
        //         text.innerHTML = "video to watch to video to watch to video";
        //
        //         box.appendChild(text);
        //
        //         for (let i = 0; i < videos.length; i++) {
        //             var div = document.createElement('div');
        //
        //             div.innerHTML = document.getElementById(`${videos[i]}`).innerHTML;
        //             div.className = "video";
        //             box.appendChild(div);
        //         }
        //         centerElement(box);
        //         addClose(box);
        //     };
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
          menu.style.left = "10%";
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
