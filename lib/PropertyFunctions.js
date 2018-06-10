export const checkIfPropertyIsSaved = function(property, saved) {
  let propIndexAtSaved = getIndexOfProperty(property, saved);

  if (propIndexAtSaved > -1) {
    return true;
  }
  return false;
};

export const getIndexOfProperty = function(property, properties) {
  const propertyIndex = properties.findIndex(prop => prop.id === property.id);
  return propertyIndex;
};

export const savePropertyToSaved = function(property, saved) {
  if (checkIfPropertyIsSaved(property, saved)) {
    return saved;
  } else {
    saved.push(property);
    return saved;
  }
};

export const removePropertyFromSaved = function(property, saved) {
  if (checkIfPropertyIsSaved(property, saved)) {
    const propIndexAtSaved = getIndexOfProperty(property, saved);
    if (propIndexAtSaved > -1) {
      saved.splice(propIndexAtSaved, 1);
      return saved;
    }
  } else {
    return saved;
  }
};
