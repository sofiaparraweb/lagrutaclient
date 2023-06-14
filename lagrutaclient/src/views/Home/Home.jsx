import NavBar from "../../components/NavBar/NavBar";
import News from "../Noticias/News";
import Footer from "../../components/Footer";

const Home = () => {
    
        return (
            <div>
                <NavBar/>
                <div>
                    <div>
                        <News />
                    </div>
                </div>
                <Footer/>
            </div>
        );
}

export default Home; 