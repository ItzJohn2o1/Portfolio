import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you’d like to connect, send me a message below.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>

        {submitted && (
          <p className="success-message">Message submitted successfully!</p>
        )}
      </form>

      <div className="social-links">
        <h3>Find me online</h3>
        <a href="https://github.com/ItzJohn2o1" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/johnluis-morales-33442b28b/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:johnluismorales11@gmail.com">Email</a>
      </div>
    </section>
  );
}

export default Contact;