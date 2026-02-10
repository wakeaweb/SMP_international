document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#contact-form, #sidebar-contact-form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Gönderiliyor...';
            btn.disabled = true;

            const fd = new FormData(form);
            const data = {
                name: fd.get('name'),
                email: fd.get('email'),
                phone: fd.get('phone'),
                message: fd.get('message') || '',
                page: window.location.pathname,
                timestamp: new Date().toISOString()
            };

            try {
                await fetch('GOOGLE_APPS_SCRIPT_URL_PLACEHOLDER', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                btn.textContent = '\u2713 G\u00f6nderildi!';
                form.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 3000);
            } catch (err) {
                btn.textContent = 'Hata! Tekrar Deneyin';
                btn.disabled = false;
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 3000);
            }
        });
    });
});
