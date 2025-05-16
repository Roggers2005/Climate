// Show welcome message on page load
window.onload = function () {
    alert("Welcome to our Climate Change Awareness Project!");
};

// Toggle between light and dark theme
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// You can add more interactive features here
// For example, responding to a button click:
function showClimateTip() {
    const tips = [
        "Turn off lights when not in use.",
        "Use reusable water bottles.",
        "Recycle electronics and plastics.",
        "Walk or bike instead of driving.",
        "Save water – take shorter showers!"
    ];
    const randomIndex = Math.floor(Math.random() * tips.length);
    alert("🌱 Climate Tip: " + tips[randomIndex]);
}
