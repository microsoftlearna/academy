/*========================================================

MICROSOFT LEARN CENTER
Adeleke University

Developed by Babalola Elijah

========================================================*/


/*====================================

HERO SLIDER + TYPING EFFECT

====================================*/

const slides = document.querySelectorAll(".slide");

const typingText = document.getElementById("typing-text");

const heroDescription = document.getElementById("hero-description");


const heroData = [

{

title:"Learn",

text:"Become digitally literate through Microsoft Learn Curriculum, Artificial Intelligence and Digital Productivity."

},

{

title:"Practice",

text:"Real scenario practical experience through guided projects, demonstrations and classroom activities."

},

{

title:"Get Certified",

text:"Earn globally recognised Microsoft Certifications and prepare for future opportunities."

}

];


let currentSlide = 0;

let typingIndex = 0;

let deleting = false;

let typingSpeed = 120;

let pauseTime = 1800;


/*====================================

TYPE WRITER

====================================*/



/*====================================

CHANGE HERO

====================================*/

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

typingText.textContent="";

typingIndex=0;

deleting=false;

heroDescription.textContent=heroData[index].text;

typingText.textContent = heroData[index].title;

}


/*====================================

AUTO SLIDER

====================================*/

function autoSlide(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}


showSlide(0);

setInterval(autoSlide,8000);



/*====================================

SMOOTH HERO FADE

====================================*/

slides.forEach((slide)=>{

slide.style.transition="opacity 1.2s ease";

});

/*========================================================

ANIMATED COUNTERS

========================================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters(){

    if(counterStarted) return;

    const stats = document.querySelector(".statistics");

    if(!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if(trigger < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = +counter.dataset.target;

            let count = 0;

            const increment = Math.ceil(target / 120);

            const updateCounter = ()=>{

                count += increment;

                if(count >= target){

                    counter.innerHTML = target + "+";
                }

                else{

                    counter.innerHTML = count + "+";

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

        });

    }

}


/*========================================================

BACK TO TOP BUTTON

========================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backToTop.style.display="flex";

    }

    else{

        backToTop.style.display="none";

    }

    runCounters();

});


backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*========================================================

SMOOTH SCROLL

========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*========================================================

SECTION FADE ANIMATION

========================================================*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});


sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition="all .8s ease";

    observer.observe(section);

});


/*========================================================

TIMETABLE ANIMATION

========================================================*/

const cells = document.querySelectorAll("tbody td");

cells.forEach((cell,index)=>{

    if(cell.textContent.trim()=="-"){

        setTimeout(()=>{

            cell.style.background="#EAF4FF";

            cell.style.transition=".4s";

        },index*35);

    }

});

/*========================================================

ACADEMIC CONSULTATION FORM

========================================================*/

const consultationForm = document.getElementById("consultation-form");

if (consultationForm) {

    consultationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullname = this.fullname.value;
        const email = this.email.value;
        const matric = this.matric.value;
        const department = this.department.value;
        const level = this.level.value;
        const course = this.course.value;
        const message = this.message.value;

        const subject = encodeURIComponent(
            "Microsoft Learn Consultation Request"
        );

        const body = encodeURIComponent(

`Full Name: ${fullname}

University Email: ${email}

Matric Number: ${matric}

Department: ${department}

Level: ${level}

Course: ${course}

Consultation Details:

${message}`

        );

        window.location.href =
        `mailto:aumia@student.adelekeuniversity.edu.ng?subject=${subject}&body=${body}`;

    });

}


/*========================================================

ACTIVE NAVIGATION

========================================================*/

const navLinks = document.querySelectorAll("nav ul li a");

const pageSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    pageSections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" && window.scrollY < 100) {

            link.classList.add("active");

        }

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*========================================================

BUTTON RIPPLE EFFECT

========================================================*/

const buttons = document.querySelectorAll(

".primary-btn,.secondary-btn,.submit-btn,.course-card a,.community-card a"

);

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const x = e.offsetX;

        const y = e.offsetY;

        ripple.style.left = x + "px";

        ripple.style.top = y + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*========================================================
HEADER SHADOW
========================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        header.style.boxShadow="0 8px 30px rgba(0,0,0,.10)";

    }

    else{

        header.style.boxShadow="0 2px 15px rgba(0,0,0,.06)";

    }

});


/*========================================================
MOBILE / HEADER MENU
========================================================*/

const menuToggle = document.querySelector("#menuToggle");

const menuPanel = document.querySelector("#menuPanel");


menuToggle.addEventListener("click", () => {

    menuPanel.classList.toggle("active");


    const isOpen =
        menuPanel.classList.contains("active");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    const menuIcon =
        menuToggle.querySelector("i");


    if(isOpen){

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    }

    else{

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    }

});


/*========================================================
CLOSE MENU WHEN A LINK IS CLICKED
========================================================*/

const menuLinks =
    document.querySelectorAll(".menu-panel a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuPanel.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        const menuIcon =
            menuToggle.querySelector("i");


        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    });

});

/*========================================================

FINAL WEBSITE IMPROVEMENTS

Microsoft Learn Center
Adeleke University

========================================================*/


/*========================================

PRELOAD HERO IMAGES

========================================*/

[
"assets/images/hero1.jpg",
"assets/images/hero2.jpg",
"assets/images/hero3.jpg"

].forEach(src=>{

const img=new Image();

img.src=src;

});


/*========================================

COURSE CARD HOVER

========================================*/

const courseCards=document.querySelectorAll(".course-card");

courseCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


/*========================================

COMMUNITY CARD HOVER

========================================*/

const communityCards=document.querySelectorAll(".community-card");

communityCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


/*========================================

VIDEO AUTO PAUSE

========================================*/

const video=document.querySelector("video");

if(video){

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

video.pause();

}

});

}


/*========================================

CONSOLE MESSAGE

========================================*/

console.log(

"%cMicrosoft Learn Center - Adeleke University",

"color:#0078D4;font-size:20px;font-weight:bold;"

);

console.log(

"%cDeveloped by Babalola Elijah",

"color:#333;font-size:14px;"

);


/*========================================

WEBSITE READY

========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

