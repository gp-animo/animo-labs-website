import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const TechnologySection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'technologies-section section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'technologies-section-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Technologies We Use',
    paragraph: ''
  }

  const technologies = [
    {
      levels: 1,
      title: 'Web Development',
      data: ["Spring Boot Framework", "Spring Framework", "React", "Angular", "Express Framework", "Restlet", "Django + Flask", "Typescript", "Firebase"]
    },
    {
      levels: 1,
      title: "Mobile Development",
      data: ["Android Native (Java/Kotlin)", "iOS Native (Swift)", "React Native", "Flutter", "Firebase"]
    },
    {
      levels: 1,
      title: "Machine Learning",
      data: ["Tensor Flow", "Tensor Flow Lite", "Scikit-learn", "NLTK", "spaCY", "Keras"]
    },
    {
      levels: 1,
      title: "Databases",
      data: ["Mysql", "Postgresql", "NoSQL", "MongoDB", "Elasticsearch", "Solr", "Redis", "Cassandra"]
    },
    {
      levels: 1,
      title: "Message Queues",
      data: ["Kafka", "Rabbitmq", "Zeromq"]
    },
    {
      levels: 1,
      title: "Logging and Monitoring",
      data: ["Grafana", "Kibana", "Datadog", "Prometheus", "New Relic", "Logstash"]
    },
    {
      levels: 1,
      title: "Cluster Ops",
      data: ["Kubernetes ", "Docker", "CI/CD Pipeline"]
    },
    {
      levels: 1,
      title: "Big Data",
      data: ["HBase", "Hadoop", "HDFS", "Oozie"]
    },
    {
      levels: 1,
      title: "Analytics",
      data: ["Google Analytics"]
    }
  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container font-">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="technologies-wrapper">
            {technologies.map((technology, index) => {
              console.log(technology.title);
              return (
                <div className="technology-wrapper" key={index}>
                  <div className="title">
                    {technology.title}
                  </div>
                  <div className="list">
                    <ul>
                    {technology.data.map((tech, index) => {
                      return (
                        <li key={index}>{tech}</li>
                      );
                    })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

TechnologySection.propTypes = propTypes;
TechnologySection.defaultProps = defaultProps;

export default TechnologySection;