const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { paginate } = require('gatsby-awesome-pagination')

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPost } = result.data

  const postTemplate = path.resolve(`./src/templates/BlogPost.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  paginate({
    createPage, // The Gatsby `createPage` function
    items: allWordpressPost.edges, // An array of objects
    itemsPerPage: 8, // How many items you want per page
    pathPrefix: '/blogs', // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve('src/templates/Blogs.js'), // Just like `createPage()`
  })
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
