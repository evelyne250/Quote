// export class Quote {
//         id: number;
//       Author: string;
//       quote: string;
//     //   completeDate: Date
//     }
export class Quote {
    showVote: boolean;
    constructor(public id: number,public quote: string,public Author: string){
      this.showVote=false;
    }
  }