<script>
	import Project from '../components/project.svelte';
	import Image from '../components/image.svelte';

	import NorwayImages from '../images/norway/index';
	import DenmarkImages from '../images/denmark/index';
	import FranceImages from '../images/france/index';
	import SkyImages from '../images/sky/index';
	import UsImages from '../images/us/index';
	import CanadaImages from '../images/canada/index';

	const CountryImages = [
		{
			country: 'Norway',
			content: NorwayImages
		},
		{
			country: 'Denmark',
			content: DenmarkImages
		},
		{
			country: 'France',
			content: FranceImages
		},
		{
			country: 'US',
			content: UsImages
		},
		{
			country: 'Canada',
			content: CanadaImages
		},
		{
			country: 'Sky',
			content: SkyImages
		}
	];

	const Projects = [
		{
			title: 'aws-mq-rabbitmq-exporter',
			link: 'https://github.com/math280h/aws-mq-rabbitmq-exporter',
			description: 'AWS MQ RabbitMQ Exporter with Broker Autodiscovery'
		},
		{
			title: 'terraform-github-action-secrets',
			link: 'https://github.com/math280h/terraform-github-action-secrets',
			description: 'Easily manage secrets on multiple repositories via terraform'
		},
		{
			title: 'terraform-elastic-cloud-private-link-aws',
			link: 'https://github.com/math280h/terraform-elastic-cloud-private-link-aws',
			description: 'Terraform module for Elastic Cloud deployments using AWS PrivateLink'
		},
		{
			title: 'redactdump',
			link: 'https://github.com/math280h/redactdump',
			description: 'Easily create database dumps with support for redacting data'
		},
		{
			title: 'loghandler',
			link: 'https://github.com/math280h/loghandler',
			description:
				'Logging module for python that supports sending logs to multiple endpoints at once'
		},
		{
			title: 'Hushbot',
			link: 'https://github.com/math280h/hushbot',
			description: 'Text Moderation bot for Discord.'
		},
		{
			title: 'freeipa-docker',
			link: 'https://github.com/math280h/freeipa-docker',
			description: 'Simple script to create and delete freeipa-server inside docker.'
		},
		{
			title: 'quick-serve',
			link: 'https://github.com/math280h/quick-serve',
			description: 'A very simple and limited HTTP Server'
		},
		{
			title: 'batfu',
			link: 'https://github.com/math280h/batfu',
			description: 'Simple .bat obfuscator without any external packages.'
		}
	];
</script>

<div class="bg-primary">
	<div class="w-full mx-auto sm:px-6 h-hero flex justify-center align-middle">
		<div class="text-left w-full max-w-6xl flex justify-center flex-col">
			<h1 class="text-4xl tracking-tight font-extrabold text-white font-semibold font-main">
				Hi, I'm Thias. <br /> <span class="text-gray-400">I scale the unscalable.</span>
			</h1>
			<p class="mt-8 text-lg font-main text-gray-300 sm:mt-8">
				I'm a Sr. DevOps Engineer who likes to work towards <br /> solving the problem of
				scalability, security and maintainability. <br /> I also like to take pictures, some of my personal
				favorites you will find on here
			</p>
			<div class="mt-12">
				<a
					class="transition-all ease-in duration-150 text-gray-300 border-red-400 border py-3 px-10 rounded-md font-main hover:bg-red-400"
					href="https://github.com/math280h"
					target="_blank"
				>
					Find me on GitHub
				</a>
			</div>
		</div>
	</div>
	<div class="max-w-6xl mx-auto" id="projects">
		<div class="border-red-400 border-b w-full pb-2">
			<h2 class="font-main text-gray-200 text-2xl">
				Projects <span class="text-sm">(Some of my favorites, for a full list visit my GitHub)</span
				>
			</h2>
		</div>
		<div>
			<div class="mt-12 mx-auto grid gap-5 lg:grid-cols-3">
				{#each Projects as project}
					<Project title={project.title} link={project.link} description={project.description} />
				{/each}
			</div>
		</div>
	</div>
	<div class="max-w-6xl mx-auto pt-28" id="gallery">
		<div class="border-red-400 border-b w-full pb-2">
			<h2 class="font-main text-gray-200 text-2xl">
				Gallery <span class="text-sm"
					>(Feel free to use my images*, click the images to view the source)</span
				>
			</h2>
			<p class="text-sm text-gray-400">*All images uploaded are uploaded under the MIT License</p>
		</div>
		<div class="pb-20">
			{#each CountryImages as country}
				<div class="mt-12">
					<h3 class="font-main text-red-400">{country.country}</h3>
					<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
						{#each country.content as image}
							<Image link={image} alt="Picture of {country.country}" />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
