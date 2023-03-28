import React from "react";
import Form from "react-bootstrap/Form";

export default () => {
	return (
		<Form>
			<Form.Group className="mb-3">
				<Form.Label className="m-0 mt-1">Full Name</Form.Label>
				<Form.Control
					className="py-2 rounded-0"
					type="name"
					placeholder="Jane Doe"
				/>
				<Form.Label className="m-0 mt-1">Email</Form.Label>
				<Form.Control
					className="py-2 rounded-0"
					type="email"
					placeholder="jane_doe@email.com"
				/>
				<Form.Label className="m-0 mt-1">Industry</Form.Label>
				<Form.Select className="py-2 rounded-0">
					<option>E-Sports</option>
					<option>Education</option>
					<option>Business</option>
					<option>Other</option>
				</Form.Select>
			</Form.Group>
		</Form>
	);
};
