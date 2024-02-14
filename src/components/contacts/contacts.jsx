import React from 'react'
import './contacts.css'

const contacts = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, obcaecati tempore sit itaque qui esse architecto nemo rerum asperiores mollitia, officiis debitis aut expedita, voluptatem labore ab recusandae quasi atque.</span>
                <br/>
                <span className='secondaryText'> email:lckpallewela@gmail.com</span>
                <span className='secondaryText'> phone:0703121778</span>
                
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="contact" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default contacts