export const isScrolledToBottom = (): boolean => {
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.documentElement.offsetHeight;
    return Math.ceil(scrollTop + innerHeight) >= offsetHeight;
  };
  