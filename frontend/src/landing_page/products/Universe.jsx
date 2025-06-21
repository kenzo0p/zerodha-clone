import React from 'react'

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

          <div className="container">
            <div className="row">
              <div className="col-4 p-5">
                <img
                  src="media\images\zerodhaFundhouse.png"
                  style={{ width: "210px", marginBottom: "15px" }}
                />
                <p className=" text-muted" style={{ fontSize: "13px" }}>
                  Our asset management venture
                  <br /> that is creating simple and transparent index
                  <br /> funds to help you save for your goals.
                </p>
              </div>
              <div className="col-4 p-5">
                <img
                  src="media\images\sensibullLogo.svg"
                  style={{ width: "210px", marginBottom: "15px" }}
                />
                <p className=" text-muted" style={{ fontSize: "13px" }}>
                  Options trading platform that lets you
                  <br /> create strategies, analyze positions, and examine
                  <br />
                  data points like open interest, FII/DII, and more.
                </p>
              </div>
              <div className="col-4 p-5">
                <img
                  src="media\images\tijoriLogo.svg"
                  style={{ width: "210px", marginBottom: "15px" }}
                />
                <p className=" text-muted" style={{ fontSize: "13px" }}>
                  Investment research platform <br />
                  that offers detailed insights on stocks, <br />
                  sectors, supply chains, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-4 p-5">
                <img
                  src="media\images\streakLogo.png"
                  style={{ width: "210px", marginBottom: "15px" }}
                />
                <p className=" text-muted" style={{ fontSize: "13px" }}>
                  Systematic trading platform
                  <br /> that allows you to create and backtest <br />
                  strategies without coding.
                </p>
              </div>
              <div className="col-4 p-5">
                <img
                  src="media\images\smallcaseLogo.png"
                  style={{ width: "210px", marginBottom: "15px" }}
                />
                <p className=" text-muted" style={{ fontSize: "13px" }}>
                  Thematic investing platform <br />
                  that helps you invest in diversified <br />
                  baskets of stocks on ETFs.
                </p>
              </div>
              <div className="col-4 p-5">
                <img
                  src="media\images\dittoLogo.png"
                  style={{ width: "210px", marginBottom: "15px" }}
                />
                <p className=" text-muted" style={{ fontSize: "13px" }}>
                  Personalized advice on life
                  <br /> and health insurance. No spam <br />
                  and no mis-selling.
                </p>
              </div>
            </div>
          </div>

          <button
            className="p-2 btn btn-primary fs-5 "
            style={{ width: "15%", margin: "0 auto" }}
          >
            Sign up For Free
          </button>
        </div>
    </div>
  )
}

export default Universe
