import React from 'react';
import FooterNav from './FooterNav';
 
function Footer(props) {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <FooterNav />
        <p className="text-center text-muted">© 2021 Cultivate Community</p>
      </footer>
    </div>
  )
}

export default Footer;