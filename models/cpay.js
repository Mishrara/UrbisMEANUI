var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var cleanPaymentsModel = new Schema({
    AccountingCentre: String,
    ChargeAmount: String,
    ChargeCurrency: String,
    ChargeMethod: String,
    ChargePercentage: String,
    CommissionAmount: String,
    CommissionCurrency: String,
    CommissionPercentage: String,
    EntryComplete: String,
    ContractNumber: String,
    CreditAccount: String,
    CreditAgent: String,
    CreditAmount: String,
    CreditCurrency: String,
    CreditValueDate: String,
    ExtendedCreditNarrative2: String,
    ExtendedCreditNarrative3: String,
    ExtendedCreditNarrative4: String,
    ExtendedCreditNarrative5: String,
    ExtendedCreditNarrative6: String,
    CreditPostingNarrative: String,
    CreditNarrativeCode: String,
    DebitAccount: String,
    DebitAgent: String,
    DebitAmount: String,
    DebitCurrency: String,
    DebitValueDate: String,
    ExtendedDebitNarrative2: String,
    ExtendedDebitNarrative3: String,
    ExtendedDebitNarrative4: String,
    ExtendedDebitNarrative5: String,
    ExtendedDebitNarrative6: String,
    DebitPostingNarrative: String,
    DebitNarrativeCode: String,
    DefaultAddress: String,
    ExchangeGroup: String,
    ExchangeRate: String,
    MT103: String,
    MT202: String,
    HolidayOverride: String,
    IncomingReference: String,
    CreditIntermediaryAgent: String,
    LinkedContract: String,
    GLMaster: String,
    Message1: String,
    Message2: String,
    Message3: String,
    Message4: String,
    Message5: String,
    MessagePriority: String,
    MessageTypeValue: String,
    OrderingPartyIsABank: String,
    OrderingPartyDerailsForMT210_1: String,
    OrderingPartyDerailsForMT210_2: String,
    OrderingPartyDerailsForMT210_3: String,
    OrderingPartyDerailsForMT210_4: String,
    ProductName: String,
    ProductType: String,
    WidthOverride: String,
    ReplaceBy: String,
    ReplacesContract: String,
    Status: String,
    SwiftStatus: String,
    UserCode: String

});

module.exports = mongoose.model("CPAY",cleanPaymentsModel); 