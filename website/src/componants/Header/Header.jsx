import './Header.css'
function Header() {
  return (
    <>
      <header>
        <h1>Hey Hedgie</h1>
        <a href="#" className="profile">
          <div className="profile-pic">
            <img src="/buddies/25282b20c68038aee45cea468c322820.png" alt=""/>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="#59AFFF"/>
            </svg>
            <svg className="status" width="25" height="25" viewBox="0 0 23 23" fill="none">
              <circle cx="11.5" cy="11.5" r="10.5" fill="#52FF00" stroke="#252934" strokeWidth="2.5"/>
            </svg>
          </div>
          <div className="nametag">
            <h2>Mongoosedog93</h2>
            <p>online</p>
          </div>
        </a>
      </header>
    </>
  )
}

export default Header
