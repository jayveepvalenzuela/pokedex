import bannerImg from '../media/bg-banner.webp';

function Banner() {
  const bannerStyles = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: 'center',
  }

  return (
    <div className='mb-12 h-96 bg-gray-100 bg-cover bg-no-repeat' style={bannerStyles}></div>
  );
}

export default Banner;
