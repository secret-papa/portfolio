import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind';
import style from './WorkDetail.scss';

const cx = classnames.bind(style);
const mn = "WorkDetail";

function WorkDetail({
  desc,
  distribute,
  title
}) {
  return (
    <section className={cx(`${mn}`)}>
      <h2 className={cx(`${mn}_title`)} >{title}</h2>
      <p className={cx(`${mn}_desc`)}>{desc}</p>
      {
        !!distribute.length &&
        <div className={cx(`${mn}_distribute`)}>
          <div className={cx(`${mn}_distribute_guide_text`)}>DISTRIBUTE</div>
          <ul className={cx(`${mn}_distribute_list`)}>
            {
              distribute.map(({type, url}, idx) => (
                <li key={idx} className={cx(`${mn}_distribute_list_item`)}>
                  <a className={cx(`${mn}_distribute_list_item_link`)} href={url} target="_brank">{type}</a>
                </li>
              ))
            }
          </ul>
        </div>
      }
    </section>
  )
}

WorkDetail.defaultProps = {
  distribute: []
}

WorkDetail.propTypes = {
  desc: PropTypes.string.isRequired,
  distribute: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
  })),
  title: PropTypes.string.isRequired,
}

export default WorkDetail

