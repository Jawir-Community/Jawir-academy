import { Link } from "react-router-dom";
import Logo from "../assets/images/jawir.png";

export default function Navbar() {
    return (
      <>
        <nav className="fixed w-full shadow-md z-10">
          <div className="navbar container mx-auto bg-base-100">
            <div className="navbar-start flex-1">
              <img className="w-[4.5rem]" src={Logo} alt="" />
            </div>
            <div className="navbar-center flex-none">
              <ul className="menu menu-horizontal px-1 text-xl gap-2">
                <li><Link to={"/"}>Home</Link></li>
              </ul>
            </div>
            <div className="navbar-end flex-1">
              <ul className="menu menu-horizontal px-1 text-xl">
                <li className="btn btn-outline"><a href="https://discord.gg/jawir" target="_blank" rel="noopener noreferrer">Join Discord</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}
