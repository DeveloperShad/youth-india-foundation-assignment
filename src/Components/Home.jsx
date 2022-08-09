
import Homes from "../Styles/Home.module.css"
import SearchBar from './SearchBar'

const Home = () => {
    return (
        <>
            <div className={Homes.HomeContainer}>
                <SearchBar></SearchBar>
                <br />
            </div>
        </>
    )
}
export default Home
