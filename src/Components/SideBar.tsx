import "./SideBar.css";

function SideBar() {
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>ECom</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Categories</p>
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Categories
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="/mens">Men</a>
                </li>
                <li>
                  <a href="/womens">Women</a>
                </li>
                <li>
                  <a href="electronics">Electronics</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Pages
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Page 1</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
