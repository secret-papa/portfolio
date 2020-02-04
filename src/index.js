import React from 'react';
import ReactDOM from 'react-dom';
import DeviceChecker from './util/DeviceChecker';
import App from './view/App';

const isMobile = new DeviceChecker().checkMobile(navigator.platform);

ReactDOM.render(<App isMobile={isMobile} />, document.getElementById('root'))