// ============================================================================
// SRC/JS/PERFORMANCE.JS - Detector de Performance ESTÁVEL
// Versão: 2.0 (Multi-Test + Hardware Detection)
// ============================================================================

(function() {
  'use strict';

  // 🎯 Configurações
  const CONFIG = {
    MIN_FPS: 20,              // Só ativa low-mode se FPS < 20 (mais tolerante)
    NUM_TESTS: 3,             // Faz 3 testes e usa a média
    TEST_DURATION: 300,       // 300ms por teste (mais rápido)
    STORAGE_KEY: 'performance_mode'
  };

  // 🔍 Verifica se já detectou antes (Cache no localStorage)
  function checkCachedPerformance() {
    const cached = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (cached === 'low') {
      enableLowPerformanceMode(true); // true = do cache
      return true;
    }
    return false;
  }

  // 🖥️ Detecta características do hardware
  function detectHardware() {
    const signals = {
      isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
      lowMemory: navigator.deviceMemory && navigator.deviceMemory < 4,
      lowCores: navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4,
      oldBrowser: !window.CSS || !CSS.supports('backdrop-filter', 'blur(10px)')
    };

    // Se 2 ou mais sinais de hardware fraco, já assume baixa performance
    const weakSignals = Object.values(signals).filter(Boolean).length;

    if (weakSignals >= 2) {
      console.log('🖥️ Hardware fraco detectado:', signals);
      return true;
    }

    return false;
  }

  // 🧪 Executa UM teste de FPS
  function runSingleTest() {
    return new Promise((resolve) => {
      const testElement = document.createElement('div');
      testElement.style.cssText = `
        position: fixed;
        top: -200px;
        left: -200px;
        width: 100px;
        height: 100px;
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.5);
        pointer-events: none;
        z-index: -1;
      `;
      document.body.appendChild(testElement);

      let frameCount = 0;
      const startTime = performance.now();

      function animate() {
        frameCount++;
        const elapsed = performance.now() - startTime;

        testElement.style.transform = `translateX(${Math.sin(elapsed / 50) * 5}px)`;

        if (elapsed < CONFIG.TEST_DURATION) {
          requestAnimationFrame(animate);
        } else {
          const fps = frameCount / (CONFIG.TEST_DURATION / 1000);
          document.body.removeChild(testElement);
          resolve(fps);
        }
      }

      requestAnimationFrame(animate);
    });
  }

  // 🎮 Executa múltiplos testes e calcula média
  async function testPerformance() {
    const results = [];

    for (let i = 0; i < CONFIG.NUM_TESTS; i++) {
      // Pequeno delay entre testes
      await new Promise(resolve => setTimeout(resolve, 100));
      const fps = await runSingleTest();
      results.push(fps);
    }

    // Remove o valor mais alto e mais baixo (elimina outliers)
    results.sort((a, b) => a - b);
    const filtered = results.slice(1, -1);

    // Calcula média dos valores restantes
    const avgFps = filtered.reduce((a, b) => a + b, 0) / filtered.length;

    console.log(`⚡ Testes de Performance:`, results.map(f => f.toFixed(1)));
    console.log(`📊 FPS Médio (sem outliers): ${avgFps.toFixed(1)}`);

    return avgFps;
  }

  // 🔧 Ativa modo de performance reduzida
  function enableLowPerformanceMode(fromCache = false) {
    document.documentElement.classList.add('low-performance');
    localStorage.setItem(CONFIG.STORAGE_KEY, 'low');

    if (!fromCache) {
      console.log('💻 Modo de Performance Reduzida ATIVADO');
      console.log('   → Backdrop-filter desabilitado');
      console.log('   → Transições reduzidas');
    }
  }

  // ⚡ Ativa modo de alta performance
  function enableHighPerformanceMode() {
    document.documentElement.classList.remove('low-performance');
    localStorage.setItem(CONFIG.STORAGE_KEY, 'high');

    console.log('🚀 Modo de Alta Performance ATIVADO');
    console.log('   → Glassmorphism habilitado');
  }

  // 🎮 Detecta automaticamente e aplica modo
  async function autoDetectPerformance() {
    // 1. Verifica cache primeiro
    if (checkCachedPerformance()) {
      return;
    }

    // 2. Detecta hardware fraco
    if (detectHardware()) {
      enableLowPerformanceMode();
      return;
    }

    // 3. Executa testes de FPS
    const avgFps = await testPerformance();

    // 4. Aplica modo baseado no resultado
    if (avgFps < CONFIG.MIN_FPS) {
      enableLowPerformanceMode();
    } else {
      enableHighPerformanceMode();
    }
  }

  // 🌐 API pública
  window.PerformanceManager = {
    enableLowMode: () => enableLowPerformanceMode(false),
    enableHighMode: enableHighPerformanceMode,
    runTest: autoDetectPerformance,
    clearCache: () => {
      localStorage.removeItem(CONFIG.STORAGE_KEY);
      console.log('🗑️ Cache limpo. Recarregue a página para testar novamente.');
    }
  };

  // 🚀 Executa ao carregar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoDetectPerformance);
  } else {
    autoDetectPerformance();
  }

})();
