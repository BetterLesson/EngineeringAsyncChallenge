import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import BannerWrapper, {
  BannerContent,
  Subscribe,
} from './banner.style';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Heading
            as="h1"
            content="BetterLesson Professional Coaching"
          />
          <Text
            className="banner-caption"
            content="Our coaching services are designed to be comprehensive and holistic,
            covering a wide range of topics including Professional services,
            Sports, E-Sports, Fitness, and more."
          />

          <Subscribe>
            <Input
              inputType="email"
              placeholder="Enter Email Address"
              iconPosition="left"
              aria-label="email"
            />
            <Button title="Register Now" type="submit" />
          </Subscribe>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
