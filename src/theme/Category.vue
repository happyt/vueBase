<template>
  <div class="columns">
    <div class="column is-one-third" 
        v-for="(post) in posts" 
        v-bind:key="post.id">
     <app-post :link="post.rest_api_enabler.Link">
         <h3 slot="title" v-html="post.title.rendered"></h3>
         <span slot="content" v-html="post.excerpt.rendered"></span>
     </app-post>
  </div>
</div> 
</template>
<script>
import Post from './Post.vue'
import appService from '../appService'
export default {
  components: {
    'app-post': Post
  },
  data () {
    return {
      id: this.$route.params.id,
      posts: [
      ]
    }
  },
  methods: {
    loadPosts () {
      let categoryId = 2
      if (this.id === 'mobile') {
        categoryId = 11
      }
      appService.getPosts(categoryId).then(data => {
        this.posts = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadPosts()
    }
  },
  created () {
    console.log('page', this.$route.query.page)
    this.loadPosts()
  }
}
</script>
