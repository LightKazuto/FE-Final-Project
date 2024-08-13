"use client";
import LandingPage from '../../components/landing-page';
import Grid from '../../components/comingSoonMarket';
import PopularVeg from '../../components/popularVeg';
import PopularFruit from '../../components/popularFruitProduct';

function Home() {

    return (
        <div>
            <div>
                <LandingPage />
            </div>

            <div>
                <Grid />
            </div>

            <div>
                <PopularVeg />
            </div>

            <div>
                <PopularFruit />
            </div>
        </div>
    )
}

export default Home;