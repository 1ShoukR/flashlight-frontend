
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="m-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Flashlight Takehome Assesment
        </div>
        
        <div className="flex space-x-6">
          <a href="/students" className="text-white hover:text-gray-300 transition-colors">
            Students
          </a>
          <a href="/create" className="text-white hover:text-gray-300 transition-colors">
            Create
          </a>
        </div>
      </div>
    </nav>
  );
};
