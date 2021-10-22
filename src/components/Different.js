import React from "react"
import { dataDifferent } from "../data"
import "../styles/Different.scss"

const Different = () =>{
  return(
    <section className="DifferentContainer">
      <div className="DifferentMain">
        <h2>What’s different about Manage?</h2>
        <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <div className="DifferentFlex">
        {dataDifferent.map(item => <div className="DifferentElement">
          <div>
            <p>0{item.number}</p>
            <h3>{item.title}</h3>
          </div>
          <p>{item.paragraph}</p>
        </div>
        )}
      </div>
    </section>
  )
}

export default Different