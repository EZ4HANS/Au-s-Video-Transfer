import React from 'react'
import aboutImg from "../images/4-about-us.png"
import Title from './Title'

const About = () => {
  return (
  <section className="section" id="about">
    <Title title="about" subTitle="us"></Title>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About
