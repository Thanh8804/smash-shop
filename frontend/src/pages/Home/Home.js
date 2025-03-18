import './Home.css';
import Header from '../../components/Header/Header'
import { useNavigate} from 'react-router-dom';

function Home({ isAuthenticated, setIsAuthenticated }){
    return(
    <>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <div className="home-container">
            <p>Home</p>
        </div>
        
    </>
    );
}

export default Home;