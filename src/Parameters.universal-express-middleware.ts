import { BaseMiddleware, Middleware } from '@universal-packages/express-controllers'
import { injectParameters } from '@universal-packages/express-parameters'

import { CURRENT_OPTIONS } from './express-controllers-parameters'

@Middleware({ strategy: 'each' })
export default class ParametersMiddleware extends BaseMiddleware {
  public async middleware(): Promise<void> {
    injectParameters(this.request, CURRENT_OPTIONS.union)
  }
}
