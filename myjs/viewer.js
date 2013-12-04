$(function() {
	var width  = 700;
	var height = 700;

    // -Scene
    var scene = new THREE.Scene();

    // --Mesh
	var parent = new THREE.Object3D();
    var joint = new THREE.Object3D();
    var joint1 = new THREE.Object3D();
    
	var material = new THREE.MeshLambertMaterial({color:0x660000});
    var pmaterial = new THREE.MeshLambertMaterial({color:0x0096d6, side:THREE.DoubleSide});

    var geometry = new THREE.CubeGeometry(0.05, 0.05, 0.1);
	var cubeMesh = new THREE.Mesh( geometry, material);
    cubeMesh.castShadow = true;

    var geometry1 = new THREE.CubeGeometry(0.05, 0.05, 0.1);
	var cubeMesh1 = new THREE.Mesh( geometry1, material);
    cubeMesh1.castShadow = true;

    var pgeometry = new THREE.PlaneGeometry(10, 10);
    var plane = new THREE.Mesh( pgeometry, pmaterial);
    plane.receiveShadow = true;
    
    // --- position
    plane.position.set(0, 0, 0);
    //plane.rotation.x = Math.PI/2;
    
    parent.position.set(0, 0, 0.3);
    joint.position.set(0, 0, 0);//親から見た位置を指定する
    cubeMesh.position.set(0, 0, -0.05);
    joint1.position.set(0, 0, -0.05);
    cubeMesh1.position.set(0, 0, -0.05);

    // ---parent-child
    scene.add(plane);
	scene.add(parent);
    parent.add(joint);
    joint.add(cubeMesh);
    cubeMesh.add(joint1);
    joint1.add(cubeMesh1);

    // --Light
	var directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.castShadow = true;
	directionalLight.position.set(0.5, 0.5, 1);
	scene.add(directionalLight);
    var ambient = new THREE.AmbientLight(0x550000);
    scene.add(ambient);
    
    // -Camera
    var camera = new THREE.PerspectiveCamera( 80, width/height, 0.001, 40);
    camera.up.set(0, 0, 1);
	camera.position.set(0.5, 0.5, 0.5);
    camera.lookAt(parent.position);

    // helper
    var axis = new THREE.AxisHelper(1);
    axis.position.set(0, 0, 0);
    scene.add(axis);

    // Renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( width, height );
    renderer.setClearColor(0xffffff, 1);
    renderer.shadowMapEnabled = true;
    $('#viewArea').append(renderer.domElement);
	renderer.render( scene, camera );

    // Camera control
    //これを追加するだけでマウスによるインタラクティブな操作が実現する
     //var controls = new THREE.OrbitControls(camera, renderer.domElement);
    var controls = new THREE.TrackballControls(camera, renderer.domElement);

	function render(){
        requestAnimationFrame(render);
        joint.rotation.x = jointpos;
        joint1.rotation.x = jointpos;
	    renderer.render( scene, camera );
        controls.update();
	};
	render();
});
