import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categoryes/Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categoryes/Business">Business</Link></li>
        <li><Link to="/posts/categoryes/Education">Education</Link></li>
        <li><Link to="/posts/categoryes/Entertainment">Entertainment</Link></li>
        <li><Link to="/posts/categoryes/Art">Art</Link></li>
        <li><Link to="/posts/categoryes/Investment">Investment</Link></li>
        <li><Link to="/posts/categoryes/Uncategorized">Uncategorized</Link></li>
        <li><Link to="/posts/categoryes/Weather">Weather</Link></li>
      </ul>
      <div className="footer__capyright">
        <small>All Rights Reserved &copy; Copyright, EGTOR Tutorials</small>
      </div>
    </footer>
  )
}

export default Footer