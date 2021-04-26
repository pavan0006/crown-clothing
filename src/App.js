import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom'
import ShopPage from './components/shop/shop.component';


const HatsPage = props => {
  console.log(props)
  return (<h1> HATS PAGE </h1 >)
}
// const TopicsList = props => {
//   console.log(props)
//   return (<h1> TopicsList</h1 >)
// }
// const TopicsDetail = props => {
//   console.log(props)
//   return (
//     <div>
//       <Link to='/topics'>Go Back</Link>
//       <button onClick={() => props.history.push('/topics')}>Go Back</button>
//       <h1> TopicsDetail</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>

      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
      {/* <Route exact path='/topics' component={TopicsList} />
      <Route exact path='/topics/:topicId' component={TopicsDetail} /> */}
      <Route exact path='/shop' component={ShopPage} />

    </div>
  );
}

export default App;
