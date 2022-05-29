import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogPopupService } from 'src/app/services/dialog-popup.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog' // [MAT_DIALOG_DATA] This is for editing the table
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

import { Storage, ref, uploadBytesResumable, getDownloadURL } from "@angular/fire/storage";
import { snapshotEqual } from '@firebase/firestore';


@Component({
  selector: 'app-pop-up-dialog',
  templateUrl: './pop-up-dialog.component.html',
  styleUrls: ['./pop-up-dialog.component.scss']
})
export class PopUpDialogComponent implements OnInit {

  //list of radio btn
  freshnessList = [
    "Brand New", 
    "Second Hand", 
    "Refurbished"
  ]

  //variable that will hold the input form
  productForm !: FormGroup;
  actionBtn : string = "save";
  public file: any = {};
  downLoad_URL: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private API_DailogService : DialogPopupService, //This is the API where we will post, & get the data
    private dialogPopUpRef : MatDialogRef<PopUpDialogComponent>, //this is our own components name [export class PopUpDialogComponent implements OnInit]
    @Inject(MAT_DIALOG_DATA) public ediData : any, // this will allow me to inject data wen i click edit
    public analytics: AngularFireAnalytics, // Firebase
    public storage: Storage

    ) { 
      analytics.logEvent('custom_event', {home: " home page visited "} );
    }

      // Upload image
   onFileInput(event:any){
    this.file = event.target.files[0]
    const storageRef = ref(this.storage, `folder_name/${this.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, this.file)
    uploadTask.on('state_changed', (snapshot) =>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, 
    (err) =>{
      console.log(err.message);
    },
    () => getDownloadURL(uploadTask.snapshot.ref).then((downLoadURL) =>{
        if(downLoadURL){
          this.downLoad_URL.push(downLoadURL);
        }
    }))
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    })

   //this will pass the data to the dialog input form wen the user click on edit btn 
   if(this.ediData){
     this.actionBtn = "Update"
     this.productForm.controls['productName'].setValue(this.ediData.productName)
     this.productForm.controls['category'].setValue(this.ediData.category)
     this.productForm.controls['freshness'].setValue(this.ediData.freshness)
     this.productForm.controls['price'].setValue(this.ediData.price)
     this.productForm.controls['comment'].setValue(this.ediData.comment)
     this.productForm.controls['date'].setValue(this.ediData.date.toDate())
   }
  }

  // when the user click on save it will post the user input to the Backend
  addProduct(){
   if(!this.ediData){
    if(this.productForm.valid){
      this.API_DailogService.postProduct(this.productForm.value, this.downLoad_URL[0])  
      this.productForm.reset();
      this.dialogPopUpRef.close('save')
    }
   }else{
    this.updateProduct()
   }
  }

  //update
  updateProduct(){
    this.API_DailogService.updateData(this.ediData.id, this.productForm.value, this.ediData.img)
    this.productForm.reset();
    this.dialogPopUpRef.close('update')
  }


}
