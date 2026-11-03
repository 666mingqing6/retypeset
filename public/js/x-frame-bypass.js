/**
 * X-Frame-Bypass 1.0.3 (vendored from https://github.com/niutech/x-frame-bypass)
 * Apache-2.0 © Jerzy Głowacki
 *
 * 本地改动：
 * 1. 代理列表支持页面级覆盖：在加载本文件前设置 window.X_FRAME_BYPASS_PROXIES = ['https://...']
 * 2. 默认代理列表更新为 master 分支的可用源（cors.io / jsonp.afeld.me 已失效）
 * 3. 注入时移除 crossorigin 属性，避免代理响应携带的 CSP/CORS 标记干扰
 */
customElements.define('x-frame-bypass', class extends HTMLIFrameElement {
	static get observedAttributes() {
		return ['src']
	}
	constructor () {
		super()
	}
	attributeChangedCallback () {
		this.load(this.src)
	}
	connectedCallback () {
		this.sandbox = '' + this.sandbox || 'allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation' // all except allow-top-navigation
	}
	load (url, options) {
		if (!url) return
		if (!url.startsWith('http')) throw new Error(`X-Frame-Bypass src ${url} does not start with http(s)://`)
		this.srcdoc = `<!DOCTYPE html>
<html>
<head>
	<style>
	.loader {
		position: absolute;
		top: calc(50% - 25px);
		left: calc(50% - 25px);
		width: 50px;
		height: 50px;
		background-color: #333;
		border-radius: 50%;
		animation: loader 1s infinite ease-in-out;
	}
	@keyframes loader {
		0% {
		transform: scale(0);
		}
		100% {
		transform: scale(1);
		opacity: 0;
		}
	}
	</style>
</head>
<body>
	<div class="loader"></div>
</body>
</html>`
		this.fetchProxy(url, options, 0).then(res => res.text()).then(data => {
			if (data) this.srcdoc = data.replace(/<head([^>]*)>/i, `<head$1>
	<base href="${url}">
	<script>
	// X-Frame-Bypass navigation event handlers
	document.addEventListener('click', e => {
		if (frameElement && document.activeElement && document.activeElement.href) {
			e.preventDefault()
			frameElement.load(document.activeElement.href)
		}
	})
	document.addEventListener('submit', e => {
		if (frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {
			e.preventDefault()
			if (document.activeElement.form.method === 'post')
				frameElement.load(document.activeElement.form.action, {method: 'post', body: new FormData(document.activeElement.form)})
			else
				frameElement.load(document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form)))
		}
	})
	</script>`).replace(/ crossorigin=['"][^'"]*['"]/gi, '')
		}).catch(e => console.error('Cannot load X-Frame-Bypass:', e))
	}
	fetchProxy (url, options, i) {
		const proxies = (options || {}).proxies || window.X_FRAME_BYPASS_PROXIES || [
			'https://api.allorigins.win/raw?url=',
			'https://api.codetabs.com/v1/proxy/?quest=',
			'https://corsproxy.io/?'
		]
		return fetch(proxies[i] + encodeURIComponent(url), options).then(res => {
			if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
			return res
		}).catch(error => {
			if (i === proxies.length - 1) throw error
			return this.fetchProxy(url, options, i + 1)
		})
	}
}, {extends: 'iframe'})
