<template>
	<md-content class="page-container" md-theme="primary">
		<md-app md-mode="overlap" md-waterfall>
			<md-app-toolbar class="md-primary md-large">
				<div class="md-toolbar-row">
					<md-button class="md-icon-button" @click="menuVisible = !menuVisible">
						<md-icon>menu</md-icon>
					</md-button>

					<span class="md-title" @click="$router.push({name: 'Home'}).catch(() => {});" style="cursor: pointer;">멀웨어 메일 탐지</span>
				</div>
			</md-app-toolbar>

			<md-app-drawer :md-active.sync="menuVisible">
				<md-toolbar class="md-transparent" md-elevation="1">
					<h3>메뉴</h3>
				</md-toolbar>

				<md-list>
					<md-list-item @click="$router.push({name: 'Home'}).catch(() => {})">
						<md-icon>home</md-icon>
						<span class="md-list-item-text">홈</span>
					</md-list-item>
				</md-list>

				<md-list>
					<md-list-item @click="$router.push({name: 'Recv'}).catch(() => {})">
						<md-icon>mail</md-icon>
						<span class="md-list-item-text">받은 메일함</span>
					</md-list-item>
				</md-list>
			</md-app-drawer>

			<md-app-content>
				<router-view v-if="show"></router-view>
				<div v-else style="display: flex; justify-content: center; flex-direction: column;">
					<h1>메일을 로딩 중입니다.</h1>
					<md-progress-bar md-mode="indeterminate"></md-progress-bar>
				</div>
			</md-app-content>
		</md-app>
	</md-content>
</template>

<script>
export default {
	data: () => ({
		menuVisible: false,
		show: false
	}),
	created() {
		this.$store.dispatch('fetchMail').finally(() => this.show = true);
	}
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("primary", (
		primary: #d81b60,
		accent: #d81b60
));

@import "~vue-material/dist/theme/all";
</style>

<style>
@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');

* {
	font-family: 'NanumSquareRound', sans-serif;
	line-height: 30px;
}

::selection {
	background: rgba(255, 92, 141, .75) !important;
}

.page-container > div {
	min-height: 100vh;
}
</style>