const Television = require('./tvModel');

exports.createShow = async (tvObject) => {
  try {
    await Television.create(tvObject)
  }
  catch(error) {
    console.log(error);
  }
}

exports.listShows = async () => {
  try {
    return await Television.find({})
  } 
  catch(error){
    console.log(error)
  }
}

exports.deleteShow = async (tvTitle) => {
  try{
    await Television.deleteOne({title: tvTitle})
  }
  catch (error){
    console.log(error)
  }
}

exports.updateShow = async (tvObject) => {
  try {
    const itemToUpdate = {title: tvObject.update}
    const updatedInfo = {title: tvObject.title, actor: tvObject.actor, rating: tvObject.rating}
    await Television.findOneAndUpdate(itemToUpdate, updatedInfo)
  }
  catch(error) {
    console.log(error)
  }
}

exports.filterShows = async (filterQuery) => {
  try {
    const queryObject = {[filterQuery.filter] : filterQuery[filterQuery.filter]}
    return await Television.find(queryObject)
  }
  catch(error) {
    console.log(error)
  } 
}
