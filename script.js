document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");
    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();
});
function openForm() {
    document.getElementById("formBox").classList.add("active");
}

function closeForm() {
    document.getElementById("formBox").classList.remove("active");
}