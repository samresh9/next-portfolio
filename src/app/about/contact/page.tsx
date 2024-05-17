import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Feel free to reach out! Whether you have a project idea, a question, or just want to connect. Drop me a message using the form below or shoot an email to definitelywebdev@yahoo.com. I look forward to hearing from you and exploring potential collaborations.',
    openGraph: {
      title: 'Contact Kaloyan Georgiev',
      description: 'Feel free to reach me out at definitelywebdev@yahoo.com',
      siteName: 'webdevkalo',
      url: 'https://webdevkalo.vercel.app/about/contact',
      type: 'profile',
      locale: 'en-US'
    }
};

const Contact = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>

      <div className="max-w-screen-xs prose prose-p:text-primary">
        <p>
        Get in touch anytime! Whether you have got a killer project idea, burning questions, or just want to connect.
        </p>
        <p>Drop me a line using the form below or hit me up via email.</p>
        <p>
        Excited to hear from you and explore some awesome collaborations!
        </p>
      </div>

      <div className="mb-4 font-semibold mt-10">
        <span className="font-bold mr-2" aria-label="Email address">
          Email:
        </span>
        <Link
          href="mailto:definitelywebdev@yahoo.com"
          className="text-pink-700 hover:text-primary-300 transition-all"
        >
         thapasamresh9@gmail.com
        </Link>
      </div>

      <div className="my-10" />

      <h2 className="text-2xl font-bold mb-4">Form launch in progress! Reach me directly via email for now. Can not wait to connect! </h2>
      {/* <Form /> */}
    </section>
  );
};

export default Contact;
