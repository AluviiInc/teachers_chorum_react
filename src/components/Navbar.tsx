
import "./NavbarStyles.css";
import ldsChurchImage from "../assets/ldschurch.png";

const Navbar = () => {
  const navItems = [
    { text: "Calendar", link: "index.html", isActive: true },
    { text: "Pictures", link: "index.html", isActive: false },
    
  ];

  return (
    <>
      <nav>
        <img src={ldsChurchImage} alt="" />
        <ul id="navbar">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className={item.isActive ? "active" : ""}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
