import React from 'react';
import { FiDownload } from "react-icons/fi";


const CTA = () => {
  return (
  <a
  href="https://drive.google.com/file/d/1Ju-sfBtb82DNFwtpKU_VXs4CPKsqZoe7/view?usp=sharing"
  download
  className="hero-btn"
  target="_blank"
  rel="noopener noreferrer"
  >
    <FiDownload className="hero-btn-icon"/> Resume
  </a>
  );
};

export default CTA;