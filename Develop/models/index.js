const User = require('./User')
const Post = require('./Post')
const Comments = require('./Comments')



// Define associations
Post.hasMany(Comments, {
    foreignKey: 'blogPostId',
    as: 'comments',
    onDelete: 'CASCADE'
  });
  
Comments.belongsTo(Post, {
    foreignKey: 'blogPostId',
    as: 'blogPost'
  });

module.exports = { User, Post, Comments}