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
    res.json(users);
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

router.post('/', middleare.validateUser, async (req, res) => {
  // YENİ OLUŞTURULAN USER NESNESİNİ DÖNDÜRÜN
  // istek gövdesini doğrulamak için ara yazılım gereklidir.
  try {
    const newUser = await userModel.insert(req.user);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({message:"Kullanıcılar alınamadı"});
  }
});

router.put('/:id', middleare.validateUserId, middleare.validateUser, async (req, res) => {
  // YENİ GÜNCELLENEN USER NESNESİNİ DÖNDÜRÜN
  // user id yi doğrulayan ara yazılım gereklidir
  // ve istek gövdesini doğrulayan bir ara yazılım gereklidir.
  try {
    const updateUsert = await userModel.update(req.params.id, req.body);
    res.json(updateUsert);
  } catch (error) {
    res.status(500).json({message:"Kullanıcı eklenemedi"});
  }
});

router.delete('/:id', middleare.validateUserId, async (req, res) => {
  // SON SİLİNEN USER NESNESİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
  try {
    await userModel.remove(req.params.id);
    res.json(req.user);
  } catch (error) {
    res.status(500).json({message:"Kullanıcı silinemedi"});
  }
});

router.get('/:id/posts', middleare.validateUserId, async (req, res) => {
  // USER POSTLARINI İÇEREN BİR DİZİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
  try {
    const posts = await userModel.getUserPosts(req.params.id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({message:"Kullanıcı gönderisi bulunmadı"});
  }
});

router.post('/:id/posts', middleare.validateUserId, middleare.validatePost, async (req, res) => {
  // YENİ OLUŞTURULAN KULLANICI NESNESİNİ DÖNDÜRÜN
  // user id yi doğrulayan bir ara yazılım gereklidir.
  // ve istek gövdesini doğrulayan bir ara yazılım gereklidir.
  try {
    const newPost = await postModel.insert({user_id:req.params.id, ...req.body});
    res.json(newPost);
  } catch (error) {
    res.status(500).json({message:"Kullanıcı gönderisi bulunmadı"});
  }
});

// routerı dışa aktarmayı unutmayın
module.exports = router;