import React from 'react'
import "../Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer-section"  >
            <div className="container">
                <div className="footer-cta py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-4 col-md-4 ">
                            <div className="single-cta">
                                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>1010</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 ">
                            <div className="single-cta">
                                <FontAwesomeIcon className="icon" icon={faPhone} />
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-cta">
                                <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} />
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content py-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src="/images/eng-logo.png" className="img-fluid" alt="logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#">
                                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="copyright-text">
                                <p>Copyright &copy; {year}, All Right Reserved <a href="https://codepen.io/anupkumar92/">Kaana</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
