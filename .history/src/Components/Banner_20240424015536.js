import React from 'react';

const Banner = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Where Fitness Meets Fun and Results Are Achieved</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</p>
        </div>
        {/* Add your images here */}
      </div>
    </section>
  );
};

export default Banner;