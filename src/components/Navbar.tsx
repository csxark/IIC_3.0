import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (path: string) => {
    const [route, section] = path.split('#');

    if (location.pathname !== route) {
      navigate(path);
    } else if (section) {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', path: '/home#about' },
    { name: 'Problem Statements', path: '/problem-statements' },
    { name: 'Judges & Mentors', path: '/judges-mentors' },
    { name: 'Guests', path: '/guests' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const handleSubmit = () => {
    window.open(
      'https://docs.google.com/forms/d/1r6umjVOO-wcnGa-XwrCkjcvPk2f8rcAo1msmgnfnCz0/edit',
      '_blank'
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-slate-950/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">

          {/* LOGOS */}
          <div className="flex items-center space-x-4">

            {/* MUJ LOGO */}
            <Link
              to="/"
              className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/muj-logo.png"
                width="130"
                alt="Manipal University Jaipur Logo"
              />
            </Link>

            {/* DIVIDER */}
            <div className="w-px h-6 bg-gradient-to-b from-pink-400 to-cyan-400 opacity-40" />

            {/* IIC 3.0 LOGO */}
            <Link
              to="/"
              className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/2.png"
                width="110"
                alt="IIC 3.0 Logo"
              />
            </Link>

          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium relative group py-2"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}

            {/* SUBMIT BUTTON */}
            <button
              onClick={handleSubmit}
              className="modern-button neon-button px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md flex items-center text-sm cursor-pointer"
            >
              <Zap
                size={14}
                className="inline mr-1.5 fill-white"
              />
              Submit
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white p-2 bg-white/[0.05] border border-white/10 backdrop-blur-md rounded-xl transition-transform active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-3 bg-slate-950/90 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl animate-fade-in">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left py-3 px-2 text-gray-300 hover:text-pink-400 hover:bg-white/[0.03] rounded-xl transition-all duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}

            {/* MOBILE REGISTER */}
            <button
              onClick={handleSubmit}
              className="block w-full mt-3 modern-button py-3 rounded-xl font-bold text-center transition-all duration-300 active:scale-95 shadow-lg"
            >
              <Zap
                size={16}
                className="inline mr-1"
              />
              Register
            </button>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;