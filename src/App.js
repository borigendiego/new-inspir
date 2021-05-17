import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//styles
import './App.scss';
import './css/global-styles.scss';
//components
import Banner from './components/banner';
import Mission from './components/mission';
import WeAre from './components/weAre';
import OurServices from './components/ourServices';
import Performance from './components/performance';
import Contact from './components/contact';
import { SERVICES_DATA } from './components/servicesPage/ServicesItem/constants';
import ServicesItem from './components/servicesPage/ServicesItem';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

function App() {
    return (
        <div className="App">
            <Router>
                <Route render={({ location }) => {

                    return (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={450}
                                classNames="fade"
                            >
                                <Switch location={location}>
                                    <Route exact path={'/'}>
                                        <Banner />
                                        <Mission />
                                        <WeAre />
                                        <OurServices />
                                        <Performance />
                                        <Contact />
                                    </Route>
                                    {
                                        SERVICES_DATA.map(service =>
                                            <Route path={service.path} key={service.title}>
                                                <div className={'our-services-page'}>
                                                    <div className={'transition-overlay'} />
                                                    <OurServices />
                                                    <ServicesItem
                                                        title={service.title}
                                                        paragraph1={service.paragraph1}
                                                        paragraph2={service.paragraph2}
                                                        paragraph3={service.paragraph3}
                                                        paragraph4={service.paragraph4}
                                                        paragraph5={service.paragraph5}
                                                        paragraph6={service.paragraph6}
                                                        image={service.image}
                                                    />
                                                </div>
                                            </Route>
                                        )
                                    }
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )
                }} />
            </Router>
        </div>
  );
}

export default App;
