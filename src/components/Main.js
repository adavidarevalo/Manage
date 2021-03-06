import React from 'react'
import illustrationIntro from '../images/illustrationIntro.svg'
import '../styles/Main.scss'

const Main = () => {
    return(
        <section className='MainContainer'>
            <div className='PictureContainer'>
                <img src={ illustrationIntro } alt='Image'/>
            </div>
            <div className='Container'>
                <h2>Bring everyone together to build better products.</h2>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
                <button>Get Started</button>
            </div>
        </section>
    )
}

export default Main