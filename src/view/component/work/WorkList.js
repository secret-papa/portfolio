import React, { useState } from 'react'
import classnames from 'classnames/bind';
import WorkItem from './WorkItem';
import worksData from '../../../data/works.json';
import style from './WorkList.scss';

const cx = classnames.bind(style);
const mn = "WorkList";

function WorkList() {
  const [workListData] = useState(worksData.data);
  return (
    <ul className={`${cx(mn)}`}>
      {
        workListData.map(({ id, date, env, title, spec }) => (
          <li key={id} className={cx(`${mn}_item`)}>
            <WorkItem color={{
              title: date.year < new Date().getFullYear() ? 'beige' : 'blue',
              info: 'black'
            }} date={date} env={env} id={id} title={title} spec={spec} />
          </li>
        ))
      }
    </ul>
  )
}

export default WorkList

