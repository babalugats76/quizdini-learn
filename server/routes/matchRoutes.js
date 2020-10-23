const mongoose = require('mongoose');
const Match = mongoose.model('matches');

module.exports = (app, memcache) => {
  app.get('/api/matches', async (req, res, next) => {
    try {
      const matches = await Match.aggregate([
        /*{ $match: { user_id: mongoose.Types.ObjectId(req.user.id) } },*/
        { $addFields: { termCount: { $size: '$matches' } } },
        { $unset: ['user_id', 'matches', '__v'] },
        { $sort: { updateDate: -1 } },
        { $project: { _id: false } },
      ]);
      if (!matches) return res.send([]); // Return empty array to signify not found
      res.send(matches);
    } catch (e) {
      next(e);
    }
  });

  app.get('/api/match/:id', async (req, res, next) => {
    try {
      // throw new Error('Testing match error...');

      // Lookup game in cache; if found, return...
      const gameKey = `m-${req.params.id}`;
      const cached = await memcache.get(gameKey);
      if (cached) return res.send(cached);

      // Otherwise, fetch data from database
      let match = await Match.findOne({
        matchId: req.params.id,
      }).populate('user_id', 'title firstName lastName author', 'users');
      if (!match) return res.send({}); // empty object signifies not found
      match = match.toJSON(); // convert to POJO
      match.author = match.user_id.author; // map author
      delete match.user_id; // remove populated user object

      // Write game data to cache
      memcache.set(gameKey, match);

      res.send(match);
    } catch (e) {
      next(e);
    }
  });
};
