import * as Joi from '@hapi/joi';

import { defaultSchema } from 'config/environment/schemas';

export const serviceSchema = defaultSchema.keys({
    PROJECT_NAME: Joi.string().required(),
    NODE_ENV: Joi.string()
    .allow(['development', 'production'])
    .default('development'),
    PORT: Joi.number().default(5000),
    API_BASE_URL: Joi.string().default('http://localhost:4998'),
    API_ENDPOINT: Joi.string().required(),
});
