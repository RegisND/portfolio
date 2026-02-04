VanillaTilt.init(document.querySelector(".card"), {
    max: 25,
    speed: 300,
    glare: true,
    "max-glare": 1,
    reverse: true,
});

/* =========================================
   SISTEMA DE TRADUÇÃO (PT <-> EN)
   ========================================= */
const translations = {
    "pt": {
        "nav_home": "Início",
        "nav_about": "Sobre",
        "nav_services": "Serviços",
        "nav_portfolio": "Projetos",
        "nav_contact": "Contato",
        "hero_title": "Olá, eu sou <span>Reginaldo Dias</span>",
        "hero_desc": "Transformo problemas complexos em soluções automatizadas e interfaces intuitivas. Especialista em Python, Automação e Desenvolvimento Web.",
        "btn_cv": "Currículo",
        "btn_talk": "Fale Comigo",
        "about_heading": "Sobre <span>Mim</span>",
        "about_sub": "Desenvolvedor & Automatizador",
        "about_text": "Minha jornada começou na administração pública, onde percebi que a tecnologia poderia revolucionar a produtividade. Hoje, combino minha lógica de negócios com Python, Java e Web Development para criar softwares que economizam tempo e geram valor.",
        "btn_projects": "Ver Projetos",
        "services_heading": "Meus <span>Serviços</span>",
        "serv_1_title": "Desenvolvimento Web",
        "serv_1_desc": "Sites responsivos, landing pages e aplicações web usando HTML, CSS, JS e frameworks modernos.",
        "serv_2_title": "Automação de Processos",
        "serv_2_desc": "Scripts Python para web scraping, leitura de PDFs e automação de tarefas repetitivas.",
        "serv_3_title": "Integração de Sistemas",
        "serv_3_desc": "Conexão entre APIs, Bancos de Dados (SQL) e planilhas para unificar informações.",
        "portfolio_heading": "Meus <span>Projetos</span>",
        "proj_1_desc": "Automação Python com Selenium que monitora carteira de ativos (FIIs/Ações) e gera relatórios em Excel.",
        "proj_2_desc": "App Fullstack (C# + JS) para gestão de treinos gamificados.",
        "proj_3_desc": "Site responsivo com Glassmorphism e animações CSS.",
        "proj_4_desc": "Script para renomear e organizar milhares de arquivos automaticamente.",
        "proj_5_desc": "Sistema em VBA para correção e validação de base de dados.",
        "proj_6_desc": "Consumo de API (TMDB) para listar filmes e séries populares.",
        "contact_heading": "Fale <span>Comigo!</span>",
        "btn_send": "Enviar Mensagem",
        // Placeholders
        "ph_name": "Nome Completo",
        "ph_email": "Email",
        "ph_phone": "Telefone",
        "ph_subject": "Assunto",
        "ph_msg": "Sua Mensagem"
    },
    "en": {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_services": "Services",
        "nav_portfolio": "Projects",
        "nav_contact": "Contact",
        "hero_title": "Hi, I'm <span>Reginaldo Dias</span>",
        "hero_desc": "I turn complex problems into automated solutions and intuitive interfaces. Specialist in Python Automation and Web Development.",
        "btn_cv": "Resume",
        "btn_talk": "Let's Talk",
        "about_heading": "About <span>Me</span>",
        "about_sub": "Developer & Automator",
        "about_text": "My journey started in public administration, realizing technology could revolutionize productivity. Today, I combine business logic with Python, Java, and Web Development to create software that saves time and creates value.",
        "btn_projects": "See Projects",
        "services_heading": "My <span>Services</span>",
        "serv_1_title": "Web Development",
        "serv_1_desc": "Responsive websites, landing pages, and web apps using HTML, CSS, JS, and modern frameworks.",
        "serv_2_title": "Process Automation",
        "serv_2_desc": "Python scripts for web scraping, PDF reading, and automating repetitive tasks.",
        "serv_3_title": "System Integration",
        "serv_3_desc": "Connecting APIs, Databases (SQL), and spreadsheets to unify information.",
        "portfolio_heading": "My <span>Projects</span>",
        "proj_1_desc": "Python automation using Selenium to monitor asset portfolios (REITs/Stocks) and generate Excel reports.",
        "proj_2_desc": "Fullstack App (C# + JS) for gamified training management.",
        "proj_3_desc": "Responsive website featuring Glassmorphism and CSS animations.",
        "proj_4_desc": "Script to automatically rename and organize thousands of files.",
        "proj_5_desc": "VBA system for database correction and validation.",
        "proj_6_desc": "Consuming TMDB API to list popular movies and series.",
        "contact_heading": "Contact <span>Me!</span>",
        "btn_send": "Send Message",
        // Placeholders
        "ph_name": "Full Name",
        "ph_email": "Email Address",
        "ph_phone": "Mobile Number",
        "ph_subject": "Email Subject",
        "ph_msg": "Your Message"
    }
};

const langBtn = document.getElementById('lang-switch');
let currentLang = 'pt'; // Idioma padrão

langBtn.addEventListener('click', () => {
    // 1. Alterna o idioma
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    
    // 2. Atualiza o texto do botão
    langBtn.textContent = currentLang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT';

    // 3. Busca todos os elementos que precisam de tradução
    const elements = document.querySelectorAll('[data-lang]');
    const placeholders = document.querySelectorAll('[data-lang-ph]');

    // 4. Atualiza textos normais (innerHTML para manter tags como <span>)
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // 5. Atualiza Placeholders de inputs
    placeholders.forEach(el => {
        const key = el.getAttribute('data-lang-ph');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
});