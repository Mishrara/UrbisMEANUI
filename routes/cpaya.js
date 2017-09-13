var express = require('express');
var router = express.Router();
var path = require('path');
const CPAY = require('../models/cpay');

router.get('/cpay', function(req,res,next){
	 res.sendFile(path.join(__dirname + '../client/dist/index.html'));
});
router.post('/cpay', function(req,res,next){
	let cpay = new CPAY({
		AccountingCentre: req.body.AccountingCentre,
		ChargeAmount: req.body.ChargeAmount,
		ChargeCurrency: req.body.ChargeCurrency,
		ChargeMethod: req.body.ChargeMethod,
		ChargePercentage: req.body.ChargePercentage,
		CommissionAmount: req.body.CommissionAmount,
		CommissionCurrency: req.body.CommissionCurrency,
		CommissionPercentage: req.body.CommissionPercentage,
		EntryComplete: req.body.EntryComplete,
		ContractNumber: req.body.ContractNumber,
		CreditAccount: req.body.CreditAccount,
		CreditAgent: req.body.CreditAgent,
		CreditAmount: req.body.CreditAmount,
		CreditCurrency: req.body.CreditCurrency,
		CreditValueDate: req.body.CreditValueDate,
		ExtendedCreditNarrative2: req.body.ExtendedCreditNarrative2,
		ExtendedCreditNarrative3: req.body.ExtendedCreditNarrative3,
		ExtendedCreditNarrative4: req.body.ExtendedCreditNarrative4,
		ExtendedCreditNarrative5: req.body.ExtendedCreditNarrative5,
		ExtendedCreditNarrative6: req.body.ExtendedCreditNarrative6,
		CreditPostingNarrative: req.body.CreditPostingNarrative,
		CreditNarrativeCode: req.body.CreditNarrativeCode,
		DebitAccount: req.body.DebitAccount,
		DebitAgent: req.body.DebitAgent,
		DebitAmount: req.body.DebitAmount,
		DebitCurrency: req.body.DebitCurrency,
		DebitValueDate: req.body.DebitValueDate,
		ExtendedDebitNarrative2: req.body.ExtendedDebitNarrative2,
		ExtendedDebitNarrative3: req.body.ExtendedDebitNarrative3,
		ExtendedDebitNarrative4: req.body.ExtendedDebitNarrative4,
		ExtendedDebitNarrative5: req.body.ExtendedDebitNarrative5,
		ExtendedDebitNarrative6: req.body.ExtendedDebitNarrative6,
		DebitPostingNarrative: req.body.DebitPostingNarrative,
		DebitNarrativeCode: req.body.DebitNarrativeCode,
		DefaultAddress: req.body.DefaultAddress,
		ExchangeGroup: req.body.ExchangeGroup,
		ExchangeRate: req.body.ExchangeRate,
		MT103: req.body.MT103,
		MT202: req.body.MT202,
		HolidayOverride: req.body.HolidayOverride,
		IncomingReference: req.body.IncomingReference,
		CreditIntermediaryAgent: req.body.CreditIntermediaryAgent,
		LinkedContract: req.body.LinkedContract,
		GLMaster: req.body.GLMaster,
		Message1: req.body.Message1,
		Message2: req.body.Message2,
		Message3: req.body.Message3,
		Message4: req.body.Message4,
		Message5: req.body.Message5,
		MessagePriority: req.body.MessagePriority,
		MessageTypeValue: req.body.MessageTypeValue,
		OrderingPartyIsABank: req.body.OrderingPartyIsABank,
		OrderingPartyDerailsForMT210_1: req.body.OrderingPartyDerailsForMT210_1,
		OrderingPartyDerailsForMT210_2: req.body.OrderingPartyDerailsForMT210_2,
		OrderingPartyDerailsForMT210_3: req.body.OrderingPartyDerailsForMT210_3,
		OrderingPartyDerailsForMT210_4: req.body.OrderingPartyDerailsForMT210_4,
		ProductName: req.body.ProductName,
		ProductType: req.body.ProductType,
		WidthOverride: req.body.WidthOverride,
		ReplaceBy: req.body.ReplaceBy,
		ReplacesContract: req.body.ReplacesContract,
		Status: req.body.Status,
		SwiftStatus: req.body.SwiftStatus,
		UserCode: req.body.UserCode			
	});
	
	cpay.save((err)=>{
		if(err){
			console.log(err);
			return err;
		}
		console.log("successful save to db");
		res.json({message : err});
	});
	//console.log("save success");
});
module.exports = router