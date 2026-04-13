const { spawn, exec } = require('child_process')
const http = require('http')

const PORT = process.env.PORT || 3000
const URL = `http://localhost:${PORT}`
const isWin = process.platform === 'win32'

const server = spawn('npx next dev --turbopack', [], {
  stdio: 'inherit',
  shell: true,
})

server.on('error', (err) => {
  console.error('Failed to start server:', err.message)
  process.exit(1)
})

// Poll until server responds, then open default browser
const CHECK_INTERVAL = 500
const MAX_WAIT = 30000
let waited = 0

const tryOpen = setInterval(() => {
  waited += CHECK_INTERVAL
  if (waited > MAX_WAIT) { clearInterval(tryOpen); return }

  const req = http.get(URL, () => {
    clearInterval(tryOpen)
    const openCmd = isWin
      ? `start "" "${URL}"`
      : process.platform === 'darwin' ? `open "${URL}"` : `xdg-open "${URL}"`
    exec(openCmd)
  })
  req.on('error', () => {})
  req.end()
}, CHECK_INTERVAL)

server.on('close', () => clearInterval(tryOpen))
