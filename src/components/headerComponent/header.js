import React from 'react';

// Header
function Header() {
  return (
    <header className="container">
        <div className="row">
            <div className="col-12 col-sm-10">
                <img src="/images/gnc-logo.png" alt="GNC Live Well" />
                <img src="/images/live-nation-logo.png" alt="Live Nation Concerts" />
            </div>
            <div className="col-12 col-sm-2 text-right share">
                <p>Share</p>
                <p><i className="fab fa-facebook-square square-full fa-2x"></i></p>
                <p><i className="fab fa-twitter-square fa-2x"></i></p>
            </div>
        </div>
    </header>
  );
}

export default Header;
