/**
 * ============================================================================
 * SISTEMA DE CRIAÇÃO E RENDERIZAÇÃO DE AVATAR DE CIENTISTA (SVG DINÂMICO)
 * Suporta Jogador 1 ('physicsAvatar') e Jogador 2 ('physicsAvatarP2')
 * ============================================================================
 */
(function () {
  const DEFAULT_AVATAR = {
    skin: '#FDBA74',
    hairStyle: 'einstein',
    hairColor: '#E2E8F0',
    accessory: 'oculos_lab',
    outfit: 'jaleco',
    title: 'Físico Experimental'
  };

  const DEFAULT_AVATAR_P2 = {
    skin: '#D97706',
    hairStyle: 'curto',
    hairColor: '#1E293B',
    accessory: 'visor',
    outfit: 'astronauta',
    title: 'Engenheiro Quântico'
  };

  const AVATAR_OPTIONS = {
    skins: [
      { id: '#FEE2E2', label: 'Muito Clara' },
      { id: '#FDBA74', label: 'Clara' },
      { id: '#D97706', label: 'Média' },
      { id: '#92400E', label: 'Morena' },
      { id: '#451A03', label: 'Escura' },
      { id: '#38BDF8', label: 'Quântica' }
    ],
    hairStyles: [
      { id: 'einstein', label: 'Einstein' },
      { id: 'curto', label: 'Curto' },
      { id: 'longo', label: 'Longo' },
      { id: 'afro', label: 'Cacheado' },
      { id: 'moicano', label: 'Moicano' }
    ],
    hairColors: [
      { id: '#E2E8F0', label: 'Branco' },
      { id: '#1E293B', label: 'Preto' },
      { id: '#78350F', label: 'Castanho' },
      { id: '#FACC15', label: 'Loiro' },
      { id: '#EA580C', label: 'Ruivo' },
      { id: '#3B82F6', label: 'Azul Neon' }
    ],
    accessories: [
      { id: 'oculos_lab', label: 'Óculos Lab' },
      { id: 'oculos_grau', label: 'Óculos Grau' },
      { id: 'visor', label: 'Visor Laser' },
      { id: 'capelo', label: 'Formatura' },
      { id: 'nenhum', label: 'Nenhum' }
    ],
    outfits: [
      { id: 'jaleco', label: 'Jaleco Lab' },
      { id: 'astronauta', label: 'Astronauta' },
      { id: 'moletom', label: 'Engenharia' },
      { id: 'cyber', label: 'Quântico' }
    ],
    titles: [
      'Explorador de Newton',
      'Físico Experimental',
      'Mestre do Cálculo',
      'Engenheiro Quântico',
      'Astrofísico Relativista'
    ]
  };

  const getStorageKey = (playerSlot = 1) =>
    playerSlot === 2 ? 'physicsAvatarP2' : 'physicsAvatar';

  const getDefaultForSlot = (playerSlot = 1) =>
    playerSlot === 2 ? DEFAULT_AVATAR_P2 : DEFAULT_AVATAR;

  const loadConfig = (playerSlot = 1) => {
    const def = getDefaultForSlot(playerSlot);
    try {
      const raw = localStorage.getItem(getStorageKey(playerSlot));
      if (!raw) return { ...def };
      return { ...def, ...JSON.parse(raw) };
    } catch (e) {
      return { ...def };
    }
  };

  const saveConfig = (cfg, playerSlot = 1) => {
    const def = getDefaultForSlot(playerSlot);
    const merged = { ...def, ...cfg };
    localStorage.setItem(getStorageKey(playerSlot), JSON.stringify(merged));
    return merged;
  };

  const renderHairSVG = (style, color) => {
    switch (style) {
      case 'einstein':
        return `<path d="M24 52 L14 40 L26 38 L18 24 L34 28 L35 14 L47 24 L60 12 L68 24 L82 14 L84 28 L98 22 L92 38 L106 42 L95 54 Z" fill="${color}"/>`;
      case 'curto':
        return `<path d="M28 52 Q28 20 60 20 Q92 20 92 52 Q75 36 60 36 Q45 36 28 52 Z" fill="${color}"/>`;
      case 'longo':
        return `<path d="M25 48 Q25 18 60 18 Q95 18 95 48 L100 88 Q88 92 84 82 L84 50 Q60 35 36 50 L36 82 Q32 92 20 88 Z" fill="${color}"/>`;
      case 'afro':
        return `
          <circle cx="34" cy="40" r="18" fill="${color}"/>
          <circle cx="60" cy="28" r="22" fill="${color}"/>
          <circle cx="86" cy="40" r="18" fill="${color}"/>
        `;
      case 'moicano':
        return `<polygon points="52,8 68,8 73,38 47,38" fill="${color}"/>`;
      default:
        return '';
    }
  };

  const renderOutfitSVG = (outfit) => {
    switch (outfit) {
      case 'astronauta':
        return `
          <path d="M22 115 Q26 82 60 82 Q94 82 98 115 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="3"/>
          <rect x="44" y="92" width="32" height="18" rx="4" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
          <circle cx="52" cy="101" r="3" fill="#EF4444"/>
          <circle cx="60" cy="101" r="3" fill="#22C55E"/>
          <circle cx="68" cy="101" r="3" fill="#38BDF8"/>
        `;
      case 'moletom':
        return `
          <path d="M22 115 Q26 82 60 82 Q94 82 98 115 Z" fill="#2563EB"/>
          <path d="M46 84 L60 104 L74 84" fill="none" stroke="#93C5FD" stroke-width="3"/>
          <text x="60" y="111" text-anchor="middle" fill="#FACC15" font-size="11" font-weight="bold">E=mc²</text>
        `;
      case 'cyber':
        return `
          <path d="M20 115 L30 82 L60 90 L90 82 L100 115 Z" fill="#0F172A" stroke="#38BDF8" stroke-width="3"/>
          <circle cx="60" cy="100" r="9" fill="#38BDF8"/>
          <circle cx="60" cy="100" r="4" fill="#FFFFFF"/>
        `;
      case 'jaleco':
      default:
        return `
          <path d="M22 115 Q26 82 60 82 Q94 82 98 115 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
          <polygon points="48,82 60,115 72,82" fill="#1E3A8A"/>
          <polygon points="57,86 63,86 64,108 60,113 56,108" fill="#EF4444"/>
          <path d="M44 82 L54 106 M76 82 L66 106" stroke="#94A3B8" stroke-width="2"/>
        `;
    }
  };

  const renderAccessorySVG = (accessory) => {
    switch (accessory) {
      case 'oculos_lab':
        return `
          <rect x="33" y="47" width="24" height="16" rx="6" fill="#38BDF8" fill-opacity="0.45" stroke="#0284C7" stroke-width="3"/>
          <rect x="63" y="47" width="24" height="16" rx="6" fill="#38BDF8" fill-opacity="0.45" stroke="#0284C7" stroke-width="3"/>
          <line x1="57" y1="55" x2="63" y2="55" stroke="#0284C7" stroke-width="3"/>
        `;
      case 'oculos_grau':
        return `
          <circle cx="46" cy="55" r="11" fill="none" stroke="#1E293B" stroke-width="3"/>
          <circle cx="74" cy="55" r="11" fill="none" stroke="#1E293B" stroke-width="3"/>
          <line x1="57" y1="55" x2="63" y2="55" stroke="#1E293B" stroke-width="3"/>
        `;
      case 'visor':
        return `
          <rect x="31" y="48" width="58" height="14" rx="7" fill="#F97316" fill-opacity="0.85" stroke="#FFEDD5" stroke-width="2"/>
          <line x1="38" y1="53" x2="82" y2="53" stroke="#FEF08A" stroke-width="2"/>
        `;
      case 'capelo':
        return `
          <polygon points="60,8 22,22 60,34 98,22" fill="#1E293B" stroke="#FACC15" stroke-width="2"/>
          <line x1="92" y1="24" x2="96" y2="42" stroke="#FACC15" stroke-width="3"/>
          <circle cx="96" cy="43" r="3" fill="#FACC15"/>
        `;
      default:
        return '';
    }
  };

  const renderSVG = (config = loadConfig(1)) => {
    const cfg = { ...DEFAULT_AVATAR, ...config };
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="scientist-avatar-svg">
        <defs>
          <radialGradient id="avBgGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#1E3A8A"/>
            <stop offset="100%" stop-color="#0F172A"/>
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="url(#avBgGrad)" stroke="#38BDF8" stroke-width="3"/>
        ${renderHairSVG(cfg.hairStyle, cfg.hairColor)}
        <rect x="51" y="72" width="18" height="16" rx="6" fill="${cfg.skin}"/>
        ${renderOutfitSVG(cfg.outfit)}
        <circle cx="30" cy="58" r="6" fill="${cfg.skin}"/>
        <circle cx="90" cy="58" r="6" fill="${cfg.skin}"/>
        <circle cx="60" cy="56" r="28" fill="${cfg.skin}"/>
        <circle cx="48" cy="55" r="3.8" fill="#0F172A"/>
        <circle cx="72" cy="55" r="3.8" fill="#0F172A"/>
        <circle cx="49" cy="53.5" r="1.3" fill="#FFFFFF"/>
        <circle cx="73" cy="53.5" r="1.3" fill="#FFFFFF"/>
        <path d="M49 67 Q60 76 71 67" fill="none" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
        ${renderAccessorySVG(cfg.accessory)}
      </svg>
    `;
  };

  const randomize = (playerSlot = 1) => {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    return saveConfig(
      {
        skin: pick(AVATAR_OPTIONS.skins).id,
        hairStyle: pick(AVATAR_OPTIONS.hairStyles).id,
        hairColor: pick(AVATAR_OPTIONS.hairColors).id,
        accessory: pick(AVATAR_OPTIONS.accessories).id,
        outfit: pick(AVATAR_OPTIONS.outfits).id,
        title: pick(AVATAR_OPTIONS.titles)
      },
      playerSlot
    );
  };

  window.PhysicsAvatar = {
    DEFAULT_AVATAR,
    DEFAULT_AVATAR_P2,
    AVATAR_OPTIONS,
    loadConfig,
    saveConfig,
    renderSVG,
    randomize
  };
})();
