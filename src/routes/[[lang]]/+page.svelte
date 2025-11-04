<script lang="ts">
	import { resolve } from "$app/paths";
	console.log("Start");
</script>

<div class="mx-auto container">
	<div class="text-center">
		<div class="hero">
			<div class="hero-content">
				<img src="/img/logo.svg" alt="">
				<img src="/img/cover_main.jpg" alt="" class="cover-image">
				<a href={resolve("/products")} style="text-align: left">Products</a>
			</div>
		</div>
	</div>
</div>

<style>
  .hero {
    height: 100vh;
    display: flex;
  }

  .hero-content {
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .cover-image {
    width: 180px;
    text-align: center;
    margin-left: 1.5rem;
  }
</style>
