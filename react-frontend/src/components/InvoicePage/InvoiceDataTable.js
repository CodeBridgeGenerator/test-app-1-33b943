import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const InvoiceDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.noff}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.invoicetype}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.invoicedateandtime}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.originaleinvoicereferencenumber}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.suppliername}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.suppliertin}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.suppliersstregistrationnumber}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.identifiertype}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.identifiernumber}</p>
const p_dateTemplate9 = (rowData, { rowIndex }) => <p >{(new Date(rowData.suppliermsiccode)).toLocaleDateString()}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.suppliertourismtaxregistrationnumber}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.supplierbusinessactivitydescription}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.supplieremail}</p>
const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.thefirstsuppliercontactnumber}</p>
const p_dateTemplate14 = (rowData, { rowIndex }) => <p >{(new Date(rowData.suppliercontactnumber)).toLocaleDateString()}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.countryname}</p>
const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.statename}</p>
const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.cityname}</p>
const p_dateTemplate18 = (rowData, { rowIndex }) => <p >{(new Date(rowData.postalzone)).toLocaleDateString()}</p>
const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.buyername}</p>
const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.buyertin}</p>
const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.buyersstregistrationnumber}</p>
const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.buyerbusinessregistrationnumber}</p>
const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.buyeremail}</p>
const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.buyercountryname}</p>
const pTemplate25 = (rowData, { rowIndex }) => <p >{rowData.buyerstatename}</p>
const pTemplate26 = (rowData, { rowIndex }) => <p >{rowData.buyercityname}</p>
const p_dateTemplate27 = (rowData, { rowIndex }) => <p >{(new Date(rowData.buyerpostalzone)).toLocaleDateString()}</p>
const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.thefirstbuyercontactnumber}</p>
const p_numberTemplate29 = (rowData, { rowIndex }) => <p >{rowData.buyercontactnumber}</p>
const pTemplate30 = (rowData, { rowIndex }) => <p >{rowData.invoicecurrency}</p>
const p_dateTemplate31 = (rowData, { rowIndex }) => <p >{(new Date(rowData.currencyexchangerate)).toLocaleDateString()}</p>
const pTemplate32 = (rowData, { rowIndex }) => <p >{rowData.frequencyofbilling}</p>
const pTemplate33 = (rowData, { rowIndex }) => <p >{rowData.billingperiodstartdate}</p>
const pTemplate34 = (rowData, { rowIndex }) => <p >{rowData.billingperiodenddate}</p>
const pTemplate35 = (rowData, { rowIndex }) => <p >{rowData.paymentmode}</p>
const p_numberTemplate36 = (rowData, { rowIndex }) => <p >{rowData.supplierbankaccountnumber}</p>
const pTemplate37 = (rowData, { rowIndex }) => <p >{rowData.paymentterms}</p>
const p_numberTemplate38 = (rowData, { rowIndex }) => <p >{rowData.prepaymentamount}</p>
const pTemplate39 = (rowData, { rowIndex }) => <p >{rowData.prepaymentdate}</p>
const pTemplate40 = (rowData, { rowIndex }) => <p >{rowData.prepaymentreferencenumber}</p>
const pTemplate41 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientname}</p>
const pTemplate42 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientcountryname}</p>
const pTemplate43 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientstatename}</p>
const pTemplate44 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientcityname}</p>
const p_dateTemplate45 = (rowData, { rowIndex }) => <p >{(new Date(rowData.shippingrecipientpostalzone)).toLocaleDateString()}</p>
const pTemplate46 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipienttin}</p>
const pTemplate47 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientidentifiertype}</p>
const pTemplate48 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientbusinessregistrationnumber}</p>
const pTemplate49 = (rowData, { rowIndex }) => <p >{rowData.billreferencenumber}</p>
const pTemplate50 = (rowData, { rowIndex }) => <p >{rowData.referencenumberofcustomsformno1}</p>
const pTemplate51 = (rowData, { rowIndex }) => <p >{rowData.incoterms}</p>
const pTemplate52 = (rowData, { rowIndex }) => <p >{rowData.freetradeagreementinformation}</p>
const pTemplate53 = (rowData, { rowIndex }) => <p >{rowData.authorisationnumberforcertifiedexporter}</p>
const pTemplate54 = (rowData, { rowIndex }) => <p >{rowData.referencenumberofcustomsformno2}</p>
const p_dateTemplate55 = (rowData, { rowIndex }) => <p >{(new Date(rowData.invoicelinenumber)).toLocaleDateString()}</p>
const pTemplate56 = (rowData, { rowIndex }) => <p >{rowData.invoicelineclassification}</p>
const pTemplate57 = (rowData, { rowIndex }) => <p >{rowData.productname}</p>
const p_dateTemplate58 = (rowData, { rowIndex }) => <p >{(new Date(rowData.quantity)).toLocaleDateString()}</p>
const p_dateTemplate59 = (rowData, { rowIndex }) => <p >{(new Date(rowData.unitprice)).toLocaleDateString()}</p>
const pTemplate60 = (rowData, { rowIndex }) => <p >{rowData.measurement}</p>
const p_dateTemplate61 = (rowData, { rowIndex }) => <p >{(new Date(rowData.subtotal)).toLocaleDateString()}</p>
const pTemplate62 = (rowData, { rowIndex }) => <p >{rowData.countryoforigin}</p>
const p_dateTemplate63 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalexcludingtax)).toLocaleDateString()}</p>
const pTemplate64 = (rowData, { rowIndex }) => <p >{rowData.taxtype}</p>
const p_dateTemplate65 = (rowData, { rowIndex }) => <p >{(new Date(rowData.taxrate)).toLocaleDateString()}</p>
const p_dateTemplate66 = (rowData, { rowIndex }) => <p >{(new Date(rowData.taxamount)).toLocaleDateString()}</p>
const pTemplate67 = (rowData, { rowIndex }) => <p >{rowData.taxexemptiondetails}</p>
const p_dateTemplate68 = (rowData, { rowIndex }) => <p >{(new Date(rowData.taxexemptionamount)).toLocaleDateString()}</p>
const p_dateTemplate69 = (rowData, { rowIndex }) => <p >{(new Date(rowData.discountrate)).toLocaleDateString()}</p>
const p_dateTemplate70 = (rowData, { rowIndex }) => <p >{(new Date(rowData.discountamount)).toLocaleDateString()}</p>
const pTemplate71 = (rowData, { rowIndex }) => <p >{rowData.discountdescription}</p>
const p_dateTemplate72 = (rowData, { rowIndex }) => <p >{(new Date(rowData.feeorchargerate)).toLocaleDateString()}</p>
const p_dateTemplate73 = (rowData, { rowIndex }) => <p >{(new Date(rowData.feeorchargeamount)).toLocaleDateString()}</p>
const p_dateTemplate74 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totaltaxableamountpertaxtype)).toLocaleDateString()}</p>
const p_dateTemplate75 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totaltaxamountpertaxtype)).toLocaleDateString()}</p>
const pTemplate76 = (rowData, { rowIndex }) => <p >{rowData.detailsoftaxexemption}</p>
const p_dateTemplate77 = (rowData, { rowIndex }) => <p >{(new Date(rowData.amountexemptedfromtax)).toLocaleDateString()}</p>
const p_dateTemplate78 = (rowData, { rowIndex }) => <p >{(new Date(rowData.additionaldiscountamount)).toLocaleDateString()}</p>
const p_dateTemplate79 = (rowData, { rowIndex }) => <p >{(new Date(rowData.additionaldiscountdescription)).toLocaleDateString()}</p>
const p_dateTemplate80 = (rowData, { rowIndex }) => <p >{(new Date(rowData.additionalfeeamount)).toLocaleDateString()}</p>
const p_dateTemplate81 = (rowData, { rowIndex }) => <p >{(new Date(rowData.additionalfeedescription)).toLocaleDateString()}</p>
const p_dateTemplate82 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totaldiscountvalue)).toLocaleDateString()}</p>
const p_dateTemplate83 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalfeeorchargeamount)).toLocaleDateString()}</p>
const p_dateTemplate84 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totaltaxamount)).toLocaleDateString()}</p>
const p_dateTemplate85 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalnetamount)).toLocaleDateString()}</p>
const p_dateTemplate86 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalincludingtax)).toLocaleDateString()}</p>
const p_dateTemplate87 = (rowData, { rowIndex }) => <p >{(new Date(rowData.roundingamount)).toLocaleDateString()}</p>
const p_dateTemplate88 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalpayableamount)).toLocaleDateString()}</p>
const pTemplate89 = (rowData, { rowIndex }) => <p >{rowData.invoicenumber}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "invoice"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="noff" header="Noff" body={pTemplate0} filter={selectedFilterFields.includes("noff")} hidden={selectedHideFields?.includes("noff")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicetype" header="Invoicetype" body={pTemplate1} filter={selectedFilterFields.includes("invoicetype")} hidden={selectedHideFields?.includes("invoicetype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicedateandtime" header="Invoicedateandtime" body={pTemplate2} filter={selectedFilterFields.includes("invoicedateandtime")} hidden={selectedHideFields?.includes("invoicedateandtime")}  sortable style={{ minWidth: "8rem" }} />
<Column field="originaleinvoicereferencenumber" header="Originaleinvoicereferencenumber" body={pTemplate3} filter={selectedFilterFields.includes("originaleinvoicereferencenumber")} hidden={selectedHideFields?.includes("originaleinvoicereferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliername" header="Suppliername" body={pTemplate4} filter={selectedFilterFields.includes("suppliername")} hidden={selectedHideFields?.includes("suppliername")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliertin" header="Suppliertin" body={pTemplate5} filter={selectedFilterFields.includes("suppliertin")} hidden={selectedHideFields?.includes("suppliertin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersstregistrationnumber" header="Suppliersstregistrationnumber" body={pTemplate6} filter={selectedFilterFields.includes("suppliersstregistrationnumber")} hidden={selectedHideFields?.includes("suppliersstregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="identifiertype" header="Identifiertype" body={pTemplate7} filter={selectedFilterFields.includes("identifiertype")} hidden={selectedHideFields?.includes("identifiertype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="identifiernumber" header="Identifiernumber" body={pTemplate8} filter={selectedFilterFields.includes("identifiernumber")} hidden={selectedHideFields?.includes("identifiernumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliermsiccode" header="Suppliermsiccode" body={p_dateTemplate9} filter={selectedFilterFields.includes("suppliermsiccode")} hidden={selectedHideFields?.includes("suppliermsiccode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliertourismtaxregistrationnumber" header="Suppliertourismtaxregistrationnumber" body={pTemplate10} filter={selectedFilterFields.includes("suppliertourismtaxregistrationnumber")} hidden={selectedHideFields?.includes("suppliertourismtaxregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierbusinessactivitydescription" header="Supplierbusinessactivitydescription" body={pTemplate11} filter={selectedFilterFields.includes("supplierbusinessactivitydescription")} hidden={selectedHideFields?.includes("supplierbusinessactivitydescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplieremail" header="Supplieremail" body={pTemplate12} filter={selectedFilterFields.includes("supplieremail")} hidden={selectedHideFields?.includes("supplieremail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstsuppliercontactnumber" header="Thefirstsuppliercontactnumber" body={pTemplate13} filter={selectedFilterFields.includes("thefirstsuppliercontactnumber")} hidden={selectedHideFields?.includes("thefirstsuppliercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliercontactnumber" header="Suppliercontactnumber" body={p_dateTemplate14} filter={selectedFilterFields.includes("suppliercontactnumber")} hidden={selectedHideFields?.includes("suppliercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="countryname" header="Countryname" body={pTemplate15} filter={selectedFilterFields.includes("countryname")} hidden={selectedHideFields?.includes("countryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="statename" header="Statename" body={pTemplate16} filter={selectedFilterFields.includes("statename")} hidden={selectedHideFields?.includes("statename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="cityname" header="Cityname" body={pTemplate17} filter={selectedFilterFields.includes("cityname")} hidden={selectedHideFields?.includes("cityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="postalzone" header="Postalzone" body={p_dateTemplate18} filter={selectedFilterFields.includes("postalzone")} hidden={selectedHideFields?.includes("postalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyername" header="Buyername" body={pTemplate19} filter={selectedFilterFields.includes("buyername")} hidden={selectedHideFields?.includes("buyername")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyertin" header="Buyertin" body={pTemplate20} filter={selectedFilterFields.includes("buyertin")} hidden={selectedHideFields?.includes("buyertin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersstregistrationnumber" header="Buyersstregistrationnumber" body={pTemplate21} filter={selectedFilterFields.includes("buyersstregistrationnumber")} hidden={selectedHideFields?.includes("buyersstregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerbusinessregistrationnumber" header="Buyerbusinessregistrationnumber" body={pTemplate22} filter={selectedFilterFields.includes("buyerbusinessregistrationnumber")} hidden={selectedHideFields?.includes("buyerbusinessregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeremail" header="Buyeremail" body={pTemplate23} filter={selectedFilterFields.includes("buyeremail")} hidden={selectedHideFields?.includes("buyeremail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercountryname" header="Buyercountryname" body={pTemplate24} filter={selectedFilterFields.includes("buyercountryname")} hidden={selectedHideFields?.includes("buyercountryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerstatename" header="Buyerstatename" body={pTemplate25} filter={selectedFilterFields.includes("buyerstatename")} hidden={selectedHideFields?.includes("buyerstatename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercityname" header="Buyercityname" body={pTemplate26} filter={selectedFilterFields.includes("buyercityname")} hidden={selectedHideFields?.includes("buyercityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerpostalzone" header="Buyerpostalzone" body={p_dateTemplate27} filter={selectedFilterFields.includes("buyerpostalzone")} hidden={selectedHideFields?.includes("buyerpostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstbuyercontactnumber" header="Thefirstbuyercontactnumber" body={pTemplate28} filter={selectedFilterFields.includes("thefirstbuyercontactnumber")} hidden={selectedHideFields?.includes("thefirstbuyercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercontactnumber" header="Buyercontactnumber" body={p_numberTemplate29} filter={selectedFilterFields.includes("buyercontactnumber")} hidden={selectedHideFields?.includes("buyercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicecurrency" header="Invoicecurrency" body={pTemplate30} filter={selectedFilterFields.includes("invoicecurrency")} hidden={selectedHideFields?.includes("invoicecurrency")}  sortable style={{ minWidth: "8rem" }} />
<Column field="currencyexchangerate" header="Currencyexchangerate" body={p_dateTemplate31} filter={selectedFilterFields.includes("currencyexchangerate")} hidden={selectedHideFields?.includes("currencyexchangerate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="frequencyofbilling" header="Frequencyofbilling" body={pTemplate32} filter={selectedFilterFields.includes("frequencyofbilling")} hidden={selectedHideFields?.includes("frequencyofbilling")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingperiodstartdate" header="Billingperiodstartdate" body={pTemplate33} filter={selectedFilterFields.includes("billingperiodstartdate")} hidden={selectedHideFields?.includes("billingperiodstartdate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingperiodenddate" header="Billingperiodenddate" body={pTemplate34} filter={selectedFilterFields.includes("billingperiodenddate")} hidden={selectedHideFields?.includes("billingperiodenddate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentmode" header="Paymentmode" body={pTemplate35} filter={selectedFilterFields.includes("paymentmode")} hidden={selectedHideFields?.includes("paymentmode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierbankaccountnumber" header="Supplierbankaccountnumber" body={p_numberTemplate36} filter={selectedFilterFields.includes("supplierbankaccountnumber")} hidden={selectedHideFields?.includes("supplierbankaccountnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentterms" header="Paymentterms" body={pTemplate37} filter={selectedFilterFields.includes("paymentterms")} hidden={selectedHideFields?.includes("paymentterms")}  sortable style={{ minWidth: "8rem" }} />
<Column field="prepaymentamount" header="Prepaymentamount" body={p_numberTemplate38} filter={selectedFilterFields.includes("prepaymentamount")} hidden={selectedHideFields?.includes("prepaymentamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="prepaymentdate" header="Prepaymentdate" body={pTemplate39} filter={selectedFilterFields.includes("prepaymentdate")} hidden={selectedHideFields?.includes("prepaymentdate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="prepaymentreferencenumber" header="Prepaymentreferencenumber" body={pTemplate40} filter={selectedFilterFields.includes("prepaymentreferencenumber")} hidden={selectedHideFields?.includes("prepaymentreferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientname" header="Shippingrecipientname" body={pTemplate41} filter={selectedFilterFields.includes("shippingrecipientname")} hidden={selectedHideFields?.includes("shippingrecipientname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientcountryname" header="Shippingrecipientcountryname" body={pTemplate42} filter={selectedFilterFields.includes("shippingrecipientcountryname")} hidden={selectedHideFields?.includes("shippingrecipientcountryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientstatename" header="Shippingrecipientstatename" body={pTemplate43} filter={selectedFilterFields.includes("shippingrecipientstatename")} hidden={selectedHideFields?.includes("shippingrecipientstatename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientcityname" header="Shippingrecipientcityname" body={pTemplate44} filter={selectedFilterFields.includes("shippingrecipientcityname")} hidden={selectedHideFields?.includes("shippingrecipientcityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientpostalzone" header="Shippingrecipientpostalzone" body={p_dateTemplate45} filter={selectedFilterFields.includes("shippingrecipientpostalzone")} hidden={selectedHideFields?.includes("shippingrecipientpostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipienttin" header="Shippingrecipienttin" body={pTemplate46} filter={selectedFilterFields.includes("shippingrecipienttin")} hidden={selectedHideFields?.includes("shippingrecipienttin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientidentifiertype" header="Shippingrecipientidentifiertype" body={pTemplate47} filter={selectedFilterFields.includes("shippingrecipientidentifiertype")} hidden={selectedHideFields?.includes("shippingrecipientidentifiertype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientbusinessregistrationnumber" header="Shippingrecipientbusinessregistrationnumber" body={pTemplate48} filter={selectedFilterFields.includes("shippingrecipientbusinessregistrationnumber")} hidden={selectedHideFields?.includes("shippingrecipientbusinessregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billreferencenumber" header="Billreferencenumber" body={pTemplate49} filter={selectedFilterFields.includes("billreferencenumber")} hidden={selectedHideFields?.includes("billreferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="referencenumberofcustomsformno1" header="Referencenumberofcustomsformno1" body={pTemplate50} filter={selectedFilterFields.includes("referencenumberofcustomsformno1")} hidden={selectedHideFields?.includes("referencenumberofcustomsformno1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="incoterms" header="Incoterms" body={pTemplate51} filter={selectedFilterFields.includes("incoterms")} hidden={selectedHideFields?.includes("incoterms")}  sortable style={{ minWidth: "8rem" }} />
<Column field="freetradeagreementinformation" header="Freetradeagreementinformation" body={pTemplate52} filter={selectedFilterFields.includes("freetradeagreementinformation")} hidden={selectedHideFields?.includes("freetradeagreementinformation")}  sortable style={{ minWidth: "8rem" }} />
<Column field="authorisationnumberforcertifiedexporter" header="Authorisationnumberforcertifiedexporter" body={pTemplate53} filter={selectedFilterFields.includes("authorisationnumberforcertifiedexporter")} hidden={selectedHideFields?.includes("authorisationnumberforcertifiedexporter")}  sortable style={{ minWidth: "8rem" }} />
<Column field="referencenumberofcustomsformno2" header="Referencenumberofcustomsformno2" body={pTemplate54} filter={selectedFilterFields.includes("referencenumberofcustomsformno2")} hidden={selectedHideFields?.includes("referencenumberofcustomsformno2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicelinenumber" header="Invoicelinenumber" body={p_dateTemplate55} filter={selectedFilterFields.includes("invoicelinenumber")} hidden={selectedHideFields?.includes("invoicelinenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicelineclassification" header="Invoicelineclassification" body={pTemplate56} filter={selectedFilterFields.includes("invoicelineclassification")} hidden={selectedHideFields?.includes("invoicelineclassification")}  sortable style={{ minWidth: "8rem" }} />
<Column field="productname" header="Productname" body={pTemplate57} filter={selectedFilterFields.includes("productname")} hidden={selectedHideFields?.includes("productname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="quantity" header="Quantity" body={p_dateTemplate58} filter={selectedFilterFields.includes("quantity")} hidden={selectedHideFields?.includes("quantity")}  sortable style={{ minWidth: "8rem" }} />
<Column field="unitprice" header="Unitprice" body={p_dateTemplate59} filter={selectedFilterFields.includes("unitprice")} hidden={selectedHideFields?.includes("unitprice")}  sortable style={{ minWidth: "8rem" }} />
<Column field="measurement" header="Measurement" body={pTemplate60} filter={selectedFilterFields.includes("measurement")} hidden={selectedHideFields?.includes("measurement")}  sortable style={{ minWidth: "8rem" }} />
<Column field="subtotal" header="Subtotal" body={p_dateTemplate61} filter={selectedFilterFields.includes("subtotal")} hidden={selectedHideFields?.includes("subtotal")}  sortable style={{ minWidth: "8rem" }} />
<Column field="countryoforigin" header="Countryoforigin" body={pTemplate62} filter={selectedFilterFields.includes("countryoforigin")} hidden={selectedHideFields?.includes("countryoforigin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalexcludingtax" header="Totalexcludingtax" body={p_dateTemplate63} filter={selectedFilterFields.includes("totalexcludingtax")} hidden={selectedHideFields?.includes("totalexcludingtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxtype" header="Taxtype" body={pTemplate64} filter={selectedFilterFields.includes("taxtype")} hidden={selectedHideFields?.includes("taxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxrate" header="Taxrate" body={p_dateTemplate65} filter={selectedFilterFields.includes("taxrate")} hidden={selectedHideFields?.includes("taxrate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxamount" header="Taxamount" body={p_dateTemplate66} filter={selectedFilterFields.includes("taxamount")} hidden={selectedHideFields?.includes("taxamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxexemptiondetails" header="Taxexemptiondetails" body={pTemplate67} filter={selectedFilterFields.includes("taxexemptiondetails")} hidden={selectedHideFields?.includes("taxexemptiondetails")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxexemptionamount" header="Taxexemptionamount" body={p_dateTemplate68} filter={selectedFilterFields.includes("taxexemptionamount")} hidden={selectedHideFields?.includes("taxexemptionamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountrate" header="Discountrate" body={p_dateTemplate69} filter={selectedFilterFields.includes("discountrate")} hidden={selectedHideFields?.includes("discountrate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountamount" header="Discountamount" body={p_dateTemplate70} filter={selectedFilterFields.includes("discountamount")} hidden={selectedHideFields?.includes("discountamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountdescription" header="Discountdescription" body={pTemplate71} filter={selectedFilterFields.includes("discountdescription")} hidden={selectedHideFields?.includes("discountdescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="feeorchargerate" header="Feeorchargerate" body={p_dateTemplate72} filter={selectedFilterFields.includes("feeorchargerate")} hidden={selectedHideFields?.includes("feeorchargerate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="feeorchargeamount" header="Feeorchargeamount" body={p_dateTemplate73} filter={selectedFilterFields.includes("feeorchargeamount")} hidden={selectedHideFields?.includes("feeorchargeamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaltaxableamountpertaxtype" header="Totaltaxableamountpertaxtype" body={p_dateTemplate74} filter={selectedFilterFields.includes("totaltaxableamountpertaxtype")} hidden={selectedHideFields?.includes("totaltaxableamountpertaxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaltaxamountpertaxtype" header="Totaltaxamountpertaxtype" body={p_dateTemplate75} filter={selectedFilterFields.includes("totaltaxamountpertaxtype")} hidden={selectedHideFields?.includes("totaltaxamountpertaxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailsoftaxexemption" header="Detailsoftaxexemption" body={pTemplate76} filter={selectedFilterFields.includes("detailsoftaxexemption")} hidden={selectedHideFields?.includes("detailsoftaxexemption")}  sortable style={{ minWidth: "8rem" }} />
<Column field="amountexemptedfromtax" header="Amountexemptedfromtax" body={p_dateTemplate77} filter={selectedFilterFields.includes("amountexemptedfromtax")} hidden={selectedHideFields?.includes("amountexemptedfromtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionaldiscountamount" header="Additionaldiscountamount" body={p_dateTemplate78} filter={selectedFilterFields.includes("additionaldiscountamount")} hidden={selectedHideFields?.includes("additionaldiscountamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionaldiscountdescription" header="Additionaldiscountdescription" body={p_dateTemplate79} filter={selectedFilterFields.includes("additionaldiscountdescription")} hidden={selectedHideFields?.includes("additionaldiscountdescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionalfeeamount" header="Additionalfeeamount" body={p_dateTemplate80} filter={selectedFilterFields.includes("additionalfeeamount")} hidden={selectedHideFields?.includes("additionalfeeamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionalfeedescription" header="Additionalfeedescription" body={p_dateTemplate81} filter={selectedFilterFields.includes("additionalfeedescription")} hidden={selectedHideFields?.includes("additionalfeedescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaldiscountvalue" header="Totaldiscountvalue" body={p_dateTemplate82} filter={selectedFilterFields.includes("totaldiscountvalue")} hidden={selectedHideFields?.includes("totaldiscountvalue")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalfeeorchargeamount" header="Totalfeeorchargeamount" body={p_dateTemplate83} filter={selectedFilterFields.includes("totalfeeorchargeamount")} hidden={selectedHideFields?.includes("totalfeeorchargeamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaltaxamount" header="Totaltaxamount" body={p_dateTemplate84} filter={selectedFilterFields.includes("totaltaxamount")} hidden={selectedHideFields?.includes("totaltaxamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalnetamount" header="Totalnetamount" body={p_dateTemplate85} filter={selectedFilterFields.includes("totalnetamount")} hidden={selectedHideFields?.includes("totalnetamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalincludingtax" header="Totalincludingtax" body={p_dateTemplate86} filter={selectedFilterFields.includes("totalincludingtax")} hidden={selectedHideFields?.includes("totalincludingtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="roundingamount" header="Roundingamount" body={p_dateTemplate87} filter={selectedFilterFields.includes("roundingamount")} hidden={selectedHideFields?.includes("roundingamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalpayableamount" header="Totalpayableamount" body={p_dateTemplate88} filter={selectedFilterFields.includes("totalpayableamount")} hidden={selectedHideFields?.includes("totalpayableamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicenumber" header="Invoicenumber" body={pTemplate89} filter={selectedFilterFields.includes("invoicenumber")} hidden={selectedHideFields?.includes("invoicenumber")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload Invoice Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService user={user} serviceName="~cb-service-name~"/>
      </Dialog>

      <Dialog header="Search Invoice" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default InvoiceDataTable;