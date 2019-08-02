import React from "react";
import uuid from "uuid";
import { motion } from "framer-motion";

const bg = {
  hover: { width: "100%" }
};

const bgWhite = {
  hover: { width: 0 }
};

const image = {
  hover: { scale: 1.04 }
};

const right = {
  hover: { x: [100, 150, 100], transition: { duration: 6 } }
};

const left = {
  hover: { x: [-100, -150, -100], transition: { duration: 6 } }
};

const white = {
  hover: { color: "#FFF", width: "75%", borderColor: "#FFF" }
};

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const WorkItem = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: window.innerWidth,
      isMobile: window.innerWidth < 640
    };
  }

  handleResize = e => {
    const windowSize = window.innerWidth;
    const isMobile = windowSize < 640;
    this.setState(prevState => {
      return {
        windowSize,
        isMobile
      };
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const sqColor = {
      color: this.props.work.data.color
    };
    const html = (
      <div className="flex flex-col md:flex-row">
        <div
          id="sq-1"
          className={`md:w-1/2 relative ${
            this.props.textR ? "md:order-1" : "md:order-2"
          }`}
        >
          <motion.div
            variants={bg}
            transition={{ duration: 0.4 }}
            class={`absolute h-full z-0 w-full ${this.props.bg} ${
              this.props.textR ? null : "md:w-1/2"
            }`}
          />
          {this.props.textR ? (
            <motion.div
              variants={bgWhite}
              transition={{ duration: 0.4 }}
              class="absolute bg-gray-100 h-full w-1/2 z-0"
            />
          ) : null}
          <div class="relative z-20">
            <motion.div
              variants={this.props.textR ? left : right}
              class={`p-8 hidden md:block ${this.props.textR ? "pb-20 sq-positive" : 'sq-negative'}`}
            >
              <svg
                class={`h-12 w-12 fill-current text-gray-300 ${
                  this.props.textR ? "float-right" : null
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" />
              </svg>
            </motion.div>
            <div className="relative px-8">
              <div class="relative z-20">
                {/* <div className="absolute w-full h-full inner-border-white" /> */}
                <motion.img
                  variants={image}
                  transition={{ duration: 0.4 }}
                  class="h-auto py-8 w-full"
                  src={this.props.work.data.image.localFile.url}
                />
              </div>
            </div>
            <motion.div
              variants={this.props.textR ? right : left}
              class={`absolute right-0 bottom-0 z-10 p-2 md:p-8 md:mr-16 ${this.props.textR ? "sq-positive" : "md:float-right sq-negative"}`}
            >
              <svg
                class={`h-16 w-16 fill-current`}
                style={sqColor}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" />
              </svg>
            </motion.div>
          </div>
        </div>
        <div
          id="sq-2"
          className={`md:w-1/2 ${
            this.props.bg
          } flex flex-col justify-center items-center ${
            this.props.textR ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="flex justify-center h-full md:flex-col md:justify-between md:p-32 md:pl-32">
            <motion.p
              variants={white}
              transition={{ duration: 0.4 }}
              className="hidden text-gray-400 uppercase text-sm inline-block border-b-2 w-40 border-line-right border-gray-400"
            >
              <span class={`${this.props.bg} pr-4 font-light`}>Case Study</span>
            </motion.p>
            <div className="flex flex-col px-8 pb-16">
              <h3 className="text-3xl font-semi-bold font-robot tracking-wide pb-2 text-white md:text-2xl lg:pb-6 lg:text-5xl">
                {this.props.work.data.title.text}
              </h3>
              <p className="leading-normal text-gray-400 md:pr-16 md:text-sm lg:text-base xl:text-xl">
                {this.props.work.data.description.text}
              </p>
              <div className="flex items-center pt-4 text-gray-500 text-base lg:pt-6 xl:text-lg">
                <svg
                  className="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="1"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z" />
                </svg>
                {this.props.work.data.tags.raw.map(tag => (
                  <p key={uuid.v4()} className="pl-4">
                    {tag.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {!this.state.isMobile ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            whileHover="hover"
            transition={{ duration: 2 }}
            className="hover:cursor-pointer pb-16"
          >
            {html}
          </motion.div>
        ) : (
          <div id="work-items" className="hover:cursor-pointer">
            {html}
          </div>
        )}
      </div>
    );
  }
};

export default WorkItem;
