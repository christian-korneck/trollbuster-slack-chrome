const observer = new MutationObserver(() => {
    document.querySelectorAll('[class*="hidden_message"]').forEach(el => {
        const listItem = el.closest('.c-virtual_list__item');
        if (listItem && listItem.style.display !== 'none') {
            listItem.style.display = 'none';
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
