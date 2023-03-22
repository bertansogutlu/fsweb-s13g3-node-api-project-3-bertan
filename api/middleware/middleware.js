function logger(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  console.log(`${req.method} ${req.url} ${new Date().toISOString()}`)
  next();
}

function validateUserId(req, res, next) {
  // SİHRİNİZİ GÖRELİM
}

function validateUser(req, res, next) {
  // SİHRİNİZİ GÖRELİM
}

function validatePost(req, res, next) {
  // SİHRİNİZİ GÖRELİM
}

// bu işlevleri diğer modüllere değdirmeyi unutmayın
module.exports = {logger, validateUserId, validateUser, validatePost}