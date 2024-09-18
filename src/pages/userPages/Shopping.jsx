import React from "react";

const Shopping = () => {
  const shoppingCategory = [
    { title: "Sofa Sets" },
    { title: "Sofa Sets" },
    { title: "Sofa Sets" },
    { title: "Sofa Sets" },
  ];

  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-red-300">
        {shoppingCategory?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center" 
          >
            <div className="relative w-64 h-64 bg-gradient-to-r from-white to-custom-yellow rounded-[60%] transform shadow-lg overflow-hidden hover:cursor-pointer flex justify-center items-center">
              <p className="text-center font-sansation font-bold text-xl">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shopping;
