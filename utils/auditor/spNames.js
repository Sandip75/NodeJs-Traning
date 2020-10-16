    // #region Audit SPNames
    function SPNames() {
        this.AddAudit = "usp_AddAudit";
        this.GetAuditData = "usp_GetAuditData";
        this.AddAuditXML = "usp_AddAuditXML";
    }
    // #endregion
    // #region Audit SPNames for TBOIN
    function SPNamesTBOINDIA() {
        SPNames.call(this);
        // this.AddAudit = "usp_AddAudit";
        // this.GetAuditData = "usp_GetAuditData";
        // this.AddAuditXML = "usp_AddAuditXML";
    }
    // #endregion
    // #region Audit SPNames for TBOH
    function SPNamesTBOH() {
        SPNames.call(this);
        this.AddAudit = "usp_AddAudit";
        this.GetAuditData = "usp_GetAuditData";
        this.AddAuditXML = "usp_AddAuditXML";
    }
    // #endregion

    //spNamesTBOINDIA.prototype = SPNames.prototype;
    SPNamesTBOINDIA.prototype = new SPNames();
    SPNamesTBOINDIA.prototype.constructor = SPNamesTBOINDIA;

    //spNamesTBOH.prototype = SPNames.prototype;
    SPNamesTBOH.prototype = new SPNames();
    SPNamesTBOH.prototype.constructor = SPNamesTBOH;

    module.exports = { 
        SPNames,
        SPNamesTBOINDIA,
        SPNamesTBOH
}
