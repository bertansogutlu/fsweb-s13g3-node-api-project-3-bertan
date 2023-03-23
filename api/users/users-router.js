const express = require('express');

// `users-model.js` ve `posts-model.js` sayfalarına ihtiyacınız var
const userModel = require('./users-model');
const postModel = require('../posts/posts-model');
// ara yazılım fonksiyonları da gereklidir
const middleare = require('../middleware/middleware');
const router = express.Router();

router.get('/', async (req, res) => {
  // TÜM KULLANICILARI İÇEREN DİZİYİ DÖNDÜRÜN
  try {
    const users = await userModel.get();
    res.json(users)
  } catch (error) {
    res.status(500).json({message:"Kullanıcı bilgileri alınamadı"});
  }
});

router.get('/:id', middleare.validateUserId, async (req, res) => {
  // USER NESNESİNİ DÖNDÜRÜN
  // user id yi getirmek için bir ara yazılım gereklidir
  try {
    res.json(req.user)
  } catch (error) {
    res.status(500).json({message:"Kullanıcılar alınamadı"});
  }
});

router.post('/', (req, res) => {
  // YENİ OLUŞTURULAN USER NESNESİNİ DÖNDÜRÜN
  // istek gövdesini doğrulamak için ara yazılım gereklidir.
});

router.put('/:id', (req, res) => {
  // YENİ GÜNCELLENEN USER NESNESİNİ DÖNDÜRÜN
  // user id yi doğrulayan ara yazılım gereklidir
  // ve istek gövdesini doğrulayan bir ara yazılım gereklidir.
});

router.delete('/:id', (req, res) => {
  // SON SİLİNEN USER NESNESİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
});

router.get('/:id/posts', (req, res) => {
  // USER POSTLARINI İÇEREN BİR DİZİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
});

router.post('/:id/posts', (req, res) => {
  // YENİ OLUŞTURULAN KULLANICI NESNESİNİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
  // ve istek gövdesini doğrulayan bir ara yazılım gereklidir.
});

// routerı dışa aktarmayı unutmayın
module.exports = router;