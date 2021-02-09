import { observable, toJS } from 'mobx'
import FacebookAPI from 'api/FacebookAPI'
import {
  IFacebookLoginPageList,
  IFacebookLoginPageImage,
  IFacebookAuthen,
} from 'store/FacebookStore.d'

class FacebookStore {
  @observable facebookAuthen: IFacebookAuthen
  @observable FacebookLoginPageList: IFacebookLoginPageList[]
  @observable FacebookLoginPageImage: IFacebookLoginPageImage
  @observable profileImage: string

  constructor() {
    this.FacebookLoginPageList = []
    this.FacebookLoginPageImage = {
      url: '',
    }
    this.facebookAuthen = this.initFacebookAuthen()
    this.profileImage = ''
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

  getImageProfile = async (UserID: string) => {
    const response = await FacebookAPI.getImageProfile(UserID)
    this.facebookAuthen.picture.data = response
    this.profileImage = response
  }

  getFacebookAuthenJS = () => {
    return toJS(this.facebookAuthen)
  }

  getUserPageList = async (userID: string, accessToken: string) => {
    const response = await FacebookAPI.getUserPageList(userID, accessToken)
    this.FacebookLoginPageList = response || []
  }

  getUserPageWithImageList = async (userID: string, accessToken: string) => {
    const response = await FacebookAPI.getUserPageList(userID, accessToken)
    this.FacebookLoginPageList = response || []

    if (this.FacebookLoginPageList.length > 0) {
      const data = await Promise.all(
        this.FacebookLoginPageList.map(async (page) => {
          const response = await FacebookAPI.getUserPageImage(page.id)
          return { url: response.url || '', ...page }
        })
      )
      this.FacebookLoginPageList = data
    }
  }

  getUserPageImage = async (pageID: string) => {
    const response = await FacebookAPI.getUserPageImage(pageID)
    this.FacebookLoginPageImage = response || []
  }

  getUserPageWithImageListJS = () => {
    return toJS(this.FacebookLoginPageList)
  }
}

export default new FacebookStore()
