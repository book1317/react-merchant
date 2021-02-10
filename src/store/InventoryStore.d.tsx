export interface IInventory {
  name: string
  imageURL: string
  price: number
  remaining: number
}

export interface IProduct {
  name: string
  imageURL: string
  price: number
  remaining: number
}

export interface IInventoryStore {
  getInventories: (userID: string) => void
  getInventoriesJS: () => IInventory[]
}
