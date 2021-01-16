import { createBrowserHistory  } from 'history'

export class History {
  getObject() {
    return createBrowserHistory({ basename: '/omise-v2/' })
  }

  replace(url: string) {
    const historyObj = createBrowserHistory({
      forceRefresh: true,
    });
    historyObj.replace(url);
  }

  push(url: string) {
    const historyObj = createBrowserHistory({
      forceRefresh: true,
    })
    historyObj.push(url)
  }
}

export const history = new History()
export default history.getObject()
