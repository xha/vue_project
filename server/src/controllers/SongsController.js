const { Song } = require('../models')
const { Op } = require('sequelize')

const index = async (req, res) => {
  try {
    let songs = null
    const search = req.query.search
    if (search) {
      songs = await Song.findAll({
        where: {
          [Op.or]: [
            'title', 'artist', 'album', 'genre'
          ].map(key => ({
            [key]: {
              [Op.like]: `%${search}%`
            }
          }))
        }
      })
    } else {
      songs = await Song.findAll({
        limit: 20
      })
    }
    res.send(songs)
  } catch (err) {
    console.log(err)
    res.status(500).send({
      error: 'Error al listar las canciones'
    })
  }
}

const show = async (req, res) => {
  try {
    const songs = await Song.findByPk(req.params.songId)
    res.send(songs)
  } catch (err) {
    res.status(500).send({
      error: 'Error al listar las canciones'
    })
  }
}

const post = async (req, res) => {
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

const put = async (req, res) => {
  try {
    const songs = await Song.update(req.body, {
      where: {
        id: req.params.songId
      }
    })

    if (songs === 1) {
      const songs2 = await Song.findByPk(req.params.songId)
      res.send(songs2)
    } else {
      res.send(songs)
    }
  } catch (err) {
    res.status(500).send({
      error: 'Error al registrar la canción'
    })
  }
}

module.exports = {
  index,
  post,
  show,
  put
}
