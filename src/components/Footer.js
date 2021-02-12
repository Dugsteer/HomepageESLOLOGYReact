import React from "react";

export default class Footer extends React.Component {
  state = {
    credits: undefined,
  };
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footer__copyright" id="footer">
            <p>© 2021 Copyright Esl-ology.com & copyright owners.</p>
            <p>
              Image credits <a href="homepage-credits.html">here</a>.
              Thanks,guys!
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
