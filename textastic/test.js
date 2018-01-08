Vue.component('scoreblock', {
  template:
'    <div class="card">
      <div class="card-content">
        <div class="media">
 
          <div class="media-left">
              <figure class="image is-48x48">
                 <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                 </image>
              </figure>
           </div>
           <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">England</p>
           </div>
           <span class="icon is-large">
              <i class="fa fa-search"></i>
           </span>
 
        </div>
        <div class="content">
          <div class="bigdigits" id="scoreA">12</div>
        </div>
      </div>
     </div>'
})