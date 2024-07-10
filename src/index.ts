<<<<<<< HEAD
import config from './config/index'; 
import { startServer } from './server'; 
=======
import config from './config/index'; // Import the config variable
import { startServer } from './server'; // Change this line
>>>>>>> backup-branch
import { loadTemplates } from './template/index';
import { Logger } from './utils/logger';
import bootstrap from './bootstrap/index';

const log = new Logger('aetasaal-api').createLogger({ env: config.env });

start();

async function start() {
  try {
    await bootstrap(log);
<<<<<<< HEAD
    await startServer(log); 
=======
    //@ts-ignore
    await startServer(log);
>>>>>>> backup-branch
    await loadTemplates();
  } catch (err) {
    //@ts-ignore
    log.error(err.message, 'error while application setup');
  }
}
<<<<<<< HEAD
=======

>>>>>>> backup-branch
