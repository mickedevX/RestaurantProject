/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-13-2025
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex para insertar un pedido
**/
public with sharing class InsertPedidoController {
    @AuraEnabled(cacheable=false)
    public static void insertPedido(Integer numeroMesa) {
        try {
            // Crear una lista para almacenar el pedido y hacer un solo insert
            List<Pedido__c> pedidosParaInsertar = new List<Pedido__c>();
            
            // Crear el nuevo pedido
            Pedido__c nuevoPedido = new Pedido__c(
                Mesa__c = numeroMesa,
                Estado_de_pago__c = 'Pendiente',
                Estado_del_pedido__c = 'Pendiente',
                Fecha_Hora_del_pedido__c = DateTime.now()
            );
            pedidosParaInsertar.add(nuevoPedido);
            
            // Realizar una sola operación DML
            if(!pedidosParaInsertar.isEmpty()) {
                insert pedidosParaInsertar;
            }
            
        } catch (Exception e) {
            // Incluir más detalles del error para mejor diagnóstico
            throw new AuraHandledException('Error al insertar pedido: ' + e.getMessage() + ' - ' + e.getStackTraceString());
        }
    }
}