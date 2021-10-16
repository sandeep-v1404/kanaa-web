import React from 'react'
import * as data from "../data"
const Timeline = () => {
    return (
        <section id="history" className="section parallax">
            <div className="overlay"></div>
            <div className="container">
                <div className="title-box text-center white">
                    <h2 className="title text-light fw-bolder">The Journey</h2>
                </div>
                <div className="wrapper mt-5">
                    <div className="center-line">
                        <button className="scroll-icon"><i className="fas fa-caret-up"></i></button>
                    </div>
                    {
                        data.journey.map((elem, idx) =>
                            <div key={elem.id} className={idx % 2 === 0 ? "row row-1" : "row row-2"}>
                                <section>
                                    <i className="icon"></i>
                                    <div className="details">
                                    </div>
                                    <p className="fw-bolder fs-5">
                                        {elem.content}
                                    </p>
                                </section>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Timeline
