<script lang="ts">
	export let link: string;
	export let alt: string;
</script>

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
	<div class="flex-shrink-0">
		<a href={link} target="_blank">
			<img class="h-48 w-full object-cover" src={link} {alt} />
		</a>
	</div>
</div>
