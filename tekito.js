document.addEventListener("load", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      // nav の高さ の幅をつくる
      // nav を使わない場合は「const navHeight = 0;」などにする。navを取得しない。
      const navHeight = document.querySelector("nav").offsetHeight;
      const href = this.getAttribute("href");
      const target = href === "#" || href === "" ? document.documentElement : document.querySelector(href);
      const position = target.offsetTop - navHeight;

      // ページ内リンクで履歴を残したいときのコード。履歴を残したくないときは削除する。
      if (href !== "#" && href !== "") {
        window.history.pushState({}, "", href); // URLを変更せずに履歴に追加
      }
      // ページ内リンクで履歴を残したいときのコードはここまで

      // スムーススクロール
      window.scrollTo({
        top: position,
        behavior: "smooth"
      });
    });
  });

  // TOPへ戻るボタン。最初は非表示で、100pxスクロールしたら出現する
  const topBtn = document.getElementById("top");
  topBtn.style.display = "none";

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
});

/* nav にクラスを付与するscript */
window.addEventListener("scroll", function() {
  const e = document.querySelector("nav");
  const s = document.querySelector("header");

  if (window.scrollY > s.offsetHeight) {
    e.classList.add("fix-nav");
  } else {
    e.classList.remove("fix-nav");
  }
});

// パララックスエフェクトを適用する要素を取得
const parallaxSection = document.querySelector('.parallax-bg');

window.addEventListener('scroll', function () {
// スクロール量を取得
  const scrollPosition = window.scrollY;
  // 背景画像の位置を計算して適用(適切な係数を調整)
  parallaxSection.style.backgroundPositionY = -scrollPosition * 0.1 + 'px';
  // その他のパララックスエフェクトを追加したい場合はここに追加
});
