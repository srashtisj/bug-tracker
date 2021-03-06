import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService{
    constructor(){}
    groupBy(collection: any[], prop: string){
        let propertiesUniqueArray: any[] = [];
        collection.forEach((item)=> {
            let val = item[prop];
            if(propertiesUniqueArray.indexOf(val) === -1)
                propertiesUniqueArray.push(val);
        });
        var groupedBy = propertiesUniqueArray.map((propVal)=>{
            return {
                key: propVal,
                values: collection.filter(item=> item[prop] === propVal)
            };
        })
        return groupedBy;
    }
}
