import React, { useRef } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import BragSection from '../components/sections/BragSection'

const Home = () => {
  const contactUs = useRef(null);

  function jumpToContact() {
    contactUs.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (
    <>
      <Hero className="illustration-section-01" onContactUs={jumpToContact}/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <BragSection topDivider />
      <FeaturesTiles topDivider />
      {/* <Testimonial topDivider /> */}
      <span className="cta-wrapper" ref={contactUs}>
        <Cta split />
      </span>
    </>
  );
}

export default Home;