export type Project = {
	name: string;
	tag: string;
	description: string;
	link: string;
};

/** A hand-picked slice of open-source work. The full catalogue lives on GitHub. */
export const projects: Project[] = [
	{
		name: 'GreyDNS',
		tag: 'Kubernetes',
		description: 'Kubernetes DNS management for centralized ingress patterns.',
		link: 'https://github.com/math280h/greydns',
	},
	{
		name: 'safe-pkgs',
		tag: 'Security',
		description: 'Package safety checks to keep your supply chain honest.',
		link: 'https://github.com/math280h/safe-pkgs',
	},
	{
		name: 'Wisp',
		tag: 'Go',
		description: 'A Discord moderation bot written in Go.',
		link: 'https://github.com/math280h/wisp',
	},
	{
		name: 'aws-mq-rabbitmq-exporter',
		tag: 'Observability',
		description: 'AWS MQ RabbitMQ exporter with broker autodiscovery.',
		link: 'https://github.com/math280h/aws-mq-rabbitmq-exporter',
	},
	{
		name: 'terraform-github-action-secrets',
		tag: 'Terraform',
		description: 'Manage secrets across many repositories with Terraform.',
		link: 'https://github.com/math280h/terraform-github-action-secrets',
	},
	{
		name: 'terraform-elastic-cloud-private-link-aws',
		tag: 'Terraform',
		description: 'Elastic Cloud deployments over AWS PrivateLink.',
		link: 'https://github.com/math280h/terraform-elastic-cloud-private-link-aws',
	},
	{
		name: 'redactdump',
		tag: 'Data',
		description: 'Create database dumps with first-class data redaction.',
		link: 'https://github.com/math280h/redactdump',
	},
	{
		name: 'loghandler',
		tag: 'Python',
		description: 'Python logging that fans out to multiple endpoints at once.',
		link: 'https://github.com/math280h/loghandler',
	},
	{
		name: 'Hushbot',
		tag: 'Discord',
		description: 'Text moderation bot for Discord communities.',
		link: 'https://github.com/math280h/hushbot',
	},
	{
		name: 'freeipa-docker',
		tag: 'Identity',
		description: 'Spin FreeIPA servers up and down inside Docker in one script.',
		link: 'https://github.com/math280h/freeipa-docker',
	},
	{
		name: 'quick-serve',
		tag: 'HTTP',
		description: 'A very simple and deliberately limited HTTP server.',
		link: 'https://github.com/math280h/quick-serve',
	},
	{
		name: 'batfu',
		tag: 'Tooling',
		description: 'A tiny .bat obfuscator with zero external packages.',
		link: 'https://github.com/math280h/batfu',
	},
];
