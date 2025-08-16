sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("com.sp.cust.customer.controller.Overview", {
        onInit() {
            let oModel = new JSONModel( {
                firstname: "MaxBulla",
                age: 27,
                iseditable : true
            })
            this.getView().setModel(oModel);
        }
    });
});