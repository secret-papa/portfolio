import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './Layout.scss';

const cx = classnames.bind(style);
const mn = 'Layout';

function Layout({ children, Header }) {
  return (
    <div className={cx(mn)}>
      <div className={cx(`${mn}_container`)}>
        <Header />
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout

