import React, { useEffect, useState } from 'react'
import FAQitems from './FAQitems'

function FAQ() {


    const [storeFaq, setStoreFaq] = useState([])
    const [error, setError] = useState(null)
    const [openItemId, setopenItemId ] = useState(null)


const togglePanel = (id) => {
    setopenItemId(prevId => (prevId === id ? null : id))  
}
// This toggle function was made with the help of AI to be able to get it functioning as the way i want.

useEffect(() => {


    const getFaqInfo = async () => {

        try{
            const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')

            if(!res.ok) {
                throw new Error ('Failed to get the FAQ info') 
            }

            const data = await res.json()
            setStoreFaq(data)
        } catch(error) {
            setError(`Could not retrieve the data: ${error.message}`)
        }
    }

    getFaqInfo()
}, [])





  return (
    <section className="faq">
        <div className="container">
            <div className="leftside">
                <div className="fq-title container mb-1">
                    <h2 className="txt-center mb-1">Any questions? <br/> Check out the FAQs</h2>
                    <p className="txt-center mb-1">Still have unanswered questions and need
                    to get in touch?</p>
                </div>
                <div className="call-us">
                    <div className="box">
                        <img src="./images/phone-icon.svg" alt=""/>
                        <p>Still have  questions?</p>
                        <div className="btn">
                            <button className="btn-call-1">
                            <span>Contact us</span>
                            <img src="./images/blue-arrow.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="box">
                        <img src="./images/chat-icon.svg" alt=""/>
                        <p>Don't like phone calls?</p>
                        <div className="btn">
                            <button className="btn-call-2">
                            <span>Contact us</span>
                            <img src="./images/green-arrow.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightside">

                {error && <div> {error}</div>}
                {storeFaq.map(item => (
                    <FAQitems key={item.id} item={item} isOpen={openItemId === item.id} onToggle={() => togglePanel(item.id)} />
                ))}
                
            </div>
        </div>
        
        <div className="call-us-2">
            <div className="box">
                <img src="./images/phone-icon.svg" alt=""/>
                <p>Still have  questions?</p>
                <div className="btn">
                    <button className="btn-call-1">
                    <span>Contact us</span>
                    <img src="./images/blue-arrow.svg" alt=""/>
                    </button>
                </div>
            </div>
            <div className="box">
                <img src="./images/chat-icon.svg" alt=""/>
                <p>Don't like phone calls?</p>
                <div className="btn">
                    <button className="btn-call-2">
                    <span>Contact us</span>
                    <img src="./images/green-arrow.svg" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ