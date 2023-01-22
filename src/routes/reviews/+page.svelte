<script lang="ts">
    let blogposts: Post[] = [
      { storeName: "앱스토어 리뷰", feedback: "우리 학교에도 드디어 이런 앱이 나오다뇨 ㅠㅠ 매번 장학금 확인하려고 학교 홈페이지 드나드는데 알림으로 알려주어서 얼마나 고마운지 몰라요 개발자님들 복 🧧 받으세요 🙇‍♀️🙇‍♂️🙇" },
      { storeName: "구글플레이 리뷰", feedback: "편리하고 빠르게 알림을 확인할 수 있어 매우 좋습니다!" },
      { storeName: "앱스토어 리뷰", feedback: "좋네요. 평소에 기대하던 앱입니다" },
      { storeName: "앱 내 피드백", feedback: "대박.. 짱이에요" },
      { storeName: "앱스토어 리뷰", feedback: "너무 좋아용. 잘쓰겠습니다" },
      { storeName: "앱스토어 리뷰", feedback: "죠아용. 굿" },
      { storeName: "앱 내 피드백", feedback: "북마크 기능 있으면 좋을것같아요 감사합니다" },
      { storeName: "앱 내 피드백", feedback: "혹시 위인전 공지사항도 추가해주실 수 있을까요? 위인전은 시스템상 로그인해야만 보여서 안되려나요ㅠㅠ" },
      { storeName: "앱 내 피드백", feedback: "공지사항 목록 우선순위를 내 마음대로 설정할 수 있었으면 좋겠습니다." }
    ];
  
    type Post = {
      storeName: string,
      feedback: string
    }
  </script>
  
  <div class="main_container">
    <section>
      <div class="inner-container">
        <h2 class="about-title">쿠링에 학우분들의 목소리를 들려주세요!</h2>
        <div class="about-subtitle">
          <p>
            앱내 피드백, 앱스토어 리뷰, 구글플레이 리뷰 등을 통해 쿠링을 이용해주시는 학우분들의 리뷰를 남겨주세요! 더 나은 서비스를 만들어가는데에 큰 도움이 됩니다.
          </p>
          
          <div class="blogposts">
            {#each blogposts as post}
            <div class="post">
              <p>{post.feedback}</p>
              <h3>{post.storeName}</h3>
            </div> 
            {/each}
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <style>
    .main_container {
      margin: 0 80px 0 65px;
    }
    .about-title {
      font-size: 3rem;
      font-weight: bold;
      margin-top: 11rem;
    }
    .about-subtitle {
      margin-top: 2rem;
    }
    .about-subtitle > p {
      width: 60%;
      font-weight: normal;
      font-size: 1rem;
      line-height: 2rem;
    }

    .blogposts {
      width: 60%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
    .post {
        border: 1px solid #ddd;
        padding: 10px;
        box-shadow: 0 0 10px #eee;
    }
    h2 {
        margin: 0;
    }
  </style>