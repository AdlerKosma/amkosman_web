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
            for (let i = 0; i < menuChoice.length; i++) {
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
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                if (event.target.text == "ABOUT") {
                    console.log("ABOUT")
                    aboutMenu();
                } else if (event.target.text == "WORKS") {
                    worksMenu();
                } else if (event.target.text == "LISTEN") {
                    listenMenu();
                } else if (event.target.text == "WATCH") {
                    watchMenu();
                } else if (event.target.text == ">>Live") {
                    concertMenu();
                }
            });

            function concertMenu() {
                let box = document.createElement("div");
                let text = document.createElement("p");
                var div = document.createElement('div');


                let video = 'video0';


                box.className = "box";

                text.className = "text-header";
                text.innerHTML = "nothing live to show atm. come back soon. this is a just lil taste.";

                div.innerHTML = document.getElementById(`${video}`).innerHTML;
                div.className = "video";
                div.style.marginLeft = "0px";
                div.style.marginRight = "0px";

                main.appendChild(box);
                box.appendChild(text);
                box.appendChild(div);
                centerElement(box);
                addClose(box);
            };

            function aboutMenu() {
                let box = document.createElement("div");
                let text1 = document.createElement("p");
                let text2 = document.createElement("p");
                let text3 = document.createElement("p");
                let text4 = document.createElement("p");
                let pic = document.createElement("img")

                pic.setAttribute("src", "img/adler.jpg");
                pic.style.width = "467px";
                pic.style.height = "492px";
                pic.style.boxShadow =" 0px 0px 10px black";
                //pic.style.marginLeft = "400px";

                box.className = "box";
                main.appendChild(box);

                text1.className = "text-header";
                text1.innerHTML = "Electroacoustic composer, performer and vocalist AMKosman, aka Adele marcia Kosman, explores sound and space mainly through field recordings, synthesis, algorithmic composition and vocals, along with careful audio editing. Their latest pieces embrace concepts of emotional relationships to time, chopping and glitch, as well as formlessness and intense turbulence. Here follows a short bio:";
                text2.className = "text-body";
                text2.innerHTML = "The spring of 2020 I completed a bachelor degree in electro acoustic composition at the royal college of music in Stockholm and Universität der Künste in Berlin. The final year of this degree I studied alongside Kirsten Resee (UdK) and Henrik Frisk (KMH), who have supported me in building tools for live processing and live composing in SuperCollider. This work was accompanied by my thesis titled Livekonserten som kompositionsverktyg i elektroakustisk musik (The Live Concert as a Compositional Tool in Electro Acoustic Music), where I expressed and explored the wish to fully cater to the live medium when composing for just that – live, in electronic music. During my years studying composition I have written acousmatic pieces for surround sound, music for saxophone and tape, a sound installation for Stockholm Konst Ljudbänken and a piece for organ and vocals, which I myself participated in as a vocalist. More information about these works can be found in WORKS. </br></br>Alongside my compositional work I am since year 2020 involved in Konstmusiksystrar as a board member, while also doing hands on work in various projects initiated by members of the network. Year 2021 I was elected chair person of the network. </br></br>Before starting my endeavour studying and composing art music I was active in the electronic experimental pop scene releasing music as AMKosman. Prior to that I was a vocalist and songwriter in the electronic pop group For BDK. Together with the late Marcus Borrman I released a record with Warner Music Sweden, toured Europe and Sweden and performed live on Swedish Radio.</br></br>xo Adler </br></br></br></br>"

                text3.className = "text-body";
                text3.style.textAlign = "right";
                text3.innerHTML = "amkosman.xyz credit: </br></br>Joakim Aronsson – Design</br>Kathrine Skibsted – Video</br>Anto Azzopardi – Photo</br>Adele Kosman – Code</br></br>";

                text4.className = "text-body";
                text4.style.textAlign = "right";
                text4.innerHTML = "amkosman.xyz contact: </br></br>adele.kosman[@]gmail.com on mail </br>@adelemarcia on IG";

                centerElement(box);
                addClose(box);



                box.appendChild(text1);
                box.appendChild(text2);
                box.appendChild(text3);
                box.appendChild(text4);
                box.appendChild(pic);

            };

            function worksMenu() {
                let box = document.createElement("div");
                let counter_text = 0;
                let text_title = [
                    "SOUND",
                    "2020", "Degree concert 'Give/Take/in concert'", "Lead You Home",
                    "2019", "the mean of give and take", "now that you are done: Formless", "EMiT", "2018", "if it were for me you'd piece me up", "dancemusic",
                    "INSTALLATION",
                    "2021", "'WAVE' in collaboration with Fathia Mohidin",
                    "2019", "For Dancemusic You’d Emit to Formless",
                    "CONCERTS",
                    "2015-2020", "Selected concerts",
                    "PROJECTS",
                    "2019-2021",
                    "Selected projects",
                ];
                let text_body = [
                    "<strong>Durata:</strong> 35'  </br><strong>Format:</strong> 4.1</br><strong>Program note:</strong> Live coding live performance live conert. Along with my thesis 'The Live Concert as a Compositional Tool in Electro Acoustic Music' I have create tools for live compostion in SuperCollider. These tools were used in my degree concert at KMH on the 9th of September 2020. This was recorded and filmed. ",
                    "<strong>Durata:</strong> 6' 45  </br><strong>Format:</strong> 22.1</br><strong>Program note:</strong>This is a gift to Marcus, a friend whom I shared everything with. As I did not have time to tell him just how much this meant and came to mean for me I interpreted one of our creations from 2014 to try and honor that everything which we once shared. This is a new and a last and a lonely For BDK. Through me alone and through that which I am today. I take your hand, I am going to lead you home. Rest in peace dear.</br>Brown and white noise with pop-song deconstructed. Pop-song: “Lead You Home” by For BDK. Realised in SuperCollider and mixed for 22.1 speakers in reaper.",
                    "<strong>Durata:</strong> 5' 15  </br><strong>Format:</strong> stereo</br><strong>Program note:</strong> Sound meet/collide/fuse to create/bend/alter new. Live input with Live processing in supercollider.",
                    "<strong>Durata:</strong> 6' 15  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong> In the aftermath of the previous piece – A formless moving stream of sound. Again the piece follows rigid iterations, now with continuous hits without repetition where the meeting point for the material changes at every instance.",
                    "<strong>Durata:</strong> 20  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong>EMIT I – Language and seconds and 'Jag frågade mig själv men glömde svara' and arrivals</br>Came together and back for this piece</br>This will give rise to yet something new </br>EMIT II – Then they came back and back again </br>This is something new",
                    "<strong>Durata:</strong> 6' 20  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong>The simple and rigid controls the mass of sound. The rich and colourful bends for the iterations. In mutual understanding, mutual pleasure, the two worlds of material meet. Misunderstandings occur, but at no loss. Between every hit there is a window, an opening, and in every glance I have found something new. I have thoroughly searched to find the very core of this place, my findings will be presented in 'if it were for me you'd piece me up'",
                    "<strong>Durata:</strong> 7' 20  </br><strong>Format:</strong> 29.4</br><strong>Program note:</strong> Clap, woodblock, rhythm, space, bell, pattern, cluster.</br>Explore.",
                    "<strong>Durata:</strong> 10' </br><strong>Format:</strong> 6.0 </br>Exhibited at Luleå Biennalen",
                    "<strong>Durata:</strong> 35' </br><strong>Format:</strong> 4.0 </br>Ljudbänken for Stockholm Konst",
                    "<strong>17.10.20</strong> Skaiv, Stockholm </br><strong>09.09.20</strong> degree concert, Royal college of music, Stockholm</br><strong>31.01.20</strong> Gelegenheiten Berlin, Berlin</br><strong>08.01.20</strong> Silent Green, Berlin</br><strong>25.07.19</strong> Norberg Festival, Norberg</br><strong>04.08.18</strong> Lidelsen, Nyköping</br><strong>28.07.18</strong> Technobastun PRIDË, Slakthuskyrkan, Stockholm</br><strong>07.06.18</strong> Live sessions, Trädgården, Stockholm</br><strong>02.02.18</strong> Johanneskyrkan goes Electronic, Malmö</br><strong>13.12.17</strong> Discover whats brewing, Debaser, Stockholm</br><strong>18.03.17</strong> 'comfort' release, Taverna Brillo, Stockholm</br><strong>14.01.17</strong> Acclimatize party, Moderna Museet, Stockholm</br><strong>07.10.16</strong> RISK, Fylkingen, Stockholm</br><strong>05.10.16</strong> Transmission, Cyklopen, Stockholm</br><strong>27.05.16</strong> Skogsfesten, Dals Långed</br><strong>05.05.16</strong> Rökridån, Stockholm</br><strong>11.12.15</strong> Liljevalchs, Stockholm</br><strong>03.12.15</strong> Från Ö till A, Stockholm</br><strong>08.08.15</strong> Lidelsen, Nyköping",
                    "<strong> Chairperson of board Konstmusiksystrar</strong></br> Elected 11/2020</br><a href=http://konstmusiksystrar.se/ target='_blank'>http://konstmusiksystrar.se/</a></br></br><strong>Sound Pals - Collaborating at a distance</strong></br>Project manager together with Kajsa Antonsson, Konstmusiksystrar.</br></br><strong>Ljuva Brus/Invasiva Buller - Konstmusiksystrar at Rönnells Antikvariat</strong></br>Curator and creator together with Emilia Engblad Berangér, guest Åsa Stjerna.</br></br><strong>Electronic Art Music: Concert and Conversation</strong></br>Workshop at Royal Collego of Music in collaboration with Vem Kan Bli Producent and Upfront Producer Network. Initiator and host."
                ];

                box.className = "box";
                main.appendChild(box);

                for (let i = 0; i < text_title.length; i++) {
                    let head = document.createElement("p");
                    let title = document.createElement("p");
                    let body = document.createElement("p");

                    title.className = "text-title";
                    title.innerHTML = text_title[i];

                    if (text_title[i][0] == "2") { //När det är ett årtal!
                        title.style.color = "black";
                        title.style.marginLeft = "360px";
                        box.appendChild(title);
                    } else if (text_title[i] == text_title[i].toUpperCase()) {
                        head.className = "text-header"; //När det är en ny kategori
                        head.innerHTML = text_title[i];
                        box.appendChild(head);
                    } else {
                        body.className = "text-body";
                        body.style.textAlign = "left";
                        body.innerHTML = text_body[counter_text]  + "</br></br>";
                        box.appendChild(title);
                        box.appendChild(body);
                        counter_text += 1;
                    }
                }
                centerElement(box);
                addClose(box)
            };

            function listenMenu() {
                let box = document.createElement("div");
                let musics = ['music1', 'music2', 'music3', 'music4'];
                let text = document.createElement("p");

                box.className = "box";
                main.appendChild(box);

                text.className = "text-header";
                text.innerHTML = "SOUNDS TO LISTEN TO";

                box.appendChild(text);

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
                let videos = ['video1', 'video2', 'video3'];
                let text = document.createElement("p");

                box.className = "box";
                main.appendChild(box);

                text.className = "text-header";
                text.innerHTML = "VIDEOS TO WATCH";

                box.appendChild(text);

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
