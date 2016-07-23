function company() {
    //private variable declration
    var deals = {
        name: "GMR"
    };

    this.balanceSheet = {
        profit: 12000,
        loss: 3000
    };
    this.branches = ["Hitech city"];
}
company.companyName = "NBITS";

var kSoft = new company();
kSoft.balanceSheet.equityFunds = 10000;
kSoft.newBranches = "Ameerpet";

var jSoft = new company();
jSoft.balanceSheet.debtFunds = 20000;
jSoft.newBranches = "Gachibowli";

company.prototype.savingFund = 1000000000000;

console.log(jSoft.savingFund);
console.log(kSoft.savingFund);
console.log(company.companyName);
