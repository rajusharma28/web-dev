<!-- Astrology website -->
<!-- Input: DOB -->
<!-- Prediction about you -->


<!-- Quiz: Update: Timer: automatically sumbit hojyga -->


const form = document.getElementById('astroForm');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const Name = document.getElementById('name').value;
    const SurName = document.getElementById('surname').value;
    const Day = Number(document.getElementById('day').value);
    const Month = Number(document.getElementById('month').value);
    const Year = Number(document.getElementById('year').value);

    const result = document.getElementById("result");
    
    const first_message = `Hello ${Name} ${SurName}.`;
    const second_message = `Your Zodiac sign is ${zodiacSigns[Month-1]}.`
    const third_message = compliments[Day-1];

    let index = Math.floor(Math.random()*20);
    const fourth_message =  victimCardCompliments[index];


    index = (Name.length * SurName.length * Year)%30;
    const fifth_message = recommendations[index];

    index = (Day*Month*Year)%20;
    const sixth_message = predictions[index];
    
    result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our Reccomendation for you: ${fifth_message} Your Future Prediction is: ${sixth_message}`;

})
