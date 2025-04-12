import Blog from '../Blogs/Blog';
import Faq from '../FAQS/Faq';
import Features from '../Features/Features';
import ParallaxBanner from '../Hero/ParallaxBanner';
import TechBanner from '../Hero/TechBanner';
import Partners from '../Partners/Partners';

const Home = () => {
  return (
    <div>
      <ParallaxBanner></ParallaxBanner>
      <div className='mx-4 md:mx-12 lg:mx-40'>
        <Blog></Blog>
        <Features></Features>
        <Faq></Faq>
        <TechBanner></TechBanner>
        {/* <Partners></Partners> */}
      </div>
    </div>
  );
};

export default Home;
