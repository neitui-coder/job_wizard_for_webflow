
let cookie_ms_token = null;
var userInfo = null;
cookie_ms_token = window.$memberstackDom.getMemberCookie();

// all
var AddInfoDiv = document.getElementById('Add-Info');
var step2Div = document.getElementById('HintCard');
AddInfoDiv.style.display = 'none';
var saveTab1Button = document.getElementById('Save-Tab1');
var saveTab2Button = document.getElementById('Save-Tab2');
var saveTab3Button = document.getElementById('Save-Tab3');
var saveTab4Button = document.getElementById('Save-Tab4');
var saveTab5Button = document.getElementById('Save-Tab5');
var saveTab6Button = document.getElementById('Save-Tab6');
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
var skipTab2 = document.getElementById('Skip-Tab2');
var skipTab3 = document.getElementById('Skip-Tab3');
var skipTab4 = document.getElementById('Skip-Tab4');
var skipTab5 = document.getElementById('Skip-Tab5');
var skipTab6 = document.getElementById('Skip-Tab6');
var doItLater = document.getElementById('DoItLater');

// tab1
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

// tab2
var Education1 = document.getElementById('Education1');
var Education2 = document.getElementById('Education2');
Education1.style.display = 'none';
Education2.style.display = 'none';
var MaxAlertEducation = document.getElementById('MaxAlert-Education');
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
var StartDate0Input1 = document.getElementById('StartDate0-Input1');
var StartDate1Input1 = document.getElementById('StartDate1-Input1');
var StartDate2Input1 = document.getElementById('StartDate2-Input1');
var EndDate0Input0 = document.getElementById('EndDate0-Input0');
var EndDate1Input0 = document.getElementById('EndDate1-Input0');
var EndDate2Input0 = document.getElementById('EndDate2-Input0');
var EndDate0Input1 = document.getElementById('EndDate0-Input1');
var EndDate1Input1 = document.getElementById('EndDate1-Input1');
var EndDate2Input1 = document.getElementById('EndDate2-Input1');
var AddEducation = document.getElementById('AddEducation');
var DeleteEducation1 = document.getElementById('DeleteEducation1');
var DeleteEducation2 = document.getElementById('DeleteEducation2');


// tab3
var WorkExperience1 = document.getElementById('w-node-_4eed910d-1e1e-56af-1c38-33abb164bc53-0f45508c');
var WorkExperience2 = document.getElementById('w-node-_7675749a-2c62-424f-641e-ad12fb4f9990-0f45508c');
WorkExperience1.style.display = 'none';
WorkExperience2.style.display = 'none';
var MaxAlertWork = document.getElementById('MaxAlert-Work');
var WorkEndDate0stillwork = document.getElementById('WorkEndDate0-stillwork');
var CompanyName0 = document.getElementById('CompanyName0-Input');
var CompanyName1 = document.getElementById('CompanyName1-Input');
var CompanyName2 = document.getElementById('CompanyName2-Input');
var WorkLocation0 = document.getElementById('WorkLocation0-Input');
var WorkLocation1 = document.getElementById('WorkLocation1-Input');
var WorkLocation2 = document.getElementById('WorkLocation2-Input');
var Position0 = document.getElementById('Position0-Input');
var Position1 = document.getElementById('Position1-Input');
var Position2 = document.getElementById('Position2-Input');
var WorkType0 = document.getElementById('WorkType0-Input');
var WorkType1 = document.getElementById('WorkType1-Input');
var WorkType2 = document.getElementById('WorkType2-Input');
var WorkStartDate0Month = document.getElementById('WorkStartDate0-Month');
var WorkStartDate0Year = document.getElementById('WorkStartDate0-Year');
var WorkEndDate0Month = document.getElementById('WorkEndDate0-Month');
var WorkEndDate0Year = document.getElementById('WorkEndDate0-Year');

var WorkStartDate1Month = document.getElementById('WorkStartDate1-Month');
var WorkStartDate1Year = document.getElementById('WorkStartDate1-Year');
var WorkEndDate1Month = document.getElementById('WorkEndDate1-Month');
var WorkEndDate1Year = document.getElementById('WorkEndDate1-Year');

var WorkStartDate2Month = document.getElementById('WorkStartDate2-Month');
var WorkStartDate2Year = document.getElementById('WorkStartDate2-Year');
var WorkEndDate2Month = document.getElementById('WorkEndDate2-Month');
var WorkEndDate2Year = document.getElementById('WorkEndDate2-Year');

var WorkDescription0textarea = document.getElementById('WorkDescription0-textarea');
var WorkDescription1textarea = document.getElementById('WorkDescription1-textarea');
var WorkDescription2textarea = document.getElementById('WorkDescription2-textarea');

var AddWork = document.getElementById('AddWork');
var DeleteWork1 = document.getElementById('DeleteWork1');
var DeleteWork2 = document.getElementById('DeleteWork2');


//tab4
var identificationInput = document.getElementById('self-identification');
var raceSelect = document.getElementById('Race');
var genderSelect = document.getElementById('Gender');
var ReligionSelect = document.getElementById('Religion');
var True1Selected = document.getElementById('True');
var False1Selected = document.getElementById('False');
var True2Selected = document.getElementById('True-2');
var False2Selected = document.getElementById('False-2');


//tab5
var Citizenship = document.getElementById('Citizenship');
var USVisaTyoeSelect = document.getElementById('USVisaTyoe');
var True3Selected = document.getElementById('True-3');
var False3Selected = document.getElementById('False-3');
var True4Selected = document.getElementById('True-4');
var False4Selected = document.getElementById('False-4');
var True5Selected = document.getElementById('True-5');
var False5Selected = document.getElementById('False-5');
var True6Selected = document.getElementById('True-6');
var False6Selected = document.getElementById('False-6');


// tab6
var languag1 = document.getElementById('languag1');
var language2 = document.getElementById('language2');
languag1.style.display = 'none';
language2.style.display = 'none';
var Award1 = document.getElementById('Award1');
var Award2 = document.getElementById('Award2');
Award1.style.display = 'none';
Award2.style.display = 'none';
var MaxAlertLanguage = document.getElementById('MaxAlert-Language');
var MaxAlertAward = document.getElementById('MaxAlert-Award');
var LinkedinURL = document.getElementById('Linkedin-URL');
var GitHubURL = document.getElementById('GitHub-URL');
var PortfolioURL = document.getElementById('Portfolio-URL');
var PersonalWebsiteURL = document.getElementById('PersonalWebsite-URL');
var language0name = document.getElementById('language0-name');
var language1name = document.getElementById('language1-name');
var language2name = document.getElementById('language2-name');
var language0level = document.getElementById('language0-level');
var language1level = document.getElementById('language1-level');
var language2level = document.getElementById('language2-level');
var SelfDescriptionTextArea = document.getElementById('SelfDescription-TextArea');

var Award0year = document.getElementById('Award0-year');
var Award1year = document.getElementById('Award1-year');
var Award2year = document.getElementById('Award2-year');
var Award0name = document.getElementById('Award0-name');
var Award1name = document.getElementById('Award1-name');
var Award2name = document.getElementById('Award2-level');

var AddLanguage = document.getElementById('AddLanguage');
var AddAward = document.getElementById('AddAward');
var DeleteLanguage1 = document.getElementById('DeleteLanguage1');
var DeleteLanguage2 = document.getElementById('DeleteLanguage2');
var DeleteAward1 = document.getElementById('DeleteAward1');
var DeleteAward2 = document.getElementById('DeleteAward2');


MenuTab2.style.pointerEvents = "none";
MenuTab3.style.pointerEvents = "none";
MenuTab4.style.pointerEvents = "none";
MenuTab5.style.pointerEvents = "none";
MenuTab6.style.pointerEvents = "none";

var startButton = document.getElementById('Start-Add-Info');

if (startButton) {
  startButton.addEventListener('click', function () {
    if (!cookie_ms_token) {
      window.location.href = "https://www.jobwizard.ai/login"
      return;
    }
    step2Div.style.display = 'none';
    AddInfoDiv.style.display = 'flex'
  })
}

if (skipTab1) {
  skipTab1.addEventListener('click', function () {
    MenuTab2.style.pointerEvents = "auto";
    MenuTab1.style.pointerEvents = "none";
    MenuTab2.click();
  })
}
if (skipTab2) {
  skipTab2.addEventListener('click', function () {
    MenuTab3.style.pointerEvents = "auto";
    MenuTab2.style.pointerEvents = "none";
    MenuTab3.click();
  })
}

if (skipTab3) {
  skipTab3.addEventListener('click', function () {
    MenuTab4.style.pointerEvents = "auto";
    MenuTab3.style.pointerEvents = "none";
    MenuTab4.click();
  })
}

if (skipTab4) {
  skipTab4.addEventListener('click', function () {
    MenuTab5.style.pointerEvents = "auto";
    MenuTab4.style.pointerEvents = "none";
    MenuTab5.click();
  })
}

if (skipTab5) {
  skipTab5.addEventListener('click', function () {
    MenuTab6.style.pointerEvents = "auto";
    MenuTab5.style.pointerEvents = "none";
    MenuTab6.click();
  })
}

if (skipTab6) {
  skipTab6.addEventListener('click', function () {
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
if (backTab2) {
  backTab2.addEventListener('click', function () {
    MenuTab1.style.pointerEvents = "auto";
    MenuTab2.style.pointerEvents = "none";
    MenuTab1.click();
  })
}

if (backTab3) {
  backTab3.addEventListener('click', function () {
    MenuTab2.style.pointerEvents = "auto";
    MenuTab3.style.pointerEvents = "none";
    MenuTab2.click();
  })
}

if (backTab4) {
  backTab4.addEventListener('click', function () {
    MenuTab3.style.pointerEvents = "auto";
    MenuTab4.style.pointerEvents = "none";
    MenuTab3.click();
  })
}

if (backTab5) {
  backTab5.addEventListener('click', function () {
    MenuTab4.style.pointerEvents = "auto";
    MenuTab5.style.pointerEvents = "none";
    MenuTab4.click();
  })
}

if (backTab6) {
  backTab6.addEventListener('click', function () {
    MenuTab5.style.pointerEvents = "auto";
    MenuTab6.style.pointerEvents = "none";
    MenuTab5.click();
  })
}

if (AddEducation) {
  AddEducation.addEventListener('click', function () {
    if (Education1.style.display == 'none') {
      Education1.style.display = 'block';
      return;
    }

    if (Education2.style.display == 'none') {
      Education2.style.display = 'block';
      return;
    }

    if (MaxAlertEducation.style.display == 'none') {
      MaxAlertEducation.style.display = 'block';
    }
  })
}

if (DeleteEducation1) {
  DeleteEducation1.addEventListener('click', function () {
    Education1.style.display = 'none';
    SchoolName1Input.value = '';
    Major1Input.value = '';
    DegreeType1Input.value = '';
    StartDate1Input0.value = '';
    StartDate1Input1.value = '';
    EndDate1Input0.value = '';
    EndDate1Input1.value = '';
  })
}


if (DeleteEducation2) {
  DeleteEducation2.addEventListener('click', function () {
    Education2.style.display = 'none';
    SchoolName2Input.value = '';
    Major2Input.value = '';
    DegreeType2Input.value = '';
    StartDate2Input0.value = '';
    StartDate2Input1.value = '';
    EndDate2Input0.value = '';
    EndDate2Input1.value = '';
  })
}

if (AddWork) {
  AddWork.addEventListener('click', function () {
    if (WorkExperience1.style.display === 'none') {
      WorkExperience1.style.display = 'block';
      return;
    }

    if (WorkExperience2.style.display === 'none') {
      WorkExperience2.style.display = 'block';
      return;
    }

    if (MaxAlertWork.style.display == 'none') {
      MaxAlertWork.style.display = 'block';
    }
  })
}


if (DeleteWork1) {
  DeleteWork1.addEventListener('click', function () {
    WorkExperience1.style.display = 'none';
    CompanyName1.value = '';
    WorkLocation1.value = '';
    Position1.value = '';
    WorkType1.value = '';
    WorkStartDate1Month.value = '';
    WorkStartDate1Year.value = '';
    WorkEndDate1Month.value = '';
    WorkEndDate1Year.value = '';
    WorkDescription1textarea.value = '';
  })
}

if (DeleteWork2) {
  DeleteWork2.addEventListener('click', function () {
    WorkExperience2.style.display = 'none';
    CompanyName2.value = '';
    WorkLocation2.value = '';
    Position2.value = '';
    WorkType2.value = '';
    WorkStartDate2Month.value = '';
    WorkStartDate2Year.value = '';
    WorkEndDate2Month.value = '';
    WorkEndDate2Year.value = '';
    WorkDescription2textarea.value = '';
  })
}

if (AddLanguage) {
  AddLanguage.addEventListener('click', function () {
    if (languag1.style.display == 'none') {
      languag1.style.display = 'flex';
      return;
    }

    if (language2.style.display == 'none') {
      language2.style.display = 'flex';
      return;
    }

    if (MaxAlertLanguage.style.display == 'none') {
      MaxAlertLanguage.style.display = 'block';
    }
  })
}


if (DeleteLanguage1) {
  DeleteLanguage1.addEventListener('click', function () {
    languag1.style.display = 'none';
    language1name.value = '';
    language1level.value = '';
  })
}

if (DeleteLanguage2) {
  DeleteLanguage2.addEventListener('click', function () {
    language2.style.display = 'none';
    language2name.value = '';
    language2level.value = '';
  })
}


if (AddAward) {
  AddAward.addEventListener('click', function () {
    if (Award1.style.display == 'none') {
      Award1.style.display = 'flex';
      return;
    }

    if (Award2.style.display == 'none') {
      Award2.style.display = 'flex';
      return;
    }

    if (MaxAlertAward.style.display == 'none') {
      MaxAlertAward.style.display = 'block';
    }
  })
}


if (DeleteAward1) {
  DeleteAward1.addEventListener('click', function () {
    Award1.style.display = 'none';
    Award1year.value = '';
    Award1name.value = '';
  })
}

if (DeleteAward2) {
  DeleteAward2.addEventListener('click', function () {
    Award2.style.display = 'none';
    Award2year.value = '';
    Award2name.value = '';
  })
}

if (WorkEndDate0stillwork) {
  WorkEndDate0stillwork.addEventListener('click', function () {
    if (WorkEndDate0stillwork.checked) {
      WorkEndDate0Month.disabled = true;
      WorkEndDate0Year.disabled = true;
      WorkEndDate0Month.value = '';
      WorkEndDate0Year.value = '';
    } else {
      WorkEndDate0Month.disabled = false;
      WorkEndDate0Year.disabled = false;
    }
  })
}


fetchData();


function dofillUserInfo(userInfo) {
  // tab1
  firstNameInput.value = userInfo.basic_info.first_name;
  lastNameInput.value = userInfo.basic_info.last_name;
  let phoneGroup = userInfo.basic_info.phone.split(" ")

  if (phoneGroup.length > 1) {
    phoneNumberInput1.value = phoneGroup[0];
    phoneNumberInput2.value = phoneGroup[1];
  } else {
    phoneNumberInput2.value = userInfo.basic_info.phone;
  }

  emailInput.value = userInfo.basic_info.email;
  const dateArr = userInfo.basic_info.birthday.split(" ");
  dateInput.value = dateArr[2];
  selectMonthSelect.value = dateArr[1];
  selectMonthSelect.style.color = "black";
  yearInput.value = dateArr[0];
  locationInput.value = userInfo.basic_info.location;


  //tab2
  SchoolName0Input.value = userInfo.school_infos[0].name;
  Major0Input.value = userInfo.school_infos[0].major;
  DegreeType0Input.value = userInfo.school_infos[0].degree;
  DegreeType0Input.style.color = "black";
  const StartDateInput0Arr = userInfo.school_infos[0].start_date.split("-");
  StartDate0Input0.value = StartDateInput0Arr[0];
  StartDate0Input1.value = StartDateInput0Arr[1];
  const EndDateInput0Arr = userInfo.school_infos[0].end_date.split("-");
  EndDate0Input0.value = EndDateInput0Arr[0];
  EndDate0Input1.value = EndDateInput0Arr[1];

  const isExistSchoolInfo1 = userInfo.school_infos[1]?.name ||
    userInfo.school_infos[1]?.major ||
    userInfo.school_infos[1]?.degree ||
    userInfo.school_infos[1]?.start_date ||
    userInfo.school_infos[1]?.end_date;

  if (isExistSchoolInfo1) {
    SchoolName1Input.value = userInfo.school_infos[1].name;
    Major1Input.value = userInfo.school_infos[1].major;
    DegreeType1Input.value = userInfo.school_infos[1].degree;
    DegreeType1Input.style.color = "black";
    const StartDateInput1Arr = userInfo.school_infos[1].start_date.split("-");
    StartDate1Input0.value = StartDateInput1Arr[0];
    StartDate1Input1.value = StartDateInput1Arr[1];
    const EndDateInput1Arr = userInfo.school_infos[1].end_date.split("-");
    EndDate1Input0.value = EndDateInput1Arr[0];
    EndDate1Input1.value = EndDateInput1Arr[1];
    Education1.style.display = 'block';
  }

  const isExistSchoolInfo2 = userInfo.school_infos[2]?.name ||
    userInfo.school_infos[2]?.major ||
    userInfo.school_infos[2]?.degree ||
    userInfo.school_infos[2]?.start_date ||
    userInfo.school_infos[2]?.end_date;
  if (isExistSchoolInfo2) {
    SchoolName2Input.value = userInfo.school_infos[2].name;
    Major2Input.value = userInfo.school_infos[2].major;
    DegreeType2Input.value = userInfo.school_infos[2].degree;
    DegreeType2Input.style.color = "black";
    const StartDateInput2Arr = userInfo.school_infos[2].start_date.split("-");
    StartDate2Input0.value = StartDateInput2Arr[0];
    StartDate2Input1.value = StartDateInput2Arr[1];
    const EndDateInput2Arr = userInfo.school_infos[2].end_date.split("-");
    EndDate2Input0.value = EndDateInput2Arr[0];
    EndDate2Input1.value = EndDateInput2Arr[1];
    Education2.style.display = 'block';
  }

  //tab3
  WorkEndDate0stillwork.checked = userInfo.job_infos[0].now_working;
  if (WorkEndDate0stillwork.checked) {
    WorkEndDate0Month.disabled = true;
    WorkEndDate0Year.disabled = true;
    let WorkEndDate0stillworkPrev = WorkEndDate0stillwork.previousElementSibling;
    WorkEndDate0stillworkPrev.style.backgroundColor = "#3898ec";
    WorkEndDate0stillworkPrev.style.backgroundImage =  "url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg)";
  } else {
    const EndDateInput0JobArr = userInfo.job_infos[0].end_date.split("-");
    WorkEndDate0Month.value = EndDateInput0JobArr[0];
    WorkEndDate0Year.value = EndDateInput0JobArr[1];
  }
  CompanyName0.value = userInfo.job_infos[0].company_name;
  WorkLocation0.value = userInfo.job_infos[0].location;
  Position0.value = userInfo.job_infos[0].position;
  WorkType0.value = userInfo.job_infos[0].work_type;
  WorkType0.style.color = "black";
  WorkDescription0textarea.value = userInfo.job_infos[0].description;
  const StartDateInput0JobArr = userInfo.job_infos[0].start_date.split("-");
  WorkStartDate0Month.value = StartDateInput0JobArr[0];
  WorkStartDate0Year.value = StartDateInput0JobArr[1];

  const isExistJobInfo1 = userInfo.job_infos[1]?.company_name ||
    userInfo.job_infos[1]?.location ||
    userInfo.job_infos[1]?.position ||
    userInfo.job_infos[1]?.work_type ||
    userInfo.job_infos[1]?.description ||
    userInfo.job_infos[1]?.start_date ||
    userInfo.job_infos[1]?.end_date;
  if (isExistJobInfo1) {
    CompanyName1.value = userInfo.job_infos[1].company_name;
    WorkLocation1.value = userInfo.job_infos[1].location;
    Position1.value = userInfo.job_infos[1].position;
    WorkType1.value = userInfo.job_infos[1].work_type;
    WorkType1.style.color = "black";
    WorkDescription1textarea.value = userInfo.job_infos[1].description;
    const StartDateInput1JobArr = userInfo.job_infos[1].start_date.split("-");
    WorkStartDate1Month.value = StartDateInput1JobArr[0];
    WorkStartDate1Year.value = StartDateInput1JobArr[1];
    const EndDateInput1JobArr = userInfo.job_infos[1].end_date.split("-");
    WorkEndDate1Month.value = EndDateInput1JobArr[0];
    WorkEndDate1Year.value = EndDateInput1JobArr[1];
    WorkExperience1.style.display = 'block';
  }


  const isExistJobInfo2 = userInfo.job_infos[2]?.company_name ||
    userInfo.job_infos[2]?.location ||
    userInfo.job_infos[2]?.position ||
    userInfo.job_infos[2]?.work_type ||
    userInfo.job_infos[2]?.description ||
    userInfo.job_infos[2]?.start_date ||
    userInfo.job_infos[2]?.end_date
  if (isExistJobInfo2) {
    CompanyName2.value = userInfo.job_infos[2].company_name;
    WorkLocation2.value = userInfo.job_infos[2].location;
    Position2.value = userInfo.job_infos[2].position;
    WorkType2.value = userInfo.job_infos[2].work_type;
    WorkType2.style.color = "black";
    WorkDescription2textarea.value = userInfo.job_infos[2].description;
    const StartDateInput2JobArr = userInfo.job_infos[0].start_date.split("-");
    WorkStartDate2Month.value = StartDateInput2JobArr[0];
    WorkStartDate2Year.value = StartDateInput2JobArr[1];
    const EndDateInput2JobArr = userInfo.job_infos[2].end_date.split("-");
    WorkEndDate2Month.value = EndDateInput2JobArr[0];
    WorkEndDate2Year.value = EndDateInput2JobArr[1];
    WorkExperience2.style.display = 'block';
  }
}

async function fetchData() {
  try {
    const response = await fetch(`https://api.jobwizard.ai/api/profile/get_profile?ms_token=${cookie_ms_token}`);
    if (response.ok) {
      const data = await response.json();
      // 在这里处理响应数据
      userInfo = data.data;
      // 执行其他步骤
      dofillUserInfo(userInfo);
      doSomethingElse();
    } else {
      throw new Error('请求失败');
    }
  } catch (error) {
    // 处理请求失败的情况
    console.error(error);
  }
}

function extractString(str) {
  if (str.charAt(0) === '+') {
    return str.substring(0, 3);
  } else {
    return str;
  }
}

function doSomethingElse() {
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
      var phoneNumber = phoneNumberValue1 + " " + phoneNumberValue2;
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

      if (!cookie_ms_token) {
        return;
      }


      fetch(url, options)
        .then(response => {
          if (response.status == 200) {
            let Saving = document.getElementById('Saving-1');
            let ToBeSaved = document.getElementById('ToBeSaved-1');
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab2.style.pointerEvents = "auto";
            MenuTab2.click();
            MenuTab1.style.pointerEvents = "none";
          }
          return response.json();
        }).catch(error => {
        });
    });
  }

  if (saveTab2Button) {
    saveTab2Button.addEventListener('click', function () {
      const Saving = document.getElementById('Saving-2');
      const ToBeSaved = document.getElementById('ToBeSaved-2');
      Saving.style.display = 'flex';
      ToBeSaved.style.display = 'none';
      var SchoolName0InputValue = SchoolName0Input.value;
      var SchoolName1InputValue = SchoolName1Input.value;
      var SchoolName2InputValue = SchoolName2Input.value;
      var Major0InputValue = Major0Input.value;
      var Major1InputtValue = Major1Input.value;
      var Major2InputValue = Major2Input.value;
      var StartDate0Input0Value = StartDate0Input0.value;
      var StartDate1Input0Value = StartDate1Input0.value;
      var StartDate2Input0Value = StartDate2Input0.value;
      var StartDate0Input1Value = StartDate0Input1.value;
      var StartDate1Input1Value = StartDate1Input1.value;
      var StartDate2Input1Value = StartDate2Input1.value;
      var EndDate0Input0Value = EndDate0Input0.value;
      var EndDate1Input0Value = EndDate1Input0.value;
      var EndDate2Input0Value = EndDate2Input0.value;
      var EndDate0Input1Value = EndDate0Input1.value;
      var EndDate1Input1Value = EndDate1Input1.value;
      var EndDate2Input1Value = EndDate2Input1.value;


      var DegreeType0InputValue = DegreeType0Input.options[DegreeType0Input.selectedIndex].value;
      var DegreeType1InputValue = DegreeType1Input.options[DegreeType1Input.selectedIndex].value;
      var DegreeType2InputValue = DegreeType2Input.options[DegreeType2Input.selectedIndex].value;
      var StartDate0Input = StartDate0Input0Value + '-' + StartDate0Input1Value;
      var StartDate1Input = StartDate1Input0Value + '-' + StartDate1Input1Value;
      var StartDate2Input = StartDate2Input0Value + '-' + StartDate2Input1Value;
      var EndDate0Input = EndDate0Input0Value + '-' + EndDate0Input1Value;
      var EndDate1Input = EndDate1Input0Value + '-' + EndDate1Input1Value;
      var EndDate2Input = EndDate2Input0Value + '-' + EndDate2Input1Value;


      var url = `https://api.jobwizard.ai/api/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var school_infos = [];
      var educationGroup0 = {
        "name": SchoolName0InputValue,
        "major": Major0InputValue,
        "degree": DegreeType0InputValue,
        "start_date": StartDate0Input,
        "end_date": EndDate0Input
      };
      var educationGroup1 = {
        "name": SchoolName1InputValue,
        "major": Major1InputtValue,
        "degree": DegreeType1InputValue,
        "start_date": StartDate1Input,
        "end_date": EndDate1Input
      };
      var educationGroup2 = {
        "name": SchoolName2InputValue,
        "major": Major2InputValue,
        "degree": DegreeType2InputValue,
        "start_date": StartDate2Input,
        "end_date": EndDate2Input
      };
      school_infos.push(educationGroup0);
      if (Education1.style.display === 'block') {
        school_infos.push(educationGroup1);
      }

      if (Education2.style.display === 'block') {
        school_infos.push(educationGroup2);
      }

      var data = {
        "school_infos": school_infos
      };
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      if (!cookie_ms_token) {
        return;
      }


      fetch(url, options)
        .then(response => {
          if (response.status == 200) {
            const Saving = document.getElementById('Saving-2');
            const ToBeSaved = document.getElementById('ToBeSaved-2');
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab3.style.pointerEvents = "auto";
            MenuTab3.click();
            MenuTab2.style.pointerEvents = "none";
          }

          return response.json();
        }).catch(error => {
        });
    });
  }

  if (saveTab3Button) {
    saveTab3Button.addEventListener('click', function () {
      const Saving = document.getElementById('Saving-3');
      const ToBeSaved = document.getElementById('ToBeSaved-3');
      Saving.style.display = 'flex';
      ToBeSaved.style.display = 'none';
      var WorkEndDate0stillworValue = WorkEndDate0stillwork.checked;
      var CompanyName0Value = CompanyName0.value;
      var WorkLocation0Value = WorkLocation0.value;
      var Position0Value = Position0.value;
      var WorkType0Value = WorkType0.value
      var WorkStartDate0MonthValue = WorkStartDate0Month.value;
      var WorkStartDate0YearValue = WorkStartDate0Year.value;
      var WorkEndDate0MonthValue = WorkEndDate0Month.value;
      var WorkEndDate0YearValue = WorkEndDate0Year.value;
      var WorkDescription0textareaValue = WorkDescription0textarea.value;
      var CompanyName1Value = CompanyName1.value;
      var WorkLocation1Value = WorkLocation1.value;
      var Position1Value = Position1.value;
      var WorkType1Value = WorkType1.value;
      var WorkStartDate1MonthValue = WorkStartDate1Month.value;
      var WorkStartDate1YearValue = WorkStartDate1Year.value;
      var WorkEndDate1MonthValue = WorkEndDate1Month.value;
      var WorkEndDate1YearValue = WorkEndDate1Year.value;
      var WorkDescription1textareaValue = WorkDescription1textarea.value;
      var CompanyName2Value = CompanyName2.value;
      var WorkLocation2Value = WorkLocation2.value;
      var Position2Value = Position2.value;
      var WorkType2Value = WorkType2.value;
      var WorkStartDate2MonthValue = WorkStartDate2Month.value;
      var WorkStartDate2YearValue = WorkStartDate2Year.value;
      var WorkEndDate2MonthValue = WorkEndDate2Month.value;
      var WorkEndDate2YearValue = WorkEndDate2Year.value;
      var WorkDescription2textareaValue = WorkDescription2textarea.value;
      var WorkType0Value = WorkType0.options[WorkType0.selectedIndex].value;
      var WorkType1Value = WorkType1.options[WorkType1.selectedIndex].value;
      var WorkType2Value = WorkType2.options[WorkType2.selectedIndex].value;


      var WorkStartDate0Value = WorkStartDate0MonthValue + '-' + WorkStartDate0YearValue;
      var WorkStartDate1Value = WorkStartDate1MonthValue + '-' + WorkStartDate1YearValue;
      var WorkStartDate2Value = WorkStartDate2MonthValue + '-' + WorkStartDate2YearValue;
      var WorkEndDate0Value = WorkEndDate0MonthValue + '-' + WorkEndDate0YearValue;
      var WorkEndDate1Value = WorkEndDate1MonthValue + '-' + WorkEndDate1YearValue;
      var WorkEndDate2Value = WorkEndDate2MonthValue + '-' + WorkEndDate2YearValue;


      var url = `https://api.jobwizard.ai/api/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var job_infos = [];
      var job_info0 = {
        "company_name": CompanyName0Value,
        "location": WorkLocation0Value,
        "position": Position0Value,
        "work_type": WorkType0Value,
        "now_working": WorkEndDate0stillworValue,
        "description": WorkDescription0textareaValue,
        "start_date": WorkStartDate0Value,
        "end_date": WorkEndDate0Value
      };
      var job_info1 = {
        "company_name": CompanyName1Value,
        "location": WorkLocation1Value,
        "position": Position1Value,
        "work_type": WorkType1Value,
        "now_working": false,
        "description": WorkDescription1textareaValue,
        "start_date": WorkStartDate1Value,
        "end_date": WorkEndDate1Value
      };
      var job_info2 = {
        "company_name": CompanyName2Value,
        "location": WorkLocation2Value,
        "position": Position2Value,
        "work_type": WorkType2Value,
        "now_working": false,
        "description": WorkDescription2textareaValue,
        "start_date": WorkStartDate2Value,
        "end_date": WorkEndDate2Value
      };
      job_infos.push(job_info0);
      if (WorkExperience1.style.display === 'block') {
        job_infos.push(job_info1);
      }

      if (WorkExperience2.style.display === 'block') {
        job_infos.push(job_info2);
      }

      var data = {
        "job_infos": job_infos
      };
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };


      if (!cookie_ms_token) {
        return;
      }


      fetch(url, options)
        .then(response => {
          if (response.status == 200) {
            const Saving = document.getElementById('Saving-3');
            const ToBeSaved = document.getElementById('ToBeSaved-3');
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab4.style.pointerEvents = "auto";
            MenuTab4.click();
            MenuTab3.style.pointerEvents = "none";
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

      if (!cookie_ms_token) {
        return;
      }


      fetch(url, options)
        .then(response => {
          if (response.status == 200) {
            let Saving = document.getElementById('Saving-4');
            let ToBeSaved = document.getElementById('ToBeSaved-4');
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab5.style.pointerEvents = "auto";
            MenuTab5.click();
            MenuTab4.style.pointerEvents = "none";
          }

          return response.json();
        }).catch(error => {
        });
    });
  }

  if (saveTab5Button) {
    saveTab5Button.addEventListener('click', function () {
      let Saving = document.getElementById('Saving-5');
      let ToBeSaved = document.getElementById('ToBeSaved-5');
      Saving.style.display = 'flex';
      ToBeSaved.style.display = 'none';
      var CitizenshipValue = Citizenship.value;
      var USVisaTypeOption = USVisaTyoeSelect.options[USVisaTyoeSelect.selectedIndex].value;

      var url = `https://api.jobwizard.ai/api/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var data = {
        "citizenship": CitizenshipValue,
        "work_visa_type": USVisaTypeOption,
        "permanent_resident": True3Selected.checked,
        "need_sponsorship": True4Selected.checked,
        "has_criminal_record": True5Selected.checked,
        "pending_criminal_case": True6Selected.checked
      };
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      if (!cookie_ms_token) {
        return;
      }


      fetch(url, options)
        .then(response => {
          if (response.status == 200) {
            let Saving = document.getElementById('Saving-5');
            let ToBeSaved = document.getElementById('ToBeSaved-5');
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab6.style.pointerEvents = "auto";
            MenuTab6.click();
            MenuTab5.style.pointerEvents = "none";
          }

          return response.json();
        }).catch(error => {
        });
    });
  }

  if (saveTab6Button) {
    saveTab6Button.addEventListener('click', function () {
      const Saving = document.getElementById('Saving-6');
      const ToBeSaved = document.getElementById('ToBeSaved-6');
      Saving.style.display = 'flex';
      ToBeSaved.style.display = 'none';
      var LinkedinURLValue = LinkedinURL.value;
      var GitHubURLValue = GitHubURL.value;
      var PortfolioURLValue = PortfolioURL.value;
      var PersonalWebsiteURLValue = PersonalWebsiteURL.value
      var language0nameValue = language0name.value;
      var language1nameValue = language1name.value;
      var language2nameValue = language2name.value;
      var language0levelValue = language0level.options[language0level.selectedIndex].value;
      var language1levelValue = language1level.options[language1level.selectedIndex].value;
      var language2levelValue = language2level.options[language2level.selectedIndex].value;
      var SelfDescriptionTextAreaValue = SelfDescriptionTextArea.value;
      var Award0yearValue = Award0year.value;
      var Award1yearValue = Award1year.value;
      var Award2yearValue = Award2year.value;
      var Award0nameValue = Award0name.value;
      var Award1nameValue = Award1name.value;
      var Award2nameValue = Award2name.value;


      var url = `https://api.jobwizard.ai/api/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var language_infos = [];
      var language_info0 = {
        "language": language0nameValue,
        "level": language0levelValue
      };
      var language_info1 = {
        "language": language1nameValue,
        "level": language1levelValue
      };
      var language_info2 = {
        "language": language2nameValue,
        "level": language2levelValue
      };

      var award_infos = [];
      var award_info0 = {
        "year": Award0yearValue,
        "name": Award0nameValue
      };
      var award_info1 = {
        "year": Award1yearValue,
        "name": Award1nameValue
      };
      var award_info2 = {
        "year": Award2yearValue,
        "name": Award2nameValue
      };
      language_infos.push(language_info0);
      if (languag1.style.display === 'flex') {
        language_infos.push(language_info1);
      }

      if (language2.style.display === 'flex') {
        language_infos.push(language_info2);
      }

      award_infos.push(award_info0);
      if (Award1.style.display === 'flex') {
        award_infos.push(award_info1);
      }

      if (Award2.style.display === 'flex') {
        award_infos.push(award_info2);
      }




      var data = {
        "additional_info": {
          "linkin": LinkedinURLValue,
          "github": GitHubURLValue,
          "website": PersonalWebsiteURLValue,
          "portfolio": PortfolioURLValue,
          "description": SelfDescriptionTextAreaValue,
          "language_infos": language_infos,
          "award_infos": award_infos,
          "cv_list": []
        }
      };
      var options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };


      if (!cookie_ms_token) {
        return;
      }


      fetch(url, options)
        .then(response => {
          if (response.status == 200) {
            const Saving = document.getElementById('Saving-6');
            const ToBeSaved = document.getElementById('ToBeSaved-6');
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete"
          }

          return response.json();
        }).catch(error => {
        });
    });
  }
}