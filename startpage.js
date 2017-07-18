class Particles
  constructor: () ->
    @canvasMouse = {x: 0, y: 0, z: 0, px: 0, py: 0, py: 0, vx: 0, vy: 0, pressed: false}
    @colors = ['#da6b00', '#8555d4', '#4ad3b5', '#ffffff']
    @particleCount = 500
    @initialRadius = 0.1
    @movementSpeed = 2
    @directions = []
    @starSystems = []
    @systemCount = 1

    @setStage()

    @setLighting()

    @setActors()

    setInterval =>
      @systemCount++
      @addStars(@getPastelColor(), 0, 0)
    , 5000

    @animate()
    @render()

  getPastelColor: =>
    @col =  new THREE.Color("hsl(#{@random(0, 360)}, #{Math.floor(25 + 70 * Math.random())}%, #{Math.floor(85 + 10 * Math.random())}%)")
    return "##{@col.getHexString()}"

  setActors: => @addStars(@getPastelColor(), 0, 0)

  addStars: (color, x, y) =>
    @dirs = []

    @geometry = new THREE.Geometry()
    @materials = new THREE.PointsMaterial
      color: color,
      size: 1,
      transparent: true,
      blending: THREE.AdditiveBlending,
      map: @getTexture(color),
      depthTest: false,

    for i in [0...@particleCount]
      angle = Math.random() * 2 * Math.PI
      radiusSQ = Math.random() * @initialRadius * @initialRadius
      vertex = new THREE.Vector3()

      vertex.x = x
      vertex.y = y
      vertex.z = 0

      @dirs.push({
        x: (Math.random() * @movementSpeed) - (@movementSpeed/2),
        y: (Math.random() * @movementSpeed) - (@movementSpeed/2),
        z: (Math.random() * @movementSpeed) - (@movementSpeed/2)
      })

      @geometry.vertices.push(vertex)

    @starSystem = new THREE.Points(@geometry, @materials)
    @starSystem.sortParticles = true

    @directions.push @dirs
    @starSystems.push @starSystem

    @scene.add( @starSystem )

  getTexture: (color) =>
    canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32

    context = canvas.getContext('2d')
    gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.2, color)
    gradient.addColorStop(0.4, color)
    gradient.addColorStop(1, 'rgba(0,0,0,1)')

    context.fillStyle = gradient
    context.fillRect(0, 0, canvas.width, canvas.height)

    texture = new THREE.Texture(canvas)
    texture.needsUpdate = true

    return texture

  setLighting: =>
    @ambientLight = new THREE.AmbientLight("#ffffff", 0.5)
    @scene.add(@ambientLight)

  setStage: =>
    @renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas"), antialias: true})
    @renderer.setPixelRatio(window.devicePixelRatio)
    @renderer.autoClear = false
    @renderer.setSize(window.innerWidth, window.innerHeight)

    @scene = new THREE.Scene()
    @camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    @camera.position.z = 50

    @stats = new Stats()
    @stats.setMode(0)
    @stats.domElement.style.position = 'absolute'
    @stats.domElement.style.left = '0px'
    @stats.domElement.style.top = '0px'
    document.getElementById("stats").appendChild(@stats.domElement)

    window.addEventListener('resize', @resize, false )
    window.addEventListener('mousemove', @mouseMove, false )
    window.addEventListener("mousedown", @mouseDown)

  animate: =>
    for j in [0..@systemCount - 1]
      for i in [0...@particleCount]
        particle = @starSystems[j].geometry.vertices[i]
        particle.x += @directions[j][i].x
        particle.y += @directions[j][i].y
        particle.z += @directions[j][i].z

      @starSystems[j].geometry.verticesNeedUpdate = true

    @stats.update()
    @render()

    requestAnimationFrame( @animate )

  resize: =>
    @camera.aspect = window.innerWidth / window.innerHeight
    @camera.updateProjectionMatrix()
    @renderer.setSize( window.innerWidth, window.innerHeight )
    @render()

  mouseDown: =>
    @systemCount++
    @addStars(@getPastelColor(), @canvasMouse.x, @canvasMouse.y)

  mouseMove: =>
    @canvasMouse.px = @canvasMouse.x
    @canvasMouse.py = @canvasMouse.y

    @canvasX = ( event.clientX / window.innerWidth ) * 2 - 1
    @canvasY = - ( event.clientY / window.innerHeight ) * 2 + 1

    @vector = new THREE.Vector3(@canvasX || 0, @canvasY || 0, 0)
    @vector.unproject( @camera )

    @dir = @vector.sub( @camera.position ).normalize()
    @distance = - @camera.position.z / @dir.z
    @canvasMouse = @camera.position.clone().add( @dir.multiplyScalar( @distance ) )

  random: (min, max) => Math.floor(Math.random() * max) + min

  rotateRadians: (deg) => return deg * (Math.PI / 180)

  render: => @renderer.render(@scene, @camera)

new Particles
