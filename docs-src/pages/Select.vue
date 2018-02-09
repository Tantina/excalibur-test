<template>
	<div>
		<header-page title="Alert">
			The
			<pre>ui-select</pre>
			component renders a standard select.
		</header-page>
		<div class="docs-content__page d-page">
			<div class="d-page__section">
				<h4 class="d-page__header">Select type</h4>
				<div class="d-page__example">
					<ui-select>This is the default alert.</ui-select>

				</div>

			</div>
		</div>
	</div>
</template>

<script>
import Prism from 'vue-prism-component'
import HeaderPage from '../layouts/HeaderPage'
import UiSelect from '@/components/Select'

export default {
	name: 'Select',
	components: {
		Prism,
		HeaderPage,
		UiSelect
	}
}
</script>
