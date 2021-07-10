import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './style.css'
const images = [
    'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1600671012016-e5890d87f804?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const Slideshow = () => {
    return (
        <div className="SliderContainer">
            <div className="slide-container">
                <Zoom scale={0.4}>
                    {
                        images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                    }
                </Zoom>
            </div>
        </div>
    )
}

export default Slideshow