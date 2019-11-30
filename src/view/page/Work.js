import React, { useEffect, useMemo, useState } from 'react'
import WorkDetail from '../component/work/WorkDetail';
import WorkItem from '../component/work/WorkItem';
import worksData from '../../data/works';

function Work({
  match: {
    params: {
      id
    }
  }
}) {
  const matchedWorkIndex = useMemo(() => worksData.data.findIndex(({id: workId}) => workId === id), [id]);
  const [workData, setWorkData] = useState(worksData.data[matchedWorkIndex]);
  const [nextWorkData, setNextWorkData] = useState(worksData.data[matchedWorkIndex + 1] || worksData.data[0]);

  useEffect(() => {
    setWorkData(worksData.data[matchedWorkIndex]);
    setNextWorkData(worksData.data[matchedWorkIndex + 1] || worksData.data[0]);
  }, [id, matchedWorkIndex]);

  return (
    <div>
      <WorkDetail />
      <footer>
        <WorkItem
          color={{ title: 'white', info: 'white' }}
          date={nextWorkData.date} env={nextWorkData.env}
          id={nextWorkData.id}
          title={nextWorkData.title}
          spec={nextWorkData.spec}
        />
      </footer>
    </div>
  )
}

export default Work;