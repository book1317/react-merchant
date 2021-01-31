import { get } from 'api/APIManager'

class FacebookAPI {
  getUserPageList = async (userID: string, accessToken: string) => {
    const params = `https://graph.facebook.com/${userID}/accounts?access_token=${accessToken}`
    const response = await get(params)
    return response.data
  }

  getUserPageImage = async (pageID: string) => {
    const params = `https://graph.facebook.com/v9.0/${pageID}/picture?redirect=0`
    const response = await get(params)
    console.log('response.data', response.data)
    return response.data
  }
}

export default new FacebookAPI()
