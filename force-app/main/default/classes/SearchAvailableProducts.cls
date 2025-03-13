/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-12-2025
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex para la consulta de productos disponibles
 **/
public without sharing class SearchAvailableProducts {
    @AuraEnabled(cacheable=true)
    public static List<Producto__c> getProducts(){
        try {
            List<Producto__c> products = [SELECT Id, Name, Descripcion__c, Precio__c, Imagen__c FROM Producto__c WHERE Status__c = true];
            return products;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage()+e.getStackTraceString());
        }
    }
}