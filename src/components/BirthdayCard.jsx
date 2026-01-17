import './BirthdayCard.css'
import { getDayColor} from '../utils/date';

function BirthdayCard ({birthday, age, daysLeft, day, birthdate, birthmonth}) {

  const dayColor = getDayColor(daysLeft);

  return (
    <div className="Birthday-card">
        <div className="Birthday-card-header">
          <span className={`Birthday-tag ${birthday.tag === "Family" ? "family" : birthday.tag === "Friend" ? "friend" : "college"}`}>{birthday.tag}</span>
          <span className={`Birthday-days ${dayColor}`}>{daysLeft === 0 ? "Today!" : `${daysLeft} ${daysLeft === 1 ? "day" : "days"}`}</span>
        </div>

        <div className='Birthday-content-div'>
        <img className="Birthday-img" src={birthday.image} />
        <p className="Birthday-name">{birthday.name}</p>
        <p className="Birthday-date">{birthmonth} {birthdate}, {day}</p>
        <p className="Birthday-age">Age : {age}</p>
        </div>
      </div>
  );
}

export default BirthdayCard;