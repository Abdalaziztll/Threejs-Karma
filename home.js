
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);



const textureloader = new THREE.TextureLoader()

const normaltexture = textureloader.load("build4.bmp")


const textureloader2 = new THREE.TextureLoader()

const normaltexture2 = textureloader2.load("grass.bmp")




const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);


const pointlight1 =  new THREE.PointLight(0xffffff,10)
pointlight1.position.x=4
pointlight1.position.y=-4
pointlight1.position.z=0
scene.add(pointlight1)




const pointlight2 =  new THREE.PointLight(0xff0000,10)
pointlight2.position.x=-4
pointlight2.position.y=0
pointlight2.position.z=0
scene.add(pointlight2)


const pointlight3 =  new THREE.PointLight(0x00ff00,10)
pointlight3.position.x=-2
pointlight3.position.y=1
pointlight3.position.z=1
scene.add(pointlight3)


const geo = new THREE.BoxBufferGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial();
 material.metalness = 0.8
material.roughness = 0.2
material.normalMap = normaltexture;
material.color = new THREE.Color(0x292929)

const cube = new THREE.Mesh(geo,material);
scene.add(cube);


// const geo1 = new THREE.PlaneGeometry(2,2);
// const material1 = new THREE.MeshBasicMaterial({color:0xfffff});
// //  material1.metalness = 1
// // material1.roughness = 0.1
// // material1.normalMap = normaltexture2;
// // material1.color = new THREE.Color(0x292929)


// const cube1 = new THREE.Mesh(geo1,material1);
// scene.add(cube1)

camera.position.z = 3;



window.addEventListener('keydown',()=>{

    cube.rotation.x=cube.rotation.x-0.5
})


function animate(){
    requestAnimationFrame(animate);
    
    renderer.render(scene,camera);

    
}
animate()