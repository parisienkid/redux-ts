const clearNav = () => {
    document.querySelectorAll('.link').forEach(item => {
        item.classList.remove('active');
    });
};

export default clearNav;