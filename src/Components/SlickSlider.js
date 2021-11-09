import React, { useState } from 'react'
import Slider from "react-slick";
import classes from './Slider.module.css';

const SampleNextArrow = ({ onClick, custom, show }) => {
    return (<>
        {
            show ?
                <div className={`${classes.nextArrow} ${custom}`} onClick={onClick}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                :
                ''
        }
    </>

    )
}

const SamplePrevArrow = ({ onClick, custom, show }) => {
    return (
        <>{
            show ?
                <div className={`${classes.prevArrow} ${custom}`} onClick={onClick}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                :
                ''

        }
        </>
    )
}

const SlickSlider = (props) => {
    const [showleft, setShowleft] = useState(false)
    const [showright, setShowright] = useState(true)
    const settings = {
        dots: props.dots,
        nextArrow: <SampleNextArrow show={showright} custom={props.arrowright} />,
        prevArrow: <SamplePrevArrow show={showleft} custom={props.arrowleft} />,
        infinite: props.infinite,
        speed: 500,
        slidesToShow: props.show,
        slidesToScroll: 1,
        afterChange: (current, total) => {
            if (current !== 0) {
                setShowleft(true)
            } else {
                setShowleft(false)
            }
            console.log(total)
        },
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className={`${classes.slidecontainer} ${props.padding && classes.extraTopPadding}`}>
            {props.heading && <h3 className={classes.heading}>{props.heading}</h3>}
            <Slider {...settings} style={props.padding && { padding: '0 6vh' }}>
                {props.slides.map((slide, index) =>
                    <div key={index} className={props.cardStyle} >
                        <img src={slide.img} alt='cardsimage' />
                        {!props.infinite &&
                            <div className={classes.desc}>
                                <div className={classes.topHead}>
                                    <div className={classes.play}>
                                        &nbsp;
                            <i class="fa fa-play" style={{ color: '#fff' }} aria-hidden="true"></i>
                                    </div>
                                    <h3 className={classes.playTxt}>Play</h3>
                                    <div className={classes.sideicons}>
                                        <i className='fa fa-play' aria-hidden="true"></i>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <h4 className={classes.tag}>included with prime </h4>
                                <h3 className={classes.name}>subheading</h3>
                                <p className={classes.para}>{slide.para}</p>
                                <div className={classes.time}>
                                    <p >1 h 23 min  2016</p>
                                    <i className={`fa fa-comment-o ${classes.message}`} aria-hidden="true"></i>
                                    <div className={classes.border}>
                                        U/A 16+
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                )
                }
            </Slider>
        </div>
    )
}

export default SlickSlider
