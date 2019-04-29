import React from 'react';

// Header
function OfficialRulesModal() {
  return (
    <div className="official-rules">
        <div className="rules-content">
            <h1>Official Rules</h1>
            <ol>
                <li>Rule number one you must do this to win.</li>
                <li>You must also do this if you want to win.</li>
                <li>If you do this, you will lose</li>
                <li>Only one person per household may enter.</li>
            </ol>
            <p className="text-right"><a href="#" className="close-rules">X Close</a></p>
        </div>
    </div>
  );
}

export default OfficialRulesModal;
