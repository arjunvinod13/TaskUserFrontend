import React from 'react'
import Data from './Data'
import Info from './Info'



function Dashboard() {
  return (
    <div>


        <div className="row">

            <div className="col-6 mx-2">
            <Data/>
            </div>




            <div className="col-5">


           <Info/>



            </div>



        </div>


    </div>
  )
}

export default Dashboard