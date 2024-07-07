module.exports = {
  async up(db, client) {
    await db.collection('products').updateMany({}, { $set: { status: 'available' } });
  },

  async down(db, client) {
    await db.collection('products').updateMany({}, { $unset: { status: '' } });
  }
};
