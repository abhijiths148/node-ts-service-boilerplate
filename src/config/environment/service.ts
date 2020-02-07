import * as Joi from 'joi';

import config from 'config/environment/variables';
import { serviceSchema } from 'config/environment/schemas';
const { error, value: envVars } = Joi.validate(config, serviceSchema);

if(error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export default {
    projectName: envVars.PROJECT_NAME,
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    url: envVars.API_BASE_URL,
    endpoint: envVars.API_ENDPOINT,
}

