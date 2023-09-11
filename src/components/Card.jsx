import React from "react";
const Card = ({ icon, title, text }) => {
	return (
		<div className="bg-[var(--card-bg)] rounded-xl px-5 py-8 shadow">
			<img src={icon} alt={title} />
			<h3 className="font-semibold pt-8 pb-6">{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default Card;
