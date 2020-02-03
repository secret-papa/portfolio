import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind';
import style from './WorkDetail.scss';

const cx = classnames.bind(style);
const mn = "WorkDetail";

function WorkDetail({
  desc,
  distribute,
  media,
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
      {
        !!media.length &&
        <div className={cx(`${mn}_media`)}>
          {
            media.map(({ caption, productEnv, type, url}) => {
              if (type === 'image') {
                return (
                  <figure className={cx(`${mn}_media_content`, `${mn}_media_${productEnv}`)} key={url}>
                    <img alt={caption} className={cx(`${mn}_media_content_src`)} src={url} />
                    <figcaption className={cx(`${mn}_media_content_caption`)}>{caption}</figcaption>
                  </figure>
                )
              } else {
                return (
                  <div className={cx(`${mn}_media_content`, cx(`${mn}_media_${productEnv}`))} key={url}>
                    <video autoPlay className={cx(`${mn}_media_content_src`)} loop>
                      <source src={url} type="video/mp4"></source>
                    </video>
                    <p className={`${cx(`${mn}_media_content_caption`)}`} >{caption}</p>
                  </div>
                )
              }
            })
          }
        </div>
      }
    </section>
  )
}

WorkDetail.defaultProps = {
  distribute: [],
  media: []
}

WorkDetail.propTypes = {
  desc: PropTypes.string.isRequired,
  distribute: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    productEnv: PropTypes.oneOf(['mobile', 'pc']),
    url: PropTypes.string,
  })),
  media: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string,
    url: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string.isRequired,
}

export default WorkDetail