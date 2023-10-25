import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NOVOS LANÇAMENTOS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>novas</p>
                    <img src={hand_icon} alt=''/>
                </div>
                <p>colleções</p>
                <p>para todos</p>
            </div>
            <div className="hero-latest-btn">
                <div>Última coleção</div>
                <img src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=''/>
        </div>
    </div>
  )
}
