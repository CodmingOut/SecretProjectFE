<template>
<div>
	<div style="display: flex; justify-content: space-between;">
		<h2>{{ mailData.title }}</h2>
		<div style="font-size: 12px; color: gray;">{{ (new Date(mailData.time)).toLocaleString() }}</div>
	</div>
	<div>
		<span>보낸 사람 : </span>
		<a :href="`mailto:${mailData.sender}`">{{ mailData.sender }}</a>
	</div>
	<div>
		<span>받은 사람 : </span>
		<a :href="`mailto:${mailData.receiver}`">{{ mailData.receiver }}</a>
	</div>
	<md-divider></md-divider>
	<div v-if="mailData.fileList.length > 0" class="md-triple-line">
		<div v-for="file of mailData.fileList" :key="file.id" >
			<a :href="`/dn/${mailId}/${file.id}`" @click="chkFile(file.id, $event)">
			{{ file.filename }}
			</a>
		</div>
		<md-divider></md-divider>
	</div>
	<md-content>
		<pre style="white-space: normal;">{{ mailData.content }}</pre>
	</md-content>
</div>
</template>

<script>
export default {
	name: "Mail",
	computed: {
		mailData() {
			return this.$store.getters.MailList.filter(obj => obj.id === this.mailId).shift();
		},
		mailId() {
			return this.$route.params.id;
		}
	},
	methods: {
		chkFile(id, e) {
			let file = this.mailData.fileList.filter(obj => obj.id === id).shift();
			console.log(id, file);
			if (file.isMalware) {
				let ret = confirm("멀웨어 또는 바이러스가 포함된 파일입니다.\n다운하시겠습니까?");
				if (!ret) e.preventDefault();
			}
		}
	}
}
</script>

<style scoped>

</style>