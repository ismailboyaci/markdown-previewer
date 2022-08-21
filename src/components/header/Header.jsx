import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar ">
        <div className="container">
          <div className="">
            <a className="markDownLink" href="/">
              <p>MARKDOWN PREVIEWER</p>
            </a>
          </div>
          <div>
          <a className="markDownLink" href="/">
              <i className="bi bi-github iconGL"></i>
            </a>
          <a className="markDownLink" href="/">
              <i className="bi bi-linkedin iconGL"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
