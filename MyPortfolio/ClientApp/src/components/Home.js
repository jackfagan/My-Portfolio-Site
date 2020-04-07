import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import TravelImage from '../media/img/travel.jpg';
import CactusImage from '../media/img/cactus.jpg';
import BuildingImage from '../media/img/building.jpg';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div className="homepage-container">
                <div className="homepage-text">
                    <h1>Jack Fagan</h1>
                </div>
                <div className="homepage-articles">
                    <Row>
                        <Col className="homepage-half" sm={6}>
                            <img className="landscape-image" src={TravelImage} alt="Travel Article" />
                            <Row>
                                <Col sm={6}>
                                    <img className="portrait-image" src={CactusImage} alt="Travel Article" />
                                </Col>
                                <Col sm={6}>
                                    <img className="portrait-image" src={BuildingImage} alt="Travel Article" />
                                </Col>
                            </Row>
                        </Col>

                        <Col className="homepage-half" sm={6}>
                            <Row>
                                <Col sm={6}>
                                    <img className="portrait-image" src={CactusImage} alt="Travel Article" />
                                </Col>
                                <Col sm={6}>
                                    <img className="portrait-image" src={BuildingImage} alt="Travel Article" />
                                </Col>
                            </Row>
                            <img className="landscape-image" src={TravelImage} alt="Travel Article" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
