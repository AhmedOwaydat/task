import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './rightSideBar.css';

export default class RightSideBar extends Component {
    render() {

        return (
            <div className="container right-bar">
                <div className="row">
                    <div className="col-12 signUp whitebackground">
                        <h4>New to Twitter?</h4>
                        <p>Sign up now to get your own personalized timeline!</p>
                        <button className="btn btn-dark form-control">Sign Up</button>
                    </div>
                    <div className="col-12 whitebackground">
                        <h5>You may also like.</h5>
                        <Link to="/">Refresh</Link>

                        <div className="page row">
                            <img className="pageImg img-fluid col-4" src="https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_bigger.png" />
                            <div className="col-8">
                                <h2>
                                    CNN
                                    <p>@CNN</p>
                                </h2>
                            </div>
                        </div>
                        <div className="page row">
                            <img className="pageImg img-fluid col-4" src="https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_bigger.png" />
                            <div className="col-8">
                                <h2>
                                    CNN
                                    <p>@CNN</p>
                                </h2>
                            </div>
                        </div>
                        <div className="page row">
                            <img className="pageImg img-fluid col-4" src="https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_bigger.png" />
                            <div className="col-8">
                                <h2>
                                    CNN
                                    <p>@CNN</p>
                                </h2>
                            </div>
                        </div>
                        <div className="page row">
                            <img className="pageImg img-fluid col-4" src="https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_bigger.png" />
                            <div className="col-8">
                                <h3>
                                    CNN
                                    <p>@CNN</p>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}