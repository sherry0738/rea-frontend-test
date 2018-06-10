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
