import React from 'react'
import { features } from '../../data'
import './Features.css'

function Features() {
  return (
    <section className='features'>
        <div className="features-container">
          <div className="left-features">
              <h3>What's different about Manage?</h3>
              <p>Manage provides all the functionality your team needs, without the complexity.
                 Our software is tailor-made for modern digital product teams.</p>
          </div>

          <div className="right-features">
            {features.map((item)=> {
              const {id, number, text, head} = item;
              return (
                <div className="feature" key={id}>
                   <div className="feature-topic">
                      <button className='num-btn'>{number}</button>
                      <h4>{head}</h4> 
                    </div>
                    <div className="feature-text">
                      <p>{text}</p> 
                    </div>
                </div>
              )
            })}
          </div>    
        </div>
    </section>
  )
}

export default Features