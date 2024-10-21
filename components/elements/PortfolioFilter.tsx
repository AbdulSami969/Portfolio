"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter() {
  // Isotope
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    const timeout = setTimeout(() => {
      isotope.current = new Isotope(".masonry-active", {
        itemSelector: ".filter-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".filter-item",
        },
      });
    }, 1000);

    // Cleanup on unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: string) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase");

  return (
    <>
      <div className="container">
        <div className="text-start">
          <div className="button-group filter-button-group filter-menu-active">
            <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
              All Projects
            </button>
            <button className={activeBtn("development")} onClick={handleFilterKeyChange("development")}>
              Web Development
            </button>
            <button className={activeBtn("design")} onClick={handleFilterKeyChange("design")}>
              Web Design
            </button>
            {/* <button className={activeBtn("ui")} onClick={handleFilterKeyChange("ui")}>
              UI/UX
            </button>
            <button className={activeBtn("app")} onClick={handleFilterKeyChange("app")}>
              App Dev
            </button> */}
          </div>
        </div>
        <div className="row masonry-active justify-content-between mt-6">
          <div className="grid-sizer" />
          <div className="filter-item col-lg-4 col-12 development design">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="https://www.assiduous.solutions/">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/assiduous.avif" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-content">
                  <h4 className="fw-semibold">Assiduous Solutions</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.assiduous.solutions/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development ">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="https://talent-hub.pages.dev/">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/talent.webp" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://talent-hub.pages.dev/" className="project-card-content">
                  <h4 className="fw-semibold">Talent Hub</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://talent-hub.pages.dev/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="https://engineersguildltd.com/">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/eg.webp" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://engineersguildltd.com/" className="project-card-content">
                  <h4 className="fw-semibold">Engineers Guild</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://engineersguildltd.com/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12  design">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/swiss.webp" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="" className="project-card-content">
                  <h4 className="fw-semibold">Swiss Backup</h4>
                  <p>Web Design </p>
                </a>
                <a target="_blank" href="" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/otto.webp" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="" className="project-card-content">
                  <h4 className="fw-semibold">Auto Manufacturing</h4>
                  <p>Web Design & Web Development </p>
                </a>
                <a target="_blank" href="" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development ">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="https://marketeqdigital.com/">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/marketeq.avif" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://marketeqdigital.com/" className="project-card-content">
                  <h4 className="fw-semibold">Marketeq Digital</h4>
                  <p>Web Development</p>
                </a>
                <a target="_blank" href="https://marketeqdigital.com/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development design">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="https://www.citizensofthewild.com/">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/citizen.avif" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://www.citizensofthewild.com/" className="project-card-content">
                  <h4 className="fw-semibold">Citizens of Wild</h4>
                  <p>Web Design & Web Development</p>
                </a>
                <a target="_blank" href="https://www.citizensofthewild.com/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development ">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="https://tools-market.vercel.app/">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/tool.avif" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://tools-market.vercel.app/" className="project-card-content">
                  <h4 className="fw-semibold">ToolMarket</h4>
                  <p> Web Development</p>
                </a>
                <a target="_blank" href="https://tools-market.vercel.app/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 development ">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <a target="_blank" href="https://downlight.vercel.app/">
                <img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/downlight.webp" alt="infinia" />
              </a>
              <div className="d-flex align-items-center mt-4">
                <a target="_blank" href="https://downlight.vercel.app/" className="project-card-content">
                  <h4 className="fw-semibold">Downlights</h4>
                  <p> Web Design & Development</p>
                </a>
                <a target="_blank" href="https://downlight.vercel.app/" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
