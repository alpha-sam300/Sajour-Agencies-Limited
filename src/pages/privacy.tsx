import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: June 1, 2023</p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <p>
              At Sajour Agencies Limited, we respect your privacy and are
              committed to protecting your personal data. This privacy policy
              will inform you about how we look after your personal data when
              you visit our website and tell you about your privacy rights and
              how the law protects you.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Important Information
            </h2>
            <p>
              This privacy policy aims to give you information on how Sajour
              Agencies Limited collects and processes your personal data through
              your use of this website, including any data you may provide
              through this website when you sign up for our newsletter, request
              a quote, or contact us.
            </p>
            <p>
              It is important that you read this privacy policy together with
              any other privacy policy or fair processing notice we may provide
              on specific occasions when we are collecting or processing
              personal data about you so that you are fully aware of how and why
              we are using your data.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. The Data We Collect About You
            </h2>
            <p>
              Personal data, or personal information, means any information
              about an individual from which that person can be identified. It
              does not include data where the identity has been removed
              (anonymous data).
            </p>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li>
                <strong>Identity Data</strong> includes first name, last name,
                username or similar identifier, title.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery
                address, email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform, and other technology on the
                devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you
                use our website, products and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> includes your
                preferences in receiving marketing from us and our third parties
                and your communication preferences.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. How We Use Your Personal Data
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p>
              Generally, we do not rely on consent as a legal basis for
              processing your personal data although we will get your consent
              before sending third party direct marketing communications to you
              via email or text message. You have the right to withdraw consent
              to marketing at any time by contacting us.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions and they are subject to a duty of confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected
              personal data breach and will notify you and any applicable
              regulator of a breach where we are legally required to do so.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              5. Your Legal Rights
            </h2>
            <p>
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data. These include the right
              to:
            </p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p>
              If you wish to exercise any of the rights set out above, please
              contact us at info@sajouragencies.com.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Details</h2>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Sajour Agencies Limited</strong>
              <br />
              123 Construction Way
              <br />
              Building Heights, Nairobi
              <br />
              Kenya
              <br />
              Email: info@sajouragencies.com
              <br />
              Phone: +254 123 456 789
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
