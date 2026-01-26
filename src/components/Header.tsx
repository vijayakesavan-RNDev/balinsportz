import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-blue-600" : "text-black hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7edf3] bg-white/90 backdrop-blur-md">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between  mx-auto">
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Balinsportz Logo"
            className="h-8 w-8 object-contain"
          />

          <h2 className="text-xl font-bold text-black">
            Balinsportz
          </h2>
        </div>


        {/* CENTER / RIGHT: Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={linkClass}>
            Products & Services
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/ourfounder" className={linkClass}>
            Our Founder
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </nav>

        {/* RIGHT: Button */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-black">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
