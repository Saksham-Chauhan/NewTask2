import Top from './Top'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap'
// C:\Users\Saksham\Desktop\Figma\figmatask\node_modules\bootstrap\dist\js\bootstrap.js
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Header from './Header';
import Products from './Products';
import Services from './Services';
import Portfolio from './Portfolio';
import Developer from './Developer';
import Discuss from './Discuss';
import Footer from './Footer';

function App() {
  return (
    <>
        <Top/>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/Products' component={Products}/>
          <Route exact path='/About' component={Developer}/>
          <Route exact path='/Services' component={Services} />
          <Route exact path='/Portfolio' component={Portfolio}/>
        </Switch>
        <Discuss/>
        <Footer/>
    </>
  );
}

export default App;
