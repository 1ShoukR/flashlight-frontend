import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="m-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to='/'>
            Flashlight Takehome Assesment
          </Link>
        </div>
        
        <div className="flex space-x-6">
          <Link to="/students" className="text-white hover:text-gray-300 transition-colors">
            Students
          </Link>
          <a href="/create" className="text-white hover:text-gray-300 transition-colors">
            Create
          </a>
        </div>
      </div>
    </nav>
  );
};
