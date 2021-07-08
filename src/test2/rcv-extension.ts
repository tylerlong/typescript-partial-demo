import {RingCentral} from '@rc-ex/core';

declare module '@rc-ex/core' {
  interface RingCentral {
    rcv(): void;
  }
}

RingCentral.prototype.rcv = function () {
  console.log('rcv API');
};
