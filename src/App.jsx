import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import HomePage from "./assets/pages/HomePage";
import AddProfilePage from "./assets/pages/AddProfilePage";
import AboutPage from "./assets/pages/AboutPage";
import NotFound from "./assets/pages/NotFound";
import ProfileDetailPage from "./assets/pages/ProfileDetailsPage";
import ProfileEditPage from "./assets/pages/ProfileEditPage";

const App = () => {
  return (
    <>
      <HashRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/add-profile" element={<AddProfilePage />} />
            <Route path="/profile/:id" element={<ProfileDetailPage />}>
              <Route index element={<ProfileDetailPage />} />
              <Route path="edit" element={<ProfileEditPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </HashRouter>
    </>
  );
};

export default App;
