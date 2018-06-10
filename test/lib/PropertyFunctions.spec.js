import {
  checkIfPropertyIsSaved,
  savePropertyToSaved,
  removePropertyFromSaved,
} from '../../lib/PropertyFunctions';

test('checkIfPropertyIsSaved should return true if property is saved before.', () => {
  const startState = {
    saved: [{ id: 2 }],
  };
  const property = { id: 2 };
  checkIfPropertyIsSaved(property, startState.saved);
  expect(startState.saved).toEqual(
    expect.arrayContaining([expect.objectContaining(property)])
  );
});

test('savePropertyToSaved should return a new array which contains the property just added in.', () => {
  const startState = {
    saved: [{ id: 1 }],
  };
  const property = { id: 2 };
  const result = savePropertyToSaved(property, startState.saved);
  expect(result).toEqual(
    expect.arrayContaining([expect.objectContaining(property)])
  );
});

test('removePropertyFromSaved should return a new array which does not contain the property just removed.', () => {
  const startState = {
    saved: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };
  const property = { id: 2 };
  const result = removePropertyFromSaved(property, startState.saved);
  expect(result).toEqual(
    expect.arrayContaining([expect.not.objectContaining(property)])
  );
});
