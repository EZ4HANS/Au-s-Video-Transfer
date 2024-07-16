import slide2 from "./images/2-privacy.png"
import slide3 from "./images/3-history.png"
import slide7 from "./images/8-testimonial.png"
import slide8 from "./images/9-closing.png"
import serviceImg from "./images/5-service.png"
import ratesImg from "./images/7-rates.png"
import ratesImg2 from "./images/6-service.png"




export const pageLinks = [
    {id: 1, href:"#home", text:"home"},
    {id: 2, href:"#about", text:"about"},
    {id: 3, href:"#services", text:"services"},
    {id: 4, href:"#tours", text:"Testimonials"},
]

export const socialLinks =[
    {id: 1, href:"https://www.facebook.com/aurora.s.ubana", icon: "fab fa-facebook"},
    {id: 2, href:"https://www.instagram.com/aus_video_transfer_services_/", icon: "fab fa-instagram"},
    {id: 3, href:"https://g.co/kgs/f98x5E", icon: "fab fa-squarespace"},
]

export const services = [
    {id: 1, image: serviceImg},
    {id: 2, image: ratesImg},
    {id: 3, image: ratesImg2}
]

export const tours =[
    {id: 2, image: slide2, date: "August 12th 2002 - Present", title: "Privacy Policy", location: "Palanan, Makati", duration: "3 - 5 Working Days"},
    {id: 3, image: slide3, date: "August 12th 2002 - Present", title: "History", location: "Palanan, Makati", duration: "3 - 5 Working Days"},
    {id: 7, image: slide7, date: "August 12th 2002 - Present", title: "Testimonials", location: "Palanan, Makati", duration: "3 - 5 Working Days"},
    {id: 8, image: slide8, date: "August 12th 2002 - Present", title: "Closing", location: "Palanan, Makati", duration: "3 - 5 Working Days"},
]