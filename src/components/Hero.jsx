// // import { hero } from "../assets/dark-flower.jpg";
// import bg from "../images/dark-flower.jpg";

// function Hero() {
//   return (
//     <div className="mt-36 m-32 h-[calc(100vh-90px)] overflow-hidden rounded-[30px]">
//       <div className={`relative h-full w-full bg-cover bg-center  `}>
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url(${bg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "cover",
//           }}
//         ></div>
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           {/* Text Content */}
//           <div className="flex flex-col items-center text-white px-6 md:px-12 z-10 p-20 rounded-2xl bg-[rgba(50,71,74,0.20)] border border-customSlate shadow-2xl backdrop-blur-[6.3px]">
//             <h1 className="text-5xl md:text-7xl font-bold mb-4">
//               Welcome to Bloom
//             </h1>
//             <p className="text-xl md:text-2xl font-medium max-w-lg">
//               Discover the blooming world.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import bg from "../images/dark-flower.jpg";

function Hero() {
  return (
    <div className="lg:mt-36 sm:mt-28 h-[calc(100vh-90px)] lg:m-32 lg:rounded-[30px] overflow-hidden">
      <div className="relative h-full w-full bg-cover bg-center">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-white px-6 sm:px-8 md:px-8 z-10 p-6 sm:p-8 md:p-12 rounded-2xl lg:w-1/3 bg-[rgba(50,71,74,0.20)] border border-customSlate shadow-2xl backdrop-blur-md ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
              Welcome to Bloom
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-center">
              Discover the blooming world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
