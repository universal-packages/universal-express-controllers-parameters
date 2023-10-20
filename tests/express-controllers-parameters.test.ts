import { ExpressApp } from '@universal-packages/express-controllers'

import { setUnionKind } from '../src'

const port = 4000 + Number(process.env['JEST_WORKER_ID'])

let app: ExpressApp
afterEach(async (): Promise<void> => {
  await app.stop()
})

describe('express-controllers-parameters', (): void => {
  it('It executed configured middleware all across controllers', async (): Promise<void> => {
    app = new ExpressApp({ appLocation: './tests/__fixtures__', port })
    app.on('request/error', console.log)
    await app.prepare()
    await app.run()

    app.on('request/error', console.log)

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
