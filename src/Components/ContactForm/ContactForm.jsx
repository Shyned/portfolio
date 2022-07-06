import React from "react";
import axios from "axios";
import { useRef } from "react";
import { Stack } from "@mantine/core";

export default function ContactForm() {
  const emailRef = useRef();
  const subjectRef = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    const axios = require("axios");

    const options = {
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.,
        "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      },
      data: '{"personalizations":[{"to":[{"email":"eyedolarts@gmail.com"}],"subject":"Hello, World!"}],"from":{"email":"issiahmckeil2@gmail.com"},"content":[{"type":"text/plain","value":"Hello, World!"}]}',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        document.getElementById("contact-form").reset();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={handlesubmit} id="contact-form">
        {" "}
        <Stack
          spacing="xl"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            height: 300,
          })}
        >
          <input ref={emailRef} type="text" placeholder="EMAIL ..."></input>

          <input ref={subjectRef} type="text" placeholder="Subject"></input>
          <button type="submit ">Send</button>
        </Stack>
      </form>
    </div>
  );
}
