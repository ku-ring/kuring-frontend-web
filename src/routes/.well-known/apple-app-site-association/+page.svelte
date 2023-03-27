<script>
    import item from './apple-app-site-association.json';
</script>

<div>This is an admin page</div>
{item}
<slot />

<h1>쿠링 앱이 설치 되어있지 않습니다</h1>

<meta name="apple-itunes-app" content="app-id=myAppStoreID, app-argument=myURL">

<a data-sveltekit-reload href="https://apps.apple.com/kr/app/%EC%BF%A0%EB%A7%81-%EA%B1%B4%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90-%EA%B3%B5%EC%A7%80%EC%95%B1/id1609873520">
    쿠링 앱 다운로드
</a>

<a data-sveltekit-reload href="https://konkuk.ac.kr">웹에서 공지 열기</a>

<style>
  div {
    padding: 15px;
    margin: 10px 0;
    background-color: rgb(28, 176, 35);
    color: white;
  }
</style>