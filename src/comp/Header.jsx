import React from "react";

const Header = () => {
  return (
    <div>
      <header className="siteheader">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <a href="/" className="sitelogo">
              <img
                src="https://bssadev.brandradiator.in/img/bssalogo.png"
                className="img-fluid"
                alt="bssa-logo"
                style={{ color: "#016938", width: "200px", padding: "10px" }}
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="searchBox">
              {/* <input
                className="searchInput"
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={handleSearch}
                placeholder="Search by name or mobile number or aadhar number..."
                value={search}
              /> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="location__naveen">
              <div className="location__link">
                <a href="/" target="_blank" className="logo-111">
                  <img
                    src="https://bssadev.brandradiator.in/img/bihar%20111%20years.png"
                    width="70rem"
                    height="auto"
                    alt="111-year-logo"
                  />
                </a>
              </div>

              <div className="naveen1">
                <div className="cmProfile">
                  <div className="cmProfile__textarea">
                    <h4 className="cmProfile__text">श्री नीतीश कुमार</h4>
                    <small>माननीय मुख्यमंत्री, बिहार</small>
                  </div>
                  <div className="cmProfile__img">
                    <img
                      src="https://bssadev.brandradiator.in/img/CM-img.png"
                      alt="cm-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
