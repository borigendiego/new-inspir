import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {
    TransitionGroup,
    Transition,
} from 'react-transition-group';
import { TimelineMax as Timeline, Power1 } from 'gsap';
//styles
import './App.css';
import './css/global-styles.scss';
//components
import Banner from './components/banner';
import Mission from './components/mission';
import WeAre from './components/weAre';
import OurServices from './components/ourServices';
import Performance from './components/performance';
import Contact from './components/contact';
import { SERVICES_DATA } from './components/servicesPage/ServicesItem/constants';
import ServicesItem from "./components/servicesPage/ServicesItem";

function App() {
    const getHomeTimeline = (node, delay) => {
        const timeline = new Timeline({ paused: true });
        const texts = node.querySelectorAll('h1 > div');

        timeline
            .from(node, 0, { display: 'none', autoAlpha: 0, delay })
            .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeIn }, 0.125);

        return timeline
    }

    const getDefaultTimeline = (node, delay) => {
        const timeline = new Timeline({ paused: true });
        const content = node.querySelector('.content');
        const contentInner = node.querySelector('.content--inner');

        timeline
            .from(node, 0.1, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
           // .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
            //.from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

        return timeline;
    }

    const play = (pathname, node, appears) => {
        const delay = appears ? 0 : 0.2
        let timeline

        if (pathname === '/')
            timeline = getHomeTimeline(node, delay)
        else
            timeline = getDefaultTimeline(node, delay)

        timeline.play()
    }

    return (
        <div className="App">
            <Router>
                <Route render={({ location }) => {
                    const { pathname, key } = location;

                    return (
                        <TransitionGroup component={null}>
                            <Transition
                                key={key}
                                appear={true}
                                onEnter={(node, appears) => play(pathname, node, appears)}
                                timeout={{enter: 750, exit: 0}}
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
                            </Transition>
                        </TransitionGroup>
                    )}
                }>
                </Route>
            </Router>
        </div>
  );
}

export default App;
