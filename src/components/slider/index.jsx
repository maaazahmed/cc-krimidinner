// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./slider.css";

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(null);

//   const slideVariants = {
//     hiddenRight: {
//       // x: "100%",
//       opacity: 1,
//     },
//     hiddenLeft: {
//       // x: "-100%",
//       opacity: 1,
//     },
//     visible: {
//       // x: "0",
//       opacity: 1,
//       transition: {
//         duration: 1,
//       },
//     },
//     exit: {
//       opacity: 1,
//       scale: 0.8,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const slidersVariants = {
//     hover: {
//       scale: 1.2,
//       backgroundColor: "#ff00008e",
//     },
//   };
//   const dotsVariants = {
//     initial: {
//       y: 0,
//     },
//     animate: {
//       y: -10,
//       scale: 1.2,
//       transition: { type: "spring", stiffness: 1000, damping: "10" },
//     },
//     hover: {
//       scale: 1.1,
//       transition: { duration: 0.2 },
//     },
//   };

//   const handleNext = () => {
//     setDirection("right");
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setDirection("left");

//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDotClick = (index) => {
//     setDirection(index > currentIndex ? "right" : "left");
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="__carousel">
//       <div className="__carousel-images">
//         <AnimatePresence>
//           {images.map(() => {
//             return (
//               <motion.img
//                 key={currentIndex}
//                 src={images[currentIndex]}
//                 initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
//                 animate="visible"
//                 exit="exit"
//                 variants={slideVariants}
//               />
//             );
//           })}
//         </AnimatePresence>
//         <div className="__slide_direction">
//           <motion.div
//             variants={slidersVariants}
//             whileHover="hover"
//             className="__left"
//             onClick={handlePrevious}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//             >
//               <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
//             </svg>
//           </motion.div>
//           <motion.div
//             variants={slidersVariants}
//             whileHover="hover"
//             className="__right"
//             onClick={handleNext}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//             >
//               <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
//             </svg>
//           </motion.div>
//         </div>
//       </div>
//       <div className="__carousel-indicator">
//         {images.map((_, index) => (
//           <motion.div
//             key={index}
//             className={`__dot ${currentIndex === index ? "__active" : ""}`}
//             onClick={() => handleDotClick(index)}
//             initial="initial"
//             animate={currentIndex === index ? "animate" : ""}
//             whileHover="hover"
//             variants={dotsVariants}
//           ></motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };
// const ims = [
//   "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];
// // export default () => <Carousel images={ims}  />;
// function App() {
//   return (
//     <div className="____App">
//       <header className="____App-header">
//         <h1>Image Carousel using React and Framer Motion</h1>
//       </header>
//       <main>
//         <Carousel images={ims} />
//       </main>
//     </div>
//   );
// }
// export default App;

// import React, { useRef, useEffect, useState } from "react";
// import ReactDOM from "react-dom";

// import { motion, useMotionValue, useScroll } from "framer-motion";

// import "./slider.css";

// export default () => {
//   const ref = useRef(null);
//   const ref2 = useRef(null);
//   const x = useMotionValue(0);

//   const { scrollYProgress } = useScroll({
//     target: ref2,
//     offset: ["right right", "left left"],
//   });

//   const [sliderWidth, setSliderWidth] = useState(0);
//   const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
//   const [sliderConstraints, setSliderConstraints] = useState(0);

//   useEffect(() => {
//     const calcSliderChildrenWidth = () => {
//       setSliderChildrenWidth(
//         Array.from(ref.current.childNodes).reduce(
//           (acc, node) => acc + node.clientWidth,
//           0
//         )
//       );
//     };

//     calcSliderChildrenWidth();

//     const calcSliderWidth = () => {
//       setSliderWidth(ref.current.clientWidth);
//     };

//     calcSliderWidth();
//     window.addEventListener("resize", calcSliderWidth);

//     const calcSliderConstraints = () => {
//       setSliderConstraints(sliderChildrenWidth - sliderWidth);
//     };

//     calcSliderConstraints();
//     window.addEventListener("resize", calcSliderConstraints);
//   }, [ref, sliderChildrenWidth, sliderWidth]);

//   const finalPosition = (event, info) => {
//     // console.log("end", info.offset.y, info.offset.x);
//   };

//   const initailPosition = (event, info) => {
//     // console.log("start", info.offset.y, info.offset.x);
//   };

//   // console.log(scrollYProgress, "scrollYProgress");
//   return (
//     <div className="App">
//       <div className="container">
//         <h1>Framer motion slider</h1>
//         <motion.div className="slider-wrapper" style={{ overflowX: "hidden" }}>
//           <motion.div
//             className="slider"
//             ref={ref}
//             drag="x"
//             style={{ x }}
//             dragConstraints={{
//               left: `${-sliderConstraints}`,
//               right: 0,
//             }}
//             hello-attr={-sliderConstraints}
//             onDrag={(event, info) => {
//               // console.log("event", event);
//               // console.log("onDrag", info.offset.y, info.offset.x);

//               const { point } = info;

//               // Retrieve the element being dragged
//               const draggedElement = event.target;

//               // Retrieve inner elements of the dragged element
//               const innerElements = draggedElement.querySelectorAll(".box");

//               // Calculate the position of the inner elements relative to the dragging motion
//               innerElements.forEach((innerElement) => {
//                 const rect = innerElement.getBoundingClientRect();
//                 const relativeX = info.point.x - rect.left;
//                 const relativeY = info.point.y - rect.top;
//                 if (relativeX > 0 && relativeX < 100) {
//                   console.log("relativeX", relativeX);
//                   innerElement.style.color = "yellow";
//                 } else{
//                   innerElement.style.color = "blue";
//                 }

//                 // if (event.clientX > 500 && event.clientX < 600) {
//                 //   innerElement.style.color = "yellow";
//                 // } else {
//                 //   innerElement.style.color = "blue";
//                 // }

//                 // Apply individual style to each inner element
//                 // innerElement.style.transform = `translate(${relativeX}px, ${relativeY}px)`;

//                 // Check if the element is centered
//                 // const isCentered = Math.abs(relativeX) < rect.width / 100;

//                 // Update color based on centered status
//                 // innerElement.style.background = isCentered ? "red" : "black";
//               });
//             }}
//             onDragStart={(event, info) => {
//               initailPosition(event, info);
//             }}
//             onDragEnd={(event, info) => {
//               finalPosition(event, info);
//             }}
//           >
//             {[...Array(24).keys()].map((item, i) => {
//               const updatePosition = (element) => {
//                 const rect = element.getBoundingClientRect();
//                 console.log(rect.left);
//               };

//               return (
//                 <motion.div
//                   ref={ref2}
//                   style={{ pathLength: scrollYProgress }}
//                   key={i}
//                   // ref={(element) => updatePosition(element)}
//                 >
//                   <div className="box">{item + 1}</div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

import "./slider.css";
import { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const listItemsRefs = []; // Array to store refs for list items

  useEffect(() => {}, []);

  const checkPost = () => {
    listItemsRefs.forEach((itemRef, index) => {
      if (itemRef) {
        const boundingRect = itemRef.getBoundingClientRect();
        const xPosition = boundingRect.left;
        const yPosition = boundingRect.top;

        console.log(`Item ${index + 1}:`);
        console.log(`X position: ${xPosition}`);
        console.log(`Y position: ${yPosition}`);
        console.log(itemRef[index])

        // itemRef[index].style.background = "red"
      }


    });
  };

  return (
    <>
      {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg> */}
      <ul onScroll={checkPost} ref={ref}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => {
          return <li ref={(el) => (listItemsRefs[i] = el)}></li>;
        })}
      </ul>
    </>
  );
}
