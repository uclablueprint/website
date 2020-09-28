import React from 'react';
import { Button, Container } from 'react-bootstrap';

import SectionContainer from './SectionContainer';
// import SectionHeading from './SectionHeading';

const MAILCHIMP_URL = 'https://lablueprint.us4.list-manage.com/subscribe/post?u=223f2f7d67a9bd0b9f9172a69&amp;id=70cbf4957b';

export default function MailingListButton() {
  return (
    <SectionContainer className="mailing-list-button">
      <Container className="mailing-list-button-container mb-5 text-center">
        {/* <SectionHeading className="student-apply-heading">Apply</SectionHeading> */}
        <div className="mailing-list-button-text">
          Sign up for our mailing list to get an email when applications open!
        </div>
        <form action={MAILCHIMP_URL} method="post" className="mailing-list-button-form">
          <input className="mailing-list-button-input" name="EMAIL" placeholder="example@email.com" />
          <Button className="mailing-list-button-submit raised-button blue" type="submit" size="md">
            Submit
          </Button>
        </form>
      </Container>
    </SectionContainer>
  );
}
