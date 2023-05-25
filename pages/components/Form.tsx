import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
};

const formValidate = (values: any) => {
  Yup.object().shape({
    firstName: Yup.string().min(2, 'too short').max(50, 'too long').required(),
    lastName: Yup.string().min(2, 'too short').max(50, 'too long').required(),
  });
};

const Form = () => {
  const submitHandler = (values: any) => {
    console.log(values);

    values = initialValues;
  };

  return (
    <div className="flex">
      <div className="">
        <img
          src="https://cdn.gencraft.com/prod/user/448671ad-a1e8-4c58-863f-3cc8195a3fb3/1e744a70-c8a7-43bf-9092-8ea78d2731f1/images/image0_1024_1024_watermark.jpg?Expires=1685081629&Signature=FCYwxzeFdhrRHQB29e4T~02tPMdVlRDgItiOAE~FnSO6pKhJxRrTVqGNs6rokB8mqzTCtpXjB-x9DrZW9NMD24N23LKrUAMZ0gOFlasvBJIr8poDpTFDrqbw53~oUIgjoZX4L~LBUhBZx2uTE~FIjdN35fElOuCeYy4jO7iPNVCfCuSAInsvhbFpJZkamht6ZoxhdmRrFA02ly8Yl4noGdF0~~oIZBxgXSWlR1xRiIA9GypoiIDf5v-R-2KBpRkI8N7B1jO402ETKu67jb779ZMK9crHqDJRe6z9xdzx4KxMFEYSNpYU4kX35e16mxsEIRTN8duGKIDTOjqzEyMdCA__&Key-Pair-Id=K3RDDB1TZ8BHT8"
          alt="monster image"
        />
      </div>
      <div className="w-1/2 px-10 flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-gray-900">
        <h1 className="font-bold uppercase font-mono text-3xl py-5">Fill the form</h1>
        <Formik
          initialValues={initialValues}
          validate={formValidate}
          onSubmit={submitHandler}
          className="px-20"
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className="w-full" onSubmit={handleSubmit}>
              <label className="flex flex-col py-5">
                firstName
                <Field
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onblur={handleBlur}
                  placeholder="enter your last name"
                  className="border-b-2 focus:outline-none bg-inherit"
                />
              </label>
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <label className="flex flex-col py-5">
                lastName
                <Field
                  name="lastName"
                  value={values.lastName}
                  className="border-b-2 focus:outline-none bg-inherit"
                  placeholder="enter your last name"
                  onChange={handleChange}
                  onblur={handleBlur}
                />
              </label>
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <label className="flex flex-col py-5">
                mobile
                <Field
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onblur={handleBlur}
                  type="text"
                  placeholder="enter your last name"
                  className="border-b-2 focus:outline-none bg-inherit"
                />
              </label>
              {errors.mobile && touched.mobile ? (
                <div>{errors.mobile}</div>
              ) : null}
              <label className="flex flex-col py-5">
                email
                <Field
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onblur={handleBlur}
                  className="border-b-2 focus:outline-none bg-inherit"
                  placeholder="enter your last name"
                />
              </label>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button className="px-10 py-1 my-5 border bg-gradient-to-br from-purple-300 via-cyan-200 to-white rounded-lg" type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
