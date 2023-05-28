import React, { useCallback } from "react";
import { Box, TextField, useMediaQuery, Button } from "@mui/material";
import Header from "../../Components/Header";
import { useFormik } from "formik";
import * as yup from "yup";

const phoneRegEx =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Enter valid email")
    .required("This field is required"),
  contact: yup
    .string()
    .matches(phoneRegEx, "Enter a valid phone number")
    .required("This field is required"),
  address1: yup.string().required("This field is required"),
  address2: yup.string().required("This field is required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    },
    validationSchema: userSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New user profile" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Box
          display={"grid"}
          gap="30px"
          gridTemplateColumns={"repeat(4, minmax(0,1fr))"}
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {/* FIRST NAME */}
          <TextField
            variant="filled"
            type="text"
            id="firstName"
            name="firstName"
            label="First Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{
              gridColumn: "span 2",
            }}
          />
          {/* LAST NAME */}
          <TextField
            variant="filled"
            type="text"
            id="lastName"
            name="lastName"
            label="Last Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            sx={{
              gridColumn: "span 2",
            }}
          />
          {/* EMAIL */}
          <TextField
            variant="filled"
            type="email"
            id="email"
            name="email"
            label="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              gridColumn: "span 4",
            }}
          />
          {/* CONTACT NUMBER */}
          <TextField
            variant="filled"
            type="text"
            id="contact"
            name="contact"
            label="Contact number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contact}
            error={formik.touched.contact && Boolean(formik.errors.contact)}
            helperText={formik.touched.contact && formik.errors.contact}
            sx={{
              gridColumn: "span 4",
            }}
          />
          {/* ADDRESS LINE 1 */}
          <TextField
            variant="filled"
            type="text"
            id="address1"
            name="address1"
            label="Address line 1"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address1}
            error={formik.touched.address1 && Boolean(formik.errors.address1)}
            helperText={formik.touched.address1 && formik.errors.address1}
            sx={{
              gridColumn: "span 4",
            }}
          />
          {/* ADDRESS LINE 2 */}
          <TextField
            variant="filled"
            type="text"
            id="address2"
            name="address2"
            label="Address line 2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address2}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
            sx={{
              gridColumn: "span 4",
            }}
          />
        </Box>
        <Box display={"flex"} justifyContent={"end"} mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            CREATE NEW USER
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
