const ThemeManager = {
    init() {
        this.btn = document.getElementById('theme-toggle');
        this.icon = this.btn?.querySelector('i');

        // Carregar tema salvo ou usar "system" como padrão
        const saved = localStorage.getItem('theme') || 'system';
        this.applyTheme(saved);

        // Event Listener do Botão (ciclar entre os 3 temas)
        if (this.btn) {
            this.btn.addEventListener('click', () => this.toggle());
        }

        // Escutar mudanças de preferência do sistema (quando tema = system)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'system') {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    },

    toggle() {
        const current = localStorage.getItem('theme') || 'system';

        let newTheme;
        if (current === 'light') {
            newTheme = 'dark';
        } else if (current === 'dark') {
            newTheme = 'system';
        } else {
            newTheme = 'light';
        }

        localStorage.setItem('theme', newTheme);
        this.applyTheme(newTheme);
    },

    applyTheme(theme) {
        if (theme === 'system') {
            // Detectar preferência do sistema
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
            this.updateIcon('system');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
            this.updateIcon(theme);
        }
    },

    updateIcon(theme) {
        if (!this.icon) return;

        // Remove classes anteriores
        this.icon.classList.remove('fa-sun', 'fa-moon', 'fa-circle-half-stroke');

        if (theme === 'light') {
            this.icon.classList.add('fa-sun'); // Sol
            this.btn.title = "Modo Claro";
        } else if (theme === 'dark') {
            this.icon.classList.add('fa-moon'); // Lua
            this.btn.title = "Modo Escuro";
        } else {
            this.icon.classList.add('fa-circle-half-stroke'); // Metade claro/escuro
            this.btn.title = "Modo Sistema";
        }

        // Animação de rotação
        this.icon.style.transition = 'transform 0.3s ease';
        this.icon.style.transform = 'rotate(360deg) scale(0.8)';
        setTimeout(() => this.icon.style.transform = 'rotate(0deg) scale(1)', 300);
    }
};

// Executa assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
