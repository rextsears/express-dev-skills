const skills = [
  { id: 1, skill: "coding", level: "expert" },
  { id: 2, skill: "debugging", level: "intermediate" },
  { id: 3, skill: "algorithms", level: "advanced" },
  { id: 4, skill: "database design", level: "proficient" },
  { id: 5, skill: "system architecture", level: "expert" },
  { id: 6, skill: "web development", level: "proficient" },
  { id: 7, skill: "version control (Git)", level: "advanced" },
  { id: 8, skill: "testing", level: "intermediate" },
  { id: 9, skill: "cloud computing (AWS)", level: "proficient" },
  { id: 10, skill: "mobile app development", level: "advanced" },
  { id: 11, skill: "UI/UX design", level: "intermediate" },
  { id: 12, skill: "security best practices", level: "expert" },
  { id: 13, skill: "agile methodologies", level: "proficient" },
  { id: 14, skill: "continuous integration/continuous deployment", level: "advanced" },
  { id: 15, skill: "machine learning", level: "intermediate" },
  { id: 16, skill: "containerization", level: "proficient" }
  ];

  function getAll() {
    return skills;
  };

  module.exports = {
    getAll,
   // getOne,
    create
  };
      
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = "beginner";
    skills.push(skill);
  };
	
