# Intent of this repository
This code repository contains the source code to boostrap the upcoming YEPS (Young Entrepreneur of Profession Summit) for CYPA (Chinese Young Professional Association). It is intended as one-stop shop for the source code, build, and deployment.

## Table of Contents

- [Local development and build](#local-development-and-build)
- [Design Principle](#design-principle)
- [Quality Assurance](#quality-assurance)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)

### Local Development and build

>Note: It assumes you have the npm dependency on local development environment. If not, please install first.

>For your reference, below is my local development environment setup:

<p align='center'>
<img src='https://github.com/jsy1218/jsy1218.github.io/blob/master/cypa-yeps-website/Apple%20Spec.png' width='600' alt='npm start'>
</p>

<p align='center'>
<img src='https://github.com/jsy1218/jsy1218.github.io/blob/master/cypa-yeps-website/Dependencies%20Spec.png' width='600' alt='npm start'>
</p>

In the project directory, you can run:

### `npm install`

This pulls all the specified dependencies from `package.json` into your local machine, so that you can bootstrap a site locally.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Design Principle

The design principle for this website is **mobile first**. Based on the past event-hosting experience with CYPA, we expect 80+% percent of the visiting traffic will be from the mobile, especially through the [Wechat](https://www.wechat.com/en/) app, which again renders the mobile view.

As such, we target the user with browser view and mobile view. Here we do not consider tablet view first class, although tablet-wide responsiveness should also be considered. For mobile view, we are targeting <= 600px. For browser view, we are targeting >= 1440px.

As per **mobile first**, we are implementing the website for mobile rendering first. We can build browser view on top of what we have already.

### Quality Assurance

#### min bar

The deployed website (e.g. [Github site](https://jsy1218.github.io/cypa-yeps-website/)) MUST pass the [Google mobile Friendly Test](https://search.google.com/test/mobile-friendly)

#### quality bar
The deployed website (e.g. [Github site](https://jsy1218.github.io/cypa-yeps-website/)) needs to look asethetic on the [Multi-device screen simulator website](https://www.responsinator.com/). This is subject to the implementer's discretion, since there is no hard line in this quality bar. However, any out-of-the-line HTML rendering (e.g. cannot fix the screen) should fail to meet the quality bar.

### Deployment

#### GitHub Pages

>Note: this feature is available with `react-scripts@0.2.0` and higher.

>Note: For custom domain deployment, it assumes that the domain has been purchased with the DNS provider. Currently, http://www.globalcypa.org/ is the primary full qualified domain name, and we plan to register secondary domain name on top of it, e.g. http://yeps.globalcypa.org/

>Note: If you want to test with remote server instead of local, but do not want to deploy to Production directly, it is recommended to folk from this branch, and create a github site under your own user name.

##### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field for your project. Currently the homepage does not use the secondary qualified domain name, (although not registered yet). However, once registered, it is:

```json
  "homepage": "http://yeps.globalcypa.org/",
```

, along with `CNAME` file "http://yeps.globalcypa.org/" to the `public/` folder.

Although you can also put the github site. For test server deployment, I put

```json
  "homepage": "https://jsy1218.github.io/cypa-yeps-website/",
```

`CNAME` does not matter, since the github site has its own Domain name.

##### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json` (needed for github site deployment)

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

##### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

