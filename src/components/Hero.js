import React from "react";

const Hero = class extends React.Component {
  render() {
    function createMarkup(cms) {
      return { __html: cms };
    }
    return (
      <section id="hero" className="container mx-auto">
        <div className="py-40 px-8 xl:py-56">
          <div className="font-robot md:text-center md:w-3/5 md:m-auto lg:w-1/2">
            <h1
              className="font-bold text-5xl xl:text-6xl"
              dangerouslySetInnerHTML={createMarkup(this.props.heading)}
            />
            <p className={`pt-4 text-xl leading-normal xl:text-2xl ${this.props.pClass}`}>
              {this.props.description}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
