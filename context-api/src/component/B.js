import React from 'react'
import { democontext } from '../App'
function B() {
  return (
    <div>
        <democontext.Consumer>
            {
                (x)=>{
                    return(
                        <h1>b{x}</h1>
                    )
                }
            }
        </democontext.Consumer>
    </div>
  )
}

export default B;