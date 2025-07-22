document.body.addEventListener('click', function (e) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    const x = e.clientX;
    const y = e.clientY;
    circle.style.left = `${x - 25}px`;  
    circle.style.top = `${y - 25}px`;   
  
   



     circle.style.position = 'absolute';

    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.borderRadius = '50%';
    circle.style.display = 'flex';
    circle.style.alignItems = 'center';
    circle.style.justifyContent = 'center';
    circle.style.color = 'white';
    circle.style.fontWeight = 'bold';
    circle.style.fontFamily = 'Arial, sans-serif';
    circle.style.zIndex = '9999';



    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  

    const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
    circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  
    document.body.appendChild(circle);
  

    setTimeout(() => {
      circle.remove();
    }, 5000);
  });
