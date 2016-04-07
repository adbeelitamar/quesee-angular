import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_DIRECTIVES} from 'angular2/router'

import {PostService} from '../services/post.service'

@Component({
    selector: 'paths',
    template: `
        <h1>Paths</h1>
        <hr />
        <div class="pull-right">
            <a [routerLink]="['NewPath']">New</a>            
        </div>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
        </div>
        <ul>
            <li *ngFor="#path of paths">
                <a [routerLink]="['Path', {id: path.id } ]">
                    {{ path.title }}
                </a>
            </li>            
        </ul>
    `,
    providers: [HTTP_PROVIDERS, PostService],
    directives: [ROUTER_DIRECTIVES]
})
export class PathsComponent implements OnInit {
    isLoading = true
    paths = []  
       
    constructor(private _postService: PostService) {
        // this._postService.createPost({userId: 'sdsfu40893948', body: "Hi There"})
    }
    
    ngOnInit() {
        this._postService.getPosts().subscribe(data => {
            this.isLoading = false
            // console.log(data)
            this.paths = data
        })
    } 
}