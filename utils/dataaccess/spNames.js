    // #region Audit SPNames
    function SPNames() {
        this.GetCountry = "usp_GetVisaCountry";
        this.GetCity = "usp_GetVisaCity";
        this.GetDistrict = "usp_GetVisaDistrict";
        this.GetSubDistrict = "usp_GetVisaSubDistrict";
    }
    // #endregion
    // #region Audit SPNames for TBOIN
    function SPNamesTBOINDIA() {
        SPNames.call(this);
    }
    // #endregion
    // #region Audit SPNames for TBOH
    function SPNamesTBOH() {
        SPNames.call(this);
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