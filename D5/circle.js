class circle{
  constructor(radius, color){
    this.radius=radius
    this.color=color
  }

  getRadius(){
    return this.radius
  }
  getColor(){
    return this.color
  }

  setRadius(r){
    this.radius=r
  }

  setColor(c){
    this.color=c
  }

  getArea(){
    return 3.14*this.radius**2
  }
}

let cir = new circle(4,"red")

console.log(cir.getColor())
console.log(cir.getRadius())

console.log(cir.getArea())

cir.setRadius(10)
console.log(cir.getArea())
