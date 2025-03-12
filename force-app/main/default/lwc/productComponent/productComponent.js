/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-12-2025
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement } from 'lwc';
import getProducts from '@salesforce/apex/SearchAvailableProducts.getProducts';

export default class ProductComponent extends LightningElement {
    products = [];

    async connectedCallback(){
        try {
            this.products = await getProducts();
            console.log('products', this.products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    }
}