<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Developer Diary - A Gatsby Starter
</h1>

![devDiary](https://dl.dropboxusercontent.com/s/605o40f9b92e9m8/devdiary.jpg?dl=0)

*Developer Diary is a Gatsby Starter blog template created with web developers in mind, but really, anyone can use it. It's totally usable right out of the box, but minimalist enough to be easily modifiable to suit your needs. No matter how much you change it, though, you'll definitely want to make use of the tech tags and developer social media links, and maybe even make some of your own.*<br>
[Developer Diary @Gatsby Starter Library](https://www.gatsbyjs.org/starters/willjw3/gatsby-starter-developer-diary/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ae092d09-ae34-4fc0-8179-322c86d197b4/deploy-status)](https://app.netlify.com/sites/developer-diary/deploys)

## Features
- Ready to go - Blog author name, author image, etc,... can be easily added using a config file.
- Blog posts created as markdown files. It's easy to get started with markdown if you're unfamiliar - [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Gatsby v.2
- React v.16.8.
- Mobile responsive
- Pagination
- Social media sharing icons in each post
- Icons from React Icons (Font Awesome, Devicons, etc,...)
- Beautiful tech-topic tags to attach to your web-development-related blog posts.
- Developer-relevant social media icon links, including GitHub, Stack Overflow, and freeCodeCamp.
- Minimalist design makes it highly modifiable; make your own customized contact forms and search components, for example.

## Getting Started
If you don't have Gatsby CLI installed yet, do that:
```
npm install -g gatsby-cli
```
Install this starter with your name of choice for your blog:
```
gatsby new your-blog-name https://github.com/willjw3/gatsby-starter-developer-diary.git
```
Navigate into your new project's directory:
```
cd your-blog-name
```
and run the development server:
```
gatsby develop
```
Go to [http://localhost:8000](http://localhost:8000) to see your new blog.

## Adding Your Information To The Blog
You can add your blog's url, title, tagline, author, social-media contact info and more in the `config.js` file. You'll also find the props for the tech tags in `config.js`. You'll see that all of this information is used as metadata in the `gatsby-config.js` file.
Things to keep in mind when editing `config.js`
- Don't add a trailing slash to your url. For example `https://mysite.com`, not `https://mysite.com/`
- The social media urls you provide for your social-media accounts (GitHub, Stack Overflow, etc,...) will make it so that clicking the corresponding social media icons will take you to your account pages.<br>

To add your profile image to the blog, add your image file to `src/images`, then import the file into both `src/components/sidebar/Bio.js` and `src/components/header/MobileBio.js`

## Adding Blog Posts
Using your favorite text editor, go into your project's directory and find the `content` folder. In that folder, you'll find the `blog` folder. In the `blog` folder, add a new folder with your new blog post's name in mind. For example, if your post were to be called "Make a Blog With Gatsby", you might want to create the folder `content/blog/make-blog-with-gatsby` <br>

In that newly created folder, add a markdown file called `index.md` (All of your posts will have their content in files called `index.md`).<br>

Add the frontmatter to that markdown file:
```
---
title: 'Make a Blog With React'
tags: ["react", "nodejs"]
published: true
date: '2019-05-29'
---
```
and then add the rest of your content below the frontmatter.

## Making Tech Tags
This starter already includes the tech tags you can see in the live demo. To use them, add the appropriate tag name to the `tags` array in the frontmatter of your post. Consult the `config.js` file to see the tag properties and get the tag name to be supplied to the `tags` array in the frontmatter.<br>
To make a new tag, you can use icons from "React Icons", which are included in this starter. If you're the adventurous type, you can install and use other icons if you wish to do so. This starter uses both 'Font Awesome' icons and 'Devicons' from "React Icons." [React Icons Site](https://react-icons.netlify.com/#/)

## Authors
- Will Ward [@willjw3](https://github.com/willjw3)

## Contribute
- Fork the repo
- Create your feature branch (git checkout -b feature/fooBar)
- Commit your changes (git commit -am 'Add some fooBar')
- Push to the branch (git push origin feature/fooBar)
- Create a new Pull Request


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
