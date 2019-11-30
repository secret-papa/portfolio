import React, { useState } from 'react'
import WorkItem from './WorkItem';
import workDataList from '../../../data/works.json';

function WorkList() {
  const [workListData] = useState(workDataList.data);
  return (
    <ul>
      {
        workListData.map(({ id, date,env, title, spec }) => <WorkItem key={id} date={date} env={env} id={id} title={title} spec={spec} />)
      }
    </ul>
  )
}

export default WorkList

