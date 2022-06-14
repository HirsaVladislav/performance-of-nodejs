import { AsyncLimitIteratorParametersType } from './types';

export default class Iterator {
  public static generateAsyncLimitIterator(data: AsyncLimitIteratorParametersType) {
    const { from, to, limit, asyncFunction, asyncFunctionParams } = data;

    return {
      async *[Symbol.asyncIterator]() {
        for (let now = from; now < to; now += limit) {
          yield await asyncFunction(asyncFunctionParams, { from, to, limit, now });
        }
      }
    };
  }
}


// Usage 
// const allReportsId = [];

// const editReportsByIdRange = async (params, objectFromIterate) => {
//   const { allReportsId } = params;
//   const { plus, now } = objectFromIterate;
//   const arrayOfIds = allReportsId.slice(now, now + plus);

//   return arrayOfIds;
// };

// const obj = {
//   from: 0,
//   to: 100, // change number
//   limit: 5000,
//   asyncFunction: editReportsByIdRange,
//   asyncFunctionParams: {
//     allReportsId
//   }
// };

// const iterateObj = Iterator.generateAsyncLimitIterator(obj);

// for await (let value of iterateObj) {
//   // iteration
// }

