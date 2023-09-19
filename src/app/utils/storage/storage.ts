import { MenuInterface } from "../interface/menu.interface"
import { OrderInterface } from "../interface/order.interface"
export function loadData (key:string) {
  let savedData
  if (typeof window !== 'undefined') {
   savedData = localStorage.getItem(key)
  }
  if(savedData){
    return JSON.parse(savedData)
  }else{
    return []
 }
}
export function addData (key:string,data:MenuInterface[] | OrderInterface[]) {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key,JSON.stringify(data))
  }
}
