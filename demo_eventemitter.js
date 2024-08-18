(async () => {
    const { EventEmitter } = await import('events');
    const eventEmitter = new EventEmitter();
  
    const myEventHandler = () => {
      console.log('I hear a scream!');
    };
  
    eventEmitter.on('scream', myEventHandler);
    eventEmitter.emit('scream');
  })();
  