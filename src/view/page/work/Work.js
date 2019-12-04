import React, { useEffect, useMemo, useState } from 'react'
import classnames from 'classnames/bind';
import style from './Work.scss';
import WorkDetail from '../../component/work/WorkDetail';
import WorkItem from '../../component/work/WorkItem';
import worksData from '../../../data/works';

const cx = classnames.bind(style);
const mn = "WorkPage";

function Work({
  match: {
    params: {
      id
    }
  }
}) {
  const matchedWorkIndex = useMemo(() => worksData.data.findIndex(({ id: workId }) => workId === id), [id]);
  const [workData, setWorkData] = useState(worksData.data[matchedWorkIndex]);
  const [nextWorkData, setNextWorkData] = useState(worksData.data[matchedWorkIndex + 1] || worksData.data[0]);

  useEffect(() => {
    window.scrollTo(0,0);
    setWorkData(worksData.data[matchedWorkIndex]);
    setNextWorkData(worksData.data[matchedWorkIndex + 1] || worksData.data[0]);
  }, [id, matchedWorkIndex]);

  return (
    <div className={cx(`${mn}`)}>
      <WorkDetail desc={workData.desc} distribute={workData.distribute} title={workData.title} />
      <footer className={cx(`${mn}_footer`)}>
        <div className={cx(`${mn}_footer_wrp`)} >
          <p className={`${mn}_footer_guide`}>Read Next</p>
          <WorkItem
            color={{ title: 'white', info: 'white' }}
            date={nextWorkData.date} env={nextWorkData.env}
            id={nextWorkData.id}
            title={nextWorkData.title}
            spec={nextWorkData.spec}
          />
        </div>
      </footer>
    </div>
  )
}

export default Work;