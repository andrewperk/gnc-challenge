import React from 'react';

// Footer
function SweepstakeshtmlForm() {
  return (
    <form action="./" method="POST" className="p-3">
        <div className="container">
            <div className="row mb-2">
                <div className="col-12 col-md-6">
                    <label htmlFor="fname" className="text-left">First Name</label>
                    <input type="text" name="fname" id="fname" />
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="lname" className="text-left">Last Name</label>
                    <input type="text" name="lname" id="lname" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-12 col-md-6">
                    <label htmlFor="email" className="text-left">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="confirm-email" className="text-left">Confirm Email</label>
                    <input type="email" name="confirm-email" id="confirm-email" />
                </div>
            </div>
            <div className="row mb-2 text-left">
                <div className="col-12 col-md-6">
                    <label htmlFor="metro" className="">Select Your Metro Area</label>
                    <select name="metro" className="metro">
                      <option value="">SELECT</option>
                      <option value="la">Los Angeles</option>
                      <option value="da">Dallas</option>
                      <option value="co">Columbus</option>
                      <option value="ny">New York</option>
                      <option value="se">Seattle</option>
                      <option value="de">Denver</option>
                    </select>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="zipcode" className="text-left">Zip Code</label>
                    <input type="text" pattern="[0-9]{5}" name="zipcode" id="zipcode" />
                </div>
            </div>
            <div className="row mb-2 text-left">
                <div className="col-12">
                    <label htmlFor="phone1">Phone Number <span>(used only to contact winners)</span></label>
                    <input type="text" name="phone" id="phone1" size="3" maxLength="3" className="mr-2" />
                    <input type="text" name="phone" id="phone2" size="3" maxLength="3" className="mr-2" />
                    <input type="text" name="phone" id="phone3" size="4" maxLength="4" className="mr-2" />
                </div>
            </div>
            <div className="row checkboxes text-left">
                <div className="col-12">
                    <input type="checkbox" name="rules" id="rules" /><label htmlFor="rules">I agree to the <a href="#" className="show-rules">official rules</a>.</label><br/>
                    <input type="checkbox" name="offers" id="offers" /><label htmlFor="offers">Yes, I would like to receive special offers from GNC. <span className="red-text">*</span></label><br/>
                    <input type="checkbox" name="concert" id="concert" /><label htmlFor="concert">Yes, I would like concert inhtmlFormation from Live Nation. <span className="red-text">*</span></label>
                    <p><span className="red-text">*</span> Optional</p>
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-12 col-md-8 text-center text-md-left">
                <img src="/images/recaptcha.png" alt="Recaptcha" className="img-fluid text-center" />
                </div>
                <div className="col-12 col-md-4 mt-2 mt-md-0 mt-lg-0 text-md-right">
                    <button type="submit" value="Enter Now" className="button-ribbon"><span className="button-ribbon-inner">Enter Now</span></button>
                </div>
            </div>
        </div>
    </form>
  );
}

export default SweepstakeshtmlForm;
