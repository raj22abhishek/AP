import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
// import * as validUrl from 'valid-url';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  title = 'project';

  ourForm: FormGroup;
  private submissionForm: AngularFirestoreCollection<any>;
  submitting = false;
  submitted = false;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.submissionForm = this.firestore.collection('submissions');
    this.ourForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      track: ['', Validators.required],
      screenshots: ['', [Validators.required, this.isValidURL]],
      githubURL: [''],
      feedback: ['', Validators.required]
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

  }


  trackChanged(val: string) {
    console.log(val);

    const githubURLControl = this.ourForm.get('githubURL');

    if (val === 'Android') {
      githubURLControl.setValidators([Validators.required, this.isValidURL]);
    } else {
      githubURLControl.clearValidators();
    }
    githubURLControl.updateValueAndValidity();
  }


  isValidURL(control: FormControl): { [key: string]: boolean } | null {

    // if (control.value.length > 1 && !valid.isHttpUri(control.value)) {
    //   return { validURL: true };
    // }
    return null;
  }

}
