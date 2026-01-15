import './RecentCard.css'

function RecentCard({birthday, age, day, birthdate, birthmonth, daysAgo}){
  return (
    <div className='Recent-card'>
      <div className='Birthday-card-header'>
        <span className='Birthday-tag'>{birthday.tag}</span>
        <span className='Birthday-days'>{daysAgo} {daysAgo <= 1 ? "day ago" : "days ago"}</span>
      </div>
      <div className='Recent-card-content'>
        <img src="darshan.jpg"/>
        <div>
          <p className='Birthday-name-recent'>{birthday.name}</p>
          <p className='Birthday-date-recent'>{birthmonth} {birthdate}, {day}</p>
        </div>
        
      </div>
      <div className="Recent-card-footer">
        <p>Age : {age}</p>
      </div>
    </div>
  );
}

export default RecentCard;