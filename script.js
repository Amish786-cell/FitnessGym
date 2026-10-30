const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Toggle mobile navigation

menuBtn.addEventListener("click", function()  
{
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isOpen);

});

// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Membership buttons
document.querySelectorAll(".join-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        const plan = button.dataset.plan;

        alert(
            "You selected the " + plan + "membership plan. Please contact the gym to register."
        );
    });
});