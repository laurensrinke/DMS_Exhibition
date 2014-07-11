// function init(){
//     scene = new THREE.scene;
//     var object1 = new PinaCollada('model_1', 1);
//     scene.add(object1); 
// }

// function PinaCollada(modelname, scale) {
//     var loader = new THREE.ColladaLoader();
//     var localObject;
//     loader.options.convertUpAxis = true;
//     loader.load( '../models/'+modelname+'.dae', function colladaReady( collada ) {
//         localObject = collada.scene;
//         localObject.scale.x = localObject.scale.y = localObject.scale.z = scale;
//         localObject.updateMatrix();
//     } );
//     return localObject;
// }