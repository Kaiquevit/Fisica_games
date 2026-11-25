/**
 * ============================================================================
 * PROJETO EDUCATIVO: FÍSICAPLAY — OPET DE FÍSICA
 * Desenvolvido pelo aluno: Kaique Vitor
 * ============================================================================
 * ESTRUTURA DE DADOS PEDAGÓGICA (36 PARES = 72 CARTAS NO TOTAL)
 * Níveis e Dificuldades disponíveis:
 *  - 'fundamental': Ensino Fundamental (10-12 anos) -> 12 pares (24 cartas) [Mantido como está]
 *  - 'medio': Ensino Médio (13-17) [Nível Médio: Desenhos Físicos + Fórmulas Pela Metade]
 *  - 'medio_dificil': Ensino Médio (13-17) [Nível Difícil: Fórmulas Completas]
 *  - 'faculdade': Física 1 Universitária [Nível Médio: Desenhos Práticos + Fórmulas Guiadas]
 *  - 'faculdade_dificil': Física 1 Universitária [Nível Difícil: Cálculo Diferencial/Integral Puro]
 */
const PHYSICS_GAME_DATA = {
  // ==========================================================================
  // NÍVEL 1: ENSINO FUNDAMENTAL (10 a 12 anos) - 12 Pares (24 Cartas)
  // ==========================================================================
  fundamental: [
    // PAR 1: Gravidade
    {
      pairId: 'gravidade',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_1a_newton_maca.svg',
      label: 'Newton e a Maçã Caindo',
      conceptTitle: 'Gravidade!',
      explanation:
        'Gravidade! É a força invisível que puxa tudo para o chão e mantém os planetas girando ao redor do Sol.',
      challenge: {
        question: 'Se você soltar uma bola na Lua (que tem menos massa que a Terra), o que acontece?',
        options: [
          'Ela cai mais devagar, pois a gravidade da Lua é menor.',
          'Ela sobe para o espaço infinito.',
          'Ela cai mais rápido que na Terra.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'gravidade',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_1b_terra_gravidade.svg',
      label: 'Terra Puxando Objetos',
      conceptTitle: 'Gravidade!',
      explanation:
        'Gravidade! É a força invisível que puxa tudo para o chão e mantém os planetas girando ao redor do Sol.'
    },

    // PAR 2: Estados da Matéria
    {
      pairId: 'estados_materia',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_2a_chaleira_fervendo.svg',
      label: 'Chaleira Fervendo (Vapor)',
      conceptTitle: 'Estados da Matéria!',
      explanation:
        'Estados da Matéria! O calor faz as moléculas se agitarem mais rápido, mudando a água de sólida para líquida e gasosa.',
      challenge: {
        question: 'O que acontece com as moléculas da água quando aumentamos muito a temperatura?',
        options: [
          'Elas ficam paradas e congelam.',
          'Elas se agitam mais rápido e se espalham como vapor.',
          'Elas diminuem de tamanho até sumir.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'estados_materia',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_2b_gelo_derretendo.svg',
      label: 'Cubo de Gelo Derretendo',
      conceptTitle: 'Estados da Matéria!',
      explanation:
        'Estados da Matéria! O calor faz as moléculas se agitarem mais rápido, mudando a água de sólida para líquida e gasosa.'
    },

    // PAR 3: Magnetismo
    {
      pairId: 'magnetismo',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_3a_ima_pregos.svg',
      label: 'Ímã Atraindo Pregos',
      conceptTitle: 'Magnetismo!',
      explanation:
        'Magnetismo! Ímãs têm dois polos (Norte e Sul) e criam um campo invisível que atrai metais e orienta as bússolas.',
      challenge: {
        question: 'O que acontece quando aproximamos dois polos iguais de dois ímãs (Norte com Norte)?',
        options: [
          'Eles se atraem com o dobro da força.',
          'Eles se repelem (empurram um ao outro).',
          'Eles perdem o magnetismo na hora.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'magnetismo',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_3b_bussola_norte.svg',
      label: 'Bússola Apontando o Norte',
      conceptTitle: 'Magnetismo!',
      explanation:
        'Magnetismo! Ímãs têm dois polos (Norte e Sul) e criam um campo invisível que atrai metais e orienta as bússolas.'
    },

    // PAR 4: Refração da Luz
    {
      pairId: 'refracao_luz',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_4a_prisma_luz.svg',
      label: 'Prisma Dividindo Luz Branca',
      conceptTitle: 'Refração da Luz!',
      explanation:
        'Refração da Luz! A luz branca parece de uma cor só, mas na verdade é a mistura de todas as cores do arco-íris!',
      challenge: {
        question: 'No céu após a chuva, o que funciona como pequenos prismas para formar o arco-íris?',
        options: [
          'As gotículas de água suspensas no ar.',
          'As partículas de poeira do chão.',
          'O vento soprando nas nuvens.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'refracao_luz',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_4b_gota_sol.svg',
      label: 'Gota de Chuva + Luz do Sol',
      conceptTitle: 'Refração da Luz!',
      explanation:
        'Refração da Luz! A luz branca parece de uma cor só, mas na verdade é a mistura de todas as cores do arco-íris!'
    },

    // PAR 5: Máquinas Simples
    {
      pairId: 'maquinas_simples',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_5a_alavanca_gangorra.svg',
      label: 'Alavanca Levantando Peso',
      conceptTitle: 'Máquinas Simples!',
      explanation:
        'Máquinas Simples! Com uma alavanca e um ponto de apoio no lugar certo, você multiplica sua força sem precisar fazer esforço extra.',
      challenge: {
        question: 'Para levantar uma pedra muito pesada fazendo menos força na alavanca, onde deve ficar o ponto de apoio?',
        options: [
          'Bem perto da pedra pesada.',
          'Bem longe da pedra e perto da sua mão.',
          'Fora da tábua.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'maquinas_simples',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_5b_ponto_apoio.svg',
      label: 'Ponto de Apoio (Fulcro)',
      conceptTitle: 'Máquinas Simples!',
      explanation:
        'Máquinas Simples! Com uma alavanca e um ponto de apoio no lugar certo, você multiplica sua força sem precisar fazer esforço extra.'
    },

    // PAR 6: Corrente Elétrica
    {
      pairId: 'corrente_eletrica',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_6a_circuito_pilha.svg',
      label: 'Circuito com Pilha e Fio',
      conceptTitle: 'Corrente Elétrica!',
      explanation:
        'Corrente Elétrica! Quando fechamos o caminho com um fio, os elétrons correm da pilha até a lâmpada e geram luz.',
      challenge: {
        question: 'Se o fio do circuito for cortado no meio (circuito aberto), o que acontece com a lâmpada?',
        options: [
          'Ela brilha mais forte.',
          'Ela apaga, pois os elétrons não conseguem completar o caminho.',
          'Ela pisca em cores diferentes.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'corrente_eletrica',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_6b_lampada_acesa.svg',
      label: 'Lâmpada Acesa',
      conceptTitle: 'Corrente Elétrica!',
      explanation:
        'Corrente Elétrica! Quando fechamos o caminho com um fio, os elétrons correm da pilha até a lâmpada e geram luz.'
    },

    // PAR 7: Ondas Sonoras / Acústica
    {
      pairId: 'som_vibracao',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_7a_sino_som.svg',
      label: 'Sino Vibrando no Ar',
      conceptTitle: 'Ondas Sonoras (Acústica)!',
      explanation:
        'Ondas Sonoras! O som nasce da vibração de objetos e viaja pelo ar como ondas invisíveis até chegar aos nossos ouvidos.',
      challenge: {
        question: 'Por que não conseguimos ouvir sons no vácuo do espaço sideral?',
        options: [
          'Porque o som precisa de um meio material (como o ar ou a água) para vibrar e se propagar.',
          'Porque no espaço faz muito frio.',
          'Porque a gravidade bloqueia o som.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'som_vibracao',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_7b_ouvido_ondas.svg',
      label: 'Ouvido Captando Vibrações',
      conceptTitle: 'Ondas Sonoras (Acústica)!',
      explanation:
        'Ondas Sonoras! O som nasce da vibração de objetos e viaja pelo ar como ondas invisíveis até chegar aos nossos ouvidos.'
    },

    // PAR 8: Força de Atrito
    {
      pairId: 'forca_atrito',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_8a_tenis_atrito.svg',
      label: 'Tênis Antiderrapante no Asfalto',
      conceptTitle: 'Força de Atrito!',
      explanation:
        'Força de Atrito! Superfícies rugosas como a sola do tênis criam atrito para não escorregarmos; já no gelo liso, o atrito é mínimo e deslizamos!',
      challenge: {
        question: 'Qual é a função das ranhuras no solado do tênis e nos pneus dos carros?',
        options: [
          'Deixar o tênis mais pesado.',
          'Aumentar a aderência e o atrito com o chão para evitar derrapagens.',
          'Diminuir o atrito para escorregar mais.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'forca_atrito',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_8b_patins_gelo.svg',
      label: 'Patins Deslizando no Gelo',
      conceptTitle: 'Força de Atrito!',
      explanation:
        'Força de Atrito! Superfícies rugosas como a sola do tênis criam atrito para não escorregarmos; já no gelo liso, o atrito é mínimo e deslizamos!'
    },

    // PAR 9: Empuxo e Flutuação (Arquimedes)
    {
      pairId: 'empuxo_arquimedes',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_9a_barco_flutuando.svg',
      label: 'Barco Flutuando no Mar',
      conceptTitle: 'Empuxo e Flutuação!',
      explanation:
        'Empuxo (Princípio de Arquimedes)! A água empurra os objetos para cima com uma força chamada Empuxo. Se o barco desloca bastante água, ele flutua!',
      challenge: {
        question: 'Por que um navio enorme de aço flutua enquanto uma pequena âncora maciça afunda?',
        options: [
          'Porque o casco do navio tem grande volume cheio de ar, deslocando muita água e gerando grande empuxo.',
          'Porque o aço do navio não tem peso.',
          'Porque o vento segura o navio.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'empuxo_arquimedes',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_9b_ancora_empuxo.svg',
      label: 'Bola Flutuando vs Âncora Afundando',
      conceptTitle: 'Empuxo e Flutuação!',
      explanation:
        'Empuxo (Princípio de Arquimedes)! A água empurra os objetos para cima com uma força chamada Empuxo. Se o barco desloca bastante água, ele flutua!'
    },

    // PAR 10: Pressão Atmosférica e dos Gases
    {
      pairId: 'pressao_ar',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_10a_ventosa_pressao.svg',
      label: 'Canudo e Pressão do Ar',
      conceptTitle: 'Pressão do Ar e Atmosférica!',
      explanation:
        'Pressão Atmosférica! O ar ao nosso redor exerce pressão sobre tudo: ele empurra o suco pelo canudo quando sugamos e estica as paredes de um balão cheio!',
      challenge: {
        question: 'Quando você toma suco de canudinho, o que realmente empurra o líquido para subir pelo canudo?',
        options: [
          'A pressão atmosférica do ar empurrando a superfície do suco no copo.',
          'A gravidade puxando o suco para cima.',
          'O magnetismo do plástico.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'pressao_ar',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_10b_balao_pressao.svg',
      label: 'Balão Inflado com Pressão Interna',
      conceptTitle: 'Pressão do Ar e Atmosférica!',
      explanation:
        'Pressão Atmosférica! O ar ao nosso redor exerce pressão sobre tudo: ele empurra o suco pelo canudo quando sugamos e estica as paredes de um balão cheio!'
    },

    // PAR 11: Reflexão da Luz e Espelhos
    {
      pairId: 'reflexao_espelho',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_11a_lanterna_espelho.svg',
      label: 'Raio de Luz Refletindo no Espelho',
      conceptTitle: 'Reflexão da Luz!',
      explanation:
        'Reflexão da Luz! Quando a luz bate em uma superfície polida como um espelho, ela muda de direção com o mesmo ângulo, permitindo o funcionamento de periscópios!',
      challenge: {
        question: 'Na reflexão da luz em um espelho plano, se o raio entra inclinado a 45°, com qual ângulo ele sai refletido?',
        options: [
          'Com os mesmos 45° (o ângulo de incidência é igual ao de reflexão).',
          'Com 90°.',
          'Ele atravessa o espelho sem desviar.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'reflexao_espelho',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_11b_periscopio_luz.svg',
      label: 'Periscópio com Dois Espelhos',
      conceptTitle: 'Reflexão da Luz!',
      explanation:
        'Reflexão da Luz! Quando a luz bate em uma superfície polida como um espelho, ela muda de direção com o mesmo ângulo, permitindo o funcionamento de periscópios!'
    },

    // PAR 12: Transformação de Energia Solar
    {
      pairId: 'energia_solar',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/fund_12a_painel_solar.svg',
      label: 'Painel Solar Captando Luz do Sol',
      conceptTitle: 'Transformação de Energia!',
      explanation:
        'Transformação de Energia! Na Física, a energia nunca surge do nada: os painéis solares transformam a energia luminosa do Sol em energia elétrica para iluminar uma casa!',
      challenge: {
        question: 'Qual transformação de energia ocorre em uma placa solar fotovoltaica no telhado?',
        options: [
          'Energia luminosa do Sol é transformada em energia elétrica.',
          'Energia do vento é transformada em som.',
          'Energia elétrica é transformada em carvão.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'energia_solar',
      type: 'B',
      contentType: 'image',
      content: '../images/fisica/fund_12b_casa_energia.svg',
      label: 'Casa Iluminada por Energia Limpa',
      conceptTitle: 'Transformação de Energia!',
      explanation:
        'Transformação de Energia! Na Física, a energia nunca surge do nada: os painéis solares transformam a energia luminosa do Sol em energia elétrica para iluminar uma casa!'
    }
  ],

  // ==========================================================================
  // NÍVEL 2: ENSINO MÉDIO (13 a 17 anos) - 12 Pares (24 Cartas)
  // Suporta Nível Médio (Desenhos + Fórmulas Pela Metade) e Nível Difícil (Só Fórmulas)
  // ==========================================================================
  medio: [
    // PAR 1: Cinemática
    {
      pairId: 'cinematica',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_1a_carro_acelerando.svg',
      label: 'Carro Acelerando na Pista',
      conceptTitle: 'Cinemática!',
      explanation:
        'Cinemática! A velocidade média mede o quanto você se desloca em um intervalo de tempo; se ela muda, entra a aceleração.',
      challenge: {
        question: 'Um carro aumenta sua velocidade de 10 m/s para 30 m/s em 4 segundos. Qual é sua aceleração média?',
        options: ['5 m/s²', '10 m/s²', '20 m/s²'],
        answerIndex: 0
      }
    },
    {
      pairId: 'cinematica',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_1b_velocimetro_tempo.svg',
      halfFormulaHtml: 'v = &Delta;S &divide; <span class="half-blank">&Delta;t</span>',
      content: 'v = \\frac{\\Delta S}{\\Delta t}',
      secondaryLatex: 'a = \\frac{\\Delta v}{\\Delta t}',
      fallbackHtml: '<strong>v = &Delta;S / &Delta;t</strong><br><small>a = &Delta;v / &Delta;t</small>',
      label: 'Velocímetro: Distância ÷ Tempo',
      conceptTitle: 'Cinemática!',
      explanation:
        'Cinemática! A velocidade média mede o quanto você se desloca em um intervalo de tempo; se ela muda, entra a aceleração.'
    },

    // PAR 2: 2ª Lei de Newton
    {
      pairId: 'segunda_lei_newton',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_2a_empurrando_caixa.svg',
      label: 'Empurrando Caixa Pesada',
      conceptTitle: '2ª Lei de Newton!',
      explanation:
        '2ª Lei de Newton! A aceleração de um corpo é diretamente proporcional à força resultante aplicada sobre ele e inversamente proporcional à sua massa.',
      challenge: {
        question: 'Se aplicarmos uma força resultante de 60 N em uma caixa de 15 kg, qual será sua aceleração?',
        options: ['2 m/s²', '4 m/s²', '45 m/s²'],
        answerIndex: 1
      }
    },
    {
      pairId: 'segunda_lei_newton',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_2b_massa_aceleracao.svg',
      halfFormulaHtml: 'F = m &middot; <span class="half-blank">a</span>',
      content: 'F_R = m \\cdot a',
      fallbackHtml: '<strong>F<sub>R</sub> = m &middot; a</strong>',
      label: '2ª Lei: Massa × Aceleração',
      conceptTitle: '2ª Lei de Newton!',
      explanation:
        '2ª Lei de Newton! A aceleração de um corpo é diretamente proporcional à força resultante aplicada sobre ele e inversamente proporcional à sua massa.'
    },

    // PAR 3: Conservação de Energia
    {
      pairId: 'conservacao_energia',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_3a_montanha_russa.svg',
      label: 'Montanha-Russa no Topo',
      conceptTitle: 'Conservação de Energia!',
      explanation:
        'Conservação de Energia! No topo, toda energia é Potencial Gravitacional; na descida, ela se transforma em Energia Cinética (movimento).',
      challenge: {
        question: 'Desprezando o atrito, se a velocidade do carrinho dobra na descida, o que ocorre com sua Energia Cinética?',
        options: [
          'Ela dobra (2x).',
          'Ela quadruplica (4x), pois depende de v².',
          'Ela permanece constante.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'conservacao_energia',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_3b_barras_energia.svg',
      halfFormulaHtml: 'E<sub>p</sub> = m&middot;g&middot;<span class="half-blank">h</span> &rarr; E<sub>c</sub>',
      content: 'E_p = m \\cdot g \\cdot h',
      secondaryLatex: 'E_c = \\frac{m \\cdot v^2}{2}',
      fallbackHtml: '<strong>E<sub>p</sub> = m&middot;g&middot;h</strong><br><small>E<sub>c</sub> = m&middot;v&sup2; / 2</small>',
      label: 'Energia Potencial ➔ Cinética',
      conceptTitle: 'Conservação de Energia!',
      explanation:
        'Conservação de Energia! No topo, toda energia é Potencial Gravitacional; na descida, ela se transforma em Energia Cinética (movimento).'
    },

    // PAR 4: 3ª Lei de Newton (Ação e Reação)
    {
      pairId: 'terceira_lei_newton',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_4a_foguete_decolando.svg',
      label: 'Foguete Decolando',
      conceptTitle: '3ª Lei de Newton (Ação e Reação)!',
      explanation:
        '3ª Lei de Newton (Ação e Reação)! Toda ação gera uma reação de mesma intensidade, mesma direção e sentido oposto, atuando em corpos diferentes.',
      challenge: {
        question: 'Por que os pares de forças de Ação e Reação nunca se anulam mutuamente?',
        options: [
          'Porque uma força é sempre maior que a outra.',
          'Porque elas são aplicadas em corpos diferentes.',
          'Porque atuam em instantes de tempo diferentes.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'terceira_lei_newton',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_4b_acao_reacao_setas.svg',
      halfFormulaHtml: 'F<sub>Ação</sub> = <span class="half-blank">&minus;F<sub>Reação</sub></span>',
      content: '\\vec{F}_{AB} = -\\vec{F}_{BA}',
      fallbackHtml: '<strong>F&#8407;<sub>AB</sub> = &minus;F&#8407;<sub>BA</sub></strong>',
      label: '3ª Lei: Ação e Reação Opostas',
      conceptTitle: '3ª Lei de Newton (Ação e Reação)!',
      explanation:
        '3ª Lei de Newton (Ação e Reação)! Toda ação gera uma reação de mesma intensidade, mesma direção e sentido oposto, atuando em corpos diferentes.'
    },

    // PAR 5: 1ª Lei de Ohm / Efeito Joule
    {
      pairId: 'primeira_lei_ohm',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_5a_resistor_aquecendo.svg',
      label: 'Resistor Aquecendo (Joule)',
      conceptTitle: '1ª Lei de Ohm!',
      explanation:
        '1ª Lei de Ohm! A tensão elétrica ($U$) é proporcional à corrente ($i$). Quanto maior a resistência ($R$), mais energia elétrica vira calor (Efeito Joule).',
      challenge: {
        question: 'Um resistor de 20 Ω é ligado a uma fonte de tensão U = 100 V. Qual é a corrente elétrica i?',
        options: ['5 A', '2000 A', '0,2 A'],
        answerIndex: 0
      }
    },
    {
      pairId: 'primeira_lei_ohm',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_5b_ohm_circuito.svg',
      halfFormulaHtml: 'U = R &middot; <span class="half-blank">i</span>',
      content: 'U = R \\cdot i',
      fallbackHtml: '<strong>U = R &middot; i</strong>',
      label: 'Triângulo da 1ª Lei de Ohm',
      conceptTitle: '1ª Lei de Ohm!',
      explanation:
        '1ª Lei de Ohm! A tensão elétrica ($U$) é proporcional à corrente ($i$). Quanto maior a resistência ($R$), mais energia elétrica vira calor (Efeito Joule).'
    },

    // PAR 6: Ondulatória
    {
      pairId: 'ondulatoria',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_6a_onda_vibrando.svg',
      label: 'Onda Vibrando (Crista e Vale)',
      conceptTitle: 'Ondulatória!',
      explanation:
        'Ondulatória! A velocidade de propagação de uma onda depende do seu comprimento ($\\lambda$) e da sua frequência ($f$).',
      challenge: {
        question: 'Uma onda tem comprimento λ = 2 m e frequência f = 15 Hz. Qual é sua velocidade de propagação?',
        options: ['7,5 m/s', '30 m/s', '17 m/s'],
        answerIndex: 1
      }
    },
    {
      pairId: 'ondulatoria',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_6b_regua_onda.svg',
      halfFormulaHtml: 'v = <span class="half-blank">&lambda;</span> &middot; f',
      content: 'v = \\lambda \\cdot f',
      fallbackHtml: '<strong>v = &lambda; &middot; f</strong>',
      label: 'Comprimento λ × Frequência f',
      conceptTitle: 'Ondulatória!',
      explanation:
        'Ondulatória! A velocidade de propagação de uma onda depende do seu comprimento ($\\lambda$) e da sua frequência ($f$).'
    },

    // PAR 7: Calorimetria (Calor Sensível)
    {
      pairId: 'calorimetria',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_7a_calorimetria_bequer.svg',
      label: 'Béquer Aquecido e Termômetro',
      conceptTitle: 'Calorimetria (Calor Sensível)!',
      explanation:
        'Calorimetria! A quantidade de calor sensível ($Q$) necessária para variar a temperatura ($\\Delta T$) de uma substância depende da sua massa ($m$) e do seu calor específico ($c$).',
      challenge: {
        question: 'Para aquecer 100 g de água (c = 1 cal/g°C) em ΔT = 20 °C, qual é a quantidade de calor Q necessária?',
        options: ['2000 cal', '5 cal', '120 cal'],
        answerIndex: 0
      }
    },
    {
      pairId: 'calorimetria',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_7b_calor_termometro.svg',
      halfFormulaHtml: 'Q = m &middot; c &middot; <span class="half-blank">&Delta;T</span>',
      content: 'Q = m \\cdot c \\cdot \\Delta T',
      fallbackHtml: '<strong>Q = m &middot; c &middot; &Delta;T</strong>',
      label: 'Calor Sensível (Que Macete!)',
      conceptTitle: 'Calorimetria (Calor Sensível)!',
      explanation:
        'Calorimetria! A quantidade de calor sensível ($Q$) necessária para variar a temperatura ($\\Delta T$) de uma substância depende da sua massa ($m$) e do seu calor específico ($c$).'
    },

    // PAR 8: Gases Ideais (Clapeyron)
    {
      pairId: 'gases_ideais',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_8a_cilindro_gas.svg',
      label: 'Êmbolo Comprimindo Gás',
      conceptTitle: 'Termodinâmica & Gases Ideais!',
      explanation:
        'Equação de Clapeyron! Em um gás ideal, a pressão ($P$), o volume ($V$) e a temperatura absoluta em Kelvin ($T$) estão diretamente relacionados por $P \\cdot V = n \\cdot R \\cdot T$.',
      challenge: {
        question: 'Em uma transformação isotérmica (temperatura T constante), se reduzirmos o volume V do gás pela metade, o que ocorre com a pressão P?',
        options: ['A pressão P dobra.', 'A pressão P cai pela metade.', 'A pressão zera.'],
        answerIndex: 0
      }
    },
    {
      pairId: 'gases_ideais',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_8b_gas_temperatura.svg',
      halfFormulaHtml: 'P &middot; V = n &middot; R &middot; <span class="half-blank">T</span>',
      content: 'P \\cdot V = n \\cdot R \\cdot T',
      fallbackHtml: '<strong>P &middot; V = n &middot; R &middot; T</strong>',
      label: 'Gases: Pressão, Volume e Temp.',
      conceptTitle: 'Termodinâmica & Gases Ideais!',
      explanation:
        'Equação de Clapeyron! Em um gás ideal, a pressão ($P$), o volume ($V$) e a temperatura absoluta em Kelvin ($T$) estão diretamente relacionados por $P \\cdot V = n \\cdot R \\cdot T$.'
    },

    // PAR 9: Hidrostática (Teorema de Stevin)
    {
      pairId: 'hidrostatica_stevin',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_9a_submarino_pressao.svg',
      label: 'Submarino em Águas Profundas',
      conceptTitle: 'Hidrostática (Lei de Stevin)!',
      explanation:
        'Teorema de Stevin! A pressão total em um líquido aumenta linearmente com a profundidade ($h$), somando a pressão atmosférica ($P_0$) à coluna de líquido ($\\rho \\cdot g \\cdot h$).',
      challenge: {
        question: 'Na água do mar, a cada 10 metros de profundidade a pressão aumenta aproximadamente 1 atm. A 30 m de profundidade, qual é a pressão total (P0 = 1 atm)?',
        options: ['4 atm (1 atm do ar + 3 atm da água)', '3 atm', '30 atm'],
        answerIndex: 0
      }
    },
    {
      pairId: 'hidrostatica_stevin',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_9b_garrafa_pressao.svg',
      halfFormulaHtml: 'P = P<sub>0</sub> + &rho;&middot;g&middot;<span class="half-blank">h</span>',
      content: 'P = P_0 + \\rho \\cdot g \\cdot h',
      fallbackHtml: '<strong>P = P<sub>0</sub> + &rho; &middot; g &middot; h</strong>',
      label: 'Pressão na Profundidade h',
      conceptTitle: 'Hidrostática (Lei de Stevin)!',
      explanation:
        'Teorema de Stevin! A pressão total em um líquido aumenta linearmente com a profundidade ($h$), somando a pressão atmosférica ($P_0$) à coluna de líquido ($\\rho \\cdot g \\cdot h$).'
    },

    // PAR 10: Eletrostática (Lei de Coulomb)
    {
      pairId: 'lei_coulomb',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_10a_cargas_coulomb.svg',
      label: 'Cargas Elétricas +q1 e -q2',
      conceptTitle: 'Eletrostática (Lei de Coulomb)!',
      explanation:
        'Lei de Coulomb! A força elétrica ($F_e$) de atração ou repulsão entre duas cargas puntiformes é proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância ($d^2$).',
      challenge: {
        question: 'Se dobrarmos a distância d entre duas cargas elétricas, o que acontece com a força elétrica entre elas?',
        options: [
          'Cai para 1/4 do valor inicial (pois divide por d²).',
          'Dobra de intensidade.',
          'Cai pela metade.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'lei_coulomb',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_10b_forca_eletrica.svg',
      halfFormulaHtml: 'F<sub>e</sub> = k&middot;(q<sub>1</sub>q<sub>2</sub>) &divide; <span class="half-blank">d&sup2;</span>',
      content: 'F_e = k_0 \\frac{|q_1 \\cdot q_2|}{d^2}',
      fallbackHtml: '<strong>F<sub>e</sub> = k<sub>0</sub> |q<sub>1</sub>&middot;q<sub>2</sub>| / d&sup2;</strong>',
      label: 'Força Elétrica entre Cargas',
      conceptTitle: 'Eletrostática (Lei de Coulomb)!',
      explanation:
        'Lei de Coulomb! A força elétrica ($F_e$) de atração ou repulsão entre duas cargas puntiformes é proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância ($d^2$).'
    },

    // PAR 11: Óptica Geométrica (Lei de Snell)
    {
      pairId: 'lei_snell',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_11a_laser_refracao.svg',
      label: 'Raio Laser Refratando na Água',
      conceptTitle: 'Refração e Lei de Snell-Descartes!',
      explanation:
        'Lei de Snell-Descartes! Quando a luz passa de um meio para outro com índice de refração maior ($n_2 > n_1$), sua velocidade diminui e o raio se aproxima da reta normal ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$).',
      challenge: {
        question: 'Quando um feixe de luz passa do ar (n=1) para o vidro (n=1,5) obliquamente, o que ocorre com o raio?',
        options: [
          'Sua velocidade diminui e ele se aproxima da reta normal.',
          'Sua velocidade aumenta e ele se afasta da normal.',
          'Ele para de se propagar.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'lei_snell',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_11b_lapis_agua.svg',
      halfFormulaHtml: 'n<sub>1</sub>&middot;sen&theta;<sub>1</sub> = n<sub>2</sub>&middot;<span class="half-blank">sen&theta;<sub>2</sub></span>',
      content: 'n_1 \\cdot \\sin\\theta_1 = n_2 \\cdot \\sin\\theta_2',
      fallbackHtml: '<strong>n<sub>1</sub>&middot;sen(&theta;<sub>1</sub>) = n<sub>2</sub>&middot;sen(&theta;<sub>2</sub>)</strong>',
      label: 'Lápis na Água (Lei de Snell)',
      conceptTitle: 'Refração e Lei de Snell-Descartes!',
      explanation:
        'Lei de Snell-Descartes! Quando a luz passa de um meio para outro com índice de refração maior ($n_2 > n_1$), sua velocidade diminui e o raio se aproxima da reta normal ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$).'
    },

    // PAR 12: Movimento Circular (Força Centrípeta)
    {
      pairId: 'forca_centripeta',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/med_12a_curva_centripeta.svg',
      label: 'Trajetória Circular de Raio R',
      conceptTitle: 'Dinâmica do Movimento Circular!',
      explanation:
        'Força Centrípeta! Para manter qualquer corpo em trajetória circular de raio $R$ com velocidade $v$, é necessária uma força resultante apontando para o centro da curva: $F_{cp} = m v^2 / R$.',
      challenge: {
        question: 'Para onde apontam os vetores velocidade v e força centrípeta F_cp em um movimento circular uniforme?',
        options: [
          'v é tangente à trajetória e F_cp aponta para o centro da curva.',
          'Ambos apontam para fora da curva.',
          'Ambos são paralelos entre si.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'forca_centripeta',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/med_12b_barbante_giro.svg',
      halfFormulaHtml: 'F<sub>cp</sub> = m&middot;v&sup2; &divide; <span class="half-blank">R</span>',
      content: 'F_{cp} = \\frac{m \\cdot v^2}{R}',
      secondaryLatex: 'a_{cp} = \\frac{v^2}{R} = \\omega^2 R',
      fallbackHtml: '<strong>F<sub>cp</sub> = m&middot;v&sup2; / R</strong>',
      label: 'Giro no Barbante (Centrípeta)',
      conceptTitle: 'Dinâmica do Movimento Circular!',
      explanation:
        'Força Centrípeta! Para manter qualquer corpo em trajetória circular de raio $R$ com velocidade $v$, é necessária uma força resultante apontando para o centro da curva: $F_{cp} = m v^2 / R$.'
    }
  ],

  // ==========================================================================
  // NÍVEL 3: FÍSICA 1 - FACULDADE (Ensino Superior) - 12 Pares (24 Cartas)
  // Suporta Nível Médio (Desenhos Práticos + Fórmulas Guiadas) e Nível Difícil (Cálculo Puro)
  // ==========================================================================
  faculdade: [
    // PAR 1: Cinemática Vetorial Diferencial
    {
      pairId: 'cinematica_vetorial',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_1a_cinematica_vetorial.svg',
      label: 'Trajetória 2D: Vetores r(t), v e a',
      conceptTitle: 'Cinemática Vetorial Diferencial!',
      explanation:
        'Cinemática Vetorial! A velocidade instantânea $\\vec{v}(t)$ é a derivada temporal do vetor posição $\\vec{r}(t)$ (sempre tangente à trajetória), enquanto $\\vec{a}(t)$ possui componentes tangencial e normal (centrípeta).',
      challenge: {
        question: 'Se a posição de uma partícula é x(t) = 3t² + 2t (em metros), qual é sua velocidade instantânea em t = 2 s?',
        options: ['14 m/s (pois v = dx/dt = 6t + 2)', '16 m/s', '6 m/s'],
        answerIndex: 0
      }
    },
    {
      pairId: 'cinematica_vetorial',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_1b_tangente_derivada.svg',
      halfFormulaHtml: 'v = Taxa d<span class="half-blank">r</span> / dt',
      content: '\\vec{v} = \\frac{d\\vec{r}}{dt}',
      secondaryLatex: '\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}',
      fallbackHtml: '<strong>v&#8407; = dr&#8407;/dt</strong><br><small>a&#8407; = d&sup2;r&#8407;/dt&sup2;</small>',
      label: 'Reta Tangente: Derivada dr/dt',
      conceptTitle: 'Cinemática Vetorial Diferencial!',
      explanation:
        'Cinemática Vetorial! A velocidade instantânea $\\vec{v}(t)$ é a derivada temporal do vetor posição $\\vec{r}(t)$ (sempre tangente à trajetória), enquanto $\\vec{a}(t)$ possui componentes tangencial e normal (centrípeta).'
    },

    // PAR 2: Trabalho de Força Variável
    {
      pairId: 'trabalho_integral',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_2a_trabalho_integral.svg',
      label: 'Integral da Curva F(x) vs Posição',
      conceptTitle: 'Teorema Trabalho-Energia Cinética!',
      explanation:
        'Trabalho de Força Variável! Quando a força varia com a posição, o trabalho total é a integral de linha do produto escalar $\\vec{F} \\cdot d\\vec{r}$, correspondendo à área sob a curva $F(x)$ e à variação da energia cinética $\\Delta K$.',
      challenge: {
        question: 'Qual é o trabalho realizado por uma força de mola F(x) = kx ao esticar de x = 0 até x = L?',
        options: ['W = k·L', 'W = ½ k·L² (integral de kx dx)', 'W = k·L³ / 3'],
        answerIndex: 1
      }
    },
    {
      pairId: 'trabalho_integral',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_2b_bloco_energia.svg',
      halfFormulaHtml: 'Trabalho W = &int;F&middot;dr = <span class="half-blank">&Delta;K</span>',
      content: 'W = \\int_{\\vec{r}_1}^{\\vec{r}_2} \\vec{F} \\cdot d\\vec{r}',
      secondaryLatex: 'W_{\\text{res}} = \\Delta K',
      fallbackHtml: '<strong>W = &int; F&#8407; &middot; dr&#8407; = &Delta;K</strong>',
      label: 'Trabalho = Ganho de Energia ΔK',
      conceptTitle: 'Teorema Trabalho-Energia Cinética!',
      explanation:
        'Trabalho de Força Variável! Quando a força varia com a posição, o trabalho total é a integral de linha do produto escalar $\\vec{F} \\cdot d\\vec{r}$, correspondendo à área sob a curva $F(x)$ e à variação da energia cinética $\\Delta K$.'
    },

    // PAR 3: Impulso e Momento Linear
    {
      pairId: 'colisao_momento',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_3a_colisao_momento.svg',
      label: 'Colisão e Vetores Momento Linear',
      conceptTitle: 'Teorema do Impulso-Momento Linear!',
      explanation:
        'Impulso e Quantidade de Movimento! A integral temporal da força resultante durante uma colisão define o impulso $\\vec{J} = \\Delta \\vec{p}$. Em um sistema isolado ($\\vec{F}_{\\text{ext}} = \\vec{0}$), o momento linear total se conserva!',
      challenge: {
        question: 'Em uma colisão perfeitamente inelástica entre dois corpos em um sistema isolado, o que se conserva?',
        options: [
          'Apenas a Energia Cinética.',
          'O Momento Linear total (p = m·v), mas parte da energia cinética é dissipada.',
          'Nem o momento linear nem a energia.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'colisao_momento',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_3b_raquete_impulso.svg',
      halfFormulaHtml: 'Impulso J = &Delta;<span class="half-blank">p</span> (m&middot;v)',
      content: '\\vec{J} = \\int_{t_1}^{t_2} \\vec{F}\\,dt = \\Delta\\vec{p}',
      secondaryLatex: '\\vec{F}_{\\text{res}} = \\frac{d\\vec{p}}{dt}',
      fallbackHtml: '<strong>J&#8407; = &int; F&#8407; dt = &Delta;p&#8407;</strong>',
      label: 'Impacto: Impulso J = Δp',
      conceptTitle: 'Teorema do Impulso-Momento Linear!',
      explanation:
        'Impulso e Quantidade de Movimento! A integral temporal da força resultante durante uma colisão define o impulso $\\vec{J} = \\Delta \\vec{p}$. Em um sistema isolado ($\\vec{F}_{\\text{ext}} = \\vec{0}$), o momento linear total se conserva!'
    },

    // PAR 4: Torque e Rotação
    {
      pairId: 'torque_rotacao',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_4a_torque_rotacao.svg',
      label: 'Alavanca Rígida: Vetores r e F',
      conceptTitle: 'Torque e 2ª Lei de Newton para Rotação!',
      explanation:
        'Dinâmica Rotacional! O torque $\\vec{\\tau}$ é o produto vetorial $\\vec{r} \\times \\vec{F}$ ($|\\vec{\\tau}| = r F \\sin\\theta$). Ele produz uma aceleração angular $\\vec{\\alpha}$ inversamente proporcional ao momento de inércia $I = \\int r^2 dm$.',
      challenge: {
        question: 'Para qual ângulo θ entre o vetor posição r e a força F o módulo do torque τ = r·F·sen(θ) é máximo?',
        options: ['θ = 0° (força paralela ao braço)', 'θ = 90° (força perpendicular ao braço)', 'θ = 180°'],
        answerIndex: 1
      }
    },
    {
      pairId: 'torque_rotacao',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_4b_chave_inglesa.svg',
      halfFormulaHtml: 'Torque &tau; = r &times; <span class="half-blank">F</span>',
      content: '\\vec{\\tau} = \\vec{r} \\times \\vec{F}',
      secondaryLatex: '\\sum \\tau_z = I \\cdot \\alpha_z',
      fallbackHtml: '<strong>&tau;&#8407; = r&#8407; &times; F&#8407; = I &middot; &alpha;&#8407;</strong>',
      label: 'Chave Inglesa: Torque r × F',
      conceptTitle: 'Torque e 2ª Lei de Newton para Rotação!',
      explanation:
        'Dinâmica Rotacional! O torque $\\vec{\\tau}$ é o produto vetorial $\\vec{r} \\times \\vec{F}$ ($|\\vec{\\tau}| = r F \\sin\\theta$). Ele produz uma aceleração angular $\\vec{\\alpha}$ inversamente proporcional ao momento de inércia $I = \\int r^2 dm$.'
    },

    // PAR 5: Momento Angular
    {
      pairId: 'momento_angular',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_5a_momento_angular.svg',
      label: 'Giroscópio em Rotação Axial L',
      conceptTitle: 'Conservação do Momento Angular!',
      explanation:
        'Momento Angular! Quando o torque externo resultante é nulo ($\\sum \\vec{\\tau}_{\\text{ext}} = d\\vec{L}/dt = \\vec{0}$), o momento angular $\\vec{L} = I\\vec{\\omega}$ permanece constante. Se o momento de inércia $I$ diminui, a velocidade angular $\\omega$ aumenta!',
      challenge: {
        question: 'Um patinador girando encolhe os braços, reduzindo seu momento de inércia I pela metade. O que ocorre com sua velocidade angular ω?',
        options: [
          'ω dobra, pois L = I·ω permanece constante.',
          'ω cai pela metade.',
          'ω não se altera.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'momento_angular',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_5b_patinador_giro.svg',
      halfFormulaHtml: 'L = I &middot; <span class="half-blank">&omega;</span> (Constante)',
      content: '\\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}',
      secondaryLatex: '\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}',
      fallbackHtml: '<strong>L&#8407; = r&#8407; &times; p&#8407; = I&omega;&#8407;</strong>',
      label: 'Patinador: Fecha Braços ➔ +ω',
      conceptTitle: 'Conservação do Momento Angular!',
      explanation:
        'Momento Angular! Quando o torque externo resultante é nulo ($\\sum \\vec{\\tau}_{\\text{ext}} = d\\vec{L}/dt = \\vec{0}$), o momento angular $\\vec{L} = I\\vec{\\omega}$ permanece constante. Se o momento de inércia $I$ diminui, a velocidade angular $\\omega$ aumenta!'
    },

    // PAR 6: EDO do MHS
    {
      pairId: 'mhs_oscilador',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_6a_mhs_oscilador.svg',
      label: 'Oscilador Massa-Mola (F = -kx)',
      conceptTitle: 'Equação Diferencial do MHS!',
      explanation:
        'Movimento Harmônico Simples! Pela Lei de Hooke ($F = -kx$) e 2ª Lei de Newton ($m\\ddot{x} = -kx$), obtemos a EDO de 2ª ordem cuja solução é $x(t) = A\\cos(\\omega t + \\phi)$, com frequência angular natural $\\omega = \\sqrt{k/m}$.',
      challenge: {
        question: 'Se quadruplicarmos a massa m presa a uma mola ideal de constante k, o que acontece com a frequência angular ω = √(k/m)?',
        options: ['Cai pela metade.', 'Dobra de valor.', 'Quadruplica.'],
        answerIndex: 0
      }
    },
    {
      pairId: 'mhs_oscilador',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_6b_pendulo_senoide.svg',
      halfFormulaHtml: '&omega; = &radic;(<span class="half-blank">k / m</span>) • F = &minus;kx',
      content: '\\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0',
      secondaryLatex: '\\omega = \\sqrt{\\frac{k}{m}}',
      fallbackHtml: '<strong>d&sup2;x/dt&sup2; + (k/m)x = 0</strong><br><small>&omega; = &radic;(k/m)</small>',
      label: 'Pêndulo e Senoide do MHS',
      conceptTitle: 'Equação Diferencial do MHS!',
      explanation:
        'Movimento Harmônico Simples! Pela Lei de Hooke ($F = -kx$) e 2ª Lei de Newton ($m\\ddot{x} = -kx$), obtemos a EDO de 2ª ordem cuja solução é $x(t) = A\\cos(\\omega t + \\phi)$, com frequência angular natural $\\omega = \\sqrt{k/m}$.'
    },

    // PAR 7: Força Conservativa e Gradiente
    {
      pairId: 'forca_conservativa',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_7a_forca_conservativa.svg',
      label: 'Poço de Energia Potencial U(x)',
      conceptTitle: 'Força Conservativa e Gradiente de Potencial!',
      explanation:
        'Forças Conservativas! Toda força conservativa aponta no sentido em que a energia potencial $U(\\vec{r})$ decresce mais rapidamente: $\\vec{F} = -\\nabla U$. Nos pontos de equilíbrio estável (mínimo do poço de potencial), $dU/dx = 0$.',
      challenge: {
        question: 'Em um gráfico de energia potencial U(x), quanto vale a força conservativa F_x no ponto de mínimo local (fundo do poço)?',
        options: [
          'F_x = 0 (equilíbrio estável, pois a derivada dU/dx é zero).',
          'F_x é máxima.',
          'F_x tende a infinito.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'forca_conservativa',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_7b_vale_equilibrio.svg',
      halfFormulaHtml: 'F<sub>x</sub> = &minus;d<span class="half-blank">U</span> / dx',
      content: '\\vec{F}(\\vec{r}) = -\\nabla U(\\vec{r})',
      secondaryLatex: 'F_x = -\\frac{dU}{dx}',
      fallbackHtml: '<strong>F&#8407; = &minus;&nabla;U(r&#8407;)</strong><br><small>F<sub>x</sub> = &minus;dU/dx</small>',
      label: 'Fundo do Vale: Equilíbrio Estável',
      conceptTitle: 'Força Conservativa e Gradiente de Potencial!',
      explanation:
        'Forças Conservativas! Toda força conservativa aponta no sentido em que a energia potencial $U(\\vec{r})$ decresce mais rapidamente: $\\vec{F} = -\\nabla U$. Nos pontos de equilíbrio estável (mínimo do poço de potencial), $dU/dx = 0$.'
    },

    // PAR 8: Gravitação Universal Vetorial
    {
      pairId: 'gravitacao_orbita',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_8a_gravitacao_orbita.svg',
      label: 'Órbita Elíptica de Kepler',
      conceptTitle: 'Gravitação Universal & Leis de Kepler!',
      explanation:
        'Gravitação Universal! A força gravitacional $\\vec{F}_G$ é central (paralela a $\\hat{r}$) e proporcional ao inverso do quadrado da distância ($1/r^2$). Como o torque em relação à estrela é nulo, o momento angular orbital e a velocidade areolar se conservam (2ª Lei de Kepler).',
      challenge: {
        question: 'Se a distância r entre dois astros triplicar (3r), o que ocorre com a intensidade da força gravitacional entre eles?',
        options: [
          'Cai para 1/3 do valor original.',
          'Cai para 1/9 do valor original (lei do inverso do quadrado 1/r²).',
          'Aumenta 9 vezes.'
        ],
        answerIndex: 1
      }
    },
    {
      pairId: 'gravitacao_orbita',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_8b_satelite_kepler.svg',
      halfFormulaHtml: 'F<sub>G</sub> = G(M&middot;m) &divide; <span class="half-blank">r&sup2;</span>',
      content: '\\vec{F}_G = -G\\frac{M \\cdot m}{r^2}\\hat{r}',
      secondaryLatex: 'U_G(r) = -G\\frac{M \\cdot m}{r}',
      fallbackHtml: '<strong>F&#8407;<sub>G</sub> = &minus;G(M&middot;m / r&sup2;) r&#770;</strong>',
      label: 'Áreas Iguais de Kepler & 1/r²',
      conceptTitle: 'Gravitação Universal & Leis de Kepler!',
      explanation:
        'Gravitação Universal! A força gravitacional $\\vec{F}_G$ é central (paralela a $\\hat{r}$) e proporcional ao inverso do quadrado da distância ($1/r^2$). Como o torque em relação à estrela é nulo, o momento angular orbital e a velocidade areolar se conservam (2ª Lei de Kepler).'
    },

    // PAR 9: Centro de Massa de Corpo Contínuo
    {
      pairId: 'centro_massa',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_9a_centro_massa.svg',
      label: 'Corpo Contínuo: Elemento dm e r_CM',
      conceptTitle: 'Centro de Massa & Dinâmica do Sistema!',
      explanation:
        'Centro de Massa! Para uma distribuição contínua de massa, o vetor posição do centro de massa é dado pela integral $\\vec{r}_{\\text{CM}} = \\frac{1}{M}\\int \\vec{r}\\,dm$, e o sistema se move como se toda a força resultante externa atuasse no CM!',
      challenge: {
        question: 'Um projétil explode no ar em dois fragmentos iguais (apenas forças internas). Como se move o Centro de Massa do sistema após a explosão?',
        options: [
          'Continua seguindo exatamente a mesma parábola balística original.',
          'Para instantaneamente no ar.',
          'Inverte o sentido do movimento.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'centro_massa',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_9b_equilibrio_cm.svg',
      halfFormulaHtml: 'r<sub>CM</sub> = (1/<span class="half-blank">M</span>)&int;r dm',
      content: '\\vec{r}_{\\text{CM}} = \\frac{1}{M}\\int \\vec{r}\\,dm',
      secondaryLatex: '\\sum \\vec{F}_{\\text{ext}} = M\\vec{a}_{\\text{CM}}',
      fallbackHtml: '<strong>r&#8407;<sub>CM</sub> = (1/M) &int; r&#8407; dm</strong>',
      label: 'Ponto de Equilíbrio (CM)',
      conceptTitle: 'Centro de Massa & Dinâmica do Sistema!',
      explanation:
        'Centro de Massa! Para uma distribuição contínua de massa, o vetor posição do centro de massa é dado pela integral $\\vec{r}_{\\text{CM}} = \\frac{1}{M}\\int \\vec{r}\\,dm$, e o sistema se move como se toda a força resultante externa atuasse no CM!'
    },

    // PAR 10: Teorema dos Eixos Paralelos (Steiner)
    {
      pairId: 'teorema_steiner',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_10a_eixos_paralelos.svg',
      label: 'Cilindro: Eixo CM e Eixo Paralelo d',
      conceptTitle: 'Momento de Inércia & Teorema de Steiner!',
      explanation:
        'Teorema dos Eixos Paralelos (Steiner)! O momento de inércia $I$ de um corpo rígido em relação a qualquer eixo paralelo ao eixo que passa pelo Centro de Massa a uma distância $d$ é $I = I_{\\text{CM}} + M d^2$.',
      challenge: {
        question: 'Em qual eixo paralelo um corpo rígido apresenta o MENOR momento de inércia possível?',
        options: [
          'No eixo que passa exatamente pelo Centro de Massa (d = 0).',
          'Em um eixo na borda externa do corpo.',
          'Fora do corpo rígido.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'teorema_steiner',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_10b_discos_inercia.svg',
      halfFormulaHtml: 'I = I<sub>CM</sub> + M&middot;<span class="half-blank">d&sup2;</span>',
      content: 'I = I_{\\text{CM}} + M \\cdot d^2',
      secondaryLatex: 'I = \\int r^2\\,dm',
      fallbackHtml: '<strong>I = I<sub>CM</sub> + M&middot;d&sup2;</strong>',
      label: 'Eixo Deslocado de Distância d',
      conceptTitle: 'Momento de Inércia & Teorema de Steiner!',
      explanation:
        'Teorema dos Eixos Paralelos (Steiner)! O momento de inércia $I$ de um corpo rígido em relação a qualquer eixo paralelo ao eixo que passa pelo Centro de Massa a uma distância $d$ é $I = I_{\\text{CM}} + M d^2$.'
    },

    // PAR 11: Rolamento sem Deslizamento
    {
      pairId: 'rolamento_rigido',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_11a_rolamento_plano.svg',
      label: 'Roda Rolando sem Deslizar (v_CM e ω)',
      conceptTitle: 'Rolamento sem Deslizamento!',
      explanation:
        'Rolamento de Corpo Rígido! Quando uma roda rola sem deslizar ($v_{\\text{CM}} = \\omega R$), sua energia cinética total soma a energia cinética de translação do Centro de Massa com a energia cinética de rotação em torno do CM.',
      challenge: {
        question: 'Para uma roda que rola sem escorregar sobre o solo com velocidade do centro de massa v_CM, qual é a velocidade instantânea do ponto de contato com o chão?',
        options: [
          'Zero (repouso instantâneo, pois v_translação = v_rotação em sentidos opostos).',
          '2 · v_CM.',
          'v_CM.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'rolamento_rigido',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_11b_roda_bicicleta.svg',
      halfFormulaHtml: 'K = K<sub>Translação</sub> + <span class="half-blank">K<sub>Rotação</sub></span>',
      content: 'K = \\frac{1}{2}Mv_{\\text{CM}}^2 + \\frac{1}{2}I_{\\text{CM}}\\omega^2',
      secondaryLatex: 'v_{\\text{CM}} = \\omega \\cdot R',
      fallbackHtml: '<strong>K = &frac12;Mv<sub>CM</sub>&sup2; + &frac12;I<sub>CM</sub>&omega;&sup2;</strong>',
      label: 'Translação + Giro da Roda',
      conceptTitle: 'Rolamento sem Deslizamento!',
      explanation:
        'Rolamento de Corpo Rígido! Quando uma roda rola sem deslizar ($v_{\\text{CM}} = \\omega R$), sua energia cinética total soma a energia cinética de translação do Centro de Massa com a energia cinética de rotação em torno do CM.'
    },

    // PAR 12: Oscilador Harmônico Amortecido
    {
      pairId: 'oscilador_amortecido',
      type: 'A',
      contentType: 'image',
      content: '../images/fisica/uni_12a_mhs_amortecido.svg',
      label: 'Oscilação com Envelope Exponencial',
      conceptTitle: 'Oscilador Harmônico Amortecido (EDO)!',
      explanation:
        'MHS Amortecido! Na presença de uma força viscosa proporcional à velocidade ($F_a = -b\\dot{x}$), a EDO ganha o termo dissipativo $b(dx/dt)$ e a amplitude decai exponencialmente no tempo segundo $A(t) = A_0 e^{-bt/2m}$.',
      challenge: {
        question: 'No oscilador harmônico subamortecido, qual função matemática descreve o decaimento da amplitude máxima ao longo do tempo?',
        options: [
          'Uma exponencial decrescente e^(-(b/2m)t).',
          'Uma reta crescente.',
          'Uma parábola.'
        ],
        answerIndex: 0
      }
    },
    {
      pairId: 'oscilador_amortecido',
      type: 'B',
      contentType: 'formula',
      hybridImage: '../images/fisica/uni_12b_amortecedor_carro.svg',
      halfFormulaHtml: 'Amortecedor: A(t) = A<sub>0</sub>&middot;<span class="half-blank">e<sup>&minus;&gamma;t</sup></span>',
      content: 'm\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = 0',
      secondaryLatex: 'x(t) = A_0 e^{-\\gamma t}\\cos(\\omega\' t)',
      fallbackHtml: '<strong>m(&&#776;) + b(&&#775;) + kx = 0</strong>',
      label: 'Amortecedor: Decaimento Viscoso',
      conceptTitle: 'Oscilador Harmônico Amortecido (EDO)!',
      explanation:
        'MHS Amortecido! Na presença de uma força viscosa proporcional à velocidade ($F_a = -b\\dot{x}$), a EDO ganha o termo dissipativo $b(dx/dt)$ e a amplitude decai exponencialmente no tempo segundo $A(t) = A_0 e^{-bt/2m}$.'
    }
  ]
};

// ============================================================================
// ELEMENTOS DO DOM E ESTADO DO JOGO
// ============================================================================
const grid = document.querySelector('.grid');
const soloPlayerBadge = document.getElementById('solo-player-badge');
const duelBackBtn = document.getElementById('duel-back-btn');
const soloStatsGroup = document.getElementById('solo-stats-group');

const spanJogador = document.querySelector('.player');
const playerTitleBadge = document.getElementById('player-title-badge');
const headerAvatarBox = document.getElementById('header-avatar-box');

const timer = document.querySelector('.timer');
const timerLabel = document.getElementById('timer-label');
const timerPill = document.getElementById('timer-pill');
const pairsCountEl = document.querySelector('.pairs-count');
const xpScoreEl = document.getElementById('xp-score');
const comboPill = document.getElementById('combo-pill');
const comboText = document.getElementById('combo-text');
const livesPill = document.getElementById('lives-pill');
const livesDisplay = document.getElementById('lives-display');

// Elementos do Modo Duelo 2 Jogadores (1v1 - 30s)
const duelScoreboard = document.getElementById('duel-scoreboard');
const duelCardP1 = document.getElementById('duel-card-p1');
const duelCardP2 = document.getElementById('duel-card-p2');
const duelP1Avatar = document.getElementById('duel-p1-avatar');
const duelP2Avatar = document.getElementById('duel-p2-avatar');
const duelP1NameEl = document.getElementById('duel-p1-name');
const duelP2NameEl = document.getElementById('duel-p2-name');
const duelP1TitleEl = document.getElementById('duel-p1-title');
const duelP2TitleEl = document.getElementById('duel-p2-title');
const duelP1TurnTag = document.getElementById('duel-p1-turn-tag');
const duelP2TurnTag = document.getElementById('duel-p2-turn-tag');
const duelP1PairsEl = document.getElementById('duel-p1-pairs');
const duelP2PairsEl = document.getElementById('duel-p2-pairs');
const duelP1XpEl = document.getElementById('duel-p1-xp');
const duelP2XpEl = document.getElementById('duel-p2-xp');
const duelCenterClock = document.getElementById('duel-center-clock');
const duelTurnSecondsEl = document.getElementById('duel-turn-seconds');
const duelProgressBar = document.getElementById('duel-progress-bar');
const duelTurnStatusEl = document.getElementById('duel-turn-status');
const turnToast = document.getElementById('turn-toast');

const levelSelect = document.getElementById('level-select');
const modeSelect = document.getElementById('mode-select');
const deckSizeSelect = document.getElementById('deck-size-select');
const btnRestart = document.getElementById('btn-restart');
const legendBadgeB = document.getElementById('legend-badge-b');

// Power-ups
const btnPwRadar = document.getElementById('pw-radar');
const btnPwFreeze = document.getElementById('pw-freeze');
const btnPwMagnet = document.getElementById('pw-magnet');

// Modal Educativo + Desafio Quiz
const eduModal = document.getElementById('edu-modal');
const modalConceptTitle = document.getElementById('modal-concept-title');
const modalCardAVisual = document.getElementById('modal-card-a-visual');
const modalCardALabel = document.getElementById('modal-card-a-label');
const modalCardBTag = document.getElementById('modal-card-b-tag');
const modalCardBVisual = document.getElementById('modal-card-b-visual');
const modalCardBLabel = document.getElementById('modal-card-b-label');
const modalExplanationText = document.getElementById('modal-explanation-text');
const modalChallengeBox = document.getElementById('modal-challenge-box');
const challengeBadgeTitle = document.getElementById('challenge-badge-title');
const challengeQuestionEl = document.getElementById('challenge-question');
const challengeOptionsEl = document.getElementById('challenge-options');
const challengeFeedbackEl = document.getElementById('challenge-feedback');
const btnContinueGame = document.getElementById('btn-continue-game');

// Modal de Vitória / Fim de Partida
const victoryModal = document.getElementById('victory-modal');
const victoryTitle = document.getElementById('victory-title');
const victoryTrophy = document.getElementById('victory-trophy');
const victoryAvatarBox = document.getElementById('victory-avatar-box');
const victoryMessage = document.getElementById('victory-message');
const victoryStatsGrid = document.getElementById('victory-stats-grid');
const btnPlayAgain = document.getElementById('btn-play-again');
const btnSwitchLevel = document.getElementById('btn-switch-level');

let currentLevel = 'fundamental';
let currentMode = 'duelo_pares';
let requestedPairsCount = 12; // Padrão: 12 pares = 24 cartas
let totalPairsInLevel = 12;

let primeiraCarta = null;
let segundaCarta = null;
let lockBoard = false;
let matchedPairsCount = 0;

// Helpers de Nível, Dificuldade e Modo
const getBaseDatasetKey = (lvlKey) => {
  if (lvlKey === 'medio' || lvlKey === 'medio_dificil') return 'medio';
  if (lvlKey === 'faculdade' || lvlKey === 'faculdade_dificil') return 'faculdade';
  return 'fundamental';
};

// Verifica se está na dificuldade Média (Visual + Fórmulas Pela Metade)
const isVisualGuidedDifficulty = () =>
  currentLevel === 'medio' || currentLevel === 'faculdade';

const isDuelMode = () => currentMode === 'duelo' || currentMode === 'duelo_pares';
const isQuizEnabled = () =>
  currentMode === 'duelo' ||
  currentMode === 'desafio' ||
  currentMode === 'sobrevivencia' ||
  currentMode === 'exploracao';

// Estado Solo
let xpScore = 0;
let comboMultiplier = 1;
let maxCombo = 1;
let totalAttempts = 0;
let challengesSolved = 0;
let livesRemaining = 5;
const MAX_LIVES = 5;

// Estado Duelo 2 Jogadores (1v1 - Turnos de 30s)
const DUEL_TURN_LIMIT = 30;
let activeDuelPlayer = 1;
let duelTurnSeconds = DUEL_TURN_LIMIT;
let duelPlayers = {
  1: { name: 'Jogador 1', pairs: 0, xp: 0, quizzes: 0 },
  2: { name: 'Jogador 2', pairs: 0, xp: 0, quizzes: 0 }
};
let toastTimeout = null;

let powerupsLeft = {
  radar: 1,
  freeze: 1,
  magnet: 1
};

let timerInterval = null;
let isTimerPaused = false;
let freezeSecondsRemaining = 0;
let elapsedSeconds = 0;
let remainingSeconds = 180;

// ============================================================================
// UTILITÁRIOS DE RENDERIZAÇÃO (HTML / KaTeX / HÍBRIDO VISUAL + FÓRMULA PELA METADE)
// ============================================================================
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  return element;
};

const renderLatexString = (latexStr, fallbackHtml = '') => {
  if (window.katex && typeof window.katex.renderToString === 'function') {
    try {
      return window.katex.renderToString(latexStr, {
        throwOnError: false,
        displayMode: false
      });
    } catch (err) {
      return fallbackHtml || latexStr;
    }
  }
  return fallbackHtml || latexStr;
};

/**
 * Constrói o visual central da carta:
 * - Se for Nível Médio de 13-17 ('medio') ou Física 1 ('faculdade') e a Carta B tiver hybridImage,
 *   exibe o Desenho Físico Explicativo + a Fórmula Pela Metade com destaque colorido!
 * - Se for Nível Difícil ('medio_dificil' ou 'faculdade_dificil'), exibe somente a Fórmula KaTeX completa!
 */
const buildCardVisualHTML = (cardData, forceFullFormula = false) => {
  if (cardData.contentType === 'formula') {
    if (!forceFullFormula && isVisualGuidedDifficulty() && cardData.hybridImage) {
      return `
        <div class="card-hybrid-box">
          <img src="${cardData.hybridImage}" alt="${cardData.label}" class="card-hybrid-img">
          <div class="half-formula-pill">${cardData.halfFormulaHtml}</div>
        </div>
      `;
    }

    const primaryMath = renderLatexString(cardData.content, cardData.fallbackHtml);
    const secondaryMath = cardData.secondaryLatex
      ? `<div class="formula-secondary">${renderLatexString(cardData.secondaryLatex)}</div>`
      : '';
    return `
      <div class="card-formula-box">
        <div class="formula-primary">${primaryMath}</div>
        ${secondaryMath}
      </div>
    `;
  }
  return `<img src="${cardData.content}" alt="${cardData.label}" class="card-illustration">`;
};

const formatExplanationWithMath = (text) => {
  let formatted = text.replace(/\$([^$]+)\$/g, (_, latex) => {
    return renderLatexString(latex, `<em>${latex}</em>`);
  });

  const exclIndex = formatted.indexOf('!');
  if (exclIndex > 0 && exclIndex < 55) {
    const head = formatted.slice(0, exclIndex + 1);
    const rest = formatted.slice(exclIndex + 1);
    formatted = `<strong>${head}</strong>${rest}`;
  }
  return formatted;
};

// ============================================================================
// NOTIFICAÇÃO DE TROCA DE TURNO (TOAST DO DUELO 1v1)
// ============================================================================
const showTurnToast = (message, variant = 'default') => {
  if (!turnToast) return;
  clearTimeout(toastTimeout);
  turnToast.textContent = message;
  turnToast.className = 'turn-toast';
  if (variant === 'warn') turnToast.classList.add('toast-warn');
  if (variant === 'success') turnToast.classList.add('toast-success');

  toastTimeout = setTimeout(() => {
    turnToast.classList.add('hidden');
  }, 3600);
};

// ============================================================================
// HUD: SOLO & PLACAR DE DUELO 2 JOGADORES
// ============================================================================
const updateDuelClockUI = () => {
  if (!duelTurnSecondsEl || !duelProgressBar || !duelCenterClock) return;
  duelTurnSecondsEl.textContent = String(duelTurnSeconds).padStart(2, '0');
  const pct = Math.max(0, Math.min(100, (duelTurnSeconds / DUEL_TURN_LIMIT) * 100));
  duelProgressBar.style.width = `${pct}%`;

  duelProgressBar.classList.remove('warn', 'danger');
  duelCenterClock.classList.remove('urgent');

  if (duelTurnSeconds <= 6) {
    duelProgressBar.classList.add('danger');
    duelCenterClock.classList.add('urgent');
  } else if (duelTurnSeconds <= 12) {
    duelProgressBar.classList.add('warn');
  }
};

const updateHUD = () => {
  const isDuel = isDuelMode();

  if (soloPlayerBadge) soloPlayerBadge.classList.toggle('hidden', isDuel);
  if (duelBackBtn) duelBackBtn.classList.toggle('hidden', !isDuel);
  if (soloStatsGroup) soloStatsGroup.classList.toggle('hidden', isDuel);
  if (duelScoreboard) duelScoreboard.classList.toggle('hidden', !isDuel);

  if (isDuel) {
    if (duelP1NameEl) duelP1NameEl.textContent = duelPlayers[1].name;
    if (duelP2NameEl) duelP2NameEl.textContent = duelPlayers[2].name;
    if (duelP1PairsEl) duelP1PairsEl.textContent = duelPlayers[1].pairs;
    if (duelP2PairsEl) duelP2PairsEl.textContent = duelPlayers[2].pairs;
    if (duelP1XpEl) duelP1XpEl.textContent = duelPlayers[1].xp;
    if (duelP2XpEl) duelP2XpEl.textContent = duelPlayers[2].xp;

    if (duelCardP1) duelCardP1.classList.toggle('active-turn', activeDuelPlayer === 1);
    if (duelCardP2) duelCardP2.classList.toggle('active-turn', activeDuelPlayer === 2);
    if (duelP1TurnTag) duelP1TurnTag.classList.toggle('hidden', activeDuelPlayer !== 1);
    if (duelP2TurnTag) duelP2TurnTag.classList.toggle('hidden', activeDuelPlayer !== 2);

    if (duelTurnStatusEl) {
      duelTurnStatusEl.textContent = `Vez de ${duelPlayers[activeDuelPlayer].name} (${matchedPairsCount}/${totalPairsInLevel} pares)`;
    }
    updateDuelClockUI();
  } else {
    if (pairsCountEl) {
      pairsCountEl.textContent = `${matchedPairsCount}/${totalPairsInLevel}`;
    }
    if (xpScoreEl) {
      xpScoreEl.textContent = xpScore;
    }
    if (comboText && comboPill) {
      comboText.textContent = `🔥 x${comboMultiplier}`;
      comboPill.classList.toggle('combo-hot', comboMultiplier >= 2);
    }
    if (livesPill && livesDisplay) {
      if (currentMode === 'sobrevivencia') {
        livesPill.classList.remove('hidden');
        const fullHearts = '❤️'.repeat(Math.max(0, livesRemaining));
        const emptyHearts = '🖤'.repeat(Math.max(0, MAX_LIVES - livesRemaining));
        livesDisplay.textContent = fullHearts + emptyHearts;
      } else {
        livesPill.classList.add('hidden');
      }
    }
  }

  if (btnPwRadar) {
    btnPwRadar.disabled = powerupsLeft.radar <= 0;
    btnPwRadar.querySelector('.pw-count').textContent = `(${powerupsLeft.radar})`;
  }
  if (btnPwFreeze) {
    btnPwFreeze.disabled = powerupsLeft.freeze <= 0;
    btnPwFreeze.querySelector('.pw-count').textContent = `(${powerupsLeft.freeze})`;
  }
  if (btnPwMagnet) {
    btnPwMagnet.disabled = powerupsLeft.magnet <= 0;
    btnPwMagnet.querySelector('.pw-count').textContent = `(${powerupsLeft.magnet})`;
  }
};

// ============================================================================
// TROCA DE TURNO NO MODO DUELO 2 JOGADORES (ERROU OU 30s ESGOTADOS)
// ============================================================================
const switchDuelTurn = (reason = 'miss') => {
  const previousPlayer = duelPlayers[activeDuelPlayer].name;
  activeDuelPlayer = activeDuelPlayer === 1 ? 2 : 1;
  const nextPlayer = duelPlayers[activeDuelPlayer].name;

  duelTurnSeconds = DUEL_TURN_LIMIT;

  if (primeiraCarta) {
    primeiraCarta.classList.remove('revela-carta', 'magnetic-hint');
    primeiraCarta = null;
  }
  if (segundaCarta) {
    segundaCarta.classList.remove('revela-carta', 'magnetic-hint');
    segundaCarta = null;
  }
  lockBoard = false;

  if (reason === 'timeout') {
    showTurnToast(
      `⏰ Os 30s de ${previousPlayer} acabaram! Passou a vez para ${nextPlayer} (30s)!`,
      'warn'
    );
  } else {
    showTurnToast(
      `🔄 ${previousPlayer} errou o par! Agora é a vez de ${nextPlayer} (30s)!`,
      'warn'
    );
  }

  updateHUD();
};

// ============================================================================
// CONTROLE DO CRONÔMETRO
// ============================================================================
const startTimer = () => {
  clearInterval(timerInterval);
  isTimerPaused = false;
  if (timerPill) timerPill.classList.remove('paused', 'frozen');
  if (duelCenterClock) duelCenterClock.classList.remove('frozen');

  timerInterval = setInterval(() => {
    if (isTimerPaused) return;

    if (freezeSecondsRemaining > 0) {
      freezeSecondsRemaining -= 1;
      if (freezeSecondsRemaining === 0) {
        if (timerPill) timerPill.classList.remove('frozen');
        if (duelCenterClock) duelCenterClock.classList.remove('frozen');
      }
      return;
    }

    elapsedSeconds += 1;

    if (isDuelMode()) {
      if (lockBoard) return;
      duelTurnSeconds = Math.max(0, duelTurnSeconds - 1);
      updateDuelClockUI();

      if (duelTurnSeconds === 0) {
        switchDuelTurn('timeout');
      }
    } else if (currentMode === 'desafio') {
      remainingSeconds = Math.max(0, remainingSeconds - 1);
      timer.innerHTML = String(remainingSeconds).padStart(2, '0');
      if (remainingSeconds === 0) {
        openEndGameModal(false, 'Tempo Esgotado! O relógio do laboratório zerou.');
      }
    } else {
      timer.innerHTML = String(elapsedSeconds).padStart(2, '0');
    }
  }, 1000);
};

const pauseTimer = () => {
  isTimerPaused = true;
  if (timerPill) timerPill.classList.add('paused');
};

const resumeTimer = () => {
  isTimerPaused = false;
  if (timerPill) timerPill.classList.remove('paused');
};

const stopTimer = () => {
  clearInterval(timerInterval);
  isTimerPaused = true;
};

// ============================================================================
// POWER-UPS DE LABORATÓRIO
// ============================================================================
const useRadarPowerup = () => {
  if (powerupsLeft.radar <= 0 || lockBoard) return;
  powerupsLeft.radar -= 1;
  updateHUD();

  lockBoard = true;
  const unmatchedCards = Array.from(document.querySelectorAll('.card:not(.matched-card)'));
  unmatchedCards.forEach((c) => c.classList.add('revela-carta'));

  setTimeout(() => {
    unmatchedCards.forEach((c) => {
      if (c !== primeiraCarta) {
        c.classList.remove('revela-carta');
      }
    });
    lockBoard = false;
  }, 1800);
};

const useFreezePowerup = () => {
  if (powerupsLeft.freeze <= 0) return;
  powerupsLeft.freeze -= 1;
  freezeSecondsRemaining = 12;
  if (timerPill) timerPill.classList.add('frozen');
  if (duelCenterClock) duelCenterClock.classList.add('frozen');
  updateHUD();
};

const useMagnetPowerup = () => {
  if (powerupsLeft.magnet <= 0 || lockBoard) return;

  let targetPairId = null;
  if (primeiraCarta) {
    targetPairId = primeiraCarta.getAttribute('data-pair-id');
  } else {
    const firstUnmatched = document.querySelector('.card:not(.matched-card)');
    if (firstUnmatched) {
      targetPairId = firstUnmatched.getAttribute('data-pair-id');
    }
  }

  if (!targetPairId) return;

  powerupsLeft.magnet -= 1;
  updateHUD();

  const pairCards = document.querySelectorAll(`.card[data-pair-id="${targetPairId}"]:not(.matched-card)`);
  pairCards.forEach((c) => c.classList.add('magnetic-hint'));

  setTimeout(() => {
    pairCards.forEach((c) => c.classList.remove('magnetic-hint'));
  }, 3200);
};

// ============================================================================
// MODAL EDUCATIVO + DESAFIO DE LABORATÓRIO (QUIZ SÓ APARECE NOS MODOS COM QUIZ!)
// ============================================================================
const renderChallengeQuiz = (challengeObj) => {
  if (!isQuizEnabled() || !challengeObj || !modalChallengeBox) {
    if (modalChallengeBox) modalChallengeBox.classList.add('hidden');
    return;
  }

  modalChallengeBox.classList.remove('hidden');
  if (challengeBadgeTitle) {
    if (isDuelMode()) {
      challengeBadgeTitle.textContent = `⚡ Desafio Bônus para ${duelPlayers[activeDuelPlayer].name} (+150 XP de Desempate)`;
    } else {
      challengeBadgeTitle.textContent = '⚡ Desafio de Laboratório (+150 XP & Bônus)';
    }
  }

  challengeQuestionEl.textContent = challengeObj.question;
  challengeFeedbackEl.classList.add('hidden');
  challengeFeedbackEl.className = 'challenge-feedback hidden';
  challengeOptionsEl.innerHTML = '';

  challengeObj.options.forEach((optText, idx) => {
    const btn = createElement('button', 'challenge-opt-btn');
    btn.type = 'button';
    btn.textContent = optText;

    btn.addEventListener('click', () => {
      const allBtns = challengeOptionsEl.querySelectorAll('.challenge-opt-btn');
      allBtns.forEach((b) => (b.disabled = true));

      if (idx === challengeObj.answerIndex) {
        btn.classList.add('correct');
        xpScore += 150;
        challengesSolved += 1;

        let bonusText = '✅ Resposta Correta! +150 XP Bônus!';
        if (isDuelMode()) {
          duelPlayers[activeDuelPlayer].xp += 150;
          duelPlayers[activeDuelPlayer].quizzes += 1;
          bonusText = `✅ Boa, ${duelPlayers[activeDuelPlayer].name}! +150 XP Bônus no placar do Duelo!`;
        } else if (currentMode === 'desafio') {
          remainingSeconds += 12;
          timer.innerHTML = String(remainingSeconds).padStart(2, '0');
          bonusText += ' (+12s no relógio!)';
        } else if (currentMode === 'sobrevivencia' && livesRemaining < MAX_LIVES) {
          livesRemaining += 1;
          bonusText += ' (+1 Vida ❤️ recuperada!)';
        }

        challengeFeedbackEl.textContent = bonusText;
        challengeFeedbackEl.classList.remove('hidden');
        challengeFeedbackEl.classList.add('ok');
        updateHUD();
      } else {
        btn.classList.add('wrong');
        allBtns[challengeObj.answerIndex].classList.add('correct');
        challengeFeedbackEl.textContent =
          '❌ Quase! A alternativa destacada em verde é a correta.';
        challengeFeedbackEl.classList.remove('hidden');
        challengeFeedbackEl.classList.add('err');
      }
    });

    challengeOptionsEl.appendChild(btn);
  });
};

const openEducationalModal = (cardObj1, cardObj2) => {
  pauseTimer();

  const cardA = cardObj1.type === 'A' ? cardObj1 : cardObj2;
  const cardB = cardObj1.type === 'B' ? cardObj1 : cardObj2;

  modalConceptTitle.textContent = cardA.conceptTitle;

  modalCardAVisual.innerHTML = buildCardVisualHTML(cardA);
  modalCardALabel.textContent = cardA.label;

  const typeBIcon =
    currentLevel === 'fundamental' ? '💡 Conceito (Carta B)' : '⚛️ Conceito & Fórmula (Carta B)';
  modalCardBTag.textContent = typeBIcon;
  modalCardBVisual.innerHTML = buildCardVisualHTML(cardB);
  modalCardBLabel.textContent = cardB.label;

  modalExplanationText.innerHTML = formatExplanationWithMath(cardA.explanation);

  renderChallengeQuiz(cardA.challenge);

  if (matchedPairsCount === totalPairsInLevel) {
    btnContinueGame.textContent = isDuelMode()
      ? 'Ver Vencedor do Duelo 🏆'
      : 'Ver Certificado & Resultado 🏆';
  } else if (isDuelMode()) {
    btnContinueGame.textContent = `Continuar (Mais 30s para ${duelPlayers[activeDuelPlayer].name}) ▶`;
  } else {
    btnContinueGame.textContent = 'Continuar Jogando ▶';
  }

  eduModal.classList.remove('hidden');
  btnContinueGame.focus();
};

const closeEducationalModal = () => {
  eduModal.classList.add('hidden');

  if (matchedPairsCount === totalPairsInLevel) {
    openEndGameModal(true);
  } else {
    if (isDuelMode()) {
      duelTurnSeconds = DUEL_TURN_LIMIT;
      updateDuelClockUI();
      showTurnToast(
        `🔥 ${duelPlayers[activeDuelPlayer].name} acertou o par e continua jogando (30s)!`,
        'success'
      );
    }
    resumeTimer();
  }
};

// ============================================================================
// MODAL FINAL (VITÓRIA SOLO OU RESULTADO DO DUELO 2 JOGADORES)
// ============================================================================
const openEndGameModal = (isVictory, customReason = '') => {
  stopTimer();

  const levelLabels = {
    fundamental: 'Ensino Fundamental (10-12 anos)',
    medio: 'Ensino Médio 13-17 (Nível Médio • Visual + Dicas)',
    medio_dificil: 'Ensino Médio 13-17 (Nível Difícil • Só Fórmulas)',
    faculdade: 'Física 1 Faculdade (Nível Médio • Visual + Guiado)',
    faculdade_dificil: 'Física 1 Faculdade (Nível Difícil • Cálculo Puro)'
  };

  if (isDuelMode()) {
    const p1 = duelPlayers[1];
    const p2 = duelPlayers[2];
    let winnerSlot = 0;

    if (p1.pairs > p2.pairs) {
      winnerSlot = 1;
    } else if (p2.pairs > p1.pairs) {
      winnerSlot = 2;
    }

    if (victoryAvatarBox && window.PhysicsAvatar) {
      const avSlot = winnerSlot === 2 ? 2 : 1;
      victoryAvatarBox.innerHTML = window.PhysicsAvatar.renderSVG(
        window.PhysicsAvatar.loadConfig(avSlot)
      );
    }

    if (winnerSlot === 1) {
      victoryTrophy.textContent = '🏆';
      victoryTitle.textContent = `Vitória de ${p1.name}!`;
      victoryMessage.innerHTML = `No Duelo de <strong>${levelLabels[currentLevel]}</strong>, <strong>${p1.name}</strong> venceu acertando <strong>${p1.pairs} pares</strong> contra <strong>${p2.pairs} pares</strong> de ${p2.name}!`;
    } else if (winnerSlot === 2) {
      victoryTrophy.textContent = '🏆';
      victoryTitle.textContent = `Vitória de ${p2.name}!`;
      victoryMessage.innerHTML = `No Duelo de <strong>${levelLabels[currentLevel]}</strong>, <strong>${p2.name}</strong> venceu acertando <strong>${p2.pairs} pares</strong> contra <strong>${p1.pairs} pares</strong> de ${p1.name}!`;
    } else {
      victoryTrophy.textContent = '🤝';
      if (p1.xp > p2.xp) {
        victoryTitle.textContent = `Empate em Pares (${p1.pairs} a ${p2.pairs})!`;
        victoryMessage.innerHTML = `Vocês empataram em número de pares, mas <strong>${p1.name}</strong> venceu no critério de desempate científico com <strong>${p1.xp} XP</strong> contra ${p2.xp} XP!`;
      } else if (p2.xp > p1.xp) {
        victoryTitle.textContent = `Empate em Pares (${p1.pairs} a ${p2.pairs})!`;
        victoryMessage.innerHTML = `Vocês empataram em número de pares, mas <strong>${p2.name}</strong> venceu no critério de desempate científico com <strong>${p2.xp} XP</strong> contra ${p1.xp} XP!`;
      } else {
        victoryTitle.textContent = `Empate Científico Absoluto!`;
        victoryMessage.innerHTML = `Incrível! <strong>${p1.name}</strong> e <strong>${p2.name}</strong> empataram com <strong>${p1.pairs} pares cada</strong>!`;
      }
    }

    if (victoryStatsGrid) {
      victoryStatsGrid.className = 'victory-stats-grid duel-summary-grid';
      victoryStatsGrid.innerHTML = `
        <div class="v-stat-card ${winnerSlot === 1 ? 'winner-card' : ''}">
          <span>🧑‍🔬 ${p1.name}</span>
          <strong>${p1.pairs} Pares</strong>
          <span>⭐ ${p1.xp} XP${isQuizEnabled() ? ` • ⚡ ${p1.quizzes} Quiz` : ''}</span>
        </div>
        <div class="v-stat-card ${winnerSlot === 2 ? 'winner-card' : ''}">
          <span>⚔️ ${p2.name}</span>
          <strong>${p2.pairs} Pares</strong>
          <span>⭐ ${p2.xp} XP${isQuizEnabled() ? ` • ⚡ ${p2.quizzes} Quiz` : ''}</span>
        </div>
      `;
    }

    victoryModal.classList.remove('hidden');
    return;
  }

  // Modo Solo
  const playerName = spanJogador.textContent || 'Cientista';
  const avatarCfg = window.PhysicsAvatar ? window.PhysicsAvatar.loadConfig(1) : null;
  if (victoryAvatarBox && window.PhysicsAvatar) {
    victoryAvatarBox.innerHTML = window.PhysicsAvatar.renderSVG(avatarCfg);
  }

  const accuracy =
    totalAttempts > 0 ? Math.round((matchedPairsCount / totalAttempts) * 100) : 100;

  if (isVictory) {
    victoryTrophy.textContent = '🏆';
    victoryTitle.textContent = `Parabéns, ${playerName}!`;
    victoryMessage.innerHTML = `Como <strong>${avatarCfg ? avatarCfg.title : 'Cientista'}</strong>, você dominou todos os <strong>${totalPairsInLevel} pares complementares (${totalPairsInLevel * 2} cartas)</strong> do nível <strong>${levelLabels[currentLevel]}</strong>!`;
  } else {
    victoryTrophy.textContent = '💥';
    victoryTitle.textContent = 'Experimento Interrompido!';
    victoryMessage.innerHTML = `${customReason} Você encontrou <strong>${matchedPairsCount} de ${totalPairsInLevel} pares</strong>. Tente novamente ou use seus Power-ups de Laboratório!`;
  }

  if (victoryStatsGrid) {
    victoryStatsGrid.className = 'victory-stats-grid';
    victoryStatsGrid.innerHTML = `
      <div class="v-stat-card">
        <span>XP Total</span>
        <strong>⭐ ${xpScore}</strong>
      </div>
      <div class="v-stat-card">
        <span>Combo Máx.</span>
        <strong>🔥 x${maxCombo}</strong>
      </div>
      <div class="v-stat-card">
        <span>Tempo</span>
        <strong>⏱ ${elapsedSeconds}s</strong>
      </div>
      <div class="v-stat-card">
        <span>Precisão</span>
        <strong>🎯 ${accuracy}%</strong>
      </div>
    `;
  }

  victoryModal.classList.remove('hidden');
};

// ============================================================================
// LÓGICA DE VERIFICAÇÃO DE PARES COMPLEMENTARES
// ============================================================================
const confiraCartas = () => {
  totalAttempts += 1;

  const pairId1 = primeiraCarta.getAttribute('data-pair-id');
  const pairId2 = segundaCarta.getAttribute('data-pair-id');
  const type1 = primeiraCarta.getAttribute('data-type');
  const type2 = segundaCarta.getAttribute('data-type');

  primeiraCarta.classList.remove('magnetic-hint');
  segundaCarta.classList.remove('magnetic-hint');

  const isComplementaryMatch = pairId1 === pairId2 && type1 !== type2;

  if (isComplementaryMatch) {
    primeiraCarta.firstChild.classList.add('acertouCarta');
    segundaCarta.firstChild.classList.add('acertouCarta');
    primeiraCarta.classList.add('matched-card');
    segundaCarta.classList.add('matched-card');

    if (isDuelMode()) {
      const ownerBadge = activeDuelPlayer === 1 ? '✓ J1' : '✓ J2';
      const ownerClass = activeDuelPlayer === 1 ? 'matched-by-p1' : 'matched-by-p2';
      primeiraCarta.setAttribute('data-owner-badge', ownerBadge);
      segundaCarta.setAttribute('data-owner-badge', ownerBadge);
      primeiraCarta.classList.add(ownerClass);
      segundaCarta.classList.add(ownerClass);

      duelPlayers[activeDuelPlayer].pairs += 1;
      duelPlayers[activeDuelPlayer].xp += 100;
    } else {
      primeiraCarta.setAttribute('data-owner-badge', '✓');
      segundaCarta.setAttribute('data-owner-badge', '✓');
    }

    const cardData1 = primeiraCarta._cardData;
    const cardData2 = segundaCarta._cardData;

    matchedPairsCount += 1;
    xpScore += 100 * comboMultiplier;
    comboMultiplier += 1;
    if (comboMultiplier > maxCombo) maxCombo = comboMultiplier;
    updateHUD();

    primeiraCarta = null;
    segundaCarta = null;
    lockBoard = false;

    setTimeout(() => {
      openEducationalModal(cardData1, cardData2);
    }, 340);
  } else {
    lockBoard = true;
    comboMultiplier = 1;

    if (currentMode === 'sobrevivencia') {
      livesRemaining = Math.max(0, livesRemaining - 1);
    }
    updateHUD();

    setTimeout(() => {
      if (primeiraCarta) primeiraCarta.classList.remove('revela-carta');
      if (segundaCarta) segundaCarta.classList.remove('revela-carta');

      primeiraCarta = null;
      segundaCarta = null;
      lockBoard = false;

      if (isDuelMode()) {
        switchDuelTurn('miss');
      } else if (currentMode === 'sobrevivencia' && livesRemaining === 0) {
        openEndGameModal(false, 'Suas 5 vidas do Modo Sobrevivência acabaram!');
      }
    }, 850);
  }
};

// ============================================================================
// INTERAÇÃO E CRIAÇÃO DAS CARTAS NO TABULEIRO
// ============================================================================
const revealCard = ({ currentTarget }) => {
  const card = currentTarget;

  if (lockBoard) return;
  if (card.classList.contains('revela-carta')) return;
  if (card.classList.contains('matched-card')) return;

  card.classList.add('revela-carta');

  if (!primeiraCarta) {
    primeiraCarta = card;
    return;
  }

  segundaCarta = card;
  confiraCartas();
};

const createCard = (cardData) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  card.setAttribute('data-pair-id', cardData.pairId);
  card.setAttribute('data-type', cardData.type);
  card.setAttribute('data-owner-badge', '✓');
  card._cardData = cardData;

  let badgeText = '🔍 Fenômeno';
  if (cardData.type === 'B') {
    if (currentLevel === 'fundamental') {
      badgeText = '💡 Conceito';
    } else if (isVisualGuidedDifficulty()) {
      badgeText = '💡 Dica + Fórmula';
    } else {
      badgeText = '⚛️ Equação';
    }
  }

  front.innerHTML = `
    <span class="card-corner-badge">${badgeText}</span>
    <div class="card-content-area">
      ${buildCardVisualHTML(cardData)}
    </div>
    <div class="card-caption">${cardData.label}</div>
  `;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  return card;
};

// ============================================================================
// INICIALIZAÇÃO E CARREGAMENTO DO NÍVEL, MODO E QUANTIDADE DE CARTAS
// ============================================================================
const shuffleCards = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const loadGame = (
  levelKey = currentLevel,
  modeKey = currentMode,
  pairsLimit = requestedPairsCount
) => {
  const validLevels = [
    'fundamental',
    'medio',
    'medio_dificil',
    'faculdade',
    'faculdade_dificil'
  ];
  currentLevel = validLevels.includes(levelKey) ? levelKey : 'fundamental';

  const validModes = [
    'duelo_pares',
    'duelo',
    'solo_pares',
    'exploracao',
    'desafio',
    'sobrevivencia'
  ];
  currentMode = validModes.includes(modeKey) ? modeKey : 'duelo_pares';
  requestedPairsCount = Number(pairsLimit) || 12;

  localStorage.setItem('physicsLevel', currentLevel);
  localStorage.setItem('physicsGameMode', currentMode);

  if (levelSelect) levelSelect.value = currentLevel;
  if (modeSelect) modeSelect.value = currentMode;
  if (deckSizeSelect) deckSizeSelect.value = String(requestedPairsCount);

  if (legendBadgeB) {
    if (currentLevel === 'fundamental') {
      legendBadgeB.textContent = '💡 Carta B (Laranja): Conceito Visual';
    } else if (isVisualGuidedDifficulty()) {
      legendBadgeB.textContent = '💡 Carta B (Laranja): Desenho + Fórmula Pela Metade';
    } else {
      legendBadgeB.textContent = '⚛️ Carta B (Laranja): Equação Completa';
    }
  }

  const baseDatasetKey = getBaseDatasetKey(currentLevel);
  const allLevelCards = PHYSICS_GAME_DATA[baseDatasetKey];
  const maxAvailablePairs = allLevelCards.length / 2;
  totalPairsInLevel = Math.min(requestedPairsCount, maxAvailablePairs);
  const activeCards = allLevelCards.slice(0, totalPairsInLevel * 2);

  if (totalPairsInLevel <= 6) {
    grid.classList.add('grid-12');
  } else {
    grid.classList.remove('grid-12');
  }

  // Reseta estado da partida
  grid.innerHTML = '';
  primeiraCarta = null;
  segundaCarta = null;
  lockBoard = false;
  matchedPairsCount = 0;
  xpScore = 0;
  comboMultiplier = 1;
  maxCombo = 1;
  totalAttempts = 0;
  challengesSolved = 0;
  livesRemaining = MAX_LIVES;
  freezeSecondsRemaining = 0;
  powerupsLeft = { radar: 1, freeze: 1, magnet: 1 };

  // Reseta estado do Duelo 2 Jogadores
  const p1SavedName = localStorage.getItem('player') || 'Jogador 1';
  const p2SavedName = localStorage.getItem('player2') || 'Jogador 2';
  activeDuelPlayer = 1;
  duelTurnSeconds = DUEL_TURN_LIMIT;
  duelPlayers = {
    1: { name: p1SavedName, pairs: 0, xp: 0, quizzes: 0 },
    2: { name: p2SavedName, pairs: 0, xp: 0, quizzes: 0 }
  };
  if (turnToast) turnToast.classList.add('hidden');

  elapsedSeconds = 0;
  remainingSeconds = totalPairsInLevel * 18;

  if (currentMode === 'desafio') {
    if (timerLabel) timerLabel.textContent = '⏳ Restante:';
    timer.innerHTML = String(remainingSeconds).padStart(2, '0');
  } else {
    if (timerLabel) timerLabel.textContent = '⏱ Tempo:';
    timer.innerHTML = '00';
  }

  eduModal.classList.add('hidden');
  victoryModal.classList.add('hidden');
  updateHUD();

  const shuffledCards = shuffleCards(activeCards);
  shuffledCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    grid.appendChild(cardElement);
  });

  if (isDuelMode()) {
    const modeDesc =
      currentMode === 'duelo_pares' ? 'Modo Só Pares' : 'Modo Pares + Quiz';
    showTurnToast(
      `⚔️ Duelo (${modeDesc}) iniciado! Vez de ${duelPlayers[1].name} — você tem 30s para encontrar um par!`,
      'default'
    );
    startTimer();
  } else if (currentMode === 'sobrevivencia') {
    lockBoard = true;
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((c) => c.classList.add('revela-carta'));
    setTimeout(() => {
      allCards.forEach((c) => c.classList.remove('revela-carta'));
      lockBoard = false;
      startTimer();
    }, 2800);
  } else {
    startTimer();
  }
};

// ============================================================================
// EVENTOS E BOOTSTRAP
// ============================================================================
if (btnContinueGame) {
  btnContinueGame.addEventListener('click', closeEducationalModal);
}

if (btnRestart) {
  btnRestart.addEventListener('click', () =>
    loadGame(currentLevel, currentMode, requestedPairsCount)
  );
}

if (levelSelect) {
  levelSelect.addEventListener('change', (e) => {
    loadGame(e.target.value, currentMode, requestedPairsCount);
  });
}

if (modeSelect) {
  modeSelect.addEventListener('change', (e) => {
    loadGame(currentLevel, e.target.value, requestedPairsCount);
  });
}

if (deckSizeSelect) {
  deckSizeSelect.addEventListener('change', (e) => {
    loadGame(currentLevel, currentMode, Number(e.target.value));
  });
}

if (btnPwRadar) {
  btnPwRadar.addEventListener('click', useRadarPowerup);
}
if (btnPwFreeze) {
  btnPwFreeze.addEventListener('click', useFreezePowerup);
}
if (btnPwMagnet) {
  btnPwMagnet.addEventListener('click', useMagnetPowerup);
}

if (btnPlayAgain) {
  btnPlayAgain.addEventListener('click', () => {
    loadGame(currentLevel, currentMode, requestedPairsCount);
  });
}

if (btnSwitchLevel) {
  btnSwitchLevel.addEventListener('click', () => {
    const order = [
      'fundamental',
      'medio',
      'medio_dificil',
      'faculdade',
      'faculdade_dificil'
    ];
    const nextIdx = (order.indexOf(currentLevel) + 1) % order.length;
    loadGame(order[nextIdx], currentMode, requestedPairsCount);
  });
}

window.addEventListener('keydown', (e) => {
  if (!eduModal.classList.contains('hidden') && e.key === 'Enter') {
    e.preventDefault();
    closeEducationalModal();
  }
});

window.addEventListener('load', () => {
  const playerName = localStorage.getItem('player') || 'Jogador 1';
  spanJogador.textContent = playerName;

  if (window.PhysicsAvatar) {
    const avatarCfg1 = window.PhysicsAvatar.loadConfig(1);
    const avatarCfg2 = window.PhysicsAvatar.loadConfig(2);

    if (headerAvatarBox) {
      headerAvatarBox.innerHTML = window.PhysicsAvatar.renderSVG(avatarCfg1);
    }
    if (playerTitleBadge && avatarCfg1.title) {
      playerTitleBadge.textContent = avatarCfg1.title;
    }

    if (duelP1Avatar) {
      duelP1Avatar.innerHTML = window.PhysicsAvatar.renderSVG(avatarCfg1);
    }
    if (duelP1TitleEl && avatarCfg1.title) {
      duelP1TitleEl.textContent = avatarCfg1.title;
    }
    if (duelP2Avatar) {
      duelP2Avatar.innerHTML = window.PhysicsAvatar.renderSVG(avatarCfg2);
    }
    if (duelP2TitleEl && avatarCfg2.title) {
      duelP2TitleEl.textContent = avatarCfg2.title;
    }
  }

  const params = new URLSearchParams(window.location.search);
  const requestedLevel =
    params.get('level') || localStorage.getItem('physicsLevel') || 'fundamental';
  const requestedMode =
    params.get('mode') || localStorage.getItem('physicsGameMode') || 'duelo_pares';

  loadGame(requestedLevel, requestedMode, 12);
});
