import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('user hasn’t searched for any city', () => {

    });

    when('the user opens the app', () => {

    });

    then('the user should see the list of upcoming events.', () => {

    });
  });

  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    given('the main page is open', () => {

    });

    when('the user starts typing in the city textbox', () => {

    });

    then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {

    });
});