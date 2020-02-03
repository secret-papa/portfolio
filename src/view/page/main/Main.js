import React from 'react'
import classnames from 'classnames/bind';
import About from '../../component/about';
import Work from '../../component/work'
import Contact from '../../component/contact';
import style from './main.scss';

const cx = classnames.bind(style);
const mn = 'Main'

function Main() {
  return (
    <div className={cx(`${mn}_container`)}>
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default Main

