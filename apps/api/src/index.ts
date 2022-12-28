import Fastify from 'fastify';
import mongoose from 'mongoose';

const DATABASE_URL = 'mongodb://mongo:docker@localhost:27017';

const app = Fastify({ logger: true })

mongoose.connect(DATABASE_URL).then(() => {
  app.log.debug('test')

  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' })
  });

  app.listen({ port: 3000 }, (err) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
  });
})
.catch(app.log.error)
.finally(mongoose.disconnect);

