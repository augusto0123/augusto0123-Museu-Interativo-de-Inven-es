import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'categoria',
    standalone: false
})

export class CategoriaPipe implements PipeTransform {
    
    transform(categoria:string):string {
        if(categoria === "Comunicação") return "text-primary";
        if(categoria === "Energia") return "text-warning";
        if(categoria === "Transporte") return "text-success"; 
        
        return "text-secondary";
    }
}