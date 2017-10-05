import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})

export class PublicComponent implements OnInit {

	active = false;
	innerWidth = 0;
	constructor(){

	}

	ngOnInit() {
		this.checkInnerWidth();
	}


	onResize(event) {
		this.checkInnerWidth();
	}
	
	checkInnerWidth(){
		this.innerWidth = window.innerWidth;
		if(this.innerWidth < 768){
			this.active = true;
		}else{
			this.active = false;
		}
	}

	toggleNav(event) {
		if(!this.active){
	    	this.active = true;
	  	}else{
	  		this.active = false;
	  	}
	}
}
