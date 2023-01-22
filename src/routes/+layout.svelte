<nav>
    <div class="nav-container">
      <a href="/" class="nav-logo" title="Back to Homepage">Home</a>
      <div class="nav-links">
        <a href="/about" class="link">About</a>
        <a href="/reviews" class="link">Reviews</a>
        <a href="/contact" class="link">Contact</a>
      </div>
    </div>
  </nav>
  <div class="container">
    <!-- page.svelte 가 보여질 자리 -->
    <slot></slot>
  </div>
  <style>
    .container {
      max-width: 1400px;
      margin: 50px auto;
    }
  </style>