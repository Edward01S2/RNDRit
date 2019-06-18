import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { navigate } from "gatsby-link";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

import USA from "../../img/usa.svg";


const Contact = ({ data: { prismicContact } }) => {
  return (
    <Layout>
      <Navbar
        classes="bg-blue-900"
        logo="text-white lg:text-5xl"
        navItems="text-gray-400"
        menuBg="bg-blue-800"
        menuBtn="text-white"
      />

      <section className="bg-blue-900">
        <div className="container mx-auto lg:flex lg:items-center lg:px-16 lg:py-16 xl:px-0 xl:py-24">
          <div className="py-16 px-8 pb-8 md:px-24 md:py-16 lg:w-1/2 lg:p-0 xl:py-36">
            <p className={`font-open uppercase text-sm tracking-wide pb-4 text-gray-400`}>
              {prismicContact.data.subtitle.text}
            </p>
            <div className="lg:flex">
              <div className="lg:pr-16">
                <h3
                  className={`font-robot text-2xl font-bold border-l-4 tracking-wide border-blue-600 pl-4 text-white xl:text-3xl`}
                >
                  {prismicContact.data.hero_title.text}
                </h3>
              </div>
            </div>
          </div>
        

        <div className="p-8 pt-0 md:max-w-lg md:mx-auto md:pb-16 lg:w-1/2 lg:p-0">
          <USA className="h-auto w-full fill-current text-gray-600" />
        </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="px-8 py-16 md:px-24 lg:max-w-3xl lg:mx-auto">
            <div className="pb-8">
              <h2 className="font-semibold text-xl pb-2 tracking-wide xl:text-3xl">{prismicContact.data.contact_title.text}</h2>
              <p className="text-sm xl:text-base">{prismicContact.data.contact_subtitle.text}</p>
            </div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/pages/contact/thanks"
            >
              <p class="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div class="mb-4">
                <label class="block text-blue-900 text-sm font-bold mb-2" for="name">
                  Your Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" />
              </div>
              <div class="mb-4">
                <label class="block text-blue-900 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" />
              </div>
              <div class="mb-4">
                <label class="block text-blue-900 text-sm font-bold mb-2" for="message">
                  Message
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" name="message" rows="4" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 hover:shadow trans-y text-white py-3 px-6 rounded no-underline inline-flex items-center text-base xl:text-xl">
                Send
              </button>
             
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        prismicContact {
          data {
            hero_title {
              text
            }
            subtitle {
              text
            }
            contact_title {
              text
            }
            contact_subtitle {
              text
            }
          }
        }
      }
    `}
    render={data => <Contact data={data} {...props} />}
  />
);
