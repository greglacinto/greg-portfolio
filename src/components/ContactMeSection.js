import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";


import {useFormik} from 'formik';
import * as Yup from 'yup';
import { VStack, Select, Heading, 
    FormControl, FormLabel, Input, 
    Box, Button, FormErrorMessage, Textarea } from "@chakra-ui/react";


const ContactMeSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();    

    const formik = useFormik({
        initialValues: {
          validateOnMount: true,
          firstName: '',
          email: '',
          type: 'Freelance project proposal',
          message: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            message: Yup.string()
              .required('Required')
              .min(25, 'Must be at least 25 characters')
        }),
        onSubmit: (values) => {
          console.log(values)
          submit("https://google.com", values);
        }
    });

    useEffect(() => {
      if(response) {
        onOpen(response.type, response.message);
        if(response.type === "success") {
          formik.resetForm();
        }
      }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

    return (
        <FullScreenSection
          isdarkbackground
          backgroundColor="#512DA8" 
          w="60%"
          py={16}
          alignItems="flex-start"
        >
            {/* <VStack > */}
                <Heading as="h1" id="contactme-section">Contact me</Heading>
                <Box  w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input 
                                  id="firstName"
                                  name="firstName"
                                  type="text"
                                  {...formik.getFieldProps('firstName')}
                                />
                                <FormErrorMessage>
                                    {formik.errors.firstName}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input 
                                  id="email"
                                  name="email"
                                  type="email"
                                  {...formik.getFieldProps('email')}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Type of Enquiry</FormLabel>
                                <Select 
                                  placeholder='Freelance project proposal' 
                                  id="type"
                                  name="type"
                                  {...formik.getFieldProps('type')}
                                >
                                    <option>Hire Me</option>
                                    <option>OpenSource contribution</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.message && formik.errors.message}>
                            <FormLabel htmlFor="message">Your Message</FormLabel>
                            <Textarea 
                              id="message"
                              name="message"
                              type="text"
                              height={200}
                              {...formik.getFieldProps('message')}
                            />
                            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                        </FormControl>
                        <Button 
                          type="submit" 
                          w="100%" 
                          colorScheme="purple"
                          disabled={!(formik.isValid && formik.dirty)}    
                        >
                            {isLoading? "Sending..." : "send"}
                        </Button>
                        </VStack>
                        
                    </form>
                </Box>
            {/* </VStack> */}

        </FullScreenSection>
    )
}

export default ContactMeSection;