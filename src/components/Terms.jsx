import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Terms and Conditions</h2>
        <p className="text-gray-300">
          Welcome to GymNest! By accessing or using our services, you agree to be bound by the following terms and conditions. Please read them carefully.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section 1 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">1. Membership Terms</h3>
          <p className="text-gray-300">
            - All memberships are non-transferable and non-refundable.<br />
            - Members must be at least 18 years old or have parental consent.<br />
            - Membership fees must be paid on time to maintain access to the facility and services.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">2. Use of Facilities</h3>
          <p className="text-gray-300">
            - Members must follow all posted rules and guidelines when using GymNest facilities.<br />
            - Proper gym attire, including clean athletic shoes, is required.<br />
            - Equipment must be wiped down after use to maintain hygiene.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">3. Class Bookings and Cancellations</h3>
          <p className="text-gray-300">
            - Class bookings must be made in advance through our website or app.<br />
            - Cancellations must be made at least 24 hours before the scheduled class time to avoid a cancellation fee.<br />
            - GymNest reserves the right to reschedule or cancel classes due to unforeseen circumstances.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">4. Code of Conduct</h3>
          <p className="text-gray-300">
            - Respect fellow members, staff, and the facility.<br />
            - Abusive language, harassment, or unsafe behavior will not be tolerated.<br />
            - GymNest reserves the right to terminate memberships for violations of the code of conduct.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">5. Liability Waiver</h3>
          <p className="text-gray-300">
            - Members participate in activities at their own risk.<br />
            - GymNest is not responsible for injuries, accidents, or loss of personal belongings.<br />
            - Members must consult with a physician before beginning any fitness program.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">6. Privacy and Data Protection</h3>
          <p className="text-gray-300">
            - GymNest values your privacy and handles your personal information in accordance with our <a href="/privacy" className="text-primary underline">Privacy Policy</a>.<br />
            - Your data will not be shared with third parties without your consent, except as required by law.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">7. Changes to Terms</h3>
          <p className="text-gray-300">
            - GymNest reserves the right to update these terms and conditions at any time.<br />
            - Members will be notified of significant changes via email or our website.<br />
            - Continued use of GymNest services constitutes acceptance of the updated terms.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">8. Contact Us</h3>
          <p className="text-gray-300">
            If you have any questions or concerns regarding these terms, please contact us:
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

export default Terms;
