import Products from "@/app/products/page"
import { Product } from "@/type/product"
import { promises } from "fs"
import path from "path"

export const getProducts =async ():Promise<Product[]>=>{
  const direciton = path.join(process.cwd(),'src','data','products.json')
  const data = await promises.readFile(direciton,'utf-8')
  return JSON.parse(data)
}

export const getProduct = async(id:string):Promise<Product| undefined>=>{
  const products = await getProducts()
  const result = products.find((product)=> product.id ===id)
  return result
}

