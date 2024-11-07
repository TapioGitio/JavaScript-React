import React, { useEffect, useState } from 'react'
import TestimonialsItem from './TestimonialsItem'

function Testimonials() {

const [storeTestimonials, setStoreTestimonials] = useState([])
const [error, setError] = useState(null)


useEffect(() => {
    
    const getTestamonials = async () => {

        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials') 


            if(res.ok) {

                const data = await res.json()
                setStoreTestimonials(data)  

            } else if (res.status === 404) {
                throw new Error("Testimonials not found, check the URL")
        
            } else if (res.status >= 500){
                throw new Error("Server issue, come back later")
        
            } else {
                throw new Error("We are having a coffee break, try again later")
            }
        }
        catch (error) {
            setError(`Error loading: ${error.message}`)
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

            {error && <div className='error'>{error}</div>}
            {storeTestimonials.map((item) => (
                <TestimonialsItem key={item.id} item={item} />
            ))}


        </div>
    </section>
  )
}

export default Testimonials
