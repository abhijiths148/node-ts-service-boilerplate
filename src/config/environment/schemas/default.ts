import * as Joi from 'joi';

export const defaultSchema = Joi.object()
.keys({
    PROJECT_NAME: Joi.string().required(),
})
.unknown()
.required();