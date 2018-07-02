import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import  {Grid, Row, Col, Image, Nav, NavItem} from 'react-bootstrap';
import Navbar from './CustomNavbar';
import './Home.css';
import ReactPlayer from 'react-player';
import { goToAnchor } from 'react-scrollable-anchor'



class Home extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid text-center Heading">
                    <Col md={3} xs={0} />
                    <Col className="Head-wrap-1" md={2} xs={4}>
                        <h1 className="Head-1">Holistic</h1>
                    </Col>
                    <Col className="Logo-wrapper" md={2} xs={4}>
                        <Image src="assests/Main_Logo.png" circle className="logo"/>
                    </Col>
                    <Col className="Head-wrap-2" md={2} xs={4}>
                        <h1 className="Head-2">Bodies</h1>
                    </Col>
                    <Col md={3} xs={0}/>
                </Row>
                <Row className="show-grid text-center Menu-row">
                    <Col md={2} />
                    <Col md={8} className="Menu-items">
                        <Nav bsStyle="pills" justified className="Items" >
                            <NavItem eventKey={1} className="item_1" onClick={goToAnchor('Home')}>Home</NavItem>
                            <NavItem eventKey={2} className="item_2" onClick={goToAnchor('About')}>About</NavItem>
                            <NavItem eventKey={3} className="item_3" onClick={goToAnchor('Videos')}>Videos</NavItem>
                            <NavItem eventKey={4} className="item_4" onClick={goToAnchor('Blog')}>Blog</NavItem>
                            <NavItem eventKey={5} className="item_5" onClick={goToAnchor('Merchandise')}>Merchandise</NavItem>
                            <NavItem eventKey={6} className="item_6" onClick={goToAnchor('Training')}>Training</NavItem>
                            <NavItem eventKey={7} className="item_7" onClick={goToAnchor('Subscribe')}>Subscribe</NavItem>
                            <NavItem eventKey={8} className="item_8" onClick={goToAnchor('Contact')}>Contact</NavItem>

                        </Nav>
                        <Col md={2} />
                    </Col>
                </Row>
                <hr />
                <Row className="show-grid text-center Video-row">
                    <Col xs={1} />
                    <Col xs={10} className="Video-wrapper">
                        <ReactPlayer
                        className="player"
                        url="assests/intro.mp4"
                        width="100%"
                        height="100%"
                        controls />
                    </Col>
                    <Col xs={1}/>
                </Row>
            </Grid>
        );
    }
}

export default Home;
