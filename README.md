# 🛰 Space Loogies on Optimism 🚀

I think these ships will fly smoothly once optimism has live timestamps 

live demo: http://spaceloogies.surge.sh

![image](https://user-images.githubusercontent.com/2653167/151482371-ab22db92-1639-4e67-b645-70fa22b549b5.png)

> a scaffold eth build to show movement on-chain

> `launch()` ships that move at a -dx/-dy.

live example: http://scaffoldSpace.surge.sh

> running locally:

```bash
git clone https://github.com/austintgriffith/scaffold-Space
cd scaffold-Space
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
