import { observable, toJS, makeObservable } from 'mobx'
import InventoryAPI from 'api/InventoryAPI'
import { IInventory, IProduct } from 'store/InventoryStore.d'

export const initProduct = (): IProduct => ({
  name: '',
  detail: '',
  imageURL: '',
  price: 0,
  remaining: 0,
})

class InventoryStore implements InventoryStore {
  @observable inventories: IInventory[]

  constructor() {
    this.inventories = []
    makeObservable(this)
  }

  getInventories = async (UserID: string) => {
    const response = await InventoryAPI.getInventories(UserID)
    this.inventories = response
  }

  getInventoriesJS = () => {
    return toJS(this.inventories)
  }
}

export default new InventoryStore()
