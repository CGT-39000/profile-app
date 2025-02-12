import { useState } from "react";

const ProfileForm = () => {
  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    bio: "",
    image: null,
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const files = e.target.files[0];
      if (files.size > 2e6) {
        setErrors({ image: "Image Must Be Under 2Mb", general: "" });
      } else {
        setData({ ...data, image: e.target.files[0] });
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const [errors, setErrors] = useState({ image: "", general: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name.trim());
    formData.append("title", data.title.trim());
    formData.append("email", data.email.trim());
    formData.append("bio", data.bio.trim());
    data.image && formData.append("image", data.image);
    try {
      const response = await fetch(
        "https://web.ics.purdue.edu/~maddy/profile-app/send-data.php",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      if (result.success) {
        setErrors({ image: "", general: "" });
      } else {
        setErrors({ image: "", general: result.message });
      }
      console.log(result.message);
    } catch {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <h2>Add User</h2>
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
        className="bio"
        name="bio"
        placeholder="Some description"
        required
        value={data.bio}
        onChange={handleChange}
        maxLength="200"
      ></textarea>
      <p>{data.bio.length}/200 Chars</p>
      <label htmlFor="image">Choose A Profile Picture: </label>
      <br />
      <input
        type="file"
        id="image"
        name="image"
        accept="image/gif, image/jpg, image/jpeg, image/png"
        onChange={handleChange}
      />
      <br />
      <br />
      <button
        type="submit"
        disabled={
          errors.image !== "" ||
          data.name === "" ||
          data.bio === "" ||
          data.email === "" ||
          data.title === "" ||
          data.image === null
            ? true
            : false
        }
      >
        Submit
      </button>
      {errors.image && <p>{errors.image}</p>}
    </form>
  );
};

export default ProfileForm;
