
// function map(v, a, b, x, y) {
//     return (v == a) ? x : (v - a) * (y - x) / (b - a) + x;
// };

// var renderer;  // A three.js WebGL or Canvas renderer.
// var scene;     // The 3D scene that will be rendered, containing the model.
// var camera;    // The camera that takes the picture of the scene.

// var model; // The three.js object that represents the model.

// var rotateX = 0.8;   // rotation of model about the x-axis
// var rotateY = 0;  // rotation of model about the y-axis

// function createWorld() {
//     var light_1 = new THREE.DirectionalLight();
//     light_1.position.set(0,0,1);
//     scene.add(light_1);
    
//     // var lightArray = [];

//     // lightArray[0]  = new THREE.DirectionalLight();
//     // lightArray[0].position.set(0,0,1);
//     // scene.add( lightArray[0]);

//     // lightArray[1]  = new THREE.DirectionalLight();
//     // lightArray[1].position.set(0,0,2);
//     // scene.add( lightArray[1]);

//     // for (var i = 0; i < 5; i++) {
//     //   lightArray[i]  = new THREE.DirectionalLight();
//     //   lightArray[i].position.set(0,0,i*2);
//     //   scene.add( lightArray[i]);
//     // };

//     // for (var i = 0; i < 5; i++) {
//     //   lightArray[i]  = new THREE.DirectionalLight();
//     //   lightArray[i].position.set(0,i*2,0);
//     //   scene.add( lightArray[i]);
//     // };


//       // addLights();
// }

// function modelLoadedCallback(geometry, materials) {
//     // activate for flat shading
//     for (var i = 0; i < materials.length; i++) {
//         materials[i].shading = THREE.FlatShading;
//     };
//     var object = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
//     var xmin = Infinity;
//     var xmax = -Infinity;
//     var ymin = Infinity;
//     var ymax = -Infinity;
//     var zmin = Infinity;
//     var zmax = -Infinity;
//     for (var i = 0; i < geometry.vertices.length; i++) {
//         var v = geometry.vertices[i];
//         if (v.x < xmin)
//             xmin = v.x;
//         else if (v.x > xmax)
//             xmax = v.x;
//         if (v.y < ymin)
//             ymin = v.y;
//         else if (v.y > ymax)
//             ymax = v.y;
//         if (v.z < zmin)
//             zmin = v.z;
//         else if (v.z > zmax)
//             zmax = v.z;
//     }
    
//     var centerX = (xmin+xmax)/2;
//     var centerY = (ymin+ymax)/2; 
//     var centerZ = (zmin+zmax)/2;
//     var max = Math.max(centerX - xmin, xmax - centerX);
//     max = Math.max(max, Math.max(centerY - ymin, ymax - centerY) );
//     max = Math.max(max, Math.max(centerZ - zmin, zmax - centerZ) );
//     var scale = 10/max;
//     object.position.set( -centerX, -centerY, -centerZ );
//     console.log("Loading finished, scaling object by " + scale);
//     console.log("Center at ( " + centerX + ", " + centerY + ", " + centerZ + " )");
    
//     /* Create the wrapper, model, to scale and rotate the object. */
    
//     model = new THREE.Object3D();
//     model.add(object);
//     model.scale.set(scale,scale,scale);
//     rotateX = 0.8;
//     rotateY = 0;
//     scene.add(model);
//     model.rotation.x = 0.8;
//     render();

// }

// function installModel(file, bgColor) { 
//     if (model) {
//         scene.remove(model);
//     }
//     renderer.setClearColor(bgColor);
//     render();
//     var loader = new THREE.JSONLoader();
//     loader.load("3d/" + file, modelLoadedCallback);
// }



// /**
//  *  The render fucntion creates an image of the scene from the point of view
//  *  of the camera and displays it in the canvas.  This is called at the end of
//  *  init() to produce the initial view of the model, and it is called each time
//  *  the user presses an arrow key, return, or home.
//  */
// function render() {
//     renderer.render(scene, camera);
// }

// /**
//  *  An event listener for the keydown event.  It is installed by the init() function.
//  */

//  var customScale = 10;
// function doKey(evt) { 
//     var rotationChanged = true;
// 	switch (evt.keyCode) {
// 	    case 37: rotateY -= 0.01; break;        // left arrow
// 	    case 39: rotateY +=  0.01; break;       // right arrow
// 	    case 38: rotateX -= 0.01; break;        // up arrow
// 	    case 40: rotateX += 0.01; break;        // down arrow
// 	    case 13: rotateX = rotateY = 0; break;  // return
//                 case 36: rotateX = rotateY = 0; break;  // home
//                 case 107: customScale = customScale+.1; break;  // home
//                 case 187: customScale = customScale+.1; break;  // home
//                 case 189: customScale = customScale-.1; break;  // home
// 	    case 109: customScale = customScale-.1; break;  // home
// 	    default: rotationChanged = false;
// 	}
// 	if (model && rotationChanged) {
//        model.rotation.set(rotateX,rotateY,0);   
//        model.scale.set(customScale,customScale,customScale);
//        console.log(rotateY + ' ' + rotateX)
//        render();
// 	   evt.preventDefault();
// 	}
// }


// // IIIIIIIIIIIIIIII
// // IIIIIIIIIIIIIIII
// // IIIIIIIIIIIIIIII
// // IIIIIIIIIIIIIIII
// // IIIIIIIIIIIIIIII
// // IIIIIIIIIIIIIIII
// // IIIIIIIIIIIIIIII
// // IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// // LEAP CONTROLE IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII


// // var myPos = [
// //         x: 0,
// //         y: 0,
// //         z: 0,
// // ];

// // var controller = Leap.loop(function(frame){
// //     if(frame.hands.length > 0)
// //     {
// //         var hand = frame.hands[0];
// //         var position = hand.palmPosition;
// //         var velocity = hand.palmVelocity;
// //         var direction = hand.direction;

// //         // hand.pinchStrength.toPrecision(2);
// //         console.log(hand.pinchStrength.toPrecision(2));

// //         // only if hand is on a sertain positino, ping gesture should work.


// //         // customScale = map(hand.pinchStrength.toPrecision(2), 0, 1, 15, 10);
// //         // model.scale.set(customScale,customScale,customScale);

// //         // hand height
// //         // customScale = map(position[1], 0, 300, 1, 20);

// //         // position
// //          // hand left & right
// //         // customScale = map(position[1], -300, 300, 1, 20);
// //         // model.position.set(position[0], position[1], position[2]);
// //         // console.log(model.position.x);
// //         // model.position.x = position[0];

// //         // rotation
// //         // model.rotation.set(5, map(position[0], -300, 300, 1, 4), 0);   
// //         // model.rotation.set(1, 0, 0);   


// //        // rendere changes
// //        render();

// //         // if (position[1] < 100) {
// //         //     $('body').trigger('custom', ['zoomin', 0]);
// //         // } if (position[1] > 150) {
// //         //     $('body').trigger('custom', ['zoomout', 0]);
// //         // } else{
// //         //     // say('nothing');
// //         // };
// //         // $('#leap_info').css('width', position[1] + 'px');

// //     }
// // });

// /**
//  *  This function is called by the onload event so it will run after the
//  *  page has loaded.  It creates the renderer, canvas, and scene objects,
//  *  calls createWorld() to add objects to the scene, and renders the
//  *  initial view of the scene.  If an error occurs, it is reported.
//  */
// function init() {
//     try {
//         var theCanvas = document.getElementById("cnvs");
//         if (!theCanvas || !theCanvas.getContext) {
//             document.getElementById("message").innerHTML = 
//                              "Sorry, your browser doesn't support canvas graphics.";
//             return;
//         }
//         try {  // try to create a WebGLRenderer
//             if (window.WebGLRenderingContext) {
//                 renderer = new THREE.WebGLRenderer( { 
//                     canvas: theCanvas, 
//                     antialias: true,
//                     alpha: true,
//                 } );
//                renderer.setClearColor( 0xDDDDDD, 0 );
//             } 
//         }
//         catch (e) {
//         }
//         if (!renderer) { // If the WebGLRenderer couldn't be created, try a CanvasRenderer.
//             renderer = new THREE.CanvasRenderer( { canvas: theCanvas } );
//             renderer.setSize(theCanvas.width,theCanvas.height);
//             document.getElementById("message").innerHTML =
//                           "WebGL not available; falling back to CanvasRenderer.";
//         }
//         scene = new THREE.Scene();
//         camera = new THREE.PerspectiveCamera(50, theCanvas.width/theCanvas.height, 0.1, 100);
//         camera.position.z = 30;
//         createWorld();
//         installModel("blender_2.js");
//         render();
//         document.addEventListener("keydown", doKey, false);
//         // document.getElementById("r1").checked = true;
//      }
//      catch (e) {
//         document.getElementById("message").innerHTML = "Sorry, an error occurred: " + e;
//      }
// }