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
            <div className={'under-construction'}>
                <div className={'content-wrapper'}>
                    <div className={'text-wrapper'}>
                        <img src={'/assets/under_c_logo.png'} alt={'Under construction'} style={{marginBottom: 30}} />
                        <h5 style={{marginBottom: 10}}>Website is</h5>
                        <h4 style={{marginBottom: 10}}>UNDER CONSTRUCTION</h4>
                        <p style={{marginBottom: 20}}>We are renewing ourselves. We will be back soon!</p>
                        <h6>
                            <a href={'mailto:bregnier@inspirperformance.com'}>
                                bregnier@inspirperformance.com
                            </a>
                        </h6>
                    </div>
                    <img className={'illustration'} src={'/assets/under_c_illustration.png'} alt={'Under construction'} />
                </div>
            </div>
        </div>
    );
}

export default App;
