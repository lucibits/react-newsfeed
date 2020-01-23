import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <p className="footer__text">Powered by <a href="https://newsapi.org/s/google-news-api" target="_blank" rel="noopener noreferrer" className="signature">News API</a> by Google</p>
        <p className="footer__text">Developed by <a href="https://www.linkedin.com/in/lucyvfr/" target="_blank" rel="noopener noreferrer" className="signature">Lucy</a></p>
      </div>
    );
  }
}

export default Footer;