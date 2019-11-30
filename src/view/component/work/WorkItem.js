import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind';
import style from './WorkItem.scss';

const cx = classnames.bind(style);
const mn = "WorkItem";

function WorkItem({
  date: {
    year,
    month
  },
  env,
  title,
  spec
}) {
  const isOldWork = new Date().getFullYear() > year;
  return (
    <article className={cx(`${mn}`, { old: isOldWork })}>
      <h3 className={cx(`${mn}_title`)}>{title}</h3>
      <div className={cx(`${mn}_info`)}>
        <span className={cx(`${mn}_info_left`)}>{year}.{month}</span>
        <span className={cx(`${mn}_info_center`)}>{env}</span>
        <span className={cx(`${mn}_info_right`)}>{spec.join(', ')}</span>
      </div>
    </article>
  )
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.shape({
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
  }).isRequired,
  env: PropTypes.string.isRequired,
  spec: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default WorkItem

