import React from "react";
import Table from "react-bootstrap/Table";

const coachingExperts = [
	{
		name: "Jessica D.",
		availabilityStart: "11/6/2022",
		industry: "Professional Services",
	},
	{
		name: "David F.",
		availabilityStart: "8/5/21",
		industry: "Sports/Fitness",
	},
	{
		name: "Keir Y.",
		availabilityStart: "4/12/22",
		industry: "E-Sports",
	},
];

export default () => {
	return (
		<Table className="rounded-3 bg-white p-5">
			<thead>
				<tr>
					<th className="py-3 px-3 my-auto">Coach Name</th>
					<th className="py-3 px-3 my-auto">
						Available <br />
						Starting
					</th>
					<th className="py-3 px-3 my-auto">Industry</th>
				</tr>
			</thead>
			<tbody>
				{coachingExperts.map((expert, index) => (
					<tr key={index}>
						<td className="py-3 px-3">{expert.name}</td>
						<td className="py-3 px-3">{expert.availabilityStart}</td>
						<td className="py-3 px-3">{expert.industry}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};
