import React from 'react'
import classnames from 'classnames/bind';
import WorkList from './WorkList';
import style from './WorkBox.scss';

const cx = classnames.bind(style);
const mn = "WorkBox";

function WorkBox() {
  return (
    <section className={cx(`${mn}`)} id="work">
      <h2 className={cx(`${mn}_title`)}>WORKS</h2>
      <WorkList />
    </section>
  )
}

export default WorkBox

