export const StudentCard = ({ student } : { student: {
  StudentID: number;
  Name: string;
  Grade: number;
} }) => {
  
  return (
    <div>
      <div>
        {student.Name}
      </div>
    </div>
  )
}