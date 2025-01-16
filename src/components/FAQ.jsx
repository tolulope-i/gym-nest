import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your operating hours?',
      answer:
        'We are open 24/7 to accommodate all schedules. Whether you’re an early riser or prefer late-night workouts, GymNest is always ready for you.',
    },
    {
      question: 'Do I need to book classes in advance?',
      answer:
        'Yes, we recommend booking your classes in advance to secure your spot, especially for high-demand sessions like Yoga and HIIT.',
    },
    {
      question: 'What membership plans do you offer?',
      answer:
        'We offer flexible plans, including monthly, quarterly, and annual memberships. Additionally, we have student and family discounts available.',
    },
    {
      question: 'Are personal trainers available?',
      answer:
        'Absolutely! Our certified personal trainers are available for one-on-one sessions to help you achieve your fitness goals.',
    },
    {
      question: 'What amenities are included with membership?',
      answer:
        'All memberships include access to state-of-the-art equipment, group classes, locker rooms, and free Wi-Fi. Premium memberships also include sauna and massage therapy access.',
    },
    {
      question: 'Do you offer trial sessions?',
      answer:
        'Yes, we offer a free one-day trial for new members to experience GymNest before committing to a membership.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-300">
          Got questions? We’ve got answers! If you can’t find what you’re looking for, feel free to contact us directly.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-gray-800 transition duration-800"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-primary">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-400 transition duration-800">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
