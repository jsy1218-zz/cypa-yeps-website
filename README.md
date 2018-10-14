# Intent of this repository
This code repository contains the source code to boostrap the upcoming YEPS (Young Entrepreneur of Profession Summit) for CYPA (Chinese Young Professional Association). It is intended as one-stop shop for the source code, build, and deployment.

## Table of Contents

- [Local development and build](#local-development-and-build)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)

### Local Development and build

>Note: It assumes you have the npm dependency on local development environment. If not, please install first

In the project directory, you can run:

### `npm install`

This pulls all the specified dependencies from `package.json` into your local machine, so that you can bootstrap a site locally.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### GitHub Pages

>Note: this feature is available with `react-scripts@0.2.0` and higher.

>Note: For custom domain deployment, it assumes that the domain has been purchased with the DNS provider. Currently, www.yeps-seattle.com is not purchased yet.

>Note: If you want to test with remote server instead of local, but do not want to deploy to Production directly, it is recommended to folk from this branch, and create a github site under your own user name.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field for your project. Currently the homepage has a custom full qualified domain name. Currently it is:

```json
  "homepage": "https://www.yeps-seattle.com/",
```

, along with `CNAME` file "www.yeps-seattle.com" to the `public/` folder.

Although you can also put the github site. For test server deployment, I put

```json
  "homepage": "https://jsy1218.github.io/cypa-yeps-website/",
```

`CNAME` does not matter, since the github site has its own Domain name.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json` (needed for github site deployment)

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save gh-pages
```

Alternatively you may use `yarn`:

```sh
yarn add gh-pages
```

Add the following scripts in your `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The `predeploy` script will run automatically before `deploy` is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make two
additional modifications:

1. First, change your repository's source branch to be any branch other than **master**.
1. Additionally, tweak your `package.json` scripts to push deployments to **master**:
```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

