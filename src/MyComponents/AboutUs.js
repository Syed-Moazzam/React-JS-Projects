import React from 'react'
import { Link } from 'react-router-dom'
import IntroOfAboutUs from './IntroOfAboutUs'
import StoryOfAboutUs from './StoryOfAboutUs'
import ValuesOfAboutUs from './ValuesOfAboutUs'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <>
        <IntroOfAboutUs/>
        <StoryOfAboutUs/>
        <ValuesOfAboutUs/>

        <div className="our-culture">
            <h1>Our Culture</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laborum earum inventore pariatur ullam vel nihil nemo dicta et maxime ad nam voluptatum impedit ex libero veniam quos, nesciunt dolorem! Suscipit reiciendis ex maxime aspernatur deserunt enim quibusdam veritatis fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus assumenda molestiae fugiat repudiandae rerum? Animi nesciunt sequi eaque eum.</p>
            <p style={{marginBottom: "1.8rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laborum earum inventore pariatur ullam vel nihil nemo dicta et maxime ad nam voluptatum impedit ex libero veniam quos, nesciunt dolorem! Suscipit reiciendis ex maxime aspernatur deserunt enim quibusdam veritatis fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus assumenda molestiae fugiat repudiandae rerum? Animi nesciunt sequi eaque eum.</p>

            <Link to="/contact" id='get-in-touch-link'>Get In Touch</Link>
        </div>
    </>
  )
}
