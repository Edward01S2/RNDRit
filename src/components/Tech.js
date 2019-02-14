import React from "react";
import PropTypes from "prop-types";

const Tech = class extends React.Component {

  render() {
    function createMarkup(cms) {
      return { __html: cms };
    }

    return (
      <section className="container mx-auto">
    <div className="py-20 px-4 md:px-8 md:py-24 lg:py-32 lg:px-16 xl:py-36">
    <p className="font-open uppercase text-sm tracking-wide pb-4">{this.props.data.sub}</p>
    <div className="md:grid md:grid-columns-2">
      <div>
        <h3
          className={`font-robot text-4xl font-bold border-l-4 border-blue-dark pl-4 lg:text-5xl`}
          dangerouslySetInnerHTML={createMarkup(this.props.data.head)}
        >
        </h3>
      </div>
      <p className="font-semibold opacity-75 leading-loose pt-4 md:p-0 lg:pl-16 xl:text-lg">
        {this.props.data.description}
      </p>
    </div>
    </div>
  </section>
    )
  }

}

Tech.propTypes = {
  sub: PropTypes.string,
  head: PropTypes.string,
  description: PropTypes.string
};

export default Tech;
