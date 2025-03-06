document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
      <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="/NoahSablan.github.io/index.html">Noah Sablan</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarXs">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsingNavbarXs">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/NoahSablan.github.io/3D/index.html">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/NoahSablan.github.io/3D/contact-me.html">Contact</a>
            </li>
            <!--
            <li class="nav-item">
              <a class="nav-link" href="../arch/">Architecture</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../product/">Product</a>
            </li> -->
          </ul>
        </div>
      </nav>
    `;
    
    // Insert at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  });