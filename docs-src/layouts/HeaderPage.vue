<template>
  <header class="docs-content__header">
    <h1 class="docs-content__header-title">{{title}}</h1>
    <div class="docs-content__header-intro">
      <h4 class="docs-content__header-intro__title">Description</h4>
      <div class="docs-content__header-intro__description">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
	name: 'header-page',
	props: {
		title: {
			type: String,
			default: 'Component'
		}
	}
}
</script>
