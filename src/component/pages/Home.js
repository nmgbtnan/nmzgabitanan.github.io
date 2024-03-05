import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../css/tooplate-kool-form-pack.css';
import 'bootstrap/dist/css/bootstrap.css';
import introPic from '../images/nems3.jpg';
import introVid from '../files/videos/video.mp4';

function Home() {
    return (
        <Router>
            <div>
                <section className="hero-section d-flex justify-content-center align-items-center" id="intro">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto col-lg-4 col-md-4 col-8">
                                <img src={ introPic } className="intro-img img-fluid" alt="nems' Resume HTML Template" />
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                                <div className="hero-text">
                                    <h1 className="hero-title">👋 Hi~!! My name is Nemuel M Gabitanan Jr</h1>
                                    <h1 className="hero-title">a Gamer / Digital Nomad</h1>
                                    <Link to="/" href="#" className="email-link">
                                        nemuelmgabitananjr@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-wrap">
                        <video autoplay="" loop="" muted="" className="custom-video" poster="">
                            <source src={introVid} type="video/mp4" />

                                Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>
            <Routes>
                <Route />
            </Routes>
        </Router>
    );
}

export default Home;