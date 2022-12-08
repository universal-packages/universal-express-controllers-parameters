import { BaseMiddleware, Middleware, MiddlewareStrategy } from '@universal-packages/express-controllers'
import { injectParameters } from '@universal-packages/express-parameters'
import { CURRENT_OPTIONS } from './express-controllers-parameters'

@Middleware()
export default class EachMiddleware extends BaseMiddleware {
  public static readonly strategy: MiddlewareStrategy = 'each'

  public async middleware(): Promise<void> {
    injectParameters(this.request, CURRENT_OPTIONS.union)
  }
}
