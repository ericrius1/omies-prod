angular.module('ThreeServices', [])

.service('ThreeSphere', [function() {
  var container = document.getElementById('three-scene')
  var scene, camera, renderer
  function init(params) {
    camera = new THREE.PerspectiveCamera(75, container.clientWidth, container.clientHeight)
    scene = new THREE.Scene() ;
    renderer = new THREE.WebGLRenderer({canvas: container});
    renderer.setClearColor(0xff00ff);
    animate()
  }

  function animate() {
    requestAnimationFrame(animate)
    render()
  }

  function render() {
    renderer.render(scene, camera);
  }

  var three = {
    init: init,
    animate: animate,
    render: render
  }

  return three;

}])