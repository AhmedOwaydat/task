import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './leftSideBar.css';

export default class LeftSideBar extends Component {
    render(){

        return (
            <div className="container left-bar">
                <div className="row">
                    <h2 className="col-12">
                        BBC
                        <br/>
                        <p className="name">@BBC</p>
                    </h2>
                    <p className="misson col-12">Our mission is to enrich your life and to inform, educate and entertain you, wherever you are.</p>
                    <p className="grayColor col-12">
                        <span></span>TV. Radio. Online
                    </p>
                    <p className="col-12">
                        <span className="grayColor"></span>
                        <a href="bbc.co.uk">bbc.co.uk</a>
                    </p>
                    <p className="grayColor col-12">
                        <span></span>Joined January 2009
                    </p>
                    <Link to="photos" className="col-12">
                        <span></span>14.7K Photos and videos
                    </Link>
                    <div className="images col-12">
                        <div className="row">
                            <img className="img-fluid page-images col-4" src="https://pbs.twimg.com/media/D2kd1N4WoAAY5ic.jpg:thumb" alt="" />
                            <img className="img-fluid page-images col-4" src="https://pbs.twimg.com/media/D2kd1N4WoAAY5ic.jpg:thumb" alt="" />
                            <img className="img-fluid page-images col-4" src="https://pbs.twimg.com/media/D2kd1N4WoAAY5ic.jpg:thumb" alt="" />
                            <img className="img-fluid page-images col-4" src="https://pbs.twimg.com/media/D2kd1N4WoAAY5ic.jpg:thumb" alt="" />
                            <img className="img-fluid page-images col-4" src="https://pbs.twimg.com/media/D2kd1N4WoAAY5ic.jpg:thumb" alt="" />
                            <img className="img-fluid page-images col-4" src="https://pbs.twimg.com/media/D2kd1N4WoAAY5ic.jpg:thumb" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}