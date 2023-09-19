import { MenuInterface } from "./menu.interface"
export interface OrderInterface {
  id:number
  table:number
  menu:MenuInterface
  total:number
}