import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Specialties',
    paragraph: null
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Robust Apps
                  </div>
                <h3 className="mt-0 mb-12">
                  Mobile App Development
                  </h3>
                <p className="m-0">
                  Animo Labs is a leading mobile app development company, with expertise in mobile application strategy planning, stunning design and impeccable development services for iPhone, Android, Windows, Swift and Cross platforms. From simple to complex, we don't just build mobile apps, we build mobile experiences. 
                  </p>
                <p className="m-0">
                    Our comprehensive range of mobile app development services include everything from consulting, UX/UI designing, developing, launching to managing your app after deployment. We build apps for B2E, B2B, and B2C processes.
                  </p>
                <ul className="text-color-high fw-600">
                  <li>Android App Development</li>
                  <li>React Native App Development</li>
                  <li>iPhone App Development</li>
                  <li>iPad App Development</li>
                  </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Responsive Websites
                  </div>
                <h3 className="mt-0 mb-12">
                  Web Application Development
                  </h3>
                <p className="m-0">
                  Think big to achieve big! Anything is possible when you partner with the leading web application development company – Animo Labs. With advanced technologies, proven methodologies and creative experts, we provide custom web application development services that facilitate business transformation.
                  </p>
                <p className="m-0">
                  As a web application development company, we understand every business has unique requirements. Our experienced developers have deep expertise in developing custom web apps for enterprises, eCommerce stores, financial organizations, start-ups, and other industries. We handle the entire web app development process, from designing, HTML, coding, programming, testing to deployment.
                  </p>
                <ul className="text-color-high fw-600">
                  <li>Angular Application Development</li>
                  <li>React Application Development</li>
                  <li>Node.js Application Development</li>
                  <li>Java Application Development</li>
                  <li>Python Application Development</li>
                  </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Scalability at core
                  </div>
                <h3 className="mt-0 mb-12">
                  Cloud Solutions
                  </h3>
                <p className="m-0">
                  Animo Labs is uniquely qualified to assess your business's cloud readiness and determine which IT solutions support your goals most effectively.
                  </p>
                <p className="m-0">
                  We are experts in working with the AWS(/Azure/GCP) platform. We can provide strategic consulting and hands-on development skills - backed up by real life experience of having been through the same journey ourselves.
                  </p>
                <p className="m-0">
                  Talk to us if you need help with:
                  </p>
                <ul className="text-color-high fw-600">
                  <li>Cloud Services</li>
                  <li>Service Bus</li>
                  <li>Storage</li>
                  <li>Kubernetes</li>
                  <li>Redis Cache</li>
                  <li>SQL Databases</li>
                  <li>Active Directory</li>
                  <li>Virtual Networks / Hybrid Cloud</li>
                  </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Cutting Edge Tech
                  </div>
                <h3 className="mt-0 mb-12">
                  Emerging Technologies
                  </h3>
                <p className="m-0">
                  Business growth is fueled by incorporating new and emerging technologies in business processes. With customized emerging information technology services, Animo Labs has helped both small companies and large enterprises to achieve greater productivity and business agility. Let's leverage the power of digital emerging technologies together!
                  </p>
                <p className="m-0">
                  At Animo Labs, we pride ourselves on being at the forefront of IT technology and innovation. We empower our clients with ideas and strategies to leverage emerging technologies, such as IoT, Big Data, Machine Learning, Cloud Computing and more, to drive transformational growth of your business. Our emerging technology services will let you embrace opportunities, enhance customer engagement and tap into new markets.
                  </p>
                <ul className="text-color-high fw-600">
                  <li>Apple Watch App Development</li>
                  <li>AR App Development</li>
                  <li>Big Data Analytics Services</li>
                  <li>Cloud Computing Consulting</li>
                  <li>Internet of Things (IoT) Technology</li>
                  <li>Machine Learning Consulting</li>
                  </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Managed End-to-End
                  </div>
                <h3 className="mt-0 mb-12">
                  CMS and E-Commerce
                  </h3>
                <p className="m-0">
                  A Content Management System (CMS) allows you to manage the content on your website the way you want. Choose Source Soft Solutions as your CMS web development company and increase profitability, revolutionize customer service and reduce overhead costs. Our impeccable range of customized eCommerce CMS development services include custom module development, theme development, check-out page designing, payment gateway integration and more on a well-designed responsive website.
                  </p>
                <p className="m-0">
                  Start-up or established, large or small, simple or complex, we can customize CMS and eCommerce solutions to help you improve your business ROI.
                  </p>
                <ul className="text-color-high fw-600">
                  <li>Magento Development</li>
                  <li>WordPress Website Development</li>
                  <li>Drupal eCommerce Development</li>
                  <li>Joomla Website Development</li>
                  <li>Shopify Store Development</li>
                  <li>OpenCart Website Development</li>
                  </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Automated IT
                  </div>
                <h3 className="mt-0 mb-12">
                  Managed IT
                  </h3>
                <p className="m-0">
                  Imagine having the ability to leave your office every evening, knowing that the security and continuity of your company are in good hands. Animo Labs’ IT Managed Services do just that - 24/7.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;