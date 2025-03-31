import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-zinc-900 text-white shadow-md ">
      <div className="container mx-auto flex justify-between items-center py-4 px-1">
        {/* Left Side - Logo */}
        <Link to="/">
          <a>
            <div className="text-xl font-bold">TK | Development</div>
          </a>
        </Link>

        {/* Right Side - Navigation Links */}
        <div className="hidden md:flex space-x-6 ">
          <Link to="/">
            <a className="hover:text-gray-400">Home</a>
          </Link>
          <Link to="/projects">
            <a className="hover:text-gray-400">Projects</a>
          </Link>
          <Link to="/about">
            <a className="hover:text-gray-400">About</a>
          </Link>
          <Link to="/contact">
            <a className="hover:text-gray-400">Contact</a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col bg-gray-800 w-full px-4 py-2 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#projects" className="py-2 hover:text-gray-400">
          Projects
        </a>
        <a href="#about" className="py-2 hover:text-gray-400">
          About
        </a>
        <a href="#contact" className="py-2 hover:text-gray-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
