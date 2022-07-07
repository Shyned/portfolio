import React, { useState } from "react";
import { useRef } from "react";
import { Stack, Alert } from "@mantine/core";
import { TiWarningOutline } from "react-icons/ti";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const subjectRef = useRef();
  const formRef = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    setHasError(false);
    setLoading(false);
    emailjs
      .sendForm(
        "service_4ke70y2",
        "template_cfevsg4",
        formRef.current,
        "5TYby_Rp3QiKksHEJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
        },
        (error) => {
          setError(error.text);
          setHasError(true);
        }
      );
  };

  return (
    <div>
      {hasError === true && (
        <Alert
          icon={<TiWarningOutline TiWarning size={16} />}
          title="Bummer!"
          color="red"
          radius="lg"
          variant="filled"
        >
          {error}
        </Alert>
      )}
      <form ref={formRef} onSubmit={handlesubmit}>
        <Stack>
          <label>Name</label>
          <input type="text" name="sender" placeholder="Name" />
          <label>Message</label>
          <input type="text" name="message" placeholder="Message" />
          <button typeof="submit">Send</button>
        </Stack>
      </form>
    </div>
  );
}
