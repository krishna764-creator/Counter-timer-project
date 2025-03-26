
const daysElement = document.querySelector(".days");
const hourElement = document.querySelector(".hours");
const minuteElemment = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");
const h1 = document.querySelector("h1");
const countertimer = document.querySelector(".countertimer");



const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;


const TimerFunction = () => {


  // Generating  current date in dd/mm/yyy



  let now = new Date(),

    dd = String(now.getDate()).padStart(2, "0"),

    mm = String(now.getMonth() + 1).padStart(2, "0"),

    yyy = now.getFullYear();


    // Taking  Target date from user 




  const EnterDay = prompt("ENTER DAY").padStart(2, "0");

  const EnterMonth = prompt("ENTER MONTH").padStart(2, "0");

  now = `${mm} / ${dd} / ${yyy}`;

  // console.log(now);

  // console.log(`${EnterDay} / ${EnterMonth} / ${yyy}`);

  let TargetDate = `${EnterMonth} / ${EnterDay} / ${yyy}`;


  // Cheking if Target date is for next year



  if (now > TargetDate) TargetDate = `${EnterMonth} / ${EnterDay} / ${yyy + 1}`;

  

  
   const IntervalId = setInterval(() => {


    // converting TargetDate in milliseconds



    const timer = new Date(TargetDate).getTime();

    // console.log(TargetDate);



    //  taking currentDate in milliseconds




    const today = new Date().getTime();


    // finding  difference between target date and today date



    const difference = timer - today;



    // finding leftdays , hours , minutes and seconds as well



    const leftday = (Math.floor(difference / day));

    const lefthour = (Math.floor((difference % day) / hour));

    const leftminute = (Math.floor((difference % hour) / minute));

    const leftsecond = (Math.floor((difference % minute) / second));


    // showing timer in dom




    daysElement.innerText = leftday;

    hourElement.innerText = lefthour;

    minuteElemment.innerText = leftminute;

    secondElement.innerText = leftsecond;

    // console.log(`${leftday}: ${lefthour}: ${leftminute}: ${leftsecond}`);

    // console.log(timer);
    // console.log(today);
    // console.log(difference);
    // console.log(Math.floor(difference / day));
    // console.log(Math.floor((difference % day)/hour));
    // console.log(Math.floor((difference % hour)/minute));
    // console.log(Math.floor((difference % minute)/second));


    // set up setinterval after reaching the target date

    if (difference<0) {

      countertimer.style.display = "none";
      h1.innerText = "TIME'S UP";
      clearInterval(IntervalId);
      
    }

  }, 0);


};

TimerFunction();