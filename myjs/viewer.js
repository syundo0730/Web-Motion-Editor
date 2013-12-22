$(function() {
	var width  = 700;
	var height = 700;

    // -Scene
    var scene = new THREE.Scene();

    // --Mesh
    var material = new THREE.MeshLambertMaterial( {color:0x660000});
    var pmaterial = new THREE.MeshLambertMaterial({color:0x0096d6, side:THREE.DoubleSide});

	var parent = new THREE.Object3D();

    var pgeometry = new THREE.PlaneGeometry(10, 10);
    var plane = new THREE.Mesh( pgeometry, pmaterial);
    plane.receiveShadow = true;
    
    var i;

    var armMesh = [],
    armpos = [ [0, 0, -0.045], [0, 0, -0.045], [0, 0, -0.045], [0, 0, -0.045] ], //L R
    legMesh = [],
    legpos = [ [0, 0, -0.045], [0, 0, -0.045], [0, 0, -0.045], [0, 0, -0.045] ], //L R
    footMesh = [],
    footpos = [ [0, 0, -0.01], [0, 0, -0.01] ];

    // arm, leg
    for(i = 0; i < 4; i++) {
        var geometry = new THREE.CubeGeometry(0.04, 0.04, 0.09);
        armMesh[i] = new THREE.Mesh( geometry, material);
        legMesh[i] = new THREE.Mesh( geometry, material);
        armMesh[i].castShadow = true;
        legMesh[i].castShadow = true;
        armMesh[i].position.set(armpos[i][0], armpos[i][1], armpos[i][2]);
        legMesh[i].position.set(armpos[i][0], armpos[i][1], armpos[i][2]);
    }

    // foot
    for(i = 0; i < 2; i++) {
        var geometry = new THREE.CubeGeometry(0.06, 0.04, 0.02);
        footMesh[i] = new THREE.Mesh( geometry, material);
        footMesh[i].castShadow = true;
        footMesh[i].position.set(footpos[i][0], footpos[i][1], footpos[i][2]);
    }

    headgeometry = new THREE.CubeGeometry(0.04, 0.04, 0.04);
    headMesh = new THREE.Mesh( headgeometry, material);
    headMesh.castShadow = true;
    headMesh.position.set(0, 0, 0.04);

    bodygeometry = new THREE.CubeGeometry(0.04, 0.1, 0.18);
    bodyMesh = new THREE.Mesh( bodygeometry, material);
    bodyMesh.castShadow = true;
    bodyMesh.position.set(0, 0, 0.09);
    
    var joint = [],
    jointpos = [];

    jointpos[0] = [0, 0.03, 0];//L leg
    jointpos[1] = [0, 0, 0];
    jointpos[2] = [0, 0, 0];
    jointpos[3] = [0, 0, -0.045];
    jointpos[4] = [0, 0, -0.045];
    jointpos[5] = [0, 0, 0];
    
    jointpos[6] = [0, -0.03, 0];//R leg
    jointpos[7] = [0, 0, 0];
    jointpos[8] = [0, 0, 0];
    jointpos[9] = [0, 0, -0.045];
    jointpos[10] = [0, 0, -0.045];
    jointpos[11] = [0, 0, 0];

    jointpos[12] = [0, 0.08, 0.09];//L arm
    jointpos[13] = [0, 0, 0];
    jointpos[14] = [0, 0, -0.045];

    jointpos[15] = [0, -0.08, 0.09];//R arm
    jointpos[16] = [0, 0, 0];
    jointpos[17] = [0, 0, -0.045];

    jointpos[18] = [0, 0, 0.09];//neck

    for(i = 0; i < 19; i++) {
        joint[i] = new THREE.Object3D();
        joint[i].position.set(jointpos[i][0], jointpos[i][1], jointpos[i][2]);
    }

    // ---parent-child
    scene.add(plane);
	scene.add(parent);
    parent.position.set(0, 0, 0.2);

    parent.add(joint[0]);//L leg
    joint[0].add(joint[1]);
    joint[1].add(joint[2]);
    joint[2].add(legMesh[0]);
    legMesh[0].add(joint[3]);
    joint[3].add(legMesh[1]);
    legMesh[1].add(joint[4]);
    joint[4].add(joint[5]);
    joint[5].add(footMesh[0]);

    parent.add(joint[6]);//R leg
    joint[6].add(joint[7]);
    joint[7].add(joint[8]);
    joint[8].add(legMesh[2]);
    legMesh[2].add(joint[9]);
    joint[9].add(legMesh[3]);
    legMesh[3].add(joint[10]);
    joint[10].add(joint[11]);
    joint[11].add(footMesh[1]);

    parent.add(bodyMesh);

    bodyMesh.add(joint[12]);//L arm
    joint[12].add(joint[13]);
    joint[13].add(armMesh[0]);
    armMesh[0].add(joint[14]);
    joint[14].add(armMesh[1]);

    bodyMesh.add(joint[15]);//L arm
    joint[15].add(joint[16]);
    joint[16].add(armMesh[2]);
    armMesh[2].add(joint[17]);
    joint[17].add(armMesh[3]);

    bodyMesh.add(joint[18]);
    joint[18].add(headMesh);

    // --Light
    var spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0.5, 0.5, 1);
    //spotLight.shadowCameraVisible = true;
    spotLight.shadowCameraNear = 0.1;
    spotLight.shadowCameraFar = 3;
	scene.add(spotLight);
    
	var directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  	directionalLight.position.set(0.5, 0.5, 1);
	scene.add(directionalLight);
    
    var ambient = new THREE.AmbientLight(0x550000);
    scene.add(ambient);
    
    // -Camera
    var camera = new THREE.PerspectiveCamera( 80, width/height);
    camera.up.set(0, 0, 1);
	camera.position.set(0.5, 0.5, 0.5);
    //camera.lookAt(parent.position);

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

    // Camera control
    //これを追加するだけでマウスによるインタラクティブな操作が実現する
    var controls = new THREE.TrackballControls(camera, renderer.domElement);

	function render(){
        requestAnimationFrame(render);
        setjoint();
	    renderer.render( scene, camera );//描画
        controls.update();//視点更新
	};
	render();

    function setjoint(){
        joint[0].rotation.z = sliderpos[0];
        joint[1].rotation.x = sliderpos[1];
        joint[2].rotation.y = sliderpos[2];
        joint[3].rotation.y = sliderpos[3];
        joint[4].rotation.y = sliderpos[4];
        joint[5].rotation.x = sliderpos[5];
        
        joint[6].rotation.z = sliderpos[6];
        joint[7].rotation.x = sliderpos[7];
        joint[8].rotation.y = sliderpos[8];
        joint[9].rotation.y = sliderpos[9];
        joint[10].rotation.y = sliderpos[10];
        joint[11].rotation.x = sliderpos[11];
        
        joint[12].rotation.x = sliderpos[12];
        joint[13].rotation.y = sliderpos[13];
        joint[14].rotation.y = sliderpos[14];
        
        joint[15].rotation.x = sliderpos[15];
        joint[16].rotation.y = sliderpos[16];
        joint[17].rotation.y = sliderpos[17];
        
        joint[18].rotation.z = sliderpos[18];
    }
});
