document.body.addEventListener('click', (event) => {

    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = "Hi";

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x - 25}px`;
    circle.style.top = `${y - 25}px`;

    const color = ["red", "blue", "orange", "green", "purple", "white", "yellow", "wheat"];
    circle.style.backgroundColor = color[Math.floor(Math.random() * color.length)];

    document.body.appendChild(circle); // Fixed line

    setTimeout(() => {
        circle.remove();
    }, 5000);
});
