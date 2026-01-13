import './App.css'
import birthdays from './birthdays';
import BirthdayCard from './components/BirthdayCard';
import {getAge, getDate, getDay, getBirthDate, getBirthMonth} from './utils/date';

function App() {
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
            birthdays.map(birthday => (
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
      </div>
    </div>
    </>
  );
}

export default App;
