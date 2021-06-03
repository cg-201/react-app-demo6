import { useSelector } from "react-redux";

export function EmployeeList() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <h1>Employee Listing Page</h1>

      <h3>Sample List</h3>
      {state.employee.sampleList.map((item, index) => (
        <div key={index} className="alert alert-secondary">
          {item}
        </div>
      ))}
    </div>
  );
}
