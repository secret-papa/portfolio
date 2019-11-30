import React from 'react'
import classnames from 'classnames/bind';
import style from './AboutText.scss';

const cx = classnames.bind(style);
const mn = 'AboutText'

function About() {
  return (
    <p className={`${cx(mn)}`} id="about">
      나는 같이 만들어 가는것을 좋아한다. 협의를 통해 규칙을 만들고 이를 지키기 위해 노력하고 부족한 부분을 알아가게 되고 이를 보완하며 노력하는 과정이 즐겁다.
      <br/>
      팀에 소속되어 작성한 코드는 개인의 코드가 아닌 팀의 코드여야 하며 이를 같이 만들어 가는 것이 중요하다고 생각한다.
      <br/>
      <br/>
      나는 상생해 나가는 개발 문화를 만들고 주도해 나갈수 있는 개발자가 되고 싶다.
    </p>
  )
}


export default About

