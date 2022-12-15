import { Component, OnInit } from '@angular/core';
import { CreatetestService } from './createtest.service';

@Component({
  selector: 'app-createtest',
  templateUrl: './createtest.component.html',
  styleUrls: ['./createtest.component.scss'],
})

export class CreatetestComponent implements OnInit {
    public test:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        field: '',
    }

    constructor (
        private createtestService: CreatetestService,
    ) { }

    ngOnInit() {
        this.test.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createtestService.GpCreate(this.test).subscribe((data:any) => {
            this.test.name = ''
 	 	this.test.field = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}