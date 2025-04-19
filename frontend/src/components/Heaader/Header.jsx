import { useContext, useState } from "react";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import config from "../../config/config.js";
import { Menu, X } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get(`${config.serverUrl}/users/logout`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setUser(null);
        setIsLoggedIn(false);
        setMobileMenuOpen(false);
        navigate("/login");
      } else {
        console.error("Logout failed:", response);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const navLinks = [
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-2 md:py-4 px-3 md:px-6">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/7/7d/Jatiya_Kabi_Kazi_Nazrul_Islam_University_Logo.png"
            alt="University Logo"
            className="h-10 w-10 md:h-16 md:w-17"
          />
        </Link>

        {/* Title */}
        <div className="text-center flex-1 mx-2">
          <Link to="/">
            <h1 className="text-3xl font-bold text-green-700">
              📦 Store Management
            </h1>
          </Link>
          <h2 className="text-sm md:text-md opacity-80 font-bold text-emerald-950">
            Jatiya Kabi Kazi Nazrul Islam University
          </h2>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-bold">
          {navLinks.map(({ name, link }) => (
            <Link
              key={name}
              to={link}
              className="hover:text-gray-300 transition"
            >
              {name}
            </Link>
          ))}

          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="focus:outline-none"
              >
                <img
                  src={user?.image || "/default-avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-green-700 hover:scale-105 transition-transform"
                />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    to={`/${user?.username}/profile`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setProfileDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span className="flex">
                      <CgLogOut size={24} />
                      Logout
                    </span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <CgLogIn size={24} />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-3 flex flex-col">
            {navLinks.map(({ name, link }) => (
              <Link
                key={name}
                to={link}
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="relative">
                {/* Avatar Button */}
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  <img
                    src={user?.image || "/default-avatar.png"}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-green-700"
                  />
                  <span className="font-semibold text-gray-800">
                    {user?.username || "User"}
                  </span>
                </button>

                {/* Dropdown */}
                {profileDropdownOpen && (
                  <div className="mt-2 ml-10 w-40 bg-white border border-gray-200 rounded-md shadow-lg absolute z-50">
                    <Link
                      to={`/${user?.username}/profile`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span className="flex">
                        <CgLogOut size={20} />
                        Logout
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                <CgLogIn size={20} />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
