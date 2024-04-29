import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
  return (
    <div className="my-16 space-y-4 lg:mx-0 mx-10">
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 data-aos="zoom-in" data-aos-duration="500" className="text-3xl font-bold text-gray-800 mb-6">Craftopia</h2>
          <p className="text-lg text-gray-700 mb-6"> Welcome to Craftopia, your ultimate destination for unique and
            handcrafted art and craft items. We are dedicated to showcasing the
            creativity and talent of artisans from around the world, providing you
            with a curated collection of exquisite pieces to enhance your home or
            gift to your loved ones.</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">  At Craftopia, our mission is to celebrate craftsmanship and creativity
            while supporting independent artists and makers. We strive to connect
            artisans with discerning customers who appreciate the beauty and
            individuality of handmade goods, fostering a community of artisans and
            art lovers alike.</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
          <ul className="list-disc list-inside mb-6">
            <li className="text-gray-700">
              <strong>Quality:</strong> We are committed to offering high-quality,
              meticulously crafted items that reflect the skill and dedication of
              our artisans.
            </li>
            <li className="text-gray-700">
              <strong>Authenticity:</strong> We believe in the authenticity and
              uniqueness of handmade products, each telling its own story and
              carrying the artist's personal touch.
            </li>
            <li className="text-gray-700">
              <strong>Community:</strong> We value community and collaboration,
              fostering connections between artisans, customers, and supporters of
              the handmade movement.
            </li>
            <li className="text-gray-700">
              <strong>Sustainability:</strong> We prioritize sustainable practices
              and environmentally friendly materials, promoting responsible
              consumption and mindful living.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li data-aos="zoom-in" data-aos-duration="1000" className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-800"><strong>Abu Hasnat Shahriar - Founder & CEO</strong></p>
              <p className="text-gray-700"> With a passion for art and a vision for promoting handmade
                craftsmanship,Hasnat Craftopia to provide a platform for
                artisans to showcase their talents.</p>
            </li>
            <li data-aos="zoom-in" data-aos-duration="1000" className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-800"><strong>Abdullah Al Sabit - Senior Realtor</strong></p>
              <p className="text-gray-700">Sabit brings a wealth of market knowledge and negotiation skills to every transaction, ensuring her clients get the best possible results.</p>
            </li>
            <li data-aos="zoom-in" data-aos-duration="1000" className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-800"><strong>Jahidul Islam - Marketing Manager</strong></p>
              <p className="text-gray-700">Jahidul is dedicated to providing exceptional customer service,
                assisting customers with inquiries, orders, and ensuring a seamless
                shopping experience at Craftopia.</p>
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-800">"Working with Craftopia was a fantastic experience. Their team went above and beyond to help us find the perfect Paintings. We couldn't be happier with the outcome!"</p>
              <p className="text-gray-700 font-semibold">- Mamun Islam, Happy Homeowners</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-800">"Craftopia made selling our house a breeze. Their expertise and attention to detail were evident every step of the way. We highly recommend them to anyone looking to buy or sell property."</p>
              <p className="text-gray-700 font-semibold">- Mahfuzur Rahman, Satisfied Sellers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;