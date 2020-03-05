module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false;
  return members.filter(e => typeof e == 'string').map(e => e.trim()[0].toUpperCase()).sort().reduce((name, current) => name + current, '');
};