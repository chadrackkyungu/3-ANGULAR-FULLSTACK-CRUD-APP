import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    public firestore:Firestore
    ) { }

  //using an Objects
  products = [
    {
      id:1, 
      img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assorted-fruit-in-bowl-royalty-free-image-903846026-1545573737.jpg",
      desc:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },

    {
      id:2, 
      img:"https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg",
      desc:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      id:3, 
      img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assorted-fruit-in-bowl-royalty-free-image-903846026-1545573737.jpg",
      desc:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },

    {
      id:4, 
      img:"https://i.guim.co.uk/img/media/6b4ecb8419da52aeaee10abbedd3f03048acf722/0_161_4928_2957/master/4928.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=4893ad925ffa20886636bcb80c70874b",
      desc:" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
  ]


}
