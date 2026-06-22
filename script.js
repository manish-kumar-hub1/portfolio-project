// Requirement: Day 1 Setup & Wait for DOM to load fully
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript successfully connected and working! 🚀");

    /* ==========================================
       1. DARK MODE TOGGLE & LOCAL STORAGE
       ========================================== */
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Check local storage for previous selection
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleBtn.innerText = "☀️ Light Mode";
    }

    // Event listener for clicking dark mode toggle
    themeToggleBtn.addEventListener("click", () => {
        // Requirement: DOM manipulation (classList toggle)
        document.body.classList.toggle("dark-mode");
        
        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
            theme = "dark";
            themeToggleBtn.innerText = "☀️ Light Mode";
        } else {
            themeToggleBtn.innerText = "🌙 Dark Mode";
        }
        
        // Requirement: Save user preferences locally
        localStorage.setItem("portfolio-theme", theme);
    });


    /* ==========================================
       2. SHOW / HIDE CONTENT FUNCTIONALITY
       ========================================== */
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreText = document.getElementById("more-text");

    readMoreBtn.addEventListener("click", () => {
        // Requirement: DOM manipulation to update dynamic display content & styles
        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            readMoreBtn.innerText = "Hide Details";
            readMoreBtn.style.background = "#38bdf8";
            readMoreBtn.style.color = "#0f172a";
        } else {
            moreText.style.display = "none";
            readMoreBtn.innerText = "Read More";
            readMoreBtn.style.background = "transparent";
            readMoreBtn.style.color = "#38bdf8";
        }
    });


    /* ==========================================
       3. INTERACTIVE SKILLS SECTION
       ========================================== */
    const skillItems = document.querySelectorAll("#skills ul li");
    
    skillItems.forEach(skill => {
        // Event Listener added to each interactive feature item
        skill.addEventListener("click", () => {
            alert(`Nice! You are viewing details for: ${skill.textContent.split('(')[0].trim()}`);
        });
    });


    /* ==========================================
       4. FORM VALIDATION WITH REAL-TIME FEEDBACK
       ========================================== */
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", (event) => {
        // Stop default form reload
        event.preventDefault();

        // Target field values
        const nameValue = document.getElementById("name").value.trim();
        const emailValue = document.getElementById("email").value.trim();
        const messageValue = document.getElementById("message").value.trim();

        // Check 1: Empty input check
        if (nameValue === "" || emailValue === "" || messageValue === "") {
            showFeedbackMessage("Error: Please fill out all fields completely.", "#fecaca", "#b91c1c");
            return;
        }

        // Check 2: Sample code requirement logic (Validating '@' and '.')
        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            showFeedbackMessage("Error: Please enter a valid email address.", "#fecaca", "#b91c1c");
            return;
        }

        // Check 3: Length validation (Minimum 10 characters)
        if (messageValue.length < 10) {
            showFeedbackMessage("Error: Message must contain at least 10 characters.", "#fecaca", "#b91c1c");
            return;
        }

        // Success State
        showFeedbackMessage(`Success: Thank you ${nameValue}! Your message has been recorded.`, "#bbf7d0", "#15803d");
        contactForm.reset();
    });

    // Requirement: Create Reusable Functions for status output management
    function showFeedbackMessage(text, bgColor, textColor) {
        formMessage.innerText = text;
        formMessage.style.backgroundColor = bgColor;
        formMessage.style.color = textColor;
        formMessage.style.display = "block";
    }
});