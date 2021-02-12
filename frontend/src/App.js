import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
// import OldHeader from './components/OldHeader';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CalendarScreen from './screens/CalendarScreen';
import TeamScreen from './screens/TeamScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ProfileScreen from './screens/ProfileScreen';
// import UserListScreen from './screens/UserListScreen';
// import UserEditScreen from './screens/UserEditScreen';
const App = () => {
  return (
    <Router>
      <div className='bg-gray-100 min-h-screen flex flex-col'>
        <Header />
        <Route path='/calendar' component={CalendarScreen} />
        <Route path='/team' component={TeamScreen} />
        <Route path='/projects' component={ProjectsScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/' component={HomeScreen} exact />
        <Footer />
      </div>
      <Route path='/profile' component={ProfileScreen} />
      {/* 
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
      */}
    </Router>
  );
};
//stricto
export default App;
