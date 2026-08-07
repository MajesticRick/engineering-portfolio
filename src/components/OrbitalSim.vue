<script setup lang="ts">

  import { ref, onMounted, onUnmounted } from "vue"
  import * as THREE from "three"

  const container = ref<HTMLDivElement | null>(null)

  let renderer: THREE.WebGLRenderer | null = null
  let animationFrame = 0

  onMounted(() => {
    console.log("Orbital simulation mounted")
    if (!container.value) return

    console.log(container.value)
    /*
    * -------------------------
    * Scene
    * -------------------------
    */

    const scene = new THREE.Scene()

    scene.background = new THREE.Color(0x020617)

    /*
    * -------------------------
    * Camera
    * -------------------------
    */

    const camera = new THREE.PerspectiveCamera(45, container.value.clientWidth / container.value.clientHeight,
      0.1, 1000)

    camera.position.set(0, 2.5, 4)

    camera.lookAt(0, 0, 0)

    /*
    * -------------------------
    * Renderer
    * -------------------------
    */

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })

    renderer.setSize(container.value.clientWidth, container.value.clientHeight)

    container.value.appendChild(renderer.domElement)

    /*
    * -------------------------
    * Earth
    * -------------------------
    */

    const earthGeometry = new THREE.SphereGeometry(1, 64, 64)

    const earthMaterial =
      new THREE.MeshStandardMaterial({
        color: 0x2563eb,
        roughness: 0.8
      })

    const earth = new THREE.Mesh(earthGeometry, earthMaterial)

    scene.add(earth)

    /*
    * -------------------------
    * Atmosphere glow
    * -------------------------
    */

    const atmosphereGeometry =
      new THREE.SphereGeometry(1.05, 64, 64)

    const atmosphereMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.15
      })

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)

    scene.add(atmosphere)

    /*
    * -------------------------
    * Spacecraft
    * -------------------------
    */

    const spacecraftGeometry = new THREE.BoxGeometry(0.12, 0.05, 0.2)

    const spacecraftMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff
      })

    const spacecraft = new THREE.Mesh(spacecraftGeometry, spacecraftMaterial)

    scene.add(spacecraft)

    /*
    * -------------------------
    * Orbit path
    * -------------------------
    */

    const orbitRadius = 2

    const orbitPoints: THREE.Vector3[] = []

    for(let i = 0; i <= 360; i++){

      const angle = i * Math.PI / 180

      orbitPoints.push(

        new THREE.Vector3(
          Math.cos(angle) * orbitRadius,
          0,
          Math.sin(angle) * orbitRadius
        )
      )
    }

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints)

    const orbitMaterial =
      new THREE.LineBasicMaterial({color: 0x22d3ee})

    const orbit = new THREE.Line(orbitGeometry, orbitMaterial)

    scene.add(orbit)

    /*
    * -------------------------
    * Lighting
    * -------------------------
    */

    const sunlight = new THREE.DirectionalLight(0xffffff, 2)

    sunlight.position.set(5, 5, 5)

    scene.add(sunlight)

    const ambient = new THREE.AmbientLight(0xffffff, 0.5)

    scene.add(ambient)

    /*
    * -------------------------
    * Fake GNC state
    * -------------------------
    */

    let trueAnomaly = 0

    function animate(){

      animationFrame =
        requestAnimationFrame(
          animate
        )

      /*
      * Orbital propagation placeholder
      *
      * Replace later with:
      *
      * state.position
      * state.velocity
      *
      * from dynamics model
      */

      trueAnomaly += 0.01

      spacecraft.position.x =Math.cos(trueAnomaly) * orbitRadius

      spacecraft.position.z = Math.sin(trueAnomaly) * orbitRadius

      /*
      * Spacecraft attitude placeholder
      */

      spacecraft.rotation.y = -trueAnomaly

      /*
      * Slowly rotate Earth
      */

      earth.rotation.y += 0.002
      atmosphere.rotation.y += 0.002

      renderer?.render(
        scene,
        camera
      )

    }

    animate()

    /*
    * -------------------------
    * Resize handling
    * -------------------------
    */

    function resize(){

      if(!container.value || !renderer)
        return

      camera.aspect = container.value.clientWidth / container.value.clientHeight

      camera.updateProjectionMatrix()

      renderer.setSize(container.value.clientWidth, container.value.clientHeight)
    }

    window.addEventListener(
      "resize",
      resize
    )
  })

  onUnmounted(() => {
    cancelAnimationFrame(animationFrame)

    renderer?.dispose()
  })
</script>

<template>

  <div ref="container" class="h-125 w-full rounded-xl border border-slate-800">
  </div>

</template>