# Express controllers parameters

[![npm version](https://badge.fury.io/js/@universal-packages%2Fexpress-controllers-parameters.svg)](https://www.npmjs.com/package/@universal-packages/express-controllers-parameters)
[![Testing](https://github.com/universal-packages/universal-express-controllers-parameters/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-express-controllers-parameters/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-express-controllers-parameters/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-express-controllers-parameters)

Express parameters for universal controllers.

## Install

```shell
npm install @universal-packages/express-controllers-parameters

npm install express
npm install @universal-packages/express-controllers
```

## Global middleware

By installing this package a global middleware is going to be loaded automatically by the `ExpressApp`.

## Global methods
#### **`setUnionKind(unionKind: string)`**

Set up the global middleware parameters union kind by calling this function at any given moment.

```js
import { setUnionKind } from '@universal-packages/express-controllers-parameters'

setUnionKind('join')
```

## Hooks
#### **`@UseParameters([unionKind: string])`**

Optionally you can set a different strategy for a particular action using this decorator.

```js
import { BaseController, Controller, Get, Post } from '@universal-packages/express-controllers'
import { UseParameters } from '@universal-packages/express-controllers-parameters'

@Controller('good')
export default class GoodController extends BaseController {
  @Get()
  @UseParameters('separate')
  async action() {
    this.request.parameters
  }
}
```

## Typescript

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
