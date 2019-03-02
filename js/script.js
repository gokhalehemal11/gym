var sceneEl = document.querySelector('a-scene');

 if (sceneEl != null) {
          var gltf_El = sceneEl.querySelector('a-gltf-model');
          gltf_El.addEventListener('click', function(){

if (this.getAttribute('id') === 'trainer_master'){

this.setAttribute('scale', '1500 1500 1500');

}

});
          
}

var cursorEntityEl = sceneEl.querySelector('a-cursor');

var clickables = document.querySelectorAll('.clickable');

