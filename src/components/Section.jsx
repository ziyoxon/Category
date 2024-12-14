import React from "react";

const Section = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center text-3xl font-sanf mb-4 mt-6">Trending Brands</h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            <img
              className="h-14"
              src="src/assets/logo/logo01.png"
              alt="Brand Logo 1"
            />
            <img
              className="h-14"
              src="src/assets/logo/logo02.png"
              alt="Brand Logo 2"
            />
            <img
              className="h-14"
              src="src/assets/logo/logo03.png"
              alt="Brand Logo 3"
            />
            <img
              className="h-14"
              src="src/assets/logo/logo04.png"
              alt="Brand Logo 4"
            />
            <img
              className="h-14"
              src="src/assets/logo/logo05.png"
              alt="Brand Logo 5"
            />
            <img
              className="h-14"
              src="src/assets/logo/logo06.png"
              alt="Brand Logo 6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
