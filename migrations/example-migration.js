module.exports = {
  async up(db, client) {
    await db.collection('users').updateMany({}, { $set: { role: 'fatih' } });
  },

  async down(db, client) {
    await db.collection('users').updateMany({}, { $set: { role: '' } });
  }
};
