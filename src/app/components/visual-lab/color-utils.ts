// Helper: HSL to RGB space-separated string
// h: 0..360, s/l: 0..100
export function hslToRgbString(h: number, s: number, l: number): string {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;
        const p = 2.0 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return `${Math.round(r * 255)} ${Math.round(g * 255)} ${Math.round(b * 255)}`;
}

export function generateHarmoniousPalette() {
    // Pick a base hue
    const baseHue = Math.floor(Math.random() * 360);

    // Generate 5 colors (reference uses 5)

    // c1: Base color
    const c1 = hslToRgbString(baseHue, 70 + Math.random() * 20, 60 + Math.random() * 10);

    // c2: Analogous
    const c2 = hslToRgbString((baseHue + 30) % 360, 60 + Math.random() * 20, 50 + Math.random() * 10);

    // c3: Complimentish
    const c3 = hslToRgbString((baseHue + 180) % 360, 80 + Math.random() * 20, 60 + Math.random() * 10);

    // c4: Accent
    const c4 = hslToRgbString((baseHue + 240) % 360, 80 + Math.random() * 20, 70 + Math.random() * 10);

    // c5: Highlight/Whiteish
    const c5 = "255 255 255";

    // Background: very light tint
    const bg = hslToRgbString(baseHue, 30, 96);

    return { c1, c2, c3, c4, c5, bg };
}


// Helper: RGB string to Hex
export function rgbStringToHex(rgb: string): string {
    const [r, g, b] = rgb.split(' ').map(Number);
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Helper: Hex to RGB string
export function hexToRgbString(hex: string): string {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    const num = parseInt(hex, 16);
    return `${(num >> 16) & 255} ${(num >> 8) & 255} ${num & 255}`;
}

// Helper: Hex to HSL
export function hexToHsl(hex: string): { h: number, s: number, l: number } {
    const rgbStr = hexToRgbString(hex);
    const [r, g, b] = rgbStr.split(' ').map(x => parseInt(x) / 255);

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

// Helper: HSL to Hex
export function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

// Helper: Adjust Lightness of a Hex color
// multiplier: 1 = same, >1 = lighter, <1 = darker
export function adjustLightness(hex: string, multiplier: number): string {
    const { h, s, l } = hexToHsl(hex);
    // Clamp lightness between 0 and 100
    const newL = Math.max(0, Math.min(100, l * multiplier));
    return hslToRgbString(h, s, newL); // Return as RGB string for CSS vars
}


export const PRESETS: Record<string, any> = {
    'openai-ice': {
        bg: '15 20 40',
        c1: '56 90 200',
        c2: '80 60 180',
        c3: '30 140 130',
        c4: '120 70 180',
        c5: '200 120 160'
    },
    'mint-sky': {
        bg: '10 30 35',
        c1: '30 180 140',
        c2: '40 100 200',
        c3: '80 160 60',
        c4: '60 90 180',
        c5: '180 220 200'
    },
    'violet-dusk': {
        bg: '15 10 35',
        c1: '100 60 200',
        c2: '60 120 220',
        c3: '180 60 140',
        c4: '30 160 100',
        c5: '220 180 220'
    }
};
