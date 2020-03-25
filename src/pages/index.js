import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';
import bookingGoLogo from '../assets/img/Booking-Go.png';
import nbrownLogo from '../assets/img/nbrown_logo.png';
import thgLogo from '../assets/img/the-hut-group-thg-logo-vector.png';
import powaLogo from '../assets/img/powa-tag.png';
import tekSystemsLogo from '../assets/img/TekSyestems.png';
import tcgLogo from '../assets/img/tcg.png';

import ocjpLogo from '../assets/img/ocjp-8.png';
import ccp from '../assets/img/ccp_badge.png';
import devAwsLogo from '../assets/img/dev_associate.png';
import solArchLogo from '../assets/img/sol-arch.png';

import javaLogo from '../assets/img/Java.png';
import springLogo from '../assets/img/spring-boot-logo.png';
import vertxLogo from '../assets/img/Vert.x_Logo.png';
import dockerLogo from '../assets/img/docker-logo.png';
import awsLogo from '../assets/img/aws-logo.svg';
import reactLogo from '../assets/img/react-logo.png';
import angularlogo from '../assets/img/angular-logo.png';

import "../assets/sass/_clients.scss"


const IndexPage = () => (

    <Layout>
        <Header/>
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto text-uppercase">{config.heading}</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">
                        {config.subHeading}
                    </h2>
                    <Scroll type="id" element="about">
                        <a href="#about" className="btn btn-primary">
                            About
                        </a>
                    </Scroll>
                </div>
            </div>
        </header>
        <section id="about" className="about-section text-center">
            <div className="container">
                <div className='row' style={{'textAlign': 'center'}}>
                    <div className="col-lg-8 mx-auto about-section-padding">
                        <h2 className="text-white mb-4">Expertise, Experience and Proven Track Record</h2>
                        <p className="text-white-50">
                            Experienced in designing and development of the enterprise software using cutting edge technologies.
                            Passionate about Cloud and Server-less Computing, AWS in particular.
                        </p>
                    </div>
                    <div className="container col-lg-8 text-padding-offset">
                        <h5 className='text-white'>Certifications</h5>
                        <ul className='row'>
                            <li>
                                <img className="certs" src={ocjpLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="certs" src={ccp} alt="logo"/>
                            </li>

                            <li>
                                <img className="certs" src={devAwsLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="certs" src={solArchLogo} alt="logo"/>
                            </li>
                        </ul>
                    </div>
                        <div className="container col-lg-10 text-padding">
                        <h5 className='text-white'>Clients</h5>
                        <ul className='row'>
                            <li>
                                <img className="clients" src={bookingGoLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="clients" src={nbrownLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="clients" src={powaLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="clients" src={tekSystemsLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="clients" src={tcgLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="clients" src={thgLogo} alt="logo"/>
                            </li>
                        </ul>
                        </div>
                        <div className="container col-lg-8 text-padding">
                        <h5 className='text-white'>Tech</h5>
                        <ul className='row'>
                            <li >
                                <img className="tech" src={javaLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="tech" src={springLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="tech" src={vertxLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="tech" src={dockerLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="tech" src={awsLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="tech" src={reactLogo} alt="logo"/>
                            </li>

                            <li>
                                <img className="tech" src={angularlogo} alt="logo"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </section>

        <section id="projects" className="projects-section bg-light">
            <div className="container">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7">
                        <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt=""/>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>NBrown -JDWilliams</h4>
                            <p className="text-black-50 mb-0">
                                Provided services to JDWilliams Hybris implementation and Re-Platforming of their e-commerce base.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={demoImage1} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Booking.com (Formerly BookingGo)</h4>
                                    <p className="mb-0 text-white-50">
                                        Delivered an affiliate management portal for Rideways part of the business.
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={demoImage2} alt=""/>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">The Hut Group</h4>
                                    <p className="mb-0 text-white-50">
                                        Have contributed to development of WMS for Omega site.
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SocialLinks/>
        <Footer/>
    </Layout>
);

export default IndexPage;
