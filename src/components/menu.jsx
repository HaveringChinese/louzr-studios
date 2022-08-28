import Logo from "../logo.jpg";

function Menu() {
  return (
    <div className="menu-box">
      <img src={Logo} className="logo"></img>
      <div className="tile">Louzr</div>
      <div className="studios">studios</div>
    </div>
  );
}

export default Menu;
