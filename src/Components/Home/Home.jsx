import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>E-hospital | Home</title>
            </Helmet>
            <h1 className='text-theme_color'>this is home</h1>
        </div>
    );
};

export default Home;