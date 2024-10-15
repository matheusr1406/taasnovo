document.addEventListener("DOMContentLoaded", function () {
  const openMenuBtn = document.getElementById("open-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const navMenu = document.querySelector(".nav__menu");
  const foguete = document.querySelector(".foguete");
  const fogueteLanding = document.querySelector(".foguete-landing");

  openMenuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  });

  closeMenuBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
  });

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;

    if (scrollPos > 0) {
      foguete.style.transform = "translateY(-150vh)";
    } else {
      foguete.style.transform = "translateY(0)";
    }

    if (scrollPos > document.querySelector(".about-section").offsetTop - 300) {
      fogueteLanding.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slideButton = document.querySelector(".slide-btn"); // Botão de ir para a segunda página
  const backButton = document.querySelector(".slide-btn-back"); // Botão de voltar à primeira página
  const solucoesContainer = document.querySelector(".solucoes-container"); // Container que armazena o conteúdo dinâmico
  let isInitialContent = true;

  // Botão de avançar para o carrossel de cards
  slideButton.addEventListener("click", () => {
    solucoesContainer.classList.add("hide-content"); // Esconde o conteúdo atual

    setTimeout(() => {
      if (isInitialContent) {
        // Insere o conteúdo do carrossel de cards
        solucoesContainer.innerHTML = `
        <section class="solucoes-section">
        <div class="carousel-container">
          <div class="carousel-track">
            <!-- Aqui estão os cards do carrossel -->
            <div class="solucoes-card">
              <h3>Smart Building</h3>
              <i class="uil uil-building"></i>
              <ul>
                <li>Monitoramento predial inteligente</li>
                <li>Monitoramento e gestão de energia elétrica</li>
                <li>Monitoramento e gestão de redes hidráulicas</li>
                <li>Iluminação inteligente outdoor</li>
                <li>Monitoramento inteligente de transformadores</li>
                <li>Monitoramento preditivo de máquinas e equipamentos</li>
              </ul>
            </div>
            <div class="solucoes-card">
              <h3>Smart Cities</h3>
              <i class="uil uil-estate"></i>
              <ul>
                <li>Iluminação inteligente</li>
                <li>Monitoramento e gestão de energia elétrica</li>
                <li>Monitoramento e gestão de redes hidráulicas</li>
                <li>Monitoramento inteligente de transformadores</li>
                <li>Monitoramento preditivo de máquinas e equipamentos</li>
              </ul>
            </div>
            <div class="solucoes-card">
              <h3>Indústria e Manufatura</h3>
              <i class="uil uil-setting"></i>
              <ul>
                <li>Monitoramento preditivo de máquinas e equipamentos</li>
                <li>Monitoramento e gestão de energia elétrica</li>
                <li>Monitoramento de redes hidráulicas</li>
                <li>Monitoramento inteligente de transformadores</li>
                <li>Iluminação inteligente</li>
              </ul>
            </div>
            <div class="solucoes-card">
              <h3>Tech Cities</h3>
              <i class="uil uil-flower"></i>
              <ul>
                <li>Alinhamento com políticas nacionais e estaduais de CI&T</li>
                <li>Gestão da Inovação e Planejamento</li>
                <li>Desenvolvimento socioeconômico local</li>
              </ul>
            </div>
            <div class="solucoes-card">
              <h3>Agro</h3>
              <i class="uil uil-seedling"></i>
              <ul>
                <li>Monitoramento de colhedoras agrícola</li>
                <li>Monitoramento preditivo de máquinas e equipamentos</li>
                <li>Monitoramento e gestão de energia elétrica</li>
                <li>Monitoramento de redes hidráulicas</li>
                <li>Monitoramento inteligente de transformadores</li>
                <li>Iluminação inteligente</li>
              </ul>
            </div>
            <div class="solucoes-card">
              <h3>GTD Energia</h3>
              <i class="uil uil-bolt-alt"></i>
              <ul>
                <li>Monitoramento inteligente de transformadores</li>
                <li>Monitoramento e gestão de energia elétrica</li>
                <li>Monitoramento preditivo de máquinas e equipamentos</li>
                <li>Monitoramento e gestão de redes hidráulicas</li>
                <li>Iluminação inteligente</li>
              </ul>
            </div>
            <div class="solucoes-card">
              <h3>Treinamentos</h3>
              <i class="uil uil-presentation"></i>
              <ul>
                <li>Plataforma em IA que cria e personaliza treinamentos</li>
                <li>Lançamento de produtos, comunicações e FAQs</li>
                <li>Avaliações virtuais com instrutores e atores</li>
              </ul>
            </div>
          </div>
          
        </div>
        <!-- Botões de navegação (fora da track) -->
          <button class="carousel-nav-prev">←</button>
          <button class="carousel-nav-next">→</button>
      </section>
    `;

        // Esconde o botão de avançar e mostra o de voltar
        slideButton.style.display = "none";
        backButton.style.display = "flex";

        // Inicializa a navegação do carrossel após o conteúdo ser inserido
        initializeCarousel();
      }

      solucoesContainer.classList.remove("hide-content"); // Exibe o novo conteúdo
      isInitialContent = false;
    }, 500);
  });

  // Botão de voltar para a página anterior
  backButton.addEventListener("click", () => {
    solucoesContainer.classList.add("hide-content");

    setTimeout(() => {
      solucoesContainer.innerHTML = `
          <div class="solucoes-text">
              <h3>Soluções e Plataformas</h3>
              <p>Potencializamos o poder da <strong>IoT</strong> e <strong>I.A.</strong> para criar soluções flexíveis que impulsionam a eficiência, sustentabilidade e inovação.</p>
          </div>
          <div class="solucoes-tree">
              <ul>
                  <li><i class="uil uil-building"></i> Smart Building</li>
                  <li><i class="uil uil-bolt-alt"></i> GTD Energia</li>
                  <li><i class="uil uil-presentation"></i> Treinamentos</li>
                  <li><i class="uil uil-estate"></i> Smart/Tech Cities</li>
                  <li><i class="uil uil-flower"></i> Agro</li>
                  <li><i class="uil uil-setting"></i> Indústria</li>
              </ul>
          </div>
        `;

      // Mostra o botão de avançar novamente e esconde o de voltar
      slideButton.style.display = "flex";
      backButton.style.display = "none";

      solucoesContainer.classList.remove("hide-content");
      isInitialContent = true;
    }, 500);
  });
});

function initializeCarousel() {
  const track = document.querySelector(".carousel-track");
  const nextButton = document.querySelector(".carousel-nav-next");
  const prevButton = document.querySelector(".carousel-nav-prev");

  if (!track || !nextButton || !prevButton) {
    console.error("Erro: não foi possível encontrar o carrossel ou os botões.");
    return;
  }

  let currentIndex = 0;

  const cards = Array.from(track.children);
  if (cards.length === 0) {
    console.error("Erro: nenhum card encontrado.");
    return;
  }

  const cardWidth = track.getBoundingClientRect().width / 3;
  const maxIndex = cards.length - 3;

  function setPositionByIndex() {
    const offset = currentIndex * -cardWidth;
    track.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    setPositionByIndex();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex;
    }
    setPositionByIndex();
  });
}
