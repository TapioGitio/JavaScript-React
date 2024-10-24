import React, { useEffect, useState } from 'react'
import TestimonialsItem from './TestimonialsItem'

function Testimonials() {

const [testimonials, setTestimonials] = useState([])
const [error, setError] = useState(null)


useEffect(() => {
    
    const getTestamonials = async () => {

        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials') 

            if(!res.ok) {
                throw new Error("Failed to get the testimonial");
            }

            const data = await res.json()
            setTestimonials(data)
        } catch (error) {
            setError(`Error loading the testimonials: ${error.message}`)
        }
    }

    getTestamonials()
}, [])




  return (
    <section className="review">
        <div className="container">

            <div className="rev-title">
                <h2>Clients are <br/> Loving Our App</h2>
            </div>

            {testimonials.map(item => (
                <TestimonialsItem key={item.id} item={item} />
            ))}


        </div>
    </section>
  )
}

export default Testimonials