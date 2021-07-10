import React from 'react'
import Header from '../Components/Header'
import HomeBody from '../Components/HomeBody'
import Slider from '../Components/Slider'
import MiddleImages from '../Components/MiddleImages'
import Footer from '../Components/Footer'
function Home() {
    return (
        <div style={{backgroundColor:""}}>
            <Header/>
            <Slider/>
            <HomeBody/>
            <MiddleImages/>
            <Footer/>
        </div>
    )
}

export default Home
