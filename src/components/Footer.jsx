import React from 'react';
import '../App.css';
function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className='footer'>
      <p>Copyright &copy; {currentYear} </p>
    </div>
  )
}
export default Footer;