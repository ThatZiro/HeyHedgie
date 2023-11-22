import './Dashboard.css'
function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <h2 className="quote">We don’t learn by doing, we learn by reflecting on what we’ve done.</h2>
        <div className="container">
          <div className="dashboard-section-1">
            <div className="card">
              <div className="card-header">
                <h2>Today</h2>
                <h3>11/21</h3>
              </div>
              <div className="card-content">
                <div className="daily-question">
                  <p>What made you smile today?</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <g clipPath="url(#clip0_1_95)">
                      <path d="M32.2383 1.4834C30.7412 -0.0136719 28.3213 -0.0136719 26.8242 1.4834L24.7666 3.53418L31.459 10.2266L33.5166 8.16895C35.0137 6.67188 35.0137 4.25195 33.5166 2.75488L32.2383 1.4834ZM11.7852 16.5225C11.3682 16.9395 11.0469 17.4521 10.8623 18.0195L8.83887 24.0898C8.64062 24.6777 8.79785 25.3271 9.23535 25.7715C9.67285 26.2158 10.3223 26.3662 10.917 26.168L16.9873 24.1445C17.5478 23.96 18.0605 23.6387 18.4844 23.2217L29.9209 11.7783L23.2217 5.0791L11.7852 16.5225ZM6.5625 4.375C2.93945 4.375 0 7.31445 0 10.9375V28.4375C0 32.0605 2.93945 35 6.5625 35H24.0625C27.6855 35 30.625 32.0605 30.625 28.4375V21.875C30.625 20.665 29.6475 19.6875 28.4375 19.6875C27.2275 19.6875 26.25 20.665 26.25 21.875V28.4375C26.25 29.6475 25.2725 30.625 24.0625 30.625H6.5625C5.35254 30.625 4.375 29.6475 4.375 28.4375V10.9375C4.375 9.72754 5.35254 8.75 6.5625 8.75H13.125C14.335 8.75 15.3125 7.77246 15.3125 6.5625C15.3125 5.35254 14.335 4.375 13.125 4.375H6.5625Z" fill="#1B242F"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_95">
                        <rect width="35" height="35" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h2>Streak</h2>
                <h3></h3>
              </div>
              <div className="card-content streak">
                <div className="streak-counter">
                  <h2>26</h2>
                  <h3>CURRENT STREAK</h3>
                </div>
                <div className="streak-counter">
                  <h2>45</h2>
                  <h3>LONGEST STREAK</h3>
                </div>
                <div className="streak-counter">
                  <h2>327</h2>
                  <h3>TOTAL ENTREES</h3>
                </div>
              
              </div>
            </div>
          </div>
          <div className="dashboard-section-2">
            <div className="card emotion-wheel"></div>
            <div className="card">
              <div className="card-header">
                <h2>Goals</h2>
              </div>
              <div className="card-content">
                <div className="goal goal-bg-blue">
                  <div>
                    <h2>Drink Water</h2>
                    <h3>Daily Streak : 6</h3>
                  </div>
                  <div className="checkbox-wrapper">
                    <input type="checkbox"/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="goal goal-bg-green">
                  <div>
                    <h2>Drink Water</h2>
                    <h3>Daily Streak : 6</h3>
                  </div>
                  <div className="checkbox-wrapper">
                    <input type="checkbox"/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="goal goal-bg-purple">
                  <div>
                    <h2>Drink Water</h2>
                    <h3>Daily Streak : 6</h3>
                  </div>
                  <div className="checkbox-wrapper">
                    <input type="checkbox"/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="goal goal-bg-red">
                  <div>
                    <h2>Drink Water</h2>
                    <h3>Daily Streak : 6</h3>
                  </div>
                  <div className="checkbox-wrapper">
                    <input type="checkbox"/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="goal goal-bg-pink">
                  <div>
                    <h2>Drink Water</h2>
                    <h3>Daily Streak : 6</h3>
                  </div>
                  <div className="checkbox-wrapper">
                    <input type="checkbox"/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <div className="dashboard-section-3">
            <div className="card definition">
              <div className="card-header">
                <h2>Grief</h2>
                <h3>Reaction to loss</h3>
              </div>
              <div className="card-content">
                <h2>Grief is a deep emotional response to loss, encompassing feelings like sadness, anger, and confusion. It can arise from various types of losses and involves a process of adjustment and healing.</h2>
                <p>After the sudden death of her beloved pet, Emily experienced overwhelming grief, struggling to cope with the intense sadness and emptiness that the loss brought.</p>
              </div>
            </div>
            <div className="card mantra">
              <div className="card-header">
                <h2>Mantra</h2>
              </div>
              <div className="card-content">
                <h2>Don’t be afraid to give up the good and go for the great</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
