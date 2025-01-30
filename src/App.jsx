import "./App.css";
import image_1 from "./assets/pfp1.png";
import image_2 from "./assets/pfp2.png";
import About from "./assets/components/About";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/Navbar";
import Wrapper from "./assets/components/Wrapper";
import { useState } from "react";

const App = () => {
  const profiles = [
    {
      img: image_1,
      name: "John Doe",
      title: "Software Engineer",
      email: "a@a.com",
    },
    {
      img: image_2,
      name: "Jane Doe",
      title: "Software Tester",
      email: "b@b.com",
    },
    {
      img: image_1,
      name: "Jack Doe",
      title: "Software Engineer",
      email: "c@c.com",
    },
    {
      img: image_2,
      name: "Jackie Doe",
      title: "Software Tester",
      email: "d@d.com",
    },
    {
      img: image_2,
      name: "Ava Joe",
      title: "UX Designer",
      email: "e@e.com",
    },
  ];

  // Get Titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [animation, setAnimation] = useState(false);
  const handleAnimation = () => {
    setAnimation(false);
  }

  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setAnimation(true);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    setAnimation(true);
  };

  const filteredProfiles = profiles.filter((profile) => {
    return (title === "" || profile.title === title) && profile.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true)
  }

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
          <About />
        </Wrapper>
        <Wrapper>
          <>
            <div className="filter-wrapper">
              <div className="filter-select">
                <label htmlFor="title-select">Select a Title:</label>
                <select name="" id="title-select" value={title} onChange={handleTitleChange}>
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
                <Card key={profile.email} {...profile} animate={animation} updateAnimate={handleAnimation} />
              ))}
            </div>
          </>
        </Wrapper>
      </main>
    </>
  );
};

export default App;
