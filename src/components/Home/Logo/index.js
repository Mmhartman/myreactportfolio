import './index.scss';
import LogoM from '../../../assets/images/logo-M.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';


const Logo = () => {
    // 3 elements are going to be hidden. svg container,itself and solid image
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();


    //apply our animation effects
    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
    //chain animation on top
    .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

      gsap.fromTo(
          solidLogoRef.current,
          {
              opacity: 0,
          },
          {
              opacity: 1,
              delay: 4,
              duration: 4,

          }
      )
    },[])



    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoM} alt="M"/>
            <svg 
            version="1.0" 
            xmlns="http://www.w3.org/2000/svg"
            width="500.000000pt" 
            height="500.000000pt" 
            viewBox="0 0 500.000000 500.000000"
            preserveAspectRatio="xMidYMid meet">

            <g
            className="svg-container"
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            fill="#000000" 
            stroke="none">
            <path 
            ref={outlineLogoRef}
            d="M1167 3842 c-20 -25 6 -46 66 -54 75 -10 146 -47 197 -105 41 -47 42
            -49 36 -108 -11 -121 -19 -975 -9 -975 7 0 13 139 17 383 3 210 9 446 12 524
            l6 142 -58 59 c-63 63 -143 102 -209 102 -19 0 -37 5 -40 10 -5 8 368 17 450
            11 11 -1 34 -17 51 -36 18 -20 146 -273 308 -607 153 -315 282 -577 287 -582
            5 -5 11 -7 14 -5 6 7 -529 1109 -571 1176 -18 28 -43 57 -55 63 -33 18 -487
            19 -502 2z"/>
            <path d="M3371 3847 c-16 -4 -39 -20 -50 -35 -26 -37 -533 -1203 -526 -1210 3
            -3 8 -3 11 0 3 4 117 262 253 575 278 637 274 628 301 643 28 15 480 19 480 4
            0 -7 -29 -14 -72 -17 -99 -7 -142 -22 -189 -64 -73 -66 -73 -66 -47 -640 16
            -359 26 -503 34 -503 8 0 10 21 7 68 -18 302 -40 925 -34 957 20 106 84 151
            233 163 l83 7 0 30 0 30 -227 0 c-125 0 -241 -3 -257 -8z"/>
            <path d="M3070 3054 c-163 -379 -202 -479 -176 -453 3 2 84 189 181 414 97
            226 180 413 184 417 4 4 15 -180 24 -409 9 -229 19 -419 22 -421 3 -3 8 -3 11
            1 6 6 -23 807 -32 865 -3 17 -9 32 -13 32 -5 0 -95 -201 -201 -446z"/>
            <path d="M1547 3258 c-4 -128 -7 -303 -7 -389 0 -86 -3 -183 -6 -216 -6 -58
            -7 -60 -52 -84 -48 -25 -72 -53 -58 -66 4 -4 48 -10 97 -11 58 -3 89 -8 89
            -15 0 -7 -7 -33 -15 -59 -8 -27 -10 -48 -5 -48 5 0 14 19 20 43 6 23 13 49 16
            58 5 17 87 35 105 23 5 -3 9 -32 9 -65 0 -32 4 -59 9 -59 4 0 17 30 28 68 l20
            67 48 7 c63 9 69 18 12 18 -26 0 -47 3 -47 6 0 3 17 63 37 132 l38 126 45 -97
            c25 -53 50 -97 57 -97 7 0 -25 77 -70 173 -46 94 -141 295 -212 444 -72 150
            -135 273 -141 273 -7 0 -13 -75 -17 -232z m182 -140 c78 -163 141 -302 141
            -308 0 -6 -19 -74 -42 -150 -48 -161 -52 -164 -121 -97 l-44 42 23 80 c13 44
            23 89 21 100 -2 11 -10 -6 -20 -40 -45 -152 -37 -140 -84 -143 l-43 -3 0 168
            c0 267 13 665 21 656 4 -4 70 -142 148 -305z m-95 -537 c12 -18 -16 -71 -40
            -77 -31 -8 -141 0 -151 10 -4 4 3 16 17 27 45 35 161 62 174 40z m79 -46 c8
            -19 -2 -25 -40 -25 -36 0 -38 5 -23 45 9 25 11 25 34 10 13 -9 27 -22 29 -30z
            m56 -62 c0 -25 -1 -25 -8 -8 -5 11 -7 23 -4 28 8 14 13 7 12 -20z"/>
            <path d="M2549 2678 c-7 -13 -17 -43 -24 -68 l-11 -45 -65 -11 c-71 -13 -69
            -16 7 -14 l52 1 4 -41 c3 -39 1 -44 -31 -66 -42 -28 -129 -49 -166 -40 -27 7
            -29 14 -9 60 7 18 4 19 -35 12 l-43 -7 7 30 c4 18 2 32 -6 37 -17 10 -41 -26
            -35 -52 7 -26 -14 -46 -77 -74 -64 -28 -102 -20 -124 26 -9 19 -19 34 -22 34
            -3 0 -16 -18 -29 -40 -23 -41 -42 -52 -42 -24 0 26 20 54 53 74 20 13 26 20
            15 20 -21 0 -75 -45 -83 -70 -8 -25 3 -60 18 -60 6 0 23 12 38 26 l28 26 27
            -21 c47 -37 137 -21 199 36 11 10 35 19 54 21 29 2 33 0 28 -17 -16 -62 83
            -74 185 -23 53 26 58 27 63 10 9 -25 54 -58 80 -58 13 0 49 14 80 30 l57 30
            -6 -25 c-9 -34 4 -31 44 10 42 43 58 44 71 5 13 -36 16 -37 41 -5 25 32 34 31
            68 -5 22 -23 36 -30 67 -30 21 1 49 7 63 15 32 18 40 18 40 0 0 -29 30 -28 61
            1 l29 28 23 -22 c32 -30 91 -29 151 3 l46 24 0 -24 c0 -14 2 -25 4 -25 2 0 18
            14 36 30 18 17 40 30 49 30 9 0 29 -13 44 -30 42 -45 102 -39 175 17 48 37 32
            39 -24 4 -64 -41 -110 -41 -149 -1 -32 33 -50 37 -79 15 -27 -20 -35 -19 -29
            5 7 27 3 26 -56 -15 -88 -59 -161 -55 -177 10 -9 35 -19 31 -45 -15 -26 -45
            -39 -51 -39 -17 0 23 27 54 65 75 l20 11 -20 1 c-11 0 -46 -22 -77 -49 -31
            -27 -69 -52 -84 -55 -36 -9 -79 9 -92 40 -14 29 -43 31 -67 4 l-18 -20 -14 20
            c-17 24 -50 26 -82 3 -23 -16 -24 -16 -19 5 4 12 4 22 2 22 -3 0 -27 -16 -56
            -35 -58 -40 -87 -50 -124 -41 -36 9 -57 63 -42 108 18 53 25 58 94 58 41 0 64
            4 64 11 0 8 -19 10 -66 5 -60 -6 -65 -5 -60 11 19 66 26 105 21 113 -11 17
            -34 11 -46 -12z m16 -68 c-9 -28 -21 -50 -26 -50 -6 0 -8 8 -5 18 3 9 8 31 12
            47 4 17 12 39 17 50 19 36 21 -9 2 -65z m-28 -92 c-3 -8 -6 -5 -6 6 -1 11 2
            17 5 13 3 -3 4 -12 1 -19z"/>
            <path d="M1440 2208 c-1 -187 -16 -305 -47 -368 -35 -70 -95 -116 -160 -125
            -91 -12 -95 -13 -91 -42 l3 -27 343 0 c307 -1 345 1 353 15 15 28 -12 46 -79
            53 -75 7 -108 23 -150 71 -54 60 -65 123 -63 343 0 106 -3 192 -8 192 -14 0
            -24 -296 -12 -376 24 -161 96 -239 233 -251 33 -3 58 -11 58 -17 0 -8 -95 -11
            -330 -11 -235 0 -330 3 -330 11 0 6 24 14 54 17 68 7 126 36 165 84 37 45 58
            104 71 203 13 101 13 340 0 340 -6 0 -10 -44 -10 -112z"/>
            <path d="M2164 2208 c29 -62 97 -205 150 -318 54 -113 106 -213 117 -222 44
            -37 54 -20 201 318 75 175 138 322 138 327 1 36 -36 -39 -155 -313 -76 -176
            -142 -323 -147 -326 -6 -4 -16 0 -23 7 -8 8 -80 153 -162 323 -81 170 -154
            311 -161 314 -6 2 12 -47 42 -110z"/>
            <path d="M2420 2317 c0 -2 31 -69 69 -148 l69 -144 17 39 c9 22 37 84 61 139
            46 103 50 117 36 117 -5 0 -30 -51 -56 -112 -27 -62 -51 -116 -55 -121 -4 -4
            -33 47 -65 113 -32 66 -62 120 -67 120 -5 0 -9 -2 -9 -3z"/>
            <path d="M3318 2314 c-3 -5 0 -117 5 -249 8 -209 8 -245 -6 -277 -20 -47 -63
            -69 -147 -75 -103 -7 -112 -10 -108 -40 l3 -26 420 -1 420 0 3 27 c4 31 -5 34
            -118 40 -92 5 -136 26 -156 73 -16 38 -30 179 -40 397 -3 80 -10 137 -16 137
            -7 0 -8 -60 -3 -172 15 -396 36 -444 204 -455 36 -2 76 -6 89 -9 71 -14 -21
            -19 -383 -19 -266 0 -404 3 -402 10 2 6 37 13 78 16 103 9 146 31 171 87 19
            42 20 59 13 282 -7 214 -13 279 -27 254z"/>
            </g>
            </svg>

        </div>
    )
}

export default Logo;