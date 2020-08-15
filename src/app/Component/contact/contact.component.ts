import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ourForm: FormGroup;
  private submissionForm: AngularFirestoreCollection<any>;
  submitting = false;
  submitted = false;
  constructor(private fb: FormBuilder,private firestore: AngularFirestore,private router:Router) { }

  ngOnInit(): void {
    this.ourForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }
  submitData(value: any) {
    console.log(this.submitted);

    this.submitting = true;
    this.submissionForm.add(value).then(res => {
      this.submitted = true;
    }).catch(err => console.log(err)
    ).finally(() => {
      this.submitting = false;
    });
    this.router.navigate(['/contact'])
  }

}
