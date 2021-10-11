import React, { useEffect, useState } from 'react'
import * as data from "../data"
const InfiniteSlider = () => {
    return (
        <div className="infinite__slider">
            <p className="m-0 slider__text">
                {data.newsUpdate}
            </p>
        </div>
    )
}

export default InfiniteSlider
