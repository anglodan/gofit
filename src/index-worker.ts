import { bootstrapWorker } from '@vendure/core';

import { config } from './vendure-config';

bootstrapWorker(config)
    .then(worker => worker.startJobQueue())
    .then(worker => worker.startHealthCheckServer({ port: 80 }))
    .catch(err => {
        console.log(err);
    });
