const Skills = require('../models/skills');
	
function index(req, res) {
    res.render('../views/skills/index', {
      skills: Skills.getAll()
    });
};

  module.exports = {
    index
  };