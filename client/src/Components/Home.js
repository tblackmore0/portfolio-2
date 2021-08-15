import Particles from 'react-particles-js';

function Home () {
    return (
        <div className='homeDiv'>
            <Particles id='particlesJs'
            params={{
                "particles": {
                    "number": {
                      "value": 34,
                      "density": {
                        "enable": true,
                        "value_area": 561.194221302933
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 3
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": false,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 1.603412060865523,
                      "direction": "top",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "window",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": false,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 150,
                        "duration": 0.2
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true  
            }}    
            />
            <div className='homeText'>
                <div id='firstWord'>
                <p>
                    <span>T</span>
                    <span>o</span>
                    <span>m</span>
                </p>
                <p>
                    <span>B</span>
                    <span>l</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                    <span>m</span>
                    <span>o</span>
                    <span>r</span>
                    <span>e</span>
                </p>
                </div>
                    <div className='homeShape'></div>
                <div id='secondWord'>
                <p> <span>W</span>
                    <span>e</span>
                    <span>b</span>
                </p>
                <p>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                </p>
                </div>
            </div>
            <div className='arrowDiv'>
                <div className='homeArrow'></div>
            </div>
        </div>
    )
}

export {Home}