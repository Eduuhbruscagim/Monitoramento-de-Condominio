const ThemeManager = {
    init() {
        this.btn = document.getElementById('theme-toggle');
        this.icon = this.btn?.querySelector('i');

        // 1. Carregar tema salvo ou preferência do sistema
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateIcon('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.updateIcon('light');
        }

        // 2. Event Listener do Botão
        if (this.btn) {
            this.btn.addEventListener('click', () => this.toggle());
        }
    },

    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateIcon(newTheme);

        // Efeito sonoro sutil (opcional, Apple style)
        // new Audio('../assets/click.mp3').play();
    },

    updateIcon(theme) {
        if (!this.icon) return;

        // Remove classes anteriores
        this.icon.classList.remove('fa-sun', 'fa-moon');

        if (theme === 'dark') {
            this.icon.classList.add('fa-moon');
            this.btn.title = "Alternar para Modo Claro";
        } else {
            this.icon.classList.add('fa-sun');
            this.btn.title = "Alternar para Modo Escuro";
        }

        // Animaçãozinha de rotação
        this.icon.style.transform = 'rotate(360deg) scale(0.8)';
        setTimeout(() => this.icon.style.transform = 'rotate(0deg) scale(1)', 300);
    }
};

// Executa assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());