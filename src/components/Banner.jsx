import slider1 from '../assets/banner1.jpg';
import slider2 from '../assets/banner2.jpg';
import slider3 from '../assets/banner3.jpg';
import slider4 from '../assets/banner4.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full my-16 relative">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full h-[400px]" />
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center">
          <h2 className="text-4xl font-extrabold">Welcome to Craftopia</h2>
          <p className="text-lg">Discover the beauty of art and craft</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full h-[400px]" />
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center">
          <h2 className="text-4xl font-extrabold">Express Your Creativity</h2>
          <p className="text-lg">Find inspiration for your next masterpiece</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full h-[400px]" />
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-extrabold">Shop Our Collections</h2>
          <p className="text-lg">Browse through unique artworks and crafts</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full h-[400px]" />
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-extrabold">Join Our Community</h2>
          <p className="text-lg">Connect with fellow art enthusiasts</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
