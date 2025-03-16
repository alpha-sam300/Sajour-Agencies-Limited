import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-500">Last updated: June 1, 2023</p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <p>
              Please read these terms of service ("terms", "terms of service")
              carefully before using the Sajour Agencies Limited website ("the
              service") operated by Sajour Agencies Limited ("us", "we", "our").
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Conditions of Use
            </h2>
            <p>
              By using this website, you certify that you have read and reviewed
              this Agreement and that you agree to comply with its terms. If you
              do not want to be bound by the terms of this Agreement, you are
              advised to leave the website accordingly. Sajour Agencies Limited
              only grants use and access of this website, its products, and its
              services to those who have accepted its terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Privacy Policy</h2>
            <p>
              Before you continue using our website, we advise you to read our
              privacy policy regarding our user data collection. It will help
              you better understand our practices.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. Intellectual Property
            </h2>
            <p>
              You agree that all materials, products, and services provided on
              this website are the property of Sajour Agencies Limited, its
              affiliates, directors, officers, employees, agents, suppliers, or
              licensors including all copyrights, trade secrets, trademarks,
              patents, and other intellectual property. You also agree that you
              will not reproduce or redistribute the Sajour Agencies Limited's
              intellectual property in any way, including electronic, digital,
              or new trademark registrations.
            </p>
            <p>
              You grant Sajour Agencies Limited a royalty-free and non-exclusive
              license to display, use, copy, transmit, and broadcast the content
              you upload and publish. For issues regarding intellectual property
              claims, you should contact the company in order to come to an
              agreement.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. User Accounts</h2>
            <p>
              As a user of this website, you may be asked to register with us
              and provide private information. You are responsible for ensuring
              the accuracy of this information, and you are responsible for
              maintaining the safety and security of your identifying
              information. You are also responsible for all activities that
              occur under your account or password.
            </p>
            <p>
              If you think there are any possible issues regarding the security
              of your account on the website, inform us immediately so we may
              address them accordingly.
            </p>
            <p>
              We reserve all rights to terminate accounts, edit or remove
              content and cancel orders at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Applicable Law</h2>
            <p>
              By visiting this website, you agree that the laws of Kenya,
              without regard to principles of conflict laws, will govern these
              terms of service, or any dispute of any sort that might come
              between Sajour Agencies Limited and you, or its business partners
              and associates.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Disputes</h2>
            <p>
              Any dispute related in any way to your visit to this website or to
              products you purchase from us shall be arbitrated by state or
              federal court in Kenya and you consent to exclusive jurisdiction
              and venue of such courts.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Indemnification</h2>
            <p>
              You agree to indemnify Sajour Agencies Limited and its affiliates
              and hold Sajour Agencies Limited harmless against legal claims and
              demands that may arise from your use or misuse of our services. We
              reserve the right to select our own legal counsel.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              8. Limitation on Liability
            </h2>
            <p>
              Sajour Agencies Limited is not liable for any damages that may
              occur to you as a result of your misuse of our website. Sajour
              Agencies Limited reserves the right to edit, modify, and change
              this Agreement at any time. We shall let our users know of these
              changes through electronic mail. This Agreement is an
              understanding between Sajour Agencies Limited and the user, and
              this supersedes and replaces all prior agreements regarding the
              use of this website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              9. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
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
