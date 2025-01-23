import "./App.css";
import image_1 from "./assets/pfp1.png";
import image_2 from "./assets/pfp2.png";
import About from "./assets/components/About";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/Navbar";
import Wrapper from "./assets/components/Wrapper";

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
  ];

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
          <div className="profile-cards">
            {profiles.map((profile) => (
              <Card key={profile.email} {...profile} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default App;
