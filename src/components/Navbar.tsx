import "./NavbarStyles.css";
import ldsChurchImage from "../assets/ldschurch.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
    const navbarVis = document.getElementById("navbar");
    if (navbarVis) {
      navbarVis.style.right = menuClicked ? "0px" : "-300px";

    }
  }
  const navItems = [
    { text: "Calendar", link: "index.html", isActive: true },
    { text: "Pictures", link: "index.html", isActive: false },
  ];

  return (
    <>
      <nav>
        <img src={ldsChurchImage} alt="" />
        <ul id="navbar" >
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className={item.isActive ? "active" : ""}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div id="mobile">
          {menuClicked ? (
            <i><MenuIcon onClick={handleMenuClick} /></i>
          ) : (
           <i><MenuIcon onClick={handleMenuClick} /></i>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
