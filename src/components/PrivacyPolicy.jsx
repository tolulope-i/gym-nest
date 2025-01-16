import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h2>
        <p className="text-gray-300">
          At GymNest, we are committed to protecting your privacy and ensuring your personal information is handled with care.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section 1 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">1. Information We Collect</h3>
          <p className="text-gray-300">
            We collect personal information that you provide to us when you sign up for our services, including your name, email address, phone number, and payment information. We also collect information about your fitness preferences and activity to enhance your experience at GymNest.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">2. How We Use Your Information</h3>
          <p className="text-gray-300">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Provide you with access to our services and facilities.</li>
            <li>Process payments and manage your membership.</li>
            <li>Customize your fitness programs and recommendations.</li>
            <li>Communicate updates, promotions, and special offers.</li>
            <li>Maintain the security of our platform and facilities.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">3. Sharing Your Information</h3>
          <p className="text-gray-300">
            GymNest does not sell or share your personal information with third parties for marketing purposes. However, we may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Trusted service providers that help us operate our platform and services.</li>
            <li>Authorities, if required by law or to protect the rights and safety of GymNest and its members.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">4. Your Privacy Rights</h3>
          <p className="text-gray-300">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing communications at any time.</li>
            <li>Request details about the information we collect and how it is used.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">5. Data Security</h3>
          <p className="text-gray-300">
            We use industry-standard security measures to protect your personal information. However, please note that no system is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">6. Updates to This Policy</h3>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">7. Contact Us</h3>
          <p className="text-gray-300">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-300">
            Email: <a href="mailto:support@gymnest.com" className="text-primary underline">support@gymnest.com</a>
          </p>
          <p className="text-gray-300">
            Phone: <a href="tel:+1234567890" className="text-primary underline">+1 (234) 567-890</a>
          </p>
          <p className="text-gray-300">
            Address: 123 Fitness Lane, Wellness City, CA 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
