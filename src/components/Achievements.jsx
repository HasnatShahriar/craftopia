import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { Typewriter } from 'react-simple-typewriter';

const Achievements = () => {
  return (
    <div className="my-16 space-y-8 lg:mx-0 mx-10">
      <div className="bg-blue-100 rounded-xl py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Craftopia's Notable {''}
          <span style={{ color: 'blue', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Achievements', 'Upcoming Events']}
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
            <li className="text-gray-700">
              <strong>Expansion into International Markets:</strong> Craftopia has
              successfully expanded its presence into international markets,
              reaching art enthusiasts across the globe and fostering cultural
              exchange through handmade goods.
            </li>
            <li className="text-gray-700">
              <strong>Collaborations with Renowned Artists:</strong> Craftopia has
              collaborated with renowned artists and designers, creating exclusive
              collections that blend artistic vision with skilled craftsmanship.
            </li>
            <li className="text-gray-700">
              <strong>Recognition for Sustainable Practices:</strong> We have been
              recognized for our commitment to sustainable practices, using
              eco-friendly materials and promoting ethical production methods.
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            These achievements reflect our ongoing commitment to excellence,
            innovation, and our mission to create a thriving community of artists
            and art enthusiasts.
          </p>
        </div>
        {/* Upcoming Events Section */}
        <div className="bg-orange-400 rounded-3xl py-12 px-4 sm:px-6 lg:px-8 mt-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Upcoming Events{''}
              <span style={{ color: 'white' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['_____', '_____',]}
                  loop={true}
                  cursor
                  cursorStyle=''
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Stay tuned for exciting upcoming events and exhibitions hosted by Craftopia! Join us to
              celebrate art, creativity, and the talented artisans in our community.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Craftopia Spring Showcase</h3>
                <p className="text-gray-700 mb-4">Date: May 15-17, 2024</p>
                <p className="text-gray-700 mb-4">Location: Craftopia Gallery, 123 Main Street</p>
                <p className="text-gray-700">Join us for our annual Spring Showcase, featuring a curated selection of handmade crafts, art, and jewelry. Meet the artisans, enjoy live demonstrations, and find unique treasures to add to your collection!</p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Artisan Market at Craftopia</h3>
                <p className="text-gray-700 mb-4">Date: June 22-24, 2024</p>
                <p className="text-gray-700 mb-4">Location: Craftopia Plaza, 456 Oak Avenue</p>
                <p className="text-gray-700">Discover the finest handmade goods from local artisans at our Artisan Market! Browse a diverse array of crafts, textiles, pottery, and more. Support small businesses and find one-of-a-kind treasures for yourself or a loved one.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              Check back regularly for updates on our upcoming events calendar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
