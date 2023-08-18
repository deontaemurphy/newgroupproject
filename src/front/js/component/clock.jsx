import React from 'react'

export default function Home(props) { 
return(
<div className="bigCounter">
<div className="calendar"></div>
        <i className="far fa-clock"></i>
<div>{Math.floor(props.sec / 100000) % 10 }</div>
<div>{Math.floor(props.sec / 10000) % 10 }</div>
<div>{Math.floor(props.sec / 1000) % 10 }</div>
<div>{Math.floor(props.sec / 100) % 10 }</div>
<div>{Math.floor(props.sec / 10) % 10 }</div>
<div>{Math.floor(props.sec / 1) % 10 }</div>


</div>

  )
}