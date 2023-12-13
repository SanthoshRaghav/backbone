// // Define a Model for Post
// var Post = Backbone.Model.extend({
//   defaults: {
//     userId: "",
//     id: "",
//     title: "",
//     body: "",
//   },
// });

// // Define a Collection for Posts
// var PostsCollection = Backbone.Collection.extend({
//   model: Post,
//   url: "https://jsonplaceholder.typicode.com/posts",
// });

// // Define a View for a single Post
// var PostView = Backbone.View.extend({
//   tagName: "div",
//   className: "post",
//   template: _.template($("#post-template").html()),

//   render: function () {
//     this.$el.html(this.template(this.model.toJSON()));
//     return this;
//   },
// });

// // Define a View for all Posts
// var PostsView = Backbone.View.extend({
//   el: "#posts-container",

//   initialize: function () {
//     this.collection = new PostsCollection();
//     this.listenTo(this.collection, "sync", this.render);
//     this.collection.fetch();
//   },

//   render: function () {
//     var self = this;
//     this.collection.each(function (post) {
//       var postView = new PostView({ model: post });
//       self.$el.append(postView.render().el);
//     });
//     return this;
//   },
// });

// // Initialize the PostsView
// var postsView = new PostsView();

var Team = Backbone.Model.extend({
  initialize: function () {
    console.log("Instantiated");
  },
});

var team = new Team({
  defaults: {
    name: "shivaji",
    name: "yawar",
  },
});
team.set({ name: "prashanth" });

console.log(
  "%cteam",
  "color: black; background: #76b852; font-size: 18px",
  team
);
