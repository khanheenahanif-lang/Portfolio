// ==============================
// Portfolio JavaScript
// ==============================

// Back to Top Button
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


// ==============================
// Navbar Shadow on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
        header.style.background = "linear-gradient(to right, #831bcd,#f9620f)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "linear-gradient(to right, #831bcd,#f9620f)";

    }

});


// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==============================
// Contact Form Demo
// ==============================

// const contactForm = document.querySelector(".contact-form");

// contactForm.addEventListener("submit", function(e) {

//     e.preventDefault();

//     alert("Thank you! Your message has been sent successfully.");

//     contactForm.reset();

// });

//Initializing EmailJS
emailjs.init("XUKpn75eKFSe4P_B-");

//Contact Form

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_vvjh8za",
        "template_173i22j",
        this
    ).then(
        function() {
            alert("Thank you! Your message has been sent successfully.");   

            document.getElementById("contact-form").reset();
        })
            .catch(function(error) {
                 alert("Oops! Something went wrong. Please try again later.");
        });
            console.log(error);
});




// ==============================
// Fade-in Animation
// ==============================

const cards = document.querySelectorAll(
".project-card, .skill-card, .certificate-card, .timeline-card, .experience-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});


// ==============================
// Typing Effect
// ==============================

const roles = [
    "Aspiring Full Stack Web Developer",
    // "Frontend Developer",
    // "Web Designer"
];

const roleElement = document.querySelector(".hero-text h2");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        roleElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);

}

if (roleElement) {
    typeEffect();
}

// ==============================
// Progress Bar Animation
// ==============================



document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelector("#skills");
    const bars = document.querySelectorAll(".progress-bar");
    let animated = false;

    window.addEventListener("scroll", function () {

        if (animated) return;

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            bars.forEach(function(bar) {
                bar.style.width = bar.getAttribute("data-width");
            });

            animated = true;
        }

    });

});
