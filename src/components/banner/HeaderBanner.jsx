import React from 'react';
import { FaGreaterThan } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const HeaderBanner = ({ headingImage, title, currentPage }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${headingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5rem',
      }}
    >
      <div>
        <h5 className="font-sansation font-bold text-4xl text-center">
          {title}
        </h5>
        <div className="flex justify-center items-center gap-1">
          <p
            className="font-sansation font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            Home
          </p>
          <FaGreaterThan className="text-xs" />
          <p className="font-sansation font-regular text-custom-yellow">
            {currentPage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
