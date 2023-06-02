import { UnionKind } from '@universal-packages/express-parameters'

import { ExpressControllersParamsOptions } from './types'

export const CURRENT_OPTIONS: ExpressControllersParamsOptions = { union: 'body' }

export function setUnionKind(union: UnionKind): void {
  CURRENT_OPTIONS.union = union
}
