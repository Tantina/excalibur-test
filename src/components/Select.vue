<template>
	<div class="ui-select">
		<label class="ui-select__label" :for="id">{{ label }}</label>
		<select class="ui-select__select" :id="id" :name="name" :disabled="disabled">
			<option v-for="option in options" :key="option">{{ option }}</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'ui-select',
	props: {
		id: String,
		name: String,
		options: {
			type: Array,
			default() {
				return []
			}
		},
		label: String,
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return [
				{ 'is-disabled': this.disabled },
				{ 'has-label': this.hasLabel }
			]
		},
		hasLabel() {
			return Boolean(this.label)
		}
	}
}
</script>

<style>
@import './../styles/components/select.scss';
</style>


