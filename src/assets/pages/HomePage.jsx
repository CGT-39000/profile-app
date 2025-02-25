import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Get Titles
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~maddy/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data.titles);
      });
  });

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch(
      `https://web.ics.purdue.edu/~maddy/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data.profiles);
        setCount(data.count);
        setPage(data.page);
      });
  }, [title, search, page]);

  const handleClear = () => {
    setTitle("");
    setSearch("");
  };

  return (
    <>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
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
              {profiles.map((profile) => (
                <Link to={`/profile/${profile.id}`} key={profile.id}>
                  <Card key={profile.id} {...profile} />
                </Link>
              ))}
            </div>
            <div className="pagination">
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
              </button>
              <span>
                <p className="spaced">
                  {page}/{Math.ceil(count / 10)}
                </p>
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page >= Math.ceil(count / 10)}
              >
                Next
              </button>
            </div>
          </>
        </Wrapper>
      </main>
    </>
  );
};

export default HomePage;
