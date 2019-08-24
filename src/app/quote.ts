// export class Quote {
//         id: number;
//       Author: string;
//       quote: string;
//     //   completeDate: Date
//     }
export class Quote {
    showName: boolean;
    constructor(public id: number,public quote: string,public author: string, public name: string, public completeDate: Date){
      this.showName=false;
    }
  }