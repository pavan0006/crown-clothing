import React from 'react'
import './App.css';
import HomePage from './pages/Homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom'
import ShopPage from './components/shop/shop.component';
import Header from './header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


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

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          {/* <Route exact path='/topics' component={TopicsList} />
        <Route exact path='/topics/:topicId' component={TopicsDetail} /> */}
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
