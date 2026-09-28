const translations = {
    pt: {
        nav_brand: "<Programador/>",
        nav_home: "Home",
        nav_about: "Sobre",
        nav_catalogo: "Catálogo Impeccable",
        nav_intervencoes: "Intervenções v2",
        nav_contacts: "Contatos",
        hero_title: "Full Stack Developer",
        hero_subtitle: "Criando soluções completas, código criativo e experiências excepcionais.",
        hero_cta: "Sobre mim",
        hero_cta_2: "Contato",
        status_available: "Disponível para trabalhar",
        section_label_about: "// about.js",
        about_title: "Sobre mim",
        about_p1: "Olá! Me chamo Vitor.",
        about_p2: "Sou programador Full Stack focado em HTML, CSS, JavaScript, Python, C, MySQL e SQL, e atualmente curso Análise e Desenvolvimento de Sistemas no IFSP Guarulhos.",
        about_p3: "Gosto de resolver problemas com código e IA, estou em busca da minha próxima oportunidade para crescer como desenvolvedor e contribuir com projetos desafiadores.",
        stat_course: "Cursando",
        stat_school: "Guarulhos",
        stat_focus: "Foco",
        tech_stack: "Stack Tecnológica",
        section_label_contacts: "// contacts.js",
        contact_title: "Contatos",
        contact_name: "Vitor Igor dos Santos",
        contact_phone: "+55 11 94675-0795",
        footer_text: "Feito com HTML, CSS, JS & Bootstrap 5.",
        back_to_main: "Voltar ao Portfólio Main (v2)",

        // Shared Labels
        lbl_full_name: "Nome Completo:",
        lbl_purpose: "Finalidade:",
        lbl_usage: "Momento de Uso:",
        lbl_example: "Exemplo:",
        lbl_risks: "Riscos:",
        lbl_evidence: "Evidência:",
        lbl_obs_problem: "Problema Observado",
        lbl_imp_hypothesis: "Hipótese de Melhoria",
        lbl_prompt_guide: "Prompt / Orientação",
        lbl_result_evidence: "Resultado & Evidência",
        lbl_analysis_decision: "Análise & Decisão:",

        // Categories
        cat_sistematizar: "Sistematizar",
        cat_criar: "Criar",
        cat_avaliar: "Avaliar",
        cat_refinar: "Refinar",
        cat_simplificar: "Simplificar",
        cat_preparar: "Preparar",

        // Catalog Page
        cat_title: "Catálogo Completo dos 23 Comandos",
        cat_desc: "Mapeamento detalhado dos 23 comandos da especificação oficial do <a href=\"https://impeccable.style/docs/\" target=\"_blank\" class=\"text-primary-custom\">Impeccable</a>, categorizados e analisados segundo requisitos de finalidade, uso, riscos e evidência.",
        cat_footer: "© 2026 Vitor Igor dos Santos. Catálogo de 23 Comandos Impeccable.",

        cmd_1_purpose: "Inicializar o contexto de design e produto do repositório criando os arquivos fundamentais de governança.",
        cmd_1_usage: "Na primeira interação com o repositório ou no início da fase de redesign.",
        cmd_1_example: "Gerar o <code>PRODUCT.md</code> e o <code>DESIGN.md</code> no repositório do portfólio.",
        cmd_1_risks: "Substituição acidental de documentações já existentes se executado sem backup.",
        cmd_1_evidence: "Arquivos de schema válidos criados na raiz do repositório.",

        cmd_2_purpose: "Atualizar a especificação do sistema de design à medida que novas telas e componentes evoluem.",
        cmd_2_usage: "Após alterações relevantes no CSS, novos tokens ou componentes criados.",
        cmd_2_example: "Registrar a paleta <code>#146CFF</code> e tipografia Poppins no <code>DESIGN.md</code>.",
        cmd_2_risks: "Documentação tornar-se prolixa e desconectada da implementação real.",
        cmd_2_evidence: "<code>DESIGN.md</code> reflete exatamente todas as variáveis CSS ativas.",

        cmd_3_purpose: "Definir a arquitetura visual e a hierarquia dos blocos de uma nova seção antes do código final.",
        cmd_3_usage: "Na criação de novos módulos ou reestruturação de seções confusas.",
        cmd_3_example: "Moldar a seção \"Sobre mim\" em formato de card IDE de código.",
        cmd_3_risks: "Adicionar estruturas rígidas demais que quebrem a responsividade em telas pequenas.",
        cmd_3_evidence: "Layout estruturado com containers semânticos e hierarquia clara.",

        cmd_4_purpose: "Fazer uma avaliação crítica de usabilidade, hierarquia e princípios visuais da página.",
        cmd_4_usage: "Antes de liberar modificações ou na fase de diagnóstico inicial da v1.",
        cmd_4_example: "Identificar que os botões de contato tinham pouco contraste na versão original.",
        cmd_4_risks: "Críticas excessivamente subjetivas sem foco em dados práticos de UX.",
        cmd_4_evidence: "Lista clara de pontos fracos e recomendações objetivas de melhoria.",

        cmd_5_purpose: "Auditar o código HTML/CSS buscando quebras de padrões, CSS inline ou inconsistências.",
        cmd_5_usage: "Na revisão de qualidade técnica antes do commit final.",
        cmd_5_example: "Varrer o <code>styles.css</code> para eliminar regras duplicadas ou cores fora da marca.",
        cmd_5_risks: "Gerar alertas falsos em hacks intencionais para navegadores legados.",
        cmd_5_evidence: "Relatório de zero violações dos padrões descritos no <code>DESIGN.md</code>.",

        cmd_6_purpose: "Ajustar escala tipográfica, line-height, font-weight e alinhamento de texto.",
        cmd_6_usage: "Quando os textos parecem desproporcionais ou difíceis de ler.",
        cmd_6_example: "Padronizar `Poppins` para títulos e `Fira Code` para termos de desenvolvedor.",
        cmd_6_risks: "Misturar fontes demais e prejudicar a legibilidade da página.",
        cmd_6_evidence: "Ritmo vertical perfeito e relação harmoniosa entre H1, H2, body e labels.",

        cmd_7_purpose: "Corrigir alinhamentos de grid, espaçamentos internos (padding) e externos (margin).",
        cmd_7_usage: "Quando componentes parecem espremidos ou desalinhados visualmente.",
        cmd_7_example: "Ajustar o container dos cards de contato para centralização precisa em telas grandes.",
        cmd_7_risks: "Quebrar o alinhamento em resoluções intermediárias de tablet.",
        cmd_7_evidence: "Alinhamento milimétrico em grid de 12 colunas com respiro adequado.",

        cmd_8_purpose: "Calibrar uso de cores, garantindo harmonia visual e contraste para leitura.",
        cmd_8_usage: "Na definição de paletas escuras, destaques ou botões de ação.",
        cmd_8_example: "Aplicar a cor primária `#146CFF` com variações de opacidade para brilhos e bordas.",
        cmd_8_risks: "Uso excessivo da cor de destaque causando poluição e fadiga visual.",
        cmd_8_evidence: "Taxa de contraste atinge no mínimo 4.5:1 (padrão WCAG AA).",

        cmd_9_purpose: "Garantir excelente navegação e disposição gráfica em qualquer tamanho de tela.",
        cmd_9_usage: "Na homologação de telas em smartphones, tablets e monitores ultra-wide.",
        cmd_9_example: "Reorganizar a Hero section de 2 colunas para empilhamento vertical no mobile.",
        cmd_9_risks: "Esconder elementos cruciais da interface em telas pequenas.",
        cmd_9_evidence: "Ausência total de rolagem horizontal indesejada em todas as resoluções.",

        cmd_10_purpose: "Ajustar o esquema de cores escuras para evitar sombras duras e cores puras estouradas.",
        cmd_10_usage: "Em aplicações com tema dark padrão ou alternável.",
        cmd_10_example: "Substituir o preto puro `#000000` pelo tom space-dark `#090a0f` com superfície `#11131c`.",
        cmd_10_risks: "Deixar o fundo muito claro tirando a sensação de tema escuro premium.",
        cmd_10_evidence: "Leitura confortável mesmo em ambientes escuros sem ofuscamento.",

        cmd_11_purpose: "Definir estados visuais claros (default, hover, active, focus, disabled) nos elementos.",
        cmd_11_usage: "Na criação ou estilização de botões, links e formulários.",
        cmd_11_example: "Adicionar animação de elevação (`translateY(-8px)`) e brilho azul no hover dos cards.",
        cmd_11_risks: "Animações lentas demais que passam a sensação de travamento na interface.",
        cmd_11_evidence: "O usuário recebe feedback tátil e visual imediato a cada clique ou passagem do mouse.",

        cmd_12_purpose: "Refinar pequenos textos de interface (botões, badges, placeholders, labels) para serem diretos.",
        cmd_12_usage: "Na revisão de tom de voz e clareza da comunicação do site.",
        cmd_12_example: "Alterar o botão da Hero de \"Saiba Mais\" para \"Sobre mim\" com o indicador `#` em Fira Code.",
        cmd_12_risks: "Usar gírias ou termos ambíguos que recrutadores não compreendam.",
        cmd_12_evidence: "Leitura rápida sem dúvida sobre a ação de cada botão.",

        cmd_13_purpose: "Reduzir excessos visuais, removendo bordas, sombras ou decorações desnecessárias.",
        cmd_13_usage: "Quando a tela parece sobrecarregada ou com ruído estético.",
        cmd_13_example: "Remover múltiplos fundos coloridos e unificar as seções em poucas variações escuras.",
        cmd_13_risks: "Deixar a interface sem graça, apagada ou genérica demais.",
        cmd_13_evidence: "Foco do usuário vai direto para o conteúdo e foto de perfil.",

        cmd_14_purpose: "Eliminar elementos redundantes, ícones sem função e linhas divisórias pesadas.",
        cmd_14_usage: "Na limpeza final das páginas antes do fechamento do layout.",
        cmd_14_example: "Remover efeitos Matrix concorrentes e manter o efeito Canvas sutil ao fundo.",
        cmd_14_risks: "Remover informações essenciais para a compreensão do usuário.",
        cmd_14_evidence: "Interface limpa com hierarquia visual nítida.",

        cmd_15_purpose: "Achatar aninhamentos excessivos de divs e containers no código HTML.",
        cmd_15_usage: "Na otimização da estrutura de marcação para melhorar a renderização.",
        cmd_15_example: "Eliminar divs container aninhadas desnecessárias na seção de contatos.",
        cmd_15_risks: "Quebrar o comportamento de flexbox ou grid se uma div pai relevante for removida.",
        cmd_15_evidence: "Árvore DOM mais rasa e código HTML limpo.",

        cmd_16_purpose: "Garantir acessibilidade com ARIA labels, alt text, navegação por teclado e contraste.",
        cmd_16_usage: "Na validação de inclusão e usabilidade técnica.",
        cmd_16_example: "Adicionar `alt=\"Vitor - Foto de Perfil\"` e garantir foco visível em todos os links com Tab.",
        cmd_16_risks: "Adicionar atributos ARIA incorretos que confundam leitores de tela.",
        cmd_16_evidence: "Pontuação 100 no Lighthouse no quesito Acessibilidade.",

        cmd_17_purpose: "Otimizar tempo de carregamento, tamanho de imagens e eficiência do Canvas/JS.",
        cmd_17_usage: "Antes do deploy para garantir carregamento instantâneo.",
        cmd_17_example: "Otimizar o loop de animação do Matrix Canvas usando `requestAnimationFrame` eficiente.",
        cmd_17_risks: "Reduzir demais a qualidade de imagens até ficarem pixeladas.",
        cmd_17_evidence: "Carregamento da página em menos de 1 segundo em conexões 4G.",

        cmd_18_purpose: "Estruturar o sistema para suporte fluido a múltiplos idiomas sem quebrar o layout.",
        cmd_18_usage: "Na implementação do seletor de idiomas (Português/Inglês).",
        cmd_18_example: "Mapear todas as strings no objeto `translations` no `script.js` utilizando `data-i18n`.",
        cmd_18_risks: "Textos em inglês estourarem a largura de containers projetados apenas para português.",
        cmd_18_evidence: "Troca instantânea de idioma em 100% da interface sem recarregar a página.",

        cmd_19_purpose: "Centralizar variáveis de cor, fontes, espaçamentos e sombras no CSS.",
        cmd_19_usage: "No início da estilização e na manutenção contínua do tema.",
        cmd_19_example: "Criar `:root { --primary-color: #146CFF; --bg-dark: #090a0f; }` no `styles.css`.",
        cmd_19_risks: "Criar tokens genéricos demais com nomes confusos.",
        cmd_19_evidence: "Alterar uma única variável no `:root` atualiza todo o site harmoniosamente.",

        cmd_20_purpose: "Verificar se todos os arquivos estáticos, links de CDN e scripts estão sem erros de console.",
        cmd_20_usage: "Imediatamente antes de subir as alterações para produção (GitHub Pages / Vercel).",
        cmd_20_example: "Checar se os CDNs do Bootstrap 5 e Devicon estão carregando via HTTPS sem falha.",
        cmd_20_risks: "Deploy de arquivos com caminhos de imagem locais quebrados.",
        cmd_20_evidence: "Zero erros no Console do Desenvolvedor (F12).",

        cmd_21_purpose: "Fazer o polimento final das sombras, cantos arredondados, bordas sutis e transições.",
        cmd_21_usage: "Na reta final de acabamento do projeto.",
        cmd_21_example: "Adicionar borda brilhante suave no card da seção de contatos e transição cubic-bezier.",
        cmd_21_risks: "Gastar tempo excessivo com detalhes imperceptíveis.",
        cmd_21_evidence: "Sensação de interface de produto profissional de nível comercial.",

        cmd_22_purpose: "Validar o funcionamento em tempo real da aplicação rodando diretamente em navegadores reais.",
        cmd_22_usage: "Após realizar mudanças no código para conferir o resultado em tela.",
        cmd_22_example: "Testar a animação do Canvas Matrix no Chrome, Edge e Firefox.",
        cmd_22_risks: "Confiar apenas em emuladores e ignorar bugs específicos do Safari/iOS.",
        cmd_22_evidence: "Interface funciona perfeitamente sem engasgos nos principais navegadores.",

        cmd_23_purpose: "Extrair padrões reutilizáveis (como classes CSS utilitárias) para reaproveitamento limpo.",
        cmd_23_usage: "Quando o mesmo estilo começa a ser duplicado em vários arquivos HTML.",
        cmd_23_example: "Extrair as classes `.contact-item` e `.tech-chip` no `styles.css`.",
        cmd_23_risks: "Abstrair componentes cedo demais gerando código CSS rígido.",
        cmd_23_evidence: "Redução substancial de código duplicado e facilidade de manutenção.",

        // Interventions Page
        int_badge: "Transição v1 → v2 Concluída",
        int_title: "Registro de Intervenções Práticas",
        int_desc: "Documentação sistemática de 16 intervenções práticas executadas com os comandos do <strong>Impeccable</strong> para transformar o portfólio inicial (v1) na versão otimizada (v2).",
        int_footer: "© 2026 Vitor Igor dos Santos. Registro de Intervenções Impeccable (v1 → v2).",

        int_1_cat: "Categoria: Sistematizar",
        int_1_problem: "A v1 não possuía documentação de produto ou regras formais de design, gerando risco de modificações inconsistentes.",
        int_1_hypothesis: "Inicializar o Impeccable no repositório gerará os arquivos de governança para manter a integridade visual.",
        int_1_result: "Arquivos <code>PRODUCT.md</code> e <code>DESIGN.md</code> criados com especificação completa de tokens e anti-referências.",
        int_1_decision: "Decidido adotar o Brand Blue `#146CFF` e proibir o uso de gradientes roxos genéricos de IA.",

        int_2_cat: "Categoria: Sistematizar",
        int_2_problem: "Variáveis de tema escuro e fontes não estavam registradas formalmente na especificação do projeto.",
        int_2_hypothesis: "Documentar a escala de cores e regras no <code>DESIGN.md</code> facilitará futuras expansões.",
        int_2_result: "Tabela de cores e tipografia (`Poppins` e `Fira Code`) catalogadas no <code>DESIGN.md</code>.",
        int_2_decision: "Mantido o uso exclusivo de Poppins para títulos/corpo e Fira Code para acentos de código.",

        int_3_cat: "Categoria: Criar",
        int_3_problem: "A seção \"Sobre mim\" na v1 consistia apenas em parágrafos de texto puro sem apelo visual de desenvolvedor.",
        int_3_hypothesis: "Reestruturar o módulo no formato de card de IDE de código aumentará a percepção de skill técnica.",
        int_3_result: "Seção transformada em um card de IDE com barra de títulos, números de linha e estatísticas.",
        int_3_decision: "Aprovado. A estética de IDE reforça a identidade de Full Stack Developer.",

        int_4_cat: "Categoria: Avaliar",
        int_4_problem: "Os botões de contato no final da página v1 tinham bordas finas demais e pouca presença visual.",
        int_4_hypothesis: "Uma crítica heurística indicará o aumento do peso visual do card de contatos para aumentar conversão.",
        int_4_result: "Card de contatos redesenhado com destaque em vidro (backdrop-filter) e avatar central.",
        int_4_decision: "Aumento substancial na taxa de destaque visual dos botões de WhatsApp e GitHub.",

        int_5_cat: "Categoria: Avaliar",
        int_5_problem: "Haviam estilos CSS inline repetidos e sombras inconsistentes entre as seções na v1.",
        int_5_hypothesis: "Uma auditoria do código eliminará duplicações e padronizará todas as classes CSS.",
        int_5_result: "Estilos inline removidos e consolidados nas variáveis CSS do `:root`.",
        int_5_decision: "Código CSS reduzido e 100% aderente às especificações do `DESIGN.md`.",

        int_6_cat: "Categoria: Refinar",
        int_6_problem: "O subtítulo da Hero section tinha font-size desproporcional e leitura cansativa.",
        int_6_hypothesis: "Ajustar a escala tipográfica com `Poppins` weight 600 e line-height relaxado melhorará a leitura.",
        int_6_result: "Subtítulos ajustados para a classe `lead` com cor secundária `#94a3b8` para alto contraste.",
        int_6_decision: "Leitura mais fluida sem competir com o nome \"Vitor\" no H1.",

        int_7_cat: "Categoria: Refinar",
        int_7_problem: "A imagem de perfil ficava deslocada do centro vertical em resoluções intermediárias.",
        int_7_hypothesis: "Aplicar alinhamento flexbox `align-items-center` e container com min-vh-100 estabilizará a altura.",
        int_7_result: "Alinhamento perfeito da foto de perfil com os textos de apresentação em qualquer tela.",
        int_7_decision: "Centralização perfeita alcançada na Hero section.",

        int_8_cat: "Categoria: Refinar",
        int_8_problem: "Vários tons de azul diferentes eram usados aleatoriamente no CSS da v1.",
        int_8_hypothesis: "Unificar todos os acentos no tom elétrico `#146CFF` criará identidade de marca coesa.",
        int_8_result: "Paleta de cores unificada em 100% da interface com a cor oficial da marca.",
        int_8_decision: "Identidade visual fortaleceu instantaneamente.",

        int_9_cat: "Categoria: Refinar",
        int_9_problem: "Em smartphones pequenos, a foto de perfil ocupava a tela inteira antes do texto.",
        int_9_hypothesis: "Usar `flex-column-reverse` no mobile priorizará a leitura do nome e cargo do desenvolvedor.",
        int_9_result: "No mobile o texto aparece primeiro e a foto fica ajustada abaixo, sem rolagem quebrada.",
        int_9_decision: "Experiência mobile extremamente aprimorada para recrutadores.",

        int_10_cat: "Categoria: Refinar",
        int_10_problem: "O fundo preto absoluto `#000000` criava um contraste muito duro com o azul brilhante.",
        int_10_hypothesis: "Mudar o fundo para a tonalidade `#090a0f` trará elegância visual sem cansar a visão.",
        int_10_result: "Fundo alterado para `#090a0f` com seções alternadas em `#11131c` e brilhos em radial gradient.",
        int_10_decision: "Aspecto de produto SaaS moderno e confortável aos olhos.",

        int_11_cat: "Categoria: Refinar",
        int_11_problem: "Os ícones da stack tecnológica e botões não tinham feedback visual dinâmico ao passar o mouse.",
        int_11_hypothesis: "Adicionar efeito de elevação (`translateY`) e brilho drop-shadow trará sensação tátil à interface.",
        int_11_result: "Cards e ícones agora elevam suavemente com brilho azul vibrante no hover.",
        int_11_decision: "Feedback instantâneo melhora a experiência de navegação.",

        int_12_cat: "Categoria: Simplificar",
        int_12_problem: "A navbar tinha muitas opções repetidas e bordas carregadas que distraíam o usuário.",
        int_12_hypothesis: "Simplificar o menu com efeito de vidro fosco (`backdrop-filter`) e links diretos.",
        int_12_result: "Navbar limpa, elegante e flutuante no topo da página.",
        int_12_decision: "Foco total mantido no conteúdo sem poluição visual.",

        int_13_cat: "Categoria: Preparar",
        int_13_problem: "Imagens de tecnologia e botoes sem legenda causavam alertas em testes de acessibilidade.",
        int_13_hypothesis: "Inserir atributos `alt` semânticos e suporte completo a foco visual por teclado.",
        int_13_result: "Todas as imagens possuem atributos `alt` descritivos e navegabilidade via tecla Tab ok.",
        int_13_decision: "Aprovado em conformidade com as diretrizes WCAG AA.",

        int_14_cat: "Categoria: Preparar",
        int_14_problem: "Recrutadores internacionais não conseguiam ler o portfólio em inglês na v1.",
        int_14_hypothesis: "Implementar chaveador dinâmico de idioma PT/EN sem recarregar a página.",
        int_14_result: "Botão de alternância no header que traduz instantaneamente 100% da interface.",
        int_14_decision: "Recurso altamente elogiado por expandir o alcance do portfólio.",

        int_15_cat: "Categoria: Refinar",
        int_15_problem: "O fundo da página parecia estático e sem a energia tecnológica característica do perfil.",
        int_15_hypothesis: "Adicionar um Canvas interativo com efeito Matrix em azul sutil (opacity 0.25).",
        int_15_result: "Efeito Matrix fluido e elegante rodando ao fundo sem atrapalhar a leitura do texto.",
        int_15_decision: "Polimento final aprovado. Torna o portfólio memorável.",

        int_16_cat: "Categoria: Avaliar",
        int_16_problem: "Necessidade de homologar se todas as interações e Canvas funcionam sem bugs no navegador real.",
        int_16_hypothesis: "Execução em runtime no browser validará a versão v2 final.",
        int_16_result: "Zero erros no console JS, 60fps constante no Canvas e links 100% operacionais.",
        int_16_decision: "Projeto aprovado para publicação da versão v2 oficial."
    },
    en: {
        nav_brand: "<Programmer/>",
        nav_home: "Home",
        nav_about: "About",
        nav_catalogo: "Impeccable Catalog",
        nav_intervencoes: "v2 Interventions",
        nav_contacts: "Contacts",
        hero_title: "Full Stack Developer",
        hero_subtitle: "Building complete solutions, creative code, and exceptional experiences.",
        hero_cta: "About me",
        hero_cta_2: "Contact",
        status_available: "Available for work",
        section_label_about: "// about.js",
        about_title: "About me",
        about_p1: "Hello! My name is Vitor.",
        about_p2: "I am a Full Stack programmer focused on HTML, CSS, JavaScript, Python, C, MySQL, and SQL, and I am currently studying Systems Analysis and Development at IFSP Guarulhos.",
        about_p3: "I enjoy solving problems with code and AI, and I am looking for my next opportunity to grow as a developer and contribute to challenging projects.",
        stat_course: "Studying",
        stat_school: "Guarulhos",
        stat_focus: "Focus",
        tech_stack: "Tech Stack",
        section_label_contacts: "// contacts.js",
        contact_title: "Contacts",
        contact_name: "Vitor Igor dos Santos",
        contact_phone: "+55 11 94675-0795",
        footer_text: "Built with HTML, CSS, JS & Bootstrap 5.",
        back_to_main: "Back to Main Portfolio (v2)",

        // Shared Labels
        lbl_full_name: "Full Name:",
        lbl_purpose: "Purpose:",
        lbl_usage: "When to Use:",
        lbl_example: "Example:",
        lbl_risks: "Risks:",
        lbl_evidence: "Evidence:",
        lbl_obs_problem: "Observed Problem",
        lbl_imp_hypothesis: "Improvement Hypothesis",
        lbl_prompt_guide: "Prompt / Guidance",
        lbl_result_evidence: "Result & Evidence",
        lbl_analysis_decision: "Analysis & Decision:",

        // Categories
        cat_sistematizar: "Systematize",
        cat_criar: "Create",
        cat_avaliar: "Evaluate",
        cat_refinar: "Refine",
        cat_simplificar: "Simplify",
        cat_preparar: "Prepare",

        // Catalog Page
        cat_title: "Complete Catalog of 23 Commands",
        cat_desc: "Detailed mapping of the 23 commands from the official <a href=\"https://impeccable.style/docs/\" target=\"_blank\" class=\"text-primary-custom\">Impeccable</a> specification, categorized and analyzed according to purpose, usage, risks, and evidence.",
        cat_footer: "© 2026 Vitor Igor dos Santos. 23 Impeccable Commands Catalog.",

        cmd_1_purpose: "Initialize the repository's design and product context by creating foundational governance files.",
        cmd_1_usage: "On the first interaction with the repository or at the start of a redesign phase.",
        cmd_1_example: "Generate <code>PRODUCT.md</code> and <code>DESIGN.md</code> in the portfolio repository.",
        cmd_1_risks: "Accidental overwriting of existing documentation if run without backup.",
        cmd_1_evidence: "Valid schema files created at repository root.",

        cmd_2_purpose: "Update the design system specification as new screens and components evolve.",
        cmd_2_usage: "After relevant CSS changes, new design tokens, or newly created components.",
        cmd_2_example: "Record the <code>#146CFF</code> palette and Poppins typography in <code>DESIGN.md</code>.",
        cmd_2_risks: "Documentation becoming verbose and disconnected from actual implementation.",
        cmd_2_evidence: "<code>DESIGN.md</code> accurately reflects all active CSS variables.",

        cmd_3_purpose: "Define visual architecture and block hierarchy of a new section before final styling.",
        cmd_3_usage: "When creating new modules or restructuring cluttered sections.",
        cmd_3_example: "Shape the \"About me\" section into an IDE code card format.",
        cmd_3_risks: "Adding overly rigid structures that break responsiveness on small screens.",
        cmd_3_evidence: "Structured layout with semantic containers and clear hierarchy.",

        cmd_4_purpose: "Perform a critical assessment of usability, hierarchy, and visual principles of the page.",
        cmd_4_usage: "Before releasing changes or during the initial diagnostic phase of v1.",
        cmd_4_example: "Identify that contact buttons had insufficient contrast in the original version.",
        cmd_4_risks: "Excessively subjective feedback without focus on practical UX data.",
        cmd_4_evidence: "Clear list of weaknesses and objective recommendations for improvement.",

        cmd_5_purpose: "Audit HTML/CSS codebase searching for broken patterns, inline CSS, or inconsistencies.",
        cmd_5_usage: "During technical quality review prior to final commit.",
        cmd_5_example: "Scan <code>styles.css</code> to eliminate duplicate rules or off-brand colors.",
        cmd_5_risks: "False alerts on intentional hacks for legacy browsers.",
        cmd_5_evidence: "Report of zero violations against standards documented in <code>DESIGN.md</code>.",

        cmd_6_purpose: "Adjust typographic scale, line-height, font-weight, and text alignment.",
        cmd_6_usage: "When text appears disproportionate or difficult to read.",
        cmd_6_example: "Standardize `Poppins` for headings and `Fira Code` for developer accents.",
        cmd_6_risks: "Mixing too many font families and hurting readability.",
        cmd_6_evidence: "Perfect vertical rhythm and harmonious hierarchy between H1, H2, body, and labels.",

        cmd_7_purpose: "Fix grid alignments, internal spacing (padding), and external spacing (margin).",
        cmd_7_usage: "When components appear cramped or visually misaligned.",
        cmd_7_example: "Adjust contact cards container for precise centering on large viewports.",
        cmd_7_risks: "Breaking alignment on intermediate tablet resolutions.",
        cmd_7_evidence: "Millimetric alignment on 12-column grid with proper breathing room.",

        cmd_8_purpose: "Calibrate color usage, ensuring visual harmony and legible reading contrast.",
        cmd_8_usage: "When defining dark themes, highlights, or action buttons.",
        cmd_8_example: "Apply primary color `#146CFF` with varying opacities for glows and borders.",
        cmd_8_risks: "Overusing accent colors causing visual pollution and user fatigue.",
        cmd_8_evidence: "Contrast ratio achieves at least 4.5:1 (WCAG AA standard).",

        cmd_9_purpose: "Guarantee excellent navigation and visual layout across any screen size.",
        cmd_9_usage: "During viewport validation on smartphones, tablets, and ultra-wide displays.",
        cmd_9_example: "Reorganize the 2-column Hero section into vertical mobile stacking.",
        cmd_9_risks: "Hiding crucial interface elements on small screens.",
        cmd_9_evidence: "Total absence of unwanted horizontal scrolling across all resolutions.",

        cmd_10_purpose: "Tune dark color scheme to avoid harsh drop shadows and blown-out pure colors.",
        cmd_10_usage: "In apps featuring a default or toggleable dark theme.",
        cmd_10_example: "Replace pure black `#000000` with space-dark `#090a0f` and surface `#11131c`.",
        cmd_10_risks: "Making the background too bright, degrading the premium dark aesthetic.",
        cmd_10_evidence: "Comfortable reading even in dark environments with zero glare.",

        cmd_11_purpose: "Define clear visual states (default, hover, active, focus, disabled) on elements.",
        cmd_11_usage: "During creation or styling of buttons, links, and forms.",
        cmd_11_example: "Add elevation animation (`translateY(-8px)`) and blue glow on card hover.",
        cmd_11_risks: "Overly slow transitions that make the interface feel sluggish.",
        cmd_11_evidence: "User receives immediate tactile and visual feedback on every hover and click.",

        cmd_12_purpose: "Refine interface copy (buttons, badges, placeholders, labels) to be concise and direct.",
        cmd_12_usage: "During review of tone of voice and communication clarity.",
        cmd_12_example: "Change Hero button from \"Learn More\" to \"About me\" with `#` indicator in Fira Code.",
        cmd_12_risks: "Using slang or ambiguous terminology that recruiters might misunderstand.",
        cmd_12_evidence: "Quick reading with zero ambiguity regarding the action of each button.",

        cmd_13_purpose: "Reduce visual excess by removing unnecessary borders, shadows, or ornaments.",
        cmd_13_usage: "When the screen feels overloaded or crowded with aesthetic noise.",
        cmd_13_example: "Remove multiple colorful backgrounds and unify sections into a few dark tones.",
        cmd_13_risks: "Making the interface dull, bland, or overly generic.",
        cmd_13_evidence: "User focus is directed straight to core content and profile picture.",

        cmd_14_purpose: "Eliminate redundant elements, decorative icons without function, and heavy divider lines.",
        cmd_14_usage: "During final page cleanup before finalizing layout.",
        cmd_14_example: "Remove competing matrix effects and keep a subtle Canvas in the background.",
        cmd_14_risks: "Removing information essential to user understanding.",
        cmd_14_evidence: "Clean interface with distinct, sharp visual hierarchy.",

        cmd_15_purpose: "Flatten excessive nesting of divs and containers in the HTML markup.",
        cmd_15_usage: "During markup optimization to improve browser rendering efficiency.",
        cmd_15_example: "Eliminate unnecessary wrapper divs in the contacts section.",
        cmd_15_risks: "Breaking flexbox or grid behavior if a necessary parent container is removed.",
        cmd_15_evidence: "Shallower DOM tree and streamlined HTML source code.",

        cmd_16_purpose: "Ensure accessibility with ARIA labels, alt text, keyboard navigation, and contrast.",
        cmd_16_usage: "During validation of inclusion and technical usability.",
        cmd_16_example: "Add `alt=\"Vitor - Profile Picture\"` and ensure visible focus outlines with Tab.",
        cmd_16_risks: "Adding incorrect ARIA attributes that confuse screen readers.",
        cmd_16_evidence: "100 Accessibility score on Google Lighthouse.",

        cmd_17_purpose: "Optimize load time, image asset size, and Canvas/JS execution efficiency.",
        cmd_17_usage: "Before deployment to guarantee instantaneous page loading.",
        cmd_17_example: "Optimize Matrix Canvas animation loop using efficient `requestAnimationFrame`.",
        cmd_17_risks: "Over-compressing images to the point of pixelation.",
        cmd_17_evidence: "Page load in under 1 second on standard 4G mobile connections.",

        cmd_18_purpose: "Structure the system for seamless multi-language support without breaking layouts.",
        cmd_18_usage: "When implementing language selectors (Portuguese / English).",
        cmd_18_example: "Map all UI strings in `translations` dictionary inside `script.js` via `data-i18n`.",
        cmd_18_risks: "English text overflowing containers sized strictly for Portuguese copy.",
        cmd_18_evidence: "Instant language toggle across 100% of UI without page reload.",

        cmd_19_purpose: "Centralize color variables, fonts, spacings, and shadows in CSS.",
        cmd_19_usage: "At the beginning of styling and during ongoing theme maintenance.",
        cmd_19_example: "Declare `:root { --primary-color: #146CFF; --bg-dark: #090a0f; }` in `styles.css`.",
        cmd_19_risks: "Declaring overly generic tokens with confusing names.",
        cmd_19_evidence: "Changing a single variable in `:root` updates the whole site harmoniosamente.",

        cmd_20_purpose: "Verify all static assets, CDN links, and scripts load without console errors.",
        cmd_20_usage: "Immediately before pushing changes to production (GitHub Pages / Vercel).",
        cmd_20_example: "Verify Bootstrap 5 and Devicon CDNs load over HTTPS without failures.",
        cmd_20_risks: "Deploying files with broken local image paths.",
        cmd_20_evidence: "Zero errors in Browser Developer Console (F12).",

        cmd_21_purpose: "Polish shadows, rounded corners, subtle borders, and smooth transitions.",
        cmd_21_usage: "During the final finishing stretch of the project.",
        cmd_21_example: "Add subtle glowing border to contacts card with cubic-bezier transition.",
        cmd_21_risks: "Spending excessive time on imperceptible micro-details.",
        cmd_21_evidence: "Commercial-grade professional product interface feel.",

        cmd_22_purpose: "Validate real-time behavior of the app running directly in real browsers.",
        cmd_22_usage: "After making code changes to inspect results in viewport.",
        cmd_22_example: "Test Matrix Canvas animation on Chrome, Edge, and Firefox.",
        cmd_22_risks: "Relying only on emulators and missing Safari/iOS-specific quirks.",
        cmd_22_evidence: "Flawless performance with zero stutters across major browsers.",

        cmd_23_purpose: "Extract reusable patterns (such as utility CSS classes) for clean DRY reuse.",
        cmd_23_usage: "When identical styles start duplicating across multiple HTML files.",
        cmd_23_example: "Extract `.contact-item` and `.tech-chip` utility classes in `styles.css`.",
        cmd_23_risks: "Premature component abstraction resulting in rigid CSS code.",
        cmd_23_evidence: "Substantial reduction in duplicate code and simplified maintenance.",

        // Interventions Page
        int_badge: "Transition v1 → v2 Completed",
        int_title: "Practical Interventions Log",
        int_desc: "Systematic documentation of 16 practical interventions performed with <strong>Impeccable</strong> commands to transform the initial portfolio (v1) into the optimized version (v2).",
        int_footer: "© 2026 Vitor Igor dos Santos. Impeccable Interventions Log (v1 → v2).",

        int_1_cat: "Category: Systematize",
        int_1_problem: "Version 1 lacked product documentation and formal design rules, risking inconsistent modifications.",
        int_1_hypothesis: "Initializing Impeccable in the repository will generate governance files to preserve visual integrity.",
        int_1_result: "<code>PRODUCT.md</code> and <code>DESIGN.md</code> files created with complete token specifications and anti-references.",
        int_1_decision: "Decided to adopt Brand Blue `#146CFF` and prohibit generic AI purple gradients.",

        int_2_cat: "Category: Systematize",
        int_2_problem: "Dark theme variables and typography were not formally documented in project specs.",
        int_2_hypothesis: "Documenting color scale and rules in <code>DESIGN.md</code> will facilitate future scalability.",
        int_2_result: "Color palette and typography (`Poppins` and `Fira Code`) cataloged in <code>DESIGN.md</code>.",
        int_2_decision: "Maintained exclusive use of Poppins for headings/body and Fira Code for code accents.",

        int_3_cat: "Category: Create",
        int_3_problem: "The \"About me\" section in v1 was only plain text paragraphs without developer visual appeal.",
        int_3_hypothesis: "Restructuring the module into an IDE code card format will enhance perceived technical skills.",
        int_3_result: "Section transformed into an IDE window card with titlebar, line numbers, and statistics.",
        int_3_decision: "Approved. The IDE aesthetic reinforces the Full Stack Developer identity.",

        int_4_cat: "Category: Evaluate",
        int_4_problem: "Contact buttons at the bottom of v1 had overly thin borders and weak visual presence.",
        int_4_hypothesis: "A heuristic critique will guide increasing visual weight of the contact card to boost conversions.",
        int_4_result: "Contact card redesigned with frosted glass highlight (backdrop-filter) and central avatar.",
        int_4_decision: "Substantial increase in visual prominence of WhatsApp and GitHub action buttons.",

        int_5_cat: "Category: Evaluate",
        int_5_problem: "There were duplicate inline CSS styles and inconsistent drop shadows across sections in v1.",
        int_5_hypothesis: "A code audit will eliminate redundancies and standardize all CSS classes.",
        int_5_result: "Inline styles removed and consolidated into `:root` CSS variables.",
        int_5_decision: "CSS codebase reduced and 100% compliant with `DESIGN.md` guidelines.",

        int_6_cat: "Category: Refine",
        int_6_problem: "The Hero section subtitle had disproportionate font size and straining readability.",
        int_6_hypothesis: "Adjusting typographic scale with `Poppins` 600 weight and relaxed line-height will enhance reading flow.",
        int_6_result: "Subtitles tuned using the `lead` class with secondary color `#94a3b8` for high contrast.",
        int_6_decision: "Smoother reading rhythm without competing with the name \"Vitor\" in the H1.",

        int_7_cat: "Category: Refine",
        int_7_problem: "The profile image shifted off vertical center in intermediate viewport resolutions.",
        int_7_hypothesis: "Applying flexbox `align-items-center` and min-vh-100 container will stabilize vertical height.",
        int_7_result: "Perfect alignment of profile image with presentation copy on any screen.",
        int_7_decision: "Flawless vertical and horizontal centering achieved in the Hero section.",

        int_8_cat: "Category: Refine",
        int_8_problem: "Multiple mismatched shades of blue were used randomly in v1 CSS.",
        int_8_hypothesis: "Unifying all accents to electric `#146CFF` will create a cohesive brand identity.",
        int_8_result: "Color palette unified across 100% of the UI with the official brand color.",
        int_8_decision: "Visual identity strengthened immediately.",

        int_9_cat: "Category: Refine",
        int_9_problem: "On compact smartphones, the profile image took up the entire screen before any text.",
        int_9_hypothesis: "Using `flex-column-reverse` on mobile will prioritize reading developer name and role.",
        int_9_result: "On mobile, text displays first and photo nests neatly beneath without layout breaks.",
        int_9_decision: "Significantly enhanced mobile experience for technical recruiters.",

        int_10_cat: "Category: Refine",
        int_10_problem: "The absolute black background `#000000` produced harsh contrast with bright blue accents.",
        int_10_hypothesis: "Shifting background to `#090a0f` will bring visual elegance without eye strain.",
        int_10_result: "Background transitioned to `#090a0f` with alternating `#11131c` sections and radial glow accents.",
        int_10_decision: "Modern SaaS product aesthetic that is comfortable for prolonged viewing.",

        int_11_cat: "Category: Refine",
        int_11_problem: "Tech stack icons and buttons lacked dynamic visual feedback on mouse hover.",
        int_11_hypothesis: "Adding elevation effects (`translateY`) and drop-shadow glow will deliver a tactile UI feel.",
        int_11_result: "Cards and badges now elevate smoothly with vibrant blue glow on hover.",
        int_11_decision: "Instant tactile feedback greatly enhances user interaction.",

        int_12_cat: "Category: Simplify",
        int_12_problem: "The navbar had repetitive options and heavy borders distracting the user.",
        int_12_hypothesis: "Simplify navigation with frosted glass blur (`backdrop-filter`) and direct links.",
        int_12_result: "Clean, elegant navbar floating subtly at the top of the viewport.",
        int_12_decision: "Complete focus maintained on core content without visual noise.",

        int_13_cat: "Category: Prepare",
        int_13_problem: "Tech images and unlabelled buttons triggered warnings in accessibility audits.",
        int_13_hypothesis: "Add semantic `alt` attributes and comprehensive keyboard focus indicators.",
        int_13_result: "All images feature descriptive `alt` tags and full Tab-key navigation compliance.",
        int_13_decision: "Approved in compliance with WCAG AA accessibility standards.",

        int_14_cat: "Category: Prepare",
        int_14_problem: "International recruiters could not read the portfolio in English in v1.",
        int_14_hypothesis: "Implement dynamic PT/EN language switcher without page reload.",
        int_14_result: "Header toggle button that instantly translates 100% of the interface.",
        int_14_decision: "Highly praised feature that expands portfolio reach globally.",

        int_15_cat: "Category: Refine",
        int_15_problem: "The page background felt static and lacked developer technological energy.",
        int_15_hypothesis: "Add an interactive Canvas with subtle blue Matrix effect (opacity 0.25).",
        int_15_result: "Fluid, elegant Matrix ambient canvas animation running in background without hurting readability.",
        int_15_decision: "Final polish approved. Creates a memorable developer portfolio experience.",

        int_16_cat: "Category: Evaluate",
        int_16_problem: "Need to validate that all canvas and animations work bug-free in real browser runtimes.",
        int_16_hypothesis: "Runtime execution in real browsers will validate final v2 release.",
        int_16_result: "Zero JS console errors, solid 60fps canvas performance, and 100% functional links.",
        int_16_decision: "Project certified and approved for official v2 production release."
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
let typewriterInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    // --- Language Toggle ---
    const langToggleBtn = document.getElementById('langToggle');
    const langSpan = document.getElementById('currentLang');

    if (langSpan) {
        langSpan.innerText = currentLang === 'pt' ? 'PT-BR' : 'EN';
    }
    updateLanguage(false); // false = no animation on load

    if (langToggleBtn && langSpan) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', currentLang);
            langSpan.innerText = currentLang === 'pt' ? 'PT-BR' : 'EN';
            updateLanguage(true);
            langToggleBtn.style.transform = 'scale(0.9)';
            setTimeout(() => langToggleBtn.style.transform = 'scale(1)', 150);
        });
    }

    // --- Navbar Scroll Effect ---
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        const updateNavbarScroll = () => {
            if (window.scrollY > 30) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', updateNavbarScroll);
        updateNavbarScroll();
    }

    // --- Intersection Observer for animations ---
    const skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length > 0) {
        const observerOptions = { threshold: 0.2 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('skill-item')) {
                        const bar = entry.target.querySelector('.skill-fill');
                        if (bar) bar.style.width = bar.getAttribute('data-width') + '%';
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        skillItems.forEach(el => observer.observe(el));
    }
});

// --- Typewriter Effect ---
function typeWriter(text, elementId, speed = 80) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerText = '';
    let i = 0;
    
    if(typewriterInstance) clearTimeout(typewriterInstance);

    function type() {
        if (i < text.length) {
            el.innerText += text.charAt(i);
            i++;
            typewriterInstance = setTimeout(type, speed);
        }
    }
    type();
}

function updateLanguage(animate = true) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (key === 'hero_title') {
                typeWriter(translations[currentLang][key], 'typewriterText');
                return;
            }
            
            if (animate) {
                el.style.opacity = 0;
                setTimeout(() => {
                    el.innerHTML = translations[currentLang][key];
                    el.style.transition = 'opacity 0.3s ease';
                    el.style.opacity = 1;
                }, 150);
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });
}

// --- Particle Network Canvas (Hero) ---
const canvas = document.getElementById('particleCanvas');
const homeSection = document.getElementById('home');

if (canvas && homeSection) {
    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = homeSection.offsetHeight;
    };
    setCanvasSize();

    let particlesArray = [];
    const numberOfParticles = Math.min(100, (canvas.width * canvas.height) / 15000);

    const mouse = {
        x: null,
        y: null,
        radius: 140
    };

    homeSection.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    homeSection.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.8;
            this.speedX = (Math.random() * 1 - 0.5) * 0.5;
            this.speedY = (Math.random() * 1 - 0.5) * 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Gentle interaction when mouse hovers nearby
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius && distance > 0) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = (dx / distance) * force * 1.5;
                    const directionY = (dy / distance) * force * 1.5;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = 'rgba(20, 108, 255, 0.6)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connectParticles() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = dx * dx + dy * dy;
                const maxDist = (canvas.width / 7) * (canvas.height / 7);
                if (distance < maxDist && distance < 25000) {
                    const opacityValue = 1 - (distance / 25000);
                    ctx.strokeStyle = 'rgba(20, 108, 255,' + opacityValue * 0.18 + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }

            // Connect to mouse cursor
            if (mouse.x !== null && mouse.y !== null) {
                const dxMouse = particlesArray[a].x - mouse.x;
                const dyMouse = particlesArray[a].y - mouse.y;
                const distMouse = dxMouse * dxMouse + dyMouse * dyMouse;
                const maxMouseDist = mouse.radius * mouse.radius;
                if (distMouse < maxMouseDist) {
                    const opacityMouse = 1 - (distMouse / maxMouseDist);
                    ctx.strokeStyle = 'rgba(59, 130, 246,' + opacityMouse * 0.45 + ')';
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles();
    });

    initParticles();
    animateParticles();
}

// --- Contacts Matrix (Green) ---
const contactsMatrixCanvas = document.getElementById('contactsMatrixCanvas');
const githubRainContainer = document.getElementById('github-rain-container');
const whatsappLink = document.getElementById('whatsapp-link');
const githubLink = document.getElementById('github-link');
const contactsCard = document.getElementById('contacts-card');

if (contactsMatrixCanvas) {
    const ctxContacts = contactsMatrixCanvas.getContext('2d');
    const setContactsCanvasSize = () => {
        contactsMatrixCanvas.width = window.innerWidth;
        contactsMatrixCanvas.height = document.getElementById('contacts').offsetHeight;
    };
    setContactsCanvasSize();
    
    const chars = '01';
    const fontSize = 16;
    let columnsContacts = contactsMatrixCanvas.width / fontSize;
    let dropsContacts = [];
    for (let x = 0; x < columnsContacts; x++) dropsContacts[x] = 1;
    
    function drawContactsMatrix() {
        if (contactsMatrixCanvas.style.opacity === '0') return;
        ctxContacts.fillStyle = 'rgba(9, 10, 15, 0.05)';
        ctxContacts.fillRect(0, 0, contactsMatrixCanvas.width, contactsMatrixCanvas.height);
        ctxContacts.fillStyle = '#0f0';
        ctxContacts.font = fontSize + 'px monospace';
        
        for (let i = 0; i < dropsContacts.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctxContacts.fillText(text, i * fontSize, dropsContacts[i] * fontSize);
            if (dropsContacts[i] * fontSize > contactsMatrixCanvas.height && Math.random() > 0.975) {
                dropsContacts[i] = 0;
            }
            dropsContacts[i]++;
        }
    }
    setInterval(drawContactsMatrix, 50);
    window.addEventListener('resize', () => {
        setContactsCanvasSize();
        columnsContacts = contactsMatrixCanvas.width / fontSize;
        dropsContacts = [];
        for (let x = 0; x < columnsContacts; x++) dropsContacts[x] = 1;
    });
}

// --- Github Rain Effect ---
let githubRainInterval;
function createGithubIcon() {
    if (githubRainContainer.style.opacity === '0') return;
    
    const icon = document.createElement('i');
    icon.className = 'bi bi-github';
    icon.style.position = 'absolute';
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.top = '-50px';
    icon.style.fontSize = (Math.random() * 20 + 20) + 'px';
    icon.style.color = 'rgba(255, 255, 255, 0.15)';
    icon.style.opacity = '0';
    icon.style.transition = 'top 3s linear, opacity 0.5s ease';
    
    githubRainContainer.appendChild(icon);
    setTimeout(() => {
        icon.style.opacity = '1';
        icon.style.top = '110vh';
    }, 50);
    setTimeout(() => icon.remove(), 3000);
}

// --- Hover event listeners ---
if (whatsappLink && githubLink) {
    whatsappLink.addEventListener('mouseenter', () => {
        contactsMatrixCanvas.style.opacity = '0.4';
        githubRainContainer.style.opacity = '0';
        contactsCard.style.borderColor = '#25D366';
        contactsCard.style.boxShadow = '0 20px 60px rgba(37, 211, 102, 0.15)';
    });
    
    whatsappLink.addEventListener('mouseleave', () => {
        contactsMatrixCanvas.style.opacity = '0';
        contactsCard.style.borderColor = '';
        contactsCard.style.boxShadow = '';
    });
    
    githubLink.addEventListener('mouseenter', () => {
        githubRainContainer.style.opacity = '1';
        contactsMatrixCanvas.style.opacity = '0';
        contactsCard.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        
        for(let i=0; i<10; i++) setTimeout(createGithubIcon, i * 200);
        clearInterval(githubRainInterval);
        githubRainInterval = setInterval(createGithubIcon, 150);
    });
    
    githubLink.addEventListener('mouseleave', () => {
        githubRainContainer.style.opacity = '0';
        contactsCard.style.borderColor = '';
        clearInterval(githubRainInterval);
        setTimeout(() => {
            if(githubRainContainer.style.opacity === '0') {
                githubRainContainer.innerHTML = '';
            }
        }, 500);
    });
}
