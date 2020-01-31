import fastify from 'fastify'
import { getData } from './test'
import * as http from 'http'

function getHelloHandler (_: fastify.FastifyRequest<http.IncomingMessage>,
  reply: fastify.FastifyReply<http.ServerResponse>) {
  reply.header('Content-Type', 'text/html').code(200).send(getData())
}

const server = fastify()
server.get('/', getHelloHandler)
const PORT = 3002
server.listen(PORT, err => {
  if (err) throw err
  console.log(`server listening on ${PORT}`)
})
