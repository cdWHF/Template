import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import './index.less'

ReactDOM.render(
    <div>
        <Button type='primary'>hello world</Button>
        <div className={'a'}>12344</div>
    </div>,
    document.getElementById('app')
)