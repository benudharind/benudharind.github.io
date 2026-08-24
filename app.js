/**
 * Benudhar Behera - Executive Portfolio Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  initCounters();
  initTimelineFilter();
  initSkillSearch();
  initResumeModal();
  initEmailCopy();
  initMobileMenu();
  initScrollSpy();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('ben_portfolio_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('ben_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
    });
  }
}

/* ==========================================================================
   2. Dynamic Typewriter Animation
   ========================================================================== */
function initTypewriter() {
  const typewriterElem = document.getElementById('typewriter');
  if (!typewriterElem) return;

  const roles = [
    'Senior Data & AI Engineering Leader',
    'Technical Advisory & Architecture Consultant',
    'Executive & 1:1 Career Leadership Coach',
    'Multi-Cloud Lakehouse Architect (AWS & Azure)',
    'Enterprise Agentic GenAI & MCP Specialist',
    'Ex-Microsoft & Ex-Amazon Engineering Manager',
    'FinOps & Mission-Critical 24/7 SRE Leader'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 70;
  const deletingSpeed = 35;
  const pauseEnd = 2000;

  function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, pauseEnd);
        return;
      }
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. Animated Metric Counters
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.metric-number');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1500;
          const increment = target / (duration / 20);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.ceil(current);
              setTimeout(updateCounter, 20);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

/* ==========================================================================
   4. Experience Timeline Filtering
   ========================================================================== */
function initTimelineFilter() {
  const filterBtns = document.querySelectorAll('.timeline-filters .filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      timelineItems.forEach(item => {
        if (filterValue === 'all') {
          item.classList.remove('hidden');
        } else {
          const categories = item.getAttribute('data-category') || '';
          if (categories.includes(filterValue)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive Skill Search & Keyword Highlighting
   ========================================================================== */
function initSkillSearch() {
  const searchInput = document.getElementById('skillSearchInput');
  const skillBadges = document.querySelectorAll('.skill-badge');
  const skillCards = document.querySelectorAll('.skill-category-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();

    if (!term) {
      skillBadges.forEach(b => {
        b.style.opacity = '1';
        b.style.transform = 'none';
      });
      skillCards.forEach(c => c.style.opacity = '1');
      return;
    }

    skillCards.forEach(card => {
      let cardHasMatch = false;
      const badgesInCard = card.querySelectorAll('.skill-badge');

      badgesInCard.forEach(badge => {
        const text = badge.textContent.toLowerCase();
        if (text.includes(term)) {
          badge.style.opacity = '1';
          badge.style.borderColor = 'var(--accent-cyan)';
          badge.style.transform = 'scale(1.05)';
          cardHasMatch = true;
        } else {
          badge.style.opacity = '0.35';
          badge.style.transform = 'none';
        }
      });

      card.style.opacity = cardHasMatch ? '1' : '0.4';
    });
  });
}

/* ==========================================================================
   6. Executive Resume Modal & Print/Export Handlers
   ========================================================================== */
function initResumeModal() {
  const modalOverlay = document.getElementById('resumeModalOverlay');
  const openButtons = [
    document.getElementById('openResumeBtn'),
    document.getElementById('viewResumeHeroBtn'),
    document.getElementById('modalTriggerBtn')
  ].filter(Boolean);

  const closeButton = document.getElementById('closeResumeModal');
  const printButton = document.getElementById('printResumeBtn');
  const copyMarkdownBtn = document.getElementById('copyResumeMarkdownBtn');

  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  openButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Print or Save as PDF trigger
  if (printButton) {
    printButton.addEventListener('click', () => {
      window.print();
    });
  }

  // Copy Markdown format of resume
  if (copyMarkdownBtn) {
    copyMarkdownBtn.addEventListener('click', () => {
      const markdownResume = `# Benudhar Behera
**Senior Data & AI Engineering Leader | Multi-Cloud Architecture | Ex-Microsoft, Ex-Amazon**  
Bengaluru, India | ben_india@outlook.com | https://linkedin.com/in/-benu/ | https://github.com/benudharind

## Professional Summary
Strategic Data & AI Engineering Leader with 15+ years of experience directing enterprise-scale multi-cloud transformations across Semiconductor Manufacturing, FinTech, Insurance, E-Commerce, and Aviation. Proven track record of scaling global engineering teams of 25+ professionals, architecting high-throughput Lakehouse platforms on AWS and Azure, and delivering production-grade Generative AI and multi-agent systems.

## Professional Experience
- **GlobalFoundries** | Data Engineering Manager – Data & AI (2025 – Present | Bangalore, India)
- **Microsoft** | Data Engineering Lead & Acting Engineering Manager (2021 – 2025 | Hyderabad, India)
- **Amazon** | Senior Data Engineer (2020 – 2021 | Bengaluru, India)
- **Altimetrik** | Senior Data Engineer / Technical Lead (2018 – 2020 | Bengaluru, India)
- **PwC** | Senior Data Engineer (2016 – 2018 | Mumbai, India)
- **Tata Consultancy Services (TCS)** | Data Engineer (2012 – 2016 | Mumbai, India)

## Education & Certifications
- **B.Tech:** Instrumentation and Control, Siksha 'O' Anusandhan University (SOA) (2008 – 2012)
- **Certifications:** AWS Certified Solutions Architect | Microsoft Data Security | Six Sigma Green Belt
- **Honors:** Microsoft Garage Contributor | PwC Excellence Award | TCS Spot Award
`;
      navigator.clipboard.writeText(markdownResume).then(() => {
        showToast('Resume Markdown copied to clipboard!', 'success');
      }).catch(() => {
        showToast('Failed to copy. Please copy manually.', 'error');
      });
    });
  }
}

/* ==========================================================================
   7. Email Copy & Toast Notification System
   ========================================================================== */
function initEmailCopy() {
  const copyBtn = document.getElementById('quickCopyEmail');
  if (!copyBtn) return;

  const email = 'ben_india@outlook.com';

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied to clipboard: ${email}`, 'success');
      const copyTextSpan = copyBtn.querySelector('.copy-text');
      if (copyTextSpan) {
        const originalText = copyTextSpan.textContent;
        copyTextSpan.textContent = '✓ Copied!';
        setTimeout(() => {
          copyTextSpan.textContent = originalText;
        }, 2000);
      }
    }).catch(() => {
      showToast('Could not copy email automatically.', 'error');
    });
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-circle-exclamation';
  if (type === 'info') icon = 'fa-circle-info';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

/* ==========================================================================
   8. Mobile Menu Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  });
}

/* ==========================================================================
   9. ScrollSpy for Active Navigation Links
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
