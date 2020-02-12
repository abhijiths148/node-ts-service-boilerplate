import * as Joi from '@hapi/joi';

export const defaultSchema = Joi.object()
.keys({
    PROJECT_NAME: Joi.string().required(),
})
.unknown()
.required();