---
title: The RSS Feed
date: 2020-04-21
published: true

keywords:
- blog
- rss
- feed

---

While I'm still working through getting this site fully up and running, I decided to add an RSS feed to the blog portion. The feed can be found [here](/feeds/rss.xml), and will have the fifteen most recent posts in it.

It was pretty simple to set up following [the guide in Gatsby's documentation](https://www.gatsbyjs.org/docs/adding-an-rss-feed/), only needing a few small modifications to the GraphQL query that it uses to pull data from the posts. The setup can be found in the `gatsby-config.js` file in this site's source, located [here](https://github.com/PenguinSnail/noahpiraino.codes/blob/master/gatsby-config.js).