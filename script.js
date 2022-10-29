const DaysEl= document.getElementById('Days');
const HoursEl= document.getElementById('Hours');
const MinutesEl= document.getElementById('Minutes');
const SecondsEl= document.getElementById('Seconds');

const newYears = '1 Jan 2023';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate =new Date();

    const totalseconds=(newYearsDate -currentDate) / 1000;
    const Days =Math.floor(totalseconds / 3600 /24);
    const Hours =Math.floor(totalseconds / 3600) % 24;
    const Minutes =Math.floor(totalseconds /60)% 60;
    const Seconds =Math.floor(totalseconds % 60);
    


    DaysEl.innerHTML = Days;
    HoursEl.innerHTML = Hours;
    MinutesEl.innerHTML = Minutes;
    SecondsEl.innerHTML = Seconds;
}

countdown();

setInterval(countdown,1000);

