require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");

const { createMovie, listMovies, deleteMovie, updateMovie, filterMovies } = require('./movie/movieFunction')
const { createShow, listShows, deleteShow, updateShow, filterShows } = require ('./tv/tvFunctions')

const app = async (yargsObject) => {
  try {
    // ADD film or tv show
    if(yargsObject.add){
      if(yargsObject.film){
        await createMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        console.log(await listMovies())
      }
      if(yargsObject.tv){
        await createShow ({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        console.log(await listShows())
      }
    }

    // LIST film or tv show
    else if(yargsObject.list) {
      if(yargsObject.film){
        console.log(await listMovies())
      }
      if(yargsObject.tv){
        console.log(await listShows())
      } 
    }

    // DELETE film or tv show
    else if (yargsObject.delete) {
      if(yargsObject.film){
        await deleteMovie(yargsObject.title)
        console.log(await listMovies())
      }
      if(yargsObject.tv){
        await deleteShow(yargsObject.title)
        console.log(await listShows())
      }
    }

    // UPDATE film or tv show
    else if(yargsObject.update) {
      if(yargsObject.film){
        await updateMovie({update: yargsObject.update, title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        console.log(await listMovies())
      }
      if(yargsObject.tv){
        // update tv show
        await updateShow({update: yargsObject.update, title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        console.log(await listShows())
      }

    }
    
    // FILTER film or tv show
    else if(yargsObject.filter) {
      if(yargsObject.film){
        console.log(await filterMovies(yargsObject))
      }
      if(yargsObject.tv) {
        console.log(await filterShows(yargsObject))
      }
    }

    else {
      console.log("incorrect command")
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
    await mongoose.disconnect();
  }
}

app(yargs.argv)