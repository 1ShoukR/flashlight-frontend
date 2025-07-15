import { Link } from 'react-router';

export const HomepageComponent = () => {
  return (
      <div className='flex justify-center items-center min-h-screen bg-gray-50'>
          <div className='text-center max-w-2xl px-4'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                  Student Management System
              </h1>
              <p className='text-lg text-gray-600 mb-8'>
                  Streamline student information management with our intuitive platform. 
                  View, create, and organize student records efficiently.
              </p>
              <div className='space-x-4'>
                  <Link 
                      to="/students" 
                      className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block'>
                      View Students
                  </Link>
                  <Link 
                      to="/create" 
                      className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block'>
                      Add New Student
                  </Link>
              </div>
          </div>
      </div>
  );
}