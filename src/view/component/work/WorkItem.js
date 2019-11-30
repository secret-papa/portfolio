import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import classnames from 'classnames/bind';
import style from './WorkItem.scss';

const cx = classnames.bind(style);
const mn = "WorkItem";

function WorkItem({
  color: {
    title: titleColor,
    info: infoColor
  },
  date: {
    year,
    month
  },
  env,
  id,
  title,
  spec,
}) {
  return (
    <article className={cx(`${mn}`)}>
      <Link className={cx(`${mn}_link`)} to={`/work/${id}`}>
        <h3 className={cx(`${mn}_title`, titleColor)}>{title}</h3>
        <div className={cx(`${mn}_info`, infoColor)}>
          <span className={cx(`${mn}_info_left`)}>{year}.{month}</span>
          <span className={cx(`${mn}_info_center`, infoColor)}>{env}</span>
          <span className={cx(`${mn}_info_right`)}>{spec.join(', ')}</span>
        </div>
      </Link>
    </article>
  )
}

WorkItem.defaultProps = {
  color: {
    title: "blue",
    info: "black"
  }
}

WorkItem.propTypes = {
  color: PropTypes.shape({
    title: PropTypes.oneOf(["blue", "beige", "white"]),
    infoColor: PropTypes.oneOf(["black", "white"])
  }),
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

