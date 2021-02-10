import { get } from 'api/APIManager'
import { INVENTORIES } from './InventoryMock'

// const baseURL = 'https://graph.facebook.com/v9.0/'

class InventoryAPI {
  getInventories = async (userID: string) => {
    // const params = `${baseURL}/${userID}/accounts?access_token=${accessToken}&width=100`
    // const response = await get(params)
    // return response.data
    return INVENTORIES
  }
}

export default new InventoryAPI()
