module.exports = { // #region EventType
    EventType: {
        // #region Common 1-100
        Login: 1,
        Logout: 2,
        Exception: 3,
        Email: 4,
        Configuration: 5,
        Cache: 6,
        Authentication: 7,
        Authorization: 8,
        LoadAgency: 9,
        LoadAllAgency: 10,
        LoadMember: 11,
        LoadAgencyDetails: 12,
        GetAgencyBalance: 13,
        LoadRoles: 14,
        OnBehalfAgencyUserPreference: 15,
        LoadNationalityAndCountry: 16,
        LoadCity: 17,
        LoadDistrict: 18,
        LoadSubDistrict: 19,
        ServiceResponse: 20,
        TBOWallet:21,
        TBOWalletOrderKey:22,
        TBOWalletWidgetRequest:23,
        PaymentGateway:24,
        GetRateOfExchange:25,
        // #endregion

        // #region Search Page 101 -200
        Search: 101,
        SearchResult: 102,
        TravellerDetails: 103,
        SaveApplicantDetails: 104,
        ReviewDetails: 105,
        UploadDocuments: 106,
        GetDocuments: 107,
        Book: 108,
        GetBooking: 109,
        CheckStatus : 110,
        RaiseInvoice : 111 ,
        ViewInvoice : 112,
        GetBookingQueue:113,
        GetPendingBookingQueue:114

        // #endregion
    },
    // #endregion

    // #region Severity
    Severity: {
        High: 1,
        Low: 2,
        Normal: 3
    },
    // #endregion

    // #region ConnectionModuleType
    ConnectionModuleType: {
        NotSet: 0,
        ServiceDB: 1,
        AuditDB: 2
    },
    // #endregion

    //#region ClientId
    ClientId: {
        NotSet: 0,
        TBOINDIA: 1,
        TBOH: 2
    }
    //#endregion
};
