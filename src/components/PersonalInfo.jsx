import { useState } from "react";
import MainHeader from "./MainHeader";
import { Formik, Field, useField, Form } from "formik";
import * as yup from "yup";
import * as constants from "../utils/constants";

const PersonalInfo = ({ handleSubmit }) => {
  return (
    <>
      <div className="personal-info">
        <Formik
          initialValues={{
            name: localStorage.getItem("name") || "",
            email: localStorage.getItem("email") || "",
            phone: localStorage.getItem("phone") || "",
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .min("4", constants.minMsg)
              .max(40, constants.maxMsg)
              .required(constants.requiredMsg),
            email: yup
              .string()
              .email("Must be a valid email")
              .required(constants.requiredMsg),
            phone: yup
              .string()
              .matches(constants.phoneRegex, "Must be a valid phone number")
              .required(constants.requiredMsg),
          })}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {(formik) => (
            <>
              <MainHeader
                header="Personal info"
                info=" Please provide your name, email address, and phone number."
              />

              <Form autoComplete="off">
                <div>
                  <MyTextInput
                    label="Name"
                    placeholder="first name"
                    name="name"
                  />
                </div>
                <div>
                  <MyTextInput
                    label="Email Address"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div>
                  <MyTextInput
                    label="Phone Number"
                    name="phone"
                    placeholder="e.g +256 1234 57893"
                  />
                </div>
                <div className="btn-submit">
                  <button type="submit">Next step</button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PersonalInfo;

const MyTextInput = ({ placeholder, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label htmlFor={props.name}> {label}</label>
        {meta.touched && meta.error ? (
          <small className="error"> {meta.error} </small>
        ) : null}
      </div>
      <Field
        name={props.name}
        id={props.name}
        placeholder={placeholder}
        className={`${meta.touched && meta.error ? "error-input" : null} `}
        {...props}
      />
    </>
  );
};
