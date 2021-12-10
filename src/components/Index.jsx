import React from 'react'
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

const Index = () => {
    return (
        <div>
            <section className="text-light p-5  p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center-justify-content-between text-dark">
                        <div>
                            <h1>Become a <span className="text-warning">Web Developer</span></h1>
                            <p class="lead my-4">
                                We focus on teaching our students the fundamentals of the latest and greatest technologies to prepare then to their first dev role.
                            </p>
                            <Link to="/login">
                                <button className="btn btn-primary btn-lg mb-3">Start adventure</button>
                            </Link>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/N6xr5Ts/undraw-Programming-re-kg9v.png" alt="PREPARE TO START YOUR ADVENTURE" className="img-fluid w-60 d-none d-md-block" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5" id="learn">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md">
                        <img src="https://i.ibb.co/F8JPqML/undraw-Prototyping-process-re-7a6p.png" alt="LEARN EVERYTHING YOU NEED" class="img-fluid" />
                    </div>
                    <div className="col-md p-5">
                        <h3>Learn The Fundamentals</h3>
                        <p className="lead">Frond end adventure is a place where you can develope your learning and practical skills while commenting in our community.</p>
                        <p className="lead">Grow as a web developer and know people with the same interest of you.</p>
                        <a className="btn btn-dark mt-3"><i className="bi bi-chevron-right"></i>Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="p-5" id="question">
            <h2 class="text-center mb-4">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Witch are the Benefits for sign up?</Accordion.Header>
                    <Accordion.Body>
                        Get in touch with the community and get the best of the best that our community can provide you.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Do I need to Sign Up to comment in a post? </Accordion.Header>
                    <Accordion.Body>
                        yes, you need to sign up to comment in a post. You can sign up by clicking the button below.<Link to="/signup">Sign Up</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What kind of content is the blog for?</Accordion.Header>
                    <Accordion.Body>
                        Front end adventure is a blog for web developers. We focus our blog in topics that are relevant to web development. example : news about Javascript , React , Node.js , HTML , CSS , Bootstrap , etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>

            <footer className="p-5 bg-dark text-white text-center position-relative">
                <div className="container">
                    <p className="lead">Copyright &copy; 2021 Front end Adventure</p>
                    <a className="position-absolute bottom-0 end-0 p-5"><i class="bi bi-arrow-up-circle h1"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Index
