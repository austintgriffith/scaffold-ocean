# ⌚️ what time is it on optimism

http://whattimeisitonoptimism.surge.sh

> running locally:

```bash
git clone https://github.com/austintgriffith/what-time-is-it-on-optimism
cd what-time-is-it-on-optimism
git checkout what-time-is-it-on-optimism
yarn install
yarn chain
yarn start
yarn deploy
```

> deploy to public network after generating and funding a deployer:

```bash
yarn generate
yarn account
yarn deploy --network optimism
```

> edit the `initialNetwork` in `App.jsx` to your target network.
