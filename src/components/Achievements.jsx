import { Typewriter } from 'react-simple-typewriter';

const Achievements = () => {
  return (
    <div className="my-16 space-y-4 lg:mx-0 mx-10">
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Craftopia's Notable {''}
          <span style={{ color: 'blue', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Achievements', 'Accomplishments', 'Successes', 'Milestones']}
              loop={true}
              cursor
              cursorStyle=''
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Over the years, Craftopia has achieved numerous milestones and
            received recognition for our dedication to promoting handmade
            craftsmanship and supporting independent artists. Here are some of our
            notable achievements:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="text-gray-700">
              <strong>Featured in Artisan Magazine:</strong> Craftopia was
              highlighted in the prestigious Artisan Magazine for our commitment to
              showcasing exceptional handmade art and craft items.
            </li>
            <li className="text-gray-700">
              <strong>Winner of the Handmade Excellence Award:</strong> We are
              honored to have been awarded the Handmade Excellence Award for our
              outstanding contribution to the handmade community and our support of
              independent artisans.
            </li>
            <li className="text-gray-700">
              <strong>100,000 Satisfied Customers:</strong> Craftopia has proudly
              served over 100,000 satisfied customers worldwide, providing them
              with unique and memorable handmade products.
            </li>
            <li className="text-gray-700">
              <strong>Community Outreach Programs:</strong> We have initiated
              several community outreach programs, partnering with local artisans
              and organizations to promote creativity and empower artisans in
              underserved communities.
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            These achievements reflect our ongoing commitment to excellence,
            innovation, and our mission to create a thriving community of artists
            and art enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;