import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resis-lili',
  templateUrl: './resis-lili.component.html',
  styleUrls: ['./resis-lili.component.css']
})
export class ResisLiliComponent implements OnInit {

  constructor() { }

  color1: string='';
  color2: string='';
  color3: string='';
  toler: string='';

  frangaUno:string='';
  caso1:number=0;
  frangaDos:string='';
  caso2:number=0;
  frangaTres:string='';
  caso3:number=0;
  toleran:string='';
  resultado:number=0;
  min:number=0;
  max:number=0;
  celda1: any;
  celda2: any;
  celda3: any;
  celda4: any;

  ngOnInit(): void {
  }

  Funcion(){

    this.celda1=document.getElementById("celda1");
    this.celda2=document.getElementById("celda2");
    this.celda3=document.getElementById("celda3");
    this.celda4=document.getElementById("celda4");

    switch (this.frangaUno) {
      case "Negro":
        this.caso1=0;
        this.celda1.style.backgroundColor="black"
        this.celda1.style.color="white"
  
        break;
        case "Cafe":
          this.caso1=1;
          this.celda1.style.backgroundColor="#6f4e37"
          this.celda1.style.color="white"
          
        
        break;
        case "Rojo":
          this.caso1=2;
          this.celda1.style.backgroundColor="red"
          this.celda1.style.color="white"
        
        break;
        case "Naranja":
          this.caso1=3;
          this.celda1.style.backgroundColor="orange"
          this.celda1.style.color="white"
        
        break;
        case "Amarillo":
          this.caso1=4;
          this.celda1.style.backgroundColor="yellow"
          this.celda3.style.color="black"
        
        break;
        case "Verde":
          this.caso1=5;
          this.celda1.style.backgroundColor="green"
          this.celda1.style.color="white"
        
        break;
        case "Azul":
          this.caso1=6;
          this.celda1.style.backgroundColor="blue"
          this.celda1.style.color="white"
        
        break;
        case "Violeta":
          this.caso1=7;
          this.celda1.style.backgroundColor="purple"
          this.celda1.style.color="white"
        
        break;
        case "Gris":
          this.caso1=8;
          this.celda1.style.backgroundColor="gray"
          this.celda1.style.color="white"
        
        break;
        case "Blanco":
          this.caso1=9;
          this.celda1.style.backgroundColor="white"
          this.celda3.style.color="black"
        
        break;
    
      default:
        this.caso1=20;
        break;
    }
  
    switch (this.frangaDos) {
      case "Negro":
        this.caso2=0;
        this.celda2.style.backgroundColor="black"
        this.celda2.style.color="white"
  
        break;
        case "Cafe":
          this.caso2=1;
          this.celda2.style.backgroundColor="#6f4e37"
          this.celda2.style.color="white"
        
        break;
        case "Rojo":
          this.caso2=2;
          this.celda2.style.backgroundColor="red"
          this.celda2.style.color="white"
        
        break;
        case "Naranja":
          this.caso2=3;
          this.celda2.style.backgroundColor="orange"
          this.celda2.style.color="white"
        
        break;
        case "Amarillo":
          this.caso2=4;
          this.celda2.style.backgroundColor="yellow"
          this.celda3.style.color="black"
        
        break;
        case "Verde":
          this.caso2=5;
          this.celda2.style.backgroundColor="green"
          this.celda2.style.color="white"
        
        break;
        case "Azul":
          this.caso2=6;
          this.celda2.style.backgroundColor="blue"
          this.celda2.style.color="white"
        
        break;
        case "Violeta":
          this.caso2=7;
          this.celda2.style.backgroundColor="purple"
          this.celda2.style.color="white"
        
        break;
        case "Gris":
          this.caso2=8;
          this.celda2.style.backgroundColor="gray"
          this.celda2.style.color="white"
        
        break;
        case "Blanco":
          this.caso2=9;
          this.celda2.style.backgroundColor="white"
          this.celda3.style.color="black"

        
        break;
    
      default:
        this.caso2=20;
        break;
    }
    switch (this.frangaTres) {
      case "Negro":
        this.caso3=1;
        this.celda3.style.backgroundColor="black"
        this.celda3.style.color="white"
  
        break;
        case "Cafe":
          this.caso3=10;
          this.celda3.style.backgroundColor="#6f4e37"
          this.celda3.style.color="white"
        
        break;
        case "Rojo":
          this.caso3=100;
          this.celda3.style.backgroundColor="red"
          this.celda3.style.color="white"
        
        break;
        case "Naranja":
          this.caso3=1000;
          this.celda3.style.backgroundColor="orange"
          this.celda3.style.color="white"
        
        break;
        case "Amarillo":
          this.caso3=10000;
          this.celda3.style.backgroundColor="yellow"
          this.celda3.style.color="black"
        
        break;
        case "Verde":
          this.caso3=100000;
          this.celda3.style.backgroundColor="green"
          this.celda3.style.color="white"
        
        break;
        case "Azul":
          this.caso3=1000000;
          this.celda3.style.backgroundColor="blue"
          this.celda3.style.color="white"
        
        break;
        case "Violeta":
          this.caso3=10000000;
          this.celda3.style.backgroundColor="purple"
          this.celda3.style.color="white"
        
        break;
        case "Gris":
          this.caso3=100000000;
          this.celda3.style.backgroundColor="gray"
          this.celda3.style.color="white"
        
        break;
        case "Blanco":
          this.caso3=1000000000;
          this.celda3.style.backgroundColor="white"
          this.celda3.style.color="black"

        
        break;
    
      default:
        this.caso3=20;
        break;
    }
    this.resultado=(this.caso1*10+this.caso2)*this.caso3;
  
    if (this.toleran=="Dorado") {
      this.max=this.resultado*1.05;
      this.min=this.resultado-(this.resultado*.05);
      this.celda4.style.backgroundColor="gold"
    }
    else{
      this.max=this.resultado+(this.resultado*0.10);
      this.min=this.resultado-(this.resultado*0.10);
      this.celda4.style.backgroundColor="silver"
    }
    if (this.toleran=='') {
      this.max=0;
      this.min=0;
      this.celda4.style.backgroundColor="white"
    }
  }

}
