import React from "react";

const Tech = props => {
  function createMarkup(cms) {
    return { __html: cms };
  }

  return (
    <section className="container mx-auto">
      <div className="py-20 px-8 md:px-8 md:py-24 lg:py-32 lg:px-16 xl:py-36">
        <p className={`font-open uppercase text-sm tracking-wide pb-4`}>
          {props.sub}
        </p>
        <div className="lg:flex">
          <div className="w-1/2">
            <h3
              className={`font-robot text-3xl font-bold border-l-4 tracking-wide border-blue-600 pl-4 lg:text-4xl xl:text-5xl`}
              dangerouslySetInnerHTML={createMarkup(props.title)}
            />
          </div>
          <p
            className={`font-semibold opacity-75 leading-loose md:pt-6 lg:pt-0 lg:w-1/2 xl:text-lg`}
          >
            {props.des}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
