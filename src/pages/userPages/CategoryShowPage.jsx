import React from 'react';
import HeaderBanner from '../../components/banner/HeaderBanner';
import { useNavigate } from 'react-router-dom';
import { useGetCategories } from "../../services/category";
import headingImage from "../../assets/images/Rectangle 1.png";


const CategoryShowPage = () => {

    const navigate = useNavigate();
    const { data: categories, isSuccess: isCategoriesSuccess, } = useGetCategories();
  return (
   <>
    <HeaderBanner
        headingImage={headingImage}
        title="Shop"
        currentPage="Shop"
      />
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-5 ">
            {categories?.map((category) => (
              <div
                key={category._id}
                className="flex flex-col justify-center items-center relative my-3 "
              >
                {/* Round div */}
                <div className=" w-64 h-64 bg-gradient-to-r from-white to-custom-yellow rounded-[60%] shadow-lg overflow-hidden hover:cursor-pointer flex justify-center items-center" onClick={()=>navigate(`/user/shop/${category._id}`)}>
                  <img
                    src={category.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 bg-gray-200 flex justify-center items-center rounded-md hover:cursor-pointer shadow-md">
                  <p className="text-center font-sansation font-bold text- px-5 ">
                    {category.categoryName}
                  </p>
                </div>
              </div>
            ))}
          </div>
   
   </>
  )
}

export default CategoryShowPage