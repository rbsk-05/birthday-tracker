import './App.css'
import birthdays from './birthdays';
import BirthdayCard from './components/BirthdayCard';
import RecentCard from './components/RecentCard';
import {getAge, getDay, getBirthDate, getBirthMonth, getDaysAgo, getDaysLeft} from './utils/date';
import {useState} from "react";

function App() {

  const[isRecentOpen, setIsRecentOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleRecent = () => {
    setIsRecentOpen(prev => !prev)
  };

  //Use spread operator to create a new array
  //Sort based on upcoming b-days

  const filteredBirthdays = birthdays.filter(birthday => 
    birthday.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const upcomingBirthdays = [...filteredBirthdays].sort(
    (a,b) => getDaysLeft(a.dob) - getDaysLeft(b.dob)
  );

  const recentBirthdays = [...birthdays].filter(
    birthday => getDaysAgo(birthday.dob) > 0)
    .sort((a,b) => getDaysAgo(a.dob) - getDaysAgo(b.dob))
    .slice(0,3);

  return (
    <>
    <div className="App-header">
      <h1>Birthday Tracker</h1>
    </div>

    <div className="App-content">

      <div className="Upcoming-div">
        <div className='Upcoming-header'>
          <h3>Upcoming BirthDays</h3>

          <input 
            type="text"
            placeholder="Search..."
            value = {searchQuery}
            onChange= {(e) => setSearchQuery(e.target.value)}
            className="Search-bar-input"
          />
        </div>

        <div className="Birthday-card-div">
          {
            upcomingBirthdays.map(birthday => (
              <BirthdayCard 
                key = {birthday.id}
                birthday = {birthday}
                age = {getAge(birthday.dob)}
                daysLeft={getDaysLeft(birthday.dob)}
                day = {getDay(birthday.dob)}
                birthdate = {getBirthDate(birthday.dob)}
                birthmonth={getBirthMonth(birthday.dob)}
              />
            ))
          }
        </div>
      </div>

      <div className="recent-toggle" onClick={toggleRecent}>
        <span>{isRecentOpen ? ">" : "<"}</span>
      </div>

      <div className={`Recent-div ${isRecentOpen ? "open" : ""}`}>
        <h3>Recent Birthdays</h3>

        <div className='Recent-card-div'>
          {/* STATIC CODE */}
          {recentBirthdays.map(birthday => (
            <RecentCard 
              key = {birthday.id}
              birthday = {birthday}
              age = {getAge(birthday.dob)}
              daysLeft={getDaysLeft(birthday.dob)}
              day = {getDay(birthday.dob)}
              birthdate = {getBirthDate(birthday.dob)}
              birthmonth={getBirthMonth(birthday.dob)}
              daysAgo = {getDaysAgo(birthday.dob)}
              />
          ))}
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
