import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

const img = "https://i.ibb.co/txhs69x/banner3.jpg"
const Menu = () => {
    return (
        <div className='mb-10'>
            <Helmet>
                <title>TH | Menu </title>
            </Helmet>
            <Cover img={img} title="our menu"></Cover>
        </div>
    );
};

export default Menu;