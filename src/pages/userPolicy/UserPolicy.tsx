import style from "./userPolicy.module.scss";

const UserPolicy: React.FC = () => {
  return (
    <section className={style.container}>
      <h1 className={style.title}>AI Generated User Policy</h1>
      <h2>Effective Date: April 03, 2025</h2>
      <div className={style.content}>
        <p>
          Welcome to Mustage To Do! We’re committed to keeping things simple, including how we
          handle your information. This User Policy explains what data we collect, why we collect
          it, and how we use it. Spoiler: it’s not much
        </p>
        <h3>1. What We Collect</h3>
        <p>
          We only collect your email address when you sign up for [To-Do App Name]. That’s it! No
          extra personal details, no tracking, no nonsense.
        </p>
        <h3>2. Why We Collect It</h3>
        <p>We use your email address for the following purposes:</p>
        <ul>
          <li>To create and manage your account.</li>
          <li>
            To send you important updates about your account (e.g., password resets or service
            notifications).
          </li>
          <li>That’s all. We don’t spam you or sell your email to anyone.</li>
        </ul>
        <h3>3. What We Don’t Collect</h3>
        <p>
          We don’t gather any other data about you. No names, no locations, no browsing habits, and
          definitely no sneaky tracking. Your to-do lists are yours alone—we don’t access or store
          their content.
        </p>
        <h3>4. How We Protect Your Email</h3>
        <p>
          We take your privacy seriously. Your email address is stored securely using
          industry-standard encryption and protection measures. We won’t share it with third parties
          unless required by law (e.g., a court order).
        </p>
        <h3>5. Third Parties</h3>
        <p>
          We may use trusted service providers (like email or hosting services) to run the app, but
          they only process your email as needed to help us deliver the service. They’re bound by
          strict agreements to keep it confidential.
        </p>
        <h3>6. Cookies and Tracking</h3>
        <p>
          We don’t use cookies, analytics, or any tracking tools. What you do in the app stays with
          you.
        </p>
        <h3>7. Changes to This Policy</h3>
        <p>
          If we ever need to update this policy, we’ll notify you via email before the changes take
          effect. Check back here anytime to see the latest version.
        </p>
        <h3>8. Contact Us</h3>
        <p>Got questions? Reach out to us at [support email]. We’re happy to help!</p>
      </div>
    </section>
  );
};

export default UserPolicy;
