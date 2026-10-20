(function () {
  const copy = {
    pt: {
      "skip": "Ir para o conteúdo",
      "nav.label": "Seções",
      "nav.projects": "Projetos",
      "nav.contact": "Contato",
      "lang.switch": "Idioma: português",
      "home.title": "Nicolas Frantz",
      "home.description": "Nicolas Frantz, desenvolvedor fullstack. Sistemas web em PHP, JavaScript, Vue, React e TypeScript.",
      "home.who": "$ quem-sou",
      "home.role": "Desenvolvedor fullstack",
      "home.lede1": "Formado em engenharia de software, trabalho como desenvolvedor há mais de 5 anos e crio sistemas completos para empresas, incluindo agendamentos, landing pages e CRM manual, além da personalização que é feita de acordo com as necessidades de cada cliente.",
      "home.lede2": "Além de programas voltados para empresas, criei uma ficha virtual pensada para um sistema de RPG de mesa, um projeto pessoal em que pude me desafiar e desenvolver novas habilidades dentro da programação.",
      "home.skills": "$ habilidades",
      "home.projectsPrompt": "$ projetos",
      "home.projectsTitle": "Projetos",
      "home.projectsNote": "Um resumo de alguns projetos que ja fiz.",
      "home.case1.alt": "Tela do Confractus, com a saudação Bem-vindo, Emanador.",
      "home.case1.eyebrow": "01 · Ficha de RPG virtual",
      "home.case1.text": "Ficha de RPG de mesa para o sistema de Confractus.",
      "home.case2.alt": "Tela de acesso do Studio Mognon.",
      "home.case2.eyebrow": "02 · CRM para Studio de Tatuagem",
      "home.case2.text": "Agenda/CRM e ficha de clientes para um estúdio de tatuagem, com pré-cadastro por link.",
      "home.case3.alt": "Tela de acesso da Agenda Verus.",
      "home.case3.eyebrow": "03 · Agenda para Studio de Tatuagem",
      "home.case3.text": "Calendário de sessões, clientes e equipe para um estúdio de tatuagem e piercing.",
      "home.case4.alt": "Tela da Planilha de Gastos, com o resumo do mês e o lançamento.",
      "home.case4.eyebrow": "04 · Planilha de Finanças",
      "home.case4.title": "Planilha de Gastos",
      "home.case4.text": "Controle do mês, com gastos, parcelas, limite e reservas. Cada pessoa vê só a própria conta.",
      "home.more": "Ver projeto →",
      "home.contactPrompt": "$ contato --info",
      "home.contactTitle": "Vamos conversar",
      "home.location": "$ localizacao --current",
      "home.emailPrompt": "$ contato --email",
      "home.links": "$ ls ./redes",
      "home.formPrompt": "$ enviar-mensagem",
      "home.name": "$ nome:",
      "home.email": "$ e-mail:",
      "home.message": "$ mensagem:",
      "home.send": "EnviarMensagem()",
      "home.mailSubject": "Contato pelo portfólio — ",

      "confractus.title": "Confractus | Nicolas Frantz",
      "confractus.description": "Ficha de personagem para RPG de mesa, com atualização para o grupo na hora.",
      "confractus.back": "Todos os projetos",
      "confractus.eyebrow": "01 · Ficha de RPG virtual",
      "confractus.lede": "Ficha de personagem para RPG de mesa.",
      "confractus.p1": "O jogador cria o personagem e acompanha atributos, perícias, inventário e o restante da ficha durante a sessão. O mestre conduz o grupo e chama quem vai jogar por um convite, também podendo acompanhar cada rolagem de dados feitas durante uma sessão.",
      "confractus.p2": "A ficha conta com um sistema de inventário baseado em Resident Evil, e com uma tela de modificações para armamentos inspirada nos jogos de fps de hoje em dia como Escape From Tarkov.",
      "confractus.stack": "Feito com",
      "confractus.alt1": "Tela do Confractus, com a saudação Bem-vindo, Emanador.",
      "confractus.cap1": "A entrada da ficha, no visual do jogo.",
      "confractus.alt2": "Tela de login do Confractus, com usuário e senha.",
      "confractus.cap2": "Cada jogador entra com a própria conta para ver e editar a ficha.",
      "confractus.alt3": "Ficha de personagem do Confractus, com atributos, perícias, vida e sanidade.",
      "confractus.cap3": "A ficha em uso: atributos, perícias, vida e sanidade.",
      "confractus.alt4": "Mesa do mestre no Confractus, com os personagens do grupo e as rolagens.",
      "confractus.cap4": "A mesa do mestre, com o grupo e as rolagens da sessão.",
      "confractus.next": "Próximo projeto: Studio Mognon",

      "mognon.title": "Studio Mognon | Nicolas Frantz",
      "mognon.description": "Agenda e ficha de clientes para um estúdio de tatuagem.",
      "mognon.back": "Todos os projetos",
      "mognon.eyebrow": "02 · CRM para Studio de Tatuagem",
      "mognon.lede": "Agenda e ficha de clientes para um estúdio de tatuagem, com pré-cadastro por link.",
      "mognon.p1": "A equipe marca a sessão, visualiza o mês e consegue enviar o horário para o Google Agenda ou abrir o WhatsApp com a mensagem pronta.",
      "mognon.p2": "Cada cliente é cadastrado com uma ficha exclusiva onde a equipe registra a anamnese, briefing e histórico, podendo também gerar um voucher promocional para o cliente.",
      "mognon.p3": "O cliente preenche o pré-cadastro por um link, respondendo as perguntas personalizadas pelo studio, podendo inclusive incluir campos obrigatórios.",
      "mognon.stack": "Feito com",
      "mognon.alt1": "Tela de acesso do Studio Mognon, com o polvo do estúdio.",
      "mognon.cap1": "Por aqui a equipe entra na agenda e no cadastro dos clientes.",
      "mognon.alt2": "Agenda mensal do Studio Mognon, com as sessões marcadas na semana.",
      "mognon.cap2": "O mês do estúdio, com as sessões já marcadas.",
      "mognon.alt3": "Lista de clientes do Studio Mognon, separada por etapa do atendimento.",
      "mognon.cap3": "CRM separado por etapa, do primeiro contato até a sessão feita, utilizando Drag and Drop inspirado no Trello.",
      "mognon.alt4": "Ficha de um cliente do Studio Mognon, com o pré-cadastro preenchido.",
      "mognon.cap4": "A ficha do cliente, com o pré-cadastro que ele mesmo responde pelo link.",
      "mognon.next": "Próximo projeto: Agenda Verus",

      "verus.title": "Agenda Verus | Nicolas Frantz",
      "verus.description": "Agenda e cadastro para um estúdio de tatuagem e piercing.",
      "verus.back": "Todos os projetos",
      "verus.eyebrow": "03 · Agenda para Studio de Tatuagem",
      "verus.lede": "Calendário de sessões, clientes e equipe para um studio de tatuagem e piercing.",
      "verus.p1": "O sistema inclui calendário de sessões, ficha do cliente com anamnese, equipe, serviços e um relatório do período.",
      "verus.p2": "Em cada sessão é possivel registrar se o sinal foi pago, ficando visível na agenda um aviso que aparece tanto no celular quanto no computador.",
      "verus.stack": "Feito com",
      "verus.alt1": "Tela de acesso da Verus Tattoo Art.",
      "verus.cap1": "Tela de login do studio.",
      "verus.alt2": "Agenda mensal da Verus, com sessões e avisos de sinal pendente.",
      "verus.cap2": "A agenda do mês, com aviso de quem ainda não pagou o sinal.",
      "verus.alt3": "Cadastro de clientes da Verus, com botão para chamar no WhatsApp.",
      "verus.cap3": "O cadastro dos clientes, com atalho para chamar no WhatsApp.",
      "verus.next": "Próximo projeto: Planilha de Gastos",

      "planilha.title": "Planilha de Gastos | Nicolas Frantz",
      "planilha.description": "Controle de gastos do mês, com limite, parcelas e reservas.",
      "planilha.back": "Todos os projetos",
      "planilha.eyebrow": "04 · Planilha de Finanças",
      "planilha.h1": "Planilha de Gastos",
      "planilha.lede": "Controle do mês, com gastos, parcelas, limite e reservas.",
      "planilha.p1": "É possivel lançar despesa, repetir gastos fixo e acompanhar parcelas que avançam sozinhas mês a mês. É possivel incluir salário, um limite de gastos com aviso e uma reserva financeira que mostra o percentual guardado para atingir sua meta.",
      "planilha.stack": "Feito com",
      "planilha.alt1": "Resumo do mês na Planilha de Gastos, com salário, gastos e reservas.",
      "planilha.cap1": "O mês: salário, quanto já saiu, o que ainda cabe no limite e as reservas.",
      "planilha.alt2": "Formulário de gasto e a lista do mês, com pesquisa e filtros.",
      "planilha.cap2": "O lançamento do gasto e a lista do mês, com pesquisa, parcela e status.",
      "planilha.alt3": "Janela de configurações, com salário, limite e aparência da tela.",
      "planilha.cap3": "Salário, limite do mês e a aparência da tela, do jeito de quem usa.",
      "planilha.next": "Voltar ao primeiro: Confractus"
    },
    en: {
      "skip": "Skip to content",
      "nav.label": "Sections",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "lang.switch": "Language: English",
      "home.title": "Nicolas Frantz",
      "home.description": "Nicolas Frantz, fullstack developer. Web systems in PHP, JavaScript, Vue, React, and TypeScript.",
      "home.who": "$ whoami",
      "home.role": "Fullstack developer",
      "home.lede1": "I have a software engineering degree and have worked as a developer for more than five years. I build complete systems for companies, including scheduling, landing pages, and a CRM the team runs by hand, customized to what each client needs.",
      "home.lede2": "Besides software for companies, I built a virtual character sheet for a tabletop RPG. It was a personal project, a place to push myself and pick up new programming skills.",
      "home.skills": "$ skills",
      "home.projectsPrompt": "$ projects",
      "home.projectsTitle": "Projects",
      "home.projectsNote": "A short look at some projects I have built.",
      "home.case1.alt": "Confractus screen, with the greeting Welcome, Emanador.",
      "home.case1.eyebrow": "01 · Virtual RPG sheet",
      "home.case1.text": "Tabletop RPG character sheet for the Confractus system.",
      "home.case2.alt": "Studio Mognon sign-in screen.",
      "home.case2.eyebrow": "02 · CRM for a tattoo studio",
      "home.case2.text": "Schedule, CRM, and client records for a tattoo studio, with pre-registration by link.",
      "home.case3.alt": "Agenda Verus sign-in screen.",
      "home.case3.eyebrow": "03 · Schedule for a tattoo studio",
      "home.case3.text": "Session calendar, clients, and staff for a tattoo and piercing studio.",
      "home.case4.alt": "Expense sheet screen, with the month summary and a new entry.",
      "home.case4.eyebrow": "04 · Finance sheet",
      "home.case4.title": "Expense sheet",
      "home.case4.text": "The month in one place: spending, installments, a limit, and savings. Each person only sees their own account.",
      "home.more": "View project →",
      "home.contactPrompt": "$ contact --info",
      "home.contactTitle": "Let's talk",
      "home.location": "$ location --current",
      "home.emailPrompt": "$ contact --email",
      "home.links": "$ ls ./social-links",
      "home.formPrompt": "$ send-message",
      "home.name": "$ name:",
      "home.email": "$ email:",
      "home.message": "$ message:",
      "home.send": "SendMessage()",
      "home.mailSubject": "Portfolio contact — ",

      "confractus.title": "Confractus | Nicolas Frantz",
      "confractus.description": "Character sheet for tabletop RPG, updating live for the whole group.",
      "confractus.back": "All projects",
      "confractus.eyebrow": "01 · Virtual RPG sheet",
      "confractus.lede": "Character sheet for tabletop RPG.",
      "confractus.p1": "The player creates the character and follows attributes, skills, inventory, and the rest of the sheet during the session. The game master runs the group, invites who is playing, and can follow every dice roll in the session.",
      "confractus.p2": "The sheet has an inventory based on Resident Evil, and a weapon modification screen inspired by modern FPS games such as Escape from Tarkov.",
      "confractus.stack": "Built with",
      "confractus.alt1": "Confractus screen, with the greeting Welcome, Emanador.",
      "confractus.cap1": "The way into the sheet, in the look of the game.",
      "confractus.alt2": "Confractus sign-in screen, with username and password.",
      "confractus.cap2": "Each player signs in with their own account to view and edit the sheet.",
      "confractus.alt3": "Confractus character sheet, with attributes, skills, health, and sanity.",
      "confractus.cap3": "The sheet in use: attributes, skills, health, and sanity.",
      "confractus.alt4": "Game master's table in Confractus, with the group's characters and the rolls.",
      "confractus.cap4": "The game master's table, with the group and the session's rolls.",
      "confractus.next": "Next project: Studio Mognon",

      "mognon.title": "Studio Mognon | Nicolas Frantz",
      "mognon.description": "Schedule and client records for a tattoo studio.",
      "mognon.back": "All projects",
      "mognon.eyebrow": "02 · CRM for a tattoo studio",
      "mognon.lede": "Schedule and client records for a tattoo studio, with pre-registration by link.",
      "mognon.p1": "The team books the session, sees the month, and can send the time to Google Calendar or open WhatsApp with the message already written.",
      "mognon.p2": "Each client has a record of their own, where the team logs the health form, the brief, and the history, and can also create a promo voucher.",
      "mognon.p3": "The client fills in the pre-registration through a link, answering the questions the studio set, including required fields.",
      "mognon.stack": "Built with",
      "mognon.alt1": "Studio Mognon sign-in screen, with the studio octopus.",
      "mognon.cap1": "This is where the team opens the schedule and the client list.",
      "mognon.alt2": "Studio Mognon monthly calendar, with sessions booked through the week.",
      "mognon.cap2": "The studio's month, with sessions already booked.",
      "mognon.alt3": "Studio Mognon client list, split by stage of the job.",
      "mognon.cap3": "CRM split by stage, from the first contact to the finished session, with drag and drop inspired by Trello.",
      "mognon.alt4": "A Studio Mognon client record, with the pre-registration filled in.",
      "mognon.cap4": "The client record, with the pre-registration they answer through the link.",
      "mognon.next": "Next project: Agenda Verus",

      "verus.title": "Agenda Verus | Nicolas Frantz",
      "verus.description": "Schedule and client list for a tattoo and piercing studio.",
      "verus.back": "All projects",
      "verus.eyebrow": "03 · Schedule for a tattoo studio",
      "verus.lede": "Session calendar, clients, and staff for a tattoo and piercing studio.",
      "verus.p1": "The system includes a session calendar, a client record with a health form, the team, services, and a report for the period.",
      "verus.p2": "On each session you can mark whether the deposit was paid. A notice stays on the calendar, on the phone and on the computer.",
      "verus.stack": "Built with",
      "verus.alt1": "Verus Tattoo Art sign-in screen.",
      "verus.cap1": "The studio's sign-in screen.",
      "verus.alt2": "Verus monthly calendar, with sessions and pending deposit notices.",
      "verus.cap2": "The month's calendar, with a notice for anyone who has not paid the deposit yet.",
      "verus.alt3": "Verus client list, with a button to message on WhatsApp.",
      "verus.cap3": "The client list, with a shortcut to message on WhatsApp.",
      "verus.next": "Next project: Expense sheet",

      "planilha.title": "Expense sheet | Nicolas Frantz",
      "planilha.description": "Monthly spending control, with a limit, installments, and savings.",
      "planilha.back": "All projects",
      "planilha.eyebrow": "04 · Finance sheet",
      "planilha.h1": "Expense sheet",
      "planilha.lede": "The month in one place: spending, installments, a limit, and savings.",
      "planilha.p1": "You can log an expense, repeat fixed costs, and follow installments that roll forward on their own, month after month. You can set a salary, a spending limit with a warning, and a savings goal that shows how much of it is already set aside.",
      "planilha.stack": "Built with",
      "planilha.alt1": "Month summary on the expense sheet, with salary, spending, and savings.",
      "planilha.cap1": "The month: salary, what has already gone out, what still fits in the limit, and the savings.",
      "planilha.alt2": "Expense form and the month's list, with search and filters.",
      "planilha.cap2": "Logging an expense and the month's list, with search, installment, and status.",
      "planilha.alt3": "Settings window, with salary, limit, and how the screen looks.",
      "planilha.cap3": "Salary, the month's limit, and how the screen looks, the way the person using it wants.",
      "planilha.next": "Back to the first: Confractus"
    }
  };

  function current() {
    return localStorage.getItem("portfolio-lang") === "en" ? "en" : "pt";
  }

  function apply(lang) {
    const text = copy[lang] || copy.pt;
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = text[el.getAttribute("data-i18n")];
      if (value != null) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = text[el.getAttribute("data-i18n-alt")];
      if (value != null) el.alt = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = text[el.getAttribute("data-i18n-aria")];
      if (value != null) el.setAttribute("aria-label", value);
    });
    const titleKey = document.body.dataset.title;
    const descriptionKey = document.body.dataset.description;
    if (titleKey && text[titleKey]) document.title = text[titleKey];
    const meta = document.querySelector('meta[name="description"]');
    if (meta && descriptionKey && text[descriptionKey]) meta.content = text[descriptionKey];
    const sw = document.querySelector(".lang-switch");
    if (sw) {
      sw.setAttribute("aria-checked", lang === "en" ? "true" : "false");
      sw.setAttribute("aria-label", text["lang.switch"]);
    }
    localStorage.setItem("portfolio-lang", lang);
  }

  apply(current());

  const sw = document.querySelector(".lang-switch");
  if (sw) {
    sw.addEventListener("click", () => {
      apply(document.documentElement.dataset.lang === "en" ? "pt" : "en");
    });
  }

  window.portfolioLang = current;
  window.portfolioCopy = (key) => (copy[current()] || copy.pt)[key] || "";
})();
