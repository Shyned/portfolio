import React from "react";
export default function Contact(params) {
  return (
    <section id="contact-section">
      <h1>contact</h1>
    </section>
  );
}
// const axios = require("axios");

// const options = {
//   method: "POST",
//   url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": ,
//     "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
//   },
//   data: '{"personalizations":[{"to":[{"email":"issiahmckeil2@gmail.com"}],"subject":"Test api"}],"from":{"email":"from_eyedolarts@gmail.com"},"content":[{"type":"text/plain","value":"Hello, World!"}]}',
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
