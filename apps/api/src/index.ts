import env from './lib/env';
import app from './server';

app.listen(env.PORT, () =>
  console.log(`Server is listening on PORT: ${env.PORT}`),
);
