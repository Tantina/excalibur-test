<template>
	<div>
		<header-page title="Alert">
			The
			<pre>ui-alert</pre>
			component renders a standard alert.
		</header-page>
		<div class="docs-content__page d-page">
			<div class="d-page__section">
				<h4 class="d-page__header">Alert type</h4>
				<div class="d-page__example">
					<ui-alert type="info">This is the default alert.</ui-alert>
					<ui-alert type="success">This is the success alert.</ui-alert>
					<ui-alert type="warning">This is the warning alert.</ui-alert>
					<ui-alert type="error">This is the error alert.</ui-alert>
				</div>
				<div class="d-page__codeblock">
					<prism language="html">{{ codeType }}</prism>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Prism from 'vue-prism-component'
import HeaderPage from '../layouts/HeaderPage'
import UiAlert from '@/components/Alert'

export default {
	name: 'Alert',
	components: {
		Prism,
		HeaderPage,
		UiAlert
	},
	data() {
		return {
			codeType: `<ui-alert type="info">This is the default alert.</ui-alert>
<ui-alert type="success">This is the success alert.</ui-alert>
<ui-alert type="warning">This is the warning alert.</ui-alert>
<ui-alert type="error">This is the error alert.</ui-alert>`
		}
	}
}
</script>
