export const StudentCard = ({ student } : { student: {
  StudentID: number;
  Name: string;
  Grade: number;
} }) => {
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {student.Name}
          </h3>
          <p className="text-sm text-gray-500">
            ID: {student.StudentID}
          </p>
        </div>
        <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
          Grade {student.Grade}
        </div>
      </div>
      
      <div className="border-t pt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-sm">Student</span>
        </div>
      </div>
    </div>
  )
}