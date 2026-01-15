function getBirthDate(dob){
  const birthDate = new Date(dob);
  return birthDate.getDate();
}

function getBirthMonth(dob){
  const birthDate = new Date(dob);
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return months[birthDate.getMonth()]; //INDEXING
}

function getAge(dob){
  const birthDate = new Date(dob); //CHANGES OUR DATA INTO IST
  const today = new Date() // GETS CURRENT IST DATA
  
  let age = today.getFullYear() - birthDate.getFullYear(); //CALCULATES AGE

  //IF BDAY NOT HAPPEND YET, SUBTRACT 1 FROM AGE
  if (birthDate.getMonth() > today.getMonth() || (
      birthDate.getMonth() === today.getMonth() &&
      birthDate.getDate() > today.getDate()))
      {
      age --;
      }
  return age
}

function getDaysLeft(dob){
  const birthDate = new Date(dob);
  const today = new Date();

  today.setHours(0, 0, 0, 0); //Otherwise day is already passed - Edge case noticed if Today is B'Day

  //CALCULATING NEXT BDAY USING DAY, MONTH / YEAR IS CURRENT YEAR
  let nextBirthdate = new Date(
    today.getFullYear(), 
    birthDate.getMonth(), birthDate.getDate()
  );


  //IF HER BDAY IS JAN 1 2026, TDY IS JAN 13 2026 => SET IT TO JAN 1 2027
  if (nextBirthdate < today){
    nextBirthdate.setFullYear(today.getFullYear() + 1)
  }

  const daysLeftMS = nextBirthdate - today; //DATA IS STORED IN ms(milliseconds)
  const daysLeft = Math.ceil(daysLeftMS/(1000 * 60 * 60 * 24)); //CONVERT ms => DAYS
  return daysLeft;
  
}


function getDay(dob){
  const birthDate = new Date(dob);
  const today = new Date();

  const bdate = birthDate.getDate()
  const bmonth = birthDate.getMonth()

  let temp = new Date(today.getFullYear(),bmonth, bdate);
  
  const day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]

  return day[temp.getDay()]
}

function getDayColor(daysLeft){
  if (daysLeft < 7) return "red"
  else if (daysLeft < 31) return "yellow"
  else return "green"
}

function getDaysAgo(dob){
  const today = new Date();
  const birthDate = new Date(dob);

  today.setHours(0, 0, 0, 0);
  
  const lastBirthDay = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (lastBirthDay > today) {
    lastBirthDay.setFullYear(today.getFullYear() - 1);
  }

  const daysAgoMs = today - lastBirthDay;
  const daysAgo = Math.floor(daysAgoMs / (1000 * 60 * 60 *24));

  return daysAgo; 
}

export {getAge, getDaysLeft, getDay, getBirthDate, getBirthMonth, getDayColor, getDaysAgo}
