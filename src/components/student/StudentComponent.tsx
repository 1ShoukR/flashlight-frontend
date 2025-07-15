import { useEffect, useState } from "react";
import { StudentCard } from "./StudentCard";

interface Student {
  StudentID: number;
  Name: string;
  Grade: number;
}

interface StudentsResponse {
  success?: string;
  students: Student[];
  message?: string;
  error?: string;
}

export const StudentComponent = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | number | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('https://heartfelt-happiness-production.up.railway.app/api/students/all'); 
      const data: StudentsResponse = await response.json();
      console.log('data', data)
      if (data.error) {
        setError(data.error);
      }
      if (data.success) {
        setStudents(data.students)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">Loading students...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">View Students</h1>
      
      {students.length === 0 ? (
        <div className="text-gray-600">No students found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => (
            <StudentCard 
              key={student.StudentID} 
              student={student} 
            />
          ))}
        </div>
      )}
    </div>
  );
};