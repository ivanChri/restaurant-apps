'use client'
export function loadData (key:string) {
  const savedData = localStorage.getItem(key)
  if(savedData){
    return JSON.parse(savedData)
  }else{
    return []
 }
}
export function addData (key:string,data:any) {
  return localStorage.setItem(key,JSON.stringify(data))
}