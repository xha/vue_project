const { Song } = require('../models')

const index  = async (req, res) => { 
  try {
    const songs = await Song.findAll({
      limit: 20
    })
    res.send(songs)
  } catch (err) {
    //    console.log(err)
    res.status(500).send({
      error: 'Error al listar las canciones'
    })
  }
}

const post  = async (req, res) => { 
  try {
    const songs = await Song.create(req.body)
    res.send(songs)
  } catch (err) {
    //    console.log(err)
    res.status(500).send({
      error: 'Error al registrar la canción'
    })
  }
}

module.exports = {
  index,
  post
}
