import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Section from "@/components/Section";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Home = () => {
  const { data, error, loading } = useFetch("/product/get");

  return (
    <>
      <div className="bg-gray-100 min-h-screen mb-10">
        <div className="container mx-auto flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              className="w-full h-full max-w-2xl ml-auto"
              src="src/assets/boy.png"
              alt="Boy in winter jacket"
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#171D28] p-8 flex flex-col justify-center text-white">
            <h1 className="text-8xl font-bold mb-4 text-center md:text-left">
              Bring the <br /> warmth.
            </h1>
            <p className="text-lg mb-6 text-center md:text-left">
              Everyone needs a good winter jacket. <br /> Find yours with our
              collection and more.
            </p>
            <div className="text-center md:text-left">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
                Shopping Now
              </button>
            </div>
          </div>
        </div>

        <Section />

        <div className="grid gap-8 px-4 mt-12">
          {loading && <p>Loading...</p>}
          <Products data={data} />
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default Home;
