import { ActionUse } from '@universal-packages/express-controllers'
import { UnionKind, parameters } from '@universal-packages/express-parameters'
import { MethodDecoratorFunction } from '@universal-packages/namespaced-decorators'

export function UseParameters(union?: UnionKind): MethodDecoratorFunction {
  return ActionUse(parameters(union))
}
