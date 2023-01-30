import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailInput from "./EmailInput";

const url =
  "https://gmail.us21.list-manage.com/subscribe/post?u=70e9d1f3c005ec80e670d1031&amp;id=94a9096abf&amp;f_id=00b5e4e1f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

// use the render prop and your custom form
export const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {/* <EmailInput
          placeholder="Your Email"
          btn="Sign Up"
          onSubmitted={(formData) => subscribe(formData)}
        /> */}
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);
