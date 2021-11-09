import React from 'react'
import Nav from '../Components/Nav'
import SlickSlider from '../Components/SlickSlider'
import slide1 from '../Assets/slide1.webp'
import slide2 from '../Assets/slide2.webp'
import slide3 from '../Assets/slide3.webp'
import slide4 from '../Assets/slide4.webp'
import slide5 from '../Assets/slide5.webp'
import classes from './Home.module.css'
import card1 from '../Assets/slides/slide1.webp'
import card2 from '../Assets/slides/slide2.webp'
import card3 from '../Assets/slides/slide3.webp'
import card4 from '../Assets/slides/slide4.webp'
import card5 from '../Assets/slides/slide5.webp'
import card6 from '../Assets/slides/slide6.webp'


const Home = () => {
    const carousel = [{ img: slide1 },
    { img: slide2 },
    { img: slide3 },
    { img: slide4 },
    { img: slide5 }]
    const cards = [{ img: card1, para: 'Celebrate this Prime Day with a new stand-up every hour! Today some of your favourite comedians will drop their 10-' }
        , { img: card2, para: 'Celebrate this Prime Day with a new stand-up every hour! Today some of your favourite comedians will drop their 10-' }
        , { img: card3, para: 'Celebrate this Prime Day with a new stand-up every hour! Today some of your favourite comedians will drop their 10-' }
        , { img: card4, para: 'Celebrate this Prime Day with a new stand-up every hour! Today some of your favourite comedians will drop their 10-' }
        , { img: card5, para: 'Celebrate this Prime Day with a new stand-up every hour! Today some of your favourite comedians will drop their 10-' }
        , { img: card6, para: 'Celebrate this Prime Day with a new stand-up every hour! Today some of your favourite comedians will drop their 10-' }
    ]
    return (
        <>
            <Nav />
            <SlickSlider
                slides={carousel}
                dots={true}
                arrowleft={classes.carouselarrowleft}
                arrowright={classes.carouselarrowright}
                cardStyle={classes.carouselCard}
                show={1}
                infinite={true}
            />


            <SlickSlider
                heading='Continue Watching'
                slides={cards}
                dots={false}
                // arrowleft={classes.carouselarrowleft}
                // arrowright={classes.carouselarrowright} 
                cardStyle={classes.SlideCard}
                show={5}
                infinite={false}
                padding={true}

            />





        </>
    )
}

export default Home
