import {RingCentral} from './core';

declare module './core' {
  interface RingCentral {
    f1(): void;
  }
}

RingCentral.prototype.f1 = function () {
  console.log('f1()');
};
