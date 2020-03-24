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
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-white mb-4">Expertise, Experience and Proven Track Record</h2>
                        <p className="text-white-50">
                            Experienced in designing and development of the enterprise software using cutting edge technologies such as
                            Java (8), SpringBoot, Hazelcast, AWS (EC2, SQS, SNS, S3, DynamoDB, Kinesis, CloudFormation and so on).
                            Passionate about Cloud and Server-less Computing, AWS in particular.
                        </p>
                        <h5 className='text-white'>Certifications</h5>
                        <div className='row'>
                            <article className="certs">
                                <span></span><img src={ocjpLogo} alt="logo"/>
                            </article>

                            <article className="certs">
                                <span></span><img src={ccp} alt="logo"/>
                            </article>

                            <article className="certs">
                                <span></span><img src={devAwsLogo} alt="logo"/>
                            </article>

                            <article className="certs last">
                                <span></span><img src={solArchLogo} alt="logo"/>
                            </article>
                        </div>
                        <br/>
                        <br/>
                        <h5 className='text-white'>Clients</h5>
                        <div className='row'>
                            <article className="clients">
                                <span></span><img src={bookingGoLogo} alt="logo"/>
                            </article>

                            <article className="clients">
                                <span></span><img src={nbrownLogo} alt="logo"/>
                            </article>

                            <article className="clients">
                                <span></span><img src={powaLogo} alt="logo"/>
                            </article>

                            <article className="clients">
                                <span></span><img src={tekSystemsLogo} alt="logo"/>
                            </article>

                            <article className="clients">
                                <span></span><img src={tcgLogo} alt="logo"/>
                            </article>

                            <article className="clients last">
                                <span></span><img src={thgLogo} alt="logo"/>
                            </article>
                        </div>
                        <br/>
                        <br/>
                        <h5 className='text-white'>Technologies</h5>
                        <div className='row'>
                            <article className="tech">
                                <span></span><img src={javaLogo} alt="logo"/>
                            </article>

                            <article className="tech">
                                <span></span><img src={springLogo} alt="logo"/>
                            </article>

                            <article className="tech">
                                <span></span><img src={vertxLogo} alt="logo"/>
                            </article>

                            <article className="tech">
                                <span></span><img src={dockerLogo} alt="logo"/>
                            </article>

                            <article className="tech">
                                <span></span><img src={awsLogo} alt="logo"/>
                            </article>

                            <article className="tech">
                                <span></span><img src={reactLogo} alt="logo"/>
                            </article>

                            <article className="tech last">
                                <span></span><img src={angularlogo} alt="logo"/>
                            </article>
                        </div>
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
