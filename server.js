import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

// Request body

// POST http://localhost:3333/videos
server.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body;
  
  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

// GET http://localhost:3333/videos
server.get('/videos', () => {
  const videos = database.list();

  return videos;
});

// PUT http://localhost:3333/videos/1
// Route Parameter: id
server.put('/videos/:id', (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

// DELETE http://localhost:3333/videos/1
// Route Parameter: id
server.delete('/videos/:id', (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
}); 

server.listen({
  port: 3333
})