import React from 'react';
//Components
import Banner from '../components/banner';
import Contact from '../components/contact';
import Mission from '../components/mission';
import WeAre from '../components/weAre';
import OurServices from '../components/ourServices';
import Performance from '../components/performance';

function App() {
    return (
        <div className='App'>
            <Banner />
            <Mission />
            <WeAre />
            <OurServices />
            <Performance />
            <Contact />
        </div>
    );
}

export default App;
