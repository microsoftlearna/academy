/*==========================================================
MICROSOFT LEARN CENTER
MICROSOFT EXCEL LEARNING PATH
==========================================================*/


/*==========================================================
SMOOTH SCROLLING
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetID = this.getAttribute("href");

        if (targetID === "#") {
            return;
        }

        const target = document.querySelector(targetID);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



/*==========================================================
HEADER SHADOW ON SCROLL
==========================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.10)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,.08)";

    }

});



/*==========================================================
SCROLL REVEAL ANIMATION
==========================================================*/

const animatedSections =
    document.querySelectorAll(
        ".projects, .video-section, .quiz-section, .next-course"
    );


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("section-visible");

                sectionObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedSections.forEach(section => {

    sectionObserver.observe(section);

});



/*==========================================================
DOWNLOAD BUTTON CLICK EFFECT
==========================================================*/

const downloadButtons =
    document.querySelectorAll(".download-btn");


downloadButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add("download-clicked");

        setTimeout(() => {

            button.classList.remove("download-clicked");

        }, 200);

    });

});



/*==========================================================
QUIZ CARD CLICK EFFECT
==========================================================*/

const quizCards =
    document.querySelectorAll(".quiz-card");


quizCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.add("quiz-clicked");

        setTimeout(() => {

            card.classList.remove("quiz-clicked");

        }, 200);

    });

});



/*==========================================================
VIDEO PLAYER
==========================================================*/

const excelVideo =
    document.querySelector(".video-player video");


if (excelVideo) {

    excelVideo.addEventListener("play", () => {

        console.log("Excel Fundamentals video started.");

    });

    excelVideo.addEventListener("ended", () => {

        console.log("Excel Fundamentals video completed.");

    });

}



/*==========================================================
START LEARNING BUTTON
==========================================================*/

const startButton =
    document.querySelector(".start-btn");


if (startButton) {

    startButton.addEventListener("click", () => {

        startButton.classList.add("start-clicked");

        setTimeout(() => {

            startButton.classList.remove("start-clicked");

        }, 250);

    });

}



/*==========================================================
NEXT COURSE BUTTON
==========================================================*/

const nextButton =
    document.querySelector(".next-btn");


if (nextButton) {

    nextButton.addEventListener("mouseenter", () => {

        nextButton.style.transform =
            "translateY(-5px)";

    });

    nextButton.addEventListener("mouseleave", () => {

        nextButton.style.transform =
            "translateY(0)";

    });

}



/*==========================================================
PAGE LOAD
==========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

    console.log(
        "Microsoft Learn Center - Microsoft Excel Learning Path"
    );

});

