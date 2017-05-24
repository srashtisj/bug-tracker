import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    moduleId: module.id
})

export class CommentComponent implements OnInit {
    constructor(private http: HttpModule) { }
    getCommentList(){
        return this.http.ge();
    }

    ngOnInit() { }
}