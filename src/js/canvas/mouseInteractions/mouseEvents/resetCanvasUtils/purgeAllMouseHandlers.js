function purgeCanvasMouseEvents(canvas) {
  if (canvas.__eventListeners) {
    canvas.__eventListeners['mouse:down'] = [];
    canvas.__eventListeners['mouse:over'] = [];
    canvas.__eventListeners['mouse:out'] = [];
    canvas.__eventListeners['mouse:move'] = [];
    canvas.__eventListeners['mouse:up'] = [];
    canvas.__eventListeners['mouse:wheel'] = [];
    canvas.__eventListeners['object:moving'] = [];
    if (canvas.__eventListeners['object:scaling'].length > 1) {
      canvas.__eventListeners['object:scaling'].pop();
    }
  }
}

// consider using this to reassign events

/*
canvas.on('object:moving', moveHandler);
canvas.on('object:modified', modifiedHandler);
canvas.on('custom:event', customEvtHandler);

//or you register with key/value pairs
canvas.on({
    'object:moving' : moveHandler,
    'object:modified' : modifiedHandler,
    'custom:event' : customEvtHandler
});
*/

export { purgeCanvasMouseEvents as default };
