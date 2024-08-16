import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header'; // Adjust the path as per your project structure
import AudienceReachComponent from './components/AudienceReachComponent';
import JoinCreators from './components/JoinCreators'; // Adjust the path as per your project structure
import PublisherComponent from './components/PublisherComponent'; // Adjust the path as per your project structure
import Advertisers from './components/Advertisers';
import Footer from './components/Footer';
import Login from './components/Login'; // Import the SignUp component
import PublisherPage from './components/PublisherPage';
import Account from './components/account'; // Import the Account component
import CategoryContainer from './components/CategoryContainer';
//import PopularContainer from './components/PopularContainer';
import Final from './components/final';
import Log from './components/log';
import CompanyInformationForm from './components/CompanyInformationForm';
import ContentInformationForm from './components/ContentInformationForm';
import SocialMediaProfilesForm from './components/SocialMediaProfilesForm';
import Fi from './components/Fi';
function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/log" element={<Log />} />
            <Route path="/company" element={<CompanyInformationForm />} />
            <Route path="/content" element={<ContentInformationForm />} />
            <Route path="/profile" element={<SocialMediaProfilesForm />} />
            <Route path="/pub" element={<PublisherPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/publisher" element={<CategoryContainer />} /> 
            <Route path="/final" element={<Final />} />
          <Route path ="/fi" element={<Fi />} />
            
                        <Route path="/" element={
              <>
                <Header />
                <PublisherComponent />
                <JoinCreators />
                <Advertisers />
        
                <AudienceReachComponent />
                
                <Footer />
              

              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
