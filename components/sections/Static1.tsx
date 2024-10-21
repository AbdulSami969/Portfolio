"use client";
import CountUp from "react-countup";

export default function Static1() {
  return (
    <>
      <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
        <div className="container">
          <div className="inner">
            <div className="row align-items-center justify-content-lg-around justify-content-center">
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-shape-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={4} />
                      <span className="fs-50 text-300 mb-0">+</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">Year Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-computer-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={25} />
                      <span className="fs-50 text-300 mb-0">+</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-service-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={20} />
                      <span className="fs-50 text-300 mb-0">+</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-award-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={1} />
                      <span className="fs-50 text-300 mb-0">+</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">Awards Winner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
