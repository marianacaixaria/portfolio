document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("custom-cursor");
    let posX = 0, posY = 0;
    
    document.addEventListener("mousemove", (e) => {
        posX = e.clientX;
        posY = e.clientY;
    });

    function animateCursor() {
        cursor.style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();
});
