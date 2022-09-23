import React from 'react'
import '../styles/Type.css';
function Type(props) {
  return (<div className='type'>
    <div
    className='type_name'
    >{props.links.type}</div>
    <ol className='typeol'>
        <li><a href={props.links.linka}  rel="noreferrer noopener"  target= '_blank'>Problem_1</a></li>
        <li><a href={props.links.linkb}  rel="noreferrer noopener"  target= '_blank'>Problem_2</a></li>
        <li><a href={props.links.linkc}  rel="noreferrer noopener"  target='_blank'>Problem_3</a></li>
        <li><a href={props.links.linkd}  rel="noreferrer noopener"  target='_blank'>Problem_4</a></li>
        <li><a href={props.links.linke}  rel="noreferrer noopener"  target='_blank'>Problem_5</a></li>
    </ol>
   </div>
  )
}

export default Type;