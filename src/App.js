import React from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import Features from './components/features/Features';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Reviews from './components/reviews/Reviews';
import WhatTheySaid from './components/WhatTheySaid';
import Button from './components/Button';
import Simplify from './components/simplify/Simplify';
import Footer from './components/footer/Footer';


function App() {


const breakPoints = [
  {width: 500, itemsToShow: 1},
  {width: 768, itemsToShow: 2},
  {width: 1200, itemsToShow: 3}
]
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <WhatTheySaid />
      <Carousel breakPoints={breakPoints} showArrows={false}>
        <Reviews image='./images/avatar-anisha.png' client="Anisha Li" text=' "Manage has supercharged our teams workflow.
         The ability to maintain visibility 
         on larger milestones at all times keeps everyone motivated." '/>

        <Reviews image='./images/avatar-richard.png' client="Richard Watts" text="Manage allows us to provide structure and process. 
        It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"/>

         <Reviews image='./images/avatar-shanai.png' client="Shanai Gough" text=' "Their software allows us to track, manage and collaborate on our projects from anywhere.
          It keeps the whole team in-sync without being intrusive." '/>

         <Reviews image='./images/avatar-ali.png' client="Ali Bravo" text=' "We have been able to cancel so many other subscriptions since using Manage.
          There is no more cross-channel confusion and everyone is much more focused." '/>
      </Carousel>
      <Button />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
