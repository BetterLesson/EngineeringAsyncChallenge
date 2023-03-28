import React from "react";
import logo from "./assets/images/BL_LogoBasic.png";
import coachingImage from "./assets/images/coaching.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoachingExperts from "./components/coachingExpertsTable";
import ContactForm from "./components/contactForm";
import "./assets/style/style.scss";

function App() {
	return (
		<div>
			<Container fluid className="p-0">
				<section className="banner">
					<div className="overlay" />
					<Container className="banner-padding">
						<Row className="backgroundImage">
							<Col>
								<img className="logo mb-2" src={logo} />
								<h1>
									BetterLesson
									<br />
									Professional Coaching
								</h1>
								<h3 className="text-uppercase mb-5">
									Professional Coach Seminars & Mentorship
								</h3>
								<Button className="btn-primary rounded-0 px-4">
									Register Now
								</Button>
							</Col>
						</Row>
					</Container>
				</section>
				<section className="coachingExperts my-3">
					<Container fluid className="p-0">
						<Row className="m-0">
							<Col className="p-0">
								<img className="w-100" src={coachingImage} />
							</Col>
							<Col className="d-flex justify-content-center align-items-center flex-column p-5 ">
								<h2 className="mb-4">Current Coaches</h2>
								<CoachingExperts />
							</Col>
						</Row>
					</Container>
				</section>
				<section className="contactFormSection p-4">
					<div className="overlay" />
					<Container className="contactFormContainer">
						<Row className="backgroundImage">
							<Col>
								<Row>
									<Col className="text-center">
										<h2 className="mb-4">Join our mailing list</h2>
									</Col>
								</Row>
								<Row className="contactForm py-3 px-4">
									<Col>
										<ContactForm />
									</Col>
									<Col className="text-center m-auto">
										<h2>
											Join our mailing to receive
											<br /> notifications about
											<br /> program availability and
											<br /> special discounts
										</h2>
										<Button className="btn-primary rounded-0 px-5">
											Sign Up
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</section>
				<section>
					<footer className="p-4">
						<Container>
							<Row className="text-center">
								<Col>
									<h6>Email Address</h6>
									<p>hello@reallygreatsite.com</p>
								</Col>
								<Col>
									<h6>Mailing Address</h6>
									<p>123 Anywhere St. Any City, ST 12345</p>
								</Col>
								<Col>
									<h6>Phone Number</h6>
									<p>(123) 456-7890</p>
								</Col>
							</Row>
						</Container>
					</footer>
				</section>
			</Container>
		</div>
	);
}

export default App;
