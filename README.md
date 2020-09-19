<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://avatars3.githubusercontent.com/u/12551863?s=400&v=4" width="60" />
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
- Includes Netlify CMS. Users can log in to an admin page and easily create a blog post with a nice, simple user interface.
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
Go to the [http://localhost:8000](http://localhost:8000) to see your new blog.<br>
Go to [http://localhost:8000/___graphql](http://localhost:8000/___graphql) to explore your site with a simple GraphQL interface.<br>
Go to the [http://localhost:8000/admin/](http://localhost:8000/admin/) to access the content management system. (Make sure you've set things up with Netlify CMS first - see "Adding blog posts using Netlify CMS (Content Management System)" below)

## Adding Your Information To The Blog
You can add your blog's url, title, tagline, author, social-media contact info and more in the `config.js` file. You'll also find the props for the tech tags in `config.js`. You'll see that all of this information is used as metadata in the `gatsby-config.js` file.
Things to keep in mind when editing `config.js`
- Don't add a trailing slash to your url. For example `https://mysite.com`, not `https://mysite.com/`
- The social media urls you provide for your social-media accounts (GitHub, Stack Overflow, etc,...) will make it so that clicking the corresponding social media icons will take you to your account pages.<br>

To add your profile image to the blog, add your image file to `src/images`, then import the file into both `src/components/sidebar/Bio.js` and `src/components/header/MobileBio.js`

## Adding blog posts using Netlify CMS (Content Management System)
If you aren't familiar with Netlify CMS, the first thing you'll want to do is familiarize yourself with it. [Netlify CMS](https://www.netlifycms.org/)<br>
*Note: It's recommended that you deploy your site with Netlify. Netlify hosting and Netlify CMS are separate, but work best when used together.*<br>
Both the `gatsby-plugin-netlify-cms` plugin and the `netlify-cms-app` are already installed in your blog. All you need to do is set up your site for continuous deployment with a platform like [Netlify](https://www.netlify.com/) and connect Netlify CMS to your GitHub (if you're using GitHub) repository by doing the following:<br>

(From the Netlify CMS docs)
> Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site without requiring them to have an account with your Git host or commit access on your repo. From your site dashboard on Netlify:

> Go to Settings > Identity, and select Enable Identity service.
Under Registration preferences, select Open or Invite only. In most cases, you want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.
If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under External providers.
Scroll down to Services > Git Gateway, and click Enable Git Gateway. This authenticates with your Git host and generates an API access token. In this case, we're leaving the Roles field blank, which means any logged in user may access the CMS. For information on changing this, check the Netlify Identity documentation.

**Creating Blog Posts with the CMS**
- Go to `<your site's url>/admin` and log in.
- Fill in the fields:
  - TAGS: enter in tag names separated by commas and spaces. Ex: `gatsby, graphql`
  - PUBLISHED: toggle the switch to the on position. This is the same as setting the frontmatter field manually (`published: true`)
  - DATE: leave the current date and time, or click to bring up the date picker.
  - TITLE: enter your post's title. Ex: `My First Post`
  - BODY: enter your post's main body content, either in Markdown or in Rich Text.
- Click 'Publish'


## Adding Blog Posts Manually
Using your favorite text editor, go into your project's directory and find the `posts` folder. In that folder, add a new markdown file with your new blog post's name in mind. For example, if your post were to be called "Make a Blog With Gatsby", you might want to create the file `make-blog-with-gatsby.md` <br>

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
<br>

## Making Tech Tags
This starter already includes the tech tags you can see in the live demo. To use them, add the appropriate tag name to the `tags` array in the frontmatter of your post. Consult the `config.js` file to see the tag properties and get the tag name to be supplied to the `tags` array in the frontmatter.<br>
To make a new tag, create a new "label" in `config.js`, find a suitable svg icon, and paste the svg path in as the value for the "name" property of the label. Have a look at the existing labels in the `config.js` file and all should soon be clear. A good place to look for svg icons is at [simple icons](https://simpleicons.org/). 

## Author
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
