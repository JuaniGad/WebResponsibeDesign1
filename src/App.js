import React from 'react';
import styles from './style';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Stats from './components/Stats'
import Business from './components/Business'
import CardDeal from './components/CardDeal'  
import Testimonials from './components/Testimonials'
import Client from './components/Client'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Billing from './components/Billing'

function App() {

  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
           <NavBar />
          </div>
        </div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>    
      </div>
    </div>

  );
}

export default App;
