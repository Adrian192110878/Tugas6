import React, { Component } from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import Foto from "./mikroskil.JPG";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router,
  Redirect,
  withRouter,
} from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = { isAuth: false };
  }

  render() {
    const LoginButton = withRouter(({ data }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: true });
          data.push("/profil");
        }}
      >
        Login
      </button>
    ));

    const LogoutButton = withRouter(({ data }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: false });
          data.push("/login");
        }}
      >
        Logout
      </button>
    ));

    const routes = [
      {
        path: "/",
        exact: true,
        render: () => <div>Home page</div>,
      },
      {
        path: "/login",
        render: () => <LoginButton />,
      },
      {
        path: "/profil",
        render: () =>
          this.state.isAuth ? (
            <div>
              <div className="container text-center">
                <h1>profil Mahasiswa</h1>
                <table className="table table-borderless text-start">
                  <tbody>
                    <tr>
                      <td>Foto Mahasiswa</td>
                      <td>:</td>
                      <td>
                        <img src={Foto} className="w-25 h-5 border border-1" />
                      </td>
                    </tr>
                    <tr>
                      <td>Nama</td>
                      <td>:</td>
                      <td>Adrian</td>
                    </tr>
                    <tr>
                      <td>NIM</td>
                      <td>:</td>
                      <td>192110878</td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td>:</td>
                      <td>Laki Laki</td>
                    </tr>
                    <tr>
                      <td>Tempat/Tanggal Lahir</td>
                      <td>:</td>
                      <td>Medan, 10 Juni 2001</td>
                    </tr>
                    <tr>
                      <td>
                        <LogoutButton />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          ),
      },
    ];

    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/profil">
                    profil
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;