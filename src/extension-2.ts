import {RingCentral} from './core';

declare module './core' {
  interface RingCentral {
    f2(): void;
  }
}

RingCentral.prototype.f2 = function () {
  console.log('f2()');
};
