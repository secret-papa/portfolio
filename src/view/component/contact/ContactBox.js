import React from 'react'
import classnames from 'classnames/bind';
import style from './ContactBox.scss';

const cx = classnames.bind(style);
const mn = "ContactBox";

function ContactBox() {
  return (
    <section className={cx(`${mn}`)} id="contact" >
      <h2 className={cx(`${mn}_title`)} >CONTACT</h2>
      <ul className={cx(`${mn}_list`)}>
        <li className={cx(`${mn}_list_item`)}>
          <a className={cx(`${mn}_list_item_link`)} href="https://secret-papa.github.io/" target="_brank">Blog</a>
        </li>
        <li className={cx(`${mn}_list_item`)}>
          <a className={cx(`${mn}_list_item_link`)} href="https://github.com/secret-papa" target="_brank">GitHub</a>
        </li>
        <li className={cx(`${mn}_list_item`)}>
          <a className={cx(`${mn}_list_item_link`)} href="mailto:seungha0802@gmail.com" target="_brank">Email</a>
        </li>
        </ul>
    </section>
  )
}

export default ContactBox;

