// eslint-disable-next-line import/no-extraneous-dependencies
import Benchmark from 'benchmark';

const suite = new Benchmark.Suite();
const BENCHMARK_NAME = 'String: append vs concat vs join(Array)';
// add tests
const StringConcatJoinAppend = suite
  .add('String#Append', function () {
    // eslint-disable-next-line no-unused-vars
    let s = '';
    for (let i = 0; i < 1000; i += 1) {
      s += 'abcdefghijklmnoprstuvwxyz';
    }
  })
  .add('String#Concat', function () {
    let s = '';
    for (let i = 0; i < 1000; i += 1) {
      s = s.concat('abcdefghijklmnoprstuvwxyz');
    }
  })
  .add('Array#Join', function () {
    const stringAsArray = [];
    for (let i = 0; i < 1000; i += 1) {
      stringAsArray.push('abcdefghijklmnoprstuvwxyz');
    }
    // eslint-disable-next-line no-unused-vars
    const stringJoined = stringAsArray.join('');
  })
  .on('start', function () {
    // eslint-disable-next-line no-console
    console.log(BENCHMARK_NAME);
  })
  .on('cycle', function (event) {
    // eslint-disable-next-line no-console
    console.log(`-> ${String(event.target)}`);
  })
  .on('complete', function () {
    // eslint-disable-next-line no-console
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  });

export default StringConcatJoinAppend;
