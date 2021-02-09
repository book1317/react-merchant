import { get } from 'api/APIManager'

const baseURL = 'https://graph.facebook.com/v9.0/'

class FacebookAPI {
  getUserPageList = async (userID: string, accessToken: string) => {
    const params = `${baseURL}/${userID}/accounts?access_token=${accessToken}&width=100`
    const response = await get(params)
    return response.data
  }

  getUserPageImage = async (pageID: string) => {
    const params = `${baseURL}/${pageID}/picture?redirect=0&width=100`
    const response = await get(params)
    return response.data
  }

  getImageProfile = async (userID: string) => {
    const params = `${baseURL}/${userID}/picture?redirect=0&width=100`
    const response = await get(params)
    return response.data
  }
}

export default new FacebookAPI()
