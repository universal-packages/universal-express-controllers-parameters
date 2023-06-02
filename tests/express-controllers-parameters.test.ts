import { ExpressApp } from '@universal-packages/express-controllers'
import fetch from 'node-fetch'

import { setUnionKind } from '../src'

const port = 4000 + Number(process.env['JEST_WORKER_ID'])

let app: ExpressApp
afterEach(async (): Promise<void> => {
  await app.stop()
})

describe('express-controllers-parameters', (): void => {
  it('It executed configured middleware all across controllers', async (): Promise<void> => {
    app = new ExpressApp({ appLocation: './tests/__fixtures__', port })
    await app.prepare()
    await app.run()

    app.on('request/error', console.log)

    let response = await fetch(`http://localhost:${port}/good/1`)
    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ subject: { body: {}, params: { id: '1' }, query: {} } })

    response = await fetch(`http://localhost:${port}/good/1`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ part: 1 })
    })
    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ subject: { part: 1 } })

    setUnionKind('separate')

    response = await fetch(`http://localhost:${port}/good/2`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ part: 1 })
    })
    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ subject: { body: { part: 1 }, params: { id: '2' }, query: {} } })
  })
})
