const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().min(6).required().email().messages({
        'any.required': 'Campo Requerido'
      }),
      password: Joi.string().min(8).required().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    })

    //  const validation = schema.validate(req.body)
    //  res.send(validation)
    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'formato de email no válido'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'minimo 8 de longitud, no incluir caracteres especiales'
          })
          break
        default:
          res.status(400).send({
            error: 'Error al registrar'
          })
      }
    } else {
      next()
    }
  }
}
