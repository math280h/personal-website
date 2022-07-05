<script lang="ts">
	export let title: string;
	export let description: string;
	export let link: string;
</script>

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
	<div class="flex-1 group bg-gray-900 p-6 flex flex-col justify-between">
		<div class="flex-1">
			<a href={link} target="_blank" class="block mt-2">
				<p
					class="transition-all ease-in duration-150 group-hover:text-red-400 text-xl font-semibold text-gray-200 font-main"
				>
					{title}
				</p>
				<p class="mt-3 text-base text-gray-400 font-main text-sm">
					{description}
				</p>
			</a>
		</div>
	</div>
</div>
