import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
    const { mylist, trends, originals} = useInitialState(API);

    return(
        <div>
            <Header />
            <Search />
            {
                trends.length > 0 && (
                    <Categories title="Tendencia">
                        <Carousel>
                            {
                                trends.map( 
                                    trend => {
                                        return (
                                            <CarouselItem key={trend.id} {...trend}/>
                                        )
                                    }
                                )
                            }
                                        
                        </Carousel>
                </Categories>
                )
            }
                        {
                originals.length > 0 && (
                    <Categories title="Originales">
                        <Carousel>
                            {
                                originals.map( 
                                    trend => {
                                        return (
                                            <CarouselItem key={trend.id} {...trend}/>
                                        )
                                    }
                                )
                            }
                                        
                        </Carousel>
                </Categories>
                )
            }

            <Footer />
        </div>
    );
}

export default App;