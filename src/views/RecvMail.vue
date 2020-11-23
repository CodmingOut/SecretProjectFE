<template>
	<div>
		<md-table v-model="searched" md-card md-fixed-header md-sort="name" md-sort-order="asc">
			<md-table-toolbar>
				<div class="md-toolbar-section-start">
					<h1 class="md-title">메일 목록</h1>
				</div>

				<md-field class="md-toolbar-section-end" md-clearable>
					<md-input v-model="search" placeholder="메일 제목으로 검색..." @input="searchOnTable"/>
				</md-field>
			</md-table-toolbar>

			<md-table-empty-state
					:md-description="`'${search}'에 대한 검색 결과가 없습니다.`"
					md-label="검색 결과가 없습니다.">
			</md-table-empty-state>

			<md-table-row slot="md-table-row" slot-scope="{ item }" @click="$router.push({
			name: 'Mail',
			params: {
				id: item.id
			}
			});" style="cursor: pointer;">
				<md-table-cell md-label="제목" md-sort-by="title">{{ item.title }}</md-table-cell>
				<md-table-cell md-label="보낸 사람" md-sort-by="sender">{{ item.sender }}</md-table-cell>
				<md-table-cell md-label="시간" md-sort-by="time">{{ (new Date(item.time)).toLocaleString() }}</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
export default {
	name: "RecvMail",
	data() {
		return {
			search: '',
			searched: []
		};
	},
	computed: {
		mailList() {
			return this.$store.getters.MailList;
		}
	},
	methods: {
		searchOnTable(text) {
			this.searched = this.item.filter(obj => obj.title.toLowerCase().indexOf(text.toLowerCase()) > -1 || text === '');
		},
	},
	created() {
		this.searched = this.mailList;
	}
}
</script>

<style scoped>

</style>