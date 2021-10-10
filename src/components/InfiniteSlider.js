import React, { useEffect, useState } from 'react'
import * as data from "../data"
const InfiniteSlider = () => {
    const [content, setContent] = useState(null);
    // useEffect(() => {
    //     return () => {
    //         setInterval(() => setContent(data.), 3000);
    //     }
    // }, [input])
    return (
        <div className="infinite__slider">
            <p className="m-0 slider__text">
                New Registrations Open ! We are back with our third batch of Free Virtual NEET Coaching Classes. Apply now by filling out the form ..........
                We are looking for tutors for our NEET Classes! Interested applicants can fill out the registration form ........
                Now you can be a part of Team Kanaa too! Register as a volunteer....
            </p>
        </div>
    )
}

export default InfiniteSlider
