import Marquee from "react-fast-marquee";

export default function Brands1() {
  return (
    <>
      <section className="section-brands-1 py-60">
        <div className="container">
          <div className="text-center">
            <h2>Trusted by industry leaders</h2>
            <p className="text-300">
              I have collaborated with many large corporations, companies, and agencies around
              <br />
              the world in many fields of design and consulting
            </p>
          </div>
        </div>
        <div className="container-fluid">
          {/* Carausel Scroll */}
          <Marquee className="carouselTicker carouselTicker-right mt-5 position-relative z-1" direction="right">
            <ul
              className="carouselTicker__list"
              style={{
                filter: "brightness(0) saturate(100%) invert(90%) sepia(10%) saturate(0%) hue-rotate(180deg)",
                opacity: 0.7,
              }}
            >
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1759.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1761.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1762.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1763.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1764.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1765.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1766.png" width="250" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Frame 1767.png" width="250" alt="infinia" />
              </li>
              {/* <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/Talent Hub.png" width="250" alt="infinia" />
              </li> */}
              {/* <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-2.png" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-3.png" alt="infinia" />
              </li> */}
              {/* <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-4.png" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-5.png" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-6.png" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-7.png" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-8.png" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-9.png" alt="infinia" />
              </li>
              <li className="carouselTicker__item">
                <img src="/assets/imgs/brands/brands-1/logo-10.png" alt="infinia" />
              </li> */}
            </ul>
          </Marquee>
        </div>
      </section>
    </>
  );
}
