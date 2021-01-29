import {Fragment} from "react";

const Footer = () => {
    return (
        <Fragment>

            <footer>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 sm-margin-30px-bottom">

                            <img alt="footer-logo"
                                 src="https://www.chitrakootweb.com/template/fabrex/img/logos/logo-footer.png"/>

                            <ul className="footer-list mt-3">
                                <li><a href="javascript:void(0)">Who are we?</a></li>
                                <li><a href="javascript:void(0)">Carrers</a></li>
                                <li><a href="javascript:void(0)">Blogs</a></li>
                                <li><a href="javascript:void(0)">Terms of use</a></li>
                                <li><a href="javascript:void(0)">Privacy policy</a></li>
                                <li><a href="javascript:void(0)">Our team</a></li>
                                <li><a href="javascript:void(0)">Partner us</a></li>
                            </ul>


                        </div>

                        <div className="col-lg-3 col-md-6 sm-margin-30px-bottom">
                            <h3 className="text-white">HELP</h3>
                            <ul className="footer-list">
                                <li><a href="javascript:void(0)">Contact Us</a></li>
                                <li><a href="javascript:void(0)">Faq</a></li>
                                <li><a href="javascript:void(0)">Site Map</a></li>

                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 xs-margin-20px-bottom">
                            <h3 className="text-white">TOP CITIES</h3>
                            <ul className="footer-list">
                                <li><a href="javascript:void(0)">Mumbai</a></li>
                                <li><a href="javascript:void(0)">Delhi</a></li>
                                <li><a href="javascript:void(0)">Bengaluru</a></li>
                                <li><a href="javascript:void(0)">Pune</a></li>
                                <li><a href="javascript:void(0)">Hyderabad</a></li>

                            </ul>


                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white">SHOW US SOME LOVE IN SOCIAL MEDIA</h3>

                            <div className="margin-25px-top footer-social-icons">
                                <ul>
                                    <li><a href="javascript:void(0)"><i className="fa fa-facebook"/></a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-instagram"/></a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-twitter"/></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="footer-bar">
                    <div className="container">
                        <p>© Vdura 2021</p>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default Footer