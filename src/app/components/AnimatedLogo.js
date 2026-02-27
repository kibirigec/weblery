"use client";

import React, { useRef, useId } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const fullPath = "M64.019 0.967732C26.546 7.19873 2.80797 36.1177 0.235972 78.6737C-2.97103 131.725 26.908 231.402 65.658 296.928C80.237 321.58 100.336 342.572 117.724 351.305C131.426 358.187 149.759 358.444 164.355 351.961C171.395 348.833 182.521 340.046 188.82 332.639C196.233 323.921 206.502 308.027 211.811 297.055C214.624 291.241 216.846 287.847 217.838 287.847C218.817 287.847 221.042 291.146 223.74 296.597C239.215 327.864 260.324 358.512 279.45 377.481C303.025 400.861 326.264 410.998 352.855 409.5C372.901 408.371 388.248 401.78 406.816 386.325C428.454 368.316 453.265 334.397 470.989 298.597C474.276 291.957 476.893 287.849 477.833 287.852C478.755 287.854 481.409 291.892 484.569 298.102C493.323 315.305 501.158 326.45 512.208 337.417C523.587 348.709 530.546 352.846 542.355 355.336C561.284 359.328 577.983 354.35 595.991 339.347C626.216 314.165 659.578 249.662 680.815 175.347C698.947 111.895 700.364 67.5407 685.182 38.6497C671.521 12.6517 645.072 -1.33326 612.355 0.141744C590.508 1.12674 576.545 7.36974 559.489 23.7787C537.455 44.9767 522.194 72.6747 493.333 143.847C486.813 159.924 481.594 171.457 480.768 171.612C479.765 171.8 476.917 165.13 470.948 148.612C458.76 114.883 452.91 100.705 442.365 79.3467C427.545 49.3297 414.944 31.5857 399.466 18.9367C384.442 6.66073 370.221 0.98674 352.303 0.11974C326.562 -1.12526 303.253 9.19474 284.511 30.1367C264.375 52.6347 244.356 92.9727 222.751 154.585C219.233 164.617 215.842 172.829 215.216 172.835C214.589 172.842 210.356 163.51 205.809 152.097C186.837 104.48 174.548 77.7087 162.379 57.4827C142.884 25.0797 121.056 6.46772 96.647 1.43572C88.373 -0.27028 72.806 -0.493268 64.019 0.967732ZM608.975 39.9897C584.821 43.9317 564.798 72.9797 536.352 145.347C530.948 159.097 521.153 183.622 514.587 199.847C508.021 216.072 502.431 230.72 502.166 232.397C501.383 237.34 516.766 275.266 525.934 290.997C534.004 304.847 546.131 314.861 554.801 314.837C560.097 314.823 567.664 310.844 574.589 304.433C599.381 281.48 635.069 195.741 647.259 129.847C653.441 96.4297 652.951 74.7447 645.662 59.1237C639.32 45.5357 623.989 37.5387 608.975 39.9897ZM69.808 41.1567C61.337 44.2967 54.4 50.7347 49.96 59.5757C40.624 78.1657 43.13 116.238 56.955 165.847C70.122 213.09 90.035 261.096 107.355 287.347C118.205 303.793 131.657 314.827 140.855 314.827C144.812 314.827 153.038 311.187 156.996 307.684C167.415 298.464 182.528 269.659 193.374 238.347L195.106 233.347L188.063 216.847C180.721 199.646 177.147 190.674 164.366 157.347C142.13 99.3637 126.648 69.5357 110.386 53.3467C100.457 43.4617 94.027 40.4217 82.355 40.0937C76.769 39.9377 72.009 40.3407 69.808 41.1567ZM339.12 41.3887C310.713 49.0387 290.845 81.8777 258.678 174.347C255.426 183.697 249.57 200.453 245.664 211.583L238.564 231.818L251.684 258.083C270.439 295.629 283.771 316.016 300.263 332.372C319.188 351.142 337.444 358.29 357.721 354.87C377.161 351.591 398.707 333.467 418.38 303.847C428.816 288.134 440.002 267.914 449.523 247.547L456.91 231.747L447.979 205.547C443.067 191.137 436.257 171.472 432.846 161.847C403.586 79.2827 382.014 46.0447 354.375 40.9347C347.077 39.5857 345.655 39.6287 339.12 41.3887Z";
const subPaths = fullPath.match(/M[^M]*/g) || [fullPath];

export default function AnimatedLogo({ className = "", theme = "blue", startDelay = 0 }) {
    const container = useRef(null);

    // Ensure globally unique SVG gradient IDs to prevent bugs when multiple logos mount concurrently
    const uid = useId().replace(/:/g, "");
    const gradientId = `paint0_linear_61_8_${uid}`;

    useGSAP(
        () => {
            const strokePaths = gsap.utils.toArray(".stroke-path", container.current);
            const fillPath = container.current.querySelector(".fill-path");

            if (!strokePaths.length || !fillPath) return;

            const tl = gsap.timeline({ delay: startDelay });

            // Set up all strokes
            strokePaths.forEach((path) => {
                path.setAttribute("fill", "transparent");
                path.setAttribute("stroke", `url(#${gradientId})`);
                path.setAttribute("stroke-width", "2");
                path.setAttribute("stroke-linecap", "round");
                path.setAttribute("stroke-linejoin", "round");

                const length = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                });
            });

            // Set up the compound fill to be initially invisible
            gsap.set(fillPath, {
                attr: { fill: `url(#${gradientId})`, stroke: "transparent" },
                opacity: 0,
            });

            const drawDuration = 1.3;

            // Pen 1: The Outer Perimeter (First Path)
            if (strokePaths[0]) {
                tl.to(
                    strokePaths[0],
                    {
                        strokeDashoffset: 0,
                        duration: drawDuration,
                        ease: "power2.inOut",
                    },
                    0
                );
            }

            // Pen 2: The Inner Cutouts (Subsequent Paths)
            // Draw them sequentially so they act like a single inner pen that jumps.
            const innerPaths = strokePaths.slice(1);
            if (innerPaths.length > 0) {
                const totalInnerLength = innerPaths.reduce((acc, p) => acc + p.getTotalLength(), 0);

                // We create a secondary timeline for just the inner pen, and inject it at 0
                const innerTl = gsap.timeline();
                innerPaths.forEach((path) => {
                    const length = path.getTotalLength();
                    const duration = (length / totalInnerLength) * drawDuration;

                    innerTl.to(path, {
                        strokeDashoffset: 0,
                        duration: duration,
                        ease: "none",
                    });
                });
                tl.add(innerTl, 0); // Start the inner pen sequence simultaneously
            }

            // Only after the strokes are completely drawn, cleanly fade in the core color
            tl.to(
                fillPath,
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.inOut",
                },
                // Wait slightly near the end of the drawing sequence before kicking off
                drawDuration - 0.2
            ).to(
                strokePaths,
                {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut",
                },
                "<" // Crossfade perfectly with the fill popping in
            );
        },
        { scope: container }
    );

    return (
        <div ref={container} className={className}>
            <svg
                viewBox="0 0 696 410"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full block"
                fill="transparent"
            >
                <defs>
                    <linearGradient
                        id={gradientId}
                        x1="0"
                        y1="204.822"
                        x2="695.585"
                        y2="204.822"
                        gradientUnits="userSpaceOnUse"
                    >
                        {theme === "orange" ? (
                            <>
                                <stop stopColor="#c2410c" /> {/* orange-700 */}
                                <stop offset="0.140153" stopColor="#ea580c" /> {/* orange-600 */}
                                <stop offset="0.574902" stopColor="#f28c28" /> {/* orange-500ish */}
                                <stop offset="0.927248" stopColor="#fb923c" /> {/* orange-400 */}
                            </>
                        ) : (
                            <>
                                <stop stopColor="#1E4ED8" /> {/* blue-700 */}
                                <stop offset="0.140153" stopColor="#1F6FE5" /> {/* blue-600 */}
                                <stop offset="0.574902" stopColor="#3199DB" /> {/* blue-500 */}
                                <stop offset="0.927248" stopColor="#43C3D1" /> {/* cyan-400 */}
                            </>
                        )}
                    </linearGradient>
                </defs>

                {/* 
                  1. The transparent stroke paths split linearly.
                     This allows GSAP to animate them efficiently without jumping. 
                */}
                {subPaths.map((d, i) => (
                    <path key={i} className="stroke-path" d={d} fill="transparent" />
                ))}

                {/* 
                  2. The single compound path for the final hole-punched fill.
                     (Ensures e.g. loops in letters are correctly cut out via evenodd)
                */}
                <path
                    className="fill-path"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="transparent"
                    stroke="transparent"
                    d={fullPath}
                />
            </svg>
        </div>
    );
}