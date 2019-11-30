import React from 'react'
import classnames from 'classnames/bind';
import style from './Header.scss';

const cx = classnames.bind(style);
const mn = 'Header';

function Hedaer() {
  return (
    <header className={cx(mn)}>
      <h1 className={cx(`${mn}_logo`)}>FRONTEND DEVELOPER</h1>
      <nav className={cx(`${mn}_nav`)}>
        <a className={cx(`${mn}_nav_item`)} href="#about">ABOUT</a>
        <a className={cx(`${mn}_nav_item`)} href="#work">WORK</a>
        <a className={cx(`${mn}_nav_item`)} href="#contact">CONTARCT</a>
      </nav>
    </header>
  )
}

export default Hedaer

