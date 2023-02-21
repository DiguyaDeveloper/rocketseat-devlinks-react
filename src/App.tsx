import "./App.scss";
import { Footer } from "./components/footer/Footer";
import Profile from "./components/profile/Profile";
import { SocialLinks } from "./components/social-links/SocialLinks";
import { Toggle } from "./components/toggle/Toggle";

function App() {
  return (
    <div className="container">
      <Profile />
      <Toggle />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
