import React from 'react'

function FeatureSection() {
  return (
    <>
      <section className="Join_Future_section  wow fadeInUp  animated" style={{ visibility: 'visible' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
              <h1 className>Join Future Of Algorithmic <span className="color_span"> TA  </span> Trading Strategies</h1>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 m-auto">
              <div className="progress_heading">
                <h3 className="first">Pre sale</h3>
                <h3 className="second">Trading</h3>
                <h3 className="third">Profit</h3>
              </div>
              <div className>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress_heading_number">
                <h3>65% TARGET RAISED</h3>
                <h3>Profit= 4520..</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FeatureSection;