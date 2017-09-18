import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TransectService} from '../../services/transect.service';
import {DropdownService} from '../../services/dropdown.service';

@Component({
  selector: 'app-cpay',
  templateUrl: './cpay.component.html',
  styleUrls: ['./cpay.component.css']
})
export class CpayComponent implements OnInit {
  cpayForm: FormGroup;
  productTemplate
  ScreeenCaption: string;
  createForm(){
    console.log(this.ScreeenCaption);
    this.cpayForm = this.formBuilder.group({
      screenCaption: this.ScreeenCaption,
      AccountingCentre: '',
      ChargeAmount: '',
      ChargeCurrency:'',
      ChargeMethod: '',
      ChargePercentage: '',
      CommissionAmount: '',
      CommissionCurrency: '',
      CommissionPercentage: '',
      EntryComplete: '',
      ContractNumber: '',
      CreditAccount: '',
      CreditAgent: '',
      CreditAmount: '',
      CreditCurrency: '',
      CreditValueDate: '',
      ExtendedCreditNarrative2: '',
      ExtendedCreditNarrative3: '',
      ExtendedCreditNarrative4: '',
      ExtendedCreditNarrative5: '',
      ExtendedCreditNarrative6: '',
      CreditPostingNarrative: '',
      CreditNarrativeCode: '',
      DebitAccount: '',
      DebitAgent: '',
      DebitAmount: '',
      DebitCurrency: '',
      DebitValueDate: '',
      ExtendedDebitNarrative2: '',
      ExtendedDebitNarrative3: '',
      ExtendedDebitNarrative4: '',
      ExtendedDebitNarrative5: '',
      ExtendedDebitNarrative6: '',
      DebitPostingNarrative: '',
      DebitNarrativeCode: '',
      DefaultAddress: '',
      ExchangeGroup: '',
      ExchangeRate: '',
      MT103: '',
      MT202: '',
      HolidayOverride: '',
      IncomingReference: '',
      CreditIntermediaryAgent: '',
      LinkedContract: '',
      GLMaster: '',
      Message1: '',
      Message2: '',
      Message3: '',
      Message4: '',
      Message5: '',
      MessagePriority: '',
      MessageTypeValue: '',
      OrderingPartyIsABank: '',
      OrderingPartyDerailsForMT210_1: '',
      OrderingPartyDerailsForMT210_2: '',
      OrderingPartyDerailsForMT210_3: '',
      OrderingPartyDerailsForMT210_4: '',
      ProductName: '',
      ProductType: '',
      WidthOverride: '',
      ReplaceBy: '',
      ReplacesContract: '',
      Status: '',
      SwiftStatus: '',
      UserCode: ''
    });
  }
  loadDropDowns()
  {
     this.dropDown.getDropDown("PRODTYPE").subscribe(data => {
       this.productTemplate= data});
  }
  constructor(private formBuilder:FormBuilder,
    private transectService: TransectService,
    private dropDown:DropdownService,
    private route: Router
  ) {
    if (this.route.url.endsWith('a')) {
      this.ScreeenCaption = "Add";   
    } else if(this.route.url.endsWith('i')) {
      this.ScreeenCaption = "Inq";
    } else if(this.route.url.endsWith('c')) {
      this.ScreeenCaption = "Chg";
    } else if(this.route.url.endsWith('d')) {
      this.ScreeenCaption = "Del";
    }
    this.createForm();
    this.loadDropDowns();   
   }
  ngOnInit() {
  }
  OnTransectioSubmit(){
    const CPAY = {
      AccountingCentre: this.cpayForm.get("AccountingCentre").value,
      ChargeAmount: this.cpayForm.get("ChargeAmount").value,
      ChargeCurrency: this.cpayForm.get("ChargeCurrency").value,
      ChargeMethod: this.cpayForm.get("ChargeMethod").value,
      ChargePercentage: this.cpayForm.get("ChargePercentage").value,
      CommissionAmount: this.cpayForm.get("CommissionAmount").value,
      CommissionCurrency: this.cpayForm.get("CommissionCurrency").value,
      CommissionPercentage: this.cpayForm.get("CommissionPercentage").value,
      EntryComplete: this.cpayForm.get("EntryComplete").value,
      ContractNumber: this.cpayForm.get("ContractNumber").value,
      CreditAccount: this.cpayForm.get("CreditAccount").value,
      CreditAgent: this.cpayForm.get("CreditAgent").value,
      CreditAmount: this.cpayForm.get("CreditAmount").value,
      CreditCurrency: this.cpayForm.get("CreditCurrency").value,
      CreditValueDate: this.cpayForm.get("CreditValueDate").value,
      ExtendedCreditNarrative2: this.cpayForm.get("ExtendedCreditNarrative2").value,
      ExtendedCreditNarrative3: this.cpayForm.get("ExtendedCreditNarrative3").value,
      ExtendedCreditNarrative4: this.cpayForm.get("ExtendedCreditNarrative4").value,
      ExtendedCreditNarrative5: this.cpayForm.get("ExtendedCreditNarrative5").value,
      ExtendedCreditNarrative6: this.cpayForm.get("ExtendedCreditNarrative6").value,
      CreditPostingNarrative: this.cpayForm.get("CreditPostingNarrative").value,
      CreditNarrativeCode: this.cpayForm.get("CreditNarrativeCode").value,
      DebitAccount: this.cpayForm.get("DebitAccount").value,
      DebitAgent: this.cpayForm.get("DebitAgent").value,
      DebitAmount: this.cpayForm.get("DebitAmount").value,
      DebitCurrency: this.cpayForm.get("DebitCurrency").value,
      DebitValueDate: this.cpayForm.get("DebitValueDate").value,
      ExtendedDebitNarrative2: this.cpayForm.get("ExtendedDebitNarrative2").value,
      ExtendedDebitNarrative3: this.cpayForm.get("ExtendedDebitNarrative3").value,
      ExtendedDebitNarrative4: this.cpayForm.get("ExtendedDebitNarrative4").value,
      ExtendedDebitNarrative5: this.cpayForm.get("ExtendedDebitNarrative5").value,
      ExtendedDebitNarrative6: this.cpayForm.get("ExtendedDebitNarrative6").value,
      DebitPostingNarrative: this.cpayForm.get("DebitPostingNarrative").value,
      DebitNarrativeCode: this.cpayForm.get("DebitNarrativeCode").value,
      DefaultAddress: this.cpayForm.get("DefaultAddress").value,
      ExchangeGroup: this.cpayForm.get("ExchangeGroup").value,
      ExchangeRate: this.cpayForm.get("ExchangeRate").value,
      MT103: this.cpayForm.get("MT103").value,
      MT202: this.cpayForm.get("MT202").value,
      HolidayOverride: this.cpayForm.get("HolidayOverride").value,
      IncomingReference: this.cpayForm.get("IncomingReference").value,
      CreditIntermediaryAgent: this.cpayForm.get("CreditIntermediaryAgent").value,
      LinkedContract: this.cpayForm.get("LinkedContract").value,
      GLMaster: this.cpayForm.get("GLMaster").value,
      Message1: this.cpayForm.get("Message1").value,
      Message2: this.cpayForm.get("Message2").value,
      Message3: this.cpayForm.get("Message3").value,
      Message4: this.cpayForm.get("Message4").value,
      Message5: this.cpayForm.get("Message5").value,
      MessagePriority: this.cpayForm.get("MessagePriority").value,
      MessageTypeValue: this.cpayForm.get("MessageTypeValue").value,
      OrderingPartyIsABank: this.cpayForm.get("OrderingPartyIsABank").value,
      OrderingPartyDerailsForMT210_1: this.cpayForm.get("OrderingPartyDerailsForMT210_1").value,
      OrderingPartyDerailsForMT210_2: this.cpayForm.get("OrderingPartyDerailsForMT210_2").value,
      OrderingPartyDerailsForMT210_3: this.cpayForm.get("OrderingPartyDerailsForMT210_3").value,
      OrderingPartyDerailsForMT210_4: this.cpayForm.get("OrderingPartyDerailsForMT210_4").value,
      ProductName: this.cpayForm.get("ProductName").value,
      ProductType: this.cpayForm.get("ProductType").value,
      WidthOverride: this.cpayForm.get("WidthOverride").value,
      ReplaceBy: this.cpayForm.get("ReplaceBy").value,
      ReplacesContract: this.cpayForm.get("ReplacesContract").value,
      Status: this.cpayForm.get("Status").value,
      SwiftStatus: this.cpayForm.get("SwiftStatus").value,
      UserCode: this.cpayForm.get("UserCode").value
    }
    this.transectService.transectAdd(CPAY).subscribe(data => {
      console.log(data);
    })
  }
  onChange(event){
    var valr = event.value;
    if (valr.contains(':')) {
      valr = event.value.split(':')[1];
    }
    var key = event.name;
    this.cpayForm.controls[key].setValue(valr);
  }
}
