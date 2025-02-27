import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import HomePage from "./assets/pages/HomePage";
import AddProfilePage from "./assets/pages/AddProfilePage";
import AboutPage from "./assets/pages/AboutPage";
import NotFound from "./assets/pages/NotFound";
import ProfileDetailPage from "./assets/pages/ProfileDetailsPage";
import ProfileEditPage from "./assets/pages/ProfileEditPage";
import ProfileIndexPage from "./assets/pages/ProfileIndexPage";
import Login from "./assets/pages/LoginPage";
import Register from "./assets/pages/RegisterPage";
import { AuthProvider } from "./assets/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
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
              <Route path="/profile/:id" element={<ProfileIndexPage />}>
                <Route index element={<ProfileDetailPage />} />
                <Route path="edit" element={<ProfileEditPage />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </HashRouter>
      </>
    </AuthProvider>
  );
};

export default App;
