import * as THREE from 'three';

class RoundedBoxGeometry extends THREE.BufferGeometry {
  constructor(width = 1, height = 1, depth = 1, segments = 1, radius = 0.1) {
    super();
    
    // Create a more sophisticated rounded box
    const shape = new THREE.Shape();
    const x = width / 2 - radius;
    const y = height / 2 - radius;
    
    shape.moveTo(-x, -y + radius);
    shape.lineTo(-x, y - radius);
    shape.quadraticCurveTo(-x, y, -x + radius, y);
    shape.lineTo(x - radius, y);
    shape.quadraticCurveTo(x, y, x, y - radius);
    shape.lineTo(x, -y + radius);
    shape.quadraticCurveTo(x, -y, x - radius, -y);
    shape.lineTo(-x + radius, -y);
    shape.quadraticCurveTo(-x, -y, -x, -y + radius);
    
    const extrudeSettings = {
      depth: depth,
      bevelEnabled: true,
      bevelSegments: segments,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius
    };
    
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    
    this.copy(geometry);
  }
}

// Export the class for direct use
export { RoundedBoxGeometry };