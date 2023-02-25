function catAndMouse(x, y, z) {
    let disA = Math.abs(x-z)
    let disB = Math.abs(z-y)
    if (disA < disB){
        return "Cat A"
    }
    else if(disA > disB){
        return "Cat B"
        
    }
    else{
        return "Mouse C"
        
    }


}