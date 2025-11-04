<script lang="ts">
	import { MainLogo } from '$lib/components';
	import { resolve } from '$app/paths';

</script>

<header>
	<div class="container mx-auto">
		<div class="py-6">

			<div class="grid grid-cols-24">
				<div class="col-span-12">
					<MainLogo></MainLogo>
				</div>
				<div class="col-span-12">
					<div class="pt-10">
						<div class="flex gap-3">
							<a class="styled-link" href={resolve(`/`)}>Home</a>
							<a class="styled-link" href={resolve('/about')}>About</a>
							<a class="styled-link" href={resolve('/contacts')}>Contacts</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</header>