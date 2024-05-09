import "./App.css";

function App() {
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
                  <th scope="col">File Name</th>
                  <th scope="col">Text</th>
                  <th scope="col">Number</th>
                  <th scope="col">Hex</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>file1.csv</td>
                  <td>tst</td>
                  <td>12345</td>
                  <td>234as45672asdf123asdfdf</td>
                </tr>
                <tr>
                  <td>file1.csv</td>
                  <td>tst</td>
                  <td>12345</td>
                  <td>234as45672asdf123asdfdf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
