import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form
      className="form"
      method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label
          htmlFor="name"
          className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          style={{ color: "grey" }}
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label
          htmlFor="lastName"
          className="form-label">
          lastName
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          style={{ color: "grey" }}
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label
          htmlFor="email"
          className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue=""
          style={{ color: "grey" }}
        />
      </div>
      <button
        type="submit"
        className="btn"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}>
        {isSubmitting ? "submitting..." : "submit"}
      </button>
    </Form>
  );
};
export default Newsletter;
