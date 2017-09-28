import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Amaral">
        <Member name="Lucas" />
        <Member name="Paulo" />
        <Member name="Elizete" />
        <Member name="Rogério" />
    </Family>
    , document.getElementById('app'))