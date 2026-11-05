document.addEventListener('DOMContentLoaded', () => {
    const evidenceDialog = document.querySelector('.experience-evidence-dialog');
    const evidenceDialogImage = document.querySelector('.experience-evidence-dialog-image');
    const evidenceDialogCaption = document.querySelector('.experience-evidence-dialog-caption');
    const evidenceCloseButton = document.querySelector('.experience-evidence-close');

    if (evidenceDialog && evidenceDialogImage && evidenceDialogCaption && evidenceCloseButton) {
        document.querySelectorAll('.experience-evidence-zoom').forEach((button) => {
            button.addEventListener('click', () => {
                const image = button.querySelector('img');
                const caption = button.closest('figure')?.querySelector('figcaption p');

                if (!image || !caption) {
                    throw new Error('Bukti gambar atau caption tidak ditemukan.');
                }

                evidenceDialogImage.src = image.src;
                evidenceDialogImage.alt = image.alt;
                evidenceDialogCaption.textContent = caption.textContent;
                evidenceDialog.showModal();
            });
        });

        evidenceCloseButton.addEventListener('click', () => evidenceDialog.close());
        evidenceDialog.addEventListener('click', (event) => {
            if (event.target === evidenceDialog) {
                evidenceDialog.close();
            }
        });
    }

    const detailCards = document.querySelectorAll('.detail-card');

    detailCards.forEach((card) => {
        const button = card.querySelector('[data-toggle]');
        const panel = card.querySelector('.detail-panel');

        if (!button || !panel) return;

        const setLabel = (isOpen) => {
            button.setAttribute('aria-expanded', String(isOpen));
            button.textContent = isOpen ? button.dataset.altLabel : button.dataset.label;
        };

        button.addEventListener('click', () => {
            const shouldOpen = !card.classList.contains('is-open');

            detailCards.forEach((item) => {
                item.classList.remove('is-open');
                const itemButton = item.querySelector('[data-toggle]');
                if (itemButton) {
                    itemButton.setAttribute('aria-expanded', 'false');
                    itemButton.textContent = itemButton.dataset.label;
                }
            });

            if (shouldOpen) {
                card.classList.add('is-open');
                setLabel(true);
            }
        });
    });
});
