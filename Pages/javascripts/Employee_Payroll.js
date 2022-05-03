class EmployeePayrollData {
    //getter and setter method
    get id() {
        return this.id;
    }
    set id(id) {
        this.id = id;
    }

    get name() { 
        return this._name; 
    } 
    set name (name) {
        const name = document.querySelector('#name');
				const textError = document.querySelector('.text-error');
				text.addEventListener('input', function(){
					let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
					if (nameRegex.test(text.value))
					textError.textContent = " ";
					else textError.textContent = "Incorrect Name";
				});
    }
    get profilePic() { 
        return this._profilePic; 
    } 
    set profilePic (profilePic) { 
        this._profilePic = profilePic;
    }

    get gender() { 
        return this._gender; 
    } 
    set gender(gender) { 
        this._gender = gender;
    }

    get department () { 
        return this._department; 
    } 
    set department (department) { 
        this. department = department;
    }
    get salary() { 
        return this._salary; 
    }
    set salary(salary) { 
        this._salary = salary;
    }
    get note() { 
        return this._note; 
    } set note(note) { 
        this._note = note; 
    }
    get startDate() { 
        return this._startDate; 
    } 
    set startDate(startDate) { 
        this._startDate= startDate; 
    }

    //Method
    toString(){
        const options = { year : 'numberic', month : 'long', day : 'numeric'};
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US",options);
        return ("id = " +this.id + ", name = " + this.name + ",gender= " +this.gender + ", profilePic= "+this._profilePic +", Department= " + this.department + ", salary= " + this.salary + ", startDate= " + this.startDate + ", notes= "+ this.note); 
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function () {
      if (name.value.length == 0) {
        textError.textContent = " ";
      } else {
        try {
          new EmployeePayrollData().name = name.value;
          textError.textContent = " ";
        } catch (e) {
          textError.textContent = e;
        }
      }
    });
});

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});