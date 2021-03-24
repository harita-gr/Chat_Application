import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],pptyName:string): unknown {

    const resultArray =[];
    const username = sessionStorage.getItem('username');

    //Checking if any of the mandatory inputs are null
    if( value.length ===0 || pptyName === ''){
      return value; //return input array
    }
    for (const item of value){
      if (item[pptyName] === username ){
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
