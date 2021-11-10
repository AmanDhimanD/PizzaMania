import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Products';
import Navigation from './components/Navigation';


const App = () => {
    return (
        // Blank tag is figments
        <>
            <Router>
                <Navigation /> {/* Component*/}
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/product" component={Product}></Route>

                </Switch>
            </Router>
        </>
    )
}
export default App;