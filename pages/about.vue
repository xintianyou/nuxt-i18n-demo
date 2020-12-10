<template>
	<div>
		{{ $t('about') }}
		<p>{{ $t('date', { date: $d(new Date(), 'long') }) }}</p>
		<nuxt-link :to="localePath('index')">{{ $t('goBack') }}</nuxt-link>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	
</style>