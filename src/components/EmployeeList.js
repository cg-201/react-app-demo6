import { useSelector } from "react-redux";

export function EmployeeList() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="row">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-secondary">Employee List</h3>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">USERNAME</th>
              <th scope="col">PASSWORD</th>
              <th scope="col">EMAIL</th>
              <th scope="col">MOBILE</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.employee.list.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.userName}</td>
                <td>{item.password}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  <input type="button" value="Edit" className="btn btn-link" />{" "}
                  /
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-link text-danger"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
