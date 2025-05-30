// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline' : 'none';
    moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline' : 'none';
});

// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Create arrows
const upArrow = document.createElement('div');
upArrow.className = 'arrow up';
upArrow.textContent = '▲';
cursor.appendChild(upArrow);

const downArrow = document.createElement('div');
downArrow.className = 'arrow down';
downArrow.textContent = '▼';
cursor.appendChild(downArrow);

const leftArrow = document.createElement('div');
leftArrow.className = 'arrow left';
leftArrow.textContent = '◀';
cursor.appendChild(leftArrow);

const rightArrow = document.createElement('div');
rightArrow.className = 'arrow right';
rightArrow.textContent = '▶';
cursor.appendChild(rightArrow);

// Track the last mouse position
let lastX = 0;
let lastY = 0;

// Move the cursor based on mouse movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Determine the direction of the mouse movement
    const deltaX = e.pageX - lastX;
    const deltaY = e.pageY - lastY;

    // Hide all arrows initially
    upArrow.style.display = 'none';
    downArrow.style.display = 'none';
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';

    // Show the appropriate arrow based on movement direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal movement
        if (deltaX > 0) {
            rightArrow.style.display = 'block'; // Moving right
        } else {
            leftArrow.style.display = 'block'; // Moving left
        }
    } else {
        // Vertical movement
        if (deltaY > 0) {
            downArrow.style.display = 'block'; // Moving down
        } else {
            upArrow.style.display = 'block'; // Moving up
        }
    }

    // Update last mouse position
    lastX = e.pageX;
    lastY = e.pageY;
});

// Hide arrows when not moving
let timeout;
document.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        upArrow.style.display = 'none';
        downArrow.style.display = 'none';
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none'; // Hide arrows
    }, 500); // Hide arrows after 500ms of no movement
});

document.addEventListener("DOMContentLoaded", function () {
    // ---- Home Section Animation ----
    const skills = ["a Web Developer", "a Data Scrapper", "a Problem Solver"];
    let skillIndex = 0;
    let letterIndex = 0;
    const skillElement = document.getElementById("skill");

    function typeSkill() {
        if (letterIndex < skills[skillIndex].length) {
            skillElement.textContent += skills[skillIndex][letterIndex];
            skillElement.style.opacity = 1;
            letterIndex++;
            setTimeout(typeSkill, 100);
        } else {
            setTimeout(eraseSkill, 1500);
        }
    }

    function eraseSkill() {
        if (letterIndex > 0) {
            skillElement.textContent = skills[skillIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(eraseSkill, 50);
        } else {
            skillElement.style.opacity = 0;
            skillIndex = (skillIndex + 1) % skills.length;
            setTimeout(typeSkill, 500);
        }
    }

    typeSkill();
});
    // ---- FAQ Section Toggle ----
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", function () {
            // Hide all other answers
            document.querySelectorAll(".answer").forEach((ans) => {
                if (ans !== this.querySelector(".answer")) {
                    ans.style.display = "none";
                }
            });

            // Toggle current answer
            const answer = this.querySelector(".answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });




    document.addEventListener("DOMContentLoaded", function () {
        // Select all sections
        const sections = {
            contactForm: document.getElementById("contactForm"),
            homeSection: document.getElementById("homeSection"),
            faqSection: document.getElementById("faqSection"),
            projects: document.getElementById("projects"),
            skills: document.getElementById("skills")
        };
    
        function showSection(sectionId) {
            // Hide all sections
            Object.values(sections).forEach(sec => {
                if (sec) sec.style.display = "none"; // Check if section exists
            });
    
            // Show the selected section
            if (sections[sectionId]) {
                sections[sectionId].style.display = "block";
                sections[sectionId].scrollIntoView({ behavior: "smooth" });
            } else {
                console.error(`Section with ID '${sectionId}' not found!`);
            }
        }
    
        // Attach event listeners
        document.getElementById("contactLink")?.addEventListener("click", function (event) {
            event.preventDefault();
            showSection("contactForm");
        });
    
        document.getElementById("homeLink")?.addEventListener("click", function (event) {
            event.preventDefault();
            showSection("homeSection");
        });
    
        document.getElementById("faqLink")?.addEventListener("click", function (event) {
            event.preventDefault();
            showSection("faqSection");
        });
    
        document.getElementById("projectsLink")?.addEventListener("click", function (event) {
            event.preventDefault();
            showSection("projects");
        });
    
      
            document.getElementById("skillsLink")?.addEventListener("click", function (event) {
                event.preventDefault();
                showSection("skills");
            });
        });
            


    document.querySelectorAll(".projectCard").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    
        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0) rotateX(0)";
        });
    });
    
