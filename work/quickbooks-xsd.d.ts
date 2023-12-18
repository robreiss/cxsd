/* eslint-disable */
// @ts-nocheck

/** Account is a component of a Chart Of Accounts, and
  * is part of a Ledger. Used to record a total monetary amount
  * allocated against a specific use.
  * Accounts are one of five basic types: asset, liability, revenue (income),
  * expenses, or equity. */
export interface Account extends IntuitEntity {
  /** Product: ALL
    * Description: Display Name of the
    * account that will be shown in Transaction Forms based on Account
    * Category
    * ValidRange: QBO: Max=100 */
  AccountAlias?: string;
  /** Product: ALL
    * Description: extension place holder
    * for Account. */
  AccountEx?: IntuitAnyType;
  /** Product: QBO
    * Description: Internal use only: Account purpose indicates the mapping of the
    * chart-of-account to a purpose (eg: DEFAULT_QB_CASH_CHECKING_ACCOUNT). A chart-of-account
    * can have multiple account purpose mapping. */
  AccountPurposes?: ReferenceType[];
  /** Product: QBO
    * Description: AccountSubTypeEnum
    * specificies QBO on detail type. If not specified default value
    * are listed for each SubType */
  AccountSubType?: string;
  /** Product: ALL
    * Description: Type is a detailed
    * account classification that specifies the use of this account.
    * 16 type of account subtypes available in AccountTypeEnum
    * Filterable: QBW
    * Required: ALL */
  AccountType?: AccountTypeEnum;
  /** Product: ALL
    * Description: User entered/specified account number
    * to help the user in identifying the account within the
    * chart-of-accounts and in deciding what should be posted to the
    * account.
    *
    * Examples of numbering accounts:
    *
    * 1000s: Assets
    * 2000s: Liabilities
    * 3000s: Equity
    * 4000s: Income
    * 5000s: Cost of Sales
    * 6000s, 7000s: Other operating expenses
    * 8000s: Other income
    * 9000s: Other expenses
    *
    * ValidRange: QBW: max=7 */
  AcctNum?: string;
  /** Product: QBO
    * Description: An extension to the base account number that can be added to
    * Customer A/R or Supplier A/P accounts. */
  AcctNumExtn?: string;
  /** Product: ALL
    * Description: Whether or not active
    * inactive accounts may be hidden from most display purposes and
    * may not be posted to.
    * Filterable: QBW */
  Active?: boolean;
  /** Product: QBW
    * Description: Bank Account Number,
    * should include routing number whatever else depending upon the
    * context, this may be the credit card number or the checking
    * account number, etc.
    * ValidRange: QBW: max=25 */
  BankNum?: string;
  /** Product: ALL
    * Description: 5 types of
    * classification an account classified. Suggested examples of
    * account type are Asset, Equity, Expense, Liability, Revenue
    * Filterable: QBW */
  Classification?: AccountClassificationEnum;
  /** Product: ALL
    * Description: Reference to the
    * Currency that this account will hold the amounts in. */
  CurrencyRef?: ReferenceType;
  /** Product: ALL
    * Description: Specifies the balance
    * amount for the current Account. Valid for Balance Sheet
    * accounts.
    * InputType: QBW: ReadOnly */
  CurrentBalance?: number;
  /** Product: ALL
    * Description: Specifies the
    * cumulative balance amount for the current Account and all its
    * sub-accounts.
    * InputType: QBW: ReadOnly */
  CurrentBalanceWithSubAccounts?: number;
  /** Product: ALL
    * Description: User entered
    * description for the account, which may include user entered
    * information to guide bookkeepers/accountants in deciding what
    * journal entries to post to the account.
    * ValidRange: QBW: Max=200
    * ValidRange: QBO: Max=100 */
  Description?: string;
  /** Product: ALL
    * Description: Indicates the name of
    * financial institution name if Account is linked with Online
    * banking. Valid only if account is online banking enabled. This
    * is optional and read-only.
    * InputType: ALL: ReadOnly */
  FIName?: string;
  /** Product: ALL
    * Description: Fully qualified name
    * of the entity. The fully qualified name prepends the topmost
    * parent, followed by each sub element separated by colons. Takes
    * the form of: [br /] Parent:Account1:SubAccount1:SubAccount2
    * InputType: ReadOnly */
  FullyQualifiedName?: string;
  /** Product: QBO
    * Description: The Journal Code that is associated with the account. This is
    * required only for Bank accounts. This is applicable only in FR.
    * InputType: ALL: ReadOnly */
  JournalCodeRef?: ReferenceType;
  /** User recognizable name for the Account.[br /]
    * Product: ALL
    * Required: ALL
    * Filterable: QBW
    * ValidRange: QBW: Max=31
    * ValidRange: QBO: Max=100 */
  Name?: string;
  /** Product: ALL
    * Description: Indicates if the
    * Account is linked with Online Banking feature (automatically
    * download transactions) of QuickBooks Online or QuickBooks
    * Desktop. Null or false indicates not linked with online banking.
    * True if Online banking based download is enabled for this
    * account.
    * InputType: ALL: ReadOnly */
  OnlineBankingEnabled?: boolean;
  /** Product: ALL
    * Description: Specifies the Opening
    * Balance amount when creating a new Balance Sheet account. */
  OpeningBalance?: number;
  /** Product: ALL
    * Description: Specifies the Date of
    * the Opening Balance amount when creating a new Balance Sheet
    * account. */
  OpeningBalanceDate?: Date;
  /** Product: ALL
    * Description: Specifies the Parent AccountId if this
    * represents a SubAccount. Else null or empty */
  ParentRef?: ReferenceType;
  /** Product: ALL
    * Description: Specifies the Account is a SubAccount or Not. True if
    * subaccount, false or null if it is top-level account */
  SubAccount?: boolean;
  /** Product: ALL
    * Description: Describes if the
    * account is taxable */
  TaxAccount?: boolean;
  /** Product: QBW
    * Description: If the account is
    * taxable, refers to taxcode reference if applicable
    * I18n: QBW:
    * GlobalOnly */
  TaxCodeRef?: ReferenceType;
  /** Product: ALL
    * Description: Location Type for the
    * Transaction.
    * ValidRange: QBO: Max=50 */
  TxnLocationType?: string;
}

/** Product: ALL
  * Description: Account based expense
  * detail for a transaction line. */
export interface AccountBasedExpenseLineDetail {
  /** Product: ALL
    * Description: Reference to the Expense
    * account associated with the service/non-sellable-item billing. */
  AccountRef?: ReferenceType;
  /** Product: ALL
    * Description: The billable status of
    * the expense.[br /] */
  BillableStatus?: BillableStatusEnum;
  /** Product: ALL
    * Description: Reference to the Class
    * associated with the expense. */
  ClassRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to the
    * Customer associated with the expense. */
  CustomerRef?: ReferenceType;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for ExpenseDetail */
  ExpenseDetailLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Markup information for
    * the expense. */
  MarkupInfo?: MarkupInfo;
  /** Product: ALL
    * Description: Sales tax associated
    * with the expense. */
  TaxAmount?: number;
  /** Product: ALL
    * Description: Sales tax code
    * associated with the sales tax for the expense. */
  TaxCodeRef?: ReferenceType;
  /** Product: QBO
    * Description: Indicates the total
    * amount of line item including tax. */
  TaxInclusiveAmt?: number;
}

/** Product: ALL
  * Description: Enumeration of basic
  * Account types used generally in the accounting activities. */
export type AccountClassificationEnum = keyof typeof AccountClassificationEnum;
export const AccountClassificationEnum = Object.freeze({
  "Asset": "Asset",
  "Equity": "Equity",
  "Expense": "Expense",
  "Liability": "Liability",
  "Revenue": "Revenue"
});

/** Product: QBO
  * Description: Enumeration of Account
  * sub-types used to specifically categorize account types in
  * QuickBooks Online. */
export type AccountSubTypeEnum = keyof typeof AccountSubTypeEnum;
export const AccountSubTypeEnum = Object.freeze({
  "IncomeTaxPayable": "IncomeTaxPayable",
  "IntangibleAssetsOther": "IntangibleAssetsOther",
  "AccountsPayable": "AccountsPayable",
  "AccountsReceivable": "AccountsReceivable",
  "AccumulatedAdjustment": "AccumulatedAdjustment",
  "AccumulatedAmortization": "AccumulatedAmortization",
  "AccumulatedAmortizationOfOtherAssets": "AccumulatedAmortizationOfOtherAssets",
  "AccumulatedDepletion": "AccumulatedDepletion",
  "AccumulatedDepreciation": "AccumulatedDepreciation",
  "AdvertisingPromotional": "AdvertisingPromotional",
  "AllowanceForBadDebts": "AllowanceForBadDebts",
  "Amortization": "Amortization",
  "Auto": "Auto",
  "BadDebts": "BadDebts",
  "BankCharges": "BankCharges",
  "Buildings": "Buildings",
  "CashOnHand": "CashOnHand",
  "CharitableContributions": "CharitableContributions",
  "Checking": "Checking",
  "CommonStock": "CommonStock",
  "CostOfLabor": "CostOfLabor",
  "CostOfLaborCos": "CostOfLaborCos",
  "CreditCard": "CreditCard",
  "DepletableAssets": "DepletableAssets",
  "Depreciation": "Depreciation",
  "DevelopmentCosts": "DevelopmentCosts",
  "DirectDepositPayable": "DirectDepositPayable",
  "DiscountsRefundsGiven": "DiscountsRefundsGiven",
  "DividendIncome": "DividendIncome",
  "DuesSubscriptions": "DuesSubscriptions",
  "EmployeeCashAdvances": "EmployeeCashAdvances",
  "Entertainment": "Entertainment",
  "EntertainmentMeals": "EntertainmentMeals",
  "EquipmentRental": "EquipmentRental",
  "EquipmentRentalCos": "EquipmentRentalCos",
  "EstimatedTaxes": "EstimatedTaxes",
  "ExchangeGainOrLoss": "ExchangeGainOrLoss",
  "FederalIncomeTaxPayable": "FederalIncomeTaxPayable",
  "FinanceCosts": "FinanceCosts",
  "FixedAssetComputers": "FixedAssetComputers",
  "FixedAssetCopiers": "FixedAssetCopiers",
  "FixedAssetFurniture": "FixedAssetFurniture",
  "FixedAssetPhone": "FixedAssetPhone",
  "FixedAssetPhotoVideo": "FixedAssetPhotoVideo",
  "FixedAssetSoftware": "FixedAssetSoftware",
  "FixedAssetOtherToolsEquipment": "FixedAssetOtherToolsEquipment",
  "FurnitureAndFixtures": "FurnitureAndFixtures",
  "GlobalTaxExpense": "GlobalTaxExpense",
  "GlobalTaxPayable": "GlobalTaxPayable",
  "GlobalTaxSuspense": "GlobalTaxSuspense",
  "GasAndFuel": "GasAndFuel",
  "Goodwill": "Goodwill",
  "Gratuity": "Gratuity",
  "DeferredRevenue": "DeferredRevenue",
  "Healthcare": "Healthcare",
  "HealthSavingsAccountContributions": "HealthSavingsAccountContributions",
  "HomeOffice": "HomeOffice",
  "HomeownerRentalInsurance": "HomeownerRentalInsurance",
  "Insurance": "Insurance",
  "InsurancePayable": "InsurancePayable",
  "IntangibleAssets": "IntangibleAssets",
  "InterestEarned": "InterestEarned",
  "InterestPaid": "InterestPaid",
  "Inventory": "Inventory",
  "Investment_MortgageRealEstateLoans": "Investment_MortgageRealEstateLoans",
  "Investment_Other": "Investment_Other",
  "Investment_TaxExemptSecurities": "Investment_TaxExemptSecurities",
  "Investment_USGovernmentObligations": "Investment_USGovernmentObligations",
  "Land": "Land",
  "LeaseBuyout": "LeaseBuyout",
  "LeaseholdImprovements": "LeaseholdImprovements",
  "LegalProfessionalFees": "LegalProfessionalFees",
  "Licenses": "Licenses",
  "LineOfCredit": "LineOfCredit",
  "LoanPayable": "LoanPayable",
  "LoansToOfficers": "LoansToOfficers",
  "LoansToOthers": "LoansToOthers",
  "LoansToStockholders": "LoansToStockholders",
  "MachineryAndEquipment": "MachineryAndEquipment",
  "MoneyMarket": "MoneyMarket",
  "MortgageInterestHomeOffice": "MortgageInterestHomeOffice",
  "NonProfitIncome": "NonProfitIncome",
  "NotesPayable": "NotesPayable",
  "OfficeGeneralAdministrativeExpenses": "OfficeGeneralAdministrativeExpenses",
  "OpeningBalanceEquity": "OpeningBalanceEquity",
  "OrganizationalCosts": "OrganizationalCosts",
  "OtherBusinessExpenses": "OtherBusinessExpenses",
  "OtherCostsOfServiceCos": "OtherCostsOfServiceCos",
  "OtherCurrentAssets": "OtherCurrentAssets",
  "OtherCurrentLiabilities": "OtherCurrentLiabilities",
  "OtherFixedAssets": "OtherFixedAssets",
  "OtherHomeOfficeExpenses": "OtherHomeOfficeExpenses",
  "OtherInvestmentIncome": "OtherInvestmentIncome",
  "OtherLongTermAssets": "OtherLongTermAssets",
  "OtherLongTermLiabilities": "OtherLongTermLiabilities",
  "OtherMiscellaneousExpense": "OtherMiscellaneousExpense",
  "OtherMiscellaneousIncome": "OtherMiscellaneousIncome",
  "OtherMiscellaneousServiceCost": "OtherMiscellaneousServiceCost",
  "OtherPrimaryIncome": "OtherPrimaryIncome",
  "OtherVehicleExpenses": "OtherVehicleExpenses",
  "OwnersEquity": "OwnersEquity",
  "PaidInCapitalOrSurplus": "PaidInCapitalOrSurplus",
  "ParkingAndTolls": "ParkingAndTolls",
  "PartnerContributions": "PartnerContributions",
  "PartnerDistributions": "PartnerDistributions",
  "PartnersEquity": "PartnersEquity",
  "PayrollClearing": "PayrollClearing",
  "PayrollExpenses": "PayrollExpenses",
  "PayrollTaxExpenses": "PayrollTaxExpenses",
  "PayrollWageExpenses": "PayrollWageExpenses",
  "PayrollTaxPayable": "PayrollTaxPayable",
  "PenaltiesSettlements": "PenaltiesSettlements",
  "PersonalExpense": "PersonalExpense",
  "PersonalIncome": "PersonalIncome",
  "PreferredStock": "PreferredStock",
  "PrepaidExpenses": "PrepaidExpenses",
  "PrepaidExpensesPayable": "PrepaidExpensesPayable",
  "PromotionalMeals": "PromotionalMeals",
  "PropertyTaxHomeOffice": "PropertyTaxHomeOffice",
  "RentAndLeaseHomeOffice": "RentAndLeaseHomeOffice",
  "RentOrLeaseOfBuildings": "RentOrLeaseOfBuildings",
  "RentsHeldInTrust": "RentsHeldInTrust",
  "RentsInTrustLiability": "RentsInTrustLiability",
  "RepairsAndMaintainceHomeOffice": "RepairsAndMaintainceHomeOffice",
  "RepairMaintenance": "RepairMaintenance",
  "Retainage": "Retainage",
  "RetainedEarnings": "RetainedEarnings",
  "SalesOfProductIncome": "SalesOfProductIncome",
  "SalesTaxPayable": "SalesTaxPayable",
  "Savings": "Savings",
  "SecurityDeposits": "SecurityDeposits",
  "ServiceFeeIncome": "ServiceFeeIncome",
  "ShareholderNotesPayable": "ShareholderNotesPayable",
  "ShippingFreightDelivery": "ShippingFreightDelivery",
  "ShippingFreightDeliveryCos": "ShippingFreightDeliveryCos",
  "StateLocalIncomeTaxPayable": "StateLocalIncomeTaxPayable",
  "SuppliesMaterials": "SuppliesMaterials",
  "SuppliesMaterialsCogs": "SuppliesMaterialsCogs",
  "TaxesPaid": "TaxesPaid",
  "TaxExemptInterest": "TaxExemptInterest",
  "Travel": "Travel",
  "TravelMeals": "TravelMeals",
  "TreasuryStock": "TreasuryStock",
  "TrustAccounts": "TrustAccounts",
  "TrustAccountsLiabilities": "TrustAccountsLiabilities",
  "UnappliedCashBillPaymentExpense": "UnappliedCashBillPaymentExpense",
  "UnappliedCashPaymentIncome": "UnappliedCashPaymentIncome",
  "UndepositedFunds": "UndepositedFunds",
  "Utilities": "Utilities",
  "Communications": "Communications",
  "UtilitiesHomeOffice": "UtilitiesHomeOffice",
  "Vehicle": "Vehicle",
  "VehicleInsurance": "VehicleInsurance",
  "VehicleLease": "VehicleLease",
  "VehicleLoan": "VehicleLoan",
  "VehicleLoanInterest": "VehicleLoanInterest",
  "VehicleRegistration": "VehicleRegistration",
  "VehicleRepairs": "VehicleRepairs",
  "Vehicles": "Vehicles",
  "WashAndRoadServices": "WashAndRoadServices",
  "WithholdingTaxSales": "WithholdingTaxSales",
  "WithholdingTaxPurchases": "WithholdingTaxPurchases",
  "WithholdingAssetAmount": "WithholdingAssetAmount",
  "WithholdingLiabilityAmount": "WithholdingLiabilityAmount",
  "WithholdingTaxSuspense": "WithholdingTaxSuspense",
  "DevelopmentCosts": "DevelopmentCosts",
  "ProvisionsCurrentAssets": "ProvisionsCurrentAssets",
  "OtherConsumables": "OtherConsumables",
  "ExpenditureAuthorisationsAndLettersOfCredit": "ExpenditureAuthorisationsAndLettersOfCredit",
  "InternalTransfers": "InternalTransfers",
  "ProvisionsFixedAssets": "ProvisionsFixedAssets",
  "AssetsInCourseOfConstruction": "AssetsInCourseOfConstruction",
  "ParticipatingInterests": "ParticipatingInterests",
  "CumulativeDepreciationOnIntangibleAssets": "CumulativeDepreciationOnIntangibleAssets",
  "ProvisionsNonCurrentAssets": "ProvisionsNonCurrentAssets",
  "OutstandingDuesMicroSmallEnterprise": "OutstandingDuesMicroSmallEnterprise",
  "OutstandingDuesOtherThanMicroSmallEnterprise": "OutstandingDuesOtherThanMicroSmallEnterprise",
  "GlobalTaxRefund": "GlobalTaxRefund",
  "GlobalTaxDeferred": "GlobalTaxDeferred",
  "ProvisionsCurrentLiabilities": "ProvisionsCurrentLiabilities",
  "StaffAndRelatedLiabilityAccounts": "StaffAndRelatedLiabilityAccounts",
  "SocialSecurityAgencies": "SocialSecurityAgencies",
  "SundryDebtorsAndCreditors": "SundryDebtorsAndCreditors",
  "ProvisionsNonCurrentLiabilities": "ProvisionsNonCurrentLiabilities",
  "DebtsRelatedToParticipatingInterests": "DebtsRelatedToParticipatingInterests",
  "StaffAndRelatedLongTermLiabilityAccounts": "StaffAndRelatedLongTermLiabilityAccounts",
  "GovernmentAndOtherPublicAuthorities": "GovernmentAndOtherPublicAuthorities",
  "GroupAndAssociates": "GroupAndAssociates",
  "InvestmentGrants": "InvestmentGrants",
  "CashReceiptIncome": "CashReceiptIncome",
  "OwnWorkCapitalized": "OwnWorkCapitalized",
  "OperatingGrants": "OperatingGrants",
  "OtherCurrentOperatingIncome": "OtherCurrentOperatingIncome",
  "CostOfSales": "CostOfSales",
  "CashExpenditureExpense": "CashExpenditureExpense",
  "ExternalServices": "ExternalServices",
  "OtherExternalServices": "OtherExternalServices",
  "PurchasesRebates": "PurchasesRebates",
  "OtherRentalCosts": "OtherRentalCosts",
  "ProjectStudiesSurveysAssessments": "ProjectStudiesSurveysAssessments",
  "Sundry": "Sundry",
  "StaffCosts": "StaffCosts",
  "OtherCurrentOperatingCharges": "OtherCurrentOperatingCharges",
  "ExtraordinaryCharges": "ExtraordinaryCharges",
  "AppropriationsToDepreciation": "AppropriationsToDepreciation",
  "AccrualsAndDeferredIncome": "AccrualsAndDeferredIncome",
  "CurrentTaxLiability": "CurrentTaxLiability",
  "DeferredTax": "DeferredTax",
  "DistributionCosts": "DistributionCosts",
  "Investments": "Investments",
  "LongTermBorrowings": "LongTermBorrowings",
  "OtherIntangibleAssets": "OtherIntangibleAssets",
  "PrepaymentsAndAccruedIncome": "PrepaymentsAndAccruedIncome",
  "ShortTermBorrowings": "ShortTermBorrowings",
  "ProvisionForLiabilities": "ProvisionForLiabilities",
  "CalledUpShareCapital": "CalledUpShareCapital",
  "CalledUpShareCapitalNotPaid": "CalledUpShareCapitalNotPaid",
  "LandAsset": "LandAsset",
  "AvailableForSaleFinancialAssets": "AvailableForSaleFinancialAssets",
  "ProvisionForWarrantyObligations": "ProvisionForWarrantyObligations",
  "CurrentPortionEmployeeBenefitsObligations": "CurrentPortionEmployeeBenefitsObligations",
  "LongTermEmployeeBenefitObligations": "LongTermEmployeeBenefitObligations",
  "ObligationsUnderFinanceLeases": "ObligationsUnderFinanceLeases",
  "BankLoans": "BankLoans",
  "InterestPayables": "InterestPayables",
  "GainLossOnSaleOfInvestments": "GainLossOnSaleOfInvestments",
  "GainLossOnSaleOfFixedAssets": "GainLossOnSaleOfFixedAssets",
  "ShareCapital": "ShareCapital",
  "CurrentPortionOfObligationsUnderFinanceLeases": "CurrentPortionOfObligationsUnderFinanceLeases",
  "AssetsHeldForSale": "AssetsHeldForSale",
  "AccruedLiabilities": "AccruedLiabilities",
  "AccruedLongLermLiabilities": "AccruedLongLermLiabilities",
  "AccruedVacationPayable": "AccruedVacationPayable",
  "CashAndCashEquivalents": "CashAndCashEquivalents",
  "CommissionsAndFees": "CommissionsAndFees",
  "AmortizationExpense": "AmortizationExpense",
  "LossOnDiscontinuedOperationsNetOfTax": "LossOnDiscontinuedOperationsNetOfTax",
  "ManagementCompensation": "ManagementCompensation",
  "OtherSellingExpenses": "OtherSellingExpenses",
  "LiabilitiesRelatedToAssetsHeldForSale": "LiabilitiesRelatedToAssetsHeldForSale",
  "LongTermDebit": "LongTermDebit",
  "EquityInEarningsOfSubsiduaries": "EquityInEarningsOfSubsiduaries",
  "OtherOperatingIncome": "OtherOperatingIncome",
  "RevenueGeneral": "RevenueGeneral",
  "DividendDisbursed": "DividendDisbursed",
  "FreightAndDeliveryCos": "FreightAndDeliveryCos",
  "ShippingAndDeliveryExpense": "ShippingAndDeliveryExpense",
  "TravelExpensesGeneralAndAdminExpenses": "TravelExpensesGeneralAndAdminExpenses",
  "TravelExpensesSellingExpense": "TravelExpensesSellingExpense",
  "UnrealisedLossOnSecuritiesNetOfTax": "UnrealisedLossOnSecuritiesNetOfTax",
  "SalesRetail": "SalesRetail",
  "SalesWholesale": "SalesWholesale",
  "AccumulatedOtherComprehensiveIncome": "AccumulatedOtherComprehensiveIncome",
  "AssetsAvailableForSale": "AssetsAvailableForSale",
  "LossOnDisposalOfAssets": "LossOnDisposalOfAssets",
  "NonCurrentAssets": "NonCurrentAssets",
  "IncomeTaxExpense": "IncomeTaxExpense",
  "LongTermInvestments": "LongTermInvestments",
  "DividendsPayable": "DividendsPayable",
  "TradeAndOtherReceivables": "TradeAndOtherReceivables",
  "TradeAndOtherPayables": "TradeAndOtherPayables",
  "CurrentLiabilities": "CurrentLiabilities",
  "SavingsByTaxScheme": "SavingsByTaxScheme",
  "BorrowingCost": "BorrowingCost",
  "Depletion": "Depletion",
  "ExceptionalItems": "ExceptionalItems",
  "PriorPeriodItems": "PriorPeriodItems",
  "ExtraordinaryItems": "ExtraordinaryItems",
  "MatCredit": "MatCredit",
  "OtherFreeReserves": "OtherFreeReserves",
  "CapitalReserves": "CapitalReserves",
  "Funds": "Funds",
  "MoneyReceivedAgainstShareWarrants": "MoneyReceivedAgainstShareWarrants",
  "ShareApplicationMoneyPendingAllotment": "ShareApplicationMoneyPendingAllotment",
  "DeferredTaxLiabilities": "DeferredTaxLiabilities",
  "OtherLongTermProvisions": "OtherLongTermProvisions",
  "CapitalWip": "CapitalWip",
  "IntangibleAssetsUnderDevelopment": "IntangibleAssetsUnderDevelopment",
  "OtherLongTermInvestments": "OtherLongTermInvestments",
  "LongTermLoansAndAdvancesToRelatedParties": "LongTermLoansAndAdvancesToRelatedParties",
  "OtherLongTermLoansAndAdvances": "OtherLongTermLoansAndAdvances",
  "ShortTermInvestmentsInRelatedParties": "ShortTermInvestmentsInRelatedParties",
  "OtherEarmarkedBankAccounts": "OtherEarmarkedBankAccounts",
  "ShortTermLoansAndAdvancesToRelatedParties": "ShortTermLoansAndAdvancesToRelatedParties",
  "DeferredTaxExpense": "DeferredTaxExpense",
  "IncomeTaxOtherExpense": "IncomeTaxOtherExpense",
  "DutiesAndTaxes": "DutiesAndTaxes",
  "BalWithGovtAuthorities": "BalWithGovtAuthorities",
  "TaxRoundoffGainOrLoss": "TaxRoundoffGainOrLoss",
  "OtherDebtors": "OtherDebtors",
  "RentARoomReliefRentsReceived": "RentARoomReliefRentsReceived",
  "UkTaxesWithheld": "UkTaxesWithheld",
  "ForeignTaxesIncurred": "ForeignTaxesIncurred",
  "PremiumsReceived": "PremiumsReceived",
  "PremiumsPaid": "PremiumsPaid",
  "FinanceCostsRestricted": "FinanceCostsRestricted",
  "CarriedForwardRelief": "CarriedForwardRelief",
  "RentARoomReliefReliefClaimed": "RentARoomReliefReliefClaimed"
});

/** Product: ALL
  * Description: Enumeration of Account
  * sub-types(QBW) and Account types(QBO) used to specifically
  * categorize accounts. Note: QBO doesn't support the "Non-Posting"
  * Account type. */
export type AccountTypeEnum = keyof typeof AccountTypeEnum;
export const AccountTypeEnum = Object.freeze({
  "Bank": "Bank",
  "Accounts Receivable": "Accounts Receivable",
  "Other Current Asset": "Other Current Asset",
  "Fixed Asset": "Fixed Asset",
  "Other Asset": "Other Asset",
  "Accounts Payable": "Accounts Payable",
  "Credit Card": "Credit Card",
  "Other Current Liability": "Other Current Liability",
  "Long Term Liability": "Long Term Liability",
  "Equity": "Equity",
  "Income": "Income",
  "Cost of Goods Sold": "Cost of Goods Sold",
  "Expense": "Expense",
  "Other Income": "Other Income",
  "Other Expense": "Other Expense",
  "Non-Posting": "Non-Posting"
});

/** enumeration of how the Fixed Asset has been
  * acquired */
export type AcquiredAsEnum = keyof typeof AcquiredAsEnum;
export const AcquiredAsEnum = Object.freeze({
  "New": "New",
  "Used": "Used"
});

/** QBW: only. Defines advance inventory Prefs details */
export interface AdvancedInventoryPrefs {
  /** Product: QBW
    * Description: Indicates whether
    * barcoding is enabled */
  BarcodeEnabled?: boolean;
  /** QBW: Only QBW supported */
  EnhancedInventoryReceivingEnabled?: boolean;
  /** QBW: only */
  FIFOEffectiveDate?: Date;
  /** QBW: ONLY. */
  FIFOEnabled?: boolean;
  /** QBW: ONLY. MLI available */
  MLIAvailable?: boolean;
  /** QBW: ONLY. MLI enabled */
  MLIEnabled?: boolean;
  /** Product: QBW
    * Description: Indicates whether
    * Row/Shelf/Bin location tracking is enabled */
  RowShelfBinEnabled?: boolean;
  /** QBW: only */
  TrackingOnBuildAssemblyEnabled?: boolean;
  /** QBW: only */
  TrackingOnInventoryAdjustmentEnabled?: boolean;
  /** QBW: only */
  TrackingOnPurchaseTransactionsEnabled?: boolean;
  /** QBW: only */
  TrackingOnSalesTransactionsEnabled?: boolean;
  /** QBW: only */
  TrackingSerialOrLotNumber?: boolean;
}

/** Enumeration of payment methods that can be used to pay tax agency */
export type AgencyPaymentMethodEnum = keyof typeof AgencyPaymentMethodEnum;
export const AgencyPaymentMethodEnum = Object.freeze({
  "ACH_CREDIT": "ACH_CREDIT",
  "ACH_DEBIT": "ACH_DEBIT",
  "CHECK": "CHECK",
  "WIRE": "WIRE",
  "OTHER": "OTHER"
});

/** Product: ALL
  * Description: Enumeration of Credit Card
  * operation type: Charge or Credit. */
export type APCreditCardOperationEnum = keyof typeof APCreditCardOperationEnum;
export const APCreditCardOperationEnum = Object.freeze({
  "Charge": "Charge",
  "Credit": "Credit"
});

/** Product: ALL
  * Description: Describes the details of
  * the attachment. */
export interface Attachable extends IntuitEntity {
  /** Specifies extension entity to allow extension */
  AttachableEx?: IntuitAnyType;
  /** Category of the attachment */
  Category?: string;
  /** ContentType of the attachment */
  ContentType?: string;
  /** FullPath FileAccess URI of the attachment,
    * output only */
  FileAccessUri?: string;
  /** FileName of the attachment
    * Max Length: 1000 */
  FileName?: string;
  /** Latitude from where the attachment was
    * requested */
  Lat?: string;
  /** Longitude from where the attachment was
    * requested */
  Long?: string;
  /** Note for the attachment or standalone note */
  Note?: string;
  /** PlaceName from where the attachment was
    * requested */
  PlaceName?: string;
  /** Size of the attachment */
  Size?: number;
  /** Tag name for the requested attachment */
  Tag?: string;
  /** Output only. TempDownload URI which can be
    * directly downloaded by clients */
  TempDownloadUri?: string;
  /** FullPath FileAccess URI of the attachment
    * thumbnail if the attachment file is of a content type with
    * thumbnail support, output only */
  ThumbnailFileAccessUri?: string;
  /** Output only. Thumbnail TempDownload URI which
    * can be directly downloaded by clients. This is only available if
    * the attachment file is of a content type with thumbnail support */
  ThumbnailTempDownloadUri?: string;
}

/** Product: ALL
  * Description: Category values for
  * Attachable */
export type AttachableCategoryEnum = keyof typeof AttachableCategoryEnum;
export const AttachableCategoryEnum = Object.freeze({
  "Image": "Image",
  "Signature": "Signature",
  "Contact Photo": "Contact Photo",
  "Receipt": "Receipt",
  "Document": "Document",
  "Sound": "Sound",
  "Other": "Other"
});

/** Product: ALL
  * Description: Describes the details of the attachable and provides information such as where they are referenced and custom fields. */
export interface AttachableRef {
  /** Specifies extension entity to allow extension */
  AttachableRefEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Custom field (or data extension).
    * Filterable: ALL */
  CustomField?: CustomField[];
  /** Product: ALL
    * Description: Reference to the entity. */
  EntityRef?: ReferenceType;
  /** Product: ALL
    * Description: */
  IncludeOnSend?: boolean;
  /** Product: ALL
    * Description: */
  LineInfo?: string;
}

/** AttachableResponse entity describing the response of upload results */
export interface AttachableResponse {
  /** Upload file metat data */
  Attachable?: Attachable;
  /** Fault if upload file is not successful */
  Fault?: Fault;
}

export interface Attribute {
  /** Describes the Name */
  Type: string;
  /** Describes the Value */
  Value: string;
}

export interface Attributes {
  /** Describes the type */
  Attribute?: Attribute[];
}

/** QueryResponse entity describing the response of query */
export interface BatchItemRequest extends IntuitObjectProxyType {
  /** Specifies the batch id for which the response corresponds to */
  bId?: string;
  /** Specifies the batch id for which the response corresponds to */
  operation?: OperationEnum;
  /** Specifies name value pair of options other than operations */
  optionsData?: string;

  CDCQuery?: CDCQuery;
  Query?: string;
  ReportQuery?: string;
}

/** QueryResponse entity describing the response of query */
export interface BatchItemResponse extends IntuitObjectProxyType {
  /** Specifies the batch id for which the response corresponds to */
  bId?: string;

  /** Returns CascadeResponse in this envelop */
  CascadeResponse?: CascadeResponse;
  /** Returns CDCResponse in this envelop */
  CDCResponse?: CDCResponse;
  /** Fault or Object should be returned */
  Fault?: Fault;
  /** Returns QueryResponse entity in case of query */
  QueryResponse?: QueryResponse;
  /** Returns Report entity in case of report request */
  Report?: Report;
  /** Indication that a request was processed, but with possible exceptional circumstances (i.e. ignored unsupported fields) that the client may want to be aware of */
  Warnings?: Warnings;
}

/** Bill is an AP transaction representing a
  * request-for-payment from a third party for goods/services rendered
  * and/or received */
export interface Bill extends PurchaseByVendor {
  /** Product: ALL
    * Description: The unpaid amount of the bill. When paid-in-full, balance will
    * be zero.
    * [b]QuickBooks Notes[/b][br /]
    * Non QB-writable.
    * Filterable: QBW
    * Sortable: QBW */
  Balance?: number;
  /** Internal use only: extension place holder for
    * Bill. */
  BillEx?: IntuitAnyType;
  /** The nominal date by which the bill must be
    * paid, not including any early-payment discount incentives, or
    * late payment penalties. */
  DueDate?: Date;
  /** Product: ALL
    * Description: The unpaid amount of the bill in home currency. Available only
    * for companies where multicurrency is enabled. When paid-in-full,
    * home balance will be zero.
    * [b]QuickBooks Notes[/b][br /]
    * Non
    * QB-writable.
    * Filterable: QBW
    * Sortable: QBW */
  HomeBalance?: number;
  /** Product: QBO Only
    * Description: True if the Bill should be included in annual TPAR, specific to AU region. */
  IncludeInAnnualTPAR?: boolean;
  /** Product: All
    * Description: QBO: Indicates the
    * less cis amount of the transaction, specific to UK region companies */
  LessCIS?: number;
  /** Product: QBW
    * Description: Payer information */
  PayerRef?: ReferenceType;
  /** Address to which the payment should be sent.
    * [b]QuickBooks Notes[/b][br /]
    * Non QB-writable. */
  RemitToAddr?: PhysicalAddress;
  /** SalesTerm Reference for the bill */
  SalesTermRef?: ReferenceType;
  /** Address to which the vendor shipped or will
    * ship any goods associated with the purchase. */
  ShipAddr?: PhysicalAddress;
  /** Product: QBO
    * Description: Vendor Mailing Address */
  VendorAddr?: PhysicalAddress;
}

/** Product: ALL
  * Description: Enumeration of Billable
  * Status used when searching for reimbursable expenses. */
export type BillableStatusEnum = keyof typeof BillableStatusEnum;
export const BillableStatusEnum = Object.freeze({
  "Billable": "Billable",
  "NotBillable": "NotBillable",
  "HasBeenBilled": "HasBeenBilled"
});

/** Financial transaction representing a Payment by
  * check issued to pay one or more bills received from 3rd party
  * (vendor) for purchased goods or services. */
export interface BillPayment extends Transaction {
  /** Optional AP account specification for bill
    * payment transactions. Most small businesses have a single AP
    * account, so the account is implied. When specified, the account
    * must be a liability account - and further, must be of the
    * sub-type "Payables".
    * [b]QuickBooks Notes[/b][br /]
    * The AP Account
    * should always be specified or a default will be used. */
  APAccountRef?: ReferenceType;
  /** Internal use only: extension place holder for
    * BillPay */
  BillPaymentEx?: IntuitAnyType;
  CheckPayment?: BillPaymentCheck;
  CreditCardPayment?: BillPaymentCreditCard;
  /** Filterable: QBW */
  PayType?: BillPaymentTypeEnum;
  /** Product: ALL
    * Description: The total amount paid,
    * determined by taking the sum of all lines associated.
    * InputType:
    * QBW: ReadOnly
    * Filterable: QBW
    * Sortable: QBW */
  TotalAmt?: number;
  /** Product: QBO
    * Description: Vendor Mailing Address */
  VendorAddr?: PhysicalAddress;
  /** Identifies the party or organization that
    * originated the purchase of the goods, services or BillPayment.
    * [b]QuickBooks Notes[/b][br /]
    * Valid Vendor Name or Id is required
    * for the create operation for Bill Payment transactions.[br /]
    * Required for the create operation. */
  VendorRef?: ReferenceType;
}

export interface BillPaymentCheck {
  BankAccountRef?: ReferenceType;
  /** Internal use only: extension place holder for
    * BillPaymentCheck. */
  BillPaymentCheckEx?: IntuitAnyType;
  /** [b]QuickBooks Notes[/b][br /]
    * [i]Unsupported
    * field.[/i] */
  CheckDetail?: CheckPayment;
  /** Address to which the payment should be sent. */
  PayeeAddr?: PhysicalAddress;
  PrintStatus?: PrintStatusEnum;
}

export interface BillPaymentCreditCard {
  /** Internal use only: extension place holder for
    * BillPayTypeCreditCard */
  BillPaymentCreditCardEx?: IntuitAnyType;
  CCAccountRef?: ReferenceType;
  CCDetail?: CreditCardPayment;
}

/** Product: ALL
  * Description: Enumeration of bill
  * payment types. */
export type BillPaymentTypeEnum = keyof typeof BillPaymentTypeEnum;
export const BillPaymentTypeEnum = Object.freeze({
  "Check": "Check",
  "CreditCard": "CreditCard"
});

/** Product: ALL
  * Description: Provides for strong-typing of the BooleanType CustomField. */
export interface BooleanTypeCustomFieldDefinition extends CustomFieldDefinition {
  /** Product: ALL
    * Description: Default value of the BooleanType CustomField. */
  DefaultValue?: boolean;
}

/** Describes Budget specifications */
export interface Budget extends IntuitEntity {
  /** Product: QBO
    * Description: Active budget or inactive */
  Active?: boolean;
  /** Product: QBO
    * Description: Budget details are here */
  BudgetDetail?: BudgetDetail[];
  /** Product: QBO
    * Description: Budget Entry Type */
  BudgetEntryType?: BudgetEntryTypeEnum;
  /** Product: QBO
    * Description: Budget Type */
  BudgetType?: BudgetTypeEnum;
  /** Product: QBO
    * Description: End date of the budget */
  EndDate?: Date;
  /** Product: QBO
    * Description: Name of the budget */
  Name?: string;
  /** Product: QBO
    * Description: Starting date of the budget */
  StartDate?: Date;
}

/** Describes budget details for each budget */
export interface BudgetDetail {
  /** Product: QBO
    * Description: Account Reference */
  AccountRef?: ReferenceType;
  /** Product: QBO
    * Description: Amount corresponding to the budget date and Account or Class Or
    * Department or Customer */
  Amount?: number;
  /** Product: QBO
    * Description: Budget date of the budget */
  BudgetDate?: Date;
  /** Product: QBO
    * Description: Class Reference */
  ClassRef?: ReferenceType;
  /** Product: QBO
    * Description: Customer Reference */
  CustomerRef?: ReferenceType;
  /** Product: QBO
    * Description: Department Reference */
  DepartmentRef?: ReferenceType;
}

/** Product: ALL
  * Description: Enumeration of BudgetEntry Type */
export type BudgetEntryTypeEnum = keyof typeof BudgetEntryTypeEnum;
export const BudgetEntryTypeEnum = Object.freeze({
  "Yearly": "Yearly",
  "Quarterly": "Quarterly",
  "Monthly": "Monthly"
});

/** Product: ALL
  * Description: Enumeration of Budget Types */
export type BudgetTypeEnum = keyof typeof BudgetTypeEnum;
export const BudgetTypeEnum = Object.freeze({
  "ProfitAndLoss": "ProfitAndLoss",
  "BalanceSheet": "BalanceSheet"
});

/** Product: QBO Description: Object representing cascading events on entities resulting from a transaction event. Used by messaging. Not intended for external clients. */
export interface Cascade {
  /** Any IntuitEntity derived object name like Customer, Item, Invoice, ... */
  EntityName: string;
  /** Description: Unique identifier for an Intuit entity. */
  Id: string;
  /** Cascading events resulting from a transaction event in the form of key value pairs. Key names are user defined. */
  KeyValue?: NameValue[];
}

/** Product: QBO Description: Holder for a collection of Cascade objects. Used by messaging. Not intended for external clients. */
export interface CascadeResponse {
  /** Cascading events for an entity */
  Cascade?: Cascade[];
}

export interface CashBackInfo {
  /** AccountReferenceGroup Identifies the Asset
    * Account (bank account) to be used for this Cash back.
    * [b]QuickBooks Notes[/b][br /]
    * Required for the create operation.
    * [br /] */
  AccountRef?: ReferenceType;
  Amount?: number;
  Memo?: string;
}

/** Cash based expense type definition */
export interface CashPurchase {
  AccountRef?: ReferenceType;
}

/** Product: ALL
  * Description: Enumeration of AVSStreet and AVSZip match used in Credit Card payment transactions. */
export type CCAVSMatchEnum = keyof typeof CCAVSMatchEnum;
export const CCAVSMatchEnum = Object.freeze({
  "Fail": "Fail",
  "NotAvailable": "NotAvailable",
  "Pass": "Pass"
});

/** Product: ALL
  * Description: Enumeration of the status of the Credit Card payment transaction. */
export type CCPaymentStatusEnum = keyof typeof CCPaymentStatusEnum;
export const CCPaymentStatusEnum = Object.freeze({
  "Completed": "Completed",
  "Voided": "Voided",
  "Unknown": "Unknown"
});

/** Product: ALL
  * Description: Enumeration of Credit Card security code match used in Credit Card payment transactions. */
export type CCSecurityCodeMatchEnum = keyof typeof CCSecurityCodeMatchEnum;
export const CCSecurityCodeMatchEnum = Object.freeze({
  "Fail": "Fail",
  "NotAvailable": "NotAvailable",
  "Pass": "Pass"
});

/** Product: ALL
  * Description: Enumeration of Credit Card transaction modes used in Credit Card payment transactions. */
export type CCTxnModeEnum = keyof typeof CCTxnModeEnum;
export const CCTxnModeEnum = Object.freeze({
  "CardNotPresent": "CardNotPresent",
  "CardPresent": "CardPresent"
});

/** Product: ALL
  * Description: Enumeration of Credit Card transaction types used in Credit Card payment transactions. */
export type CCTxnTypeEnum = keyof typeof CCTxnTypeEnum;
export const CCTxnTypeEnum = Object.freeze({
  "Authorization": "Authorization",
  "Capture": "Capture",
  "Charge": "Charge",
  "Refund": "Refund",
  "VoiceAuthorization": "VoiceAuthorization"
});

/** CDCQuery entity describing need for query */
export interface CDCQuery {
  /** Time after which changes are required on the entities that are updated, created, deleted */
  ChangedSince?: Date;
  /** Coma separated entity list of entities required */
  Entities?: string;
}

/** QueryResponse entity describing the response of query */
export interface CDCResponse {
  /** Specifies the number of rows in this result */
  size?: number;

  /** Fault or Object should be returned */
  Fault?: Fault;
  /** Any IntuitEntity derived object like Customer, Invoice can be part of response */
  QueryResponse?: QueryResponse[];
}

/** Financial transaction representing a request for
  * credit on payment for
  * goods or services that have been sold. */
export interface ChargeCredit extends Transaction {
  /** ARAccountReferenceGroup Identifies the AR
    * Account to
    * be used for this Credit Memo. [b]QuickBooks
    * Notes[/b][br /] The AR
    * Account should always be specified or a
    * default will be used. */
  ARAccountRef?: ReferenceType;
  /** Date when the customer Statement was created */
  BilledDate?: Date;
  /** Internal use only: extension place holder for
    * ChargeCredit */
  ChargeCreditEx?: IntuitAnyType;
  ClassRef?: ReferenceType;
  /** If Credit is Null or False, it is considered as
    * Charge. If true, the ChargeCredit represents a Refund */
  Credit?: boolean;
  /** Represents Customer (or Job)Reference */
  CustomerRef?: ReferenceType;
  /** Date when the Charge is to be paid. */
  DueDate?: Date;
  /** Identifies the party or location that the
    * payment is
    * to be remitted to or sent to. [b]QuickBooks
    * Notes[/b][br /] Non
    * QB-writable. */
  RemitToRef?: ReferenceType;
  /** Indicates the total amount of the entity
    * associated.
    * This includes the total of all the charges,
    * allowances and taxes.
    * [b]QuickBooks Notes[/b][br /] Non
    * QB-writable. */
  TotalAmt?: number;
}

/** Product: ALL
  * Description: Check payment details for
  * both payments to vendors and payments from customers. */
export interface CheckPayment {
  /** Product: ALL
    * Description: Checking account number,
    * as printed on the check. */
  AcctNum?: string;
  /** Product: ALL
    * Description: The name of the bank on
    * which the check was drawn. */
  BankName?: string;
  /** Product: ALL
    * Description: The check number printed
    * on the check. */
  CheckNum?: string;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for CheckPayment */
  CheckPaymentEx: IntuitAnyType;
  /** Product: ALL
    * Description: Name of persons or
    * entities holding the account, as printed on the check. */
  NameOnAcct?: string;
  /** Product: ALL
    * Description: Status of the check.
    * Values provided by service/business logic. */
  Status?: string;
}

/** Financial Transaction information that pertains to
  * the entire Check. */
export interface CheckPurchase {
  AccountRef?: ReferenceType;
  /** In case of check expense, MemoOnCheck represent
    * the data written on the check as message written to the Payee to
    * physically read on the check */
  MemoOnCheck?: string;
  /** Address to which the payment should be sent. */
  PayeeAddr?: PhysicalAddress;
  /** ReadToPrint is a flag indicating if the Check is
    * ready for printing */
  PrintStatus?: PrintStatusEnum;
}

/** Product: ALL
  * Description: Valid only for UK region, CIS Rate for Vendor enumeration. */
export type CISRateEnum = keyof typeof CISRateEnum;
export const CISRateEnum = Object.freeze({
  "CIS gross rate (0%)": "CIS gross rate (0%)",
  "CIS standard rate (20%)": "CIS standard rate (20%)",
  "CIS higher rate (30%)": "CIS higher rate (30%)"
});

/** Classes provide a way to track different segments
  * of the business, and to break down the income and expenses for each
  * segment. Classes can apply to all transactions, so they're not tied
  * to a particular client or project. */
export interface Class extends IntuitEntity {
  /** Whether or not active inactive classes may be
    * hidden from most display purposes and may not be used on
    * financial transactions
    * Filterable: ALL */
  Active?: boolean;
  /** Internal use only: extension place holder for
    * Class extensible element */
  ClassEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Output Only. Fully
    * qualified name of the entity. The fully qualified name prepends
    * the topmost parent, followed by each sub element separated by
    * colons. Takes the form of: [br
    * /]Parent:class1:Subclass1:Subclass2 */
  FullyQualifiedName?: string;
  /** User recognizable name for the Class.[br /]
    * Length Restriction:
    * QBO: 100 characters
    * QBW: 31 characters
    * Sortable: ALL */
  Name?: string;
  /** Reference to parent class entity */
  ParentRef?: ReferenceType;
  /** Specifies the Class is a SubClass or Not. True
    * if subclass, false or null if it is top-level class */
  SubClass?: boolean;
}

/** One ColData can contain one column */
export interface ColData {
  /** Reference url */
  href?: string;
  id?: string;
  value?: string;

  /** Describes the column attributes */
  Attributes?: Attributes;
}

/** Describes a column */
export interface Column {
  /** Describes the column title name */
  ColTitle: string;
  /** Describes the column type enumeration */
  ColType: string;
  /** Subcolumns of the column */
  Columns?: Columns;
  /** Column Metadata */
  MetaData?: NameValue[];
}

/** List of columns */
export interface Columns {
  /** Column of the report */
  Column?: Column[];
}

/** Specifies the column type definition */
export type ColumnTypeEnum = keyof typeof ColumnTypeEnum;
export const ColumnTypeEnum = Object.freeze({
  "Account": "Account",
  "Money": "Money",
  "Rate": "Rate",
  "Customer": "Customer",
  "Vendor": "Vendor",
  "Employee": "Employee",
  "ProductsAndService": "ProductsAndService",
  "Department": "Department",
  "Class": "Class",
  "String": "String"
});

/** Describes Company information */
export interface Company extends IntuitEntity {
  /** Company Address as described in preference */
  CompanyAddr?: PhysicalAddress;
  /** CompanyEmail Address */
  CompanyEmailAddr?: EmailAddress;
  /** Product: QBW
    * Description: QuickBooks company
    * file name.[br /]Data Services max. length: 512 characters. */
  CompanyFileName?: string;
  /** Product: ALL
    * Description: Internal use only: extension place holder for Company. */
  CompanyInfoEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Name of the company.[br /]Max. length: 1024 characters. */
  CompanyName?: string;
  /** Product: ALL
    * Description: DateTime when the company file was created. */
  CompanyStartDate?: Date;
  /** Company URL */
  CompanyURL?: WebSiteAddress;
  /** Product: QBW
    * Description: IAM or QBN admin users
    * email.[br /]Data Services max. length: 100 characters. */
  CompanyUserAdminEmail?: string;
  /** Product: QBW
    * Description: IAM or QBN admin users
    * id sequence number to group many external realms for this user
    * under his id number.[br /]Data Services max. length: 512
    * characters. */
  CompanyUserId?: string;
  /** Product: ALL
    * Description: Country name to which the company belongs for fiancial
    * calculations. */
  Country?: string;
  /** Address of the company as given to th customer,
    * sometimes the address given to the customer mail address is
    * different from Company address */
  CustomerCommunicationAddr?: PhysicalAddress;
  /** Email Address published to customer for
    * communication if different from CompanyEmailAddress */
  CustomerCommunicationEmailAddr?: EmailAddress;
  /** Default time zone for the company */
  DefaultTimeZone?: string;
  /** Product: ALL
    * Description: Default email address. */
  Email?: EmailAddress;
  /** Product: ALL
    * Description: Employer identifier (EID). */
  EmployerId?: string;
  /** Product: ALL
    * Description: Default fax number. */
  Fax?: TelephoneNumber;
  /** Product: ALL
    * Description: Starting month of the company's fiscal year. */
  FiscalYearStartMonth?: MonthEnum;
  /** Product: QBW
    * Description: QB software flavor
    * being used on the file on the PC.[br /]Data Services max.
    * length: 512 characters. */
  FlavorStratum?: string;
  /** Product: ALL
    * Description: Specifies last imported time. */
  LastImportedTime?: Date;
  /** Legal Address given to the government for any
    * government communication */
  LegalAddr?: PhysicalAddress;
  /** LegalName if different from the CompanyName */
  LegalName?: string;
  /** Product: ALL
    * Description: Default mobile phone number of the company. */
  Mobile?: TelephoneNumber;
  /** Specifies if the company support multibyte or
    * not */
  MultiByteCharsSupported?: boolean;
  /** Any other preference not covered in base is
    * covered as name value pair, for detailed explanation look at the
    * document */
  NameValue?: NameValue[];
  /** Product: ALL
    * Description: Other company addresses. */
  OtherAddr?: PhysicalAddress[];
  /** Product: QBW
    * Description: List of ContactInfo
    * entities of any contact info type. The ContactInfo Type values
    * are defined in the ContactTypeEnum. */
  OtherContactInfo?: ContactInfo[];
  /** Primary Phone number */
  PrimaryPhone?: TelephoneNumber;
  /** Product: ALL
    * Description: QuickBooks company file latest version. The format reports the
    * major release in the first number, the minor release in the
    * second number (always a zero), the release update (slipstream or
    * "R") in the third number, and the build number in the final
    * number.[br /]Max. length: 512 characters. */
  QBVersion?: string;
  /** Product: QBW
    * Description: if the QB desktop file is a sample file. */
  SampleFile?: boolean;
  /** Product: ALL
    * Description: Default shipping address. */
  ShipAddr?: PhysicalAddress;
  /** Comma separated list of languages */
  SupportedLanguages?: string;
  /** Product: ALL
    * Description: Starting month of the company's fiscal year. */
  TaxYearStartMonth?: MonthEnum;
  /** Product: ALL
    * Description: Default company web site address. */
  WebSite?: WebSiteAddress;
}

/** Defines Company Accounting Prefs details */
export interface CompanyAccountingPrefs {
  /** QBW: ONLY. Enable auto journal entry number */
  AutoJournalEntryNumber?: boolean;
  /** Product:All
    * Book closing date, if you want to
    * specify if not leave it as null */
  BookCloseDate?: Date;
  /** Product:All
    * Enable Class Tracking per transaction */
  ClassTrackingPerTxn?: boolean;
  /** Product:QBO
    * Enable Class Tracking per transaction
    * line */
  ClassTrackingPerTxnLine?: boolean;
  /** Product:QBO
    * Customer Terminology */
  CustomerTerminology?: string;
  /** Product:QBO Default APAccount */
  DefaultAPAccount?: ReferenceType;
  /** Product:QBO Default ARAccount */
  DefaultARAccount?: ReferenceType;
  /** Product: QBO
    * Department terminology */
  DepartmentTerminology?: string;
  /** Product:All
    * Defines first Month of physical year */
  FirstMonthOfFiscalYear?: MonthEnum;
  /** Product: QBW
    * Description: */
  OtherContactInfo?: ContactInfo[];
  /** Product:QBW
    * Requires account */
  RequiresAccounts?: boolean;
  /** TaxForm Number */
  TaxForm?: string;
  /** Product:All
    * Defines Tax Year Month */
  TaxYearMonth?: MonthEnum;
  /** Product:QBO
    * QBO: QBO only. Enable Department
    * Tracking */
  TrackDepartments?: boolean;
  /** QBW: Only QBW supported */
  UseAccountNumbers?: boolean;
}

/** Company currency are the currencies used by the
  * company. Each Company Currency describes the properties of that
  * currency. */
export interface CompanyCurrency extends IntuitEntity {
  /** Product: QBO
    * Description: Indicates whether this
    * currency is active in the company or not. Inactive Currency may
    * be hidden from most display purposes and may not be used on
    * financial transactions. */
  Active?: boolean;
  /** Product: QBO
    * Description: Universal 3-letter
    * currency code like USD, CAD, EUR, etc. Required for the
    * create/delete operation.
    * Max Length: 3 */
  Code?: string;
  /** Internal use only: extension place holder for
    * Company Currency */
  CompanyCurrencyEx?: IntuitAnyType;
  /** Product: QBO
    * Description: Currency name (Output
    * only) */
  Name?: string;
}

/** Describes Company information */
export interface CompanyInfo extends IntuitEntity {
  /** Company Address as described in preference */
  CompanyAddr?: PhysicalAddress;
  /** CompanyEmail Address */
  CompanyEmailAddr?: EmailAddress;
  /** Product: QBW
    * Description: QuickBooks company
    * file name.[br /]Data Services max. length: 512 characters. */
  CompanyFileName?: string;
  /** Product: ALL
    * Description: Internal use only: extension place holder for Company. */
  CompanyInfoEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Name of the company.[br /]Max. length: 1024 characters. */
  CompanyName?: string;
  /** Product: ALL
    * Description: DateTime when the company file was created. */
  CompanyStartDate?: Date;
  /** Company URL */
  CompanyURL?: WebSiteAddress;
  /** Product: QBW
    * Description: IAM or QBN admin users
    * email.[br /]Data Services max. length: 100 characters. */
  CompanyUserAdminEmail?: string;
  /** Product: QBW
    * Description: IAM or QBN admin users
    * id sequence number to group many external realms for this user
    * under his id number.[br /]Data Services max. length: 512
    * characters. */
  CompanyUserId?: string;
  /** Product: ALL
    * Description: Country name to which the company belongs for fiancial
    * calculations. */
  Country?: string;
  /** Address of the company as given to th customer,
    * sometimes the address given to the customer mail address is
    * different from Company address */
  CustomerCommunicationAddr?: PhysicalAddress;
  /** Email Address published to customer for
    * communication if different from CompanyEmailAddress */
  CustomerCommunicationEmailAddr?: EmailAddress;
  /** Default time zone for the company */
  DefaultTimeZone?: string;
  /** Product: ALL
    * Description: Default email address. */
  Email?: EmailAddress;
  /** Product: ALL
    * Description: Employer identifier (EID). */
  EmployerId?: string;
  /** Product: ALL
    * Description: Default fax number. */
  Fax?: TelephoneNumber;
  /** Product: QBO
    * Description: Status of the Inventory Lots and Accounts Calculation for STQ imported company. */
  FifoCalculationStatus?: FifoCalculationStatus;
  /** Product: ALL
    * Description: Starting month of the company's fiscal year. */
  FiscalYearStartMonth?: MonthEnum;
  /** Product: QBW
    * Description: QB software flavor
    * being used on the file on the PC.[br /]Data Services max.
    * length: 512 characters. */
  FlavorStratum?: string;
  /** Product: ALL
    * Description: Specifies last imported time. */
  LastImportedTime?: Date;
  /** Product: QBW
    * Description: Specifies last sync time. */
  LastSyncTime?: Date;
  /** Legal Address given to the government for any
    * government communication */
  LegalAddr?: PhysicalAddress;
  /** LegalName if different from the CompanyName */
  LegalName?: string;
  /** Product: ALL
    * Description: Default mobile phone number of the company. */
  Mobile?: TelephoneNumber;
  /** Specifies if the company support multibyte or
    * not */
  MultiByteCharsSupported?: boolean;
  /** Any other preference not covered in base is
    * covered as name value pair, for detailed explanation look at the
    * document */
  NameValue?: NameValue[];
  /** Product: ALL
    * Description: Other company addresses. */
  OtherAddr?: PhysicalAddress[];
  /** Product: QBW
    * Description: List of ContactInfo
    * entities of any contact info type. The ContactInfo Type values
    * are defined in the ContactTypeEnum. */
  OtherContactInfo?: ContactInfo[];
  /** Primary Phone number */
  PrimaryPhone?: TelephoneNumber;
  /** Product: ALL
    * Description: QuickBooks company file latest version. The format reports the
    * major release in the first number, the minor release in the
    * second number (always a zero), the release update (slipstream or
    * "R") in the third number, and the build number in the final
    * number.[br /]Max. length: 512 characters. */
  QBVersion?: string;
  /** Product: QBW
    * Description: if the QB desktop file is a sample file. */
  SampleFile?: boolean;
  /** Product: ALL
    * Description: Default shipping address. */
  ShipAddr?: PhysicalAddress;
  /** Comma separated list of languages */
  SupportedLanguages?: string;
  /** Product: ALL
    * Description: Starting month of the company's fiscal year. */
  TaxYearStartMonth?: MonthEnum;
  /** Product: ALL
    * Description: Default company web site address. */
  WebAddr?: WebSiteAddress;
}

/** Product: ALL
  * Description: Contact information identified by Type. */
export interface ContactInfo {
  /** Product: ALL
    * Description: Email address information. */
  Email?: EmailAddress;
  /** Product: ALL
    * Description: Generic contact information. */
  OtherContact?: GenericContactType;
  /** Product: ALL
    * Description: Telephone number information. */
  Telephone?: TelephoneNumber;
  /** Product: ALL
    * Description: The type of contact information.[br /] */
  Type?: ContactTypeEnum;
  /** Product: ALL
    * Description: Website address (URI) information. */
  WebSite?: WebSiteAddress;
}

/** Product: ALL
  * Description: Types of ContactInfo entities. */
export type ContactTypeEnum = keyof typeof ContactTypeEnum;
export const ContactTypeEnum = Object.freeze({
  "TelephoneNumber": "TelephoneNumber",
  "EmailAddress": "EmailAddress",
  "WebSiteAddress": "WebSiteAddress",
  "GenericContactType": "GenericContactType"
});

/** Product: QBO
  * Description: Internal use only: Convenience Fee detail for the invoice */
export interface ConvenienceFeeDetail extends IntuitEntity {
  /** Product: QBO
    * Description: Internal use only: Convenience fee rate percentage */
  ConvenienceFeePercent?: number;
  /** Product: QBO
    * Description: Internal use only: Convenience fee type */
  ConvenienceFeeType?: ConvenienceFeeTypeEnum;
}

/** Enumeration of Convenience fee types applicable to Invoice */
export type ConvenienceFeeTypeEnum = keyof typeof ConvenienceFeeTypeEnum;
export const ConvenienceFeeTypeEnum = Object.freeze({
  "MANUAL": "MANUAL",
  "AUTO": "AUTO",
  "PAID": "PAID",
  "DISABLED": "DISABLED"
});

/** Product: ALL
  * Description: Information about a
  * payment received by credit card. */
export interface CreditCardPayment {
  CreditChargeInfo?: CreditChargeInfo;
  CreditChargeResponse?: CreditChargeResponse;
}

/** Financial transaction representing recording of a Credit Card balance payment. */
export interface CreditCardPaymentTxn extends Transaction {
  /** Total amount of the payment. Denominated in the currency of the credit card account. */
  Amount?: number;
  /** Bank account used to pay the Credit Card balance.
    * Must be a Bank account. */
  BankAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: The check number printed on the check. */
  CheckNum?: string;
  /** Credit Card account for which a payment is being entered.
    * Must be a Credit Card account. */
  CreditCardAccountRef?: ReferenceType;
  /** Internal use only: extension place holder for CreditCardPayment */
  CreditCardPaymentEx: IntuitAnyType;
  /** Memo associated with the Credit Card Payment transaction. */
  Memo?: string;
  /** PrintStatus if to be printed or already printed. */
  PrintStatus?: PrintStatusEnum;
  /** Product: ALL
    * Description: Specifies the vendor reference for this transaction. */
  VendorRef?: ReferenceType;
}

/** Financial Transaction information that pertains to
  * the entire Check. */
export interface CreditCardPurchase {
  AccountRef?: ReferenceType;
  /** If false or null it represents a CreditCard
    * charge expense, true represent Credit (money-in or returned) */
  Credit?: boolean;
}

/** Product: ALL
  * Description: Enumeration of Credit Card types used in Credit Card payment transactions. */
export type CreditCardTypeEnum = keyof typeof CreditCardTypeEnum;
export const CreditCardTypeEnum = Object.freeze({
  "AmEx": "AmEx",
  "DebitCard": "DebitCard",
  "Discover": "Discover",
  "GiftCard": "GiftCard",
  "MasterCard": "MasterCard",
  "OtherCreditCard": "OtherCreditCard",
  "Visa": "Visa"
});

/** Product: ALL
  * Description: Holds credit-card information to request a credit card payment from a merchant account service, but NOT any response or authorization information from the merchant account service provider -- see CreditChargeResponse */
export interface CreditChargeInfo {
  /** Product: QBO
    * Description: The Amount processed using the credit card. */
  Amount?: number;
  /** Product: ALL
    * Description: Credit card holder billing address of record: the street address to which credit card statements are sent. */
  BillAddrStreet?: string;
  /** Product: ALL
    * Description: Expiration Month on card, expressed as a number: 1 = January, 2 = February, etc. */
  CcExpiryMonth?: number;
  /** Product: ALL
    * Description: Expiration Year on card, expressed as a 4 digit number 1999, 2003, etc. */
  CcExpiryYear?: number;
  /** Product: ALL
    * Description: Credit card transaction mode used in Credit Card payment transactions. Valid values: CardNotPresent (default) or CardPresent.[br /] */
  CCTxnMode?: CCTxnModeEnum;
  /** Product: ALL
    * Description: Type of credit card transaction. Valid values: Authorization, Capture, Charge, Refund, VoiceAuthorization.[br /] */
  CCTxnType?: CCTxnTypeEnum;
  /** Product: ALL
    * Description: Code associated with commercial cards: purchase, corporate, and business cards. Lower transaction fee rates apply when these cards are used and this field is provided. */
  CommercialCardCode?: string;
  /** Product: ALL
    * Description: Internal use only: extension place holder for CreditCardChargeInfo */
  CreditCardChargeInfoEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Account holder name, as printed on the card. */
  NameOnAcct?: string;
  /** Product: ALL
    * Description: Credit Card account number, as printed on the card. Must not have whitespace or formatting characters. */
  Number?: string;
  /** Product: ALL
    * Description: Credit card holder billing postal code. Five digits in the USA. */
  PostalCode?: string;
  /** Product: ALL
    * Description: Unique identifier of the previous payment transaction. It can be used as an input to the Capture transaction type. */
  PrevCCTransId?: string;
  /** Product: QBO
    * Description: If false or no value, QBO will not process the payment but just store Credit Card Information. If true, QBO will process the Credit Card Payment (Not supported currently). */
  ProcessPayment?: boolean;
  /** Product: ALL
    * Description: Type of credit card.[br /] */
  Type?: string;
}

/** Product: ALL
  * Description: Holds credit-card transaction response information from a merchant account service, but not any credit card or payment request information - see CreditChargeInfo. */
export interface CreditChargeResponse {
  /** Product: ALL
    * Description: Code returned from the credit card processor to indicate that the charge will be paid by the card issuer. */
  AuthCode?: string;
  /** Product: ALL
    * Description: The AVS (Address Verification Service) result for the street address supplied in the transaction. Possible values are Pass, if the information matches the information on file with the cardholder's account, Fail, or NotAvailable.[br /] */
  AvsStreet?: CCAVSMatchEnum;
  /** The AVS (Address Verification Service) result for the zip code supplied in the transaction.  Possible values are Pass, if the information matches the information on file with the cardholder's account, Fail, or NotAvailable. */
  AvsZip?: CCAVSMatchEnum;
  /** Product: ALL
    * Description: Result of comparing the security code supplied in the credit card transaction request with the code on file with the card issuer. Possible values are Pass, Fail, and NotAvailable.[br /] */
  CardSecurityCodeMatch?: CCSecurityCodeMatchEnum;
  /** Product: Not used now
    * Description: Credit Card Processor Name for recording the payment processor */
  CCProcessor?: string;
  /** Product: ALL
    * Description: Unique identifier of the payment transaction. It can be used to track the status of transactions, or to search transactions. */
  CCTransId?: string;
  /** Product: ALL
    * Description: An identifier returned in settlement data used to support the credit card transaction reconciliation. */
  ClientTransID?: string;
  /** Product: ALL
    * Description: Internal use only: extension place holder for CreditChargeResponse */
  CreditChargeResponseEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Merchant account number associated with the credit card transaction. */
  MerchantAcctNum?: string;
  /** Product: ALL
    * Description: Code that indicates membership in a group of card types that are normally deposited together. */
  PaymentGroupingCode?: number;
  /** Product: ALL
    * Description: Indicates which deposit batch the transaction belongs to. Allows for integration with Intuit MAS Service and QBFS: enables reconciliation between what is charged on credit card and what is already deposited into bank. */
  ReconBatchId?: string;
  /** Product: ALL
    * Description: Numeric code specifying the result of the transaction. */
  ResultCode?: number;
  /** Product: ALL
    * Description: Text specifying the result of the transaction. */
  ResultMsg?: string;
  /** Product: ALL
    * Description: CardCode or Card Id field that can be optionally provided to use additional security features of credit card authorization. It is typically a 3 digit number located on the back of most credit cards. For American Express, it is a 4 digit number on the front. */
  SecurityCode?: string;
  /** Product: ALL
    * Description: Indicates the status of the payment transaction. Possible values include Completed, Unknown.[br /] */
  Status?: CCPaymentStatusEnum;
  /** Product: ALL
    * Description: This value is used to support the credit card transaction reconciliation. */
  TxnAuthorizationStamp?: number;
  /** Product: ALL
    * Description: Timestamp indicating the time in which the card processor authorized the transaction. */
  TxnAuthorizationTime?: Date;
}

/** Financial transaction representing a refund (or
  * credit) of payment or part of a payment for goods or services that
  * have been sold. */
export interface CreditMemo extends SalesTransaction {
  /** Internal use only: extension place holder for
    * CreditMemo */
  CreditMemoEx?: IntuitAnyType;
  /** Product: ALL
    * Description: A credit memo needs to have an invoice number to save successfully
    * Applicable for IN Region. */
  InvoiceRef?: ReferenceType;
  /** Indicates the total credit amount still
    * available to apply towards the payment.
    * [b]QuickBooks
    * Notes[/b][br /]
    * Non QB-writable. */
  RemainingCredit?: number;
}

/** Describes the properties of currencies defined in
  * QuickBooks. QuickBooks supports the world's common currencies. */
export interface Currency extends IntuitEntity {
  /** Whether or not active inactive Currency may be
    * hidden from most display purposes and may not be used on
    * financial transactions.
    * [b][i]QuickBooks Notes[/i][/b] [br /]
    * Inactive Currencies are not used when downloading the exchange
    * rates. */
  Active?: boolean;
  AsOfDate?: Date;
  /** Currency universal 3-letter code, like USD,
    * CAD, EUR, etc.
    * [b][i]QuickBooks Notes[/i][/b] [br /]
    * Required for
    * the create operation. [br /]
    * Max Length: 3 */
  Code?: currencyCode;
  /** Internal use only: extension place holder for
    * Currency */
  CurrencyEx?: IntuitAnyType;
  /** Specifies how many decimal places can be shown.
    * Usually there will be 2, or 0 for currencies without "cents".
    * [b][i]QuickBooks Notes[/i][/b] [br /]
    * Max Length: 1 */
  DecimalPlaces?: number;
  /** Used for display purpose, can be a comma or a
    * period. */
  DecimalSeparator?: string;
  ExchangeRate?: number;
  /** Specifies how to present the value, used for
    * the display purpose for example, ##,###,### or #,##,##,###
    * [b][i]QuickBooks Notes[/i][/b] [br /]
    * Max Length: 32 */
  Format?: string;
  /** Currency name.
    * Length Restriction:
    * QBO: 15
    * QBW:
    * 1024 */
  Name?: string;
  /** "Thousand separator" character, used for the
    * display purpose.
    * [b][i]QuickBooks Notes[/i][/b] [br /]
    * Max Length:
    * 1 */
  Separator?: string;
  Symbol?: string;
  /** Used for display purpose to specify where to
    * show the Currency Symbol. */
  SymbolPosition?: SymbolPositionEnum;
  /** [b][i]QuickBooks Notes[/i][/b] [br /]
    * QuickBooks predefines the most common world currencies, however
    * it does allow the user to define the new one.
    * The user-defined
    * currency however cannot have the exchange rates downloaded. */
  UserDefined?: boolean;
}

/** Product: ALL
  * Description: ISO 4217 Currency Code enumeration. */
export type currencyCode = keyof typeof currencyCode;
export const currencyCode = Object.freeze({
  "AED": "AED",
  "AFA": "AFA",
  "ALL": "ALL",
  "ANG": "ANG",
  "AOA": "AOA",
  "AOK": "AOK",
  "ARP": "ARP",
  "ARS": "ARS",
  "AMD": "AMD",
  "ATS": "ATS",
  "AUD": "AUD",
  "AWF": "AWF",
  "AWG": "AWG",
  "AZM": "AZM",
  "BAM": "BAM",
  "BBD": "BBD",
  "BDT": "BDT",
  "BEF": "BEF",
  "BGL": "BGL",
  "BHD": "BHD",
  "BIF": "BIF",
  "BMD": "BMD",
  "BND": "BND",
  "BOB": "BOB",
  "BRC": "BRC",
  "BRL": "BRL",
  "BSD": "BSD",
  "BTN": "BTN",
  "BUK": "BUK",
  "BWP": "BWP",
  "BYR": "BYR",
  "BYB": "BYB",
  "BZD": "BZD",
  "CAD": "CAD",
  "CDF": "CDF",
  "CHF": "CHF",
  "CLP": "CLP",
  "CNY": "CNY",
  "COP": "COP",
  "CRC": "CRC",
  "CZK": "CZK",
  "CUP": "CUP",
  "CVE": "CVE",
  "DDM": "DDM",
  "DEM": "DEM",
  "DJF": "DJF",
  "DKK": "DKK",
  "DOP": "DOP",
  "DZD": "DZD",
  "ECS": "ECS",
  "EEK": "EEK",
  "EGP": "EGP",
  "ERN": "ERN",
  "ESP": "ESP",
  "ETB": "ETB",
  "EUR": "EUR",
  "FIM": "FIM",
  "FJD": "FJD",
  "FKP": "FKP",
  "FRF": "FRF",
  "GBP": "GBP",
  "GEL": "GEL",
  "GHC": "GHC",
  "GIP": "GIP",
  "GMD": "GMD",
  "GNF": "GNF",
  "GRD": "GRD",
  "GTQ": "GTQ",
  "GWP": "GWP",
  "GYD": "GYD",
  "HKD": "HKD",
  "HNL": "HNL",
  "HRK": "HRK",
  "HTG": "HTG",
  "HUF": "HUF",
  "IDR": "IDR",
  "IEP": "IEP",
  "ILS": "ILS",
  "INR": "INR",
  "IQD": "IQD",
  "IRR": "IRR",
  "ISK": "ISK",
  "ITL": "ITL",
  "JMD": "JMD",
  "JOD": "JOD",
  "KES": "KES",
  "KGS": "KGS",
  "KHR": "KHR",
  "KMF": "KMF",
  "KPW": "KPW",
  "KRW": "KRW",
  "KWD": "KWD",
  "KYD": "KYD",
  "KZT": "KZT",
  "LAK": "LAK",
  "LBP": "LBP",
  "LKR": "LKR",
  "LRD": "LRD",
  "LSL": "LSL",
  "LTL": "LTL",
  "LUF": "LUF",
  "LVL": "LVL",
  "LYD": "LYD",
  "MAD": "MAD",
  "MDL": "MDL",
  "MGF": "MGF",
  "MKD": "MKD",
  "MMK": "MMK",
  "MNT": "MNT",
  "MOP": "MOP",
  "MRO": "MRO",
  "MUR": "MUR",
  "MVR": "MVR",
  "MWK": "MWK",
  "MXN": "MXN",
  "MXP": "MXP",
  "MYR": "MYR",
  "MZM": "MZM",
  "NAD": "NAD",
  "NGN": "NGN",
  "NIC": "NIC",
  "NIO": "NIO",
  "NLG": "NLG",
  "NOK": "NOK",
  "NPR": "NPR",
  "NZD": "NZD",
  "OMR": "OMR",
  "PAB": "PAB",
  "PEN": "PEN",
  "PES": "PES",
  "PGK": "PGK",
  "PHP": "PHP",
  "PKR": "PKR",
  "PLN": "PLN",
  "PLZ": "PLZ",
  "PTE": "PTE",
  "PYG": "PYG",
  "QAR": "QAR",
  "ROL": "ROL",
  "RUR": "RUR",
  "RWF": "RWF",
  "SAR": "SAR",
  "SBD": "SBD",
  "SCR": "SCR",
  "SDD": "SDD",
  "SDP": "SDP",
  "SEK": "SEK",
  "SGD": "SGD",
  "SHP": "SHP",
  "SIT": "SIT",
  "SKK": "SKK",
  "SLL": "SLL",
  "SM": "SM",
  "SOS": "SOS",
  "SRG": "SRG",
  "STD": "STD",
  "SUR": "SUR",
  "SVC": "SVC",
  "SYP": "SYP",
  "SZL": "SZL",
  "THB": "THB",
  "TMM": "TMM",
  "TND": "TND",
  "TOP": "TOP",
  "TRL": "TRL",
  "TTD": "TTD",
  "TWD": "TWD",
  "TZS": "TZS",
  "UAH": "UAH",
  "UGS": "UGS",
  "UGX": "UGX",
  "USD": "USD",
  "UYP": "UYP",
  "UYU": "UYU",
  "UZS": "UZS",
  "VND": "VND",
  "VUV": "VUV",
  "VAL": "VAL",
  "WST": "WST",
  "XAF": "XAF",
  "XCD": "XCD",
  "XOF": "XOF",
  "XPF": "XPF",
  "YER": "YER",
  "YUD": "YUD",
  "ZAR": "ZAR",
  "ZMK": "ZMK",
  "ZRZ": "ZRZ",
  "ZWD": "ZWD"
});

export interface CurrencyPrefs {
  /** Product: ALL
    * Description: Reference to the Home
    * currency of the company */
  HomeCurrency?: ReferenceType;
  /** Product: ALL
    * Description: Multicurrency enabled
    * for this company */
  MultiCurrencyEnabled?: boolean;
}

/** Product: ALL
  * Description: QBO: The Customer entityrepresents the consumer of the service or the product that your business offers. QBO allows categorizing the customers in a way that is meaningful to the business. For example, you can set up a category of customers to indicate which industry a customer represents, the geographic location of a customer, or how a customer came to know about the business. The categorization can be then used for reports or mails.
  * Description: QBW: The Customer entity is a consumer of the service or product that your business offers. While creating a customer, avoid entering  job data. If you enter a job data, the system can prevent you from adding   more jobs for that customer. You must first create the customer, and then create a job using that customer as a parent.
  * Business Rules: [li]The customer name must be unique.[/li][li]The customer name must not contain a colon (:).[/li][li]The e-mail address of the customer must contain "@" and "." (dot).[/li][li]The customer address field is mandatory.[/li] */
export interface Customer extends NameBase {
  /** Product: QBW
    * Description: Name or number of the account associated with this customer.[br /]Max. length: 99 characters. */
  AcctNum?: string;
  /** Product: QBW
    * Description: Name of the Alternate Customer contact. */
  AltContactName?: string;
  /** Product: QBO
    * Description: The A/R account ID for the customer. This is applicable only in FR where each customer needs to have his own AR account. */
  ARAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Specifies the open balance amount or the amount unpaid by the customer. For the create operation, this represents the opening balance for the customer. When returned in response to the query request it represents the current open balance (unpaid amount) for that customer.
    * Filterable: QBW
    * Sortable: QBW */
  Balance?: number;
  /** Product: QBW
    * Description: Cumulative open balance amount for the Customer (or Job) and all its sub-jobs. Cannot be written to QuickBooks.
    * Product: QBO
    * Description: Cumulative open balance amount for the Customer (or Job) and all its sub-jobs.
    * Filterable: ALL
    * Non-default: ALL */
  BalanceWithJobs?: number;
  /** Product: ALL
    * Description: Default billing address. */
  BillAddr?: PhysicalAddress;
  /** Product: ALL
    * Description: If true, this Customer is billed with its parent. If false, or null the customer is not to be billed with its parent. This property is valid only if this entity is a Job or sub Customer. */
  BillWithParent?: boolean;
  /** Business Number of the Customer.
    * Applicable to CA/UK/IN versions of QuickBooks. Referred to as PAN in India. */
  BusinessNumber?: string;
  /** Product: ALL
    * Description: Credit-card information to request a credit card payment from a merchant account service. */
  CCDetail?: CreditChargeInfo;
  /** Internal use only: Applicable only for Accountant companies, Not null represents associated QBO company id. (Readonly) */
  ClientCompanyId?: string;
  /** Internal use only: Applicable only for Accountant companies, External reference for Customer. (ReadOnly) */
  ClientEntityId?: string;
  /** Product: QBW
    * Description: Name of the Customer contact. */
  ContactName?: string;
  /** Product: QBW
    * Description: Specifies the maximum amount of an unpaid customer balance. */
  CreditLimit?: number;
  /** Product: ALL
    * Description: Reference to the currency code for all the business transactions created for or received from the customer. */
  CurrencyRef?: ReferenceType;
  /** Product: ALL
    * Description: Internal use only: extension place holder for Customer. */
  CustomerEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Reference to a CustomerType associated with the Customer. */
  CustomerTypeRef?: ReferenceType;
  /** GST Identification Number of the Customer.
    * Applicable for IN region only. */
  GSTIN?: string;
  /** GST registration type of the Customer.
    * Applicable for IN region only. */
  GSTRegistrationType?: string;
  /** Product: QBO only
    * Description: True if the customer is CIS contractor */
  IsCISContractor?: boolean;
  /** Product: QBO
    * Description: Specifies whether this customer is a project. */
  IsProject?: boolean;
  /** Product: ALL
    * Description: If true, this is a Job or sub-customer. If false or null, this is a top level customer, not a Job or sub-customer. */
  Job?: boolean;
  /** Product: ALL
    * Description: Information about the job. Relevant only if the Customer represents the actual task or project, not just a person or organization. */
  JobInfo?: JobInfo;
  /** Product: ALL
    * Description: Specifies the level of the hirearchy in which the entity is located. Zero specifies the top level of the hierarchy; anything above will be level with respect to the parent. */
  Level?: number;
  /** Product: ALL
    * Description: Free form text describing the Customer.[br /]Max. length: 1024 characters. */
  Notes?: string;
  /** Product: ALL
    * Description: Date of the Open Balance for the create operation. */
  OpenBalanceDate?: Date;
  /** Product: QBW only.
    * Description: An address other than default billing  or shipping. */
  OtherAddr?: PhysicalAddress[];
  /** Product: QBW
    * Description: Over-due balance amount. Cannot be written to QuickBooks. */
  OverDueBalance?: number;
  /** Product: ALL
    * Description: The immediate parent of the Sub-Customer/Job in the hierarchical "Customer:Job" list.[br /]Required for the create operation if the Customer is a sub-customer or Job. */
  ParentRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to a PaymentMethod associated with the Customer. */
  PaymentMethodRef?: ReferenceType;
  /** Product: ALL
    * Description: Preferred delivery method. Vales are Print, Email, or None. */
  PreferredDeliveryMethod?: string;
  /** Product: QBW
    * Description: Reference to a PriceLevel associated with the Customer. */
  PriceLevelRef?: ReferenceType;
  /** Product: QBO
    * Description:  Specifies primary Tax ID of the Person or Organization. */
  PrimaryTaxIdentifier?: string;
  /** Product: ALL
    * Description: Resale number or some additional info about the customer. */
  ResaleNum?: string;
  /** Product: QBO
    * Description: The top level Customer in the hierarchy to which this Job or sub customer belongs. */
  RootCustomerRef?: ReferenceType;
  /** Product: QBW
    * Description: Reference to a SalesRep associated with the Customer. */
  SalesRepRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to a SalesTerm associated with the Customer. */
  SalesTermRef?: ReferenceType;
  /** Product: QBO
    * Description: Specifies secondary Tax ID of the Person or Organization. Applicable for IN companies for CST Registration No. and in future can be extended to other regions. */
  SecondaryTaxIdentifier?: string;
  /** Product: ALL
    * Description: Default shipping address. */
  ShipAddr?: PhysicalAddress;
  /** Product: QBO
    * Description: Originating source of
    * the Customer. Valid values are defined in SourceTypeEnum */
  Source?: string;
  /** Product: QBO only
    * Description: True if the customer is taxable. */
  Taxable?: boolean;
  /** Product: QBO
    * Description: Specifies tax exemption reason to be associated with Customer */
  TaxExemptionReasonId?: string;
  /** Product: QBW
    * Description: US-only, reference to a TaxCode entity where the group field of the referenced entity is true, that is, a TaxCode representing a list of tax rates that apply for the customer. */
  TaxGroupCodeRef?: ReferenceType;
  /** Product: QBW
    * Description: US-only, reference to a TaxRate entity indicating the sales tax to apply by default for the customer. */
  TaxRateRef?: ReferenceType;
  /** Product: QBO
    * Description: Tax regime of a customer which is required by CFDI4.0 in Mexico.
    * Visit http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm and find the catalogues that contain the accepted values of TaxRegime. */
  TaxRegime?: string;
  /** Product: QBO
    * Description: True, if TDS (Tax Deducted at Source) is enabled for this customer. */
  TDSEnabled?: boolean;
  /** Product: QBW
    * Description: The total expense amount for the Customer. Cannot be written to QuickBooks. */
  TotalExpense?: number;
  /** Product: QBW
    * Description: The total revenue amount from the Customer. Cannot be written to QuickBooks. */
  TotalRevenue?: number;
}

/** A standard message to a customer that can be
  * included at the bottom of a sales form. */
export interface CustomerMsg extends IntuitEntity {
  /** Whether or not active inactive customer message
    * may be hidden from most display purposes and may not be used on
    * financial transactions. */
  Active?: boolean;
  /** Internal use only: extension place holder for
    * CustomerMsg */
  CustomerMsgEx?: IntuitAnyType;
  /** Contains the message to a customer.[br /]
    * Length Restriction:
    * QBO: 15
    * QBW: 1024 */
  Name?: string;
}

/** Product: ALL
  * Description: Customer types allow categorizing customers in ways that are meaningful to the business. For example, one could set up customer types so that they indicate which industry a customer represents, a customer's geographic location, or how a customer first heard about the business. The categorization then can be used for reporting or mailings. */
export interface CustomerType extends IntuitEntity {
  /** Product: ALL
    * Description: True if the Customer is active. Inactive customer types may be hidden from display and may not be used on financial transactions.
    * Filterable: QBW */
  Active?: boolean;
  /** Product: ALL
    * Description: Fully qualified name of the entity. The fully qualified name prepends the topmost parent, followed by each sub element separated by colons. Takes the form of Parent:Customer:Job:Sub-job. Limited to 5 levels.[br /]Max. length: 41 characters (single name) or 209 characters (fully qualified name). */
  FullyQualifiedName?: string;
  /** Product: QBW
    * Description: User recognizable name for the CustomerType.[br /]Max. length: 31 characters.
    * Product: QBO
    * Description: User recognizable name for the CustomerType.[br /]Max. length: 15 characters. */
  Name?: string;
  /** Product: ALL
    * Description: Reference to the CustomerTypeParent. */
  ParentRef?: ReferenceType;
}

/** Product: ALL
  * Description: Enumeration of customer
  * types in QuickBooks. */
export type CustomerTypeEnum = keyof typeof CustomerTypeEnum;
export const CustomerTypeEnum = Object.freeze({
  "Customer": "Customer",
  "Job": "Job"
});

/** Product: ALL
  * Description: Custom field that can be added to an entity. This type is not extended from IntuitEntity as CustomField can not be manipulated as independent entity and will always be considered in association with another top level Intuit entity. */
export interface CustomField {
  /** Product: ALL
    * Description: The value for a BooleanType custom field. */
  BooleanValue: boolean;
  /** Product: ALL
    * Description: The value for a DateType custom field. */
  DateValue: Date;
  /** Product: ALL
    * Description: Unique identifier of the CustomFieldDefinition that corresponds to this CustomField.  DefinitionId is required for every CustomField. */
  DefinitionId?: string;
  /** Product: ALL
    * Description: Name of the custom field. */
  Name?: string;
  /** Product: ALL
    * Description: The value for a NumberType custom field. */
  NumberValue: number;
  /** Product: ALL
    * Description: The value for a StringType custom field. */
  StringValue: string;
  /** Product: ALL
    * Description: Data type of custom field.[br /] */
  Type: CustomFieldTypeEnum;
}

/** Product: ALL
  * Description: The definition of a custom field for an Intuit type to add additional columns dynamically on a existing Intuit entities. This entity is not extended from IntuitEntity so that it can be manipulated by specifying the DefinitionId. */
export interface CustomFieldDefinition extends IntuitEntity {
  /** Product: ALL
    * Description: Identifier of Partner AppId that corresponds to this CustomField. */
  AppId?: string;
  /** Product: ALL
    * Description: Intuit entity type to which the CustomFieldDefinition is associated. Valid values are defined in the objectNameEnumType.[br /]Required for the create operation.
    * Required: ALL */
  EntityType?: string;
  /** Product: ALL
    * Description: True if the custom field is Private; false if Public and can be shared among different applications. */
  Hidden?: boolean;
  /** Product: ALL
    * Description: Name of the CustomField entity.[br /]Required for the create operation.
    * Required: ALL */
  Name?: string;
  /** Product: ALL
    * Description: True if the custom field must be specified for every instance of the Parent entity for which the CustomFieldDefinition is defined. Data Services dpes not verify the value of that field. */
  Required?: boolean;
}

/** Product: ALL
  * Description: Possible supported CustomFieldTypes. */
export type CustomFieldTypeEnum = keyof typeof CustomFieldTypeEnum;
export const CustomFieldTypeEnum = Object.freeze({
  "StringType": "StringType",
  "BooleanType": "BooleanType",
  "NumberType": "NumberType",
  "DateType": "DateType"
});

/** Date macros enumeration */
export type DateMacro = keyof typeof DateMacro;
export const DateMacro = Object.freeze({
  "All": "All",
  "Today": "Today",
  "This Week": "This Week",
  "This Week-to-date": "This Week-to-date",
  "This Month": "This Month",
  "This Month-to-date": "This Month-to-date",
  "This Fiscal Quarter": "This Fiscal Quarter",
  "This Fiscal Quarter-to-date": "This Fiscal Quarter-to-date",
  "This Fiscal Year": "This Fiscal Year",
  "This Fiscal Year-to-date": "This Fiscal Year-to-date",
  "This Calendar Quarter": "This Calendar Quarter",
  "This Calendar Quarter-to-date": "This Calendar Quarter-to-date",
  "This Calendar Year": "This Calendar Year",
  "This Calendar Year-to-date": "This Calendar Year-to-date",
  "Yesterday": "Yesterday",
  "Last Week": "Last Week",
  "Last Week-to-date": "Last Week-to-date",
  "Last Month": "Last Month",
  "Last Month-to-date": "Last Month-to-date",
  "Last Fiscal Quarter": "Last Fiscal Quarter",
  "Last Fiscal Quarter-to-date": "Last Fiscal Quarter-to-date",
  "Last Fiscal Year": "Last Fiscal Year",
  "Last Fiscal Year-to-date": "Last Fiscal Year-to-date",
  "Last Calendar Quarter": "Last Calendar Quarter",
  "Last Calendar Quarter-to-date": "Last Calendar Quarter-to-date",
  "Last Calendar Year": "Last Calendar Year",
  "Last Calendar Year-to-date": "Last Calendar Year-to-date",
  "Next Week": "Next Week",
  "Next 4 Weeks": "Next 4 Weeks",
  "Next Month": "Next Month",
  "Next Fiscal Quarter": "Next Fiscal Quarter",
  "Next Fiscal Year": "Next Fiscal Year",
  "Next Calendar Quarter": "Next Calendar Quarter",
  "Next Calendar Year": "Next Calendar Year"
});

/** Product: ALL
  * Description: Provides for strong-typing of the DateType CustomField. */
export interface DateTypeCustomFieldDefinition extends CustomFieldDefinition {
  /** Product: ALL
    * Description: Default date value for the DateType CustomField. */
  DefaultDate?: Date;
  /** Product: ALL
    * Description: Maximum date value allowed when the DateType CustomField is created/updated. */
  MaxDate?: Date;
  /** Product: ALL
    * Description: Minimum date value allowed when the DateType CustomField is created/updated. */
  MinDate?: Date;
}

/** Product: ALL
  * Description: Enumeration of the days of
  * the week. */
export type DayOfWeekEnum = keyof typeof DayOfWeekEnum;
export const DayOfWeekEnum = Object.freeze({
  "Monday": "Monday",
  "Tuesday": "Tuesday",
  "Wednesday": "Wednesday",
  "Thursday": "Thursday",
  "Friday": "Friday",
  "Saturday": "Saturday",
  "Sunday": "Sunday"
});

/** Product: QBO
  * Description: Enum of different delivery error types. */
export type DeliveryErrorTypeEnum = keyof typeof DeliveryErrorTypeEnum;
export const DeliveryErrorTypeEnum = Object.freeze({
  "Missing Info": "Missing Info",
  "Undeliverable": "Undeliverable",
  "Delivery Server Down": "Delivery Server Down",
  "Bounced Email": "Bounced Email"
});

/** Product: QBO
  * Description: Enum of different delivery types. Supports Email and Tradeshift delivery. */
export type DeliveryTypeEnum = keyof typeof DeliveryTypeEnum;
export const DeliveryTypeEnum = Object.freeze({
  "Email": "Email",
  "Tradeshift": "Tradeshift"
});

/** Department provide a way to track different
  * segments of the business, and to break down the income and expenses
  * for each segment. Department can apply to all transactions, so
  * they're not tied to a particular client or project. */
export interface Department extends IntuitEntity {
  /** Whether or not active inactive classes may be
    * hidden from most display purposes and may not be used on
    * financial transactions */
  Active?: boolean;
  /** Address of the Department */
  Address?: PhysicalAddress;
  /** Internal use only: extension place holder for
    * DepartmentEx extensible element */
  DepartmentEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Output Only. Fully
    * qualified name of the entity. The fully qualified name prepends
    * the topmost parent, followed by each sub element separated by
    * colons. Takes the form of: [br /]
    * Parent:Location1:SubLocation1:SubLocation2 */
  FullyQualifiedName?: string;
  /** User recognizable name for the Class.[br /]
    * Length Restriction:
    * QBO: 100 characters
    * QBW: 1024 */
  Name?: string;
  /** Reference to parent class entity */
  ParentRef?: ReferenceType;
  /** Specifies the Department is a SubDepartment or
    * Not. True if subdepartment, false or null if it is top-level
    * department */
  SubDepartment?: boolean;
}

/** Transaction recording a payment from the customer
  * held in the Undeposited Funds account into the Bank account. */
export interface Deposit extends Transaction {
  CashBack?: CashBackInfo;
  /** Internal use only: extension place holder for
    * Deposit */
  DepositEx?: IntuitAnyType;
  /** DepositToAccountReferenceGroup Identifies the
    * Asset Account (bank account) to be used for this Deposit.
    * [b]QuickBooks Notes[/b][br /]
    * Required for the create operation.
    * [br /] */
  DepositToAccountRef?: ReferenceType;
  /** Product: QBO
    * Description: Indicates the
    * GlobalTax model if the model inclusive of tax, exclusive of
    * taxes or not applicable */
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  /** Product: ALL
    * Description: Total amount of the
    * transaction in the home currency for multi-currency enabled
    * companies. Single currency companies will not have this field.
    * Includes the total of all the charges, allowances and taxes.
    * Calculated by QuickBooks business logic. Cannot be written to
    * QuickBooks. */
  HomeTotalAmt?: number;
  /** Total amount of Deposit.
    * [b]QuickBooks
    * Notes[/b][br /]
    * Non QB-writable. */
  TotalAmt?: number;
}

/** Product: ALL
  * Description: Deposit detail for a
  * transaction line. */
export interface DepositLineDetail {
  /** Product: ALL
    * Description: Reference to an Expense
    * account associated with the service/non-sellable item billing. */
  AccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Check number for the
    * desposit. */
  CheckNum?: string;
  /** Product: ALL
    * Description: Reference to the Class
    * for the deposit. */
  ClassRef?: ReferenceType;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for DepositDetail */
  DepositLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Information about the
    * Customer or Job associated with the deposit. */
  Entity?: ReferenceType;
  /** Product: ALL
    * Description: Reference to the
    * PaymentMethod for the deposit. */
  PaymentMethodRef?: ReferenceType;
  /** Product: QBO
    * Description: Indicates whether the
    * tax applicable on the line is sales or purchase */
  TaxApplicableOn?: TaxApplicableOnEnum;
  /** Product: QBO
    * Description: Sales/Purchase tax code.
    * For Non US/CA Companies */
  TaxCodeRef?: ReferenceType;
  /** Product: ALL
    * Description: Type of the payment
    * transaction. For information purposes only.[br /] */
  TxnType?: TxnTypeEnum;
}

/** Product: ALL
  * Description: Information about
  * Description. */
export interface DescriptionLineDetail {
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for DescriptionLineDetail */
  DescriptionLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Date when the service is
    * performed. */
  ServiceDate?: Date;
  /** Product: QBO
    * Description: Reference to the TaxCode
    * for description only line.
    * Though it appears that TaxCode is not
    * applicable to DescriptionOnlyLine as there is no amount associated
    * with it, UK and Canada model
    * seems to associate the notion of
    * TaxCode even for just a description line
    * Marking this as QBO only
    * at this time but it looks like applicable for QB in general */
  TaxCodeRef?: ReferenceType;
}

/** Enumeration of Desktop Entity Type For
  * ThirdPartyAppId Migration */
export type DesktopEntityTypeEnum = keyof typeof DesktopEntityTypeEnum;
export const DesktopEntityTypeEnum = Object.freeze({
  "ANY": "ANY",
  "CREDIT_CARD": "CREDIT_CARD",
  "DEPOSIT": "DEPOSIT",
  "CHECK": "CHECK",
  "INVOICE": "INVOICE",
  "CASHSALE": "CASHSALE",
  "CREDIT_MEMO": "CREDIT_MEMO",
  "APP_PAY": "APP_PAY",
  "GENERAL_JOURNAL": "GENERAL_JOURNAL",
  "BILL": "BILL",
  "GENERIC": "GENERIC",
  "CREDIT_CARD_REFUND": "CREDIT_CARD_REFUND",
  "BILL_REFUND": "BILL_REFUND",
  "AR_CREDIT_CARD_REFUND": "AR_CREDIT_CARD_REFUND",
  "BILL_CHECK": "BILL_CHECK",
  "BILL_CREDIT_CARD": "BILL_CREDIT_CARD",
  "SALES_TAX_PAYMENT": "SALES_TAX_PAYMENT",
  "PURCHASE_ORDER": "PURCHASE_ORDER",
  "INVENTORY_ADJUSTMENT": "INVENTORY_ADJUSTMENT",
  "INVENTORY_RECEIPT": "INVENTORY_RECEIPT",
  "PAYCHECK": "PAYCHECK",
  "LIABILITY_CHECK": "LIABILITY_CHECK",
  "BEGIN_BALANCE_CHECK": "BEGIN_BALANCE_CHECK",
  "LIABILITY_ADJUSTMENT": "LIABILITY_ADJUSTMENT",
  "ESTIMATE": "ESTIMATE",
  "STATEMENT_CHARGE": "STATEMENT_CHARGE",
  "TRANSFER": "TRANSFER",
  "SALESORDER": "SALESORDER",
  "QBRSLIABCHECK": "QBRSLIABCHECK",
  "BUILDASSEMBLY": "BUILDASSEMBLY",
  "EFPLIABCHECK": "EFPLIABCHECK",
  "PRIOR_PMT": "PRIOR_PMT",
  "LIAB_REFUND_CHECK": "LIAB_REFUND_CHECK",
  "ITEM_SERVICE": "ITEM_SERVICE",
  "ITEM_INVENTORY": "ITEM_INVENTORY",
  "ITEM_ASSEMBLY": "ITEM_ASSEMBLY",
  "ITEM_PART": "ITEM_PART",
  "ITEM_FIXEDASSET": "ITEM_FIXEDASSET",
  "ITEM_CHARGES": "ITEM_CHARGES",
  "ITEM_SUBTOTAL": "ITEM_SUBTOTAL",
  "ITEM_GROUP": "ITEM_GROUP",
  "ITEM_DISCOUNT": "ITEM_DISCOUNT",
  "ITEM_PAYMENT": "ITEM_PAYMENT",
  "ITEM_TAXCOMP": "ITEM_TAXCOMP",
  "ITEM_TAXGROUP": "ITEM_TAXGROUP",
  "ITEM_GROUPEND": "ITEM_GROUPEND",
  "ITEM_PURCHASE": "ITEM_PURCHASE",
  "ITEM_PO": "ITEM_PO",
  "ITEM_INVOICE": "ITEM_INVOICE",
  "ITEM_ALLITEMS": "ITEM_ALLITEMS",
  "ITEM_NOTAXES": "ITEM_NOTAXES",
  "ITEM_SERVICES_AND_CHARGES": "ITEM_SERVICES_AND_CHARGES",
  "ITEM_REAL_GROUP_END": "ITEM_REAL_GROUP_END",
  "ITEM_MAX": "ITEM_MAX",
  "CUSTOMER": "CUSTOMER",
  "VENDOR": "VENDOR",
  "EMPLOYEE": "EMPLOYEE",
  "OTHERNAME": "OTHERNAME",
  "NULLLINKTYPE": "NULLLINKTYPE",
  "UNUSED1": "UNUSED1",
  "REFUNDCHECKTOCRMEMO": "REFUNDCHECKTOCRMEMO",
  "INVOICETOCRMEMO": "INVOICETOCRMEMO",
  "INVOICETOPAYMENT": "INVOICETOPAYMENT",
  "INVOICETODISCOUNT": "INVOICETODISCOUNT",
  "BILLTOCHECK": "BILLTOCHECK",
  "BILLTOCCARD": "BILLTOCCARD",
  "BILLTOCREDIT": "BILLTOCREDIT",
  "DEPOSITTOPAYMENT": "DEPOSITTOPAYMENT",
  "REFUNDCHECKTOPAYMENT": "REFUNDCHECKTOPAYMENT",
  "INVOICETOPMTLINE": "INVOICETOPMTLINE",
  "INVOICETOCREDITLINE": "INVOICETOCREDITLINE",
  "BILLTOCREDITLINE": "BILLTOCREDITLINE",
  "CREDLINETODISCLINE": "CREDLINETODISCLINE",
  "PURCHASEORDERTORECEIPT": "PURCHASEORDERTORECEIPT",
  "BILLTODISCOUNT": "BILLTODISCOUNT",
  "INVOICETODISCOUNTLINE": "INVOICETODISCOUNTLINE",
  "INVOICETOESTIMATEQTY": "INVOICETOESTIMATEQTY",
  "INVOICETOESTIMATEAMT": "INVOICETOESTIMATEAMT",
  "INVOICETOSALESORDERQTY": "INVOICETOSALESORDERQTY",
  "INVOICETOSALESORDERAMT": "INVOICETOSALESORDERAMT",
  "JOURNALENTRYTOCRMEMO": "JOURNALENTRYTOCRMEMO",
  "AR_CCREFUND_TO_CREDITMEMO": "AR_CCREFUND_TO_CREDITMEMO",
  "AR_CCREFUND_TO_PAYMENT": "AR_CCREFUND_TO_PAYMENT",
  "AR_CCREFUND_TO_JOURNAL": "AR_CCREFUND_TO_JOURNAL",
  "GIRO_TO_CHECK": "GIRO_TO_CHECK",
  "ITEM": "ITEM",
  "DEPARTMENT": "DEPARTMENT",
  "USERS": "USERS",
  "KLASS": "KLASS",
  "PAYMENT_METHOD": "PAYMENT_METHOD",
  "TERM": "TERM",
  "BUDGET": "BUDGET",
  "TAX_CODE": "TAX_CODE",
  "TAX_CODE_RATE": "TAX_CODE_RATE",
  "TAX_AGENCY": "TAX_AGENCY",
  "ATTACHABLE": "ATTACHABLE",
  "ACCOUNT": "ACCOUNT",
  "PREFERENCES": "PREFERENCES"
});

/** Product: ALL
  * Description: Discount detail for a
  * transaction line.
  * Product: QBO
  * Description: Discount detail
  * representing the total discount on a transaction. */
export interface DiscountLineDetail extends DiscountOverride {
  /** Product: ALL
    * Description: Reference to the Class
    * for the discount. */
  ClassRef?: ReferenceType;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for DiscountDetail */
  DiscountLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Date when the service
    * is performed. */
  ServiceDate?: Date;
  /** Product: ALL
    * Description: Reference to the
    * TaxCode for the discount. */
  TaxCodeRef?: ReferenceType;
}

export interface DiscountOverride {
  /** Product: ALL
    * Description: Income account used to
    * track discounts received from vendors on purchases. */
  DiscountAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Percentage by which the
    * amount due is reduced, from 0% to 100%. To enter a discount of
    * 8.5% use 8.5, not 0.085. */
  DiscountPercent?: number;
  /** Product: ALL
    * Description: Discount used in
    * calculating and applying the discount on the sales transaction
    * paid. */
  DiscountRef?: ReferenceType;
  /** Product: ALL
    * Description: True if the discount is
    * a percentage; null or false if discount based on amount. */
  PercentBased?: boolean;
}

/** Product: QBO
  * Description: Enumeration of the different types of Discounts */
export type DiscountTypeEnum = keyof typeof DiscountTypeEnum;
export const DiscountTypeEnum = Object.freeze({
  "Rate": "Rate",
  "Amount": "Amount"
});

/** Product: QBO
  * Description: EffectiveTaxRate detail */
export interface EffectiveTaxRate {
  /** Product: QBO
    * Description: Effective starting date
    * for which this taxrate is applicable */
  EffectiveDate?: Date;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for TaxLine. */
  EffectiveTaxRateEx?: IntuitAnyType;
  /** Product: QBO
    * Description: End date of this taxrate
    * applicability */
  EndDate?: Date;
  /** Product: ALL
    * Description: Represents rate value. */
  RateValue?: number;
}

/** Product: ALL
  * Description: EmailAddress type definition. This entity is always manipulated in context of another parent entity like Person, Organization etc. */
export interface EmailAddress {
  /** Product: QBW
    * Description: Email address.[br /]Max. length: 1023 characters.
    * Product: QBO
    * Description: Email address.[br /]Max. length: 100 characters. */
  Address?: string;
  /** Product: ALL
    * Description: True if this is the default email address. */
  Default?: boolean;
  /** Product: QBW
    * Description: Unique identifier for an Intuit entity. */
  Id?: string;
  /** Product: ALL
    * Description: Descriptive tag (or label) associated with the email address. Valid values are Business and Home, as defined in the EmailAddressLabelType. */
  Tag?: string;
}

/** Product: ALL
  * Description: Enumeration of type of email addresses that the data sync process understands. */
export type EmailAddressTypeEnum = keyof typeof EmailAddressTypeEnum;
export const EmailAddressTypeEnum = Object.freeze({
  "Primary": "Primary",
  "CC": "CC"
});

/** Product: QBO
  * Description: Specifies various fields
  * required for emailing different transaction */
export interface EmailDeliveryInfo extends IntuitEntity {
  /** Product: QBO
    * Description: Specifies whether
    * customer is allowed to use eInvoicing(online payment -bank or
    * ach) to pay the Invoice */
  AllowOnlineACHPayment?: boolean;
  /** Product: QBO
    * Description: Specifies whether
    * customer is allowed to use eInvoicing(online payment -credit
    * card) to pay the Invoice */
  AllowOnlineCreditCardPayment?: boolean;
  /** Product: QBO
    * Description: Specifies whether
    * online payment should be enabled for this transaction */
  AllowOnlinePayment?: boolean;
  /** Product: QBO
    * Description: Email address of
    * recipients. Multiple email address seperated with comma. */
  DeliveryAddress?: EmailAddress;
  /** Product: QBO
    * Description: Bcc email address of
    * recipients. Multiple email address seperated with comma. */
  DeliveryAddressBcc?: EmailAddress;
  /** Product: QBO
    * Description: Cc email address of
    * recipients. Multiple email address seperated with comma. */
  DeliveryAddressCc?: EmailAddress;
  /** Product: QBO
    * Description: Delivery information
    * like DeliveryTime, DeliveryType and DeliveryErrorType (if
    * applicable) */
  DeliveryInfo?: TransactionDeliveryInfo;
  /** Product: QBO
    * Description: Custom Email subject
    * and message to be used for this email. */
  EmailMessage?: EmailMessage;
  /** Product: QBO
    * Description: Specifies ETransaction
    * status of this transaction. Applicable if ETransaction is
    * enabled and this transaction is a ETransaction. */
  ETransactionStatus?: ETransactionStatusEnum;
}

/** Product: QBO
  * Description: Base type holding default subject and message for transaction emails. */
export interface EmailMessage {
  /** Product: QBO
    * Description: Message body for the email */
  Message?: string;
  /** Product: QBO
    * Description: Subject for the email */
  Subject?: string;
}

/** Defines Messages Prefs details */
export interface EmailMessagesPrefs {
  /** Product:QBO
    * Default email subject and message for
    * Estimate. */
  EstimateMessage?: EmailMessage;
  /** Product:QBO
    * Default email subject and message for
    * Invoice. */
  InvoiceMessage?: EmailMessage;
  /** Specifies Preferences classified as email
    * messages are classified as Name-Value pair */
  NameValue?: NameValue[];
  /** Product:QBO
    * Default email subject and message for
    * Sales receipt. */
  SalesReceiptMessage?: EmailMessage;
  /** Product:QBO
    * Default email subject and message for
    * Statement. */
  StatementMessage?: EmailMessage;
}

/** Product: ALL
  * Description: Enumeration of email
  * status values. */
export type EmailStatusEnum = keyof typeof EmailStatusEnum;
export const EmailStatusEnum = Object.freeze({
  "NotSet": "NotSet",
  "NeedToSend": "NeedToSend",
  "EmailSent": "EmailSent"
});

/** Describes the Party as a Employee Role view */
export interface Employee extends NameBase {
  /** BillableTime should be true if this employee’s hours are typically billed to customers. QBO only.
    * QBD Unsupported field. */
  BillableTime?: boolean;
  /** If BillableTime is true, BillRate can be set to specify this employee’s hourly billing rate. QBO only.
    * QBD Unsupported field. */
  BillRate?: number;
  /** Employee birth date */
  BirthDate?: Date;
  /** Hourly cost rate of the Employee. QBO only. QBD Unsupporetd field. */
  CostRate?: number;
  /** Internal use only: extension place holder for Employee. */
  EmployeeEx?: IntuitAnyType;
  /** Specifies the number of the employee (or account) in the employer's directory.
    * Length Restriction:
    * QBO: 15
    * QBD: 99 */
  EmployeeNumber?: string;
  /** Specifies the Employee type. For QuickBooks Desktop the valid values are defined in the EmployeeTypeEnum. */
  EmployeeType?: string;
  /** Gender details */
  Gender?: gender;
  /** Employee hired date */
  HiredDate?: Date;
  /** Represents other PhysicalAddress list */
  OtherAddr?: PhysicalAddress[];
  /** Represents primary PhysicalAddress list */
  PrimaryAddr?: PhysicalAddress;
  /** Date at which employee was releaved from the company */
  ReleasedDate?: Date;
  /** Specifies the SSN of the employee.
    * Length Restriction:
    * QBO: 15
    * QBD: 1024 */
  SSN?: string;
  /** Specifies whether the Time Entry (time sheets) should be used to create paychecks for the employee. */
  UseTimeEntry?: TimeEntryUsedForPaychecksEnum;
}

/** Product: ALL
  * Description: Employee type enumeration. */
export type EmployeeTypeEnum = keyof typeof EmployeeTypeEnum;
export const EmployeeTypeEnum = Object.freeze({
  "Officer": "Officer",
  "Owner": "Owner",
  "Regular": "Regular",
  "Statutory": "Statutory"
});

/** Product: ALL
  * Description: Possible Status of an Entity. */
export type EntityStatusEnum = keyof typeof EntityStatusEnum;
export const EntityStatusEnum = Object.freeze({
  "Deleted": "Deleted",
  "Voided": "Voided",
  "Draft": "Draft",
  "Pending": "Pending",
  "InTransit": "InTransit",
  "Synchronized": "Synchronized",
  "SyncError": "SyncError"
});

/** Product: ALL
  * Description: Enumeration of Entity
  * types. */
export type EntityTypeEnum = keyof typeof EntityTypeEnum;
export const EntityTypeEnum = Object.freeze({
  "Customer": "Customer",
  "Employee": "Employee",
  "Job": "Job",
  "Other": "Other",
  "Vendor": "Vendor"
});

/** Product: ALL
  * Description: Reference information for
  * an entity. */
export interface EntityTypeRef {
  /** Product: ALL
    * Description: Reference to the entity. */
  EntityRef?: ReferenceType;
  /** Product: ALL
    * Description: Entity type.[br /] */
  Type?: EntityTypeEnum;
}

/** Error Type detailing error */
export interface Error {
  /** Error code number, this is a required field */
  code: string;
  /** Element that caused the error */
  element?: string;

  /** Detailed error localized or unlocalized error that is thrown by the business logic backend that caused the error */
  Detail?: string;
  /** Link to get more details about error like common cause, remedy etc */
  DetailLink?: string;
  /** Localized standard message associated with the error code */
  Message?: string;
}

/** Transaction entity is the base class of all
  * transactions */
export interface Estimate extends SalesTransaction {
  /** Name of customer who accepted the estimate.
    * QBO
    * only field. */
  AcceptedBy?: string;
  /** Date estimate was accepted.
    * QBO only field. */
  AcceptedDate?: Date;
  /** Extension entity for Estimate */
  EstimateEx?: IntuitAnyType;
  /** Date by which estimate must be accepted before
    * invalidation.
    * QBO only field. */
  ExpirationDate?: Date;
}

/** Product: ALL
  * Description: Enumeration of status for
  * an estimate. */
export type EstimateStatusEnum = keyof typeof EstimateStatusEnum;
export const EstimateStatusEnum = Object.freeze({
  "Active": "Active",
  "NotActive": "NotActive"
});

/** Product: QBO
  * Description: Enumeration of
  * eTransaction prefs status. */
export type ETransactionEnabledStatusEnum = keyof typeof ETransactionEnabledStatusEnum;
export const ETransactionEnabledStatusEnum = Object.freeze({
  "Enabled": "Enabled",
  "NotApplicable": "NotApplicable"
});

/** Product: ALL
  * Description: Enumeration of
  * eTransaction status values. The statuses (Sent, Viewed, Paid,
  * Delivery Error, Updated, Sent With ICN Error) are used by QBO
  * eInvoicing. The rest statuses are to be used for Tradeshift
  * Integration */
export type ETransactionStatusEnum = keyof typeof ETransactionStatusEnum;
export const ETransactionStatusEnum = Object.freeze({
  "Sent": "Sent",
  "Viewed": "Viewed",
  "Paid": "Paid",
  "Delivery Error": "Delivery Error",
  "Updated": "Updated",
  "Error": "Error",
  "Accepted": "Accepted",
  "Rejected": "Rejected",
  "Sent With ICN Error": "Sent With ICN Error",
  "Delivered": "Delivered",
  "Disputed": "Disputed"
});

/** Describes properties of an exchange rate between
  * source and target currencies. */
export interface ExchangeRate extends IntuitEntity {
  /** Product: QBO
    * Description: Date as on which the
    * exchange rate needs to be set. */
  AsOfDate?: Date;
  /** Internal use only: extension place holder for
    * Exchange Rate */
  ExchangeRateEx?: IntuitAnyType;
  /** Product: QBO
    * Description: Exchange rate to be
    * set between these two currencies for the mentioned date. */
  Rate?: number;
  /** Product: QBO
    * Description: Universal 3-letter
    * code of source currency from which exchange rate is required,
    * usually LHS of the equation. Example: 1 USD = 65 INR. Here USD
    * would be the source currency.
    * Max Length: 3 */
  SourceCurrencyCode?: string;
  /** Product: QBO
    * Description: Universal 3-letter
    * currency code of target currency against which exchange rate is
    * required, usually RHS of the equation. Usually this would be the
    * home currency.
    * Max Length: 3 */
  TargetCurrencyCode?: string;
}

/** Product: ALL
  * Description: ExternalKey type allows an associated external ID like QuickBooks ID to be represented in Data Services. */
export type ExternalKey = string;

/** Fault entity describing the fault */
export interface Fault {
  /** Element that caused the error */
  type?: string;

  /** Error entity that describes the details of the error, if there are multiple errors, multiple occurrence of error object will be represented as multiple errors */
  Error?: Error[];
}

/** FaultTypeEnumeration list */
export type FaultTypeEnum = keyof typeof FaultTypeEnum;
export const FaultTypeEnum = Object.freeze({
  "AuthenticationFault": "AuthenticationFault",
  "AuthorizatonFault": "AuthorizatonFault",
  "ValidationFault": "ValidationFault",
  "SystemFault": "SystemFault"
});

/** Product: QBO
  * Description: Enumeration of Inventory Lots and Accounts calculation */
export type FifoCalculationStatus = keyof typeof FifoCalculationStatus;
export const FifoCalculationStatus = Object.freeze({
  "None": "None",
  "InProgress": "InProgress",
  "Completed": "Completed",
  "Error": "Error"
});

export interface FinanceChargePrefs {
  /** Product:QBW
    * Annual Interest Rate in percent */
  AnnualInterestRate?: number;
  /** Product:QBW
    * true if finance charges should apply
    * to overdue charges, in which case the charges will be applied to
    * the account referenced in FinChrgAccountRef */
  AssessFinChrgForOverdueCharges?: boolean;
  /** Product:QBW
    * If true, the Finance Charges are
    * calculated from the transaction date (Invoice, or Bill).[br /]
    * If
    * false, the Finance Charges are calculated from the due date. */
  CalcFinChrgFromTxnDate?: boolean;
  /** Product:QBW
    * [b]QuickBooks Notes[/b][br /]
    * Max
    * Length: 31 or 159 (for a fully qualified name) */
  FinChrgAccountRef?: ReferenceType;
  /** Product:QBW */
  GracePeriod?: number;
  /** Product:QBW */
  MinFinChrg?: number;
}

/** Enumeration of financing Product Type applicable to Invoice */
export type FinancingProductTypeEnum = keyof typeof FinancingProductTypeEnum;
export const FinancingProductTypeEnum = Object.freeze({
  "GET_PAID_UPFRONT": "GET_PAID_UPFRONT"
});

/** An asset you do not expect to convert to cash
  * during one year of normal operations.
  * A fixed asset is usually
  * something that is necessary for the operation of your business, such
  * as a truck, cash register, or computer. */
export interface FixedAsset extends IntuitEntity {
  /** Specifies whether the asset is new or used.
    * This will aid in calculating depreciation.[br /]
    * Length
    * Restriction:
    * QBO: 15
    * QBW: 1024 */
  AcquiredAs?: AcquiredAsEnum;
  /** Whether or not active inactive fixed assets may
    * be hidden from most display purposes and may not be used on
    * financial transactions. */
  Active?: boolean;
  /** Indicates the Fixed Asset account that tracks
    * the current value of the asset. If the same account is used for
    * all fixed assets, the current balance of this account will
    * represent the current total value of the fixed assets.[br /]
    * [br /]
    * Required for the create operation. [br /] */
  AssetAccountRef?: ReferenceType;
  /** QBW only: asset number. Maintained by the QB
    * Fixed Asset Manager. */
  AssetNum?: number;
  /** QBW only: the asset's cost or basis less
    * accumulated depreciation as of the end of the year. Maintained
    * by the QB Fixed Asset Manager. */
  BookValue?: number;
  /** QBW only: The total cost of the fixed asset.
    * This can include the cost of improvements or repairs. This
    * amount is used to calculate depreciation. Maintained by the QB
    * Fixed Asset Manager. */
  CostBasis?: number;
  /** QBW only: the total amount of depreciation
    * expense since the fixed asset was acquired as of the end of the
    * year. Maintained by the QB Fixed Asset Manager. */
  Depreciation?: number;
  /** Any description of the asset, like maker,
    * brand, and so on. */
  Description?: string;
  /** Internal use only: extension place holder for
    * FixedAsset */
  FixedAssetEx?: IntuitAnyType;
  /** Information about where the asset is located or
    * has been placed into service. */
  Location?: string;
  /** User recognizable name for the Fixed Asset
    * Item.[br /]
    * Length Restriction:
    * QBO: 15
    * QBW: 1024 */
  Name?: string;
  /** Notes about the asset that might help to track
    * it properly, such as notes about repairs or upkeep. */
  Notes?: string;
  /** The purchase order number if a purchase order
    * was used to buy the asset. */
  PONumber?: string;
  /** Specifies the asset's purchase price. */
  PurchaseCost?: number;
  /** Specifies the date the asset was purchased or
    * acquired.[br /]
    * Length Restriction:
    * QBO: 15
    * QBW: 1024 */
  PurchaseDate?: Date;
  /** User entered purchase description for the fixed
    * asset which may include user entered information to further
    * describe the details of the purchase. */
  PurchaseDesc?: string;
  /** Specifies the date the asset was sold. */
  SalesDate?: Date;
  /** User entered sales description for the fixed
    * asset which may include user entered information to further
    * describe the details of the sales. */
  SalesDesc?: string;
  /** Additional expenses incurred during the sale of
    * the asset. */
  SalesExpense?: number;
  /** Specifies the amount for which the asset was
    * sold. */
  SalesPrice?: number;
  /** The serial number of the asset. For a vehicle,
    * it can be the VIN. */
  SerialNumber?: string;
  /** Specifies the name of the vendor or payee from
    * whom the asset was purchased. */
  Vendor?: string;
  /** The date the warranty for the asset expires. */
  WarrantyExpDate?: Date;
}

/** Product: ALL
  * Description: Gender of a person enumeration. */
export type gender = keyof typeof gender;
export const gender = Object.freeze({
  "Male": "Male",
  "Female": "Female"
});

/** Product: ALL
  * Description: Contact type other than email, phone, address. Examples: "Chat", "SkypeId", "FaceBook" etc. */
export interface GenericContactType {
  /** Product: ALL
    * Description: True if this is the default contact information. */
  Default?: boolean;
  /** Product: ALL
    * Description: Unique identifier for an Intuit entity. */
  Id?: string;
  /** Product: ALL
    * Description: Name of the generic contact type. For example, "GoogleChat" related contact info can have the Name, "ChatId". */
  Name?: string;
  /** Product: ALL
    * Description: Descriptive tag associated with the contact information. */
  Tag?: string;
  /** Product: ALL
    * Description: Type of contact. For example, "GoogleChat" or "Skype". */
  Type?: string;
  /** Product: ALL
    * Description: Value of the contact type. For example, for a "GoogleChat" contact info, the Value may be the chat ID. */
  Value?: string;
}

/** Product: ALL
  * Description: Enumeration of tax model
  * types. */
export type GlobalTaxCalculationEnum = keyof typeof GlobalTaxCalculationEnum;
export const GlobalTaxCalculationEnum = Object.freeze({
  "TaxInclusive": "TaxInclusive",
  "TaxExcluded": "TaxExcluded",
  "NotApplicable": "NotApplicable"
});

/** Product: ALL
  * Description: Detail for a group item
  * line, including the lines expanded from the group item. */
export interface GroupLineDetail {
  /** Product: ALL
    * Description: Reference to a group
    * item for all the lines that belong to the group. */
  GroupItemRef: ReferenceType;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for GroupLineDetail */
  GroupLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: The list of lines
    * expanded from the group item. Note that a group line cannot itself
    * contain group lines. */
  Line?: Line[];
  /** Product: ALL
    * Description: Quantity of the group
    * item. */
  Quantity?: number;
  /** Product: ALL
    * Description: Date when the service is
    * performed. */
  ServiceDate?: Date;
  /** Product: ALL
    * Description: Unit of Measure
    * reference. */
  UOMRef?: UOMRef;
}

/** Product: QBO
  * Description: Enumeration of
  * ConfigType taxCode taxRate taxAgency */
export type GTMConfigTypeEnum = keyof typeof GTMConfigTypeEnum;
export const GTMConfigTypeEnum = Object.freeze({
  "SYSTEM_GENERATED": "SYSTEM_GENERATED",
  "USER_DEFINED": "USER_DEFINED",
  "SCRA_DEFINED": "SCRA_DEFINED",
  "HIDDEN_AGENCY": "HIDDEN_AGENCY"
});

/** Group Header */
export interface Header {
  ColData: ColData[];
}

/** Product: ALL
  * Description: Unique identifier for an Intuit entity. */
export type id = string;

/** Product: ALL
  * Description: Enumeration of possible Id Domains. NG- next gen (int); QB - Provisional DB id (string); QBO; BM (Billing Manager); QBSDK - ListID, TxnID, or TxnLineId. */
export type idDomainEnum = keyof typeof idDomainEnum;
export const idDomainEnum = Object.freeze({
  "BM": "BM",
  "NG": "NG",
  "PMT": "PMT",
  "QB": "QB",
  "QBO": "QBO",
  "QBSDK": "QBSDK"
});

/** Product: ALL
  * Description: Allows for strong-typing of Ids and qualifying the domain origin of the Id.  The valid values for the domain are defined in the idDomainEnum. */
export type IdType = string;

/** Product: ALL
  * Description: Definition of IntuitAnyType to add and extend new elements to the existing entities. */
export interface IntuitAnyType {}

/** QueryResponse entity describing the response of query */
export interface IntuitBatchRequest {
  BatchItemRequest: BatchItemRequest[];
}

/** Product: ALL
  * Description: Base type of any top level Intuit Entity of small business type. */
export interface IntuitEntity {
  /** Product: ALL
    * Description: Domain in which the entity belongs. */
  domain?: string;
  /** Product: ALL
    * Description: True if the entity representation has a partial set of elements. Output only field. */
  sparse?: boolean;
  /** Product: ALL
    * Description: System status of the entity. Output only field.[br /]
    * Filterable: ALL */
  status?: EntityStatusEnum;

  /** Specifies entity name of the attachment from where the attachment was requested */
  AttachableRef?: AttachableRef[];
  /** Product: QBW
    * Description: Custom field (or data extension).
    * Filterable: QBW */
  CustomField?: CustomField[];
  /** Product: ALL
    * Description: Unique Identifier for an Intuit entity (object). [br /]Required for the update operation.
    * Required: ALL
    * Filterable: ALL */
  Id?: string;
  /** Product: ALL
    * Description: Descriptive information about the entity.  The MetaData values are set by Data Services and are read only for all applications. */
  MetaData?: ModificationMetaData;
  /** Product: ALL
    * Description: Version number of the entity.  The SyncToken is used to lock the entity for use by one application at a time. As soon as an application modifies an entity, its SyncToken is incremented; another application's request to modify the entity with the same SyncToken will fail. Only the latest version of the entity is maintained by Data Services.  An attempt to modify an entity specifying an older SyncToken will fail. [br /]Required for the update operation.
    * Required: ALL */
  SyncToken?: string;
}

interface IntuitObjectProxyType {
  Account?: Account;
  Attachable?: Attachable;
  Bill?: Bill;
  BillPayment?: BillPayment;
  BooleanTypeCustomFieldDefinition?: BooleanTypeCustomFieldDefinition;
  Budget?: Budget;
  ChargeCredit?: ChargeCredit;
  Class?: Class;
  Company?: Company;
  CompanyCurrency?: CompanyCurrency;
  CompanyInfo?: CompanyInfo;
  CreditCardPaymentTxn?: CreditCardPaymentTxn;
  CreditMemo?: CreditMemo;
  Customer?: Customer;
  CustomerType?: CustomerType;
  CustomFieldDefinition?: CustomFieldDefinition;
  DateTypeCustomFieldDefinition?: DateTypeCustomFieldDefinition;
  Department?: Department;
  Deposit?: Deposit;
  EmailDeliveryInfo?: EmailDeliveryInfo;
  Employee?: Employee;
  Estimate?: Estimate;
  ExchangeRate?: ExchangeRate;
  FixedAsset?: FixedAsset;
  InventoryAdjustment?: InventoryAdjustment;
  InventorySite?: InventorySite;
  Invoice?: Invoice;
  Item?: Item;
  JournalCode?: JournalCode;
  JournalEntry?: JournalEntry;
  MasterAccount?: MasterAccount;
  NumberTypeCustomFieldDefinition?: NumberTypeCustomFieldDefinition;
  OtherName?: OtherName;
  Payment?: Payment;
  PaymentMethod?: PaymentMethod;
  Preferences?: Preferences;
  PriceLevel?: PriceLevel;
  Purchase?: Purchase;
  PurchaseOrder?: PurchaseOrder;
  QbdtEntityIdMapping?: QbdtEntityIdMapping;
  RecurringTransaction?: RecurringTransaction;
  RefundReceipt?: RefundReceipt;
  ReimburseCharge?: ReimburseCharge;
  SalesOrder?: SalesOrder;
  SalesReceipt?: SalesReceipt;
  SalesRep?: SalesRep;
  StatementCharge?: StatementCharge;
  Status?: Status;
  StringTypeCustomFieldDefinition?: StringTypeCustomFieldDefinition;
  SyncActivity?: SyncActivity;
  Tag?: Tag;
  Task?: Task;
  TaxAgency?: TaxAgency;
  TaxClassification?: TaxClassification;
  TaxCode?: TaxCode;
  TaxPayment?: TaxPayment;
  TaxRate?: TaxRate;
  TaxReturn?: TaxReturn;
  TaxService?: TaxService;
  TDSMetadata?: TDSMetadata;
  Term?: Term;
  TimeActivity?: TimeActivity;
  Transfer?: Transfer;
  UserAlert?: UserAlert;
  Vendor?: Vendor;
  VendorCredit?: VendorCredit;
  VendorType?: VendorType;
}

/** IntuitResponse is a holder of all types of entities that come as part of response */
export interface IntuitResponse extends IntuitObjectProxyType {
  /** Specifies the RequestId associated with the request */
  requestId?: string;
  /** Specifies the HTTP codes result of the operation */
  status?: string;
  /** Specifies the time at which request started processing in the server */
  time?: Date;

  /** Returns AttachableResponse entity with response to file upload requests */
  AttachableResponse?: AttachableResponse[];
  /** Returns BatchItems in response in case of Batch request */
  BatchItemResponse?: BatchItemResponse[];
  /** Returns CDCResponse */
  CDCResponse?: CDCResponse[];
  /** Fault or Object should be returned */
  Fault?: Fault;
  /** OLBStatus object in the response */
  OLBStatus?: OLBStatus;
  /** OLBTransaction object in the response */
  OLBTransaction?: OLBTransaction;
  /** Returns QueryResponse entity in case of query */
  QueryResponse?: QueryResponse;
  /** Returns Report entity in case of report request */
  Report?: Report;
  /** Any IntuitResponseType type derived from IntuitResponseType */
  SyncErrorResponse?: SyncErrorResponse;
  /** Indication that a request was processed, but with possible exceptional circumstances (i.e. ignored unsupported fields) that the client may want to be aware of */
  Warnings?: Warnings;
}

/** Product: QBO
  * Description: The Inventory Adjustment request element */
export interface InventoryAdjustment extends Transaction {
  /** Product: QBO
    * Description: Reference to the
    * Inventory Adjustment account used to adjust inventory.
    * This is an expense or opening balance equity account.
    * The inventory asset account is used from item's definition. */
  AdjustAccountRef: ReferenceType;
  /** Product: QBO
    * Description: Customer Reference */
  CustomerRef?: ReferenceType;
  /** Product: QBO
    * Description: When this property is set to true, the "Inventory Adjustment" is treated
    * as a notice-of-shipment or packing slip. This will cause the accounting engine to book
    * the revenue from the sale of the items. When this property is set, the SalesPrice property
    * must be provided. In order for correct accounting to occur SalesPrice (per item) amount
    * must match the sales amount on the sales transaction - but no validation of this occurs
    * within the accounting engine. */
  ShippingAdjustment?: boolean;
}

/** Product: QBW
  * Description: The InventorySite resource
  * represents a location where inventory is stored.
  * Endpoint:
  * inventorysite
  * Business Rules: [li]The site name must be unique.[/li] */
export interface InventorySite extends IntuitEntity {
  /** Product: QBW
    * Filterable: QBW
    * Description: Whether
    * the site is considered "active", still in use by the business */
  Active?: boolean;
  /** Product: QBW
    * Description: Tagged postal addresses */
  Addr?: PhysicalAddress[];
  /** Product: QBW
    * Description: Name of the person
    * responsible for the site */
  Contact?: string;
  /** Product: QBW
    * Description: Tagged phone number, possibly include pagers. */
  ContactInfo?: ContactInfo[];
  /** Product: QBW
    * Description: Whether this is the
    * default site for inventory items that do not indicate a site */
  DefaultSite?: boolean;
  /** Product: QBW
    * Description: Description */
  Description?: string;
  /** Internal use only: extension place holder for
    * InventorySite */
  InventorySiteEx?: IntuitAnyType;
  /** Product: QBW
    * Filterable: QBW
    * Description: User
    * recognizable name for the site */
  Name?: string;
}

/** Product: QBO
  * Description: The Invoice entity
  * represents an invoice to a customer. Invoice could be based on
  * salesterm with invoice and due dates for payment. Invoice supports
  * sales tax, and shipping charges as a special line item. Invoice can
  * be printed and emailed to a customer.
  * Business Rules: [li] An invoice
  * must have at least one line that describes the item and an
  * amount.[/li][li] An invoice must have a reference to a customer in
  * the header.[/li]
  * Product: QBW
  * Description: An Invoice is a financial transaction representing
  * a request for payment for goods or services that have been sold. An
  * invoice is a form that records the details of a customer's purchase,
  * such as quantity and price of the goods or services. An invoice
  * records the amount owed by a customer who does not pay in full at
  * the time of purchase. If full payment is received at the time of
  * purchase, the sale may be recorded as a sales receipt, not an
  * invoice. An invoice must contain a valid customer reference in the
  * CustomerId field and at least one line item. The referenced customer
  * must already exist in the QuickBooks company at the desktop and any
  * line items must also already exists in the QuickBooks company, or
  * the attempt to sync will fail.[br /]In general, it is a good
  * practice to specify all the header fields if you have the data. You
  * should always specify the ARAccountId; otherwise a default AR
  * account will be used and this may give you unexpected results.[/br]
  * If you want to apply one tax to all the transaction line items, use
  * the TaxId or TaxGroupId field. If you want to use more than one tax,
  * you need to use Tax Line items instead.
  * Business Rules: [li] An
  * invoice must have at least one line that describes the item.
  * [/li][li] If an account is specified in the header, the account must
  * be of the Accounts Receivable (AR) type. [/li][li] An invoice must
  * have a reference to a customer in the header.[/li] */
export interface Invoice extends SalesTransaction {
  /** Product: QBO
    * Description: Specifies whether
    * customer is allowed to use IPN to pay the Invoice */
  AllowIPNPayment?: boolean;
  /** Product: QBO
    * Description: Specifies whether
    * customer is allowed to use eInvoicing(online payment -bank or
    * ach) to pay the Invoice */
  AllowOnlineACHPayment?: boolean;
  /** Product: QBO
    * Description: Specifies whether
    * customer is allowed to use eInvoicing(online payment -credit
    * card) to pay the Invoice */
  AllowOnlineCreditCardPayment?: boolean;
  /** Product: QBO
    * Description: Specifies whether
    * customer is allowed to use eInvoicing(online payment) to pay the
    * Invoice */
  AllowOnlinePayment?: boolean;
  /** Product: QBO
    * Description: Specifies whether
    * customer is allowed to use eInvoicing(online payment -paypal or
    * venmo) to pay the Invoice */
  AllowOnlinePayPalPayment?: boolean;
  /** Product: QBO
    * Description: Indicates whether the Recurring Invoice eligible for auto payment. */
  AutoPayEligible?: boolean;
  /** Product: QBO
    * Description: call to action for this status */
  callToAction?: string;
  /** Product: QBO
    * Description: Use of Invoice of a transaction which is required by CFDI4.0 in Mexico.
    * Visit http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm and find the catalogues that contain the accepted values of cfdiUse. */
  CfdiUse?: number;
  /** Product: QBO
    * Description: Internal use only: Convenience Fee detail for the invoice */
  ConvenienceFeeDetail?: ConvenienceFeeDetail;
  /** Product: QBO
    * Description: Amount in deposit
    * against the Invoice. Supported for Invoice only. */
  Deposit?: number;
  /** Product: QBO
    * Description: Specifies the
    * eCloudStatus timeStamp(last Viewed/Sent/paid) for the invoice */
  ECloudStatusTimeStamp?: Date;
  /** Product: QBO
    * Description: Specifies the eInvoice
    * Status(SENT, VIEWED, PAID) for the invoice */
  EInvoiceStatus?: ETransactionStatusEnum;
  /** Product: QBO
    * Description: Exportation type of a transaction which is required by CFDI4.0 in Mexico.
    * Visit http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm and find the catalogues that contain the accepted values of Exportation. */
  Exportation?: string;
  /** Product: QBO
    * Description: Internal use only: Indicates invoice financing type. */
  FinancingProductType?: FinancingProductTypeEnum;
  /** Product: QBO
    * Description: Global invoice data of a transaction which is required by CFDI4.0 in Mexico. */
  GlobalInfo?: MXGlobalInfo;
  /** Product: QBO
    * Description: Internal use only: Indicates whether gratuity is enabled for this invoice. */
  GratuityEnabled?: boolean;
  /** Product: ALL
    * Description: Extension entity for
    * Invoice. */
  InvoiceEx?: IntuitAnyType;
  /** Product: All
    * Description: QBO:  Sharable link of the invoice for external users */
  InvoiceLink?: string;
  /** Product: All
    * Description: QBO:  Expiry date for Sharable link of the invoice for external users */
  InvoiceLinkExpiryDate?: Date;
  /** Product: All
    * Description: QBO:  Security code associated with Sharable link of the invoice for external users */
  InvoiceLinkSecurityCode?: string;
  /** Product: QBO
    * Description: provides invoice statuses :
    * MULTIPLE_ERRORS, DEPOSIT_ON_HOLD, DISPUTED, DEPOSIT_FAILED, PAYMENT_FAILED,
    * OVERDUE_VIEWED, OVERDUE_NOT_SENT, OVERDUE_SENT,
    * DUE_VIEWED, DUE_NOT_SENT, DUE_SENT,
    * PAID_NOT_DEPOSITED, PARTIALLY_PAID, DEPOSITED, VOIDED, REVERSED */
  invoiceStatus?: string;
  /** Product: QBO
    * Description: invoice status log */
  invoiceStatusLog?: StatusInfo[];
  /** Product: All
    * Description: QBO: Indicates the
    * less cis amount of the transaction, specific to UK region companies */
  LessCIS?: number;
  /** Product: QBO
    * Description: QBO:  Message displayed to customer about payment Instructions. eg: bank account info. */
  PaymentDetailsMessage?: string;
  /** Product: QBO
    * Description: Unique identifier for scheduled payment for invoice. Used to indicate if invoice has scheduled payment or not. */
  ScheduledPaymentId?: string;
  /** Product: QBO
    * Description: Indicates whether the Non-Recurring Invoice eligible for scheduled payment. */
  SchedulePayEligible?: boolean;
  /** Product: QBO
    * Description: Internal use only: Subscription payment setting for a Recurring Invoice */
  SubscriptionPaymentsSetting?: SubscriptionPaymentsSettingEnum;
}

/** Product: QBO
  * Description: The Item resource
  * represents any product or service that is sold or purchased.
  * Inventory items are not currently supported.
  * Product: QBW
  * Description: An item is a thing that your company buys, sells,
  * or re-sells, such as products, shipping and handling charges,
  * discounts, and sales tax (if applicable). An item is shown as a line
  * on an invoice or other sales form. The Item.Type property, which
  * specifies how the item is used, may have one of the following
  * values: [li]Assembly: The Assembly item allows you combine inventory
  * part items and other assembly items (subassemblies) into a single
  * item by defining a Bill of Materials, that lists the component parts
  * of the assembly item. You can also include the cost of building the
  * assembly item by adding the non-inventory part items, service items,
  * and other charge items to the Bill of Materials. [/li][li] Fixed
  * Asset: The Fixed Asset item represents those business assets that
  * you do not convert to cash one year of normal operation. A fixed
  * asset is usually something that is integral to your business
  * operations. For example, a truck or computer. [/li][li]Group: The
  * Group item helps you to quickly enter a group of individual items
  * that you often purchase or sell together. [li]Inventory: The
  * Inventory item is used to track merchandise which your business
  * purchases, stocks as inventory, and re-sells. QuickBooks tracks the
  * current number of inventory items in stock and the average value of
  * the inventory after the purchase and sale of every item.
  * [/li][li]Other Charge: The Other Charge item is used to charge
  * customers for the mileage expense.[/li] [li]Product The Product item
  * is used to record the sales information of a product.
  * [/li][li]Payment: The Payment item subtracts the amount of a
  * customer payment from the total amount of an invoice or statement.
  * You must create a payment item if you receive payment for an invoice
  * or statement in parts. If you receive full payment at the time of
  * sale, use a sales receipt form instead of an invoice with a payment
  * item.[/li] [li]Service: The Service item is used for the services
  * that you charge on the purchase. For example, including specialized
  * labor, consulting hours, and professional fees. [/li][li]Subtotal:
  * The Subtotal item is used when you want the total of all the items.
  * You can use this item to apply a percentage discount or
  * surcharge.[/li]
  * Business Rules: [li]The item name must be unique.
  * [/li][li]The item type must not be NULL. [/li][li]The item cannot
  * define both unit price and unit price percent simultaneously.
  * [/li][li]For the Service, Product, and Other Charge items, you must
  * specify the ID or name of the expense account or both. [/li][li]If
  * the purchase order cost is specified for the Service, Product, and
  * Other Charge items, you must specify the ID or name of the expense
  * account or both.[/li] For the Inventory and Assembly items, you must
  * specify: [li]the ID or name of the income account or both
  * [/li][li]the ID or name of the cogs account or both [/li][li]the ID
  * or name of the asset account or both [/li][li]For the Group item,
  * you must specify the tax ID or tax name or both.[/li] For the Fixed
  * Asset item, you must: [li]set the asset account type to Asset[/li]
  * [li]specify the purchase date [/li][li]specify the ID or name of the
  * income account or both[/li] */
export interface Item extends IntuitEntity {
  /** Product: QBO
    * Description: India sales tax
    * abatement rate. */
  AbatementRate?: number;
  /** Product: QBW
    * Description: True if active.
    * Inactive items may be hidden from display and may not be used in
    * financial transactions.
    * Filterable: QBW */
  Active?: boolean;
  /** Product: ALL
    * Description: Reference to the
    * Inventory Asset account that tracks the current value of the
    * inventory. If the same account is used for all inventory items,
    * the current balance of this account will represent the current
    * total value of the inventory.[br /]Required for the the
    * following item types: Assembly, Inventory.
    * Required: ALL */
  AssetAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Average cost of the
    * item, expressed in the home currency. */
  AvgCost?: number;
  /** Product: ALL
    * Description: Assembly item
    * QuantityOnHand threshold below which more assemblies should be
    * built.[br /]Applicable to the Assembly Item type only.[br /]When
    * he quantity of the assembly item gets below the BuildPoint
    * number, QuickBooks will remind the user to build more. */
  BuildPoint?: number;
  /** Product: QBO
    * Description: Reference to the Class
    * for this item. */
  ClassRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to the Cost
    * of Goods Sold account for the inventory item.[br /]Required for
    * the the following item types: Assembly, Inventory.
    * Required: ALL */
  COGSAccountRef?: ReferenceType;
  /** Product: QBO
    * Description: Use the DeferredRevenue property to indicate that the goods/services sold
    * have not yet been delivered to the customer, and therefore not appropriate for the
    * accounting engine to book as Revenue for accounting. */
  DeferredRevenue?: boolean;
  /** Product: ALL
    * Description: Optional reference to
    * the account in which the payment money is deposited.[br /]If not
    * specified, the Undeposited Funds account will be used.
    * Applicable to the Payment item type only. */
  DepositToAccountRef?: ReferenceType;
  /** Product: QBW
    * Description: User entered
    * description for the item that describes the details of the
    * service or product.[br /]Max. length: 4000 characters.
    * Product:
    * QBO
    * Description: User entered description for the item that
    * describes the details of the service or product.[br /]Max.
    * length: 4000 characters.
    * Filterable: QBO
    * Sortable: QBO */
  Description?: string;
  /** Product: ALL
    * Description: Reference to the
    * expense account used to pay the vendor for this item.[br /]Note:
    * for a service item, this may also be an equity account to record
    * a draw against the company equity to pay for the service.[br
    * /]If the Purchase information (PurchaseDesc,
    * PurchaseTaxIncluded, PurchaseCost, etc.) is provided, this
    * account is required for the the following item types: Other
    * Charge, Product, Service.
    * Required: ALL */
  ExpenseAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Fully qualified name
    * of the entity. The fully qualified name prepends the topmost
    * parent, followed by each sub element separated by colons. Takes
    * the form of: [br /] Parent:Customer:Job:Sub-job [br /] Limited
    * to 5 levels. Max. length: 41 characters (single name) or 209
    * characters (fully qualified name). */
  FullyQualifiedName?: string;
  /** Product: ALL
    * Description: Reference to the
    * posting account, that is, the account that records the proceeds
    * from the sale of this item.[br /]Required for the the following
    * types: Assembly, Inventory, Other Charge, Product, Service.
    * Required: ALL */
  IncomeAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Date of the opening
    * balance for the inventory transaction. QuickBooks creates the
    * Opening Balance inventory transaction as of the  date, and
    * calculates the total value by multiplying the cost by the
    * quantity on hand.[br /]Applies to the Quantity On Hand and Total
    * Value.[br /]Applicable to the Inventory and Assembly item types
    * only. */
  InvStartDate?: Date;
  /** Product: ALL
    * Description: Contains the detailed
    * inventory parts used when the assembly is built. Applicable to
    * an inventory assembly item only. */
  ItemAssemblyDetail?: ItemAssemblyDetail;
  /** Product: QBO
    * Description: Categorizes the given item as a product or a service. The
    * applicable values are those exposed through the
    * ItemCategoryTypeEnum. This is currently applicable only in FR
    * region. */
  ItemCategoryType?: string;
  /** Internal use only: extension place holder for
    * Item */
  ItemEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Contains the detailed
    * components of the group. Applicable to a group item only. */
  ItemGroupDetail?: ItemGroupDetail;
  /** Product: ALL
    * Description: Specifies the level of
    * the item, 0 if top level parent, otherwise specifies the depth
    * from the top parent. */
  Level?: number;
  /** Product: ALL
    * Description: Identifier provided by
    * manufacturer for the Item, for example, the model number.[br
    * /]Applicable for the the following item types: Inventory,
    * Product. */
  ManPartNum?: string;
  /** Product: QBW
    * Description: User recognizable name
    * for the Item.[br /]Max. length: 31 characters.
    * Product: QBO
    * Description: User recognizable name for the Item.[br /]Max.
    * length: 100 characters.
    * Filterable: ALL
    * Sortable: ALL
    * Required: QBW */
  Name?: string;
  /** Product: ALL
    * Description: Reference to the
    * item's parent entity. */
  ParentRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to a
    * PaymentMethod for an item of type Payment. */
  PaymentMethodRef?: ReferenceType;
  /** Product: ALL
    * Description: True if the tax amount
    * is percentage based. */
  PercentBased?: boolean;
  /** Product: ALL
    * Description: Reference to the
    * preferred vendor of this item. */
  PrefVendorRef?: ReferenceType;
  /** Product: QBW
    * Description: Lets us know if the user wants to display the subitems as a
    * group. Applicable to items of Group type only.
    * Filterable: QBW */
  PrintGroupedItems?: boolean;
  /** Product: ALL
    * Description: Amount paid when
    * buying or ordering the item, as expressed in the home currency. */
  PurchaseCost?: number;
  /** Product: ALL
    * Description: User entered purchase
    * description for the item. */
  PurchaseDesc?: string;
  /** Product: ALL
    * Description: Reference to the
    * purchase tax code for the item.[br /]Applicable to the Service,
    * Other Charge, and Part (Non-Inventory) item types. */
  PurchaseTaxCodeRef?: ReferenceType;
  /** Product: ALL
    * Description: True if the purchase
    * tax is included in the item amount, and therefore is not
    * calculated for the transaction. */
  PurchaseTaxIncluded?: boolean;
  /** Product: ALL
    * Description: Current quantity of
    * the inventory items available for sale.
    * Sortable: QBW */
  QtyOnHand?: number;
  /** Product: ALL
    * Description: Quantity of the
    * inventory item being ordered, for which there is a purchase
    * order issued. */
  QtyOnPurchaseOrder?: number;
  /** Product: ALL
    * Description: Quantity of the
    * inventory item that is placed on sales orders. */
  QtyOnSalesOrder?: number;
  /** Product: ALL
    * Description: The tax amount
    * expressed as a percent of charges entered in the current
    * transaction. To enter a rate of 10% use 10.0, not 0.01.[br
    * /]Applicable to the Service, OtherCharge or Part (Non-Inventory)
    * item types only, and only if the Purchase part of the item does
    * not exist, that is, the item is not used as a reimbursable item,
    * or as a part in assemblies. */
  RatePercent?: number;
  /** Product: ALL
    * Description: Quantity on hand
    * threshold below which a purchase order against this inventory
    * item should be issued. When the QtyOnHand is less than the
    * ReorderPoint, the QuickBooks purchase order system will prompt
    * the user to reorder. */
  ReorderPoint?: number;
  /** Product: QBO
    * Description: India sales tax
    * reverse charge rate. */
  ReverseChargeRate?: number;
  /** Product: ALL
    * Description: Reference to the sales tax code for the item.[br /]Applicable
    * to the Service, Other Charge, Part (Non-Inventory), Inventory
    * and Assembly item types only. */
  SalesTaxCodeRef?: ReferenceType;
  /** Product: ALL
    * Description: True if the sales tax
    * is included in the item amount, and therefore is not calculated
    * for the transaction. */
  SalesTaxIncluded?: boolean;
  /** Product: QBO
    * Description: India sales tax
    * service type, see ServiceTypeEnum for values. */
  ServiceType?: string;
  /** Product: QBO
    * Description: Stock Keeping Unit -
    * User entered item identifier that identifies an item uniquely
    * [br /]Max. length: 100 characters.
    * Filterable: ALL
    * Sortable: ALL */
  Sku?: string;
  /** Product: QBO
    * Description: Originating source of
    * the Item. Valid values are defined in SourceTypeEnum */
  Source?: string;
  /** Product: ALL
    * Description: True if this is a
    * special item used by QuickBooks in certain accounting functions,
    * including miscellaneous charges that do not fall into the
    * categories of service, labor, materials, or parts. Examples
    * include delivery charges, setup fees, and service charges. */
  SpecialItem?: boolean;
  /** Product: ALL
    * Description Type of special item,
    * if SpecialItem is true.[br /] */
  SpecialItemType?: SpecialItemTypeEnum;
  /** Product: ALL
    * Description: True if the item is a
    * subitem; false or null indicates a top-level item. */
  SubItem?: boolean;
  /** Product: ALL
    * Description: True if the item is
    * subject to tax. */
  Taxable?: boolean;
  /** Product: ALL
    * Description: Reference to the
    * SalesTaxCode for this item. */
  TaxClassificationRef?: ReferenceType;
  /** Product: QBO
    * Description: Quantity on hand to be
    * tracked. */
  TrackQtyOnHand?: boolean;
  /** Product: ALL
    * Description: Classification that
    * specifies the use of this item. See the description at the top
    * of the Item entity page for details. [br /]
    * Filterable: ALL */
  Type?: ItemTypeEnum;
  /** Product: ALL
    * Description: Monetary value of the
    * service or product, as expressed in the home currency.
    * Filterable: QBW
    * Sortable: QBW */
  UnitPrice?: number;
  /** Product: ALL
    * Description: Reference to the unit
    * of measure set (UOM) entity used by this item. */
  UOMSetRef?: ReferenceType;
  /** Product: ALL
    * Description: Unit of measure (UQC) text to be displayed for this line item in Invoice/Sales forms.
    * Applicable for IN Region. */
  UQCDisplayText?: string;
  /** Product: ALL
    * Description: Unit of measure for this line item as per the standard unit (UQC) defined under the GST rule. Example: KGS- kilograms, MTR- metres, SQF-  square feet. It will be shown in GSTR1 report.
    * Applicable for IN Region. */
  UQCId?: string;
}

/** Product: QBO
  * Description: Contains the line details of an inventory adjustment transaction. */
export interface ItemAdjustmentLineDetail {
  /** Product: QBO
    * Description: Class Reference */
  ClassRef?: ReferenceType;
  /** Product: QBO
    * Description: Reference to an inventory item. */
  ItemRef: ReferenceType;
  /** Product: QBO
    * Description: New quantity as of provided
    * transaction date. */
  NewQty?: number;
  /** Product: QBO
    * Description: Difference in quantity
    * it will have negative value for reducing quantity
    * positive value for increasing quantity. */
  QtyDiff?: number;
  /** Product: QBO
    * Description: Specifies the Sales Price (per item) for which the items being disbursed were sold. */
  SalesPrice?: number;
}

/** Product: ALL
  * Description: Contains the details of an
  * inventory assembly item. */
export interface ItemAssemblyDetail {
  /** Product: ALL
    * Description: Contains the line details of an inventory assembly item. */
  ItemAssemblyLine?: ItemComponentLine[];
}

/** Product: ALL
  * Description: Item based expense detail
  * for a transaction line. */
export interface ItemBasedExpenseLineDetail extends ItemLineDetail {
  /** Product: ALL
    * Description: The billable status of
    * the expense.[br /] */
  BillableStatus?: BillableStatusEnum;
  /** Product: ALL
    * Description: Reference to the
    * Customer associated with the expense. */
  CustomerRef?: ReferenceType;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for ExpenseItemDetail */
  ItemBasedExpenseLineDetailEx?: IntuitAnyType;
  /** Product: QBO
    * Description: Indicates the total
    * amount of line item including tax. */
  TaxInclusiveAmt?: number;
}

/** Product: QBO
  * Description: Enumeration of Item Category Type for France */
export type ItemCategoryTypeEnum = keyof typeof ItemCategoryTypeEnum;
export const ItemCategoryTypeEnum = Object.freeze({
  "Product": "Product",
  "Service": "Service"
});

/** Product: ALL
  * Description: Constituent line of a
  * group item. */
export interface ItemComponentLine {
  /** Product: ALL
    * Description: Reference to an Item. For an Assembly item, this must be a
    * reference to an Inventory Item needed in the assembly. */
  ItemRef?: ReferenceType;
  /** Product: ALL
    * Description: Quantity of items. */
  Qty?: number;
  /** Product: ALL
    * Description: Reference to the unit of measure (within UOMSetRef) for this line
    * item. Examples: "each" or "box". */
  UOMRef?: UOMRef;
}

/** Product: ALL
  * Description: Contains the details of a
  * group item. */
export interface ItemGroupDetail {
  /** Product: ALL
    * Description: Contains the line details of a group item. */
  ItemGroupLine?: ItemComponentLine[];
}

/** Product: ALL
  * Description: Information about the
  * goods sold: what is sold, how much/many and for what price. */
export interface ItemLineDetail {
  /** Product: ALL
    * Description: Reference to the Class
    * for the line item. */
  ClassRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to the
    * InventorySite where this item is located. */
  InventorySiteRef?: ReferenceType;
  /** Product: ALL
    * Description: An account different
    * than the account associated with the Item in the current
    * transaction line. Cannot be updated or modified. */
  ItemAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to the Item.
    * When a line lacks an ItemRef it will be treated as "documentation"
    * and the Amount will be ignored. */
  ItemRef?: ReferenceType;
  /** Product: ALL
    * Description: Markup information for
    * the Item wherever applicable. */
  MarkupInfo?: MarkupInfo;
  /** Product: ALL
    * Description: Reference to the
    * PriceLevel of the service or item for the line. */
  PriceLevelRef?: ReferenceType;
  /** Product: ALL
    * Description: Number of items for the
    * line. */
  Qty?: number;
  /** Product: ALL
    * Description: The amount is expressed
    * as a percent of charges already entered in the current
    * transaction. To enter a rate of 10% use 10.0, not 0.01. */
  RatePercent?: number;
  /** Product: ALL
    * Description: Reference to the
    * SalesTaxCode for this item. */
  TaxClassificationRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to the
    * SalesTaxCode for this item. */
  TaxCodeRef?: ReferenceType;
  /** Product: ALL
    * Description: Unit price of the
    * service or item for the line. */
  UnitPrice?: number;
  /** Product: ALL
    * Description: Reference to the
    * UOMSetREf (unit of mesasure set) that applies to this item. */
  UOMRef?: UOMRef;
}

/** Product: ALL
  * Description: ItemReceipt detail for a
  * transaction line. */
export interface ItemReceiptLineDetail {
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for ItemReceiptDetail */
  ItemReceiptLineDetailEx?: IntuitAnyType;
}

/** Product: ALL
  * Description: Enumeration of types of
  * Items in QuickBooks. */
export type ItemTypeEnum = keyof typeof ItemTypeEnum;
export const ItemTypeEnum = Object.freeze({
  "Assembly": "Assembly",
  "Category": "Category",
  "Fixed Asset": "Fixed Asset",
  "Group": "Group",
  "Inventory": "Inventory",
  "NonInventory": "NonInventory",
  "Other Charge": "Other Charge",
  "Payment": "Payment",
  "Service": "Service",
  "Subtotal": "Subtotal",
  "Discount": "Discount",
  "Tax": "Tax",
  "Tax Group": "Tax Group",
  "Bundle": "Bundle"
});

/** Product: QBW
  * Description: Details for the Job. This is applicable only to QuickBooks Windows desktop. */
export interface JobInfo {
  /** Product: QBW
    * Description: Job description. Max. length: 99 characters. */
  Description?: string;
  /** Product: QBW
    * Description: End date of the job. */
  EndDate?: Date;
  /** Product: QBW
    * Description: Reference to the JobType. */
  JobTypeRef?: ReferenceType;
  /** Product: QBW
    * Description: Projected end date of the job. */
  ProjectedEndDate?: Date;
  /** Product: QBW
    * Description: Starting date of the Job. */
  StartDate?: Date;
  /** Product: ALL
    * Description: Current status of the job. Valid values are: Awarded, Closed, InProgress, None, NotAwarded, Pending, as defined in the JobStatusEnum.[br /] */
  Status?: JobStatusEnum;
}

/** Product: ALL
  * Description: Job status enumeration. */
export type JobStatusEnum = keyof typeof JobStatusEnum;
export const JobStatusEnum = Object.freeze({
  "Awarded": "Awarded",
  "Closed": "Closed",
  "InProgress": "InProgress",
  "None": "None",
  "NotAwarded": "NotAwarded",
  "Pending": "Pending"
});

/** Product: ALL
  * Description: Job types allow for categorizing jobs so that similar jobs can be grouped and subtotaled on reports. Ultimately, they will help in determining which jobs are most profitable for the business. */
export interface JobType extends IntuitEntity {
  /** Product: ALL
    * Description: True if the Job is active. Inactive job types may be hidden from display and may not be used on financial transactions.
    * Filterable: QBW */
  Active?: boolean;
  /** Product: ALL
    * Description: Fully qualified name of the entity. The fully qualified name prepends the topmost parent, followed by each sub element separated by colons. Takes the form of Parent:Customer:Job:Sub-job. Limited to 5 levels.[br /]Max. length: 41 characters (single name) or 209 characters (fully qualified name). */
  FullyQualifiedName?: string;
  /** Product: QBW
    * Description: User recognizable name for the Job Type.[br /]Max. length: 31 characters.
    * Product: QBO
    * Description: User recognizable name for the Job Type.[br /]Max. length: 15 characters. */
  Name?: string;
  /** Product: ALL
    * Description: Reference to the JobTypeParent entity. */
  ParentRef?: ReferenceType;
}

/** Journal Code is a compliance requirement in FR. A
  * journal code is assigned to each transaction and it depends on
  * whether it is a income or a expense. */
export interface JournalCode extends IntuitEntity {
  /** Whether or not Journal codes may be hidden for
    * display purposes */
  Active?: boolean;
  /** The description of the Journal Code */
  Description?: string;
  /** Internal use only: extension place holder for
    * Journal Code extensible element */
  JournalCodeEx?: IntuitAnyType;
  /** The two letter name for the journal code */
  Name?: string;
  /** The type of the Journal Code. The applicable
    * values are those exposed through the JournalCodeTypeEnum. */
  Type?: string;
}

/** Product: QBO
  * Description: Enumeration of the different types of Journal Codes applicable in
  * FR */
export type JournalCodeTypeEnum = keyof typeof JournalCodeTypeEnum;
export const JournalCodeTypeEnum = Object.freeze({
  "Expenses": "Expenses",
  "Sales": "Sales",
  "Bank": "Bank",
  "Nouveaux": "Nouveaux",
  "Wages": "Wages",
  "Cash": "Cash",
  "Others": "Others"
});

/** Accounting transaction, consists of journal lines,
  * each of which is either a debit or a credit. The total of the debits
  * must equal the total of the credits. */
export interface JournalEntry extends Transaction {
  /** Indicates that the Journal Entry is
    * after-the-fact entry to make changes to specific accounts. */
  Adjustment?: boolean;
  /** Valid only if the company file is set up to use
    * Multi-Currency feature.
    * [b]QuickBooks Notes[/b][br /]
    * Amounts are
    * always entered in home currency for a HomeCurrencyAdjustment
    * JournalEntry. */
  EnteredInHomeCurrency?: boolean;
  /** Product: QBO
    * Description: Indicates the
    * GlobalTax model if the model inclusive of tax, exclusive of
    * taxes or not applicable */
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  /** Valid only if the company file is set up to use
    * Multi-Currency feature.
    * [b]QuickBooks Notes[/b][br /]
    * At the end
    * of a reporting period, when financial reports need to reflect a
    * current home currency value of the foreign balances, enter a
    * home currency adjustment.
    * Until the home currency value of the foreign balances is recalculated
    * using current exchange rates, reports reflect the home currency
    * value based on the exchange rates used at the time of each
    * transaction. */
  HomeCurrencyAdjustment?: boolean;
  /** Product: ALL
    * Description: Total amount of the
    * transaction in the home currency for multi-currency enabled
    * companies. Single currency companies will not have this field.
    * Includes the total of all the charges, allowances and taxes.
    * Calculated by QuickBooks business logic. Cannot be written to
    * QuickBooks. */
  HomeTotalAmt?: number;
  /** Internal use only: extension place holder for
    * JournalEntry */
  JournalEntryEx?: IntuitAnyType;
  /** Product: All
    * Description: Indicates the total
    * amount of the transaction. This includes the total of all the
    * charges, allowances and taxes. By default, this is recalculated
    * based on sub items total and overridden.
    * Product: QBW
    * Description: Indicates the total amount of the transaction. This
    * includes the total of all the charges, allowances and taxes.[br
    * /]Calculated by QuickBooks business logic; cannot be written to
    * QuickBooks.
    * Filterable: QBW
    * Sortable: QBW */
  TotalAmt?: number;
}

/** Product: ALL
  * Description: JournalEntry detail for a
  * transaction line. */
export interface JournalEntryLineDetail {
  /** Product: ALL
    * Description: Reference to the Account
    * associated with the JournalEntry line. */
  AccountRef?: ReferenceType;
  /** Product: ALL
    * Description: The billable status of
    * the journal entry line. The line is to be billed to a customer if
    * the account is an expense account and the Entity Reference
    * specifies a Customer or a Job.[br /] */
  BillableStatus?: BillableStatusEnum;
  /** Product: ALL
    * Description: Reference to the Class
    * associated with the JournalEntry line. */
  ClassRef?: ReferenceType;
  /** Product: QBO
    * Description: Represents Department
    * Reference associated with the JournalEntry line. */
  DepartmentRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference information
    * for the Entity (Customer/Vendor/Employee) associated with the
    * JournalEntry line. */
  Entity?: EntityTypeRef;
  /** Product: QBO
    * Description: The Journal Code that should be associated for every journal
    * entry line. This is applicable only for FR. */
  JournalCodeRef?: ReferenceType;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for JournalEntryDetail */
  JournalEntryLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Indicates whether the
    * JournalEntry line is a Debit or Credit.[br /] */
  PostingType?: PostingTypeEnum;
  /** Product: QBO
    * Description: Tax applicable for this
    * line transaction line */
  TaxAmount?: number;
  /** Product: QBO
    * Description: Indicates whether the
    * tax applicable on the line is sales or purchase */
  TaxApplicableOn?: TaxApplicableOnEnum;
  /** Product: QBO
    * Description: Sales/Purchase tax code
    * associated with the JournalEntry Line. For Non US/CA Companies */
  TaxCodeRef?: ReferenceType;
  /** Product: QBO
    * Description: Indicates the total
    * amount of line item including tax. */
  TaxInclusiveAmt?: number;
  /** Product: QBO
    * Description: Sales/Purchase tax rate Id
    * associated with the JournalEntry Line. For CA Companies. */
  TaxRateRef?: ReferenceType;
}

/** Product: ALL
  * Description: A line item of a
  * transaction. */
export interface Line {
  /** Product: ALL
    * Description: AccountExpense type for
    * the transaction. */
  AccountBasedExpenseLineDetail?: AccountBasedExpenseLineDetail;
  /** Product: QBW
    * Description: The amount of the line,
    * which depends on the type of the line. It can represent the
    * discount amount, charge amount, tax amount, or subtotal amount
    * based on the line type detail.
    * Product: QBO
    * Description: The amount
    * of the line depending on the type of the line. It can represent
    * the discount amount, charge amount, tax amount, or subtotal amount
    * based on the line type detail.[br /]Required for BillPayment,
    * Check, Estimate, Invoice, JournalEntry, Payment, SalesReceipt.
    * Required: QBO */
  Amount?: number;
  /** Product: QBW
    * Description: Custom field (or data
    * extension). Supported only for QuickBooks Windows desktop. */
  CustomField?: CustomField[];
  /** Product: ALL
    * Description: Deposit type for the
    * transaction. */
  DepositLineDetail?: DepositLineDetail;
  /** Product: QBO
    * Description: Free form text
    * description of the line item that appears in the printed
    * record.[br /]Max. length: 4000 characters.[br /]Not supported for
    * BillPayment or Payment.
    * Product: QBW
    * Description: Free form text
    * description of the line item that appears in the printed record.
    * Max. length: 4000 characters. */
  Description?: string;
  /** Product: QBW
    * Description: Custom field (or data
    * extension). Supported only for QuickBooks Windows desktop. */
  DescriptionLineDetail?: DescriptionLineDetail;
  /** Product: ALL
    * Description: The type of line in the
    * transaction.[br /]
    * Required: ALL */
  DetailType?: LineDetailTypeEnum;
  /** Product: ALL
    * Description: DiscountDetail type for
    * the transaction. */
  DiscountLineDetail?: DiscountLineDetail;
  /** Product: ALL
    * Description: GroupLine type for the
    * transaction. */
  GroupLineDetail?: GroupLineDetail;
  /** Product: QBW
    * Description: ID of the Line Item.
    * Product: QBO
    * Description: ID of the Line Item.[br /]QBO considers a
    * request as an update operation for a line item, if you provide an
    * ID that is greater than zero and the ID exists in QBO.[br /]QBO
    * considers a request as an create operation for a line item in any
    * of the following conditions: No ID provided, ID provided is less
    * than or equal to zero, ID provided is greater than zero and does
    * not exist in QuickBooks.[br /]Required for updating existing
    * lines.[br /]Not supported for BillPayment, Estimate, Invoice, or
    * Payment.
    * Required: QBO */
  Id?: string;
  /** Product: QBO
    * Description: Item adjustment line type for the
    * transaction. */
  ItemAdjustmentLineDetail?: ItemAdjustmentLineDetail;
  /** Product: ALL
    * Description: ExpenseItem type for
    * the transaction. */
  ItemBasedExpenseLineDetail?: ItemBasedExpenseLineDetail;
  /** Product: ALL
    * Description: ItemReceipt type for
    * the transaction. */
  ItemReceiptLineDetail?: ItemReceiptLineDetail;
  /** Product: ALL
    * Description: JournalEntry type for
    * the transaction. */
  JournalEntryLineDetail?: JournalEntryLineDetail;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for LineBase */
  LineEx?: IntuitAnyType;
  /** Product: QBW
    * Description: Specifies the position
    * of the line in the collection of transaction lines. Supported only
    * for QuickBooks Windows desktop. */
  LineNum?: number;
  /** Product: ALL
    * Description: A link between this line
    * and a specific transaction. For example, an invoice line may link
    * to an estimate. */
  LinkedTxn?: LinkedTxn[];
  /** Product: ALL
    * Description: PaymentDetail type for
    * the transaction. */
  PaymentLineDetail?: PaymentLineDetail;
  /** Product: ALL
    * Description: PurchaseOrderItem type
    * for the transaction. */
  PurchaseOrderItemLineDetail?: PurchaseOrderItemLineDetail;
  /** Product: All
    * Description: The amount/quantity received of the line,
    * which depends on the type of the line. It can represent the
    * received amount or received quantity
    * based on the line type detail. ReadOnly field for Purchase Order.
    * Applies to existing and new entities. */
  Received?: number;
  /** Product: ALL
    * Description: ReimburseType for
    * the transaction. */
  ReimburseLineDetail?: ReimburseLineDetail;
  /** Product: ALL
    * Description: SalesItem type for the
    * transaction. */
  SalesItemLineDetail?: SalesItemLineDetail;
  /** Product: ALL
    * Description: SalesOrderItem type for
    * the transaction. */
  SalesOrderItemLineDetail?: SalesOrderItemLineDetail;
  /** Product: ALL
    * Description: SubTotalLine type for
    * the transaction. */
  SubTotalLineDetail?: SubTotalLineDetail;
  /** Product: ALL
    * Description: SalesTaxDetail type for
    * the transaction. */
  TaxLineDetail?: TaxLineDetail;
  /** Product: QBO
    * Description: TDS line type for the
    * transaction. */
  TDSLineDetail?: TDSLineDetail;
}

/** Product: ALL
  * Description: Enumeration line detail
  * types. */
export type LineDetailTypeEnum = keyof typeof LineDetailTypeEnum;
export const LineDetailTypeEnum = Object.freeze({
  "PaymentLineDetail": "PaymentLineDetail",
  "DiscountLineDetail": "DiscountLineDetail",
  "TaxLineDetail": "TaxLineDetail",
  "SalesItemLineDetail": "SalesItemLineDetail",
  "ItemBasedExpenseLineDetail": "ItemBasedExpenseLineDetail",
  "AccountBasedExpenseLineDetail": "AccountBasedExpenseLineDetail",
  "DepositLineDetail": "DepositLineDetail",
  "PurchaseOrderItemLineDetail": "PurchaseOrderItemLineDetail",
  "ItemReceiptLineDetail": "ItemReceiptLineDetail",
  "JournalEntryLineDetail": "JournalEntryLineDetail",
  "GroupLineDetail": "GroupLineDetail",
  "DescriptionOnly": "DescriptionOnly",
  "SubTotalLineDetail": "SubTotalLineDetail",
  "SalesOrderItemLineDetail": "SalesOrderItemLineDetail",
  "TDSLineDetail": "TDSLineDetail",
  "ReimburseLineDetail": "ReimburseLineDetail",
  "ItemAdjustmentLineDetail": "ItemAdjustmentLineDetail"
});

/** That minimal subset of transaction information
  * which is included on another transaction, so that a client viewing
  * the second transaction entity need not make an additional request to
  * the service in order to render it in human readable form. (e.g a
  * payment needs to refer to an invoice by number) */
export interface LinkedTxn {
  /** Product: QBW
    * Description: Transaction the current
    * entity is related to (linked to), for example, Sales Order.[br
    * /]UNSUPPORTED FIELD.
    * Product: QBO
    * Description: A list of Estimate
    * Ids that are to be associated with the invoice.[br /]Note: Only
    * Pending and Accepted Estimates can be specified. Closed and
    * Rejected estimates will be ignored. */
  TxnId?: string;
  /** Product: ALL
    * Description: A link to a specific
    * line of the LinkedTxn. If supplied the LinkedTxn field must also
    * be populated. */
  TxnLineId?: string;
  /** Product: ALL
    * Description: Transaction number. */
  TxnType?: string;
}

/** Product: ALL
  * Description: Markup information. */
export interface MarkupInfo {
  /** Product: ALL
    * Description: An account associated with markup info.
    * Cannot be updated or modified. */
  MarkUpIncomeAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Markup amount expressed
    * as a percent of charges already entered in the current
    * transaction. To enter a rate of 10% use 10.0, not 0.01. */
  Percent?: number;
  /** Product: ALL
    * Description: True if the markup is
    * expressed as a percentage. */
  PercentBased?: boolean;
  /** Product: ALL
    * Description: Reference to a
    * PriceLevel for the markup. */
  PriceLevelRef?: ReferenceType;
  /** Product: ALL
    * Description: Markup value. */
  Value?: number;
}

/** Master Account is the list of accounts in the
  * master list. The master list is the complete list of accounts
  * prescribed by the French Government. These accounts can be created
  * in the company on a need basis. The account create API needs to be
  * used to create an account. */
export interface MasterAccount extends Account {
  /** Product: ALL
    * Description: Specifies whether the account has been created in the company. */
  AccountExistsInCompany?: boolean;
}

/** Product: ALL
  * Description: Captures a memo on a
  * transaction that may (QBW) reference a company pre-defined message
  * (See CustomerMsg) */
export interface MemoRef extends Primitive.string {
  /** Product: QBW: the ID of the CustomerMsg entity
    * used to provide the string content */
  id: string;
}

/** Product: ALL
  * Description: Metadata for the instance of the entity. All properties are read only. */
export interface ModificationMetaData {
  /** Product: QBW
    * Description: Reference to the user who created the data. Read only property. */
  CreatedByRef?: ReferenceType;
  /** Product: ALL
    * Description: Time the entity was created in the source domain (QBD or QBO). Read only property.
    * Filterable: ALL
    * Sortable: ALL */
  CreateTime?: Date;
  /** Product: QBW
    * Description: Time the entity was last updated in QB. Read only property. */
  LastChangedInQB?: Date;
  /** Product: QBW
    * Description: Reference to the user who last modified the entity. Read only property. */
  LastModifiedByRef?: ReferenceType;
  /** Product: ALL
    * Description: Time the entity was last updated in the source domain (QBD or QBO). Read only property.
    * Filterable: ALL
    * Sortable: ALL */
  LastUpdatedTime?: Date;
  /** Product: QBW
    * Description: If true, the data on the cloud has been synchronized with QuickBooks for Windows. If false, the data has been created or updated on the cloud but has not been synchronized with QuickBooks for Windows. Read-only field.
    * Filterable: QBW */
  Synchronized?: boolean;
}

/** Product: ALL
  * Description: Monetary value represented with as a currency code and decimal value. Moneyis always associated with another IntuitEntity and will not be manipulated as a standalone hence it is not extended from IntuitEntity. */
export interface Money {
  /** Product: ALL
    * Description: Monetary value. */
  Amount?: number;
  /** Product: ALL
    * Description: Monetary unit as described by the ISO 4217 three letter currency code. */
  CurCode?: string;
}

/** Month enumeration */
export type MonthEnum = keyof typeof MonthEnum;
export const MonthEnum = Object.freeze({
  "January": "January",
  "February": "February",
  "March": "March",
  "April": "April",
  "May": "May",
  "June": "June",
  "July": "July",
  "August": "August",
  "September": "September",
  "October": "October",
  "November": "November",
  "December": "December"
});

/** Product: QBO
  * Description: Global invoice data of a transaction which is required by CFDI4.0 in Mexico.
  * Visit http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm and find the catalogues that contain the accepted values of Exportation, Periodicity, and Year. */
export interface MXGlobalInfo {
  /** Product: QBO
    * Description: Month of global invoice data which is required by CFDI4.0 in Mexico. */
  Month?: string;
  /** Product: QBO
    * Description: Periodicity of global invoice data which is required by CFDI4.0 in Mexico. */
  Periodicity?: string;
  /** Product: QBO
    * Description: Year of global invoice data which is required by CFDI4.0 in Mexico. */
  Year?: string;
}

/** Product: ALL
  * Description: Describes the base class of name entities (Customer, Employee, Vendor, OtherName) */
export interface NameBase extends IntuitEntity {
  /** Product: ALL
    * Description: If true, this entity is currently enabled for use by QuickBooks. The default value is true.
    * Filterable: QBW */
  Active?: boolean;
  /** Product: ALL
    * Description: Alternate phone number. */
  AlternatePhone?: TelephoneNumber;
  /** Product: ALL
    * Description: The name of the company associated with the person or organization. */
  CompanyName?: string;
  /** Product: ALL
    * Description: Reference to the tax code associated with the Customer or Vendor by default for sales or purchase taxes. */
  DefaultTaxCodeRef?: ReferenceType;
  /** Product: QBO
    * Description: The name of the person or organization as displayed. If not provided, this is populated from FullName.
    * Product: QBW
    * Description: The name of the person or organization as displayed.
    * Required: ALL
    * Filterable: QBW */
  DisplayName?: string;
  /** Product: QBW
    * Description: Family name or the last name of the person.[br /]Max. length: 25 characters.[br /]At least one of the name elements is required: Title, GivenName, MiddleName, or FamilyName.
    * Product: QBO
    * Description: Family name or the last name of the person.[br /]Max. length: 15 characters.[br /]At least one of the name elements is required: Title, GivenName, MiddleName, FamilyName, or Suffix.
    * Filterable: ALL
    * Sortable: ALL */
  FamilyName?: string;
  /** Product: ALL
    * Description: Fax number. */
  Fax?: TelephoneNumber;
  /** Product: ALL
    * Description: Fully qualified name of the entity. The fully qualified name prepends the topmost parent, followed by each sub element separated by colons. Takes the form of Parent:Customer:Job:Sub-job. Limited to 5 levels.[br /]Max. length: 41 characters (single name) or 209 characters (fully qualified name). */
  FullyQualifiedName?: string;
  /** Product: QBW
    * Description: Given name or first name of a person.[br /]Max. length: 25 characters.[br /]At least one of the name elements is required: Title, GivenName, MiddleName, or FamilyName.
    * Product: QBO
    * Description: Given name or first name of a person.[br /]Max. length: 25 characters.[br /]At least one of the name elements is required: Title, GivenName, MiddleName, FamilyName, or Suffix.
    * Filterable: ALL
    * Sortable: ALL */
  GivenName?: string;
  /** Product: QBO
    * Description: IntuitId represents the realm id, authid or an entity id. An entity is a new type of IAM identity that represents a person or a business which has no Intuit authentication context */
  IntuitId?: string;
  /** Product: QBW
    * Description: Middle name of the person. The person can have zero or more middle names.[br /]Max. length: 5 characters.[br /]At least one of the name elements is required: Title, GivenName, MiddleName, or FamilyName.
    * Product: QBO
    * Description: Middle name of the person. The person can have zero or more middle names.[br /]Max. length: 15 characters.[br /]At least one of the name elements is required: Title, GivenName, MiddleName, FamilyName, or Suffix.
    * Filterable: ALL
    * Sortable: ALL */
  MiddleName?: string;
  /** Product: ALL
    * Description: Mobile phone number. */
  Mobile?: TelephoneNumber;
  /** Product: QBW
    * Description: True if the entity represents an organization; otherwise the entity represents a person. Default is NULL or False, representing a person. */
  Organization?: boolean;
  /** Product: QBW
    * Description: List of ContactInfo entities of any contact info type. The ContactInfo Type values are defined in the ContactTypeEnum. */
  OtherContactInfo?: ContactInfo[];
  /** Product: ALL
    * Description: Primary email address. */
  PrimaryEmailAddr?: EmailAddress;
  /** Product: ALL
    * Description: Primary phone number. */
  PrimaryPhone?: TelephoneNumber;
  /** Product: ALL
    * Description: Name of the person or organization as printed on a check. If not provided, this is populated from FullName. */
  PrintOnCheckName?: string;
  /** Product: QBO
    * Description: Suffix appended to the name of a person. For example, Senior, Junior, etc. QBO only field.[br /]Max. length: 15 characters.[br /]At least one of the name elements is required: Title, GivenName, MiddleName, FamilyName, or Suffix. */
  Suffix?: string;
  /** Product: ALL
    * Description: QBW: Title of the person. The person can have zero or more titles.
    * Description: QBO: Title of the person. The person can have zero or more titles.
    * InputType: ReadWrite
    * ValidRange: QBW: Min=0, Max=15
    * ValidationRules: QBW: At least one of the name elements is required: Title, GivenName, MiddleName, or FamilyName.
    * ValidationRules: QBO: At least one of the name elements is required: Title, GivenName, MiddleName, FamilyName, or Suffix.
    * I18n: ALL */
  Title?: string;
  /** Product: QBW
    * Description: The ID of the Intuit user associated with this name.  Note: this is NOT the Intuit AuthID of the user. */
  UserId?: string;
  /** Auto generated Public ID when a new customer/vendor/employee is added to QBO. (ReadOnly) */
  V4IDPseudonym?: string;
  /** Product: ALL
    * Description: Website address (URI). */
  WebAddr?: WebSiteAddress;
}

/** Product: ALL
  * Description: A name/value pair that allows the client to include data that is meaningful in the domain of origin, outside of the Intuit domain. */
export interface NameValue {
  /** Product: ALL
    * Description: Name of the element. */
  Name?: string;
  /** Product: ALL
    * Description: Value of the element. */
  Value?: string;
}

/** Product: ALL
  * Description: Provides for strong-typing of the NumberType CustomField. */
export interface NumberTypeCustomFieldDefinition extends CustomFieldDefinition {
  /** Product: ALL
    * Description: Default decimal value for the NumberType CustomField. */
  DefaultValue?: number;
  /** Product: ALL
    * Description: Maximum decimal value allowed when the NumberType CustomField is created/updated. */
  MaxValue?: number;
  /** Product: ALL
    * Description: Minimum decimal value allowed when the NumberType CustomField is created/updated. */
  MinValue?: number;
}

/** Product: ALL
  * Description: Supported Intuit entity/object names. */
export type objectNameEnumType = keyof typeof objectNameEnumType;
export const objectNameEnumType = Object.freeze({
  "Account": "Account",
  "All": "All",
  "Attachable": "Attachable",
  "Bill": "Bill",
  "BillPayment": "BillPayment",
  "BOMComponent": "BOMComponent",
  "ChargeCredit": "ChargeCredit",
  "Class": "Class",
  "Company": "Company",
  "CompanyInfo": "CompanyInfo",
  "CreditCardPaymentTxn": "CreditCardPaymentTxn",
  "CreditMemo": "CreditMemo",
  "Customer": "Customer",
  "CustomerType": "CustomerType",
  "Discount": "Discount",
  "Department": "Department",
  "Deposit": "Deposit",
  "Employee": "Employee",
  "Estimate": "Estimate",
  "FixedAsset": "FixedAsset",
  "InventoryAdjustment": "InventoryAdjustment",
  "InventorySite": "InventorySite",
  "Invoice": "Invoice",
  "Item": "Item",
  "ItemReceipt": "ItemReceipt",
  "JournalEntry": "JournalEntry",
  "ListObjectType": "ListObjectType",
  "Names": "Names",
  "OtherName": "OtherName",
  "Payment": "Payment",
  "PaymentMethod": "PaymentMethod",
  "Preferences": "Preferences",
  "PriceLevel": "PriceLevel",
  "Purchase": "Purchase",
  "PurchaseOrder": "PurchaseOrder",
  "RecurringTransaction": "RecurringTransaction",
  "RefundReceipt": "RefundReceipt",
  "ReimburseCharge": "ReimburseCharge",
  "Report": "Report",
  "SalesOrder": "SalesOrder",
  "SalesReceipt": "SalesReceipt",
  "SalesRep": "SalesRep",
  "ShipMethod": "ShipMethod",
  "StatementCharge": "StatementCharge",
  "Tag": "Tag",
  "TaxCode": "TaxCode",
  "TaxClassification": "TaxClassification",
  "TaxPayment": "TaxPayment",
  "TaxRate": "TaxRate",
  "TaxReturn": "TaxReturn",
  "Term": "Term",
  "TimeActivity": "TimeActivity",
  "Transfer": "Transfer",
  "Transaction": "Transaction",
  "TxnLocation": "TxnLocation",
  "UOM": "UOM",
  "Vendor": "Vendor",
  "VendorCredit": "VendorCredit",
  "CustomFieldDefinition": "CustomFieldDefinition"
});

/** Describes OLBAccount details */
export interface OLBAccount {
  /** Account details that contains possibly credit
    * card number, last 5 digits */
  AccountDetails?: string;
  /** Product: ALL
    * Description: AccountId to be enabled or disabled */
  AccountId?: ReferenceType;
  /** Specifies which version is being used (such as v1
    * or v2). This field is optional. */
  AppVersion?: string;
  /** The last bank balance. This field is optional. */
  LastBankBalance?: number;
  /** True when the AccountId is linked to an IPP app
    * and false when the AccountId is delinked from the IPP app */
  SubscribedToApp?: boolean;
}

/** Describes list of OLBAccounts that needs to be
  * enabled or disabled */
export interface OLBStatus {
  /** Product: ALL
    * Description: Account details */
  OLBAccount?: OLBAccount[];
}

/** Describes OLBTransactions list that are downloaded */
export interface OLBTransaction {
  /** Product: ALL
    * Description: Last time OLB transactions where downloaded from the bank */
  OLBDownloadTime?: Date;
  /** List of OLB transactions */
  OLBTxn?: OLBTxn[];
}

/** Describes OLBTransactions list that are downloaded */
export interface OLBTxn {
  /** Specifies the number of records in this result */
  maxResults?: number;
  /** Specifies the starting row number in this result */
  startPosition?: number;
  /** Specifies the total count of records that satisfy
    * the filter condition */
  totalCount?: number;

  /** Product: ALL
    * Description: AccountId of the transaction */
  AccountId?: ReferenceType;
  /** Product: ALL
    * Description: Last Posting date of OLB transactions where downloaded from the
    * bank */
  LastPostingDate?: Date;
  /** Details of OLB transactions */
  OLBTxnDetail?: OLBTxnDetail[];
  /** Product: ALL
    * Description: Last time OLB transactions were downloaded from the bank */
  TxnsDownloadTime?: Date;
}

/** Describes OLBTransaction instance - one per
  * transaction downloaded */
export interface OLBTxnDetail {
  /** Amount of the transaction */
  Amount?: number;
  /** Post date of the transaction */
  PostDate?: Date;
  /** Reference Number of downloaded transaction */
  ReferenceNumber?: string;
  /** Transaction date */
  TxnDate?: Date;
  /** Olb Status of a transaction, Use
    * OLBTransactionStausEnum Approved/Pending/Deleted */
  TxnStatus?: string;
}

/** Product: All
  * Description: Enumeration of
  * OLBTransactions Status */
export type OLBTxnStatusEnum = keyof typeof OLBTxnStatusEnum;
export const OLBTxnStatusEnum = Object.freeze({
  "Pending": "Pending",
  "Approved": "Approved",
  "Deleted": "Deleted"
});

/** Enumerates list of CUD operations */
export type OperationEnum = keyof typeof OperationEnum;
export const OperationEnum = Object.freeze({
  "create": "create",
  "update": "update",
  "revert": "revert",
  "delete": "delete",
  "void": "void",
  "send": "send",
  "merge": "merge"
});

/** Describes the Other Name (aka Payee). QBD only */
export interface OtherName extends NameBase {
  /** Name or number of the account associated with this other name (payee).
    * Length Restriction:
    * QBO: 15
    * QBD: 1024 */
  AcctNum?: string;
  /** Represents other PhysicalAddress list */
  OtherAddr?: PhysicalAddress[];
  /** Internal use only: extension place holder for OtherName. */
  OtherNameEx?: IntuitAnyType;
  /** Represents primary PhysicalAddress list */
  PrimaryAddr?: PhysicalAddress;
}

/** Any other preference not covered in base is covered
  * as name value pair, for detailed explanation look at the document */
export interface OtherPrefs {
  /** Specifies extension of Preference entity to
    * allow extension of Name-Value pair based extension at the top
    * level */
  NameValue?: NameValue[];
}

/** Financial transaction representing a payment from a
  * customer applied to one or more sales transactions */
export interface Payment extends Transaction {
  /** ARAccountReferenceGroup Identifies the AR
    * Account to be used for this Payment.
    * [b]QuickBooks Notes[/b][br
    * /]
    * The AR Account should always be specified or a default will be
    * used. */
  ARAccountRef?: ReferenceType;
  CheckPayment?: CheckPayment;
  CreditCardPayment?: CreditCardPayment;
  /** Product: ALL
    * Description: Represents Customer
    * (or Job)Reference
    * Filterable: QBW */
  CustomerRef?: ReferenceType;
  /** Optional asset account specification to
    * designate the account the payment money needs to be deposited
    * to.
    * [b]QuickBooks Notes[/b][br /]
    * If not specified, the
    * Undeposited Funds account will be used. */
  DepositToAccountRef?: ReferenceType;
  /** Internal use only: extension place holder for
    * Payment */
  PaymentEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Reference to the
    * PaymentMethod. */
  PaymentMethodRef?: ReferenceType;
  /** Product: ALL
    * Description: The reference number
    * for the payment received (I.e. Check # for a check, envelope #
    * for a cash donation, CreditCardTransactionID for a credit card
    * payment) */
  PaymentRefNum?: string;
  /** Product: ALL
    * Description: Valid values are Cash, Check, CreditCard, or
    * Other. No defaults. Cash based expense is not supported by
    * QuickBooks Windows. Not applicable to Estimate and
    * SalesOrder.[br /] */
  PaymentType?: PaymentTypeEnum;
  /** Indicates that the payment should be processed
    * by merchant account service. Valid for QBO companies with credit
    * card processing.
    * QBO only field. */
  ProcessPayment?: boolean;
  /** Identifies the party or location that the
    * payment is to be remitted to or sent to.
    * [b]QuickBooks
    * Notes[/b][br /]
    * Non QB-writable. */
  RemitToRef?: ReferenceType;
  /** Product: ALL
    * Description: Indicates the total
    * amount of the entity associated. This includes the total of all
    * the payments from the Payment Details.
    * [b]QuickBooks Notes[/b][br
    * /]
    * Non QB-writable.
    * Filterable: QBW
    * Sortable: QBW */
  TotalAmt?: number;
  /** Indicates the amount that has not been applied
    * to pay amounts owed for sales transactions.
    * [b]QuickBooks
    * Notes[/b][br /]
    * Non QB-writable. */
  UnappliedAmt?: number;
}

/** Product: ALL
  * Description: Payment detail for a
  * transaction line. */
export interface PaymentLineDetail {
  /** Product: ALL
    * Description: Indicates the unpaid
    * amount of the transaction after this payment is applied.[br
    * /]Cannot be written to QuickBooks. */
  Balance?: number;
  /** Product: ALL
    * Description: Reference to the Class
    * for the line item. */
  ClassRef?: ReferenceType;
  /** Product: ALL
    * Description: Reference to a Discount
    * item and its properties that this line can overwrite. */
  Discount?: DiscountOverride;
  /** Product: ALL
    * Description: Indicates the unpaid
    * amount of the transaction after this payment is applied in home
    * currency. It is visible only for companies which have
    * multicurrency enabled[br /] Cannot be written to Quickbooks. */
  HomeBalance?: number;
  /** Product: ALL
    * Description: Reference to the Item.
    * When a line lacks an ItemRef it will be treated as "documentation"
    * and the Amount will be ignored. */
  ItemRef: ReferenceType;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for PaymentDetail */
  PaymentLineEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Date when the service is
    * performed. */
  ServiceDate?: Date;
}

/** Method of payment for received goods. */
export interface PaymentMethod extends IntuitEntity {
  /** Whether or not active inactive payment methods
    * may be hidden from most display purposes and may not be used on
    * financial transactions.
    * Filterable: QBW */
  Active?: boolean;
  /** User recognizable name for the payment
    * method.[br /]
    * Length Restriction:
    * QBO: 15
    * QBW: 31 */
  Name?: string;
  /** Internal use only: extension place holder for
    * PaymentMethod */
  PaymentMethodEx?: IntuitAnyType;
  /** Defines the type, or the ways the payment was
    * made. For QBW, the acceptable values are defined in
    * PaymentMethodEnum. For QBO, this field is restricted to
    * CREDIT_CARD or NON_CREDIT_CARD. */
  Type?: string;
}

/** Product: ALL
  * Description: Enumeration of payment
  * methods when receiving a customer payment of paying for goods. */
export type PaymentMethodEnum = keyof typeof PaymentMethodEnum;
export const PaymentMethodEnum = Object.freeze({
  "AmEx": "AmEx",
  "Cash": "Cash",
  "Check": "Check",
  "DebitCard": "DebitCard",
  "Discover": "Discover",
  "ECheck": "ECheck",
  "GiftCard": "GiftCard",
  "MasterCard": "MasterCard",
  "Other": "Other",
  "OtherCreditCard": "OtherCreditCard",
  "Visa": "Visa"
});

/** Product: ALL
  * Description: Enumeration of payable
  * status for an invoice, as follows: A pending invoice is not yet
  * approved/final/sent; not yet payable by customer. A payable invoice
  * is now payable. Partial payments may have been received, but money
  * still remains to be paid. No claim is made about due vs. overdue,
  * past due etc... A paid invoice has been paid in full. No amount
  * remains to be paid. */
export type PaymentStatusEnum = keyof typeof PaymentStatusEnum;
export const PaymentStatusEnum = Object.freeze({
  "Draft": "Draft",
  "Overdue": "Overdue",
  "Pending": "Pending",
  "Payable": "Payable",
  "Paid": "Paid",
  "Trash": "Trash",
  "UnPaid": "UnPaid"
});

/** Product: ALL
  * Description: Enumeration of payment
  * types. */
export type PaymentTypeEnum = keyof typeof PaymentTypeEnum;
export const PaymentTypeEnum = Object.freeze({
  "Cash": "Cash",
  "Check": "Check",
  "CreditCard": "CreditCard",
  "Expense": "Expense",
  "Other": "Other"
});

/** Product: ALL
  * Description: Enumeration of sales tax
  * payment basis. */
export type PaySalesTaxEnum = keyof typeof PaySalesTaxEnum;
export const PaySalesTaxEnum = Object.freeze({
  "Annually": "Annually",
  "Monthly": "Monthly",
  "Quarterly": "Quarterly"
});

/** Product: ALL
  * Description: Enumeration of per item
  * adjustments. */
export type PerItemAdjustEnum = keyof typeof PerItemAdjustEnum;
export const PerItemAdjustEnum = Object.freeze({
  "Cost": "Cost",
  "CurrentCustomPrice": "CurrentCustomPrice",
  "StandardPrice": "StandardPrice"
});

/** Product: ALL
  * Description: Physical (or postal) address type, this entity is always manipulated in context of another parent entity like Person, Organization etc. */
export interface PhysicalAddress {
  /** Product: QBW
    * Description: City name.[br /]Max. length: 31 characters.
    * Product: QBO
    * Description: City name.[br /]Max. length: 255 characters. */
  City?: string;
  /** Product: QBW
    * Description: Country name.[br /]Max. length: 31 characters.
    * Product: QBO
    * Description: Country name.[br /]Max. length: 255 characters. */
  Country?: string;
  /** Product: ALL
    * Description: Country code per ISO 3166.[br /]Unsupported field. */
  CountryCode?: string;
  /** Product: QBW
    * Description: Region within a country.  For example, state name for USA, province name for Canada.[br /]Max. length: 21 characters.
    * Product: QBO
    * Description: Globalized representation of a region. For example, state name for USA, province name for Canada.[br /]Max. length: 255 characters. */
  CountrySubDivisionCode?: string;
  /** Product: QBO
    * Description: County name.[br /]Max. length: 25 characters. */
  County?: string;
  /** Product: ALL
    * Description: Unique identifier of the Intuit entity for the address, mainly used for modifying the address.[br /]Note: There is no SyncToken for this entity because it is always associated with the IntuitEntity type that is the top level or parent entity. */
  Id?: string;
  /** Product: ALL
    * Description: Latitude coordinate of Geocode (Geospatial Entity Object Code).[br /]Unsupported field. */
  Lat?: string;
  /** Product: QBW
    * Description: First line of the address.[br /]Max. length: 41 characters.
    * Product: QBO
    * Description: First line of the address.[br /]Max. length: 500 characters. */
  Line1?: string;
  /** Product: QBW
    * Description: Second line of the address.[br /]Max. length: 41 characters.
    * Product: QBO
    * Description: Second line of the address.[br /]Max. length: 500 characters. */
  Line2?: string;
  /** Product: QBW
    * Description: Third line of the address.[br /]Max. length: 41 characters.
    * Product: QBO
    * Description: Third line of the address.[br /]Max. length: 500 characters. */
  Line3?: string;
  /** Product: QBW
    * Description: Fourth line of the address.[br /]Max. length: 41 characters.
    * Product: QBO
    * Description: Fourth line of the address.[br /]Max. length: 500 characters. */
  Line4?: string;
  /** Product: QBW
    * Description: Fifth line of the address.[br /]Max. length: 41 characters.
    * Product: QBO
    * Description: Fifth line of the address.[br /]Max. length: 500 characters. */
  Line5?: string;
  /** Product: ALL
    * Description: Longitude coordinate of Geocode (Geospatial Entity Object Code).[br /]Unsupported field. */
  Long?: string;
  /** Product: ALL
    * Description: Note for . */
  Note?: string;
  /** Product: QBW
    * Description: Postal code. For example, zip code for USA and Canada.[br /]Max. length: 13 characters.
    * Product: QBO
    * Description: Postal code. For example, zip code for USA and Canada.[br /]Max. length: 30 characters. */
  PostalCode?: string;
  /** Product: ALL
    * Description: Postal Code extension. For example, in the USA this is a 4 digit extension of the zip code. */
  PostalCodeSuffix?: string;
  /** Product: ALL
    * Description: Descriptive tag (or label) associated with the physical address. Valid values are Shipping and Billing, as defined in the PhysicalAddressLabelType. */
  Tag?: string;
}

/** Product: ALL
  * Description: Enumeration of type of addresses that the data sync process understands. */
export type PhysicalAddressTypeEnum = keyof typeof PhysicalAddressTypeEnum;
export const PhysicalAddressTypeEnum = Object.freeze({
  "Billing": "Billing",
  "Shipping": "Shipping"
});

/** Product: ALL
  * Description: Enumeration of QuickBooks
  * posting types. */
export type PostingTypeEnum = keyof typeof PostingTypeEnum;
export const PostingTypeEnum = Object.freeze({
  "Credit": "Credit",
  "Debit": "Debit"
});

/** Defines Preference strongly typed object with
  * extensions */
export interface Preferences extends IntuitEntity {
  /** Accounting info Preferences */
  AccountingInfoPrefs?: CompanyAccountingPrefs;
  /** Accounting info Preferences */
  AdvancedInventoryPrefs?: AdvancedInventoryPrefs;
  /** Currency Preferences */
  CurrencyPrefs?: CurrencyPrefs;
  /** Email messages Preferences */
  EmailMessagesPrefs?: EmailMessagesPrefs;
  /** FinanceCharges Preferences */
  FinanceChargesPrefs?: FinanceChargePrefs;
  /** Specifies extension of Preference entity to
    * allow extension of Name-Value pair based extension at the top
    * level */
  OtherPrefs?: OtherPrefs;
  /** Printable document preferences */
  PrintDocumentPrefs?: PrintDocumentPrefs;
  /** Product and Service Preferences */
  ProductAndServicesPrefs?: ProductAndServicesPrefs;
  /** Report Preferences */
  ReportPrefs?: ReportPrefs;
  /** Sales Form Preferences */
  SalesFormsPrefs?: SalesFormsPrefs;
  /** Tax Preferences */
  TaxPrefs?: TaxPrefs;
  /** Vendor and purchases Preferences */
  TimeTrackingPrefs?: TimeTrackingPrefs;
  /** Vendor and purchases Preferences */
  VendorAndPurchasesPrefs?: VendorAndPurchasesPrefs;
}

/** Product: QBW
  * Description: You can use price levels
  * to specify custom pricing for specific customers. Once you create a
  * price level for a customer, QuickBooks will automatically use the
  * custom price in new invoices, sales receipts, sales orders or credit
  * memos for that customer. You can override this automatic feature,
  * however, when you create the invoices, sales receipts, etc. The user
  * can now specify a price level on line items in the following
  * supported sales transactions: invoices, sales receipts, credit
  * memos, and sales orders. Notice that the response data for the
  * affected sales transaction does not list the price level that was
  * used. The response simply lists the Rate for the item, which was set
  * using the price level. */
export interface PriceLevel extends IntuitEntity {
  Active: boolean;
  /** Product: QBW
    * Description: Reference to the
    * currency in which the price level is expressed. */
  CurrencyRef?: ReferenceType;
  /** Product: QBW
    * Description: A positive value
    * would increase the price by the given percentage, a negative
    * value would decrease the base price by the given percentage.
    * All prices are changed by the same given percentage. */
  FixedPercentage: number;
  /** Internal use only: extension place holder for
    * PriceLevel */
  PriceLevelEx?: IntuitAnyType;
  /** Product: QBW
    * Description: A list of items and
    * the price or price percentage that applies to the item */
  PriceLevelPerItem?: PriceLevelPerItem[];
  PriceLevelType: PriceLevelTypeEnum;
}

/** Product: QBW
  * Description: A custom price or
  * percentage change from the item's base price for a specific price
  * level */
export interface PriceLevelPerItem extends IntuitEntity {
  /** Product: QBW
    * Description: A specific price for
    * the given item. */
  CustomPrice?: number;
  /** Product: QBW
    * Description: Modifies the base
    * selling price of the given item by the specified percentage. A
    * positive value increases the price, a negative value reduces
    * the price. */
  CustomPricePercent?: number;
  ItemRef?: ReferenceType;
  /** Internal use only: extension place holder for
    * PriceLevelPerItem */
  PriceLevelPerItemEx?: IntuitAnyType;
}

/** Product: ALL
  * Description: Enumeration of price level
  * types. */
export type PriceLevelTypeEnum = keyof typeof PriceLevelTypeEnum;
export const PriceLevelTypeEnum = Object.freeze({
  "FixedPercentage": "FixedPercentage",
  "PerItem": "PerItem"
});

/** Defines Messages Prefs details */
export interface PrintDocumentPrefs {
  /** Specifies Preferences classified as email
    * messages are classified as Name-Value pair */
  NameValue?: NameValue[];
}

/** Product: ALL
  * Description: Enumeration of print
  * status values. */
export type PrintStatusEnum = keyof typeof PrintStatusEnum;
export const PrintStatusEnum = Object.freeze({
  "NotSet": "NotSet",
  "NeedToPrint": "NeedToPrint",
  "PrintComplete": "PrintComplete"
});

/** Defines Product and Services Prefs details */
export interface ProductAndServicesPrefs {
  /** Product:QBO
    * ProductAndServices for purchases
    * enabled */
  ForPurchase?: boolean;
  /** Product:QBO
    * ProductAndServices for Sales enabled */
  ForSales?: boolean;
  /** Product:QBW
    * Inventory and PO are active */
  InventoryAndPurchaseOrder?: boolean;
  /** Product:QBO
    * Enable QuantityOnHand enabled */
  QuantityOnHand?: boolean;
  /** Product:QBO
    * Enable quantity with price and rate
    * enabled */
  QuantityWithPriceAndRate?: boolean;
  /** Product:QBO
    * Description: Indicates if revenue recognition is enabled for the company. True if enabled, false otherwise. */
  RevenueRecognition?: boolean;
  /** Product:QBO
    * Description: RevenueRecognitionFrequency describes how frequently revenue is recognised.
    * Possible values are Daily, Weekly, Monthly. */
  RevenueRecognitionFrequency?: string;
  /** Product:QBW. Possible values are
    * Disabled,SinglePerItem and MultiplePerItem */
  UOM?: UOMFeatureTypeEnum;
}

/** Financial Transaction information that pertains to
  * the entire Check. */
export interface Purchase extends Transaction {
  /** Specifies the account reference. Check should
    * have bank account, CreditCard should specify credit card account */
  AccountRef?: ReferenceType;
  CheckPayment?: CheckPayment;
  /** If Credit is Null or False, it is considered as
    * Charge. If true, the CreditCard represents a Refund. Valid only
    * for CreditCard transaction
    * Filterable: QBW */
  Credit?: boolean;
  CreditCardPayment?: CreditCardPayment;
  /** Specifies the party to whom a expense is
    * associated with. Can be Customer, Vendor, Employee (or OtherName
    * in case of QBW) */
  EntityRef?: ReferenceType;
  /** Product: QBO
    * Description: Indicates the
    * GlobalTax model if the model inclusive of tax, exclusive of
    * taxes or not applicable */
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  /** Product: QBO Only
    * Description: True if the Purchase should be included in annual TPAR, specific to AU region. */
  IncludeInAnnualTPAR?: boolean;
  /** Product: All
    * Description: QBO: Indicates the
    * less cis amount of the transaction, specific to UK region companies */
  LessCIS?: number;
  /** Memo that will be printed in check in case of
    * Check purchase, Memo appears on the expense report for
    * CreditCard, Memo for CashPurchase */
  Memo?: string;
  /** Product: ALL
    * Description: Reference to the
    * PaymentMethod. */
  PaymentMethodRef?: ReferenceType;
  /** Product: ALL
    * Description: The reference number
    * for the payment received (I.e. Check # for a check, envelope #
    * for a cash donation, CreditCardTransactionID for a credit card
    * payment) */
  PaymentRefNum?: string;
  /** Required element. No defaults. Expense Type
    * can be Cash, Check or CreditCard
    * Cash based expense is not
    * supported by QBW.
    * Filterable: QBW */
  PaymentType?: PaymentTypeEnum;
  /** PrintStatus if to be printed or already printed
    * information */
  PrintStatus?: PrintStatusEnum;
  /** Internal use only: extension place holder for
    * Purchase. */
  PurchaseEx?: IntuitAnyType;
  /** Address to which the payment should be
    * sent.Output only. */
  RemitToAddr?: PhysicalAddress;
  /** The total amount due, determined by taking the
    * sum of all lines associated. This includes all charges,
    * allowances, taxes, discounts, etc...
    * [b]QuickBooks Notes[/b][br
    * /]
    * Non QB-writable.
    * Output only field in case of QBO
    * Filterable:
    * QBW
    * Sortable: QBW */
  TotalAmt?: number;
  /** Product: ALL
    * Description: Transaction Id. */
  TxnId?: string;
  /** Product: ALL
    * Description: Transaction number. */
  TxnNum?: string;
}

/** Financial Transaction information that pertains to
  * the entire Bill. */
export interface PurchaseByVendor extends Transaction {
  /** Specifies which AP account the bill will be
    * credited to. Many/most small businesses have a single AP
    * account, so the account is implied. When specified, the account
    * must be a Liability account, and further, the sub-type must be
    * of type "Payables"
    * [b]QuickBooks Notes[/b][br /]
    * The AP Account
    * should always be specified or a default will be used. */
  APAccountRef?: ReferenceType;
  /** Product: QBW
    * Description: The email address to
    * which this bill is/was sent. [br/] Non QB-writable. */
  BillEmail?: EmailAddress;
  /** Product: QBO
    * Description: Indicates the
    * GlobalTax model if the model inclusive of tax, exclusive of
    * taxes or not applicable */
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  /** QBW only. Memo to be visible to Payee */
  Memo?: string;
  /** Product: QBW
    * Description: The email address to
    * which inquiries about the bill may be directed. (Also
    * appropriate for paypal payments). [br/] Non QB-writable. */
  ReplyEmail?: EmailAddress;
  /** Product: ALL
    * Description: The total amount due, determined by taking the sum of all lines
    * associated. This includes all charges, allowances, taxes,
    * discounts, etc...
    * [b]QuickBooks Notes[/b][br /]
    * Non QB-writable.
    * Output only field in case of QBO
    * Filterable: QBW
    * Sortable: QBW */
  TotalAmt?: number;
  /** Product: ALL
    * Description: Specifies the vendor reference for this transaction
    * Filterable: QBW */
  VendorRef?: ReferenceType;
}

/** PurchaseOrder is a non-posting transaction
  * representing a request to purchase goods or services from a third
  * party. */
export interface PurchaseOrder extends PurchaseByVendor {
  ClassRef?: ReferenceType;
  /** DropShip to Entity Reference */
  DropShipToEntity?: ReferenceType;
  /** The nominal date by which the bill must be
    * paid, not including any early-payment discount incentives, or
    * late payment penalties. */
  DueDate?: Date;
  EmailStatus?: EmailStatusEnum;
  /** The date when the delivery of the product is
    * expected. */
  ExpectedDate?: Date;
  /** "Free On Board", specifies the terms between
    * buyer and seller regarding transportation costs; does not have
    * any bookkeeping implications.
    * Length Restriction:
    * QBO: 15
    * QBW: 1024 */
  FOB?: string;
  InventorySiteRef?: ReferenceType;
  /** The entire transaction, or individual items are
    * manually closed, i.e. they may not be received. */
  ManuallyClosed?: boolean;
  /** The email address to which this purchase order
    * is/was sent.
    * Length Restriction:
    * QBO: 15
    * QBW: 1024 */
  POEmail?: EmailAddress;
  POStatus?: PurchaseOrderStatusEnum;
  PrintStatus?: PrintStatusEnum;
  /** Internal use only: extension place holder for
    * PurchaseOrder */
  PurchaseOrderEx?: IntuitAnyType;
  /** Information about the Customer and actual Job
    * or Project the expense must be reimbursed for. */
  ReimbursableInfoRef?: ReferenceType;
  SalesTermRef?: ReferenceType;
  /** Address to which the vendor shipped or will
    * ship any goods associated with the purchase. */
  ShipAddr?: PhysicalAddress;
  ShipMethodRef?: ReferenceType;
  /** Product: QBO
    * Description: Ship to Entity Reference. */
  ShipTo?: ReferenceType;
  /** Represents the TaxCode Reference with respect
    * to the purchase[br /] */
  TaxCodeRef?: ReferenceType;
  TemplateRef?: ReferenceType;
  /** Address to which the payment should be sent.
    * [b]QuickBooks Notes[/b][br /]
    * Non QB-writable. */
  VendorAddr?: PhysicalAddress;
}

/** Product: ALL
  * Description: PurchaseOrder item detail
  * for a transaction line. */
export interface PurchaseOrderItemLineDetail extends SalesItemLineDetail {
  /** Product: ALL
    * Description: The identifier
    * provided by manufacturer for the Item. For example, the model
    * number. */
  ManPartNum?: string;
  /** Product: ALL
    * Description: The item on the line
    * is marked as if fully receiveded, but it is closed as no longer
    * available. */
  ManuallyClosed?: boolean;
  /** Product: ALL
    * Description: Represents the
    * difference between the quantity ordered and actually
    * received.[br /]Cannot be written to QuickBooks. */
  OpenQty?: number;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for PurchaseOrderItemDetail */
  PurchaseOrderItemLineDetailEx?: IntuitAnyType;
}

/** Product: ALL
  * Description: Enumeration of status for
  * purchase order */
export type PurchaseOrderStatusEnum = keyof typeof PurchaseOrderStatusEnum;
export const PurchaseOrderStatusEnum = Object.freeze({
  "Open": "Open",
  "Closed": "Closed"
});

/** Provides the mapping between ListId and TxnId in
  * Desktop to the same Entity Id in QBO. These mappings are available
  * for only companies that have migrated from Desktop to QBO */
export interface QbdtEntityIdMapping extends IntuitEntity {
  /** Product: QBO
    * Description: The entity type name of the entity in QBO. Refer
    * QbdtEntityTypeEnum for all the values. */
  QbdtEntityType: string;
  /** Product: QBO
    * Description: The ListId or TxnId of the QB Desktop Entity. They uniquely
    * identify the entity in QB Desktop for that company. */
  QbdtExportableId: string;
  /** Product: QBO
    * Description: The Id of the QBO Entity. This id is accepted by V3 APIs. They
    * uniquely identify the entity in QBO for that company. */
  QboEntityId: string;
  /** Product: QBO
    * Description: The entity type name of the entity in QBO. Refer
    * QboEntityTypeEnum for all the values. */
  QboEntityType: string;
}

/** Enumeration of Qbo Entity Type For AppId Migration */
export type QboEntityTypeEnum = keyof typeof QboEntityTypeEnum;
export const QboEntityTypeEnum = Object.freeze({
  "CUSTOMER": "CUSTOMER",
  "VENDOR": "VENDOR",
  "EMPLOYEE": "EMPLOYEE",
  "CREDIT_CARD": "CREDIT_CARD",
  "CHECK": "CHECK",
  "INVOICE": "INVOICE",
  "RECEIVED_PAYMENT": "RECEIVED_PAYMENT",
  "GENERAL_JOURNAL": "GENERAL_JOURNAL",
  "BILL": "BILL",
  "CREDIT_CARD_CREDIT": "CREDIT_CARD_CREDIT",
  "BILL_CREDIT": "BILL_CREDIT",
  "CHARGE_CREDIT": "CHARGE_CREDIT",
  "BILL_CHECK": "BILL_CHECK",
  "BILL_CREDIT_CARD": "BILL_CREDIT_CARD",
  "CHARGE": "CHARGE",
  "TRANSFER": "TRANSFER",
  "RECEIVED_MONEY": "RECEIVED_MONEY",
  "STATEMENT": "STATEMENT",
  "REIMB_CHARGE": "REIMB_CHARGE",
  "CASH_PURCHASE": "CASH_PURCHASE",
  "CASH_SALE": "CASH_SALE",
  "CREDIT_MEMO": "CREDIT_MEMO",
  "CREDIT_REFUND": "CREDIT_REFUND",
  "ESTIMATE": "ESTIMATE",
  "INVENTORY_QUANTITY_ADJUSTMENT": "INVENTORY_QUANTITY_ADJUSTMENT",
  "PURCHASE_ORDER": "PURCHASE_ORDER",
  "PAYROLL_CHECK": "PAYROLL_CHECK",
  "TAX_PAYMENT": "TAX_PAYMENT",
  "PAYROLL_ADJUSTMENT_V2": "PAYROLL_ADJUSTMENT_V2",
  "PAYROLL_REFUND": "PAYROLL_REFUND",
  "GLOBAL_TAX_PAYMENT": "GLOBAL_TAX_PAYMENT",
  "GLOBAL_TAX_ADJUSTMENT": "GLOBAL_TAX_ADJUSTMENT",
  "JOB_INVOICE": "JOB_INVOICE",
  "ITEM": "ITEM",
  "GENERIC_EXPENSE": "GENERIC_EXPENSE",
  "TIME_ACTIVITY": "TIME_ACTIVITY",
  "DEPARTMENT": "DEPARTMENT",
  "USERS": "USERS",
  "KLASS": "KLASS",
  "PAYMENT_METHOD": "PAYMENT_METHOD",
  "MEMORIZED_TRANSACTION": "MEMORIZED_TRANSACTION",
  "TERM": "TERM",
  "BUDGET": "BUDGET",
  "TAX_CODE": "TAX_CODE",
  "TAX_CODE_RATE": "TAX_CODE_RATE",
  "TAX_AGENCY": "TAX_AGENCY",
  "ATTACHABLE": "ATTACHABLE",
  "ACCOUNT": "ACCOUNT",
  "PREFERENCES": "PREFERENCES",
  "JOURNAL_CODE": "JOURNAL_CODE",
  "DISCOUNT_RATE": "DISCOUNT_RATE",
  "BANKING_TRANSACTIONS": "BANKING_TRANSACTIONS",
  "BUSINESS_TERMS": "BUSINESS_TERMS",
  "LIABILITY_CHECK": "LIABILITY_CHECK",
  "LIABILITY_CREDIT_CARD": "LIABILITY_CREDIT_CARD",
  "LIABILITY_REFUND": "LIABILITY_REFUND",
  "PRIOR_LIABILITY_PAYMENTS": "PRIOR_LIABILITY_PAYMENTS",
  "LIABILITY_EPAY": "LIABILITY_EPAY",
  "LIABILITY_MMAP": "LIABILITY_MMAP",
  "TAX_CREDIT_UTILISE": "TAX_CREDIT_UTILISE",
  "TAX_CREDIT_DEFER": "TAX_CREDIT_DEFER",
  "TAX_CREDIT_REVERSE": "TAX_CREDIT_REVERSE",
  "TAX_CREDIT_REFUND": "TAX_CREDIT_REFUND",
  "GROSS_ADJUSTMENT": "GROSS_ADJUSTMENT",
  "REVERSE_CHARGE": "REVERSE_CHARGE",
  "DD_CHECK": "DD_CHECK",
  "PAYCHECK": "PAYCHECK",
  "PAYROLL_ADJUSTMENT": "PAYROLL_ADJUSTMENT",
  "PAYROLL_YTD": "PAYROLL_YTD",
  "SDK_USERS": "SDK_USERS",
  "PAYROLL_ITEMS": "PAYROLL_ITEMS",
  "PAY_GROUPS": "PAY_GROUPS",
  "PAID_TIME_OFF_ENTRIES": "PAID_TIME_OFF_ENTRIES",
  "TAX_JURISDICTIONS": "TAX_JURISDICTIONS",
  "MEMORIZED_REPORTS": "MEMORIZED_REPORTS",
  "OLB_FINANCIAL_INSTITUTIONS": "OLB_FINANCIAL_INSTITUTIONS",
  "DIRECT_DEPOSIT_BANK_INFO": "DIRECT_DEPOSIT_BANK_INFO",
  "REMINDERS": "REMINDERS",
  "PAYROLL_FORMS": "PAYROLL_FORMS",
  "EPAY_BANK_ACCOUNT_INFO": "EPAY_BANK_ACCOUNT_INFO",
  "EPAY_AGENCY_CREDENTIALS": "EPAY_AGENCY_CREDENTIALS",
  "EFILE_ENROLLMENT": "EFILE_ENROLLMENT",
  "TAXRETURNLINES": "TAXRETURNLINES",
  "NOTES": "NOTES",
  "PRINT_PREF": "PRINT_PREF",
  "MANAGEMENT_REPORT": "MANAGEMENT_REPORT",
  "OLB_RULES": "OLB_RULES",
  "DESKTOPIMPORT_SEED_QOH": "DESKTOPIMPORT_SEED_QOH"
});

/** Product: QBO
  * Description: Enumeration of status for
  * an estimate in QuickBooks Online. */
export type QboEstimateStatusEnum = keyof typeof QboEstimateStatusEnum;
export const QboEstimateStatusEnum = Object.freeze({
  "Accepted": "Accepted",
  "Closed": "Closed",
  "Pending": "Pending",
  "Rejected": "Rejected"
});

/** Product: ALL
  * Description: Strongly typed "quantity". */
export type quantity = number;

/** QueryResponse entity describing the response of query */
export interface QueryResponse {
  /** Specifies the number of records in this result */
  maxResults?: number;
  /** Specifies the starting row number in this result */
  startPosition?: number;
  /** Specifies the total count of records that satisfy the filter condition */
  totalCount?: number;

  /** Fault or Object should be returned */
  Fault?: Fault;
  IntuitObject?: IntuitObjectProxyType[];
  /** Indication that a request was processed, but with possible exceptional circumstances (i.e. ignored unsupported fields) that the client may want to be aware of */
  Warnings?: Warnings;
}

/** Product: ALL
  * Description: Strongly typed "ratio". */
export type ratio = number;

/** Description: Describes the Recurring Schedules for Transactions */
export interface RecurringInfo {
  /** Product: QBO
    * Description: Indicates whether the Recurring Schedule is enabled. */
  Active?: boolean;
  /** Product: QBO
    * Description: The name of the Recurring Schedule Template. */
  Name?: string;
  /** Product: QBO
    * Description: The Recur Type which can be Automated, Reminded, UnScheduled or Manual. */
  RecurType?: string;
  /** Product: QBO
    * Description: The Scheduling Information. */
  ScheduleInfo?: RecurringScheduleInfo;
}

/** Scheduling Information for the Transaction */
export interface RecurringScheduleInfo {
  /** Product: QBO
    * Description: The Day of the Month */
  DayOfMonth?: number;
  /** Product: QBO
    * Description: The Day of the Week */
  DayOfWeek?: WeekEnum;
  /** Product: QBO
    * Description: The Days before the Scheduled Date */
  DaysBefore?: number;
  /** Product: QBO
    * Description: The End Date for the Recurring Schedule */
  EndDate?: Date;
  /** Product: QBO
    * Description: The Interval Type which can be Yearly, Monthly, Daily or Weekly */
  IntervalType?: string;
  /** Product: QBO
    * Description: The Max number of Recurring Occurrences */
  MaxOccurrences?: number;
  /** Product: QBO
    * Description: The Month of the Year */
  MonthOfYear?: MonthEnum;
  /** Product: QBO
    * Description: The Date when the next Transaction will created. (Read Only) */
  NextDate?: Date;
  /** Product: QBO
    * Description: The Interval based on the Interval Type */
  NumInterval?: number;
  /** Product: QBO
    * Description: The Date when the last Transaction was created.(Read Only) */
  PreviousDate?: Date;
  /** Product: QBO
    * Description: The days before StartDate for a Reminded RecurType */
  RemindDays?: number;
  /** Product: QBO
    * Description: The Start Date for the Recurring Schedule */
  StartDate?: Date;
  /** Product: QBO
    * Description: The Week of the Month */
  WeekOfMonth?: number;
}

/** The Recurrence Transaction Object */
export interface RecurringTransaction extends IntuitEntity, IntuitObjectProxyType {}

/** Product: ALL
  * Description: Reference type of all IDs that are taken as input or output. */
export interface ReferenceType extends id {
  name?: string;
  type?: string;
}

/** Financial transaction representing a refund (or
  * credit) of payment or part of a payment for goods or services that
  * have been sold. */
export interface RefundReceipt extends SalesTransaction {
  /** Internal use only: extension place holder for
    * Refund */
  RefundReceiptEx?: IntuitAnyType;
  /** Indicates the total credit amount still
    * available to apply towards the payment.
    * [b]QuickBooks
    * Notes[/b][br /]
    * Non QB-writable. */
  RemainingCredit?: number;
}

/** Product: ALL
  * Description: Enumeration of
  * reimbursable status for purchased items/services. */
export type ReimbursableTypeEnum = keyof typeof ReimbursableTypeEnum;
export const ReimbursableTypeEnum = Object.freeze({
  "Billable": "Billable",
  "BillableHasBeenBilled": "BillableHasBeenBilled",
  "NotBillable": "NotBillable"
});

/** Product: QBO Description: Reimburse charge object
  * for QBO */
export interface ReimburseCharge extends Transaction {
  /** Total amount of the reimburse charge. */
  Amount?: number;
  /** Product: QBO Description: Customer Reference */
  CustomerRef?: ReferenceType;
  /** Product: QBO Description: Indicates whether the Charge
    * has been invoiced */
  HasBeenInvoiced?: boolean;
  /** Product: ALL
    * Description: QBW: Total amount of
    * the transaction in the home currency for multi-currency enabled
    * companies. Single currency companies will not have this field.
    * Includes the total of all the charges, allowances and taxes.
    * Calculated by QuickBooks business logic. Cannot be written to
    * QuickBooks.
    * InputType: QBW: ReadOnly */
  HomeTotalAmt?: number;
}

/** Product: ALL
  * Description: Reimburse Charge Line Detail
  * for a transaction line. */
export interface ReimburseLineDetail extends ItemLineDetail {}

/** Report Response Type */
export interface Report {
  Columns?: Columns;
  /** Report Header, contains the report options that were used to generate the report */
  Header?: ReportHeader;
  Rows?: Rows;
}

/** Product: ALL
  * Description: Enumeration of Summary Report basis. */
export type ReportBasisEnum = keyof typeof ReportBasisEnum;
export const ReportBasisEnum = Object.freeze({
  "Accrual": "Accrual",
  "Cash": "Cash"
});

/** Specifies the Header of a Report, Time report was generated, parameters corresponding to the request */
export interface ReportHeader {
  /** Specifies the class id (comma separeted) for which the report is run this is just the  id, not a reference to a class object */
  Class?: string;
  /** Specifies the currency code associated with the report, note that this is one place where this is just the currency code, not a reference to a currency object */
  Currency?: string;
  /** Specifies the customer id (comma separeted) for which the report is run this is just the id, not a reference to a customer object */
  Customer?: string;
  /** Specifies the report name */
  DateMacro?: string;
  /** Specifies the Department id (comma separeted) for which the report is run this is just the  id, not a reference to a Department object */
  Department?: string;
  /** Specifies the employee id (comma separeted) for which the report is run this is just the id, not a reference to a employee object */
  Employee?: string;
  /** End Period for which the report was generated */
  EndPeriod?: string;
  /** Specifies the product/service id (comma separeted) for which the report is run this is just the id, not a reference to a product/service object */
  Item?: string;
  /** Describes the options used for the report */
  Option?: NameValue[];
  /** Specifies the report is cash basis or accrual basis */
  ReportBasis?: ReportBasisEnum;
  /** Specifies the report name */
  ReportName?: string;
  /** Start Period for which the report was generated */
  StartPeriod?: string;
  /** Summarize columns by enumeration */
  SummarizeColumnsBy?: string;
  /** Specifies the time at which report was generated */
  Time?: Date;
  /** Specifies the vendor id (comma separeted) for which the report is run this is just the id, not a reference to a vendor object */
  Vendor?: string;
}

/** Defines Report Prefs details */
export interface ReportPrefs {
  /** Product:QBW
    * If true, the Aging Reports are based
    * on the transaction date.[br /]
    * If false, the Aging Reports are
    * based on the due date. */
  CalcAgingReportFromTxnDate?: boolean;
  /** Product:All
    * report basis */
  ReportBasis?: ReportBasisEnum;
}

/** Product: ALL
  * Description: Enumeration of rounding
  * methods. */
export type RoundingMethodEnum = keyof typeof RoundingMethodEnum;
export const RoundingMethodEnum = Object.freeze({
  "Down": "Down",
  "Nearest": "Nearest",
  "None": "None",
  "Up": "Up"
});

/** One Row can contain any number of columns */
export interface Row {
  /** Report Group Income, Expense, COGS etc.. */
  group?: string;
  /** Row type section, summary, data row etc.. */
  type: RowTypeEnum;

  ColData: ColData[];
  Header?: Header;
  id?: string;
  parentId?: string;
  Rows?: Rows;
  Summary?: Summary;
}

/** List of rows */
export interface Rows {
  Row?: Row[];
}

/** List of all row types */
export type RowTypeEnum = keyof typeof RowTypeEnum;
export const RowTypeEnum = Object.freeze({
  "Section": "Section",
  "Data": "Data"
});

/** Defines Sales Form Prefs details */
export interface SalesFormsPrefs {
  /** Product:QBO
    * Enable Deposit on Invoice */
  AllowDeposit?: boolean;
  /** QBO:Enable specifying Discount */
  AllowDiscount?: boolean;
  /** Product:All
    * Enable specifying Estimates */
  AllowEstimates?: boolean;
  /** Product:QBO
    * Enable specifying Service Dates */
  AllowServiceDate?: boolean;
  /** Product:QBO
    * Enable specifying Shipping Info */
  AllowShipping?: boolean;
  /** Product:ALL
    * Apply Credit Automatically */
  AutoApplyCredit?: boolean;
  /** Product:All
    * Apply Payments Automatically */
  AutoApplyPayments?: boolean;
  /** Product:QBO
    * Defines the CustomField definitions */
  CustomField?: CustomFieldDefinition[];
  /** Product:QBo
    * Custom Transaction Numbers enabled */
  CustomTxnNumbers?: boolean;
  /** Product:QBO
    * Default Customer message */
  DefaultCustomerMessage?: string;
  /** Product:QBO Default Delivery Method of Invoice
    * and other sales forms - Print, Email are normal options */
  DefaultDeliveryMethod?: string;
  /** QBO:Default Discount account */
  DefaultDiscountAccount?: string;
  /** QBW: used by QB desktop, not used by QBO */
  DefaultFOB?: string;
  /** Product:QBO
    * Default ItemId Reference type that is selected as part of company
    * setup */
  DefaultItem?: ReferenceType;
  /** Product:QBW
    * Default markup rate used to calculate
    * the markup amount on the transactions. To enter a markup rate of
    * 8.5%, enter 8.5, not 0.085. */
  DefaultMarkup?: number;
  /** Product:QBW
    * Cloud Max Length: 256
    * [b]QuickBooks
    * Notes[/b][br /]
    * Max Length: 31 */
  DefaultShipMethodRef?: ReferenceType;
  /** Product:QBO
    * Default shipping account */
  DefaultShippingAccount?: string;
  /** Product:QBO
    * Default Terms */
  DefaultTerms?: ReferenceType;
  /** Product:QBO
    * Enable delayed charges */
  DelayedCharges?: boolean;
  /** Product:QBO
    * Email a Copy to the company for sales form */
  EmailCopyToCompany?: boolean;
  /** Product:QBO
    * Message to customers on estimates only */
  EstimateMessage?: string;
  /** Product:QBO
    * Specifies whether salesForm PDF should be attached with
    * ETransaction emails */
  ETransactionAttachPDF?: boolean;
  /** Product:QBO
    * Specifies ETransaction preference status */
  ETransactionEnabledStatus?: ETransactionEnabledStatusEnum;
  /** Product:QBO
    * Specifies whether online payments is activated */
  ETransactionPaymentEnabled?: boolean;
  /** Product:QBO
    * Specify Invoice Message */
  InvoiceMessage?: string;
  /** Product:QBO
    * IPN integration support enable status, this allows emails to
    * include IPN link */
  IPNSupportEnabled?: boolean;
  /** Product:QBW
    * Print Item with Zero amount or not */
  PrintItemWithZeroAmount?: boolean;
  /** Product:QBO
    * Bcc Email Address for Sales forms */
  SalesEmailBcc?: EmailAddress;
  /** Product:QBO
    * Cc Email Address for Sales forms */
  SalesEmailCc?: EmailAddress;
  /** Product:All */
  TrackReimbursableExpensesAsIncome?: boolean;
  /** QBW: used by QB desktop, not used by QBO */
  UsingPriceLevels?: boolean;
  /** Product:All */
  UsingProgressInvoicing?: boolean;
  /** QBW: used by QB desktop, not used by QBO */
  UsingSalesOrders?: boolean;
}

/** Product: ALL
  * Description: SalesItem detail for a
  * transaction line. */
export interface SalesItemLineDetail extends ItemLineDetail {
  /** Product: QBO
    * Description: Use the DeferredRevenue property to indicate that the goods/services sold
    * have not yet been delivered to the customer, and therefore not appropriate for the
    * accounting engine to book as Revenue for accounting. The most typical example would be
    * inventory items that have not yet been shipped. The accounting engine will credit a
    * liability account instead of revenue account. Later a follow on transaction must be
    * entered when the sale is fulfilled, and then the accounting engine will debit the
    * liability account and credit the revenue account. */
  DeferredRevenue?: boolean;
  /** Product: QBO
    * Description: Indicates the discount amount that is applied on this line. */
  DiscountAmt?: number;
  /** Product: QBO
    * Description: Indicates the discount rate that is applied on this line. */
  DiscountRate?: number;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for SalesItemDetail */
  SalesItemLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Date when the service
    * is performed. */
  ServiceDate?: Date;
  /** Product: QBO
    * Description: Indicates the total
    * amount of line item including tax. */
  TaxInclusiveAmt?: number;
}

/** Product: QBW
  * Description: A sales order is a
  * financial transaction that represents a request received from a
  * customer to purchase products or services. Sales orders help you
  * manage the sale of products and services your customers order. For
  * example, a sales order tracks inventory that is on back order for a
  * customer. Sales Orders are supported only in QuickBooks Premier
  * (desktop) and above. However, if you are accessing a company file
  * created in Premier and above from a lesser edition of QuickBooks
  * (such as Pro), you can do queries against SalesOrders. Using sales
  * orders is optional.
  * Endpoint: services.intuit.com
  * Business Rules:
  * [li]A sales order must have at least one line that describes the
  * item. [/li][li]A sales order must have a reference to a customer in
  * the [/li][li]If you submit a query with the filter
  * IncludeDiscountLineDetails, the system retrieves either
  * DiscountAmount or DiscountRatePercent with associated values[/li] */
export interface SalesOrder extends SalesTransaction {
  /** Product: QBW
    * Description: The entire
    * transaction, or individual items are maually closed, i.e. not
    * invoiced. */
  ManuallyClosed?: boolean;
  /** Internal use only: extension place holder for
    * SalesOrder */
  SalesOrderEx?: IntuitAnyType;
}

/** Product: ALL
  * Description: SalesOrder item detail for
  * a transaction line. */
export interface SalesOrderItemLineDetail extends SalesItemLineDetail {
  /** Product: ALL
    * Description: The item on the line
    * is marked as if fully received, but it is closed as no longer
    * available. */
  ManuallyClosed?: boolean;
}

/** SalesReceipt Transaction entity */
export interface SalesReceipt extends SalesTransaction {
  /** Product: All
    * Description: QBO: Indicates the
    * less cis amount of the transaction, specific to UK region companies */
  LessCIS?: number;
  /** Extension entity for SalesReceipt */
  SalesReceiptEx?: IntuitAnyType;
}

/** Product: QBW
  * Description: The SalesRep entity allows
  * you to identify sales representatives and track their transactions.
  * A sales representative can be an employee, a vendor, or an
  * independent contractor. You can associate sales representatives with
  * sales deals to track their transactions. */
export interface SalesRep extends IntuitEntity {
  /** Product: QBW
    * Description: True if active.
    * Inactive sales reps may be hidden from display and may not be
    * used on financial transactions.
    * Filterable: QBW */
  Active?: boolean;
  /** Product: QBW
    * Description: Reference to the
    * Employee, if that is the SalesRep type. One of the three entity
    * references (either the Name or the ID of the Employee,
    * OtherName, or Vendor) is required for the Create request.
    * Required: QBW */
  EmployeeRef?: ReferenceType;
  /** Product: QBW
    * Description: User recognizable
    * initials of the Sales Rep.[br/]Required for the Create
    * request.[br/] Max Length: 5 characters. */
  Initials?: string;
  /** Product: QBW
    * Description: The SalesRep type.
    * Also, one of the three entity references (either the Name or the
    * ID of the Employee, OtherName, or Vendor) is required for the
    * Create request.[br /]
    * Required: QBW */
  NameOf?: SalesRepTypeEnum;
  /** Product: QBW
    * Description: Reference to the
    * OtherName, if that is the SalesRep type. One of the three
    * entity references (either the Name or the ID of the Employee,
    * OtherName, or Vendor) is required for the Create request.
    * Required: QBW */
  OtherNameRef?: ReferenceType;
  /** Product: QBW
    * Description: Internal use only:
    * extension place holder for SalesRep */
  SalesRepEx?: IntuitAnyType;
  /** Product: QBW
    * Description: Reference to the
    * Vendor, if that is the SalesRep type. One of the three entity
    * references (either the Name or the ID of the Employee,
    * OtherName, or Vendor) is required for the Create request.
    * Required: QBW */
  VendorRef?: ReferenceType;
}

/** Product: ALL
  * Description: Enumeration of sales rep
  * types. */
export type SalesRepTypeEnum = keyof typeof SalesRepTypeEnum;
export const SalesRepTypeEnum = Object.freeze({
  "Employee": "Employee",
  "Other": "Other",
  "Vendor": "Vendor"
});

/** Product: ALL
  * Description: Enumeration of sales term
  * types. */
export type SalesTermTypeEnum = keyof typeof SalesTermTypeEnum;
export const SalesTermTypeEnum = Object.freeze({
  "DateDriven": "DateDriven",
  "Standard": "Standard"
});

/** Product: ALL
  * Description: Base class of all Sales
  * transaction entities. */
export interface SalesTransaction extends Transaction {
  /** Product: QBO
    * Description: If false or null,
    * calculate the sales tax first, and then apply the discount. If
    * true, subtract the discount first and then calculate the sales
    * tax. */
  ApplyTaxAfterDiscount?: boolean;
  /** Product: QBW
    * Description: Reference to the
    * ARAccount (accounts receivable account) associated with the
    * transaction.
    * InputType: ReadWrite */
  ARAccountRef?: ReferenceType;
  /** Product: QBO
    * Description: If AutoDocNumber is true, DocNumber is generated automatically.
    * If false or null, the DocNumber is generated based on preference
    * of the user. */
  AutoDocNumber?: boolean;
  /** Product: QBO
    * Description: The balance reflecting
    * any payments made against the transaction. Initially this will
    * be equal to the TotalAmt.
    * Product: QBW
    * Description: Indicates the
    * unpaid amount of the transaction.
    * Filterable: ALL
    * Sortable: QBW
    * InputType: ReadOnly */
  Balance?: number;
  /** Product: ALL
    * Description: QBO: Bill-to address
    * of the Invoice.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01000_Using_Data_Service_Entities#Addresses"]Addresses[/a]
    * Description: QBW: The physical (postal) address where the bill
    * or invoice is sent.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01000_Using_Data_Service_Entities#Addresses"]Addresses[/a]
    * InputType: ReadWrite */
  BillAddr?: PhysicalAddress;
  /** Product: QBO
    * Description: Identifies the e-mail
    * address where the invoice is sent. At present, you can provide
    * only one e-mail address.[br /]If the ToBeEmailed attribute is
    * true and the BillEmail attribute contains an e-mail address, the
    * user can send an e-mail message to the e-mail address that is
    * specified in the BillEmail attribute.[br /]If the BillEmail
    * attribute contains an invalid e-mail address, QBO does not send
    * the e-mail message to the invalid e-mail address. QBO also does
    * not return any error message to indicate that the e-mail address
    * is invalid.[br /]The maximum length for BillEmail is 100
    * characters.
    * Product: QBW
    * Description: Identifies the email address
    * where the bill or invoice is sent. [br /]UNSUPPORTED FIELD. */
  BillEmail?: EmailAddress;
  /** Product: QBO
    * Description: Identifies the bcc
    * e-mail address where the invoice is sent. If the ToBeEmailed
    * attribute is true and the BillEmailBcc attribute contains an
    * e-mail address, the user can send an e-mail message to the
    * e-mail address that is specified in the BillEmailBcc
    * attribute.[br /] If the BillEmailCc attribute contains an
    * invalid bcc e-mail address, QBO does not send the e-mail message
    * to the invalid bcc e-mail address. [br /]The maximum length for
    * BillEmailBcc is 200 characters.
    * Product: QBW
    * Description:
    * Identifies the bcc email address where the bill or invoice is
    * sent as bcc. [br /] */
  BillEmailBcc?: EmailAddress;
  /** Product: QBO
    * Description: Identifies the cc
    * e-mail address where the invoice is sent. If the ToBeEmailed
    * attribute is true and the BillEmailCc attribute contains an
    * e-mail address, the user can send an e-mail message to the
    * e-mail address that is specified in the BillEmailCc
    * attribute.[br /] If the BillEmailCc attribute contains an
    * invalid e-mail address, QBO does not send the e-mail message to
    * the invalid cc e-mail address. [br /]The maximum length for
    * BillEmailCc is 200 characters.
    * Product: QBW
    * Description:
    * Identifies the cc email address where the bill or invoice is
    * sent. [br /] */
  BillEmailCc?: EmailAddress;
  /** Product: ALL
    * Description Information about a check payment for the
    * Invoice.
    * NotApplicableTo: Estimate, SalesOrder */
  CheckPayment?: CheckPayment;
  /** Product: QBW
    * Description: Reference to the Class
    * associated with the transaction.
    * InputType: ReadWrite */
  ClassRef?: ReferenceType;
  /** Product: ALL
    * Description Information about a credit card payment for the
    * Invoice.
    * NotApplicableTo: Estimate, SalesOrder */
  CreditCardPayment?: CreditCardPayment;
  /** Product: ALL
    * Description: QBO: For an Invoice, this is the user-entered message to the
    * customer that does appear in the invoice, and does appear in the
    * printed invoice. The maximum length for Invoice Msg is 1000
    * characters.[br /]For a Bill, this is the memo of the transaction
    * to provide more detail, and does not appear in the printed
    * message of the bill. The maximum length for Bill Msg is 4000
    * characters.[br /]For a CreditCardCharge, this message appears in
    * the printed record; maximum length is 4000 characters.[br /]Not
    * supported for BillPayment, JournalEntry or Payment.
    * Description: QBW: User-entered message to the customer; this message will be
    * visible to end user on their transactions.
    * InputType: ReadWrite */
  CustomerMemo?: MemoRef;
  /** Product: ALL
    * Description: Reference to a Customer or job.
    * Filterable: QBW
    * InputType: ReadWrite
    * BusinessRules: QBW: CustomerRef is mandatory for some SalesTransactions like
    * Invoice */
  CustomerRef?: ReferenceType;
  /** Product: QBO
    * Description: Last delivery info of this transaction. */
  DeliveryInfo?: TransactionDeliveryInfo;
  /** Product: ALL
    * Description: QBW: Reference to the
    * DepositToAccount entity. If not specified, the Undeposited Funds
    * account will be used.
    * Description: QBO: Asset account where the payment money is deposited. If you
    * do not specify this account, QBO uses the Undeposited Funds
    * account. Supported for Payment and SalesReceipt only.
    * NotApplicableTo: QBW: Estimate, SalesOrder */
  DepositToAccountRef?: ReferenceType;
  /** Product: QBO
    * Description: Indicates the discount
    * amount that is applied on the transaction as a whole. This will
    * be pro-rated through item lines for tax calculation. */
  DiscountAmt?: number;
  /** Product: QBO
    * Description: Indicates the discount
    * rate that is applied on the transaction as a whole. This will be
    * pro-rated through item lines for tax calculation. */
  DiscountRate?: number;
  /** Product: ALL
    * Description: QBW: Date when the payment of the
    * transaction is due.
    * Description: QBO: Date when the invoice is to
    * be paid, not including any early-payment discount incentives, or
    * late payment penalties. If the date is not supplied, the current
    * date on the server is used.
    * Filterable: QBW
    * InputType: ReadWrite
    * BusinessRules: QBW: Following are the BusinessRules regarding DueDate of
    * transaction
    *
    * If DueDate is not included when creating an invoice,
    * QuickBooks may determine the due date according to the terms
    * set for this customer.
    * If the Terms are not provided, the Due Date is set to the
    * transaction date. */
  DueDate?: Date;
  /** Product: ALL
    * Description: Email status of the
    * invoice.[br /]
    * InputType: ReadWrite */
  EmailStatus?: EmailStatusEnum;
  /** Product: ALL
    * Description: Indicates whether the
    * transaction is a finance charge.
    * InputType: ReadWrite */
  FinanceCharge?: boolean;
  /** Product: ALL
    * Description: "Free On Board", the
    * terms between buyer and seller regarding transportation costs;
    * does not have any bookkeeping implications.
    * Description: "Free On
    * Board", the terms between buyer and seller regarding
    * transportation costs; does not have any bookkeeping
    * implications.
    * ValidRange: QBW: max=13
    * ValidRange: QBO: max=15 */
  FOB?: string;
  /** Product: QBO
    * Description: Specifies whether
    * shipping address is in free-form or structured-form (city/state etc.) */
  FreeFormAddress?: boolean;
  /** Product: QBO
    * Description: Indicates the
    * GlobalTax model if the model inclusive of tax, exclusive of
    * taxes or not applicable */
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  /** Product: QBO
    * Description: this is the reference
    * to the NotaFiscal created for the salesTransaction.
    * ValidRange:
    * QBO: max=30 */
  GovtTxnRefIdentifier?: string;
  /** Product: QBO
    * Description: The balance reflecting
    * any payments made against the transaction in home currency.
    * Initially this will be equal to the HomeTotalAmt.[br /]Read-only
    * field.
    * Product: QBW
    * Description: Indicates the unpaid amount of
    * the transaction in home currency.[br /]Cannot be written to
    * QuickBooks.
    * Filterable: ALL
    * Sortable: QBW */
  HomeBalance?: number;
  /** Product: ALL
    * Description: QBW: Total amount of
    * the transaction in the home currency for multi-currency enabled
    * companies. Single currency companies will not have this field.
    * Includes the total of all the charges, allowances and taxes.
    * Calculated by QuickBooks business logic. Cannot be written to
    * QuickBooks.
    * InputType: QBW: ReadOnly */
  HomeTotalAmt?: number;
  /** Product: ALL
    * Description: Reference to the
    * PaymentMethod.
    * InputType: ReadWrite */
  PaymentMethodRef?: ReferenceType;
  /** Product: QBO
    * Description: The reference number
    * for the payment received (I.e. Check # for a check, envelope #
    * for a cash donation, CreditCardTransactionID for a credit card
    * payment) */
  PaymentRefNum?: string;
  /** Product: QBO
    * Description: Valid values are Cash, Check, CreditCard, or
    * Other. No defaults. Cash based expense is not supported by
    * QuickBooks Windows.
    * NotApplicableTo: Estimate, SalesOrder */
  PaymentType?: PaymentTypeEnum;
  /** Product: ALL
    * Description: Purchase Order number.
    * ValidRange: QBW: max=25
    * ValidRange: QBO: max=15 */
  PONumber?: string;
  /** Product: ALL
    * Description: Printing status of the
    * invoice.[br /]
    * InputType: ReadWrite */
  PrintStatus?: PrintStatusEnum;
  /** Product: QBW
    * Description: Reference to the party
    * receiving payment.
    * InputType: ReadOnly */
  RemitToRef?: ReferenceType;
  /** Product: QBW
    * Description: Reference to the
    * SalesRep associated with the transaction.
    * InputType: ReadWrite */
  SalesRepRef?: ReferenceType;
  /** Product: QBW
    * Description: Reference to the
    * SalesTerm associated with the transaction.
    * InputType: ReadWrite */
  SalesTermRef?: ReferenceType;
  /** Product: ALL
    * Description: QBO: Shipping address
    * of the Invoice.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01000_Using_Data_Service_Entities#Addresses"]Addresses[/a]
    * Description: QBW: Identifies the address where the goods must be
    * shipped. [br /]QuickBooks Note: If ShipAddr is not specified,
    * and a default ship-to address is specified in QuickBooks for
    * this customer, the default ship-to address will be used by
    * QuickBooks.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01000_Using_Data_Service_Entities#Addresses"]Addresses[/a] */
  ShipAddr?: PhysicalAddress;
  /** Product: QBW
    * Description: Date for delivery of
    * goods or services.
    * InputType: ReadWrite */
  ShipDate?: Date;
  /** Product: ALL
    * Description: QBO: Shipping from address
    * of the Invoice.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01000_Using_Data_Service_Entities#Addresses"]Addresses[/a]
    * Description: QBW: Identifies the address where the goods are shipped
    * from. For transactions without shipping, it represents the address where the sale took place. */
  ShipFromAddr?: PhysicalAddress;
  /** Product: QBW
    * Description: Reference to the ShipMethod associated with the transaction.
    * InputType: ReadWrite */
  ShipMethodRef?: ReferenceType;
  /** Product: QBO
    * Description: During total tax override (when user specifies TxnTaxDetail.TotalTax),
    * if this is set to true, system overrides all taxes including the shipping tax,
    * otherwise (if false or null) only non shipping taxes are overridden and original shipping
    * tax is added to the total tax. */
  ShippingTaxIncludedInTotalTax?: boolean;
  /** Product: ALL
    * Description: Reference to the
    * TaxExemptionId and TaxExemptionReason for this customer. */
  TaxExemptionRef?: ReferenceType;
  /** Product: QBW
    * Description: Reference to the
    * Template for the invoice form.
    * InputType: ReadWrite */
  TemplateRef?: ReferenceType;
  /** Product: All
    * Description: QBO: Indicates the
    * total amount of the transaction. This includes the total of all
    * the charges, allowances and taxes. By default, this is
    * recalculated based on sub items total and overridden.
    * Description: QBW: Indicates the total amount of the transaction.
    * This includes the total of all the charges, allowances and
    * taxes.[br /]Calculated by QuickBooks business logic; cannot be
    * written to QuickBooks.
    * Filterable: QBW
    * Sortable: QBW
    * InputType: QBW: OverrideOnSync */
  TotalAmt?: number;
  /** Product: QBW
    * Description: Shipping provider's
    * tracking number for the delivery of the goods associated with
    * the transaction. */
  TrackingNum?: string;
}

/** Enumeration of item service type for India sales
  * tax */
export type ServiceTypeEnum = keyof typeof ServiceTypeEnum;
export const ServiceTypeEnum = Object.freeze({
  "ADVT": "ADVT",
  "AIRPORTSERVICES": "AIRPORTSERVICES",
  "AIRTRANSPORT": "AIRTRANSPORT",
  "AIRTRVLAGNT": "AIRTRVLAGNT",
  "ARCHITECT": "ARCHITECT",
  "ASSTMGMT": "ASSTMGMT",
  "ATMMAINTENANCE": "ATMMAINTENANCE",
  "AUCTIONSERV": "AUCTIONSERV",
  "AUTHSERST": "AUTHSERST",
  "BANKANDFIN": "BANKANDFIN",
  "BEAUTYPARLOR": "BEAUTYPARLOR",
  "BROADCAST": "BROADCAST",
  "BUSINESSAUX": "BUSINESSAUX",
  "BUSINESSEXHIBITION": "BUSINESSEXHIBITION",
  "BUSINESSSUPPORTSERV": "BUSINESSSUPPORTSERV",
  "CA": "CA",
  "CABLEOPTR": "CABLEOPTR",
  "CARGOHAND": "CARGOHAND",
  "CLEANINGSERV": "CLEANINGSERV",
  "CLEARANDFORW": "CLEARANDFORW",
  "CLUBSANDASSSERVICE": "CLUBSANDASSSERVICE",
  "COMMCOACHORTRAINING": "COMMCOACHORTRAINING",
  "CONSENG": "CONSENG",
  "CONSTRCOMMERCIALCOMPLEX": "CONSTRCOMMERCIALCOMPLEX",
  "CONTAINERRAILTRANS": "CONTAINERRAILTRANS",
  "CONVSERV": "CONVSERV",
  "COSTACC": "COSTACC",
  "COURIER": "COURIER",
  "CREDITCARD": "CREDITCARD",
  "CREDITRATAGNCY": "CREDITRATAGNCY",
  "CRUISESHIPTOUR": "CRUISESHIPTOUR",
  "CS": "CS",
  "CUSHOUSEAG": "CUSHOUSEAG",
  "DESIGNSERV": "DESIGNSERV",
  "DEVELOPSUPPLYCONTENT": "DEVELOPSUPPLYCONTENT",
  "DREDGING": "DREDGING",
  "DRYCLEANING": "DRYCLEANING",
  "ERECTIONCOMMORINSTALL": "ERECTIONCOMMORINSTALL",
  "EVENTMGMT": "EVENTMGMT",
  "FASHIONDES": "FASHIONDES",
  "FOREXBROKING": "FOREXBROKING",
  "FORWARDCONTRACT": "FORWARDCONTRACT",
  "FRANCHISESERV": "FRANCHISESERV",
  "GENERALINSURANCE": "GENERALINSURANCE",
  "GOODSTRANSPORT": "GOODSTRANSPORT",
  "HEALTHCLUBANDFITNESS": "HEALTHCLUBANDFITNESS",
  "INFORMATIONSERV": "INFORMATIONSERV",
  "INSURAUX": "INSURAUX",
  "INTDEC": "INTDEC",
  "INTELLECTUALPROPERTY": "INTELLECTUALPROPERTY",
  "INTERNATIONALAIRTRAVEL": "INTERNATIONALAIRTRAVEL",
  "INTERNETCAFE": "INTERNETCAFE",
  "INTERNETTELEPHONY": "INTERNETTELEPHONY",
  "LIFEINS": "LIFEINS",
  "MAILLISTCOMPILE": "MAILLISTCOMPILE",
  "MANDAPKEEPER": "MANDAPKEEPER",
  "MANPWRRECRUIT": "MANPWRRECRUIT",
  "MGMTCONSUL": "MGMTCONSUL",
  "MGMTMAINTREPAIR": "MGMTMAINTREPAIR",
  "MININGOIL": "MININGOIL",
  "MKTRESAGNCY": "MKTRESAGNCY",
  "ONLINEINFORMRETRIEVAL": "ONLINEINFORMRETRIEVAL",
  "OPINIONPOLL": "OPINIONPOLL",
  "OUTDOORCATERING": "OUTDOORCATERING",
  "PACKAGINGSERV": "PACKAGINGSERV",
  "PANDALSHAMIANA": "PANDALSHAMIANA",
  "PHOTOGRAPHY": "PHOTOGRAPHY",
  "PORT": "PORT",
  "PORTSER": "PORTSER",
  "PROCESSCLEARHOUSE": "PROCESSCLEARHOUSE",
  "PUBLICRELATIONMGMT": "PUBLICRELATIONMGMT",
  "RAILTRAVELAGNT": "RAILTRAVELAGNT",
  "REALESTAGT": "REALESTAGT",
  "RECOVERYAGENTS": "RECOVERYAGENTS",
  "REGISTRARSERV": "REGISTRARSERV",
  "RENTACAB": "RENTACAB",
  "RENTINGIMMOVABLEPROP": "RENTINGIMMOVABLEPROP",
  "RESIDENTIALCOMPLEXCONST": "RESIDENTIALCOMPLEXCONST",
  "SALEOFSPACEFORADVT": "SALEOFSPACEFORADVT",
  "SCANDTECHCONSUL": "SCANDTECHCONSUL",
  "SECAG": "SECAG",
  "SERVICESPROVIDEDFORTRANSACTION": "SERVICESPROVIDEDFORTRANSACTION",
  "SHARETRANSFERSERV": "SHARETRANSFERSERV",
  "SHIPMGMT": "SHIPMGMT",
  "SITEPREP": "SITEPREP",
  "SOUNDRECORD": "SOUNDRECORD",
  "SPONSORSHIP": "SPONSORSHIP",
  "STAG": "STAG",
  "STOCKBROKING": "STOCKBROKING",
  "STOCKEXCHGSERV": "STOCKEXCHGSERV",
  "STORANDWAREHOUSING": "STORANDWAREHOUSING",
  "SUPPLYTANGIBLEGOODS": "SUPPLYTANGIBLEGOODS",
  "SURVEYANDMAPMAKING": "SURVEYANDMAPMAKING",
  "SURVEYMINERALS": "SURVEYMINERALS",
  "TECHINSPECTION": "TECHINSPECTION",
  "TECHTESTING": "TECHTESTING",
  "TELECOMMUNICATIONSERV": "TELECOMMUNICATIONSERV",
  "TELEVISIONANDRADIO": "TELEVISIONANDRADIO",
  "TOUROP": "TOUROP",
  "TRANSPORTPIPELINE": "TRANSPORTPIPELINE",
  "TRAVELAGENT": "TRAVELAGENT",
  "ULIPMANAGEMENT": "ULIPMANAGEMENT",
  "UNDERWRITER": "UNDERWRITER",
  "VIDEOTAPEPROD": "VIDEOTAPEPROD",
  "WORKSCONTRACT": "WORKSCONTRACT"
});

/** Product: ALL
  * Description: Describes a method of
  * shipping for the company */
export interface ShipMethod extends IntuitEntity {
  /** Product: QBW
    * Description: Indication of whether
    * or not this shipping method is still used by the company. */
  Active: boolean;
  /** Product: ALL
    * Description: The name of the
    * shipping method (i.e. FedEx 2-day) */
  Name?: string;
  /** Internal use only: extension place holder for
    * ShipMethod */
  ShipMethodEx?: IntuitAnyType;
}

/** Product: QBO
  * Description: Enumeration of external sources that create the entites in QBO */
export type SourceTypeEnum = keyof typeof SourceTypeEnum;
export const SourceTypeEnum = Object.freeze({
  "QBCommerce": "QBCommerce"
});

/** Product: ALL
  * Description: Enumeration of special
  * item types. */
export type SpecialItemTypeEnum = keyof typeof SpecialItemTypeEnum;
export const SpecialItemTypeEnum = Object.freeze({
  "FinanceCharge": "FinanceCharge",
  "ReimbursableExpenseGroup": "ReimbursableExpenseGroup",
  "ReimbursableExpenseSubtotal": "ReimbursableExpenseSubtotal"
});

/** Product: QBO
  * Description: Enumeration of
  * SpecialTaxType */
export type SpecialTaxTypeEnum = keyof typeof SpecialTaxTypeEnum;
export const SpecialTaxTypeEnum = Object.freeze({
  "NONE": "NONE",
  "ZERO_RATE": "ZERO_RATE",
  "FOREIGN_TAX": "FOREIGN_TAX",
  "REVERSE_CHARGE": "REVERSE_CHARGE",
  "ADJUSTMENT_RATE": "ADJUSTMENT_RATE"
});

/** Financial transaction representing a request for
  * payment for goods or services that have been sold. */
export interface StatementCharge extends Transaction {
  /** ARAccountReferenceGroup Identifies the AR
    * Account to be used for this Credit Memo.
    * [b]QuickBooks
    * Notes[/b][br /]
    * The AR Account should always be specified or a
    * default will be used. */
  ARAccountRef?: ReferenceType;
  /** Date when the customer Statement was created */
  BilledDate?: Date;
  ClassRef?: ReferenceType;
  /** If Credit is Null or False, it is considered as
    * Charge. If true, the StatementCharge represents a Refund */
  Credit?: boolean;
  /** Represents Customer (or Job)Reference */
  CustomerRef?: ReferenceType;
  /** Date when the Charge is to be paid. */
  DueDate?: Date;
  /** Identifies the party or location that the
    * payment is to be remitted to or sent to.
    * [b]QuickBooks
    * Notes[/b][br /]
    * Non QB-writable. */
  RemitToRef?: ReferenceType;
  /** Internal use only: extension place holder for
    * StatementCharge */
  StatementChargeEx?: IntuitAnyType;
  /** Indicates the total amount of the entity
    * associated. This includes the total of all the charges,
    * allowances and taxes.
    * [b]QuickBooks Notes[/b][br /]
    * Non
    * QB-writable. */
  TotalAmt?: number;
}

/** Product: QBW
  * Description: generic meta data response for any add mod */
export interface Status extends IntuitEntity {
  /** Product: QBW
    * Description: Batch Id to create/update object
    * Filterable: QBW */
  BatchId?: string;
  /** Product: QBW
    * Description: Status Message Code */
  MessageCode?: string;
  /** Product: QBW
    * Description: Status Message if error occurred else null */
  MessageDesc?: string;
  ObjectType: string;
  /** Product: QBW
    * Description: Request Id to create/update object
    * Filterable: QBW */
  RequestId?: string;
  /** Product: QBW
    * Description: Code for Current State of object
    * Filterable: QBW */
  StateCode?: string;
  /** Product: QBW
    * Description: Description for Current State of object */
  StateDesc?: string;
}

/** Product: QBO
  * Description: Log of Statuses for Transactions. Currently is used for Invoice. Can be extended to others. */
export interface StatusInfo {
  /** Product: QBO
    * Description: call to action for this status */
  callToAction?: string;
  /** Product: QBO
    * Description: Holds status information */
  status?: string;
  /** Product: QBO
    * Description: Holds the status update date. */
  statusDate?: Date;
}

/** Product: ALL
  * Description: Provides for strong-typing of the StringType CustomField. */
export interface StringTypeCustomFieldDefinition extends CustomFieldDefinition {
  /** Product: ALL
    * Description: Default string value of the StringType CustomField.[br /]Max. length: 31 characters. */
  DefaultString?: string;
  /** Product: ALL
    * Description: Maximum length allowed for the value of the string when creating/updating a StringType CustomField. */
  MaxLength?: number;
  /** Product: ALL
    * Description: The regular expression string used to validate the StringType CustomField value.[br /]Max. length: 31 characters. */
  RegularExpression?: string;
}

/** Product: ALL
  * Description: Valid only for UK region, Subcontractor type enumeration. */
export type SubcontractorTypeEnum = keyof typeof SubcontractorTypeEnum;
export const SubcontractorTypeEnum = Object.freeze({
  "Individual": "Individual",
  "Company": "Company",
  "Partnership": "Partnership",
  "Trust": "Trust"
});

/** Enumeration of subscription payment setting applicable to Invoice */
export type SubscriptionPaymentsSettingEnum = keyof typeof SubscriptionPaymentsSettingEnum;
export const SubscriptionPaymentsSettingEnum = Object.freeze({
  "SALE_TERM": "SALE_TERM"
});

/** Product: ALL
  * Description: SubTotalLine detail for a transaction line. */
export interface SubTotalLineDetail {
  /** Product: ALL
    * Description: Reference to the Item.
    * When a line lacks an ItemRef it will be treated as "documentation"
    * and the Amount will be ignored. */
  ItemRef?: ReferenceType;
  /** Product: ALL
    * Description: Date when the service is
    * performed. */
  ServiceDate?: Date;
}

export type SummarizeColumnsByEnum = keyof typeof SummarizeColumnsByEnum;
export const SummarizeColumnsByEnum = Object.freeze({
  "Total": "Total",
  "Year": "Year",
  "Quarter": "Quarter",
  "FiscalYear": "FiscalYear",
  "FiscalQuarter": "FiscalQuarter",
  "Month": "Month",
  "Week": "Week",
  "Days": "Days",
  "Customers": "Customers",
  "Vendors": "Vendors",
  "Employees": "Employees",
  "Departments": "Departments",
  "Classes": "Classes",
  "ProductsAndServices": "ProductsAndServices"
});

/** Group Summary */
export interface Summary {
  ColData: ColData[];
}

/** Product: ALL
  * Description: Enumeration of symbol
  * positions. */
export type SymbolPositionEnum = keyof typeof SymbolPositionEnum;
export const SymbolPositionEnum = Object.freeze({
  "Leading": "Leading",
  "Trailing": "Trailing"
});

/** Product: QBW
  * Description: Provides upload/writeback activity for a given period of time. Query activity using
  * StartSyncTMS OR EndSyncTMS */
export interface SyncActivity extends IntuitEntity {
  /** Product: QBW
    * Description: indicates when the data sync upload or write back completed
    * Filterable: QBW */
  EndSyncTMS?: Date;
  /** Product: QBW
    * Description: name of the entity that is part of the data sync */
  EntityName?: string;
  /** Product: QBW
    * Description: number of rows of this entity that have been uploaded or written back to QB */
  EntityRowCount?: number;
  /** Product:QBW
    * Description: indicates when the data sync upload or write back started */
  LatestUploadDateTime?: Date;
  /** Product: QBW
    * Description: indicates when the data sync upload or write back completed */
  LatestWriteBackDateTime?: Date;
  /** Product: QBW
    * Description: indicates when the data sync upload or write back started
    * Filterable: QBW */
  StartSyncTMS?: Date;
  /** Product: QBW
    * Description: can be either Upload or Write back sync type */
  SyncType?: SyncType;
}

/** Product: QBW
  * Description: Wrapper object for specifying both version of the objects
  * If there is any warnings on a object basis that is also send back
  * This object is output object only */
export interface SyncError {
  /** Product: ALL
    * Description: Indicates the apptoken of the entity. */
  AppToken?: string;
  /** Product: QBW
    * Description: Indicates error type of entity. The value must correspond to SyncErrorType. */
  Type?: string;

  /** Product: QBW
    * Description: Indicates the cloud version of the synced object */
  CloudVersion?: SyncObject;
  /** Indicates the type of error that happened in the sync to desktop */
  Error?: Error;
  /** Product: QBW
    * Description: Indicates the QB version of the synced object */
  QBVersion?: SyncObject;
}

/** Product: QBW
  * Description: Provides a wrapper for SyncError for Conflict API Response
  * Consists of list of SyncError objects */
export interface SyncErrorResponse {
  /** Product: QBW
    * Description: Specifies the latest time when Upload happened. */
  latestUploadTime?: Date;
  /** Specifies the number of records in this result */
  maxResults?: number;
  /** Specifies the starting row number in this result */
  startPosition?: number;
  /** Specifies the total count of records that satisfy the filter condition */
  totalCount?: number;

  /** Product:QBW
    * Description: Wrapper of both types of Objects CloudVersion and QBVersion of objects
    * If there are multiple errored objects you will get a list of errored objects */
  SyncError?: SyncError[];
}

/** Product: QBW
  * Description: must be either of the following values */
export type SyncErrorType = keyof typeof SyncErrorType;
export const SyncErrorType = Object.freeze({
  "OutOfSync": "OutOfSync",
  "BusinessLogic": "BusinessLogic",
  "SystemError": "SystemError"
});

/** Product: QBW
  * Description: SyncObject that has an error */
export interface SyncObject extends IntuitObjectProxyType {
  /** Fault or Object should be returned */
  Fault?: Fault;
}

/** Product: ALL
  * Description: Strongly typed "SyncToken" for the version number of an entity for optimistic locking purposes. */
export type syncToken = string;

/** Product: QBW
  * Description: must be either upload or writeback */
export type SyncType = keyof typeof SyncType;
export const SyncType = Object.freeze({
  "Upload": "Upload",
  "Writeback": "Writeback"
});

/** Product: ALL
  * Description: A Tag applied to a transaction */
export interface Tag extends IntuitEntity {
  /** Product: ALL
    * Description: The name of the tag. */
  Name?: string;
}

/** Product: QBW
  * Description: A specific task to be
  * completed, maps to a ToDo record in QuickBooks. */
export interface Task extends IntuitEntity {
  /** Product: QBW
    * Description: In use by the business */
  Active?: boolean;
  /** Product: QBW
    * Description: True if the task has
    * been completed */
  Done?: boolean;
  /** Product: QBO
    * Description: In use by the business */
  From?: string;
  /** Product: QBW
    * Description: The actual content of
    * the task reminder */
  Notes?: string;
  /** Product: QBW
    * Description: The date to remind the
    * user of this task */
  ReminderDate?: Date;
  /** Internal use only: extension place holder for
    * Task */
  TaskEx?: IntuitAnyType;
}

/** Product: ALL
  * Description: Represents a tax agency to whom sales/purchase/VAT taxes collected are paid */
export interface TaxAgency extends Vendor {
  /** Product: QBO
    * Description: This specifies the last filing date for this tax agency.
    * InputType: QBO: ReadOnly */
  LastFileDate?: Date;
  /** We'll need an Enum for the reporting periods */
  ReportingPeriod?: string;
  SalesTaxCodeRef?: ReferenceType;
  /** We'll need an Enum for the usual countries */
  SalesTaxCountry?: string;
  SalesTaxReturnRef?: ReferenceType;
  /** Product: QBO
    * Description: Tax agency config. Identify if the agency is System generated or User created. */
  TaxAgencyConfig?: string;
  TaxAgencyExt?: IntuitAnyType;
  TaxOnPurchasesAccountRef?: ReferenceType;
  TaxOnTax?: boolean;
  TaxRegistrationNumber?: string;
  TaxTrackedOnPurchases?: boolean;
  TaxTrackedOnSales?: boolean;
  TaxTrackedOnSalesAccountRef?: ReferenceType;
}

/** Product: ALL
  * Description: Enumeration of tax
  * applicable on Journal Entry (Sales/Purchase) */
export type TaxApplicableOnEnum = keyof typeof TaxApplicableOnEnum;
export const TaxApplicableOnEnum = Object.freeze({
  "Purchase": "Purchase",
  "Sales": "Sales"
});

/** Product: ALL
  * Description: Tax classification segregates different items into different classifications and the tax
  * classification is one of the key parameters to determine appropriate tax on transactions involving items.
  * Tax classifications are sourced by either tax governing authorities as in India/Malaysia or externally like Exactor.
  * "Fuel", "Garments" and "Soft drinks" are a few examples of tax classification in layman terms.
  * User can choose a specific tax classification for an item while creating it. */
export interface TaxClassification extends IntuitEntity {
  ApplicableTo?: ItemTypeEnum[];
  Code?: string;
  Description?: string;
  Level?: string;
  Name?: string;
  ParentRef?: ReferenceType;
}

/** Product: ALL
  * Description: A tax code is used to
  * track the taxable or non-taxable status of products, services, and
  * customers. You can assign a sales tax code to each of your products,
  * services, and customers based on their taxable or non-taxable
  * status. You can then use these codes to generate reports that
  * provide information to the tax agencies about the taxable or
  * non-taxable status of certain sales. [br]See [a
  * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01100_Global_Tax_Model"]Global
  * Tax Model[/a]. */
export interface TaxCode extends IntuitEntity {
  /** Product: QBW
    * Description: False if inactive.
    * Inactive sales tax codes may be hidden from display and may not
    * be used on financial transactions.
    * Filterable: ALL */
  Active?: boolean;
  /** Product: QBO
    * Description: List of references to
    * adjustment tax rates that apply to the transaction. */
  AdjustmentTaxRateList?: TaxRateList;
  /** Product: ALL
    * Description: User entered
    * description for the sales tax code.[br/]Max Length: 31
    * characters. */
  Description?: string;
  /** Product: QBW
    * Description: True if Taxcode needs to be hidden. Active tax codes can be hidden from the display using this.
    * Filterable: ALL */
  Hidden?: boolean;
  /** Product: QBW
    * Description: User recognizable name
    * for the tax sales code.[br/]Max. Length: 3 characters.[br
    * /]Required for the Create request.
    * Product: QBO
    * Description: User
    * recognizable name for the tax sales code.[br/]Max. Length: 10
    * characters.
    * Required: ALL
    * Filterable: ALL
    * Sortable: ALL */
  Name?: string;
  /** Product: ALL
    * Description: List of references to
    * tax rates that apply for purchase transactions when this tax
    * code is used. */
  PurchaseTaxRateList?: TaxRateList;
  /** Product: ALL
    * Description: List of references to
    * tax rates that apply for sales transactions when this tax code
    * is used. */
  SalesTaxRateList?: TaxRateList;
  /** Product: QBW
    * Description: False or null means
    * meaning non-taxable (default). True means taxable. */
  Taxable?: boolean;
  /** Product: QBO
    * Description: Tax code configuration type tracks
    * whether the user created the TaxCode or it was System Generated. */
  TaxCodeConfigType?: GTMConfigTypeEnum;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for TaxCode */
  TaxCodeEx?: IntuitAnyType;
  /** Product:QBW
    * Description: True if this tax code
    * represents a group of tax rates (a desktop TaxGroupItem), false
    * if it represents a QuickBooks US TaxCode. */
  TaxGroup?: boolean;
}

/** Product: QBO
  * Description: Tax Form Type holds data related to Tax Information (Tax Form Type)
  * based on Regional compliance laws. Applicable for IN region
  * currently. Can be used to extend for other Regions. */
export type TaxFormTypeEnum = keyof typeof TaxFormTypeEnum;
export const TaxFormTypeEnum = Object.freeze({
  "Form C": "Form C",
  "Form F": "Form F",
  "Form I": "Form I",
  "Form H": "Form H",
  "Form E1": "Form E1",
  "Form E2": "Form E2"
});

/** Product: ALL
  * Description: Tax detail for a
  * transaction line. */
export interface TaxLineDetail {
  /** Product: QBO
    * Description: This is taxable amount
    * on the total of the applicable tax rates
    * If TaxRate is applicable
    * on two lines, the taxableamount represents total of the two lines
    * for which this rate is applied
    * This is different from the
    * Line.Amount which represent the final tax amount after the tax has
    * been applied */
  NetAmountTaxable?: number;
  /** Product: QBO
    * Description: This holds the
    * difference between the actual tax and overridden amount supplied
    * by the user. */
  OverrideDeltaAmount?: number;
  /** Product: ALL
    * Description: True if the sales tax is
    * expressed as a percentage; false if expressed as a number amount. */
  PercentBased?: boolean;
  /** Product: ALL
    * Description: Date when the service is
    * performed. */
  ServiceDate?: Date;
  /** Product: QBO
    * Description: This is the amount which
    * also includes tax. */
  TaxInclusiveAmount?: number;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for TaxLine. */
  TaxLineDetailEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Numerical expression of
    * the sales tax percent. For example, use "8.5" not "0.085". */
  TaxPercent?: number;
  /** Product: QBW
    * Description: Reference to a TaxRate.
    * For all editions of QuickBooks, for TaxLineDetail line types that
    * apply a specific TaxRate to the preceding line of the transaction,
    * this
    * is a reference to that TaxRate. For a TaxLineDetail in a
    * TxnTaxDetail, where the TxnTaxCodeRef is set, the TaxRate
    * referenced here MUST also be
    * one of the rates in the referenced tax code's rate list (either the
    * SalesTaxRateList or the PurchaseTaxRateList) that applies to the
    * transaction type.[br /]
    * For international editions of QuickBooks,
    * for a TaxLineDetail in a TxnTaxDetail, the rate referenced here
    * must be referenced by a TaxCode used on a transaction
    * line. Any given rate may only be listed once.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01100_Global_Tax_Model"]Global
    * Tax Model[/a].
    * Product: QBO
    * Description: For US editions of
    * QuickBooks Online, and in TxnTaxDetail only, this references the
    * TaxRate applied to the entire transaction.[br /]
    * For international
    * editions of QuickBooks Online, for a TaxLineDetail in a
    * TxnTaxDetail, where the TxnTaxCodeRef is set, the TaxRate
    * referenced
    * here MUST also be one of the rates in the referenced tax code's rate
    * list (either the SalesTaxRateList or the PurchaseTaxRateList) that
    * applies to the
    * transaction type. Any given rate may only be listed once.[br /]Does not apply
    * to a TaxLineDetail apart from a TxnTaxDetail.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01100_Global_Tax_Model"]Global
    * Tax Model[/a]. */
  TaxRateRef?: ReferenceType;
}

/** Product: QBO
  * Description: Tax Payment/Refund made against filed taxReturn. */
export interface TaxPayment extends IntuitEntity {
  /** Product: QBO
    * Description: Memo/Description added for this payment. */
  Description?: string;
  /** Product: QBO
    * Description: Account ID from which the payment was made (or refund was moved to) */
  PaymentAccountRef?: ReferenceType;
  /** Product: QBO
    * Description: Specifies the tax payment amount paid towards a filed tax return. */
  PaymentAmount?: number;
  /** Product: QBO
    * Description: The tax payment date */
  PaymentDate?: Date;
  /** Product: QBO
    * Description: Indicate if this transaction is a refund. Returns false for the tax payment. */
  Refund?: boolean;
}

export interface TaxPrefs {
  HideTaxManagement?: boolean;
  /** Product: QBW
    * [b]QuickBooks Notes[/b][br /]
    * Max
    * Length: 3 */
  NonTaxableSalesTaxCodeRef?: ReferenceType;
  PartnerTaxEnabled?: boolean;
  /** Product: QBW
    * Description: */
  PaySalesTax?: PaySalesTaxEnum;
  /** Product: QBW
    * [b]QuickBooks Notes[/b][br /]
    * Max
    * Length: 3 */
  TaxableSalesTaxCodeRef?: ReferenceType;
  /** Product: QBW
    * Description: US only? reference to a
    * TaxCode entity where the group field of the referenced entity is
    * true, that is, a TaxCode representing a list of tax rates that
    * should apply by default. */
  TaxGroupCodeRef?: ReferenceType;
  /** Product: QBW
    * Description: US-only? reference to a
    * TaxRate entity indicating the sales tax to apply by default. */
  TaxRateRef?: ReferenceType;
  UsingSalesTax?: boolean;
}

/** Product: ALL
  * Description: A sales tax rate specifies
  * the tax rate for the specific TaxCode.[br]See [a
  * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01100_Global_Tax_Model"]Global
  * Tax Model[/a]. */
export interface TaxRate extends IntuitEntity {
  /** Product: QBW
    * Description: False or null if
    * inactive. Inactive sales rate codes may be hidden from display
    * and may not be used on financial transactions.
    * Filterable: QBW */
  Active?: boolean;
  /** Product: ALL
    * Description: Represents Agency
    * Reference, Vendor Reference in case of QBW, Agency in case of
    * QBO. */
  AgencyRef?: ReferenceType;
  /** Product: QBW
    * Description: User entered
    * description for the tax rate.[br /]Max Length: 4000 characters.
    * ValidRange: QBW: Max=4000 */
  Description?: string;
  /** Product: QBO
    * Description: DisplayType of a tax
    * rate, configuration of editability and display on forms */
  DisplayType?: TaxRateDisplayTypeEnum;
  /** Product: QBO
    * Description: Effective list rates
    * for different date ranges */
  EffectiveTaxRate?: EffectiveTaxRate[];
  /** Product: QBW
    * Description: User recognizable name
    * for the tax rate.[br /]Max. Length: 31 characters.[br /]Required
    * for the Create request.
    * Required: QBW
    * ValidRange: QBW: Max=31
    * Filterable: QBW */
  Name?: string;
  /** Product: QBO
    * Description: OriginalTaxRate represents the tax rate from which the current tax rate originated */
  OriginalTaxRate?: ReferenceType;
  /** Product: ALL
    * Description: Represents rate value.
    * Filterable: QBW */
  RateValue?: number;
  /** Product: QBO
    * Description: Used for Zero rates
    * for EC VAT.
    * How it is used: VAT registered Businesses who receive
    * goods/services (acquisitions) from other EU countries,
    * will need to calculate the VAT due, but not paid, on these
    * acquisitions. The rate of VAT payable is the same that would
    * have been paid if the goods had been supplied by a UK supplier. */
  SpecialTaxType?: SpecialTaxTypeEnum;
  /** Product: ALL
    * Description: Internal use only:
    * extension place holder for TaxRate */
  TaxRateEx?: IntuitAnyType;
  /** Product: ALL
    * Description: TaxReturnLine is
    * representative of SalesTaxReturnLine reference */
  TaxReturnLineRef?: ReferenceType;
}

/** Product: QBO
  * Description: Enumeration of  transaction type a given tax rate can be applied to */
export type TaxRateApplicableOnEnum = keyof typeof TaxRateApplicableOnEnum;
export const TaxRateApplicableOnEnum = Object.freeze({
  "Sales": "Sales",
  "Purchase": "Purchase",
  "Adjustment": "Adjustment",
  "Other": "Other"
});

export interface TaxRateDetail {
  /** Product: QBO
    * Description: Applicable TaxOnTaxOrder */
  TaxOnTaxOrder?: number;
  /** Product: QBO
    * Description: Applicable Tax Order */
  TaxOrder?: number;
  /** Product: ALL
    * Description: TaxRateRef */
  TaxRateRef?: ReferenceType;
  /** Product: ALL
    * Description: Applicable TaxType enum */
  TaxTypeApplicable?: TaxTypeApplicablityEnum;
}

/** Product: QBO
  * Description: TaxRate details */
export interface TaxRateDetails {
  /** Product: QBO
    * Description: TaxRate value */
  RateValue?: number;
  /** Product: QBO
    * Description: TaxAgency details */
  TaxAgencyId?: string;
  /** Product: QBO
    * Description: Default is SalesTax */
  TaxApplicableOn?: TaxRateApplicableOnEnum;
  /** Product: QBO
    * Description: TaxRate details */
  TaxRateId?: string;
  /** Product: QBO
    * Description: TaxRate details */
  TaxRateName?: string;
}

/** Product: QBO Description: Enumeration of
  * TaxRateDisplayType */
export type TaxRateDisplayTypeEnum = keyof typeof TaxRateDisplayTypeEnum;
export const TaxRateDisplayTypeEnum = Object.freeze({
  "ReadOnly": "ReadOnly",
  "HideInTransactionForms": "HideInTransactionForms",
  "HideInPrintedForms": "HideInPrintedForms",
  "HideInAll": "HideInAll"
});

export interface TaxRateList {
  /** Product: QBW
    * Description: opaque internal string
    * used to correlate the rate list with a QBW TaxGroup item to support
    * mod of TaxCodes in global tax */
  originatingGroupId: string;

  /** Product: All
    * Description: TaxRateDetail that
    * specifies qualified detail of TaxRate */
  TaxRateDetail?: TaxRateDetail[];
}

/** Product: QBO
  * Description: Enumeration of Tax Report Basis for France */
export type TaxReportBasisTypeEnum = keyof typeof TaxReportBasisTypeEnum;
export const TaxReportBasisTypeEnum = Object.freeze({
  "Cash": "Cash",
  "Accrual": "Accrual"
});

/** Product: QBO
  * Description: Represents a Tax Return
  * that is filed with a Tax Agency. */
export interface TaxReturn extends IntuitEntity {
  /** Specifies the payment amount paid to tax agency */
  AgencyPaymentAmount?: number;
  /** Product: QBO
    * Description: Date when actual payment to agency occurs */
  AgencyPaymentDate?: Date;
  /** Product: QBO
    * Description: Represents the payment method used while e-filing tax return with agency */
  AgencyPaymentMethod?: AgencyPaymentMethodEnum;
  /** Product: QBO
    * Description: Represents the Agency
    * of which this TaxReturn is a part. */
  AgencyRef?: ReferenceType;
  /** Product: QBO
    * Description: Last Date to rectify e-filing errors so that it can be filed in same period. */
  EFileErrorFixByDate?: Date;
  /** Product: QBO
    * Description: End date of the
    * Filing. */
  EndDate?: Date;
  /** Product: QBO
    * Description: Date of the Filing. */
  FileDate?: Date;
  /** Specifies the FRS Amount due to the Tax Agency
    * for a Filing Period. Applicable for UK only. */
  FlatRateSavingsAmountDue?: number;
  /** Specifies the final Tax Amount due to the Tax
    * Agency for a Filing */
  NetTaxAmountDue?: number;
  /** Specifies the PayGWithheld Amount due to the
    * Tax Agency for a Filing Period. Applicable for AU only. */
  PayGWithheldAmount?: number;
  /** Product: QBO
    * Description: Start date of the
    * Filing. */
  StartDate?: Date;
  /** Product: QBO
    * Description: Represents the tax return code with the partner */
  TaxReturnCode?: string;
  /** Product: QBO
    * Description: Represents the failure reason of tax return e-filing with agency */
  TaxReturnEFilingFailureReason?: string;
  /** Product: QBO
    * Description: Represents the status of the filing of the tax return */
  TaxReturnStatus?: TaxReturnStatusEnum;
  /** Product: QBO
    * Description: True when this filing
    * is an upcoming Filing for a currently Open Filing Period. False
    * otherwise. */
  UpcomingFiling?: boolean;
}

/** Enumeration of the filing status that a TaxReturn can have */
export type TaxReturnStatusEnum = keyof typeof TaxReturnStatusEnum;
export const TaxReturnStatusEnum = Object.freeze({
  "FILED": "FILED",
  "FILING_FAILED": "FILING_FAILED",
  "FILING_FAILED_WRONG_AGENCY_CREDENTIALS": "FILING_FAILED_WRONG_AGENCY_CREDENTIALS",
  "AGENCY_PAYMENT_INITIATED": "AGENCY_PAYMENT_INITIATED",
  "AGENCY_PAYMENT_COMPLETED": "AGENCY_PAYMENT_COMPLETED"
});

/** Enumeration of Reasons to review AST Taxes */
export type TaxReviewStatusEnum = keyof typeof TaxReviewStatusEnum;
export const TaxReviewStatusEnum = Object.freeze({
  "NON_AST_TAX": "NON_AST_TAX",
  "AST_TAX_OVERRIDE": "AST_TAX_OVERRIDE"
});

/** Describes SalesTax details */
export interface TaxService extends IntuitEntity {
  /** Fault or Object should be returned */
  Fault?: Fault;
  /** Product: QBO
    * Description: Describes the taxcode */
  TaxCode?: string;
  /** Product: QBO
    * Description: Describes the taxcode Id, this is output only */
  TaxCodeId?: string;
  /** Product: QBO
    * Description: TaxRate details */
  TaxRateDetails?: TaxRateDetails[];
}

/** Product: ALL
  * Description: TaxTypeApplicability
  * enumeration */
export type TaxTypeApplicablityEnum = keyof typeof TaxTypeApplicablityEnum;
export const TaxTypeApplicablityEnum = Object.freeze({
  "TaxOnAmount": "TaxOnAmount",
  "TaxOnAmountPlusTax": "TaxOnAmountPlusTax",
  "TaxOnTax": "TaxOnTax"
});

/** Product: QBO
  * Description: TDS line detail for the
  * transaction. */
export interface TDSLineDetail {
  /** Product: QBO
    * Description: Reference to TDS account
    * associated with this transaction */
  TDSAccountRef?: ReferenceType;
  /** Product: QBO
    * Description: Extension place holder
    * for TDSLineDetail */
  TDSLineDetailEx?: IntuitAnyType;
  /** Product: QBO
    * Description: TDS section type of the
    * transaction. */
  TDSSectionTypeId?: number;
}

/** Product: QBO
  * Description: Describes metadata
  * associated with TDS entity. */
export interface TDSMetadata extends IntuitEntity {
  /** Product: QBO
    * Description: Provides list of TDS entity types supported for India region. */
  TDSEntityTypes?: NameValue[];
  /** Product: QBO
    * Description: Provides list of TDS section types supported for India region. */
  TDSSectionTypes?: NameValue[];
}

/** Product: ALL
  * Description: Telephone device type enumeration. */
export type TelephoneDeviceTypeEnum = keyof typeof TelephoneDeviceTypeEnum;
export const TelephoneDeviceTypeEnum = Object.freeze({
  "LandLine": "LandLine",
  "Mobile": "Mobile",
  "Fax": "Fax",
  "Pager": "Pager"
});

/** Product: ALL
  * Description: Telephone number type definition. This entity is always manipulated in the context of another parent entity like Person, Organization etc. */
export interface TelephoneNumber {
  /** Product: ALL
    * Description: Telephone area code. */
  AreaCode?: string;
  /** Product: ALL
    * Description: Telephone country code. */
  CountryCode?: string;
  /** Product: ALL
    * Description: True if this is the default telephone number. */
  Default?: boolean;
  /** Product: ALL
    * Description: Phone device type. Valid values are LandLine, Mobile, Fax, and Pager, as defined in the TelephoneDevice. */
  DeviceType?: string;
  /** Product: ALL
    * Description: Telephone exchange code. */
  ExchangeCode?: string;
  /** Product: ALL
    * Description: Telephone extension code. */
  Extension?: string;
  /** Product: ALL
    * Description: Specifies the telephone number in free form.  FreeFormNumber takes precedence over CountryCode, AreaCode, ExchangeCode, and Extension.[br /]Max length: 21 characters. */
  FreeFormNumber?: string;
  /** Product: QBW
    * Description: Unique identifier for an Intuit entity. */
  Id?: string;
  /** Product: ALL
    * Description: Descriptive tag (or label) associated with the telephone number. Valid values are Business, Fax, Home, Mobile, Pager, Primary, Secondary, and Other, as defined in the TelephoneNumberLabelType. */
  Tag?: string;
}

/** Product: ALL
  * Description: Enumeration of type of phones that the data sync process understands. */
export type TelephoneNumberTypeEnum = keyof typeof TelephoneNumberTypeEnum;
export const TelephoneNumberTypeEnum = Object.freeze({
  "Business": "Business",
  "Fax": "Fax",
  "Home": "Home",
  "Mobile": "Mobile",
  "Pager": "Pager",
  "Primary": "Primary",
  "Secondary": "Secondary",
  "Other": "Other"
});

/** The name of a template used for a specific form
  * presentation. */
export interface TemplateName extends IntuitEntity {
  /** Whether or not active inactive templates may be
    * hidden from most display purposes and may not be used on
    * financial tansactions. */
  Active?: boolean;
  /** User recognizable name for the Template
    * name.[br /]
    * [br /]
    * Required for the create operation. [br /]
    * Max Length: 31 */
  Name?: string;
  Type?: TemplateTypeEnum;
}

/** Product: ALL
  * Description: Enumeration of template
  * types. */
export type TemplateTypeEnum = keyof typeof TemplateTypeEnum;
export const TemplateTypeEnum = Object.freeze({
  "BuildAssembly": "BuildAssembly",
  "CreditMemo": "CreditMemo",
  "Estimate": "Estimate",
  "Invoice": "Invoice",
  "PurchaseOrder": "PurchaseOrder",
  "SalesOrder": "SalesOrder",
  "SalesReceipt": "SalesReceipt",
  "StatementCharge": "StatementCharge"
});

/** Product: ALL
  * Description: The Term entity represents
  * the terms under which a sale is made, typically expressed in the
  * form of days due after the goods are received. Optionally, a
  * discount of the total amount may be applied if payment is made
  * within a stipulated time. For example, net 30 indicates that payment
  * is due within 30 days. A term of 2%/15 net 60 indicates that payment
  * is due within 60 days, with a discount of 2% if payment is made
  * within 15 days. Term also supports: an absolute due date, a number
  * of days from a start date, a percent discount, or an absolute
  * discount. */
export interface Term extends IntuitEntity {
  /** Product: ALL
    * Description: If true, this entity
    * is currently enabled for use by QuickBooks.
    * Filterable: ALL
    * Default Value: true */
  Active?: boolean;
  /** Product: ALL
    * Description: Payment must be
    * received by this day of the month.
    * Business Rules: QBO: [li]
    * This value is used only when DueDays is not specified.[/li]
    * [li] Required for the Create request when DueDays is not
    * specified.[/li]
    * ValidRange: QBO: Min=1 Max=31 */
  DayOfMonthDue?: number;
  /** Product: ALL
    * Description: Discount applies if
    * paid before this day of month.
    * Business Rules: QBO: Required
    * for the Create request when DueDays is not specified.
    * ValidRange: QBO: Min=1 Max=31 */
  DiscountDayOfMonth?: number;
  /** Product: ALL
    * Description: Discount applies if
    * paid within this number of days.
    * Business Rules: [li] This
    * value is used only when DueDays is specified. [/li]
    * ValidRange: QBO: Min=0 Max=999 */
  DiscountDays?: number;
  /** Product: ALL
    * Description: Discount percentage
    * available against an amount if paid within the days specified by
    * DiscountDays.
    * ValidRange: ALL: Min=0, Max=100 */
  DiscountPercent?: number;
  /** Product: ALL
    * Description: Number of days from
    * delivery of goods or services until the payment is due.
    * Business Rules: QBO: [li] This value is required if
    * DayOfMonthDue is not specified. [/li] [li] If DueDays is
    * specified, only DiscountDays and DiscountPercent can be
    * additionally specified.[/li]
    * Required: QBO
    * ValidRange: QBO:
    * Min=0 Max=999 */
  DueDays?: number;
  /** Product: ALL
    * Description: Payment due next
    * month if issued that many days before the DayOfMonthDue.
    * Business Rules: QBO: [li] Required for the Create request when
    * DueDays is not specified.[/li]
    * ValidRange: QBO: Min=1 Max=999 */
  DueNextMonthDays?: number;
  /** Product: ALL
    * Description: User recognizable name
    * for the term, for example, "Net 30".
    * ValidRange: QBW: max=31
    * ValidRange: QBO: Max=31
    * Required: ALL
    * Filterable: QBO
    * Sortable: ALL */
  Name?: string;
  /** Product: ALL
    * Description:- Internal use only:
    * extension place holder for SalesTermEx */
  SalesTermEx?: IntuitAnyType;
  /** Product: ALL
    * Description: Type of the Sales
    * Term. Valid values: Standard or DateDriven, as defined by
    * SalesTermTypeEnum. [br /] If dueDays is not null, the Type is
    * Standard else DateDriven.
    * InputType: ALL: ReadOnly */
  Type?: string;
}

/** A record of time worked by a vendor or employee. */
export interface TimeActivity extends IntuitEntity {
  /** Billable status of the time recorded */
  BillableStatus?: BillableStatusEnum;
  /** Hours of break taken between start time and end
    * time.
    * [b]QuickBooks Notes[/b][br /]
    * [i]Unsupported field.[/i] */
  BreakHours?: number;
  /** Minutes of break taken between start time and
    * end time. Valid values are 0 - 59.
    * [b]QuickBooks Notes[/b][br /]
    * [i]Unsupported field.[/i] */
  BreakMinutes?: number;
  /** Seconds of break taken between start time and
    * end time. Valid values are 0 - 59. */
  BreakSeconds?: number;
  ClassRef?: ReferenceType;
  /** Hourly cost rate of the employee or vendor for this
    * time activity. */
  CostRate?: number;
  /** Represents Customer (or Job)Reference */
  CustomerRef?: ReferenceType;
  /** Represents Department Reference. */
  DepartmentRef?: ReferenceType;
  /** Description of work completed during time
    * activity. */
  Description?: string;
  /** Specifies the employee whose time is being
    * recorded. */
  EmployeeRef?: ReferenceType;
  /** Time work ended.
    * [b]QuickBooks Notes[/b][br /]
    * [i]Unsupported field.[/i] */
  EndTime?: Date;
  /** Hourly bill rate of the employee or vendor for
    * this time activity.
    * [b]QuickBooks Notes[/b][br /]
    * [i]Unsupported
    * field.[/i] */
  HourlyRate?: number;
  /** Hours worked. */
  Hours?: number;
  /** True if the start, end hours are already with company/employee time zone offset.
    *
    * Couple of TimeActivity API integrations are already submitting start, end hours with right company/employee time zone offsets. Such integrations will pass this attribute as true to avoid company time zone offsets by TimeActivity API. */
  HoursInEmployeeTimeZone?: boolean;
  /** [br /]
    * Required for the create operation. */
  ItemRef?: ReferenceType;
  /** Minutes worked; valid values are 0 - 59. */
  Minutes?: number;
  NameOf?: TimeActivityTypeEnum;
  /** Specifies the Payee whose time is being
    * recorded. */
  OtherNameRef?: ReferenceType;
  /** The payroll item determines how much the
    * employee should be paid for doing the work specified by the Item
    * Service Id.
    * In order for the Time Activity data to be transferred
    * to the employee payroll data, the Employee must have the
    * property UseTimeEntry set. */
  PayrollItemRef?: ReferenceType;
  /** Seconds worked; valid values are 0 - 59. */
  Seconds?: number;
  /** Time work started.
    * [b]QuickBooks Notes[/b][br /]
    * [i]Unsupported field.[/i] */
  StartTime?: Date;
  /** True if the time recorded is both billable and
    * taxable. */
  Taxable?: boolean;
  /** Internal use only: extension place holder for
    * TimeActivity. */
  TimeActivityEx?: IntuitAnyType;
  /** The timezone from where the time activity is
    * entered, unused in QBO and QBW */
  TimeZone?: string;
  /** The date of the time activity. */
  TxnDate?: Date;
  /** Specifies the vendor whose time is being
    * recorded. */
  VendorRef?: ReferenceType;
}

/** Product: ALL
  * Description: Enumeration of time
  * activity types. */
export type TimeActivityTypeEnum = keyof typeof TimeActivityTypeEnum;
export const TimeActivityTypeEnum = Object.freeze({
  "Employee": "Employee",
  "Other": "Other",
  "Vendor": "Vendor"
});

/** Product: ALL
  * Description: Enumeration of types for time entries with paychecks. */
export type TimeEntryUsedForPaychecksEnum = keyof typeof TimeEntryUsedForPaychecksEnum;
export const TimeEntryUsedForPaychecksEnum = Object.freeze({
  "NotSet": "NotSet",
  "DoNotUseTimeEntry": "DoNotUseTimeEntry",
  "UseTimeEntry": "UseTimeEntry"
});

/** Defines VendorAndPurchase Prefs details */
export interface TimeTrackingPrefs {
  /** Product:QBO
    * Enables billing customers for time */
  BillCustomers?: boolean;
  /** Product:QBO Default TimeItem Id */
  DefaultTimeItem?: ReferenceType;
  /** Product:QBW
    * MarkExpensesAsBillable preference from
    * QB Desktop */
  MarkExpensesAsBillable?: boolean;
  /** Product:QBW
    * MarkTimeEntriesBillable preference
    * from QB Desktop */
  MarkTimeEntriesBillable?: boolean;
  /** Product:QBO
    * Enables billing rate to all employees */
  ShowBillRateToAll?: boolean;
  /** Product:QBW
    * Time Tracking preference from QB
    * Desktop */
  TimeTrackingEnabled?: boolean;
  /** Product:QBO
    * Enables services for time tracking */
  UseServices?: boolean;
  /** Product:All
    * Work week starting day */
  WorkWeekStartDate?: WeekEnum;
}

/** Product: ALL
  * Description: Transaction is the base
  * class of all transactions. */
export interface Transaction extends IntuitEntity {
  /** Product: ALL
    * Description: Reference to the
    * Currency in which all amounts on the associated transaction are
    * expressed.[br /]
    * InputType: ReadWrite */
  CurrencyRef?: ReferenceType;
  /** Product: QBO
    * Description: Location of the
    * transaction, as defined using location tracking in QuickBooks
    * Online. */
  DepartmentRef?: ReferenceType;
  /** Product: ALL
    * Description: QBO: Reference number
    * for the transaction. If DocNumber is not provided, and the
    * Custom Transaction Number is set to "Off", QBO assigns a
    * document number using the next-in-sequence algorithm for Sales
    * transactions. Otherwise the value will remaing null.
    * Alternatively, you can also pass in "AUTO_GENERATE" in this
    * field to force QBO to auto-sequence the document number for
    * Invoices, Estimates and Sales Receipt.[br /]The maximum length
    * for DocNumber is 21 characters. The default value is an empty
    * String. Filter support not provided for Payment.
    * Description:
    * QBW: The primary document number for this transaction. DocNumber
    * is exposed to end users.[br /]If it is not provided, QuickBooks
    * business logic will assign the document number using the "next
    * in sequence" algorithm.[br /]Max. length is 11 characters for
    * Payment, Bill, ItemReceipt and VendorCredit. Max. length is 20
    * characters for other entities.
    * Filterable: QBO
    * InputType: ReadWrite
    * ValidRange: QBW: max=11
    * ValidRange: QBO: max=21 */
  DocNumber?: string;
  /** Product: ALL
    * Description: Currency exchange
    * rate. Valid only if the company file is set up to use
    * Multi-Currency feature. In QuickBooks, exchange rates are always
    * recorded as the number of home currency units it takes to equal
    * one foreign currency unit. The foreign unit is always 1 and the
    * amount of home units that equal that 1 foreign unit is what
    * QuickBooks uses as the exchange rate.
    * InputType: ReadWrite */
  ExchangeRate?: number;
  /** Product: QBW
    * Description: A line item of a
    * transaction.
    * Product: QBO
    * Description: A line item of a
    * transaction. QuickBooks Online does not support tax lines in the
    * main transaction body, only in the TxnTaxDetail section. */
  Line?: Line[];
  /** Product: ALL
    * Description: A linked (related)
    * transaction. More than one transaction can be linked. */
  LinkedTxn?: LinkedTxn[];
  /** Product: ALL
    * Description: User entered,
    * organization-private note about the transaction. This note will
    * not appear on the transaction records by default.
    * InputType: ReadWrite */
  PrivateNote?: string;
  /** Product: QBO
    * Description: Reference to the
    * RecurTemplate which was used to create the Transaction
    * InputType: Read */
  RecurDataRef?: ReferenceType;
  /** Product: QBO
    * Description: The Recurring Schedule information for the Transaction */
  RecurringInfo?: RecurringInfo;
  /** Product: QBO
    * Descripton: List of tags used to identify the transaction. */
  Tag?: Tag[];
  /** Description: Tax Form Num holds data related to Tax Information based on
    * Regional compliance laws.This is applicable for IN region and
    * can be extended to other regions in future. */
  TaxFormNum?: string;
  /** Description: refer TaxFormTypeEnum. Tax Form Type holds data related to Tax
    * Information, values based on
    * regional compliance laws. Applicable for IN Region and can be extended
    * for other Regions. */
  TaxFormType?: string;
  /** Product: QBO
    * Description: Location of the purchase or sale transaction. The applicable
    * values are those exposed through the
    * TransactionLocationTypeEnum. This is currently applicable only
    * for the FR region. */
  TransactionLocationType?: string;
  /** Product: QBO
    * Description: Details of the Approval Status for current transaction in QBO workflows. */
  TxnApprovalInfo?: TxnApprovalInfo;
  /** Product: ALL
    * Description: QBO: The date entered
    * by the user when this transaction occurred. [br /]Often, it is
    * the date when the transaction is created in the system. [br
    * /]For "posting" transactions, this is the posting date that
    * affects the financial statements. If the date is not supplied,
    * the current date on the server is used.
    * Description: QBW: The
    * nominal, user entered, date of the transaction. [br /]Often, but
    * not required to be, the date the transaction was created in the
    * system. [br /]For "posting" transactions, this is the posting
    * date that affects financial statements.
    * Filterable: ALL
    * Sortable:
    * ALL
    * InputType: ReadWrite */
  TxnDate?: Date;
  /** Product: QBO
    * Description: Originating source of
    * the Transaction. Valid values are defined in TxnSourceEnum:
    * QBMobile. */
  TxnSource?: string;
  /** Product: ALL
    * Description: QBW: The status of the
    * transaction. Depending on the transaction type it may have
    * different values.[br /]For Sales Transactions acceptable values
    * are defined in PaymentStatusEnum. For Estimate, the values
    * accepted are defined in EstimateStatusEnum.
    * Description: QBO: The
    * status of the transaction. Depending on the transaction type it
    * may have different values.[br /]For Sales Transactions
    * acceptable values are defined in PaymentStatusEnum. For
    * Estimate, the values accepted are defined in
    * QboEstimateStatusEnum.
    * Filterable:QBW */
  TxnStatus?: string;
  /** Product: ALL
    * Description: Details of taxes
    * charged on the transaction as a whole. For US versions of
    * QuickBooks, tax rates used in the detail section must not be
    * used in any tax line appearing in the main transaction body. For
    * international versions of QuickBooks, the TxnTaxDetail should
    * provide the details of all taxes (sales or purchase) calculated
    * for the transaction based on the tax codes referenced by the
    * transaction. This can be calculated by QuickBooks business logic
    * or you may supply it when adding a transaction. For US versions
    * of QuickBooks you need only supply the tax code for the customer
    * and the tax code (in the case of multiple rates) or tax rate
    * (for a single rate) to apply for the transaction as a
    * whole.[br]See [a
    * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01100_Global_Tax_Model"]Global
    * Tax Model[/a]. */
  TxnTaxDetail?: TxnTaxDetail;
}

/** Product: QBO
  * Description: Transaction delivery info like DeliveryType, DeliveryTime, DeliveryErrorType (if any) */
export interface TransactionDeliveryInfo {
  /** Product: QBO
    * Description: If delivery failed, this would indicate the type of the failure. */
  DeliveryErrorType?: DeliveryErrorTypeEnum;
  /** Product: QBO
    * Description: Time of Delivery */
  DeliveryTime?: Date;
  /** Product: QBO
    * Description: Type of the delivery. Ex: Email, Tradeshift */
  DeliveryType?: DeliveryTypeEnum;
}

/** Product: QBO
  * Description: Enumeration of Purchase or Sale Location for France */
export type TransactionLocationTypeEnum = keyof typeof TransactionLocationTypeEnum;
export const TransactionLocationTypeEnum = Object.freeze({
  "WithinFrance": "WithinFrance",
  "FranceOverseas": "FranceOverseas",
  "OutsideFranceWithEU": "OutsideFranceWithEU",
  "OutsideEU": "OutsideEU"
});

/** Financial transaction representing transfer of
  * funds between accounts.
  * Non QB-writable. */
export interface Transfer extends Transaction {
  /** Total amount of the transfer. */
  Amount?: number;
  ClassRef?: ReferenceType;
  /** Must be a Balance Sheet account. */
  FromAccountRef?: ReferenceType;
  /** Must be a Balance Sheet account. */
  ToAccountRef?: ReferenceType;
  /** Internal use only: extension place holder for
    * Transfer */
  TransferEx: IntuitAnyType;
}

/** Details of approval status for the specific transaction. */
export interface TxnApprovalInfo {
  /** Product: QBO
    * Description: Overall Approval Status, collective of all user approvals.
    * InputType: QBO: ReadOnly */
  ApprovalStatus?: string;
  /** Product: QBO
    * Description:ApprovalStatusDetail represents the detailed approval statuses of a transaction. For a given ApprovalStatus, ApprovalStatusDetail can have one of the many values described below.
    * Following are the approval status and their possible detailed approval statuses:
    * Approval Status - APPROVED
    * Approval Status Detail - APPROVED,AUTO_APPROVED,FORCE_APPROVED,WORKFLOW_AUTO_APPROVED
    *
    * Approval Status - REJECTED
    * Approval Status Detail - REJECTED,WORKFLOW_AUTO_REJECTED
    *
    * Approval Status - REQUIRES_APPROVAL
    * Approval Status Detail - REQUIRES_APPROVAL,CANNOT_DETERMINE
    *
    * Approval Status - PENDING_APPROVAL
    * Approval Status Detail - PENDING_APPROVAL
    *
    * Approval Status - IN_PROGRESS
    * Approval Status Detail - IN_PROGRESS
    * InputType: QBO: ReadOnly */
  ApprovalStatusDetail?: string;
  /** Product: QBO
    * Description: User-id of the user last updating the approval status.
    * InputType: QBO: ReadOnly */
  LastChangedByUser?: string;
  /** Product: QBO
    * Description: Date when the approval status was last updated.
    * InputType: QBO: ReadOnly */
  LastChangedDate?: Date;
}

/** Product: QBO
  * Description: Enumeration of transaction
  * source. */
export type TxnSourceEnum = keyof typeof TxnSourceEnum;
export const TxnSourceEnum = Object.freeze({
  "QBMobile": "QBMobile",
  "GoPayment": "GoPayment",
  "EInvoice": "EInvoice",
  "Square": "Square",
  "QBCommerce": "QBCommerce"
});

/** Product: ALL
  * Description: Details of taxes charged
  * on the transaction as a whole. For US versions of QuickBooks, tax
  * rates used in the detail section must not be used in any tax line
  * appearing in the main transaction body. For international versions
  * of QuickBooks, the TxnTaxDetail should provide the details of all
  * taxes (sales or purchase) calculated for the transaction based on
  * the tax codes referenced by the transaction. This can be calculated
  * by QuickBooks business logic or you may supply it when adding a
  * transaction. For US versions of QuickBooks you need only supply the
  * tax code for the customer and the tax code (in the case of multiple
  * rates) or tax rate (for a single rate) to apply for the transaction
  * as a whole.[br]See [a
  * href="http://ipp.developer.intuit.com/0010_Intuit_Partner_Platform/0060_Financial_Management_Services_(v3)/01100_Global_Tax_Model"]Global
  * Tax Model[/a]. */
export interface TxnTaxDetail {
  /** Product: QBW
    * Description: Reference to the default tax code that applies to the transaction
    * as a whole.
    * In Quickbooks desktop, this maps to CustomerTaxCode in Invoice and
    * VendorTaxCode in Bill.
    * [span style="display: none"] I18n: US [/span] */
  DefaultTaxCodeRef?: ReferenceType;
  /** Product: ALL
    * Description: This must be a Line whose LineDetailType is TaxLineDetail. */
  TaxLine?: Line[];
  /** Product: ALL
    * Description: Enumerated reasons to review Taxes on the Transaction. */
  TaxReviewStatus?: TaxReviewStatusEnum;
  /** Product: ALL
    * Description: Total tax calculated for the transaction, excluding any embedded
    * tax lines. */
  TotalTax?: number;
  /** Product: All
    * Description: Reference to the
    * transaction tax code. For US editions only.
    * Note that the US tax model can have just a single tax code for the
    * entire transaction. */
  TxnTaxCodeRef?: ReferenceType;
  /** Product: All
    * Description: This is a boolean which defines if developer intends to use
    * Automated Sales Tax or tax code that they have provided in the payload.
    * If the v3 developer sets this to true, then txn going in QBO will always
    * have AST rates. In case this flag is set to false, then it will depend on the
    * QBO user pref - AllowPartnerTaxOverride, which tells if QBO user wants to allow
    * v3 app to override AST rates or not. If user allows v3 apps to override AST,
    * then the txn will get saved with v3 app specified rates.
    * [span style="display: none"] I18n: US [/span] */
  UseAutomatedSalesTax?: boolean;
}

/** Product: ALL
  * Description: Enumeration of transaction
  * types. */
export type TxnTypeEnum = keyof typeof TxnTypeEnum;
export const TxnTypeEnum = Object.freeze({
  "APCreditCard": "APCreditCard",
  "ARRefundCreditCard": "ARRefundCreditCard",
  "Bill": "Bill",
  "BillPaymentCheck": "BillPaymentCheck",
  "BuildAssembly": "BuildAssembly",
  "CarryOver": "CarryOver",
  "CashPurchase": "CashPurchase",
  "Charge": "Charge",
  "Check": "Check",
  "CreditCardPayment": "CreditCardPayment",
  "CreditMemo": "CreditMemo",
  "Deposit": "Deposit",
  "EFPLiabilityCheck": "EFPLiabilityCheck",
  "EFTBillPayment": "EFTBillPayment",
  "EFTRefund": "EFTRefund",
  "Estimate": "Estimate",
  "InventoryAdjustment": "InventoryAdjustment",
  "InventoryTransfer": "InventoryTransfer",
  "Invoice": "Invoice",
  "ItemReceipt": "ItemReceipt",
  "JournalEntry": "JournalEntry",
  "LiabilityAdjustment": "LiabilityAdjustment",
  "Paycheck": "Paycheck",
  "PayrollLiabilityCheck": "PayrollLiabilityCheck",
  "PurchaseOrder": "PurchaseOrder",
  "PriorPayment": "PriorPayment",
  "ReceivePayment": "ReceivePayment",
  "RefundCheck": "RefundCheck",
  "ReimburseCharge": "ReimburseCharge",
  "SalesOrder": "SalesOrder",
  "SalesReceipt": "SalesReceipt",
  "SalesTaxPaymentCheck": "SalesTaxPaymentCheck",
  "Transfer": "Transfer",
  "TimeActivity": "TimeActivity",
  "VendorCredit": "VendorCredit",
  "YTDAdjustment": "YTDAdjustment"
});

/** The UOM type defines the data used to represent a
  * set of equivalent units and the conversion rates to other related
  * units. It allows showing what quantities, prices, rates, and costs
  * are based on. */
export interface UOM extends IntuitEntity {
  /** Abbreviation of the Unit of Measure.[br /]
    * [br /]
    * Required for the create operation. [br /]
    * Max Length: 31 */
  Abbrv?: string;
  /** [br /]
    * Required for the create operation. [br /] */
  BaseType?: UOMBaseTypeEnum;
  ConvUnit?: UOMConvUnit[];
  /** User recognizable name of the Unit of
    * Measure.[br /]
    * [br /]
    * Required for the create operation. [br /]
    * Max Length: 31 */
  Name?: string;
}

/** Product: ALL
  * Description: Enumeration of measurement
  * types. */
export type UOMBaseTypeEnum = keyof typeof UOMBaseTypeEnum;
export const UOMBaseTypeEnum = Object.freeze({
  "Area": "Area",
  "Count": "Count",
  "Length": "Length",
  "Other": "Other",
  "Time": "Time",
  "Volume": "Volume",
  "Weight": "Weight"
});

/** Related UOM */
export interface UOMConvUnit {
  /** Abbreviation of the Unit of Measure.[br /]
    * [br /]
    * Required for the create operation. [br /]
    * Max Length: 31 */
  Abbrv?: string;
  ConvRatio?: number;
  /** User recognizable name of the Unit of Measure.[br
    * /]
    * [br /]
    * Required for the create operation. [br /]
    * Max Length: 31 */
  Name?: string;
}

/** enumeration of UOM support types */
export type UOMFeatureTypeEnum = keyof typeof UOMFeatureTypeEnum;
export const UOMFeatureTypeEnum = Object.freeze({
  "Disabled": "Disabled",
  "SinglePerItem": "SinglePerItem",
  "MultiplePerItem": "MultiplePerItem"
});

/** When a unit of measure is referenced, it must
  * include the name of the specific unit used as well as the unit of
  * measure set in which that unit is defined. This entity captures that
  * concept. */
export interface UOMRef {
  /** The name of the unit selected. Examples: inch,
    * foot, yard. */
  Unit: string;
  /** A reference to the UOM entity that defines the
    * set of related units from which the specified Unit is used. */
  UOMSetRef: ReferenceType;
}

/** Represents a User with an Intuit account.  Note that based on privacy restrictions, information returned may be
  * limited depending on calling origin and/or calling user permissions (ex: a user may be able to look up all of
  * their information, but not the information regarding other users). */
export interface User extends IntuitEntity {
  Addr?: PhysicalAddress[];
  DisplayName?: string;
  /** Returned only if caller passes necessary security checks to prevent e-mail address harvesting */
  EmailAddr?: EmailAddress[];
  FamilyName?: string;
  GivenName?: string;
  LocaleCountry?: string;
  LocaleLanguage?: string;
  LocalePostalCode?: string;
  LocaleTimeZone?: string;
  MiddleName?: string;
  /** Represents a list of UserAttribute name/value pairs if the user query provided names of extended attributes to include */
  NameValueAttr?: NameValue[];
  PhoneNumber: TelephoneNumber[];
  Suffix?: string;
  Title?: string;
}

/** Product: ALL
  * Description: A specific user alert to
  * be notified to Quickbooks user, maps to a ToDo record in QuickBooks. */
export interface UserAlert extends IntuitEntity {
  /** Product: QBW
    * Description: In use by the business */
  Active?: boolean;
  /** Product: QBW
    * Description: True if the user alert
    * has been completed */
  Done?: boolean;
  /** Product: QBO
    * Description: The date the user
    * alert is due */
  DueDate?: Date;
  /** Product: QBO
    * Description: The date the user
    * alert will expire */
  ExpireDate?: Date;
  /** Product: QBO
    * Description: The filter associated
    * with the user alert */
  Filter?: string;
  /** Any other properties not covered in base is
    * covered as name value pair, for detailed explanation look at the
    * document */
  NameValue?: NameValue[];
  /** Product: ALL
    * Description: The actual content of
    * the user alert */
  Notes?: string;
  /** Product: ALL
    * Description: The date to remind the
    * user of this user alert */
  ReminderDate?: Date;
  /** Product: QBO
    * Description: The type of the user
    * alert */
  Type?: string;
  /** Product: QBO
    * Description: The URL that can be
    * included in the user alert */
  URL?: string;
  /** Internal use only: extension place holder for
    * user alert */
  UserAlertEx?: IntuitAnyType;
}

/** Describes the Party as a Vendor Role view */
export interface Vendor extends NameBase {
  /** Name or number of the account associated with this vendor.
    * Length Restriction:
    * QBO: 15
    * QBD: 1024 */
  AcctNum?: string;
  /** Name of the Alternate contact within the vendor. Used by QBD only */
  AltContactName?: string;
  /** Product: QBO
    * Description: The A/P account ID for the supplier. This is applicable only in FR where each supplier needs to have his own AP account. */
  APAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Specifies the open balance amount or the amount unpaid by the vendor. For the create operation, this represents the opening balance for the vendor. When returned in response to the query request it represents the current open balance (unpaid amount) for that vendor.
    * Filterable: QBW
    * Sortable: QBW */
  Balance?: number;
  /** Product: ALL
    * Description: Default billing address. */
  BillAddr?: PhysicalAddress;
  /** BillRate can be set to specify this vendor's hourly billing rate. */
  BillRate?: number;
  /** Product: QBW.
    * Description: Business Number of the Vendor. Applicable for CA/UK versions of QuickBooks. */
  BusinessNumber?: string;
  /** Specifies the CIS Rate. Applicable only for UK region, values are defined in the CISRateEnum. */
  CISRate?: string;
  /** Name of the contact within the vendor. Used by QBD only */
  ContactName?: string;
  /** Hourly cost rate of the Employee. QBO only. QBD Unsupporetd field. */
  CostRate?: number;
  /** Specifies the maximum amount of an unpaid vendor balance. */
  CreditLimit?: number;
  /** Reference to the currency all the business transactions created for or received from that vendor are created in. */
  CurrencyRef?: ReferenceType;
  /** GST Identification Number of the Vendor.
    * Applicable for IN region only. */
  GSTIN?: string;
  /** GST registration type of the Vendor.
    * Applicable for IN region only. */
  GSTRegistrationType?: string;
  /** Product: QBO Only
    * Description: True if the Vendor has TPAR. Applicable for AU region only. */
  HasTPAR?: boolean;
  /** Product: QBO only
    * Description: True if the vendor is subcontractor */
  IsSubContractor?: boolean;
  /** Product: ALL
    * Description: Free form text describing the Vendor.[br /]Max. length: 1024 characters. */
  Notes?: string;
  /** Specifies the date of the Open Balance.
    * Non QB-writable. */
  OpenBalanceDate?: Date;
  /** Product: QBW only.
    * Description: An address other than default billing  or shipping. */
  OtherAddr?: PhysicalAddress[];
  ParentRef?: ReferenceType;
  /** Product: QBW.
    * Description: Reference to the PrefillAccount. */
  PrefillAccountRef?: ReferenceType;
  /** Product: ALL
    * Description: Default shipping address. */
  ShipAddr?: PhysicalAddress;
  /** Product: QBO
    * Description: Originating source of
    * the Vendor. Valid values are defined in SourceTypeEnum */
  Source?: string;
  /** Specifies the Subcontractor type. Applicable only for UK region, values are defined in the SubcontractorTypeEnum. */
  SubcontractorType?: string;
  /** Product: QBW
    * Description: True if vendor is T4A eligible. Applicable for CA/UK versions of quickbooks. */
  T4AEligible?: boolean;
  /** Product: QBW
    * Description: True if vendor is T5018 eligible. Applicable for CA/UK versions of quickbooks. */
  T5018Eligible?: boolean;
  /** Product: QBW.
    * Description: Country of Vendor. */
  TaxCountry?: string;
  /** Product: QBO
    * Description: Specifies the date of registeration of Supplier. Applicable for IN Region and in future can be extended to other regions. */
  TaxIdEffectiveDate?: Date;
  /** Specifies the Tax ID of the Person or Organization */
  TaxIdentifier?: string;
  /** Product: QBO
    * Description: The tax reporting basis for the supplier. The applicable values are those exposed through the TaxReportBasisTypeEnum.  This is applicable only in FR. */
  TaxReportingBasis?: string;
  /** Product: QBO
    * Description: True, if TDS (Tax Deducted at Source) is enabled for this Vendor.
    * If enabled, TDS metadata needs to be passsed in VendorEx field. */
  TDSEnabled?: boolean;
  /** Product: QBO
    * Description: Entity Type of the Vendor. */
  TDSEntityTypeId?: number;
  /** Product: QBO
    * Description: True, if TDS threshold calculation should be overriden. */
  TDSOverrideThreshold?: boolean;
  /** Product: QBO
    * Description: Default TDS section type for the vendor to be used in transaction. */
  TDSSectionTypeId?: number;
  TermRef?: ReferenceType;
  /** The Vendor is an independent contractor, someone who is given a 1099-MISC form at the end of the year. The "1099 Vendor" is paid with regular checks, and taxes are not withhold on their behalf. */
  Vendor1099?: boolean;
  /** Internal use only: extension place holder for Vendor. */
  VendorEx?: IntuitAnyType;
  /** Product: QBO Only
    * Description: Contains Bank Account details to enable Vendor Batch Payment. Applicable for AU region only. */
  VendorPaymentBankDetail?: VendorBankAccountDetail;
  /** Product: QBW.
    * Description: Reference to the VendorType. */
  VendorTypeRef?: ReferenceType;
}

/** Defines VendorAndPurchase Prefs details */
export interface VendorAndPurchasesPrefs {
  /** Product:All
    * Apply automatic bill payment */
  AutomaticBillPayment?: boolean;
  /** Product:All
    * Enable BillableExpense tracking */
  BillableExpenseTracking?: boolean;
  /** Product:QBW */
  DaysBillsAreDue?: number;
  /** Product:All
    * Default markup rate used to calculate
    * the markup amount on the transactions. To enter a markup rate of
    * 8.5%, enter 8.5, not 0.085. */
  DefaultMarkup?: number;
  /** Product:All
    * Default markup Account used to
    * calculate the markup amount on the transactions. */
  DefaultMarkupAccount?: ReferenceType;
  /** Product:All
    * Default Terms */
  DefaultTerms?: ReferenceType;
  /** Cloud Max Length: 4000
    * [b]QuickBooks Notes[/b][br
    * /]
    * Max Length: 31 or 159 (for a fully qualified name) */
  DiscountAccountRef?: ReferenceType;
  /** Product:All
    * Enables manage bills */
  EnableBills?: boolean;
  /** Product:All
    * Message to vendors */
  MsgToVendors?: string;
  /** Product:QBW
    * Defines the CustomField definitions */
  POCustomField?: CustomFieldDefinition[];
  /** Product:All
    * Enables TPAR by vendors */
  TPAREnabled?: boolean;
  /** Product:All
    * Enables tracking by customers */
  TrackingByCustomer?: boolean;
  /** Product:QBO */
  UsingInventory?: boolean;
  /** Product:QBW */
  UsingMultiLocationInventory?: boolean;
}

/** Product: ALL
  * Description: Contains Bank Account details to process the batch payment for Vendors. Applicable for AU region only.. */
export interface VendorBankAccountDetail {
  /** Product: QBO only
    * Description: Specifies the BankAccountName for ABA processing. Applicable for AU region only. */
  BankAccountName?: string;
  /** Product: QBO only
    * Description: Specifies the BankAccountNumber for ABA processing. Applicable for AU region only. */
  BankAccountNumber?: string;
  /** Product: QBO only
    * Description: Specifies the BankBranchIdentifier for ABA processing. Applicable for AU region only. */
  BankBranchIdentifier?: string;
  /** Product: QBO only
    * Description: Specifies the Statement text for ABA processing. Applicable for AU region only. */
  StatementText?: string;
}

/** Bill is an AP transaction representing a
  * request-for-payment from a third party for goods/services rendered
  * and/or received */
export interface VendorCredit extends PurchaseByVendor {
  /** Product: ALL
    * Description: The unpaid amount of the bill. When paid-in-full, balance will
    * be zero.
    * [b]QuickBooks Notes[/b][br /]
    * Non QB-writable.
    * Filterable: QBW
    * Sortable: QBW */
  Balance?: number;
  /** Product: QBO Only
    * Description: True if the VendorCredit should be included in annual TPAR, specific to AU region. */
  IncludeInAnnualTPAR?: boolean;
  /** Product: QBO
    * Description: Vendor Mailing Address */
  VendorAddr?: PhysicalAddress;
  /** Internal use only: extension place holder for
    * Bill extensible element to qualify account. */
  VendorCreditEx?: IntuitAnyType;
}

/** Vendor types allow categorizing vendors in ways that are meaningful to the business. For example, one could set up vendor types so that they indicate a vendor's industry or geographic location. The categorization then can be used for reporting. */
export interface VendorType extends IntuitEntity {
  /** Whether or not active inactive customer types may be hidden from most display purposes and may not be used on financial transactions */
  Active?: boolean;
  /** Product: ALL
    * Description: Fully qualified name of the entity. The fully qualified name prepends the topmost parent, followed by each sub element separated by colons. Takes the form of Parent:Customer:Job:Sub-job. Limited to 5 levels.[br /]Max. length: 41 characters (single name) or 209 characters (fully qualified name). */
  FullyQualifiedName?: string;
  /** User recognizable name for the Vendor Type.
    * Length Restriction:
    * QBD: 1024 */
  Name?: string;
  /** VendorType Parent referene */
  ParentRef?: ReferenceType;
}

/** Detailed data about a warning condition that occurred when a request was processed */
export interface Warning {
  /** Warning code, this is a required field */
  code: string;
  /** The element (if any) directly involved in the warning (i.e. an ignored element) */
  element?: string;

  /** Detailed message regarding the warning condition with specifics */
  Detail?: string;
  /** Localized standard message associated with the warning */
  Message: string;
}

/** Detailed data about warnings that occurred when a request was processed */
export interface Warnings {
  /** Warning details specifies each warning */
  Warning?: Warning[];
}

/** Product: ALL
  * Description: Website address type. This entity is always manipulated in context of another parent entity like Person, Organization etc.[br /]Unsupported type. */
export interface WebSiteAddress {
  /** Product: ALL
    * Description: True if this is the default web site. */
  Default?: boolean;
  /** Product: ALL
    * Description: Unique identifier for an Intuit entity. */
  Id?: string;
  /** Product: ALL
    * Description: Descriptive tag associated with the web site. */
  Tag?: string;
  /** Product: ALL
    * Description: Uniform Resource Identifier for the web site.[br /]Max. length: 1000 characters. */
  URI?: string;
}

/** Week enumeration */
export type WeekEnum = keyof typeof WeekEnum;
export const WeekEnum = Object.freeze({
  "Sunday": "Sunday",
  "Monday": "Monday",
  "Tuesday": "Tuesday",
  "Wednesday": "Wednesday",
  "Thursday": "Thursday",
  "Friday": "Friday",
  "Saturday": "Saturday"
});

export interface document {
  Account: Account;
  Attachable: Attachable;
  Bill: Bill;
  BillPayment: BillPayment;
  BooleanTypeCustomFieldDefinition: BooleanTypeCustomFieldDefinition;
  Budget: Budget;
  ChargeCredit: ChargeCredit;
  Class: Class;
  Company: Company;
  CompanyCurrency: CompanyCurrency;
  CompanyInfo: CompanyInfo;
  CreditCardPaymentTxn: CreditCardPaymentTxn;
  CreditMemo: CreditMemo;
  Customer: Customer;
  CustomerType: CustomerType;
  CustomFieldDefinition: CustomFieldDefinition;
  DateTypeCustomFieldDefinition: DateTypeCustomFieldDefinition;
  Department: Department;
  Deposit: Deposit;
  EmailDeliveryInfo: EmailDeliveryInfo;
  Employee: Employee;
  Estimate: Estimate;
  ExchangeRate: ExchangeRate;
  FixedAsset: FixedAsset;
  IntuitBatchRequest: IntuitBatchRequest;
  IntuitResponse: IntuitResponse;
  InventoryAdjustment: InventoryAdjustment;
  InventorySite: InventorySite;
  Invoice: Invoice;
  Item: Item;
  JournalCode: JournalCode;
  JournalEntry: JournalEntry;
  MasterAccount: MasterAccount;
  NumberTypeCustomFieldDefinition: NumberTypeCustomFieldDefinition;
  OLBStatus: OLBStatus;
  OtherName: OtherName;
  Payment: Payment;
  PaymentMethod: PaymentMethod;
  Preferences: Preferences;
  PriceLevel: PriceLevel;
  Purchase: Purchase;
  PurchaseOrder: PurchaseOrder;
  QbdtEntityIdMapping: QbdtEntityIdMapping;
  RecurringTransaction: RecurringTransaction;
  RefundReceipt: RefundReceipt;
  ReimburseCharge: ReimburseCharge;
  Report: Report;
  SalesOrder: SalesOrder;
  SalesReceipt: SalesReceipt;
  SalesRep: SalesRep;
  StatementCharge: StatementCharge;
  Status: Status;
  StringTypeCustomFieldDefinition: StringTypeCustomFieldDefinition;
  SyncActivity: SyncActivity;
  SyncErrorResponse: SyncErrorResponse;
  Tag: Tag;
  Task: Task;
  TaxAgency: TaxAgency;
  TaxClassification: TaxClassification;
  TaxCode: TaxCode;
  TaxPayment: TaxPayment;
  TaxRate: TaxRate;
  TaxReturn: TaxReturn;
  TaxService: TaxService;
  TDSMetadata: TDSMetadata;
  Term: Term;
  TimeActivity: TimeActivity;
  Transfer: Transfer;
  UserAlert: UserAlert;
  Vendor: Vendor;
  VendorCredit: VendorCredit;
  VendorType: VendorType;
}