import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prod_id: any;
  prod_id_Detail:any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private product_API: ProductApiService,
    public firestore:Firestore
  ) { }

  ngOnInit(): void {
    this.prod_id = this.activatedRoute.snapshot.paramMap.get('id'); //this is the new approach
    // this.prod_id = this.activatedRoute.snapshot.params['id']; //note: u can also use this old approach
    // this.prod_id_Detail = this.product_API.products.find( x => x.id == this.prod_id); //using Object

    this.get_products();
  }

  //get from the database
  get_products(){
    const Db = collection(this.firestore,'fruits');
    getDocs(Db)
    .then((res) => {
      const DbRes = res.docs.map((item) => {
        return {...item.data(), id: item.id}
      });
      const prod_det = DbRes.find(p => p.id === this.prod_id)
      this.prod_id_Detail = prod_det
    })
    .catch(() => {
      console.log("Try adding data into your Database it is currently empty ");
    })
  }

}
