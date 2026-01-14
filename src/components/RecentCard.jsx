import './RecentCard.css'

function RecentCard(){
  return (
    <div className='Recent-card'>
      <div className='Birthday-card-header'>
        <span className='Birthday-tag'>Friend</span>
        <span className='Birthday-days'>2 Days Ago</span>
      </div>
      <div className='Recent-card-content'>
        <img src="darshan.jpg"/>
        <div>
          <p className='Birthday-name-recent'>Darshan M</p>
          <p className='Birthday-date-recent'>D.O.B</p>
        </div>
        
      </div>
      <div className="Recent-card-footer">
        <p>Age : 21</p>
      </div>
    </div>
  );
}

export default RecentCard;