import React from "react";
import Card from 'react-bootstrap/Card';


export const About = () => {
    let message1 = "Padro Design & Printing Services will provide you exactly the kind of printing results you have desired. We primarily focus on offering highest quality printing services at reasonable prices."
    let message2 = "We combine technology with our broad experience to streamline the process so you will never have to settle for anything less. We deliver various print needs from preliminary design concepts to print production with cutting - edge technology. Delivering High Quality commercial printing services to our clients."
    let message3 = "A combination of trustworthy people, advance digital technology and impeccable standards allows us to deliver outstanding production within budget and on time. Everytime."
    let message4 = "We create the idea for you, we design it and we print it."

    return (
            <section className="about-heading" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="about-title">
                              ABOUT PADRO DESIGN & PRINTING SERVICES
                            </h2>
                            <div className="about-des text-center">
                                <h3 className="about-subtitle text-start">
                                    COMPANY PROFILE
                                </h3>
                                <div className="about-description text-start">
                                    <p>{message1}</p>
                                    <p>{message2}</p>
                                    <p>{message3}</p>
                                    <p>{message4}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

