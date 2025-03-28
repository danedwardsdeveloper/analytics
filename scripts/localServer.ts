import express, { Request, Response } from 'express'
import next from 'next'
import path from 'path'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()

  // if this file is in the root
  // server.use('/_next', express.static(path.join(__dirname, '.next')))

  // If this file is in a folder
  server.use('/_next', express.static(path.join(__dirname, '../.next')))

  server.use('/_next/image', (req: Request, res: Response) => {
    handle(req, res)
  })

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res)
  })

  server.listen(port, (err?: Error) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

process.on('uncaughtException', (err: Error) => {
  console.error('Uncaught Exception:', err)
  process.exit(1)
})

process.on('unhandledRejection', (reason: unknown) => {
  console.error('Unhandled Rejection:', reason)
  process.exit(1)
})
