class tv{
  constructor(channel=1,price,inches,onOff,volume=50){
    this.channel=channel
    this.price=price
    this.inches=inches
    this.onOff=onOff
    this.volume=volume
    this.brand="sony"
  }

  increaseVol(inc){
    if(this.volume>=100){
      console.log("Volume is maximum")
    }else{
      this.volume+=inc
      if(this.volume>100)this.volume=100
    }
  }

  decreaseVol(dec){
    if(this.volume===0){
      console.log("Volume is minimum")
    }else{
      this.volume-=dec
      if(this.volume<0)this.volume=0
    }
  }

  setChannel(num){
    if(this.channel>50) this.channel=50
    else this.channel=num
  }

  reset(){
    this.channel=1
    this.volume=50
  }

  status(){

    console.log(this.brand + " at channel "+ this.channel+", volume "+this.volume)
  }
}

let newTv = new tv(1,5000,40,"ON",50)
newTv.decreaseVol(20)
console.log(newTv.volume)
newTv.decreaseVol(100)
console.log(newTv.volume)
newTv.increaseVol(10)
console.log(newTv.volume)
newTv.status()


class plasma extends tv{
  constructor(channel=1,price,inches,onOff,volume=50,thickness, energy, life, refrate){
    super(channel=1,price,inches,onOff,volume=50)
    this.thickness = thickness
    this.energy=energy
    this.life=life
    this.refrate=refrate
  }

  viewingAngle(){
    console.log("Viewing angle is 40 percent up")
  }

  backlight(){
    console.log("Has Backlight of intensity 10")
  }

  displayDetails(){
    console.log("brand: "+this.brand)
    console.log("thickness: "+this.thickness)
    console.log("energy usage: "+ this.energy)
    console.log("lifespan: "+ this.life)
    console.log("refresh rate: "+ this.refrate)
  }
}


let sonyTv = new plasma(1,5000,40,"ON",50,thickness=10, energy=25,life="10years",refrate="60fps")
sonyTv.displayDetails()
