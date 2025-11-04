// Teams Data
const teamsData = [
  {
    id: 1,
    name: 'Clash Royale Elite',
    game: 'Clash Royale',
    gameColor: '#3B82F6',
    leader: 'EliteKing',
    leaderTag: 'EliteKing#7891',
    description: 'Wettbewerbsorientiertes Team mit fokus auf Turniere und Ladder-Erfolge. Wir trainieren täglich und unterstützen uns gegenseitig beim Erreichen höherer Trophen.',
    achievement: 'Top 1000 Global',
    members: 42,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 2,
    name: 'CoC Builders',
    game: 'Clash of Clans',
    gameColor: '#DC2626',
    leader: 'BuildMaster',
    leaderTag: 'BuildMaster#4521',
    description: 'Strategisch denkender Clan mit Fokus auf Kriegserfolg und fortgeschrittene Bauplatzierung. Für erfahrene Spieler, die Clan Wars ernst nehmen.',
    achievement: 'Crystal League II',
    members: 58,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 3,
    name: 'Brawl Team Stars',
    game: 'Brawl Stars',
    gameColor: '#F97316',
    leader: 'StarChaser',
    leaderTag: 'StarChaser#1234',
    description: 'Casual und kompetitiv! Wir spielen alle Modi und helfen neuen Spielern, ihre Lieblings-Brawler zu meistern.',
    achievement: 'Gold I',
    members: 35,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 4,
    name: 'E-Sports Champions',
    game: 'E-Sports',
    gameColor: '#FCD34D',
    leader: 'ProLeader',
    leaderTag: 'ProLeader#9876',
    description: 'Unser kompetitives E-Sports-Team: League of Legends, Valorant und mehr. Wir nehmen an Turnieren teil und suchen motivierte Spieler!',
    achievement: 'Regional Champion 2024',
    members: 28,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 5,
    name: 'Minecraft Creative',
    game: 'Minecraft',
    gameColor: '#10B981',
    leader: 'BuilderPro',
    leaderTag: 'BuilderPro#5555',
    description: 'Zusammen erschaffen wir epische Welten! Von Survival bis Creative - hier kann jeder bauen und spielen.',
    achievement: 'Creative Masters',
    members: 67,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 6,
    name: 'Fortnite Squad',
    game: 'Fortnite',
    gameColor: '#7C3AED',
    leader: 'VictorRoyale',
    leaderTag: 'VictorRoyale#2022',
    description: 'Skill-basiertes Team mit Fokus auf Arena, Turniere und neue Spieler. Trainingseinheiten wöchentlich!',
    achievement: 'Champion League',
    members: 44,
    discordLink: 'https://discord.gg/starsunited'
  }
];

// Create Starfield
function createStarfield() {
  const starfieldContainer = document.getElementById('starfield');
  if (!starfieldContainer) return;

  const starCount = 150;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 2 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = Math.random() * 2 + 2 + 's';
    starfieldContainer.appendChild(star);
  }
}

// Render Teams
function renderTeams(filter = 'all') {
  const teamsGrid = document.getElementById('teamsGrid');
  if (!teamsGrid) return;

  const filteredTeams = filter === 'all'
    ? teamsData
    : teamsData.filter(team => team.game === filter);

  teamsGrid.innerHTML = filteredTeams.map(team => `
    <div class="team-card" style="border-top-color: ${team.gameColor};">
      <div class="team-header">
        <div>
          <div class="team-name">${team.name}</div>
          <div class="team-game-badge" style="background-color: ${team.gameColor}40; color: ${team.gameColor};">
            ${team.game}
          </div>
        </div>
      </div>

      <p class="team-description">${team.description}</p>

      <div class="team-info">
        <div class="team-info-item">
          👥 <span><strong>${team.members}</strong> Mitglieder</span>
        </div>
        <div class="team-info-item">
          🏆 <span>${team.achievement}</span>
        </div>
        <div class="team-info-item">
          💬 <span>Kontakt: <strong style="color: #60A5FA;">${team.leaderTag}</strong></span>
        </div>
      </div>

      <div class="team-leader">
        <div class="leader-info">
          <h4>Teamleitung</h4>
          <div class="name">${team.leader}</div>
        </div>
        <a href="${team.discordLink}" target="_blank" rel="noopener noreferrer" class="team-join-btn" style="background-color: ${team.gameColor}20; color: ${team.gameColor}; border-color: ${team.gameColor}40;">
          Beitreten →
        </a>
      </div>
    </div>
  `).join('');
}

// Filter Teams
function setupTeamFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      renderTeams(filter);
    });
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
    });
  });
}

// Smooth scroll for navigation
function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  createStarfield();
  renderTeams();
  setupTeamFilters();
  setupMobileMenu();
  setupSmoothScroll();
});

// Scroll to top navbar styling
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
