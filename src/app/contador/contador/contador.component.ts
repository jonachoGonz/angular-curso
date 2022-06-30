import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
        <h1>{{ titulo }}</h1>
        <h3>La base es de: {{base}}</h3>
        <button-solid text="+ {{base}}" (click)="acumular(base)"></button-solid>
        <span>{{ numero }}</span>
        <button-outline icon="false" text="- {{base}}" (click)="acumular(-base)"></button-outline>

    `
})

export class ContadorComponent{
    titulo  : string = 'Contador App';
    numero  : number = 10;

    base    : number = 5;
    
    acumular(valor:number){
        this.numero += valor;
    }
}