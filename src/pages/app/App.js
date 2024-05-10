import "./App.css";
import { useAppState } from "./state/useAppState";

export const App = () => {
  const { data } = useAppState();
  console.log("Data: ", data);

  return (
    <div className="App">
      <nav class="navbar navbar-bg navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <span class="toolbox-color mb-0 h1">React Test App</span>
        </div>
      </nav>
      <div class="container text-center">
        <div class="row mt-4">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Search file"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col" align="left">File Name</th>
                  <th scope="col" align="left">Text</th>
                  <th scope="col" align="left">Number</th>
                  <th scope="col" align="left">Hex</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item) => (
                    <tr>
                      <td align="left">{ item.name }</td>
                      <td align="left">{ item.text }</td>
                      <td align="left">{ item.number}</td>
                      <td align="left">{ item.hex }</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
