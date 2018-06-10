import {
  checkIfPropertyIsSaved,
  savePropertyToSaved,
  removePropertyFromSaved,
  getIndexOfProperty,
} from '../../lib/PropertyFunctions';

test('checkIfPropertyIsSaved, if property is saved, then it should return true.', () => {
  const startState = {
    saved: [{ id: 2 }],
  };
  const property = { id: 2 };
  const result = checkIfPropertyIsSaved(property, startState.saved);
  expect(result).toBeTruthy();
});

test('checkIfPropertyIsSaved, if property is not saved, then it should return false.', () => {
  const startState = {
    saved: [{ id: 2 }],
  };
  const property = { id: 1 };
  const result = checkIfPropertyIsSaved(property, startState.saved);
  expect(result).toBeFalsy();
});

test('savePropertyToSaved if property was not in saved properties list, then it should return a array contains newly added property', () => {
  const startState = {
    saved: [{ id: 1 }],
  };
  const property = { id: 2 };
  const result = savePropertyToSaved(property, startState.saved);
  expect(result).toEqual(
    expect.arrayContaining([expect.objectContaining(property)])
  );
  expect(result.length).toEqual(2);
});

test('savePropertyToSaved if property was already in saved properties list, then it should return a array with same contents', () => {
  const startState = {
    saved: [{ id: 1 }],
  };
  const property = { id: 1 };
  const result = savePropertyToSaved(property, startState.saved);
  expect(result).toEqual(
    expect.arrayContaining([expect.objectContaining(property)])
  );
  expect(result.length).toEqual(1);
});

test('removePropertyFromSaved if property is in saved properties list, then the property should be removed from saved properties.', () => {
  const startState = {
    saved: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };
  const property = { id: 2 };
  const result = removePropertyFromSaved(property, startState.saved);
  expect(result).toEqual(
    expect.arrayContaining([expect.not.objectContaining(property)])
  );
  expect(result.length).toEqual(2);
});

test('removePropertyFromSaved if property is in saved properties list, then the property should be removed from saved properties.', () => {
  const startState = {
    saved: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };
  const property = { id: 4 };
  const result = removePropertyFromSaved(property, startState.saved);
  expect(result).toEqual(
    expect.arrayContaining([expect.not.objectContaining(property)])
  );
  expect(result.length).toEqual(3);
});

test('getIndexOfProperty if property is in the property array, then it should return the index', () => {
  const startState = {
    saved: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };
  const property = { id: 1 };
  const result = getIndexOfProperty(property, startState.saved);
  expect(result).toEqual(0);
});

test('getIndexOfProperty if property is not in the property array, then it should return -1', () => {
  const startState = {
    saved: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };
  const property = { id: 4 };
  const result = getIndexOfProperty(property, startState.saved);
  expect(result).toEqual(-1);
});
