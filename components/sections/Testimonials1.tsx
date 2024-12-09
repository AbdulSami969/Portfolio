"use client";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
export default function Testimonials1() {
  return (
    <>
      <section className="section-testimonials-1 position-relative pt-120 pb-120 bg-900 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="ds-3 mt-3 mb-3 text-primary">Client's Testimonials</h3>
              <span className="fs-5 fw-medium text-200">
                I believe that working hard and trying to learn every day will make me
                <br />
                improve in satisfying my customers.
              </span>

              <div className="row mt-8">
                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}> */}
                <Masonry columnsCount={3}>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1763.png" width="250" alt="logo" />
                      </div>

                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“I recently had the pleasure of working with Abdul and his team on the development of a new website, and I am thoroughly impressed with the experience and the results. From start to finish, the collaboration was both professional and fruitful. Abdul demonstrated exceptional expertise by proposing the best technology stack for our project. The structure he organized was not only efficient but also scalable, ensuring that our site could grow alongside our business needs. His technical acumen was evident in every aspect of the project...”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Evgheni.jpeg" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Evgheni Silantiev <span className="fs-6 fw-regular"> - Senior Cloud Engineer</span>
                          <br />
                          <div className="d-flex align-items-center">
                            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Maldova, Europe</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul goes above and beyond to deliver features and functionality that push our project forward. He's very reliable, making sure to show up on time to daily stand up meetings. He has demonstrated solid experience with Sanity cms and has delivered quality code as a full stack next.js developer.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Chriss.jpeg" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          <span className="pl-2">Christopher Torres </span>
                          <span className="fs-6 fw-regular"> - Founder, Marketeq Digital</span>
                          <br />
                          <div className="d-flex align-items-center">
                            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">United States</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“It is a pleasure working with Abdul, he is proactive with communication and always ready to recommend a meeting. The goals are clear and he has gone above and beyond to deliver”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/matt.webp" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Matt <span className="fs-6 fw-regular"> - Founder, Web Dog</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">United Kingdom</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul is amazing! He helped me bring my code to Sanity quickly and professionally. His skills are impressive, and he communicates clearly throughout the process. Highly recommend working with him!”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/marcb.jpg" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Marc <span className="fs-6 fw-regular"> - Co-Founder, Paperjetai</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="Germany" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Germany</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul is a great professional with deep expertise in several area of web development. If you want a reliable partner for your project you can definitely count on him for everything from choosing right infrastructure to build the software :) will work with him in the future.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/nicola boldrini.webp" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Christopher Torres <span className="fs-6 fw-regular"> - Manager, FinchTrade</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Italy</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Excellent work ethic, he shows up on time and gets the job done without delay. Highly recommended that you work with this developer if you care about deadlines.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Chriss.jpeg" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Christopher Torres <span className="fs-6 fw-regular"> - Founder, Marketeq Digital</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">United States</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul and his team consistently deliver high-quality work with attention to detail and a strong commitment to meeting expectations. This is our second project with Abdul, and once again, he has ensured smooth collaboration while addressing all of our requirements with care. He is a highly skilled engineer, and his work and management are truly impressive. We have worked with Abdul on new feature implementation and look forward to continuing our long-term collaboration with him.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Ion.jpeg" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Ion Draganel <span className="fs-6 fw-regular"> - Senior Developer</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="Moldova" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Moldova</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul goes above and beyond to make sure the task is completed on time and within scope. he is working with their team to work on advanced cms functionality and his work speaks for itself. We are continuing to work with Abdul on a regular basis.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Chriss.jpeg" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          <span className="pl-2">Christopher Torres </span>
                          <span className="fs-6 fw-regular"> - Founder, Marketeq Digital</span>
                          <br />
                          <div className="d-flex align-items-center">
                            <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">United States</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“He tried to understand my needs very well with very meticulous and detailed questions in a proactive manner. he also carried out the task of guiding in the analysis of the problems and contextualised the task required in the project. Polite and competent web developer. A great job!”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Rino.png" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Aracun <span className="fs-6 fw-regular"> - Senior Develoepr</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="Italy" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Italy</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul is an excellent person to work with and very professional. I hope to work with him again on many more projects.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Tomas.jpg" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Tomas <span className="fs-6 fw-regular"> - Founder, Citizens of Wild</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="France" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">France</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul is an excellent person to work with and very professional. I hope to work with him again on many more projects.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/Ikfiduciaire.webp" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          lkfiduciaire <span className="fs-6 fw-regular">- Founder, Swiss Backup</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="Switzerland" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Switzerland</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul is a very responsible developer and very prompt to reply your questions”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/clearify.webp" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Henry <span className="fs-6 fw-regular">- Founder, ToolMarket HK</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="Hong Kong" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/HK.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Hong Kong</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul did an amazing job! Delivered super fast! He was able to take my idea and run with it, making great suggestions and going the extra mile by adding functionality that I didn't think of. It's always a pleasure working with Abdul!”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/null.png" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Cameron Matthies <span className="fs-6 fw-regular">- Marketing Manager, Milan Direct</span> <br />
                          <div className="d-flex align-items-center">
                            <img alt="Australia" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Australia</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul did yet another amazing job! He's got such excellent skills for both design and development. He likes to get a deep understanding of the requirements and well and truely above and beyond to make sure he's successfully done his job well.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/null.png" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Cameron Matthies <span className="fs-6 fw-regular">- Marketing Manager, Milan Direct</span>
                          <br />
                          <div className="d-flex align-items-center">
                            <img alt="Australia" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Australia</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“Abdul did another amazing piece of work! He really tries to understand the requirements by asking many great questions, doing thorough researching and offering different suggestions and versions to choose from. I can't recommend him enough, he's that good! Thanks”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/null.png" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Cameron Matthies <span className="fs-6 fw-regular">- Marketing Manager, Milan Direct</span>
                          <br />
                          <div className="d-flex align-items-center">
                            <img alt="Australia" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Australia</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="bg-white card-testimonial-1 px-lg-3 p-md-3 mx-3 ml-5 mx-md-0 border-2 rounded-4 position-relative ">
                      <div className="mb-2 logo">
                        <img src="/assets/imgs/brands/brands-1/Frame 1760.png" width="250" alt="logo" />
                      </div>
                      <div className="d-flex my-4">
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        <i className="ri-star-fill fs-7 text-primary" />
                        {/* <i className="ri-star-fill fs-7 text-500 " /> */}
                      </div>
                      <h6 className="mb-4">“What an amazing experience! Abdul was amazing! He asked a lot of great questions to make sure he completely understood. He also made some great suggestions that help really improve the project. The end result was perfect! I'll be working with Abdul in the future.”</h6>
                      <Link href="/#" className="d-flex align-items-center">
                        <img className="icon_65 avatar" src="/assets/imgs/testimonials/testimonials-1/null.png" alt="infinia" />
                        <h6 className="ms-2 mb-0">
                          Cameron Matthies <span className="fs-6 fw-regular">- Marketing Manager, Milan Direct</span>
                          <br />
                          <div className="d-flex align-items-center">
                            <img alt="Australia" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg" className="mr-2" width={23} />
                            <p className="ms-2 mb-0">Australia</p>
                          </div>
                        </h6>
                      </Link>
                      <div className="position-absolute top-0 end-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
                          <g clipPath="url(#clip0_551_13914)">
                            <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                            <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={52} height={52} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Masonry>
                {/* </ResponsiveMasonry> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 ps-10 d-none d-md-block">
          <img className="position-relative z-1" src="/assets/imgs/testimonials/testimonials-1/man.png" alt="man" />
          <div className="position-absolute top-50 start-50 translate-middle z-0 mt-5">
            <img className="ribbonRotate" src="/assets/imgs/testimonials/testimonials-1/decorate.png" alt="" />
          </div>
        </div> */}
      </section>
    </>
  );
}
