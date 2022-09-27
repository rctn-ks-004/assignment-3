import React from 'react'
import {useParams} from "react-router-dom";


function Member() {
    const {member} = useParams();
  return (
    <div>this is the page of {member}</div>
  )
}

export default Member