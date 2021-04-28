import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //   {
  //     "storeName": "Fruits Unlimited",
  //     "name": "Raspberry",
  //     "description": "Box of Raspberrys.",
  //     "price": {
  //         "price": 0.99,
  //         "discount": 0
  //     },
  //     "images": [
  //         "http://localhost:3000/images/raspberry.jpeg"
  //     ],
  //     "_id": "2XhiH7KdRUfEuFrz"
  // }

  transform(value: [], ...args: string[]): unknown {
    const searchValue = args[0];
    return value.filter((item: any) => {
      if (item.storeName.indexOf(searchValue) > -1 || item.name.indexOf(searchValue) > -1) {
        return true
      }
      return false;
    });
  }

}
