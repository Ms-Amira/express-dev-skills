const skills = [
    {id: 3459, skill: 'Rock Climbing', acquired: 'Still Learning'},
    {id: 8943, skill: 'Skiing', acquired: 'Still Learning'},
    {id: 9034, skill: 'Surfing', acquired: 'Skill Acquired'},
    {id: 2340, skill: 'Roller Skating', acquired: 'Skill Acquired'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
	skills.splice(idx, 1); 
}

function getAll() {
    return skills;
}
function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.acquired = 'Still Learning'
    skills.push(skill);
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}