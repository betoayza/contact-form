import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: ""
};

//execute errors
const validationsForm = (form) => {
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  let errors={};

  if(!form.name.trim()){
    errors.name='Name field is required';
  }else if (!regexName.test(form.name.trim())){
    errors.name='Name only accepts words & blanks :(';
  }

  if(!form.email.trim()){
    errors.email='Email field is required';
  }else if (!regexEmail.test(form.email.trim())){
    errors.email='Email isn\'t correct :(';
  }

  if(!form.subject.trim()){
    errors.subject='Subject field is required';
  }

  if(!form.comments.trim()){
    errors.comments='Comments field is required';
  }else if (!regexComments.test(form.comments.trim())){
    errors.comments='Comments field shouldn\'t have more than 255 chars :(';
  }

  return errors;
};

export const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div id="form-div">
      <h2>Contact form:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email..."
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Subject..."
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        {errors.subject && <p>{errors.subject}</p>}
        
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Comentarios..."
          value={form.comments}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        ></textarea>

        {errors.comments && <p>{errors.comments}</p>}

        <input type="submit" value="Send!" />
      </form>
    </div>
  );
};
