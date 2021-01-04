import { useState } from 'react';
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

const Contact = () => {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [responseMsg, setResponseMsg] = useState();
  const onSubmit = async (values) => {
    setDisableSubmit(true);
    const { data } = await axios.post('/api/v1/mail', values);
    setResponseMsg(data);
    setDisableSubmit(false);
  };
  return (
    <StyledWrapper id='contact'>
      <StyledInnerWrapper>
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
                    <label>Email</label>
                    <input {...input} type='email' placeholder='Your Email' />
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
                      placeholder='Please Add Your Message'
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
