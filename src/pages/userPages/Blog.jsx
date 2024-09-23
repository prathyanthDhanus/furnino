import React from "react";
import { useNavigate } from "react-router-dom";
import headingImage from "../../assets/images/Rectangle 1.png";
import { IoTimer } from "react-icons/io5";
import HeaderBanner from "../../components/banner/HeaderBanner";


const Blog = () => {
  const blogData = [
    {
      title: "Interior Design Tips and Ideas",
      sections: [
        {
          subTitle: "Room-Specific Guides",
          description:
            "Transform any room in your home into a masterpiece with our detailed guides! Whether you're furnishing a cozy living room, a functional home office, or a tranquil bedroom, we'll walk you through the best furniture choices for every space.",
          image:
            "https://images.squarespace-cdn.com/content/v1/58b9e3da9de4bbb44f9988ca/1500401616040-ASLGXGR7P80IWT66NM7I/image-asset.jpeg",
        },
        {
          subTitle: "Room-Specific Guides",
          description:
            "Transform any room in your home into a masterpiece with our detailed guides! Whether you're furnishing a cozy living room, a functional home office, or a tranquil bedroom, we'll walk you through the best furniture choices for every space.",
          image:
            "https://images.squarespace-cdn.com/content/v1/58b9e3da9de4bbb44f9988ca/1500401616040-ASLGXGR7P80IWT66NM7I/image-asset.jpeg",
        },
        {
          subTitle: "Room-Specific Guides",
          description:
            "Transform any room in your home into a masterpiece with our detailed guides! Whether you're furnishing a cozy living room, a functional home office, or a tranquil bedroom, we'll walk you through the best furniture choices for every space.",
          image:
            "https://images.squarespace-cdn.com/content/v1/58b9e3da9de4bbb44f9988ca/1500401616040-ASLGXGR7P80IWT66NM7I/image-asset.jpeg",
        },
      ],
    },
    {
      title: "Interior Design Tips and Ideas",
      sections: [
        {
          subTitle: "Room-Specific Guides",
          description:
            "Transform any room in your home into a masterpiece with our detailed guides! Whether you're furnishing a cozy living room, a functional home office, or a tranquil bedroom, we'll walk you through the best furniture choices for every space.",
          image:
            "https://images.squarespace-cdn.com/content/v1/58b9e3da9de4bbb44f9988ca/1500401616040-ASLGXGR7P80IWT66NM7I/image-asset.jpeg",
        },
        {
          subTitle: "Room-Specific Guides",
          description:
            "Transform any room in your home into a masterpiece with our detailed guides! Whether you're furnishing a cozy living room, a functional home office, or a tranquil bedroom, we'll walk you through the best furniture choices for every space.",
          image:
            "https://images.squarespace-cdn.com/content/v1/58b9e3da9de4bbb44f9988ca/1500401616040-ASLGXGR7P80IWT66NM7I/image-asset.jpeg",
        },
        {
          subTitle: "Room-Specific Guides",
          description:
            "Transform any room in your home into a masterpiece with our detailed guides! Whether you're furnishing a cozy living room, a functional home office, or a tranquil bedroom, we'll walk you through the best furniture choices for every space.",
          image:
            "https://images.squarespace-cdn.com/content/v1/58b9e3da9de4bbb44f9988ca/1500401616040-ASLGXGR7P80IWT66NM7I/image-asset.jpeg",
        },
      ],
    },
  ];

  const navigate = useNavigate();
  return (
    <>

      <HeaderBanner
        headingImage={headingImage}
        title="Blog"
        currentPage="Blog"
      />
      {/* blog main div */}
      <div className="container mx-auto p-5 m-10">
        <div className="grid grid-cols-12 gap-5">
          {/* sub-div-1 */}
          <div className=" col-span-12  lg:col-span-9 xl:col-span-9 px-10">
            {blogData?.map((item) => (
              <div>
                <h5 className="font-sansation font-bold text-3xl">
                  {item?.title}
                </h5>
                <div className="w-full ">
                  {item?.sections?.map((blog) => (
                    <>
                      <img
                        src={blog.image}
                        alt="image"
                        className="object-contain rounded-xl my-5"
                      />
                      <span className="font-sansation font-bold text-xl ">
                        {blog?.subTitle}
                      </span>
                      <p className="font-sansation font-regular my-5">
                        {blog?.description}
                      </p>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* sub-div-2 */}
          <div className="col-span-3 hidden  lg:block xl:block">
            <div className="my-3">
              <div className="flex items-center  gap-2 ">
                <IoTimer />
                <h5 className="text-xl font-sansation font-bold ">
                  Recent Posts
                </h5>
              </div>
              <p className="font-sansation font-regular pl-6">Loreum ipsom</p>
            </div>
            <div className="my-3">
              <div className="flex items-center  gap-2 ">
                <IoTimer />
                <h5 className="text-xl font-sansation font-bold ">
                  Most Popular Posts
                </h5>
              </div>
              <p className="font-sansation font-regular pl-6">Loreum ipsom</p>
            </div>
          </div>
        </div>
      </div>
      {/* blog main div end*/}
    </>
  );
};

export default Blog;
