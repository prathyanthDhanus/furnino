import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import headingImage from "../../assets/images/Rectangle 1.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { useGlobalFormik } from "../../hooks/useFormik";
import {
  contactInitialValues,
  contactSchema,
} from "../../utils/validationSchema/contactSchema/contactSchema";
import CustomInputField from "../../components/inputField/CustomInputField";
import CustomButton from "../../components/buttton/CustomButton";
import HeaderBanner from "../../components/banner/HeaderBanner";

const ContactUs = () => {
  const navigate = useNavigate();
  const formik = useGlobalFormik({
    initialValues: contactInitialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("Contact form submitted", values);
    },
  });

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Contact Us"
        currentPage="Contact Us"
      />
      <div className="container mx-auto p-5 m-10">
        <div className="grid items-center justify-items-center">
          <div className="grid justify-items-center items-center p-10 border rounded-xl text-3xl shadow-xl">
            <div className="flex items-center gap-3 justify-center ">
              <RiCustomerService2Fill />
              <h5 className="text-green-700 font-sansation font-bold">
                Customer Care{" "}
              </h5>
            </div>
            <p className="my-2">1800 000 000 00</p>
          </div>
          <h5 className="font-sansation font-bold text-2xl mt-10">
            Get In Touch With Us
          </h5>
          <div className="px-20 my-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 mx-20">
          <div className=" col-span-1">
            <div className="my-5">
              <div className="flex items-center gap-3 font-sansation font-bold text-xl ">
                <FaLocationDot />
                <h5>Address</h5>
              </div>
              <div className="mx-8 font-sansation font-regular my-1">
                <p>234/300 5th SE</p>
                <p>District,67xxxx</p>
                <p>State</p>
              </div>
            </div>

            <div className="my-5">
              <div className="flex items-center gap-3 font-sansation font-bold text-xl">
                <MdCall />
                <h5>Phone</h5>
              </div>
              <div className="mx-8 font-sansation font-regular my-1">
                <p>+91 9999999999</p>
                <p>+91 9998887700</p>
                <p>0400 2779520</p>
              </div>
            </div>
            <div className="my-5">
              <div className="flex items-center gap-3 font-sansation font-bold text-xl">
                <MdSupportAgent />
                <h5>Support</h5>
              </div>
              <div className="mx-8 font-sansation font-regular my-1">
                <p>24 X 7 </p>
                <p>Customer Support </p>
              </div>
            </div>
          </div>
          <div className="mx-20 col-span-3">
            <form onSubmit={formik.handleSubmit}>
              <CustomInputField
                title="Your Name"
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.name}
                touched={formik.touched.name}
              />
              <CustomInputField
                title=" Email"
                type="text"
                placeholder="Enter Your Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <CustomInputField
                title="Subject"
                type="text"
                placeholder="Enter Subject"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.subject}
                touched={formik.touched.subject}
              />
              <CustomInputField
                title="Message"
                type="text"
                placeholder="Enter Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.message}
                touched={formik.touched.message}
                rows={5}
              />
              <CustomButton
                buttonText="Submit"
                type="submit"
                className="w-full my-5 bg-custom-yellow text-custom-white hover:bg-custom-white hover:text-custom-yellow hover:border-custom-yellow"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
