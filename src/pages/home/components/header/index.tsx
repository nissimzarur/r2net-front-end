import "./styles.css";
import HeaderImage from "@assets/diamonds.jpg";
function Header() {
  return (
    <div className="header-base">
      <img src={HeaderImage} className="header-image" />
    </div>
  );
}

export default Header;
