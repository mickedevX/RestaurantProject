/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-12-2025
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement, wire } from 'lwc';
import getProducts from '@salesforce/apex/SearchAvailableProducts.getProducts';

export default class ContainerProducts extends LightningElement {
    listaProductos = [];

    // async connectedCallback() {
    //     try {
    //         this.listaProductos = await getProducts();
    //     } catch (error) {
    //         console.error('Error al obtener productos:', error);
    //     }
    // }

    @wire(getProducts)
    wiredProducts({ error, data }) {
        if (data) {
            // La función map() crea un nuevo array transformando cada elemento del array original
            // En este caso, por cada producto en data:
            // 1. Toma los campos del objeto Producto__c (Id, Name, Precio__c, etc)
            // 2. Crea un nuevo objeto con propiedades renombradas (id, name, price, etc)
            // 3. Almacena el array resultante en this.listaProductos
            this.listaProductos = data.map(producto => ({
                id: producto.Id,
                name: producto.Name, 
                price: producto.Precio__c,
                description: producto.Descripcion__c,
                image: producto.Imagen__c
            }));
        } else if (error) {
            console.error('Error al obtener productos:', error);
        }
    }
}