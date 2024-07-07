module.exports = {
  async up(db, client) {
    // `firstname` alanını ekle ve default değerini `null` yap
    await db.collection('users').updateMany({}, { $set: { firstname: null } });
  },

  async down(db, client) {
    // `firstname` alanını kaldır
    await db.collection('users').updateMany({}, { $unset: { firstname: '' } });
  }
};
