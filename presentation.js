(() => {
  const tools = document.querySelector('.presentation-tools');
  const dialog = document.getElementById('help-dialog');
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  let idleTimer;
  const revealTools = () => {
    document.body.classList.remove('tools-hidden');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (!dialog.open && !tools.contains(document.activeElement)) document.body.classList.add('tools-hidden');
    }, 3400);
  };
  const counter = () => {
    const number = Reveal.getIndices().h + 1;
    const total = Reveal.getTotalSlides();
    document.getElementById('counter').textContent = `${number} / ${total}`;
    previous.disabled = number === 1;
    next.disabled = number === total;
  };
  const fullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      Reveal.toggleOverview(false);
    }
  };
  document.getElementById('fullscreen').addEventListener('click', fullscreen);
  previous.addEventListener('click', () => Reveal.prev());
  next.addEventListener('click', () => Reveal.next());
  document.getElementById('overview').addEventListener('click', () => Reveal.toggleOverview());
  document.getElementById('help').addEventListener('click', () => dialog.showModal());
  document.getElementById('close-help').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', revealTools);
  document.addEventListener('pointermove', revealTools, {passive:true});
  document.addEventListener('keydown', event => {
    if (['ArrowLeft','ArrowRight',' ','Home','End','Escape','f','F','b','B'].includes(event.key) && tools.contains(document.activeElement)) document.activeElement.blur();
    revealTools();
  });
  document.addEventListener('touchstart', revealTools, {passive:true});
  document.addEventListener('fullscreenchange', () => {
    document.getElementById('fullscreen').textContent = document.fullscreenElement ? 'Vollbild verlassen' : 'Vollbild';
    Reveal.layout();
  });
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  Reveal.initialize({
    width:1280,height:720,margin:.015,minScale:.1,maxScale:2,
    controls:false,progress:true,slideNumber:false,center:false,
    hash:true,hashOneBasedIndex:true,history:false,
    navigationMode:'linear',scrollActivation:null,
    keyboard:true,keyboardCondition:() => !dialog.open,
    touch:true,overview:true,loop:false,autoSlide:0,
    transition:motion?'none':'fade',transitionSpeed:'fast',backgroundTransition:'fade',
    hideInactiveCursor:true,hideCursorTime:3400,
    pdfSeparateFragments:false,plugins:[RevealNotes]
  }).then(() => {
    Reveal.addKeyBinding({keyCode:70,key:'F',description:'Vollbild ein-/ausschalten'},fullscreen);
    Reveal.on('slidechanged',counter);
    counter();revealTools();
    // Resolve all slide images before the presenter reaches them.
    Promise.allSettled([...document.images].map(img => img.decode?.()));
  });
})();
