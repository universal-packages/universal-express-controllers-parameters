import { setUnionKind } from '../src'

describe('express-controllers-parameters', (): void => {
  it('It executed configured middleware all across controllers', async (): Promise<void> => {
    await runExpressControllers()

    await fGet('/good/1')
    expect(fResponse).toHaveReturnedWithStatus('OK')
    expect(fResponseBody).toEqual({ subject: { body: {}, params: { id: '1' }, query: {} } })

    await fPost('/good/1', { part: 1 })
    expect(fResponse).toHaveReturnedWithStatus('OK')
    expect(fResponseBody).toEqual({ subject: { part: 1 } })

    setUnionKind('separate')

    await fPost('/good/2', { part: 1 })
    expect(fResponse).toHaveReturnedWithStatus('OK')
    expect(fResponseBody).toEqual({ subject: { body: { part: 1 }, params: { id: '2' }, query: {} } })
  })
})
