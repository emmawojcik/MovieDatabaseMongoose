const Movie = require("./movieModel")

exports.createMovie = async (movieObject) => {
  try {
    await Movie.create(movieObject)
  } catch(error) {
    console.log(error)
  }
}

exports.listMovies = async () => {
  try {
    return await Movie.find({})
  } catch (error) {
    console.log(error)
  }
}

exports.deleteMovie = async (movieTitle) => {
  try {
    await Movie.deleteOne({title: movieTitle})
  } catch(error) {
    console.log(error)
  }
}

exports.updateMovie = async (movieObject) => {
  try {
    const itemToUpdate = { title: movieObject.update}
    const updatedInfo = { title: movieObject.title, actor: movieObject.actor, rating: movieObject.rating}
    await Movie.findOneAndUpdate(itemToUpdate, updatedInfo)
  } catch(error) {
    console.log(error)
  }
}

exports.filterMovies = async (filterQuery) => {

  try {  
    const queryObject = {[filterQuery.filter] : filterQuery[filterQuery.filter]}
    return await Movie.find(queryObject)
  } catch(error) {
    console.log(error)
  }
}