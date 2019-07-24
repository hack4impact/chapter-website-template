import ReactGA from 'react-ga';

const initializeGA = () => {
    ReactGA.initialize('UA-143288182-1');
}

const logPage = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const logEvent = (name, action) => {
    ReactGA.event({
        category: name,
        action: action
    });
}

export { initializeGA, logPage, logEvent }