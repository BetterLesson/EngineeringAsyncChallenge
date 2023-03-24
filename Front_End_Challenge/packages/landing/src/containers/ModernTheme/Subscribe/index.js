import React, { useState, useEffect } from 'react';

import Container from 'common/components/UI/ContainerTwo';
import CheckBox from 'common/components/Checkbox';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Text from 'common/components/Text';

import SectionWrapper, {
  FooterInner,
  Content,
  SubscriptionForm,
} from './subscribe.style';

import bg1 from 'common/assets/image/agencyModern/cta/1.png';
import bg2 from 'common/assets/image/agencyModern/cta/2.png';
import bg3 from 'common/assets/image/agencyModern/cta/3.png';
import bg4 from 'common/assets/image/agencyModern/cta/4.png';
import bg5 from 'common/assets/image/agencyModern/cta/5.png';
import DropdownMenu from "common/components/Dropdown";

const Subscribe = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
    }, []);

    const [state, setState] = useState({ name: '', email: '', valid: '', industry: '', checkBox: false });
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleOnChange = (e) => {
        let value = '';
        if (e.target.value.match(emailRegex)) {
            if (e.target.value.length > 0) {
                value = e.target.value;
                setState({ ...state, email: value, valid: 'valid' });
                console.log('valid');
            }
        } else {
            if (e.target.value.length > 0) {
                setState({ ...state, valid: 'invalid' });
                console.log('invalid');
            } else {
                setState({ ...state, valid: '' });
            }
        }
    };

    const handleNameChange = (e) => {
        setState({ ...state, name: e.target.value });
    };

    const handleDropdownChange = (value) => {
        setState({ ...state, industry: value });
    };

    const handleCheckBoxChange = (e) => {
        setState({ ...state, checkBox: e.target.checked });
    };

    const handleSubscriptionForm = (e) => {
        e.preventDefault();
        if (state.email.match(emailRegex)) {
            console.log(state.email, state.name, state.industry, state.checkBox);
            alert(`A subscription was submitted:\nName: ${state.name}\nEmail: ${state.email}\nIndustry: ${state.industry}\nCheck Box: ${state.checkBox}`);
            setState({ name: '', email: '', valid: '', industry: '', checkBox: false });
        }
    };

  return (
    <SectionWrapper>
      <Container>
        <FooterInner>
          <Content>
            <Heading as="h3" content="Like our service? Subscribe us" />
            <Text content="We have more than thousand of coaching experts passionate about helping your business reach full potential." />
          </Content>
          <SubscriptionForm>
              <div style={{ display: 'flex' }}>
                  <div style={{ flexBasis: '35%', marginRight: '1%' }}>
                      <Input
                          inputType="text"
                          placeholder="Full Name"
                          iconPosition="left"
                          onChange={handleNameChange}
                          value={state.name}
                      />
                  </div>
                  <div style={{ flexBasis: '65%' }}>
                      <Input
                          className={state.valid}
                          type="email"
                          placeholder="Enter email address"
                          iconPosition="left"
                          onChange={handleOnChange}
                          aria-label="email"
                      />
                  </div>
              </div>
              <div style={{ display: 'flex', marginTop: '20px'}}>
                  <div style={{ flexBasis: '32.6%', marginRight: '4%' }}>
                      <DropdownMenu
                          content={state.industry || "Industry"}
                          dropdownItems={["E-Sports", "Sports/Fitness", "Professional Services", "Other"]}
                          dropdownDirection="bottom"
                          onDropdownItemClick={handleDropdownChange}
                      />
                  </div>
                  <div style={{ flexBasis: '65%' }}>
                      <Button title="Subscribe" type="submit" onClick={handleSubscriptionForm} />
                  </div>
              </div>
              <CheckBox
              id="remember"
              htmlFor="remember"
              labelText="Don’t provide any promotional message."
              isChecked={state.checkBox}
              onClick={handleCheckBoxChange}
            />
          </SubscriptionForm>
        </FooterInner>
      </Container>
      <img src={bg1?.src} alt="bg1" className="illustration bg1" />
      <img src={bg2?.src} alt="bg2" className="illustration bg2" />
      <img src={bg3?.src} alt="bg3" className="illustration bg3" />
      <img src={bg4?.src} alt="bg4" className="illustration bg4" />
      <img src={bg5?.src} alt="bg5" className="illustration bg5" />
    </SectionWrapper>
  );
};

export default Subscribe;
