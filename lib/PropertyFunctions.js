export const checkIfPropertyIsSaved = function(property, saved) {
  let propIndexAtSaved = saved.findIndex(
    savedProp => savedProp.id === property.id
  );

  if (propIndexAtSaved > -1) {
    return true;
  }
  return false;
};

export const savePropertyToSaved = function(property, saved) {
  saved.push(property);
  return saved;
};

export const removePropertyFromSaved = function(property, saved) {
  const propIndexAtSaved = saved.indexOf(property);
  if (propIndexAtSaved > -1) {
    saved.splice(propIndexAtSaved, 1);
    return saved;
  }
  return saved;
};
