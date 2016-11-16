# dev-opinions
A social media website for developers to post their opinions within an organisation.

# Project Setup

- Clone the repo and cd into the repo.
- Run 'npm install'
- Run 'bower update'
- Ensure you have a local mongodb setup (You can set it up here - [mongodb setup](https://docs.mongodb.com/manual/installation/?jmp=footer))
- Run the mongodb instance - 'mongod' (This should start the instance on the default port: 27017)
- On a separate terminal, inside the dev-opinions repo, run 'node server.js'
- Open a browser and load 'localhost:8080'

# What is does?

- This website acts as a news feed and let's users post messages/news.
- The website always does a live update and shows the user the latest news/messages.

## How to simulate the multiple users?

- Since everything runs locally, you can simulate multiple users by opening separate browser tabs (it keeps track of the browser session and assigns a unique user id for each session).
- Now when a user posts messages, the other users get a live update of the news/message.
