export class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = color;
  }

  update(mouse: { x: number, y: number }) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Re-position particles that leave the canvas
    if (this.size > 0.2) this.size -= 0.03;

    if (this.x > window.innerWidth || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > window.innerHeight || this.y < 0) {
      this.speedY *= -1;
    }

    // Make particle react to cursor
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
      this.speedX += dx / distance;
      this.speedY += dy / distance;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
}

