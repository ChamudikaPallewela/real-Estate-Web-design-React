import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className="secondaryText">
                    our vision is to make all people <br/>
                    the best place to live for them.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">230/5,Kandy</span>
                <div className="flexCenter f-menu">
                    <span>instergram</span><span>linkedin</span><span>email</span><span>whatsapp</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default footer