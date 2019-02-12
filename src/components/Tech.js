import React from "react";
import PropTypes from "prop-types";

const Tech = ({ data, width }) => (
  <section className="py-20 px-4 md:px-8 md:flex">
    <div className="md:w-1/2">
      <p className="font-open uppercase text-sm tracking-wide pb-4">
        {data.sub}
      </p>
      <h3 className={`font-robot text-4xl w-${width} font-bold border-l-4 border-blue-dark pl-4`}>
        {data.head}
      </h3>
    </div>

    <div className="md:w-1/2">
      <p className="font-semibold opacity-50 leading-normal pt-4 md:p-0">
        {data.description}
      </p>
    </div>
  </section>
);

Tech.propTypes = {
  sub: PropTypes.string,
  head: PropTypes.string,
  description: PropTypes.string
};

export default Tech;
