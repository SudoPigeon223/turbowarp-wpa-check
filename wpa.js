class DisplayCheck {
  getInfo() {
    return {
      id: 'WebappCheck',
      name: 'Check if app installed',
      blocks: [
        {
          opcode: 'isAddedToHomeScreen',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Added to home screen?'
        }
      ]
    };
  // New method to check if added to home screen
  isAddedToHomeScreen() {
    // Check if running in standalone mode as a PWA
    return (window.matchMedia('(display-mode: standalone)').matches);
  }
}

Scratch.extensions.register(new DisplayCheck());
