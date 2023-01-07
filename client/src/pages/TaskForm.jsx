import React, { useContext, useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/task.api";

const TaskForm = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            await createTaskRequest(values);
            actions.resetForm();
          } catch (err) {
            console.log(err.message);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Task's Title"
                onChange={handleChange}
                value={values.title}
              />
              <label>Description</label>
              <textarea
                name="description"
                rows="3"
                placeholder="Write a description"
                onChange={handleChange}
                value={values.description}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TaskForm;
