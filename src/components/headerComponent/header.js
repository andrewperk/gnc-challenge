import React from 'react';

// Header
function Header() {
  return (
    <header className="container">
        <div className="row">
            <div className="col-12 col-xl-10 text-center text-xl-left">
                <img src="/images/gnc-logo.png" alt="GNC Live Well" />
                <img src="/images/live-nation-logo.png" alt="Live Nation Concerts" />
            </div>
            <div className="col-12 col-xl-2 text-center text-xl-right pt-1 share">
                <p className="float-xl-left mr-3 pt-3">Share</p>
                <p className="float-xl-left mr-1 pt-2"><i className="fab fa-facebook-square square-full fa-3x"></i></p>
                <p className="float-xl-left pt-2"><i className="fab fa-twitter-square fa-3x"></i></p>
            </div>
        </div>
    </header>
  );
}

export default Header;
