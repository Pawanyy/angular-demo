import { Component, EventEmitter, Input, Output, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() postImageUrl = ''

  @Output() imageSelected = new EventEmitter<string>();

  constructor() {
    console.log("constructor() Called")
  }

  ngOnInit(): void {
    console.log("ngOnInit() Called")
  }

  ngOnChanges(): void {
    console.log("ngOnChanges() Called")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck() Called")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() Called")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() Called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() Called")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() Called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() Called")
  }

}
