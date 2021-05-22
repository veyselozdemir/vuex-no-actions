# No-Actions Vuex Example

A sample project to demonstrate the idea here: https://ozdemirv.medium.com/stop-using-actions-in-vuex-a14e23a7b0e6

In a nutshell, a Vue app that uses Vuex for state management but no `action` methods.

The business logic is in plain old functions and store is used only for data storage and retrieval.

## Prerequisites

The app is a movie search app and uses tmdb api.
You'll need a tmdb account to run it. It's easy and free: https://www.themoviedb.org/signup

Once you sign up, get your access token and update the `accessToken` variable in [tmdb-client.ts](./src/apiClients/tmdb-client.ts)

## Command Reference

```
# Install npm packages
npm install

# Run
npm run serve

# Run unit tests
npm run test:unit

# Run e2e (cypress) tests
npm run test:e2e
```

## Customize configuration

App is created with vue cli. [Configuration Reference](https://cli.vuejs.org/config/).
