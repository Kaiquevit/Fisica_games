const form = document.querySelector('.login-form');
const avatarMount = document.getElementById('avatar-creator-mount');

let activeAvatarSlot = 1; // 1 = Jogador 1, 2 = Jogador 2
const isTwoPlayerMode = (modeVal) => modeVal === 'duelo' || modeVal === 'duelo_pares';

// ============================================================================
// 1. ABA SEPARADA DE CRIAÇÃO DE AVATAR (avatar.html)
// ============================================================================
if (avatarMount && window.PhysicsAvatar) {
  const opts = window.PhysicsAvatar.AVATAR_OPTIONS;

  const buildOptionsHTML = (list, selectedValue) =>
    list
      .map((item) => {
        const val = typeof item === 'string' ? item : item.id;
        const label = typeof item === 'string' ? item : item.label;
        const selected = val === selectedValue ? 'selected' : '';
        return `<option value="${val}" ${selected}>${label}</option>`;
      })
      .join('');

  const renderAvatarCreator = () => {
    let currentCfg = window.PhysicsAvatar.loadConfig(activeAvatarSlot);

    avatarMount.innerHTML = `
      <div class="avatar-slot-tabs">
        <button type="button" class="avatar-slot-tab ${
          activeAvatarSlot === 1 ? 'active-slot-1' : ''
        }" data-slot="1">
          🧑‍🔬 Avatar Jogador 1
        </button>
        <button type="button" class="avatar-slot-tab ${
          activeAvatarSlot === 2 ? 'active-slot-2' : ''
        }" data-slot="2">
          ⚔️ Avatar Jogador 2
        </button>
      </div>

      <div class="avatar-creator-card ${activeAvatarSlot === 2 ? 'slot-2-card' : ''}">
        <div class="avatar-preview-column">
          <div class="avatar-preview-box" id="avatar-svg-preview">
            ${window.PhysicsAvatar.renderSVG(currentCfg)}
          </div>
          <button type="button" class="btn-random-avatar" id="btn-random-avatar">
            🎲 Sortear Visual
          </button>
        </div>

        <div class="avatar-controls-grid">
          <div class="avatar-control-item">
            <label for="av-skin">Tom de Pele</label>
            <select id="av-skin" class="avatar-select" data-field="skin">
              ${buildOptionsHTML(opts.skins, currentCfg.skin)}
            </select>
          </div>

          <div class="avatar-control-item">
            <label for="av-hair-style">Estilo de Cabelo</label>
            <select id="av-hair-style" class="avatar-select" data-field="hairStyle">
              ${buildOptionsHTML(opts.hairStyles, currentCfg.hairStyle)}
            </select>
          </div>

          <div class="avatar-control-item">
            <label for="av-hair-color">Cor do Cabelo</label>
            <select id="av-hair-color" class="avatar-select" data-field="hairColor">
              ${buildOptionsHTML(opts.hairColors, currentCfg.hairColor)}
            </select>
          </div>

          <div class="avatar-control-item">
            <label for="av-accessory">Acessório de Lab</label>
            <select id="av-accessory" class="avatar-select" data-field="accessory">
              ${buildOptionsHTML(opts.accessories, currentCfg.accessory)}
            </select>
          </div>

          <div class="avatar-control-item">
            <label for="av-outfit">Traje Científico</label>
            <select id="av-outfit" class="avatar-select" data-field="outfit">
              ${buildOptionsHTML(opts.outfits, currentCfg.outfit)}
            </select>
          </div>

          <div class="avatar-control-item">
            <label for="av-title">Título / Patente</label>
            <select id="av-title" class="avatar-select" data-field="title">
              ${buildOptionsHTML(opts.titles, currentCfg.title)}
            </select>
          </div>
        </div>
      </div>
    `;

    avatarMount.querySelectorAll('.avatar-slot-tab').forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
        activeAvatarSlot = Number(tabBtn.getAttribute('data-slot'));
        renderAvatarCreator();
      });
    });

    avatarMount.querySelectorAll('.avatar-select').forEach((sel) => {
      sel.addEventListener('change', (e) => {
        const field = e.target.getAttribute('data-field');
        currentCfg[field] = e.target.value;
        currentCfg = window.PhysicsAvatar.saveConfig(currentCfg, activeAvatarSlot);
        const previewBox = document.getElementById('avatar-svg-preview');
        if (previewBox) {
          previewBox.innerHTML = window.PhysicsAvatar.renderSVG(currentCfg);
        }
      });
    });

    const btnRandom = document.getElementById('btn-random-avatar');
    if (btnRandom) {
      btnRandom.addEventListener('click', () => {
        currentCfg = window.PhysicsAvatar.randomize(activeAvatarSlot);
        renderAvatarCreator();
      });
    }
  };

  renderAvatarCreator();
}

// ============================================================================
// 2. FLUXO EM 2 ETAPAS NA HOME (index.html):
//    Etapa 1: Modo + Nível -> Etapa 2: Nome e Preview do Avatar
// ============================================================================
const step1Container = document.getElementById('step-1-container');
const step2Container = document.getElementById('step-2-container');
const stepSubtitle = document.getElementById('step-subtitle');
const btnNextStep = document.getElementById('btn-next-step');
const btnBackStep = document.getElementById('btn-back-step');
const selectedModeSummary = document.getElementById('selected-mode-summary');

const player1Input = document.getElementById('player-name');
const player2Input = document.getElementById('player2-name');
const playersNamesGrid = document.getElementById('players-names-grid');
const p2InputWrap = document.getElementById('p2-input-wrap');

const previewP1Avatar = document.getElementById('preview-p1-avatar');
const previewP2Avatar = document.getElementById('preview-p2-avatar');
const btnRandP1 = document.getElementById('btn-rand-p1');
const btnRandP2 = document.getElementById('btn-rand-p2');

const MODE_NAMES = {
  duelo_pares: '⚔️ Duelo 1v1 (Só Pares)',
  duelo: '🧠 Duelo 1v1 + Quiz',
  solo_pares: '🧩 Solo (Só Pares)',
  desafio: '🔥 Solo (Desafio + Quiz)',
  sobrevivencia: '⚡ Solo (5 Vidas)',
  exploracao: '📘 Solo (Estudo Livre)'
};

const LEVEL_NAMES = {
  fundamental: '🔭 Fundamental (10-12)',
  medio: '🎨 Médio 13-17 (Visual + Dicas)',
  medio_dificil: '⚛️ Médio 13-17 (Só Fórmulas)',
  faculdade: '🛠️ Física 1 (Visual + Guiado)',
  faculdade_dificil: '🎓 Física 1 (Cálculo Puro)'
};

const renderMiniAvatars = () => {
  if (!window.PhysicsAvatar) return;
  if (previewP1Avatar) {
    previewP1Avatar.innerHTML = window.PhysicsAvatar.renderSVG(
      window.PhysicsAvatar.loadConfig(1)
    );
  }
  if (previewP2Avatar) {
    previewP2Avatar.innerHTML = window.PhysicsAvatar.renderSVG(
      window.PhysicsAvatar.loadConfig(2)
    );
  }
};

renderMiniAvatars();

if (btnRandP1 && window.PhysicsAvatar) {
  btnRandP1.addEventListener('click', () => {
    window.PhysicsAvatar.randomize(1);
    renderMiniAvatars();
  });
}

if (btnRandP2 && window.PhysicsAvatar) {
  btnRandP2.addEventListener('click', () => {
    window.PhysicsAvatar.randomize(2);
    renderMiniAvatars();
  });
}

// Preenche nomes salvos anteriormente apenas se o usuário já tiver digitado um nome personalizado
const savedPlayer1 = localStorage.getItem('player');
if (
  player1Input &&
  savedPlayer1 &&
  savedPlayer1.trim().length >= 2 &&
  savedPlayer1 !== 'Cientista 1' &&
  savedPlayer1 !== 'Jogador 1'
) {
  player1Input.value = savedPlayer1;
}
const savedPlayer2 = localStorage.getItem('player2');
if (
  player2Input &&
  savedPlayer2 &&
  savedPlayer2.trim().length >= 2 &&
  savedPlayer2 !== 'Cientista 2' &&
  savedPlayer2 !== 'Jogador 2'
) {
  player2Input.value = savedPlayer2;
}

// Pré-seleciona nível e modo
const urlParams = new URLSearchParams(window.location.search);
const presetLevel =
  urlParams.get('level') ||
  (form && form.getAttribute('data-default-level')) ||
  localStorage.getItem('physicsLevel');
if (presetLevel) {
  const radio = document.querySelector(`input[name="level"][value="${presetLevel}"]`);
  if (radio) radio.checked = true;
}

const presetMode = urlParams.get('mode') || localStorage.getItem('physicsGameMode');
if (presetMode) {
  const modeRadio = document.querySelector(`input[name="gameMode"][value="${presetMode}"]`);
  if (modeRadio) modeRadio.checked = true;
}

const goToStep2 = () => {
  const selectedModeInput = document.querySelector('input[name="gameMode"]:checked');
  const selectedLevelInput = document.querySelector('input[name="level"]:checked');
  const modeVal = selectedModeInput ? selectedModeInput.value : 'duelo_pares';
  const levelVal = selectedLevelInput ? selectedLevelInput.value : 'fundamental';
  const isDuel = isTwoPlayerMode(modeVal);

  if (selectedModeSummary) {
    selectedModeSummary.textContent = `${MODE_NAMES[modeVal] || modeVal} • ${
      LEVEL_NAMES[levelVal] || levelVal
    }`;
  }

  if (p2InputWrap && playersNamesGrid) {
    if (isDuel) {
      p2InputWrap.classList.remove('hidden');
      playersNamesGrid.classList.add('two-players');
    } else {
      p2InputWrap.classList.add('hidden');
      playersNamesGrid.classList.remove('two-players');
    }
  }

  if (step1Container && step2Container) {
    step1Container.classList.add('hidden');
    step2Container.classList.remove('hidden');
  }

  if (stepSubtitle) {
    stepSubtitle.innerHTML = isDuel
      ? 'Passo 2 de 2: Toque no campo se quiser colocar o nome dos <strong>2 Jogadores</strong>.'
      : 'Passo 2 de 2: Toque no campo se quiser colocar seu nome.';
  }

  // Rola suavemente para o topo sem dar focus() automático no input (evita abrir o teclado sozinho no celular!)
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const goToStep1 = () => {
  if (step1Container && step2Container) {
    step2Container.classList.add('hidden');
    step1Container.classList.remove('hidden');
  }
  if (stepSubtitle) {
    stepSubtitle.innerHTML =
      'Passo 1 de 2: Escolha o <strong>Modo de Jogo</strong> e o <strong>Nível</strong> para começar.';
  }
};

if (btnNextStep) {
  btnNextStep.addEventListener('click', goToStep2);
}

if (btnBackStep) {
  btnBackStep.addEventListener('click', goToStep1);
}

const handleSubmit = (event) => {
  event.preventDefault();
  const p1Name = (player1Input && player1Input.value.trim()) || 'Jogador 1';
  const p2Name = (player2Input && player2Input.value.trim()) || 'Jogador 2';

  const selectedLevelInput = document.querySelector('input[name="level"]:checked');
  const selectedLevel = selectedLevelInput ? selectedLevelInput.value : 'fundamental';

  const selectedModeInput = document.querySelector('input[name="gameMode"]:checked');
  const selectedMode = selectedModeInput ? selectedModeInput.value : 'duelo_pares';

  localStorage.setItem('player', p1Name);
  localStorage.setItem('player2', p2Name);
  localStorage.setItem('physicsLevel', selectedLevel);
  localStorage.setItem('physicsGameMode', selectedMode);

  window.location = `pages/game.html?level=${encodeURIComponent(selectedLevel)}&mode=${encodeURIComponent(selectedMode)}`;
};

if (form) {
  form.addEventListener('submit', handleSubmit);
}
