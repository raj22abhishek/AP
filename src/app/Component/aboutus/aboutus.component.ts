import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  ourForm: FormGroup;
  private submissionForm: AngularFirestoreCollection<any>;
  submitting = false;
  submitted = false;
  constructor(private fb: FormBuilder,private firestore: AngularFirestore,private router:Router) { }

  ngOnInit(): void {
    this.submissionForm = this.firestore.collection('submissions');
    this.ourForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required,Validators.pattern('^([+]\\d{2})?\\d{10}$')]],
      comment: ['', Validators.required],
    });
  }
  submitData(value: any) {
    console.log(this.ourForm,value);
    this.submitting = true;
    this.submissionForm.add(value).then(res => {
      this.submitted = true;
    }).catch(err => console.log(err)
    ).finally(() => {
      this.submitting = false;
    });
    alert("Form Submitted Successfully")
    this.ourForm.reset()
    
  }

}
