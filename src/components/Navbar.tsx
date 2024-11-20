import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Wallet, Info, Phone, Coins, Plus, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-white-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">ETHABITAT</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
            <NavLink to="/properties" icon={<Building2 className="h-4 w-4" />} text="Properties" />
            <NavLink to="/wallet" icon={<Wallet className="h-4 w-4" />} text="Connect Wallet" />
            <NavLink to="/trade" icon={<Coins className="h-4 w-4" />} text="Trade" />
            <NavLink to="/list-property" icon={<Plus className="h-4 w-4" />} text="List Property" />
            <NavLink to="/about" icon={<Info className="h-4 w-4" />} text="About" />
            <NavLink to="/contact" icon={<Phone className="h-4 w-4" />} text="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <MobileNavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
            <MobileNavLink to="/properties" icon={<Building2 className="h-4 w-4" />} text="Properties" />
            <MobileNavLink to="/wallet" icon={<Wallet className="h-4 w-4" />} text="Connect Wallet" />
            <MobileNavLink to="/trade" icon={<Coins className="h-4 w-4" />} text="Trade" />
            <MobileNavLink to="/list-property" icon={<Plus className="h-4 w-4" />} text="List Property" />
            <MobileNavLink to="/about" icon={<Info className="h-4 w-4" />} text="About" />
            <MobileNavLink to="/contact" icon={<Phone className="h-4 w-4" />} text="Contact" />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-white hover:text-yellow-500 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 px-4 py-2 text-white-200 hover:bg-black hover:text-yellow-400"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;