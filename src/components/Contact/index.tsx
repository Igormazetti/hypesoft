import React from "react";

import { Container } from "./styles";
import ContactForm from "../ContactForm";
import ContactData from "../ContactData";

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <ContactForm />
      <ContactData />
    </Container>
  );
};

export default Contact;
