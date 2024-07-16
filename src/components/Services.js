import React from 'react'
import Title from './Title'
import { services } from '../data'



const Services = () => {
  return (
  <section className="section services" id="services">
      <Title title="Our" subTitle="Services"></Title>
      <div className="section-center services-center">
        {services.map((service) => {
          const {id, image} = service;
          return (
            <div className="about-img" key={id}>
            <img
            src={image}
            className="about-photo"
            alt="awesome beach"
            />
            </div>
          )
        })}
      </div>
    </section>

  )
}

export default Services
