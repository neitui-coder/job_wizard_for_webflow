
let cookie_ms_token = null;
cookie_ms_token = window.$memberstackDom.getMemberCookie();
var firstNameInput = document.getElementById('First-Name');
var lastNameInput = document.getElementById('Last-Name');
var phoneNumberInput = document.getElementById('PhoneNumber-Input');
var emailInput = document.getElementById('Email-Input');
var phoneNumberInput1 = document.getElementById('PhoneNumber-Input1');
var phoneNumberInput2 = document.getElementById('PhoneNumber-Input2');
var dateInput = document.getElementById('Birth-Date');
var selectMonthSelect = document.getElementById('Birth-Month');
var yearInput = document.getElementById('Birth-Year');
var locationInput = document.getElementById('Location-Input');
var identificationInput = document.getElementById('self-identification');
var raceSelect = document.getElementById('Race');
var genderSelect = document.getElementById('Gender');
var ReligionSelect = document.getElementById('Religion');
var True1Selected = document.getElementById('True');
var False1Selected = document.getElementById('False');
var True2Selected = document.getElementById('True-2');
var False2Selected = document.getElementById('False-2');
var Education1 = document.getElementById('Education1');
var Education2 = document.getElementById('Education2');
var SchoolName0Input = document.getElementById('SchoolName0-Input');
var SchoolName1Input = document.getElementById('SchoolName1-Input');
var SchoolName2Input = document.getElementById('SchoolName2-Input');
var Major0Input = document.getElementById('Major0-Input');
var Major1Input = document.getElementById('Major1-Input');
var Major2Input = document.getElementById('Major2-Input');
var DegreeType0Input = document.getElementById('DegreeType0-Input');
var DegreeType1Input = document.getElementById('DegreeType1-Input');
var DegreeType2Input = document.getElementById('DegreeType2-Input');
var StartDate0Input0 = document.getElementById('StartDate0-Input0');
var StartDate1Input0 = document.getElementById('StartDate1-Input0');
var StartDate2Input0 = document.getElementById('StartDate2-Input0');
var StartDate0Input1 = document.getElementById('StartDate0Input1');
var StartDate1Input1 = document.getElementById('StartDate1Input1');
var StartDate2Input1 = document.getElementById('StartDate2Input1');
var EndDate0Input0 = document.getElementById('EndDate0-Input0');
var EndDate1Input0 = document.getElementById('EndDate1-Input0');
var EndDate2Input0 = document.getElementById('EndDate2-Input0');
var EndDate0Input1 = document.getElementById('EndDate0-Input1');
var EndDate1Input1 = document.getElementById('EndDate1-Input1');
var EndDate2Input1 = document.getElementById('EndDate2-Input1');
var AddEducation = document.getElementById('AddEducation');
var saveTab1Button = document.getElementById('Save-Tab1');
var saveTab2Button = document.getElementById('Save-Tab2');
var saveTab3Button = document.getElementById('Save-Tab3');
var saveTab4Button = document.getElementById('Save-Tab4');
var Tab1 = document.getElementById('Tab1');
var Tab2 = document.getElementById('Tab2');
var Tab3 = document.getElementById('Tab3');
var Tab4 = document.getElementById('Tab4');
var Tab5 = document.getElementById('Tab5');
var Tab6 = document.getElementById('Tab6');
var MenuTab1 = document.getElementById('Menu-Tab1');
var MenuTab2 = document.getElementById('Menu-Tab2');
var MenuTab3 = document.getElementById('Menu-Tab3');
var MenuTab4 = document.getElementById('Menu-Tab4');
var MenuTab5 = document.getElementById('Menu-Tab5');
var MenuTab6 = document.getElementById('Menu-Tab6');
var backTab1 = document.getElementById('BackButton-Tab1');
var backTab2 = document.getElementById('BackButton-Tab2');
var backTab3 = document.getElementById('BackButton-Tab3');
var backTab4 = document.getElementById('BackButton-Tab4');
var backTab5 = document.getElementById('BackButton-Tab5');
var backTab6 = document.getElementById('BackButton-Tab6');
var skipTab1 = document.getElementById('Skip-Tab1');
var skipTab4 = document.getElementById('Skip-Tab4');
var doItLater = document.getElementById('DoItLater');

MenuTab2.style.pointerEvents = "none";
MenuTab3.style.pointerEvents = "none";
MenuTab4.style.pointerEvents = "none";
MenuTab5.style.pointerEvents = "none";
MenuTab6.style.pointerEvents = "none";
Education1.style.display = 'none'
Education2.style.display = 'none'

var startButton = document.getElementById('Start-Add-Info');
var step2Div = document.getElementById('step2');
var AddInfoDiv = document.getElementById('Add-Info');
AddInfoDiv.style.display = 'none';

if (startButton) {
  startButton.addEventListener('click', function () {
    step2Div.style.display = 'none';
    AddInfoDiv.style.display = 'flex'
  })
}
if (backTab4) {
  backTab4.addEventListener('click', function () {
    MenuTab1.style.pointerEvents = "auto";
    MenuTab4.style.pointerEvents = "none";
    MenuTab1.click();
  })
}

if (skipTab1) {
  skipTab1.addEventListener('click', function () {
    MenuTab2.style.pointerEvents = "auto";
    MenuTab1.style.pointerEvents = "none";
    MenuTab2.click();
  })
}
if (skipTab4) {
  skipTab4.addEventListener('click', function () {
    window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete"
  })
}
if (doItLater) {
  doItLater.addEventListener('click', function () {
    window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete"
  })
}
if (backTab1) {
  backTab1.addEventListener('click', function () {
    step2Div.style.display = 'flex';
    AddInfoDiv.style.display = 'none'
  })
}
if (saveTab1Button) {
  saveTab1Button.addEventListener('click', function () {
    const Saving = document.getElementById('Saving-1');
    const ToBeSaved = document.getElementById('ToBeSaved-1');
    Saving.style.display = 'flex';
    ToBeSaved.style.display = 'none';
    var firstNameValue = firstNameInput.value;
    var lastNameValue = lastNameInput.value;
    var phoneNumberValue1 = phoneNumberInput1.value;
    var phoneNumberValue2 = phoneNumberInput2.value;
    var phoneNumber = phoneNumberValue1 + phoneNumberValue2;
    var emailValue = emailInput.value;
    var dateValue = dateInput.value;
    var selectMonthValue = selectMonthSelect.options[selectMonthSelect.selectedIndex].value;
    var yearValue = yearInput.value;
    var locationValue = locationInput.value;
    var birthday = yearValue + " " + selectMonthValue + " " + dateValue;

    var url = `https://api.jobwizard.ai/api/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
    var data = {
      "basic_info": {
        "first_name": firstNameValue,
        "last_name": lastNameValue,
        "email": emailValue,
        "phone_number": phoneNumber,
        "location": locationValue,
        "birthday": birthday
      }
    };
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    console.log(cookie_ms_token, '====cookie_ms_token====');

    if (!cookie_ms_token) {
      return;
    }


    fetch(url, options)
      .then(response => {
        if (response.status == 200) {
          console.log(response, '====response====');
          let Saving = document.getElementById('Saving-1');
          let ToBeSaved = document.getElementById('ToBeSaved-1');
          Saving.style.display = 'none';
          ToBeSaved.style.display = 'flex';
          MenuTab2.click();
          MenuTab1.style.pointerEvents = "none";
          MenuTab2.style.pointerEvents = "auto";
          //window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete"
        }
        return response.json();
      }).catch(error => {
      });
  });
}

if (saveTab4Button) {
  saveTab4Button.addEventListener('click', function () {
    let Saving = document.getElementById('Saving-4');
    let ToBeSaved = document.getElementById('ToBeSaved-4');
    Saving.style.display = 'flex';
    ToBeSaved.style.display = 'none';
    var identificationValue = identificationInput.checked;
    var raceOption = raceSelect.options[raceSelect.selectedIndex];
    var genderOption = genderSelect.options[genderSelect.selectedIndex]
    var ReligionOption = ReligionSelect.options[ReligionSelect.selectedIndex]
    var url = `https://api.jobwizard.ai/api/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
    var data = {
      "dei_info": {
        "agree_to_provide_dei": identificationValue,
        "race": raceOption.value,
        "gender": genderOption.value,
        "religion": ReligionOption.value,
        "disability": True1Selected.checked,
        "veteran": True2Selected.checked
      }
    };
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    console.log(cookie_ms_token, '=====cookie_ms_token===');
    console.log(options, '=====options===');

    if (!cookie_ms_token) {
      return;
    }


    fetch(url, options)
      .then(response => {
        if (response.status == 200) {
          console.log(response, '====response');
          let Saving = document.getElementById('Saving-4');
          let ToBeSaved = document.getElementById('ToBeSaved-4');
          Saving.style.display = 'none';
          ToBeSaved.style.display = 'flex';
          window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete"
        }
        return response.json();
      }).catch(error => {
      });
  });
}
