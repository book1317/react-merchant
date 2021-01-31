import { observable, toJS } from 'mobx'
import FacebookAPI from 'api/FacebookAPI'
import {
  IFacebookPageList,
  IFacebookPageImage,
  IFacebookAuthen,
} from 'store/FacebookStore.d'

class FacebookStore {
  @observable facebookAuthen: IFacebookAuthen
  @observable facebookPageList: IFacebookPageList[]
  @observable facebookPageImage: IFacebookPageImage

  constructor() {
    this.facebookPageList = []
    this.facebookPageImage = {
      url: '',
    }
    this.facebookAuthen = this.initFacebookAuthen()
  }

  initFacebookAuthen = () => {
    return {
      accessToken: '',
      data_access_expiration_time: 0,
      email: '',
      expiresIn: 0,
      graphDomain: '',
      id: '',
      name: '',
      picture: {
        data: {
          height: 0,
          width: 0,
          is_silhouette: false,
          url: '',
        },
      },
      signedRequest: '',
      userID: '',
      url: '',
    }
  }

  setFacebookAuthen = (facebookAuthen: IFacebookAuthen) => {
    this.facebookAuthen = facebookAuthen
  }

  getFacebookAuthenJS = () => {
    return toJS(this.facebookAuthen)
  }

  getUserPageList = async (userID: string, accessToken: string) => {
    const response = await FacebookAPI.getUserPageList(userID, accessToken)
    this.facebookPageList = response || []
  }

  getUserPageWithImageList = async (userID: string, accessToken: string) => {
    const response = await FacebookAPI.getUserPageList(userID, accessToken)
    this.facebookPageList = response || []

    if (this.facebookPageList.length > 0) {
      const data = await Promise.all(
        this.facebookPageList.map(async (page) => {
          const response = await FacebookAPI.getUserPageImage(page.id)
          return { url: response.url || '', ...page }
        })
      )
      this.facebookPageList = data
    }
  }

  getUserPageImage = async (pageID: string) => {
    const response = await FacebookAPI.getUserPageImage(pageID)
    this.facebookPageImage = response || []
  }

  getUserPageWithImageListJS = () => {
    return toJS(this.facebookPageList)
  }
}

export default new FacebookStore()
