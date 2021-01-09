// @ts-ignore
// import config from "config";
import { createBrowserHistory  } from 'history'

export class History {
  getObject() {
    // return createBrowserHistory({ basename: config.prefixUrl });
    return createBrowserHistory({ basename: '/' })
  }

  replace(url: string) {
    const historyObj = createBrowserHistory({
      // basename: config.prefixUrl,
      forceRefresh: true,
    });
    historyObj.replace(url);
  }

  push(url: string) {
    const historyObj = createBrowserHistory({
      // basename: config.prefixUrl,
      basename: '/',
      forceRefresh: true,
    })
    historyObj.push(url)
  }
}

export const history = new History()
export default history.getObject()
