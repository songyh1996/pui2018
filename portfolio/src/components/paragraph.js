import React from 'react'

const Paragraph = props => (
	<div className="ProjectParagraph">
		<div className="category">{props.category}</div>
		<h3>{props.title}</h3>
		<p>{props.description}</p>
	</div>
)

export default Paragraph