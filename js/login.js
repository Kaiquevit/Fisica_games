const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
const avatarMount = document.getElementById('avatar-creator-mount');

let activeAvatarSlot = 1; // 1 = Jogador 1, 2 = Jogador 2

const isTwoPlayerMode = (modeVal) => modeVal === 'duelo' || modeVal === 'duelo_pares';

// 1. Inicializa o Criador de Avatar com suporte a Jogador 1 e Jogador 2
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
          ⚔️ Avatar Jogador 2 (Duelo)
        </button>
      </div>

      <div class="avatar-creator-card ${activeAvatarSlot === 2 ? 'slot-2-card' : ''}">
        <div class="avatar-preview-column">
          <div class="avatar-preview-box" id="avatar-svg-preview">
            ${window.PhysicsAvatar.renderSVG(currentCfg)}
          </div>
          <button type="button" class="btn-random-avatar" id="btn-random-avatar">
            🎲 Aleatório (J${activeAvatarSlot})
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

// 2. Garante que todas as páginas (page1.html, pag2.html, pag3.html) tenham o banner PET de Física - Kaique Vitor, os 6 modos e os 5 níveis (com Médio e Difícil)
const ensureProjectUI = () => {
  if (form && !form.querySelector('.project-credit-banner')) {
    const banner = document.createElement('div');
    banner.className = 'project-credit-banner';
    banner.innerHTML = `
      <span class="project-credit-tag">🎓 Projeto Acadêmico • PET de Física</span>
      <p class="project-credit-title">
        Desenvolvido para o <strong>PET de Física</strong> pelo aluno <strong>Kaique Vitor</strong>
      </p>
      <p class="project-credit-desc">
        Ferramenta educativa gamificada com tabuleiros de <strong>24 cartas (12 pares complementares)</strong>, níveis <strong>Médio (Desenhos + Fórmulas Pela Metade)</strong> e <strong>Difícil (Equações Completas)</strong>, modos <strong>Só Encontrar Pares</strong> ou <strong>Com Quiz</strong>, e <strong>Duelo de 2 Jogadores (1v1)</strong>.
      </p>
    `;
    form.prepend(banner);
  }

  const levelSelector = document.querySelector('.level-selector');
  if (levelSelector && !levelSelector.querySelector('input[value="medio_dificil"]')) {
    const defaultLvl = (form && form.getAttribute('data-default-level')) || 'fundamental';
    levelSelector.innerHTML = `
      <label class="level-option">
        <input type="radio" name="level" value="fundamental" ${defaultLvl === 'fundamental' ? 'checked' : ''}>
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">🔭</span><span class="level-age">10–12 anos • Visual</span></div>
          <div class="level-title">Fundamental (10-12)</div>
          <p class="level-desc">100% Visual e cotidiano (24 cartas / 12 pares).</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="level" value="medio" ${defaultLvl === 'medio' ? 'checked' : ''}>
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">🎨</span><span class="level-age">13–17 • Nível Médio</span></div>
          <div class="level-title">Médio 13-17 (Visual + Dicas)</div>
          <p class="level-desc">Desenhos físicos explicativos + fórmulas pela metade (ex: F = m · [ a ])!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="level" value="medio_dificil">
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">⚛️</span><span class="level-age">13–17 • Nível Difícil</span></div>
          <div class="level-title">Médio 13-17 (Só Fórmulas)</div>
          <p class="level-desc">Conecte o fenômeno diretamente à equação matemática completa!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="level" value="faculdade" ${defaultLvl === 'faculdade' ? 'checked' : ''}>
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">🛠️</span><span class="level-age">Faculdade • Nível Médio</span></div>
          <div class="level-title">Física 1 (Visual + Guiado)</div>
          <p class="level-desc">Desenhos práticos (patinador, chave inglesa, amortecedor) + fórmulas pela metade!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="level" value="faculdade_dificil">
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">🎓</span><span class="level-age">Faculdade • Nível Difícil</span></div>
          <div class="level-title">Física 1 (Cálculo Puro)</div>
          <p class="level-desc">Derivadas Vetoriais, Integrais, Produto Vetorial, Gradiente e EDOs!</p>
        </div>
      </label>
    `;
  }

  const modeSelector = document.querySelector('.mode-selector');
  if (modeSelector && !modeSelector.querySelector('input[value="duelo_pares"]')) {
    modeSelector.innerHTML = `
      <label class="level-option">
        <input type="radio" name="gameMode" value="duelo_pares" checked>
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">⚔️</span><span class="level-age">2 Jogadores • Só Pares</span></div>
          <div class="level-title">Duelo 1v1 (Só Pares)</div>
          <p class="level-desc">Disputa direta (30s por turno) só de encontrar os pares, sem quiz!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="gameMode" value="duelo">
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">🧠</span><span class="level-age">2 Jogadores • +Quiz</span></div>
          <div class="level-title">Duelo 1v1 + Quiz</div>
          <p class="level-desc">Turnos de 30s com Pergunta-Desafio de Física ao acertar cada par!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="gameMode" value="solo_pares">
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">🧩</span><span class="level-age">1 Jogador • Só Pares</span></div>
          <div class="level-title">Solo: Só Encontrar Pares</div>
          <p class="level-desc">Encontre os 12 pares (24 cartas) sem perguntas de quiz!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="gameMode" value="desafio">
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">🔥</span><span class="level-age">1 Jogador • +Quiz</span></div>
          <div class="level-title">Solo: Desafio com Quiz</div>
          <p class="level-desc">Contra o tempo com perguntas-desafio bônus!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="gameMode" value="sobrevivencia">
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">⚡</span><span class="level-age">1 Jogador • 5 Vidas</span></div>
          <div class="level-title">Solo: Sobrevivência</div>
          <p class="level-desc">Radar de 3s e 5 Vidas (❤️)!</p>
        </div>
      </label>
      <label class="level-option">
        <input type="radio" name="gameMode" value="exploracao">
        <div class="level-card">
          <div class="level-card-header"><span class="level-icon">📘</span><span class="level-age">1 Jogador • Livre</span></div>
          <div class="level-title">Solo: Estudo Livre + Quiz</div>
          <p class="level-desc">Estudo livre no seu ritmo com quiz opcional.</p>
        </div>
      </label>
    `;
  }

  if (input && !document.getElementById('player2-name')) {
    const parentGroup = input.closest('.form-group');
    if (parentGroup) {
      parentGroup.innerHTML = `
        <div class="players-names-grid two-players" id="players-names-grid">
          <div>
            <label for="player-name" class="form-label">🏷️ Nome do Jogador 1 (Azul):</label>
            <input
              id="player-name"
              type="text"
              placeholder="Nome do Jogador 1..."
              class="login__input"
              autocomplete="off"
              required
            >
          </div>
          <div class="p2-input-wrap" id="p2-input-wrap">
            <label for="player2-name" class="form-label">⚔️ Nome do Jogador 2 (Laranja):</label>
            <input
              id="player2-name"
              type="text"
              placeholder="Nome do Jogador 2..."
              class="login__input"
              autocomplete="off"
              value="Cientista 2"
            >
          </div>
        </div>
      `;
    }
  }
};

ensureProjectUI();

const player1Input = document.getElementById('player-name') || document.querySelector('.login__input');
const player2Input = document.getElementById('player2-name');
const playersNamesGrid = document.getElementById('players-names-grid');
const p2InputWrap = document.getElementById('p2-input-wrap');

const updateDuelFieldsVisibility = () => {
  const selectedModeInput = document.querySelector('input[name="gameMode"]:checked');
  const isDuel = selectedModeInput && isTwoPlayerMode(selectedModeInput.value);
  if (p2InputWrap && playersNamesGrid) {
    if (isDuel) {
      p2InputWrap.classList.remove('hidden');
      playersNamesGrid.classList.add('two-players');
    } else {
      p2InputWrap.classList.add('hidden');
      playersNamesGrid.classList.remove('two-players');
    }
  }
};

document.querySelectorAll('input[name="gameMode"]').forEach((radio) => {
  radio.addEventListener('change', updateDuelFieldsVisibility);
});

// 3. Preenche os nomes salvos anteriormente se existirem
const savedPlayer1 = localStorage.getItem('player');
if (player1Input && savedPlayer1 && savedPlayer1.trim().length >= 2) {
  player1Input.value = savedPlayer1;
  if (button) button.removeAttribute('disabled');
}

const savedPlayer2 = localStorage.getItem('player2');
if (player2Input) {
  player2Input.value = savedPlayer2 || 'Cientista 2';
}

// 4. Pré-seleciona nível e modo de jogo
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
updateDuelFieldsVisibility();

const validateInput = () => {
  if (!button || !player1Input) return;
  if (player1Input.value.trim().length >= 2) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

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

if (player1Input) {
  player1Input.addEventListener('input', validateInput);
}
if (form) {
  form.addEventListener('submit', handleSubmit);
}
