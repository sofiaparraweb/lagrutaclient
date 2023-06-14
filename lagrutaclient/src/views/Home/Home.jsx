import NavBar from "../../components/NavBar/NavBar";
import News from "../Noticias/News";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.css";

const Home = () => {
    
        return (
            <div>
                <NavBar/>
                <div className={style.Menu}>
                    holisss estamos en el Home
                    <div>
                        <News />
                    </div>
                </div>
                <Footer/>
            </div>
        );
}

export default Home; 