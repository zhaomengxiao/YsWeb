"use client";

import { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "../lib/utils";
import React from 'react';
import type { MoveDirection, OutMode, AnimationMode, StartValueType } from "@tsparticles/engine";

type SparklesBackgroundProps = {
    className?: string;
    size?: number;
    minSize?: number | null;
    density?: number;
    speed?: number;
    minSpeed?: number | null;
    opacity?: number;
    opacitySpeed?: number;
    minOpacity?: number | null;
    color?: string;
    background?: string;
    options?: Record<string, any>;
    children: React.ReactNode;
};

export function SparklesBackground({
    className,
    size = 1,
    minSize = null,
    density = 800,
    speed = 1,
    minSpeed = null,
    opacity = 1,
    opacitySpeed = 3,
    minOpacity = null,
    color = "#FFFFFF",
    background = "transparent",
    options = {},
    children
}: SparklesBackgroundProps) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setIsReady(true);
        });
    }, []);

    const id = useId();

    const defaultOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fullScreen: {
            enable: true,
            zIndex: 0,
        },
        fpsLimit: 30,
        particles: {
            color: {
                value: "#ffffff",
            },
            move: {
                enable: true,
                direction: "none" as MoveDirection,
                speed: {
                    min: minSpeed || speed / 10,
                    max: speed,
                },
                straight: false,
                outModes: {
                    default: "out" as OutMode,
                },
            },
            number: {
                density: {
                    enable: true,
                    width: 400,
                    height: 400,
                },
                value: 100,
            },
            opacity: {
                value: {
                    min: minOpacity || opacity / 10,
                    max: opacity,
                },
                animation: {
                    enable: true,
                    sync: false,
                    speed: opacitySpeed,
                    mode: "auto" as AnimationMode,
                    startValue: "random" as StartValueType,
                },
            },
            size: {
                value: {
                    min: minSize || size / 2.5,
                    max: size,
                },
            },
            twinkle: {
                particles: {
                    enable: true,
                    frequency: 0.05,
                    opacity: 1,
                },
            },
        },
        detectRetina: true,
    };

    return (
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            {isReady && (
                <Particles
                    id={id}
                    options={{ ...defaultOptions, ...options }}
                    className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
                />
            )}
            {children}
        </div>
    );
}
