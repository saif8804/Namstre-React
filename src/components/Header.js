import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
        <img
          src={LOGO_URL}
          alt="burger-img"
          width={100}
          height={100}
        />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  };


  export default Header;