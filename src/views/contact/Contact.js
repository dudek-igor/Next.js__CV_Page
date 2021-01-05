import { useState, useEffect, useRef } from 'react';
import { gsapAnimation } from 'src/utils';
import { Form, Field } from 'react-final-form';
import Loader from 'react-loader-spinner';
import axios from 'axios';

// Styles
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledFiledWrapper,
  StyledButtonWrapper,
  StyledButton,
  Error,
  ResponseMsg,
} from './Contact.styled';

// Handle Animation
const handleAnimation = (element) => {
  gsap.to(element, {
    x: 0,
    opacity: 1,
    duration: 0.7,
    scrollTrigger: {
      trigger: element,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  });
};

// Main Component
const Contact = () => {
  // State
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [responseMsg, setResponseMsg] = useState();
  // Ref
  const conntactWrapper = useRef();
  // Handle Submit
  const onSubmit = async (values) => {
    setResponseMsg('');
    setDisableSubmit(true);
    const { data } = await axios.post('/api/v1/mail', values);
    setResponseMsg(data);
    setDisableSubmit(false);
  };
  // Effect after mount
  useEffect(() => {
    const animateElemetns = conntactWrapper.current;
    const trigger = conntactWrapper.current;
    gsapAnimation(animateElemetns, trigger, 'play none none reverse');
  }, []);
  return (
    <StyledWrapper id='contact'>
      <StyledInnerWrapper ref={conntactWrapper}>
        <h1>Send Me a Message</h1>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            // Validate Email
            if (!values.email) {
              errors.email = 'Please add valid email';
            }
            // Validate Message
            if (!values.message || values.message.length < 16) {
              errors.message = 'Message is to short, min 16 characters';
            } else if (values.message.length > 160) {
              errors.message = 'Message is to long, max 160 characters';
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Field name='email'>
                {({ input, meta }) => (
                  <StyledFiledWrapper>
                    <label>Your Email</label>
                    <input {...input} type='email' placeholder='Email' />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </StyledFiledWrapper>
                )}
              </Field>
              <Field name='message'>
                {({ input, meta }) => (
                  <StyledFiledWrapper>
                    <label>Message</label>
                    <textarea
                      {...input}
                      placeholder='Please Add Your Message Here'
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </StyledFiledWrapper>
                )}
              </Field>
              {/* Response Msg */}
              {responseMsg && (
                <ResponseMsg success={responseMsg.success}>
                  {responseMsg.msg}
                </ResponseMsg>
              )}
              {/* Buttons */}
              <StyledButtonWrapper>
                <StyledButton type='submit' disabled={disableSubmit}>
                  {disableSubmit ? (
                    <Loader
                      type='TailSpin'
                      color='#000000'
                      height={16}
                      width={16}
                    />
                  ) : (
                    'Send'
                  )}
                </StyledButton>
                <StyledButton
                  type='button'
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </StyledButton>
              </StyledButtonWrapper>
            </form>
          )}
        />
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Contact;
