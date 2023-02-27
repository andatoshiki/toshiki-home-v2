<script setup lang="ts">
import Featured from '@/assets/featured-image.jpg'
import Profile from '@/assets/avatar.png'
import IconArrow from '~icons/feather/arrow-left'
import { store } from '@/store'

definePageMeta({
	pageTransition: {
		name: 'fade',
		mode: 'out-in',
	},
})

const { setMeta } = useCustomMeta()
setMeta('Blogs 📒 - Toshiki ')
</script>

<template>
	<section class="mobile">
		<h1 class="font-bold text-5xl md:text-7xl text-center font-space">Blog</h1>
		<div>
			<div class="p-2">
				<NuxtLink
					to="/project"
					class="inline-flex items-center text-base bg-transparent text-warm-gray-400 dark:text-light-900 group"
				>
					<IconArrow class="w-4 h-4 duration transition-all mr-2 group-hover:mr-3" /> Back
				</NuxtLink>
				<img class="mt-4 rounded-3xl md:rounded-4xl" :src="Featured" alt="Featured Image" />
				<h3 class="mt-6 md:mt-12 text-4xl md:text-6xl font-bold font-space tracking-tight">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</h3>
				<div class="mt-4 flex items-center">
					<img class="w-14 h-14 rounded-2xl" :src="Profile" alt="data.data.user.name" />
					<div class="ml-4">
						<p>Anda Toshiki</p>
						<p>Published on 2/15/2023</p>
					</div>
				</div>
			</div>

			<article
				ref="article"
				class="p-6 md:p-10 my-12 prose-sm md:prose-lg bg-white dark:bg-dark-900 bg-opacity-75 shadow-inset-white dark:shadow-none rounded-3xl"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Mollis nunc sed id semper risus in. Diam sit amet nisl suscipit adipiscing bibendum est ultricies.
				Congue quisque egestas diam in. Nibh tellus molestie nunc non blandit massa. Vel quam elementum pulvinar etiam
				non quam lacus. Scelerisque eu ultrices vitae auctor eu. Netus et malesuada fames ac turpis egestas. Maecenas
				volutpat blandit aliquam etiam erat velit. Varius morbi enim nunc faucibus a pellentesque sit amet.
			</article>

			<div class="flex justify-center mb-12">
				<a class="button-next text-center" href="data.data.url + '#comments'" target="_blank"> Read more ... </a>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.prose-lg img {
	@apply rounded-2xl;
}
.highlight__panel-action {
	@apply hidden;
}
pre {
	@apply bg-light-400 dark:bg-dark-700 !rounded-2xl overflow-x-auto;
}
.ltag__twitter-tweet,
.ltag-github-readme-tag {
	@apply mx-auto max-w-500px rounded-2xl overflow-hidden !pl-0 text-dark-800 bg-light-200 dark:bg-dark-600 dark:text-light-900 text-base;
	& img,
	h2 {
		@apply !my-0 !text-xl;
	}
	h3 {
		@apply mt-2 !my-0 !text-base !font-normal;
	}
}
.ltag__twitter-tweet__main {
	@apply cursor-pointer;
}
.ltag__twitter-tweet__main,
.ltag-github-readme-tag {
	@apply !p-4 !md:p-12;
}
.ltag__twitter-tweet__header {
	@apply relative h-20;
}
.ltag__twitter-tweet__profile-image {
	@apply absolute left-0 top-0;
}
.ltag__twitter-tweet__full-name {
	@apply absolute left-16 top-1;
}
.ltag__twitter-tweet__username {
	@apply absolute left-16 top-7 text-sm;
}
.ltag__twitter-tweet__twitter-logo {
	@apply absolute right-0 top-4;
}
.ltag__twitter-tweet__date {
	@apply text-sm text-dark-50 py-0.5;
}
.ltag__twitter-tweet__actions {
	@apply flex space-x-8 mt-1;
}
.readme-overview {
	h2 {
		@apply flex items-center;
		& a {
			@apply mx-2;
		}
		& img {
			@apply filter dark:invert-100;
		}
	}
}
.ltag-github-body {
	@apply max-h-96 relative overflow-hidden;
}
.ltag-github-body:after {
	@apply content-[''] absolute z-1 bottom-0 left-0 pointer-events-none w-full h-28 bg-fade-white dark:bg-fade-dark;
}
.gh-btn-container {
	@apply flex justify-center;
	& .gh-btn {
		@apply !text-white;
	}
}

.tag {
	@apply px-1 md:py-1 rounded-xl text-sm opacity-50;
}
</style>
