import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2> 1.Difference between authorization and authentication?</h2>
      <p> Answer: Key Differences Between Authentication and Authorization:</p>
      <ul>
        <li>
          The Authentication is used to verify the user's identity in order to
          permit access to the system. On the other hand, the authorization
          determines, who should be able to access what.
        </li>
        <li>
          In the authentication process, the user credentials are verified,
          whereas in authorization process the authenticated user's access list
          is validated.
          <li>
            The former process is authentication, then authorization occurs.
          </li>
          <li>
            Let's take the example of online banking services. When a user wants
            to access the service, the user's identity is determined to ensure
            that the person is the righteous person who he/she claim to be. Once
            the user is identified the authentication enables the authorization
            which determines what the user is allowed to do. Here the user is
            authorized to access the his/her account online after the
            authentication.
          </li>
        </li>
      </ul>
      <br />
      <h2>
        2.Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <p>
        With Firebase, it's pretty simple to connect and use built-in
        third-party authentication providers, including Google, Facebook,
        Twitter, among others. And if you want to use a pre-built authentication
        UI, you have it at your disposal as well.
      </p>
      <br />
      <h2>
        3.What other services does firebase provide other than authentication
      </h2>
      <p>
        Build deep integrations with other Firebase services Firebase Hosting
        works out-of-the-box with Firebase services, including Cloud Functions,
        Authentication, Realtime Database, Cloud Firestore, and Cloud Messaging.
        You can build powerful microservices and web apps using these
        complementary Firebase services.
      </p>
    </div>
  );
};

export default Blogs;
