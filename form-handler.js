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
                phone: "'" + fd.get('phone'),
                message: fd.get('message') || '',
                page: window.location.pathname + window.location.search,
                timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, '')
            };

            try {
                const params = new URLSearchParams(data).toString();
                fetch('https://script.google.com/a/macros/crepdigital.com/s/AKfycbzt8BfmpHmA9tcWd_NzPoMfrsjtHFSdcLKkQDcQym1SKQ2NBADddeKVhEkvt9q6bEKTDQ/exec?' + params, {
                    mode: 'no-cors'
                });
                btn.textContent = '\u2713 Gönderildi!';
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
