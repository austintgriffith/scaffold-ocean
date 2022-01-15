# 🌊 Scaffold Ocean

> a scaffold eth build to show movement on-chain

> The `owner` can `launch()` ships that move at a dx/dy.

![image](https://user-images.githubusercontent.com/2653167/149636948-748df47e-44ec-4e57-98ac-d1a833a4da9e.png)

live example: http://scaffoldocean.surge.sh

> running locally:

```bash
git clone https://github.com/austintgriffith/scaffold-ocean
cd scaffold-ocean
yarn install
yarn chain
yarn start
yarn deploy
```


> deploy to public network after generating and funding a deployer:

```bash
yarn generate
yarn account
yarn deploy --network kovan
```

> edit the `initialNetwork` in `App.jsx` to your target network.
