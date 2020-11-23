<template>
	<div class="card-list">
		<md-card class="card" md-with-hover>
			<md-card-header>
				<div class="md-title">보낸 메일함</div>
			</md-card-header>

			<md-card-content>

			</md-card-content>

			<md-card-actions>
				<router-link to="/write_mail/">
					<md-button>메일 쓰기</md-button>
				</router-link>
			</md-card-actions>
		</md-card>
		<md-card class="card" md-with-hover>
			<md-card-header>
				<div class="md-title">받은 메일함</div>
			</md-card-header>

			<md-card-content>
				<p v-for="obj in list">
					<router-link :to="`/mail/${obj.id}`">{{ obj.title }}</router-link>
				</p>

				<md-card-actions>
					<router-link to="/recv/">
						<md-button>메일함 보기</md-button>
					</router-link>
				</md-card-actions>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => ({}),
	computed: {
		list() {
			return this.$store.getters.MailList;
		}
	}
}
</script>

<style scoped>
.card-list {
	display: flex;
	justify-content: space-evenly;
}

.card {
	flex: 0.4;
	cursor: default !important;

	display: flex;
	justify-content: space-between;
	flex-direction: column;
}

.md-title * {
	cursor: pointer;
}

@media (max-width: 500px) {
	.card-list {
		flex-direction: column;
	}

	.card {
		flex: 1;
		margin-top: 20px;
	}
}
</style>
