import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block text-sm font-medium transition-colors ${
      isActive ? "text-blue-600" : "text-black hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7edf3] bg-white/90 backdrop-blur-md">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Balinsportz Logo" className="h-8 w-8 object-contain" />
          <h2 className="text-xl font-bold text-black">Balinsportz</h2>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-9">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Products & Services</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/ourfounder" className={linkClass}>Our Founder</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2 text-black"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4 shadow-md">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Products & Services</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About Us</NavLink>
          <NavLink to="/ourfounder" className={linkClass} onClick={() => setOpen(false)}>Our Founder</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
