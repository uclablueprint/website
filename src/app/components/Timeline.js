import React from 'react';
import { Image } from 'react-bootstrap';

import TimelineImage from '../assets/images/students/timeline.svg';

/* eslint-disable */
const timeline = [
  {
    // heading: 'Applications Are Currently Open!',
    heading: 'Applications Open',
    date: 'Sept 19',
    // body: (<div>
    //   Applications for our Fall 2022 recruitment are open! You can find a link to our application on our <a href="https://linktr.ee/lablueprint">Linktree</a> or you can fill one out <a href="https://airtable.com/shrwfhrjiKIcI2Ny5">here</a>. Fill out our recruitment interest form, and check our <a href="https://facebook.com/lablueprint">Facebook</a> and <a href="https://instagram.com/lablueprint">Instagram</a> out to be notified about everything recruitment related!
    // </div>),
    body: (<div>
      Applications for our Fall 2023 recruitment will open in Week 0! Check our <a href="https://facebook.com/lablueprint">Facebook</a> and <a href="https://instagram.com/lablueprint">Instagram</a> out to be notified about everything recruitment related!
    </div>),
  },
  {
    heading: 'Infosessions',
    date: 'Sept 27th and Sept 28',
    // body: (<div>
    //   We will be having an in-person infosession on Tuesday, September 27th, and an online one on Wednesday, September 28th! Learn more about our club and our projects during these infosessions! We will be talking about what you can expect when you join Blueprint and answer any questions you may have.
    // </div>),
    body: (<div>
      We will be having in-person and online infosessions in Week 1 (exact dates TBD). Learn more about our club and our projects during these infosessions! We will be talking about what you can expect when you join Blueprint and answer any questions you may have.
    </div>),
  },
  {
    heading: 'Applications Due',
    date: 'Sept 30 (11:59 PM PST)',
    // body: (<div>
    //   Applications close on September 30th at 11:59pm! The application includes 2 short questions to help us understand your background and your motivations for joining Blueprint.
    // </div>),
    body: (<div>
      Applications close on end of Week 1! The application includes 2 short questions to help us understand your background and your motivations for joining Blueprint.
    </div>),
  },
  {
    heading: 'Interviews',
    date: 'Week 2',
    body: (<div>
      We will be inviting some applicants back for an interview to learn more about your background and your experiences. This will be an opportunity to <b>show your passion for social good and ability to problem solve</b>. Invited candidates will be emailed to sign up for an interview slot. Invites will tentatively be sent out during Week 2!
    </div>),
  },
  {
    heading: 'Chat with us',
    date: 'Week 3',
    body: (<div>
      After interviews, we will send out invites to schedule a time to talk. At Blueprint, we want to know what inspires you most, allow you to meet our team, and answer any questions you may have! Invites will tentatively be sent out during Week 3!
    </div>),
  },
];
/* eslint-enable */

export default function Timeline() {
  const timelineItems = timeline.map((timelineItem, index) => (
    <div key={JSON.stringify(timelineItem)}>
      <div className="timeline-row">
        <div className="timeline-number">
          {(index + 1 < 10) ? `0${(index + 1)}` : index + 1}
        </div>
        <div className="timeline-body-container">
          <div className="timeline-heading-container">
            <div className="timeline-heading">
              {timelineItem.heading}
            </div>
            {/* <div className="timeline-date">
              {timelineItem.date}
            </div> */}
          </div>
          <div className="timeline-body">
            {timelineItem.body}
          </div>
        </div>
      </div>
      {index !== timeline.length - 1 && <Image src={TimelineImage} className="timeline-line" />}
    </div>
  ));

  return (
    <div className="timeline">
      {timelineItems}
    </div>
  );
}
