/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-12-2025
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente para representar un producto en la página de detalle de pedido
**/
import { LightningElement, api } from 'lwc';
export default class ProductComponent extends LightningElement {
    @api nameOfProduct;
    @api priceOfProduct;
    @api descriptionOfProduct;
    @api imageOfProduct;
    @api isAvailable;
    btnStyleDecrease = 'btn-off';
    btnStyleIncrease = 'btn-on';
    quantityOfProduct = 1;

    decreaseQuantity(){
        if(this.quantityOfProduct > 1) {
            this.quantityOfProduct--;
            this.btnStyleDecrease = 'btn-on';
            this.btnStyleIncrease = 'btn-on';
        } else {
            this.btnStyleDecrease = 'btn-off';
            this.btnStyleIncrease = 'btn-on';
        }
    }
    
    increaseQuantity(){
        this.quantityOfProduct++;
        this.btnStyleDecrease = 'btn-on';
        this.btnStyleIncrease = 'btn-on';
    }
}