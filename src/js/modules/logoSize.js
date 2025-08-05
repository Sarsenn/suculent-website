    function getLogoSize(scroled) {
  const isMobile = window.innerWidth <= 768;

  if(scroled) {
    return isMobile ? {width: "70px", height: '70px'}: {width: '120px', height: '120px'}
  }else {
    return isMobile ? {width: "70px", height: '70px'}: {width: '150px', height: '150px'}
  }
}

export {getLogoSize};