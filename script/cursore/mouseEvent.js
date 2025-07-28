const codes = {x:0, y:0};

const colors = [
  "rgba(0, 255, 255, 0.1)",   // very light cyan (grid lines)
  "rgba(0, 230, 255, 0.2)",   // slightly deeper cyan
  "rgba(0, 200, 255, 0.3)",   // bright neon cyan
  "rgba(0, 180, 255, 0.4)",   // electric blue-cyan
  "rgba(0, 160, 255, 0.5)",   // deeper blue tone
  "rgba(0, 130, 230, 0.6)",   // bluish-teal
  "rgba(0, 100, 200, 0.7)"    // darker teal (edges)
];


    const circles = []
    const circleElement = 20

    for(let i = 0; i < circleElement; i++){
        const div  = document.createElement('div')
        div.classList.add('circle')
        div.style.backgroundColor = colors[i % colors.length]
        document.body.appendChild(div)
        div.x = 0
        div.y = 0
        circles.push(div)
    };

    window.addEventListener('mousemove' , (e) =>{
        codes.x = e.clientX
        codes.y = e.clientY
    });

    function animate() {
        let x = codes.x
        let y = codes.y
        circles.forEach((circle, index) =>{
            circle.style.left = (x - 12 )+ "px"
            circle.style.top = (y - 12 )+ "px"
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`
            circle.x = x
            circle.y = y

            const next = circles[index + 1] || circles[0]
            x += (next.x - x ) * 0.4
            y += (next.y - y) * 0.4
        }); 
        requestAnimationFrame(animate)

    }
    animate()
