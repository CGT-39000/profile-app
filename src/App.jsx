import "./App.css";
import image_1 from "./assets/pfp1.png";
import image_2 from "./assets/pfp2.png";
import About from "./assets/components/About";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/Navbar";
import Wrapper from "./assets/components/Wrapper";
import ProfileForm from "./assets/components/ProfileForm";
import { useEffect, useState } from "react";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~maddy/profile-app/fetch-data.php")
    .then((res) => res.json())
    .then((data) => {
      setProfiles(data)
    })
  });

  // Get Titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [animation, setAnimation] = useState(false);
  const handleAnimation = () => {
    setAnimation(false);
  };

  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setAnimation(true);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnimation(true);
  };

  const filteredProfiles = profiles.filter((profile) => {
    return (
      (title === "" || profile.title === title) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
        </Wrapper>
        <Wrapper>
          <ProfileForm></ProfileForm>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <>
            <div className="filter-wrapper">
              <div className="filter-select">
                <label htmlFor="title-select">Select a Title:</label>
                <select
                  name=""
                  id="title-select"
                  value={title}
                  onChange={handleTitleChange}
                >
                  <option defaultValue value={""}>
                    All
                  </option>
                  {titles.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
                <label htmlFor="title-select">Enter a Name:</label>
                <input
                  type="text"
                  id="search"
                  value={search}
                  onInput={handleSearchChange}
                ></input>
                <button onClick={handleClear}>Reset</button>
              </div>
            </div>
            <div className="profile-cards">
              {filteredProfiles.map((profile) => (
                <Card
                  key={profile.id}
                  {...profile}
                  animate={animation}
                  updateAnimate={handleAnimation}
                />
              ))}
            </div>
          </>
        </Wrapper>
      </main>
    </>
  );
};

export default App;
