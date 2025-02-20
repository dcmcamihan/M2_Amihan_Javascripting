function getDependencies(tree, collected = new Set()) {
    if (!tree || !tree.dependencies) return Array.from(collected).sort();
  
    Object.keys(tree.dependencies).forEach((key) => {
      let dep = tree.dependencies[key];
      let depString = `${key}@${dep.version}`;
  
      collected.add(depString); 
      getDependencies(dep, collected); 
    });
  
    return Array.from(collected).sort(); 
  }
  
  module.exports = getDependencies;