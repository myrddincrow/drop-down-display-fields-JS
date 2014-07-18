// JScript source code

function title(name, flsaCode, eligible, company, department, individual, developmental) {
    this.name = name;
    this.flsaCode = flsaCode;   
    this.eligible = eligible;
    this.company = company;
    this.department = department;
    this.individual = individual;
    this.developmental = developmental;
}

var employnonex = new title('7% - Employee', 'Non-exempt', '7%', '30%', '30%', '30%', '10%');
var employex = new title('7% - Employee', 'Exempt', '7%', '30%', '30%', '30%', '10%');
var managerwo = new title('10% - Manager w/out direct reports', 'Exempt', '10%', '40%', '30%', '20%', '10%');
var managerw = new title('20% - Manager w/ direct reports', 'Exempt', '20%', '40%', '30%', '20%', '10%');
var director = new title('35% - Director', 'Exempt', '35%', '50%', '30%', '15%', '5%');
var vp = new title('50% - VP & Up', 'Exempt', '50%', '50%', '50%', '0%', '0%');
var pres = new title('60% President', 'Exempt', '60%', '50%', '50%', '0%', '0%');
var notselected = new title('N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A');

var bonusCodex = [employnonex, employex, managerwo, managerw, director, vp, pres, notselected];

function select() {

        var bonusIndex = document.getElementById("select").value;

        document.getElementById("name").setAttribute('value', bonusCodex[bonusIndex].name);
        document.getElementById("flsa").setAttribute('value', bonusCodex[bonusIndex].flsaCode);
        document.getElementById("eligible").setAttribute('value', bonusCodex[bonusIndex].eligible);
        document.getElementById("company").setAttribute('value', bonusCodex[bonusIndex].company);
        document.getElementById("department").setAttribute('value', bonusCodex[bonusIndex].department);
        document.getElementById("individual").setAttribute('value', bonusCodex[bonusIndex].individual);
        document.getElementById("developmental").setAttribute('value', bonusCodex[bonusIndex].developmental);
    }
