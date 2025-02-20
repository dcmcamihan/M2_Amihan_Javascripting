function loadUsers(userIds, load, done) {
    let users = new Array(userIds.length);
    let completed = 0;
  
    userIds.forEach((id, index) => {
      load(id, (user) => {
        users[index] = user; 
        completed++;
  
        if (completed === userIds.length) {
          done(users); 
        }
      });
    });
  }
  
  module.exports = loadUsers;