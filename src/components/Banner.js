import bannerImg from '../media/bg-banner.webp';

function Banner() {
  return <div className='mb-12 h-64 lg:h-80 bg-gray-100 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bannerImg})` }}></div>;
}

export default Banner;
