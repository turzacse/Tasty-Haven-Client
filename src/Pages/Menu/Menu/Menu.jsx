import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from '../../../hokes/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const img = "https://i.ibb.co/txhs69x/banner3.jpg"
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className='mb-10'>
            <Helmet>
                <title>TH | Menu </title>
            </Helmet>
            <Cover img={img} title="our menu"></Cover>

            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;