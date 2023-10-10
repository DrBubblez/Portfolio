import React from "react";
import "./footer.css";
import github from "../../img/github-96.png";
import linkedin from "../../img/linkedin-96.png";

const Footer = () => {
    return (
        <footer className="text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                <a
                    className="btn text-white btn-floating m-1"
                    href="https://github.com/DrBubblez"
                    role="button"
                    ><img src={github} alt="github"></img>
                </a>
                <a
                    className="btn text-white btn-floating m-1"
                    href="https://www.linkedin.com/in/harrison-miner-7a60351b8/"
                    role="button"
                    ><img src={linkedin} alt="linkedin"></img>
                </a>
                </section>
            </div>

            <div className="copyright text-center p-3">
                © 2020 Copyright: Harrison Miner
            </div>

        </footer>
    )
}

export default Footer;