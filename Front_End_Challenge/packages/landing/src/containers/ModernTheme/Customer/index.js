import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
} from './customer.style';
import illustration from 'common/assets/image/agencyModern/customer.png';

const Customer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <NextImage src={illustration} alt="Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="We have more than thousand of worldwide happy customer"
            />
            <Text content="By expanding our coaching services to additional industries,
            we can help even more people to unlock their full potential.
            Whether you are an executive looking to improve your leadership skills,
            an entrepreneur looking to start a new venture,
            or a professional looking to take your career to the next level,
            our coaches can help you get there." />
            <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Customer;
