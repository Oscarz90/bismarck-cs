// eslint-disable-next-line import/no-extraneous-dependencies
import Benchmark from 'benchmark';

const suite = new Benchmark.Suite();

// add tests
suite
  .add('RegExp#test', function () {
    /o/.test('Hello World!');
  })
  .add('String#indexOf', function () {
    // eslint-disable-next-line no-unused-expressions
    'Hello World!'.indexOf('o') > -1;
  })
  // add listeners
  .on('cycle', function (event) {
    // eslint-disable-next-line no-console
    console.log(String(event.target));
  })
  .on('complete', function () {
    // eslint-disable-next-line no-console
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  // run async
  .run({ async: true });
