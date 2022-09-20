import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterContentInit {

  name = "Name";
  product = 0;
  showBlog = true;

  @ViewChild('div') div:any
  constructor() { }
  ngAfterContentInit(): void {
    console.log(this.div)
  }

  ngOnInit(): void {
    console.log(this.div)
  }

  ngOnDestroy(): void{
    console.log("destroy")
  }

  getProduct(x:number, y:number):void {
    this.product = x*y;
  }

}
