import './App.css'

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
            <div className='Birthday-card'>
              <div className="Birthday-card-header">
                <span className='Birthday-tag'>Friend</span>
                <span className='Birthday-days'>10 days</span>
              </div>

              <div className='Birthday-content-div'>
                <img className="Birthday-img" src="darshan.jpg" />
              <p className="Birthday-name">DARSHAN M</p>
              <p className="Birthday-date">MAY 18, WED</p>
              <p className="Birthday-age">AGE: 21</p>
              </div>
            </div>

            <div className='Birthday-card'>
              <div className="Birthday-card-header">
                <span className='Birthday-tag'>Friend</span>
                <span className='Birthday-days'>10 days</span>
              </div>

              <div className='Birthday-content-div'>
                <img className="Birthday-img" src="darshan.jpg" />
              <p className="Birthday-name">DARSHAN M</p>
              <p className="Birthday-date">MAY 18, WED</p>
              <p className="Birthday-age">AGE: 21</p>
              </div>
            </div>

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
