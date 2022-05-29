import { Component, OnInit } from '@angular/core';
import  { ProductApiService } from '../../services/product-api.service'
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products_arr:any;
    constructor(
      private product_API : ProductApiService,
      public firestore:Firestore
    ) { }

    ngOnInit(): void {
      //using an object
      // this. products_arr = this.product_API.products;
      this.get_products();
    };

    // Get the data from firebase
    get_products(){
      const Db = collection(this.firestore,'fruits');
      getDocs(Db)
      .then((res) => {
        const DbRes = res.docs.map((item) => {
          return {...item.data(), id: item.id}
        });
        this.products_arr = DbRes
        console.log(this.products_arr);
      })
      .catch(() => {
        console.log("Try adding data into your Database it is currently empty ");
      })
    }
    
 }