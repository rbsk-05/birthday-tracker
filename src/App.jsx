import './App.css'
import birthdays from './birthdays';
import BirthdayCard from './components/BirthdayCard';
import RecentCard from './components/RecentCard';
import {getAge, getDate, getDay, getBirthDate, getBirthMonth} from './utils/date';

function App() {

  //Use spread operator to create a new array
  //Sort based on upcoming b-days
  const upcomingBirthdays = [...birthdays].sort(
    (a,b) => getDate(a.dob) - getDate(b.dob)
  );

  return (
    <>
    <div className="App-header">
      <h1>Birthday Tracker</h1>
    </div>

    <div className="App-content">

      <div className="Upcoming-div">
        <h3>Upcoming BirthDays</h3>

        <div className="Birthday-card-div">
          {
            upcomingBirthdays.map(birthday => (
              <BirthdayCard 
                key = {birthday.id}
                birthday = {birthday}
                age = {getAge(birthday.dob)}
                daysLeft={getDate(birthday.dob)}
                day = {getDay(birthday.dob)}
                birthdate = {getBirthDate(birthday.dob)}
                birthmonth={getBirthMonth(birthday.dob)}
              />
            ))
          }
        </div>


      </div>

      <div className="Recent-div">
        <h3>Recent Birthdays</h3>

        <div className='Recent-card-div'>
          {/* STATIC CODE */}
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
