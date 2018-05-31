# react-percent-bar

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Percent bars.

## Usage

```javascript

import { PercentBar } from  "@crpt/react-percent-bar";


<PercentBar
  title="Some title"
  value="Some value"
  count={4}
  values={null}
/>
```

| PropName | Description | Example |
|---|---|---|
| title: String  | Title of PercentBar. |  `<PercentBar title="Some title" />` |
| value: String  | Value of PercentBar in percents. If no value passed, total value is a sum of child values. |  `<PercentBar value="55.6" />` |
| count: String  | Count of PercentBar in units. If no count passed, total count is a sum of child counts. |  `<PercentBar count="55612" />` |
| values: Array  | Child values. |  `<PercentBar values={[ {id: 1, percent: 4, count: 8, title:'Порча товара'},
                                                           {id: 7, percent: 8, count: 16, title:'Продажа китайцам'},
                                                                 {id: 2, percent: 2, count: 4, title:'Хищение товара'},
                                                                 {id: 3, percent: 1, count: 2, title:'Отбор контрольных образцов'},
                                                                 {id: 4, percent: 1.5, count: 3, title:'Демонстрация на выставках и ярмарках'},
                                                                 {id: 5, percent: 1.5, count: 3, title:'Иное'},
                                                               ]} />` |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
