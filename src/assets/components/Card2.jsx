const Card2 = () => {
	const name = "Jane Doe";
	const title = "Software Tester";
	const email = "b@b.com";

	return (
		<div className="profile-card">
			<div className="profile-card__image">
			<img src="https://placehold.co/150" alt="profile image"></img>
			</div>
			<div className="profile-card__content">
				<p>{name}</p>
				<p>{title}</p>
				<p><a href={'mailto:$(email)'}>{email}</a></p>
			</div>
		</div>
	);
}

export default Card2;
