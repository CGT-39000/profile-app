import { useState } from "react";

const ProfileForm = () => {
  const [data, setData] = useState({ name: "", title: "", email: "", bio: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
		const formData = new FormData(e.target);
		//console.log(formData.get("name"));
    try {
      const response = await fetch("https://web.ics.purdue.edu/~maddy/profile-app/send-data.php", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result.message);
    }
    catch {
      console.log(e);
    }
	};

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={data.name}
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={data.email}
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="text"
        name="title"
        placeholder="title"
        required
        value={data.title}
        onChange={handleChange}
      ></input>
      <br />
      <textarea
        name="bio"
        placeholder="Some description"
        required
        value={data.bio}
        onChange={handleChange}
      ></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
