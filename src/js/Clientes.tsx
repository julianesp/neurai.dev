export class Cliente
{
    nombreCliente: string
    direccion: string
    numCelular: Number

    constructor(nombreCliente: string, direccion: string, numCelular: Number) {
        this.nombreCliente = nombreCliente
        this.direccion = direccion
        this.numCelular = numCelular
    }

    get getNombreCliente() {
        return this.nombreCliente
    }
    
    set setNombreCliente(nombre: string) {
        this.nombreCliente = nombre
    }

}