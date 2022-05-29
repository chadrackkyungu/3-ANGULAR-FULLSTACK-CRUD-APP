import { Injectable } from '@angular/core';
import { Firestore, addDoc, doc, collection, getDocs, updateDoc, deleteDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DialogPopupService {

  // ! using an API TO SEND ATA TO THE BACKEND
  // constructor(private http:HttpClient) { }
  // //send the data
  // postProduct(data: any){
  //   return this.http.post<any>(" http://localhost:3000/productList/", data)
  // }
  // //get all data
  // getProduct(){
  //   return this.http.get<any>(" http://localhost:3000/productList/");
  // }

  // //2 parameters
  // updateProduct(data: any, id :number){
  //   return this.http.put<any>("http://localhost:3000/productList/" + id, data )
  // }
  // // parameters
  // deleteProduct(id :number){
  //   return this.http.delete<any>("http://localhost:3000/productList/" + id )
  // }


  //! FIREBASE
  constructor(public firestore:Firestore) { }

  //create new product
  postProduct(fruits:any, img:any){
    const {productName,category, freshness, price, comment, date} = fruits
    const objeFruits = {productName,category, freshness, price, comment, date, img}
    const dbInstance = collection(this.firestore,'fruits');
    addDoc(dbInstance, objeFruits) //add

    .then(() =>{alert("data sent")})
    .catch((err) =>{alert("data not sent")})
  }

  //get all products
  getProduct(){
    const Db = collection(this.firestore,'fruits');
    getDocs(Db) //get

    .then((res) => {res.docs.map((item) => {return {...item.data(), id: item.id}})})
    .catch((err) => { console.error(err.message) })
  }

  //update products
  updateData(id:string, data:any, img:any){
    const {productName,category, freshness, price, comment, date} = data
    const objeFruits = {productName,category, freshness, price, comment, date, img}

      const updateData = doc(this.firestore, 'fruits', id);
      updateDoc(updateData, objeFruits) //update

      .then(() =>{ alert('Updated successfully!!!')})
      .catch(() =>{ alert('Failed to update')})
  }

  //delete product
  deleteProduct(id:string){
    const deleteData = doc(this.firestore, 'fruits', id);
    deleteDoc(deleteData) //delete

    .then(() =>{ alert('Product deleted successfully !!!')})
    .catch((err) =>{ alert(err.message )})
  }

  

}
