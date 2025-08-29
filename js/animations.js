document.addEventListener('DOMContentLoaded', function() {
    // Анимация пунктов данных в герое
    animateDataPoints();
    
    // Анимация счетчиков статистики
    animateCounters();
    
    // Обработка мобильного меню
    setupMobileMenu();
    
    // Обработка формы обратной связи
    setupContactForm();
    
    // Анимация появления элементов при скролле
    setupScrollAnimations();
    
    // Анимация карты
    animateMap();
});

// Анимация точек данных в герое
function animateDataPoints() {
    const dataPoints = document.querySelectorAll('.data-point');
    const networkLines = document.querySelectorAll('.network-line');
    
    if (dataPoints.length && networkLines.length) {
        // Позиционируем точки данных
        document.getElementById('dataPoint1').style.top = '30%';
        document.getElementById('dataPoint1').style.left = '20%';
        
        document.getElementById('dataPoint2').style.top = '60%';
        document.getElementById('dataPoint2').style.left = '50%';
        
        document.getElementById('dataPoint3').style.top = '20%';
        document.getElementById('dataPoint3').style.left = '70%';
        
        // Позиционируем линии соединения
        document.getElementById('line1').style.top = '30%';
        document.getElementById('line1').style.left = '20%';
        document.getElementById('line1').style.width = '30%';
        document.getElementById('line1').style.transform = 'rotate(30deg)';
        
        document.getElementById('line2').style.top = '60%';
        document.getElementById('line2').style.left = '50%';
        document.getElementById('line2').style.width = '20%';
        document.getElementById('line2').style.transform = 'rotate(-45deg)';
        
        document.getElementById('line3').style.top = '20%';
        document.getElementById('line3').style.left = '70%';
        document.getElementById('line3').style.width = '25%';
        document.getElementById('line3').style.transform = 'rotate(15deg)';
        
        // Запускаем анимацию пульсации для точек
        dataPoints.forEach((point, index) => {
            point.style.animationDelay = `${index * 0.3}s`;
        });
    }
}

// Анимация счетчиков
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Чем меньше значение, тем быстрее анимация
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
            counter.innerText = Math.min(count + increment, target);
            setTimeout(() => animateCounters(), 1);
        }
    });
}

// Настройка мобильного меню
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const nav = document.querySelector('.nav');
            nav.classList.toggle('active');
            
            // Анимация иконки гамбургера
            const spans = menuBtn.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// Настройка формы обратной связи
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Простая валидация
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Здесь должен быть код отправки формы
                alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все поля формы.');
            }
        });
    }
}

// Анимация элементов при скролле
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .research-card, .publication-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
}

// Анимация карты
function animateMap() {
    const map = document.getElementById('map');
    if (map) {
        // Имитация загрузки карты
        setTimeout(() => {
            map.innerHTML = '';
            map.style.backgroundColor = '#a4d4ff';
            map.style.display = 'flex';
            map.style.alignItems = 'center';
            map.style.justifyContent = 'center';
            map.style.position = 'relative';
            
            const marker = document.createElement('div');
            marker.style.position = 'absolute';
            marker.style.width = '24px';
            marker.style.height = '24px';
            marker.style.backgroundColor = '#e74c3c';
            marker.style.borderRadius = '50% 50% 50% 0';
            marker.style.transform = 'rotate(-45deg)';
            marker.style.top = '50%';
            marker.style.left = '50%';
            marker.style.marginLeft = '-12px';
            marker.style.marginTop = '-24px';
            marker.style.animation = 'bounce 1.5s infinite';
            
            const pulse = document.createElement('div');
            pulse.style.position = 'absolute';
            pulse.style.width = '40px';
            pulse.style.height = '40px';
            pulse.style.backgroundColor = 'rgba(231, 76, 60, 0.3)';
            pulse.style.borderRadius = '50%';
            pulse.style.top = '50%';
            pulse.style.left = '50%';
            pulse.style.marginLeft = '-20px';
            pulse.style.marginTop = '-20px';
            pulse.style.animation = 'pulse 2s infinite';
            
            map.appendChild(marker);
            map.appendChild(pulse);
            
            const address = document.createElement('div');
            address.style.position = 'absolute';
            address.style.bottom = '20px';
            address.style.left = '20px';
            address.style.backgroundColor = 'white';
            address.style.padding = '10px';
            address.style.borderRadius = '4px';
            address.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
            address.textContent = 'ул. Академическая, д. 15';
            
            map.appendChild(address);
        }, 2000);
    }
}

// Дополнительные анимации для кнопок
document.querySelectorAll('.btn-primary, .nav-link, .research-link').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Анимация для карточек при наведении
document.querySelectorAll('.feature-card, .research-card, .publication-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
