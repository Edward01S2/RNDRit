import React from "react";
import styled, { css } from "styled-components"
import { useTrail, animated } from 'react-spring'
import tw from "tailwind.macro"

const Main = styled.div `
  ${tw`relative w-full h-full overflow-hidden flex flex-col md:flex-wrap justify-center`};
`

const text = css`
  ${tw`relative text-black text-5xl text-left font-extrabold overflow-hidden tracking-wider font-robot md:pl-4 lg:text-6xl`}
  height: 65px;
  line-height: 65px;
  will-change: transform, opacity;
  @media(min-width:768) {
    height: 80px;
    line-height: 80px;
  }
`


function Hero(props) {
  const items = props.heading.split(" "); 
  const config = { mass: 5, tension: 2000, friction: 200 }
  const trail = useTrail(items.length, {
    config,
    delay: 800,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  })

    return (
      <section id="hero" className="container mx-auto">
        <div className="py-32 px-8 xl:py-56">
          <div className="font-robot md:text-center md:w-3/5 md:m-auto">
            {/* <h1
              className={`font-bold ${this.props.hSize} xl:text-6xl`}
              dangerouslySetInnerHTML={createMarkup(this.props.heading)}
            /> */}
            <Main>
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={items[index]}
                css={text}
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{items[index]}</animated.div>
              </animated.div>
            ))}
            </Main>

            <p className={`pt-4 text-xl leading-normal xl:text-2xl ${props.pClass}`}>
              {props.description}
            </p>
          </div>
        </div>
      </section>
    );
  
};

export default Hero;
