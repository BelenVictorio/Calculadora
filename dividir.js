function dividir (a,b) { 
    if (a == 0) {
        return "No se puede dividir por cero"
    } else if (b == 0) {
        return "No se puede dividir por cero"
    } else {
        return a / b;
    }
    
}

module.exports = dividir;