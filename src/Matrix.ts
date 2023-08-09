export default class Matrix {
  private _canvas: any;
  private _ctx: any;
  private _font_size: number;
  private _drops: number[];
  private _color: string;
  private _background: string;
  private _font: string;
  private _chars: string[];
  private _run: boolean;
  private _width: number;
  private _height: number;
  private _columns: number;
  private _speed: number;
  private _frameCount: number;

  constructor(canvas: any, options: any = {}) {
    const {
      chars = "10",
      font_size = 16,
      width = window.innerWidth,
      height = window.innerHeight,
      font = "monospace",
      color = "#0F0",
      colums = 0,
      speed = 4,
      background = "rgba(0, 0, 0, 0.05)",
    } = options;

    this._canvas = canvas;
    this._ctx = canvas.getContext("2d")!;
    this._font_size = font_size;
    this._drops = [];
    this._color = color;
    this._background = background;
    this._font = font;
    this._chars = chars || this.generateChars();
    this._run = false;
    this._width = width;
    this._height = height;
    this._columns = colums;
    this._speed = speed;
    this._frameCount = 0;
    this.resize(width, height);
  }

  private generateChars(): string[] {
    const charRange = this.range(12449, 12534).concat(this.range(12353, 12438));
    return charRange.map((charCode) => String.fromCharCode(charCode));
  }

  private range(start: number, end: number): number[] {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  random_char(): string {
    return this._chars[Math.floor(Math.random() * this._chars.length)];
  }

  render_char(t: string, i: number, n: number): void {
    this._ctx.fillText(t, i, n);
  }

  start(): void {
    let t = 0;
    this._run = true;
    const self = this;

    function n() {
      if (self._run) {
        if (self._frameCount >= self._speed) {
          self.render();
          self._frameCount = 0;
        }
        self._frameCount++;
        t++;
        requestAnimationFrame(n);
      }
    }

    n();
  }

  stop(): void {
    this._run = false;
  }

  reset(): void {
    for (let t = 0; t < this._columns; t++) {
      this._drops[t] = 255;
    }
  }

  resize(t: number, i: number): void {
    this._width = t;
    this._height = i;
    this._canvas.width = t;
    setTimeout(() => {
      this._canvas.height = i;
      this.reset();
    }, 0);
    this._columns = Math.round(t / this._font_size);
  }

  clear(): void {
    this._ctx.fillStyle = this._background;
    this._ctx.fillRect(0, 0, this._width, this._height);
    this._ctx.fillStyle = this._color;
    this._ctx.font = this._font_size + "px " + this._font;
  }

  render(): void {
    this.clear();
    for (let t = 0; t < this._drops.length; t++) {
      const char = this.random_char();
      const x = t * this._font_size;
      const y = this._drops[t] * this._font_size;
      this.render_char(char, x, y);
      if (y > this._height && Math.random() > 0.975) {
        this._drops[t] = 0;
      }
      this._drops[t]++;
    }
  }
}
