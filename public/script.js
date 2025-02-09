let noClickCount = 0;

document.addEventListener("DOMContentLoaded", function () {
    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");
    let newButton = document.getElementById("newButton");

    // Clicking Yes will navigate to yes.html (default behavior)
    yesButton.onclick = function () {
        // Let browser navigate naturally
    };

    // Clicking No moves the No button and shows a heart under Yes
    noButton.onclick = function (event) {
        event.preventDefault(); // Prevent navigation for No button
        moveNoButton();
        showHeartUnderYes();
        noClickCount++;

        // Show the special button after 5 clicks on "No"
        if (noClickCount === 5) {
            newButton.style.display = "inline-block";
        }
    };

    function moveNoButton() {
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;

        let newX = Math.random() * (viewportWidth - 100); // Keep inside screen width
        let newY = Math.random() * (viewportHeight - 50); // Keep inside screen height

        noButton.style.position = "absolute";
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    function showHeartUnderYes() {
        const yesButton = document.getElementById("yesButton");
        const rect = yesButton.getBoundingClientRect(); // Get Yes button's position

        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";

        // Position the heart directly under the Yes button
        heart.style.position = "absolute";
        heart.style.left = `${rect.left + rect.width / 2}px`;
        heart.style.top = `${rect.bottom + 10}px`; // Slightly below Yes button

        document.body.appendChild(heart);

        // Remove the heart after animation
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
});



