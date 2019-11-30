import React from 'react';
import { Link } from 'react-router-dom';
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
  id,
  title,
  spec
}) {
  const isOldWork = new Date().getFullYear() > year;
  return (
    <li className={cx(`${mn}`, { old: isOldWork })}>
      <article className={cx(`${mn}_wrp`)}>
        <Link className={cx(`${mn}_link`)} to={`/work/${id}`}>
          <h3 className={cx(`${mn}_title`)}>{title}</h3>
          <div className={cx(`${mn}_info`)}>
            <span className={cx(`${mn}_info_left`)}>{year}.{month}</span>
            <span className={cx(`${mn}_info_center`)}>{env}</span>
            <span className={cx(`${mn}_info_right`)}>{spec.join(', ')}</span>
          </div>
        </Link>
      </article>
    </li>
  )
}

WorkItem.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
  }).isRequired,
  env: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  spec: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default WorkItem

