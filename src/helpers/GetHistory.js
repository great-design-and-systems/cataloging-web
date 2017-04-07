import createHistory from 'history/createBrowserHistory';

if (!window.$appHistory) {
  window.$appHistory = createHistory({
    basename: '/'
  });
}

const history = window.$appHistory;

export default history;