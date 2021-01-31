export interface IFacebookAuthen {
  accessToken: string
  data_access_expiration_time: number
  email: string
  expiresIn: number
  graphDomain: string //facebook
  id: string
  name: string
  picture: {
    data: {
      height: number
      width: number
      is_silhouette: boolean
      url: string
    }
  }
  signedRequest: string
  userID: string
  url?: string
}

export interface IFacebookPageList {
  access_token: string
  category: string //"Electronics"
  id: string
  name: string
}

export interface IFacebookPageImage {
  url: string
}

export interface IFacebookStore {
  getUserPageList: (userID: string, accessToken: string) => void
  getUserPageImage: (pageID: string) => void
  getUserPageWithImageList: (userID: string, accessToken: string) => void

  getUserPageListJS: () => IFacebookAuthen[]
  getUserPageWithImageListJS: () => IFacebookAuthen[]
  getUserPageImageListJS: () => IFacebookAuthen[]
}
