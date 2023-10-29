# FErN 🌿

FErN is a template to create websites, it uses (F)lowbite, (E)leventy and (N)etlify, and a few other things; use it to create awesome websites.

[View on Netlify](https://fern.netlify.app/)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nimblestart/fern)

## Goal

While learning how to use Eleventy, I came across [a few starter projects](https://www.11ty.dev/docs/starter/), which are _amazing_, but none of gave me complete package to build out a site quickly.

So, I made this.

## Frameworks Used
- [Eleventy](https://www.11ty.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Decap (formerly known as Netlify CMS)](https://decapcms.org/)

## 11ty Starters referenced

- [marcamos/jet](https://github.com/marcamos/jet)
- [danurbanowicz/eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate)
- [mesinkasir/eleventyblog](https://github.com/mesinkasir/eleventyblog)

## How you can use it

1. [Create your own new repo from FErN’s template](https://github.com/nimblestart/fern/generate), or [clone this one](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
2. Install dependencies: `npm i`
3. Start development: `npm run dev`
4. Visit http://localhost:8080 to see your work-in-progress
5. Do super-fun Eleventy and Tailwind things
6. When you’re done: `npm run build`
7. Host your project somewhere ([Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/) are nice options)

## Deacp (*formerly* Netlify) CMS configuration
- Please refer to [Configuration Options](https://decapcms.org/docs/configuration-options/) present in the Decap website
- Please run "npx netlify-cms-proxy-server" for local backend

## Contribution
If you try it and find issues, or think of improvements, please [file an issue](https://github.com/nimblestart/fern/issues/new) and/or [create a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contribution
- Image paths need to be fixed for CMS files
- Add more details in readme on CMS config steps