import Blog from '../Blogs/Blog';
import Faq from '../FAQS/Faq';
import Features from '../Features/Features';

const Home = () => {
  return (
    <div className='mx-4 md:mx-12 lg:mx-40'>
      <Blog></Blog>
      <Features></Features>
      <Faq></Faq>
    </div>
  );
};

export default Home;
