const showOnScrollDirective = {
  mounted(el) {
    if (el.getBoundingClientRect().y < (window.pageYOffset + window.innerHeight)) {
      el.classList.add('show-on-scroll');
      return;
    }

    function showMe(elem) {
      if (elem.classList.contains('show-on-scroll')) return;
      if (elem.getBoundingClientRect().y < (window.pageYOffset * 0.7)) {
        elem.classList.add('show-on-scroll');
      }
    }

    document.addEventListener('wheel', () => showMe(el));
    document.addEventListener('scroll', () => showMe(el));
  }
}

export default showOnScrollDirective
