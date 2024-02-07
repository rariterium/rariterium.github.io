				const textureLoader = new THREE.TextureLoader();

				textureEquirec = textureLoader.load( './../img/street.jpg' );
				textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
				textureEquirec.encoding = THREE.sRGBEncoding;



				let planeMaterial = new THREE.MeshLambertMaterial({color: 0xaaaaaa});

				let metallMaterial = new THREE.MeshStandardMaterial( {
					color: 0xcccccc,
					metalness: 0.9,
					roughness: 0.1,
					envMap: textureEquirec,
				} );

				let windowsMaterial = new THREE.MeshPhysicalMaterial( {
					color: 0x111111,
					envMap: textureEquirec,
					metalness: 0.15, 
					roughness: 0.1,
					transmission: 0.03, 
					transparent: true
				} );					

				let rezinaMaterial = new THREE.MeshPhysicalMaterial( {
					color: 0x111111,
					metalness: 0.1,
					roughness: 0.9,
					envMap: textureEquirec,
				} );

				let fara_krasnayMaterial = new THREE.MeshStandardMaterial( {
					color: 0xff0000,
					envMap: textureEquirec,
					roughness: 0.8
				} );

				let kuzovMaterial = new THREE.MeshStandardMaterial( {
					color: 0xffffff,
					envMap: textureEquirec,
					metalness: 0.35,
					roughness: 0.18
				} );

				let kuzov2Material = new THREE.MeshStandardMaterial( {
					color: 0x000000,
					envMap: textureEquirec,
					metalness: 0.35,
					roughness: 0.18
				} );

				let fara_perednayMaterial = new THREE.MeshPhysicalMaterial( {
					color: 0xffffff,
					envMap: textureEquirec,
					metalness: 0.15, 
					roughness: 0.1, 
					transmission: 0.20, 
					transparent: true						
				} );

				let tormozaMaterial = new THREE.MeshStandardMaterial( {
					color: 0xff0000,
					envMap: textureEquirec,
					metalness: 0.1,
					roughness: 0.6,
				} );

				let zerkaloMaterial = new THREE.MeshStandardMaterial( {
					color: 0xffffff,
					roughness: 0.1,
					metalness: 0.9,
					envMap: textureEquirec,
				} );

				let bakyMaterial = new THREE.MeshStandardMaterial( {
					color: 0xffffff,
					metalness: 0.35,
					roughness: 0.18,
					envMap: textureEquirec,
				} );

				let plastikMaterial = new THREE.MeshPhysicalMaterial( {
					color: 0x222222,
					metalness: 0.19,
					roughness: 0.7,
					envMap: textureEquirec,
				} );

				let diskiMaterial = new THREE.MeshStandardMaterial( {
					color: 0xcccccc,
					metalness: 0.9,
					roughness: 0.1,
					envMap: textureEquirec,			 			
				} );	