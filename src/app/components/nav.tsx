export default function Nav(){
    return(
        <div className="navbar">
        <div className="navbar-logo">Portfolio</div>
        
        {/* <!-- Desktop Navigation --> */}
        <div className="desktop-nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Skills</a>
        </div>
        
        {/* <!-- Mobile Navigation --> */}
        <div className="mobile-nav">
          <button className="menu-btn" id="menu-btn">&#8801;</button>
          <div className="menu hidden" id="menu">
            <ul className="menu-items">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">About</a></li>
              <li><a href="#" className="nav-link">Skills</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
}