import React from 'react';

import SweepstakesForm from '../formComponent/sweepstakes';

// Footer
function Home() {
  return (
    <div className="container mt-5 main-content">
        <div className="row large-gutters">
            <div className="col-12 col-lg-6 pl-0">
                <img src="/images/gnc-ticket-to-rock.png" alt="GNC Ticket to Rock" className="img-fluid" />
                <h1 className="red-text sweepstakes">Sweepstakes</h1>
                <h2 className="ribbon"><span className="ribbon-inner">Enter for a chance to win a Rock Flight<sup>&reg;</sup> to a Live Nation<sup>&reg;</sup> concert of your choice!<sup>+</sup></span></h2>
                <h3 className="mt-4 pl-4">1 Grand Prize winner will receive:</h3>
                <ul className="">
                    <li className="tickets pl-5 mb-3">2 tickets to a Live Nation concert in the U.S.+</li>
                    <li className="airfare pl-5 mb-3">Airfare & hotel accommodations for 2</li>
                    <li className="cash pl-5 mb-3">$200 cash gift card</li>
                </ul>
            </div>
            <div className="col-12 col-lg-6 p-lg-0 text-center text-md-right">
                <SweepstakesForm />
            </div>
        </div>
    </div>
  );
}

export default Home;
