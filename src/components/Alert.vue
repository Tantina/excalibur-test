<template>
	<div class="ui-alert" :class="classes" role="alert">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'ui-alert',
	props: {
		type: {
			type: String,
			default: 'info' // 'info', 'success', 'warning', or 'error'
		}
	},
	computed: {
		classes() {
			return [`ui-alert--type-${this.type}`]
		}
	}
}
</script>

<style>
@import './../styles/components/alert.scss';
</style>
