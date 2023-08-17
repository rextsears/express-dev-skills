const Skills = require('../models/skills');
	
function index(req, res) {
    res.render('../views/skills/index', {
      skills: Skills.getAll()
    });
};

module.exports = {
    index,
    new: newSkill,
    create
};
	
function create(req, res) {
  console.log(req.body);
  Skills.create(req.body);
  res.redirect('/skills');
};
      
  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  };