import './BirthdayCard.css'

function BirthdayCard ({birthday, age, daysLeft, day, birthdate, birthmonth}) {
  return (
    <div className='Birthday-card'>
        <div className="Birthday-card-header">
          <span className='Birthday-tag'>{birthday.tag}</span>
          <span className='Birthday-days'>{daysLeft}</span>
        </div>

        <div className='Birthday-content-div'>
        <img className="Birthday-img" src={birthday.image} />
        <p className="Birthday-name">{birthday.name}</p>
        <p className="Birthday-date">{birthmonth} {birthdate}, {day}</p>
        <p className="Birthday-age">AGE : {age}</p>
        </div>
      </div>
  );
}

export default BirthdayCard;