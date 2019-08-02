import React from "react";
import { graphql } from "gatsby";
import { HTMLRenderer } from "react-html-renderer";
import ScrollAnimation from "react-animate-on-scroll";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TriSvg from "../img/triangle.svg";
import WebSvg from "../img/web.svg";
import CubeSvg from "../img/maze.svg";

const ServicePage = ({ data }) => {
  const services = data.prismicServices.data;
  //console.log(services);

  function createMarkup(cms) {
    return { __html: cms };
  }

  return (
    <Layout>
      <Navbar
        classes="bg-blue-900"
        logo="text-white lg:text-5xl"
        navItems="text-gray-400"
        menuBg="bg-blue-800"
        menuBtn="text-white"
        svg="text-gray-500 hover:text-white"
      />

      <div className="bg-blue-900 text-white">
        <section id="hero" className="container mx-auto">
          <div className="py-24 px-8">
            <div className="font-robot md:text-center md:w-3/5 md:m-auto lg:w-1/2">
              <h1
                className={`font-bold font-sans text-5xl tracking-wider xl:text-6xl`}
                dangerouslySetInnerHTML={createMarkup(services.hero_heading)}
              />

              <p
                className={`pt-4 text-xl text-gray-500 leading-loose xl:text-2xl`}
              >
                {services.hero_description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-700">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row xl:py-24">
              <div className="triangle-bg md:mb-0 md:flex md:items-center md:justify-center md:order-1 lg:overflow-hidden lg:flex-grow lg:-ml-48">
                <ScrollAnimation
                  animateIn="trig-anim"
                  animatePreScroll={false}
                  animateOnce={true}
                >
                  <TriSvg className="my-12 px-8 stroke-current text-gray-100 h-72 w-72 lg:ml-48 xl:my-0" />
                </ScrollAnimation>
              </div>
              <div className="flex items-center z-10 md:w-1/2 md:order-0">
                <div className="bg-gray-100 max-w-xl p-8 py-16 text-black lg:p-16">
                  <h3
                    className="text-4xl font-robot font-medium tracking-wide pb-4 leading-normal"
                    dangerouslySetInnerHTML={createMarkup(
                      services.service[0].heading
                    )}
                  />
                  <div className="service-box">
                    <HTMLRenderer html={services.service[0].body.html} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-900">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row xl:py-24">
              <div className="temple-bg md:mb-0 md:flex md:items-center md:justify-center md:order-0 lg:overflow-hidden lg:flex-grow lg:-mr-48">
                <ScrollAnimation
                  animateIn="web-anim"
                  animatePreScroll={false}
                  animateOnce={true}
                >
                  <WebSvg className="my-12 px-8 stroke-current text-gray-100 h-72 w-72 lg:mr-48 xl:my-0" />
                </ScrollAnimation>
              </div>
              <div className="flex items-center justify-end z-10 md:w-1/2 md:order-1">
                <div className="bg-gray-100 max-w-xl p-8 py-16 text-black lg:p-16">
                  <h3
                    className="text-4xl font-robot font-medium tracking-wide pb-4 leading-normal"
                    dangerouslySetInnerHTML={createMarkup(
                      services.service[1].heading
                    )}
                  />
                  <div className="service-box">
                    <HTMLRenderer html={services.service[1].body.html} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row xl:py-24">
              <div className="circuit-bg md:mb-0 md:flex md:items-center md:justify-center md:order-1 lg:overflow-hidden lg:flex-grow lg:-ml-48">
                <ScrollAnimation
                  animateIn="cube-anim"
                  animatePreScroll={false}
                  animateOnce={true}
                >
                  <CubeSvg className="my-12 px-8 stroke-current text-gray-100 h-72 w-72 lg:ml-48 xl:my-0" />
                </ScrollAnimation>
              </div>
              <div className="flex items-center z-10 md:w-1/2 md:order-0">
                <div className="bg-gray-100 max-w-xl p-8 py-16 text-black lg:p-16">
                  <h3
                    className="text-4xl font-robot font-medium tracking-wide pb-4 leading-normal"
                    dangerouslySetInnerHTML={createMarkup(
                      services.service[2].heading
                    )}
                  />
                  <div className="service-box">
                    <HTMLRenderer html={services.service[2].body.html} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
};

export default ServicePage;

export const servicePageQuery = graphql`
  query ServicePage {
    prismicServices {
      data {
        hero_description
        hero_heading
        service {
          body {
            html
          }
          heading
        }
      }
    }
  }
`;
