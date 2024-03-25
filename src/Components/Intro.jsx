import React from 'react'
import { Link } from 'react-router-dom'


function Intro() {
  return (
    <div>

<h1 style={{marginTop:'100px',textAlign:'center'}}>"Welcome User"</h1>

<Link to='/login'>
<button style={{marginBottom:"280px",marginTop:'50px',marginLeft:'700px'}} className='btn btn-primary'>Click Here ...</button>

</Link>
    </div>
  )
}

export default Intro