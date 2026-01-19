// ============================================================================
// SRC/JS/THEME.JS - Sistema de Temas (Light/Dark Only)
// Versão: 2.2 (Suporte Desktop + Mobile + Fix Mobile Focus)
// ============================================================================

const ThemeManager = {

  init() {
    // Busca TODOS os botões de tema (desktop e mobile)
    this.buttons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');

    // Carregar tema salvo ou usar "light" como padrão
    const saved = localStorage.getItem('theme') || 'light';
    const validTheme = (saved === 'dark') ? 'dark' : 'light';

    this.applyTheme(validTheme, false);

    // Event Listener para TODOS os botões
    this.buttons.forEach(btn => {
      if (btn) {
        // Click normal
        btn.addEventListener('click', (e) => {
          this.toggle();
          this.removeFocus(e.currentTarget);
        });

        // Touch events para mobile (melhor feedback)
        btn.addEventListener('touchend', (e) => {
          this.removeFocus(e.currentTarget);
        }, { passive: true });

        // Remove foco ao perder foco
        btn.addEventListener('blur', (e) => {
          this.removeFocus(e.currentTarget);
        });
      }
    });
  },

  toggle() {
    const current = localStorage.getItem('theme') || 'light';
    const newTheme = (current === 'light') ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);
    this.applyTheme(newTheme, true);
  },

  applyTheme(theme, animated = true) {
    const html = document.documentElement;

    if (animated) {
      html.classList.add('theme-transitioning');
    }

    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Atualiza TODOS os ícones
    this.updateIcons(theme, animated);

    if (animated) {
      setTimeout(() => {
        html.classList.remove('theme-transitioning');
      }, 400);
    }
  },

  updateIcons(theme, animated = true) {
    // Percorre TODOS os botões e atualiza cada um
    this.buttons.forEach(btn => {
      if (!btn) return;

      const icon = btn.querySelector('i');
      if (!icon) return;

      // Remove classes anteriores
      icon.className = '';

      if (theme === 'light') {
        icon.className = 'fa-solid fa-sun';
        btn.title = "Modo Claro";
        btn.setAttribute('aria-label', 'Ativar modo escuro');
      } else {
        icon.className = 'fa-solid fa-moon';
        btn.title = "Modo Escuro";
        btn.setAttribute('aria-label', 'Ativar modo claro');
      }

      // Animação de rotação
      if (animated) {
        icon.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        icon.style.transform = 'rotate(360deg) scale(0.85)';

        setTimeout(() => {
          icon.style.transform = 'rotate(0deg) scale(1)';
        }, 400);
      }

      // Remove foco do ícone também
      this.removeFocus(icon);
    });
  },

  // Função para remover foco/destaque
  removeFocus(element) {
    if (!element) return;

    // Remove foco do elemento
    element.blur();

    // Remove foco do pai também
    if (element.parentElement) {
      element.parentElement.blur();
    }

    // Remove qualquer classe de foco ativo
    element.classList.remove('active', 'focused');

    // Para ícones dentro do botão
    const icon = element.querySelector('i');
    if (icon) {
      icon.blur();
    }
  }
};

// Executa assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
