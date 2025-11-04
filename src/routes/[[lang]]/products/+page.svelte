<script lang="ts">

  let { data } = $props();

  $effect(() => {
    console.log(data);
  })

</script>

<h1>Products</h1>