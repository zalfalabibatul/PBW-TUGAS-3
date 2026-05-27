var DataService = {
  fetchUsers: function() {
    return fetch('data/user.json')
      .then(function(r) { return r.json(); })
      .catch(function() {
        return { users: [] };
      });
  },

  fetchData: function() {
    return fetch('data/databahanAjar.json')
      .then(function(r) { return r.json(); })
      .catch(function() { return null; });
  }
};
