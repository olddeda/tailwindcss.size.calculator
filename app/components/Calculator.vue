<script setup lang="ts">
const pixels = ref(8)
const prefix = ref("w")

const prefixItems = ref(['w', 'h', 'm', 'p'])

const calculated = computed(() => {
	if (!pixels.value) {
		return ""
	}
	if (pixels.value == 1) {
		return "px"
	}
	return Math.round((pixels.value / 4) * 4) / 4
})
</script>

<template>
	<UCard>
		<UButtonGroup>
			<USelect
				v-model="prefix"
				:items="prefixItems"
				class="w-20"
				size="xl"
			/>
			<UInput
				v-model="pixels"
				variant="outline"
				placeholder="Значение в пикселях"
				size="xl"
			>
				<template #trailing>
					px
				</template>
			</UInput>
		</UButtonGroup>
		<div class="flex flex-col">
			<USeparator class="mt-4" />
			<div class="mt-4">

				<p class=text-(--ui-primary)>
					Класс Tailwind:
					<UBadge size="xl">
						{{ prefix }}-{{ calculated }}
					</UBadge>
				</p>
				<p class="text-(--ui-secondary)>)">
					<template v-if="pixels == 1">
						(1px = px)
					</template>
					<template v-else>
						({{ pixels }}px / 4 = {{ calculated }})
					</template>
				</p>
			</div>
		</div>
	</UCard>
</template>
