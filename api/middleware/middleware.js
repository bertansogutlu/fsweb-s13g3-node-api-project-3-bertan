const usersModels = require('../users/users-model')

function logger(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  console.log(`${req.method} ${req.url} ${new Date().toISOString()}`)
  next();
}

async function validateUserId(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  user = await usersModels.getById(req.params.id);
  if(user) {
    req.user = user;
    next();
  } else {
    res.status(404).json({ message: "not found" })
  }
}

function validateUser(req, res, next) {
  // SİHRİNİZİ GÖRELİM
}

function validatePost(req, res, next) {
  // SİHRİNİZİ GÖRELİM
}

// bu işlevleri diğer modüllere değdirmeyi unutmayın
module.exports = {logger, validateUserId, validateUser, validatePost}