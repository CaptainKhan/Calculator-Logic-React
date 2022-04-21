import React, { useState } from 'react';
import './Header.css'

export default function Header(props) {
    const [myState, setState] = useState(props.myId)
  return <div className="header">
     <div>Count: {myState}</div>
    <div>
    <button onClick={()=>setState(myState - 1)}>-</button>
     <button onClick={()=>setState(myState + 1)}>+</button>
    </div>
  </div>;
}
