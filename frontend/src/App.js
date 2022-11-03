import './App.css';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import HeroImg from './assets/hero.png';
import Logo from './assets/BL_LogoBasic.png';
import VideoCallImg from './assets/coaching.png';

function App() {
    return (
        <Container className="mx-auto gy-2">
            <Row>
                <Col xs={12} style={{position: "relative"}}>
                    <img src={HeroImg} alt="Headline image" className={"img-fluid"} style={{width: "100%"}}/>
                    <div style={{position: "absolute", bottom: "20rem", left: "15rem"}}>
                        <div>
                            <img src={Logo} alt="Better lesson logo"/>
                        </div>
                        <div style={{color: "white"}}>
                            <h1>BetterLesson</h1>
                            <h1>Professional Coaching</h1>
                            <h2>PROFESSIONAL COACH SEMINARS & MENTORSHIP</h2>
                        </div>
                    </div>
                    <div style={{position: "absolute", bottom: "0rem", left: "15rem"}}>
                        <Button color={"blue"} size={"lg"}>Register Now</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <img src={VideoCallImg} alt="Person on video call" className={"img-fluid"} style={{width: "100%"}}/>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={12}>
                            Current Coaches
                        </Col>
                        <Col xs={12}>
                            <ListGroup variant={"flush"}>
                                <ListGroupItem>
                                    <ListGroup horizontal={true} style={{justifyContent: "center"}} variant={"flush"}>
                                        <ListGroupItem style={{width: "33.333%", border: "none"}}>Coach Name</ListGroupItem>
                                        <ListGroupItem  style={{width: "33.333%", border: "none"}}>Available Starting</ListGroupItem>
                                        <ListGroupItem  style={{width: "33.333%", border: "none"}}>Industry</ListGroupItem>
                                    </ListGroup>
                                </ListGroupItem>
                                {
                                    [
                                        {coachName: "Jessica D.", availableStarting: "11/6/22", industry: "Professional Services"},
                                        {coachName: "David F.", availableStarting: "8/5/21", industry: "Sports/Fitness"},
                                        {coachName: "Keir Y.", availableStarting: "4/12/22", industry: "E-Sports"},
                                    ].map((item) => {
                                        return (
                                            <ListGroupItem>
                                                <ListGroup horizontal={true} style={{justifyContent: "center"}} variant={"flush"}>
                                                    <ListGroupItem style={{width: "33.333%", border: "none"}}>{item.coachName}</ListGroupItem>
                                                    <ListGroupItem style={{width: "33.333%", border: "none"}}>{item.availableStarting}</ListGroupItem>
                                                    <ListGroupItem style={{width: "33.333%", border: "none"}}>{item.industry}</ListGroupItem>
                                                </ListGroup>
                                            </ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
