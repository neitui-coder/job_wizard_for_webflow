
let cookie_ms_token = null;
var userInfo = null;
cookie_ms_token = window.$memberstackDom.getMemberCookie();

document.querySelectorAll(".tabstyle").forEach(function(element) {
  element.style.cursor = "pointer";
});

// all
var AddInfoDiv = document.getElementById('Add-Info');
var AddInfo_FormTabs = document.getElementById('AddInfo-FormTabs');
var step2Div = document.getElementById('HintCard');
var bodyDiv = document.querySelector('.div-block-45');
AddInfoDiv.style.display = 'none';
var saveTab1Button = document.getElementById('Save-Tab1');
var saveTab2Button = document.getElementById('Save-Tab2');
var saveTab3Button = document.getElementById('Save-Tab3');
// var saveTab4Button = document.getElementById('Save-Tab4');
var saveTab5Button = document.getElementById('Save-Tab5');
var saveTab6Button = document.getElementById('Save-Tab6');
var Tab1 = document.getElementById('Tab1');
var Tab2 = document.getElementById('Tab2');
var Tab3 = document.getElementById('Tab3');
// var Tab4 = document.getElementById('Tab4');
var Tab5 = document.getElementById('Tab5');
var Tab6 = document.getElementById('Tab6');
var MenuTab1 = document.getElementById('Menu-Tab1');
var MenuTab2 = document.getElementById('Menu-Tab2');
var MenuTab3 = document.getElementById('Menu-Tab3');
// var MenuTab4 = document.getElementById('Menu-Tab4');
var MenuTab5 = document.getElementById('Menu-Tab5');
var MenuTab6 = document.getElementById('Menu-Tab6');

var backTab1 = document.getElementById('BackButton-Tab1');
var backTab2 = document.getElementById('BackButton-Tab2');
var backTab3 = document.getElementById('BackButton-Tab3');
// var backTab4 = document.getElementById('BackButton-Tab4');
var backTab5 = document.getElementById('BackButton-Tab5');
var backTab6 = document.getElementById('BackButton-Tab6');

var skipTab1 = document.getElementById('Skip-Tab1');
var skipTab2 = document.getElementById('Skip-Tab2');
var skipTab3 = document.getElementById('Skip-Tab3');
// var skipTab4 = document.getElementById('Skip-Tab4');
var skipTab5 = document.getElementById('Skip-Tab5');
var skipTab6 = document.getElementById('Skip-Tab6');
var doItLater = document.getElementById('DoItLater');

//Hide AddInfo-FormTabs until get_profile has returned
AddInfo_FormTabs.style.opacity = 0;

// tab1
var firstNameInput = document.getElementById('First-Name');
var lastNameInput = document.getElementById('Last-Name');
var fullNameInput = document.getElementById('FullName-Input');
var phoneNumberInput = document.getElementById('PhoneNumber-Input');
var emailInput = document.getElementById('Email-Input');
var phoneNumberInput2 = document.getElementById('PhoneNumber-Input2');
var phoneNumberInput1 = document.getElementById('PhoneNumber-Input1');
var phonegrid = document.querySelector('.phonegrid');
var AddressInput = document.getElementById('Address-Input');
var expected_salaryInput = document.getElementById('ExpectedSalary-Input');
phonegrid.style.alignItems = 'center';
var iti = window.intlTelInput(phoneNumberInput1, {
  initialCountry: "auto",
  separateDialCode: true,
  customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
    return selectedCountryPlaceholder + " " + selectedCountryData.dialCode;
  }
});
phoneNumberInput1.style.paddingRight = '0px';

// 设置默认值
iti.setNumber('+1');
console.log(phoneNumberInput1.value, '===phoneNumberInput1.value111111 ===');
phoneNumberInput1.value = '+1';
console.log(phoneNumberInput1.value, '===phoneNumberInput1.value2222222 ===');
// var dateInput = document.getElementById('Birth-Date');
// var selectMonthSelect = document.getElementById('Birth-Month');
// var yearInput = document.getElementById('Birth-Year');
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
var GPA0Input = document.getElementById('GPA0-Input');
var GPA1Input = document.getElementById('GPA1-Input');
var GPA2Input = document.getElementById('GPA2-Input');
var AddEducation = document.getElementById('AddEducation');
var DeleteEducation1 = document.getElementById('DeleteEducation1');
var DeleteEducation2 = document.getElementById('DeleteEducation2');



// tab3
var WorkExperience1 = document.getElementById('Work1');
var WorkExperience2 = document.getElementById('Work2');
var WorkExperience3 = document.getElementById('Work3');
var WorkExperience4 = document.getElementById('Work4');
WorkExperience1.style.display = 'none';
WorkExperience2.style.display = 'none';
WorkExperience3.style.display = 'none';
WorkExperience4.style.display = 'none';
var MaxAlertWork = document.getElementById('MaxAlert-Work');
var WorkEndDate0stillwork = document.getElementById('WorkEndDate0-stillwork');
var CompanyName0 = document.getElementById('CompanyName0-Input');
var CompanyName1 = document.getElementById('CompanyName1-Input');
var CompanyName2 = document.getElementById('CompanyName2-Input');
var CompanyName3 = document.getElementById('CompanyName3-Input');
var CompanyName4 = document.getElementById('CompanyName4-Input');
var WorkLocation0 = document.getElementById('WorkLocation0-Input');
var WorkLocation1 = document.getElementById('WorkLocation1-Input');
var WorkLocation2 = document.getElementById('WorkLocation2-Input');
var WorkLocation3 = document.getElementById('WorkLocation3-Input');
var WorkLocation4 = document.getElementById('WorkLocation4-Input');
var Position0 = document.getElementById('Position0-Input');
var Position1 = document.getElementById('Position1-Input');
var Position2 = document.getElementById('Position2-Input');
var Position3 = document.getElementById('Position3-Input');
var Position4 = document.getElementById('Position4-Input');
var WorkType0 = document.getElementById('WorkType0-Input');
var WorkType1 = document.getElementById('WorkType1-Input');
var WorkType2 = document.getElementById('WorkType2-Input');
var WorkType3 = document.getElementById('WorkType3-Input');
var WorkType4 = document.getElementById('WorkType4-Input');
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

var WorkStartDate3Month = document.getElementById('WorkStartDate3-Month');
var WorkStartDate3Year = document.getElementById('WorkStartDate3-Year');
var WorkEndDate3Month = document.getElementById('WorkEndDate3-Month');
var WorkEndDate3Year = document.getElementById('WorkEndDate3-Year');

var WorkStartDate4Month = document.getElementById('WorkStartDate4-Month');
var WorkStartDate4Year = document.getElementById('WorkStartDate4-Year');
var WorkEndDate4Month = document.getElementById('WorkEndDate4-Month');
var WorkEndDate4Year = document.getElementById('WorkEndDate4-Year');

var WorkDescription0textarea = document.getElementById('WorkDescription0-textarea');
var WorkDescription1textarea = document.getElementById('WorkDescription1-textarea');
var WorkDescription2textarea = document.getElementById('WorkDescription2-textarea');
var WorkDescription3textarea = document.getElementById('WorkDescription3-textarea');
var WorkDescription4textarea = document.getElementById('WorkDescription4-textarea');

var AddWork = document.getElementById('AddWork');
var DeleteWork1 = document.getElementById('DeleteWork1');
var DeleteWork2 = document.getElementById('DeleteWork2');
var DeleteWork3 = document.getElementById('DeleteWork3');
var DeleteWork4 = document.getElementById('DeleteWork4');


//tab4
// var Citizenship = document.getElementById('Citizenship');
// var USVisaTyoeSelect = document.getElementById('USVisaTyoe');
// // var permanentResident = document.getElementById('self-identification-6');
// var needSponsorship = document.getElementById('self-identification-4');
// var hasCriminalRecord = document.getElementById('self-identification-7');
// var pendingCriminalCase = document.getElementById('self-identification-5');

//tab5
var identificationInput = document.getElementById('self-identification-11');
var disabilityInput = document.getElementById('self-identification-2');
var veteranInput = document.getElementById('self-identification-3');

var raceSelect = document.getElementById('Race');
var genderSelect = document.getElementById('Gender');
var ReligionSelect = document.getElementById('Religion');
var InfoofDEI = document.getElementById('Info-of-DEI');
// var True1Selected = document.getElementById('True');
// var False1Selected = document.getElementById('False');
// var True2Selected = document.getElementById('True-2');
// var False2Selected = document.getElementById('False-2');


// tab6
// var languag1 = document.getElementById('languag1');
// var language2 = document.getElementById('language2');
// languag1.style.display = 'none';
// language2.style.display = 'none';
// var Award1 = document.getElementById('Award1');
// var Award2 = document.getElementById('Award2');
// Award1.style.display = 'none';
// Award2.style.display = 'none';
var MaxAlertLanguage = document.getElementById('MaxAlert-Language');
var MaxAlertAward = document.getElementById('MaxAlert-Award');
var LinkedinURL = document.getElementById('Linkedin-URL');
var GitHubURL = document.getElementById('GitHub-URL');
var PortfolioURL = document.getElementById('Portfolio-URL');
var PersonalWebsiteURL = document.getElementById('PersonalWebsite-URL');
// var language0name = document.getElementById('language0-name');
// var language1name = document.getElementById('language1-name');
// var language2name = document.getElementById('language2-name');
// var language0level = document.getElementById('language0-level');
// var language1level = document.getElementById('language1-level');
// var language2level = document.getElementById('language2-level');
var SelfDescriptionTextArea = document.getElementById('SelfDescription-TextArea');

// var Award0year = document.getElementById('Award0-year');
// var Award1year = document.getElementById('Award1-year');
// var Award2year = document.getElementById('Award2-year');
// var Award0name = document.getElementById('Award0-name');
// var Award1name = document.getElementById('Award1-name');
// var Award2name = document.getElementById('Award2-level');

// var AddLanguage = document.getElementById('AddLanguage');
// var AddAward = document.getElementById('AddAward');
// var DeleteLanguage1 = document.getElementById('DeleteLanguage1');
// var DeleteLanguage2 = document.getElementById('DeleteLanguage2');
// var DeleteAward1 = document.getElementById('DeleteAward1');
// var DeleteAward2 = document.getElementById('DeleteAward2');


var startButton = document.getElementById('Start-Add-Info');

if (startButton) {
  startButton.addEventListener('click', function () {
    if (!cookie_ms_token) {
      window.location.href = "https://www.jobwizard.ai/login"
      return;
    }
    step2Div.style.transition = 'opacity 300ms ease-in-out 0s';
    step2Div.style.opacity = '0';
    step2Div.style.display = 'none';
    AddInfoDiv.style.display = 'flex'
  })
}

if (skipTab1) {
  skipTab1.addEventListener('click', function () {
    MenuTab2.style.pointerEvents = "auto";
    MenuTab2.click();
  })
}
if (skipTab2) {
  skipTab2.addEventListener('click', function () {
    MenuTab3.style.pointerEvents = "auto";
    MenuTab3.click();
  })
}

if (skipTab3) {
  skipTab3.addEventListener('click', function () {
    MenuTab5.style.pointerEvents = "auto";
    MenuTab5.click();
  })
}

// if (skipTab4) {
//   skipTab4.addEventListener('click', function () {
//     MenuTab5.style.pointerEvents = "auto";
//     MenuTab5.click();
//   })
// }

if (skipTab5) {
  skipTab5.addEventListener('click', function () {
    MenuTab6.style.pointerEvents = "auto";
    MenuTab6.click();
  })
}

if (skipTab6) {
  skipTab6.addEventListener('click', function () {
    // 打开一个特定岗位页面来给用户测试
    // window.open('https://airtable.com/appQynbTNIRoTOt6Q/shrWbHxenXI3aPitF/tbllTF0zzhbMMHYGm/viw7SOFwlmbdIeSzm?blocks=hide', '_blank');
    window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete?resource=add-info"
  })
}
if (doItLater) {
  doItLater.addEventListener('click', function () {
    // 打开一个特定岗位页面来给用户测试
    // window.open('https://airtable.com/appQynbTNIRoTOt6Q/shrWbHxenXI3aPitF/tbllTF0zzhbMMHYGm/viw7SOFwlmbdIeSzm?blocks=hide', '_blank');
    window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete?resource=add-info"
  })
}
if (backTab1) {
  backTab1.addEventListener('click', function () {
    step2Div.style.display = 'flex';
    step2Div.style.transition = 'opacity 300ms ease-in-out 0s';
    step2Div.style.opacity = '1';
    AddInfoDiv.style.display = 'none'
  })
}
if (backTab2) {
  backTab2.addEventListener('click', function () {
    MenuTab1.style.pointerEvents = "auto";
    MenuTab1.click();
  })
}

if (backTab3) {
  backTab3.addEventListener('click', function () {
    MenuTab2.style.pointerEvents = "auto";
    MenuTab2.click();
  })
}

// if (backTab4) {
//   backTab4.addEventListener('click', function () {
//     MenuTab3.style.pointerEvents = "auto";
//     MenuTab3.click();
//   })
// }

if (backTab5) {
  backTab5.addEventListener('click', function () {
    MenuTab3.style.pointerEvents = "auto";
    MenuTab3.click();
  })
}

if (backTab6) {
  backTab6.addEventListener('click', function () {
    MenuTab5.style.pointerEvents = "auto";
    MenuTab5.click();
  })
}

if (AddEducation) {
  AddEducation.addEventListener('click', function () {
    if (Education1.style.display == 'block' && Education2.style.display == 'block') {
      MaxAlertEducation.style.display = 'block'
      setTimeout(function () {
        MaxAlertEducation.style.display = 'none'
      }, 3000);
      return;
    }
    if (Education1.style.display == 'none') {
      Education1.style.display = 'block';
      return;
    }

    if (Education2.style.display == 'none') {
      Education2.style.display = 'block';
      return;
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
    GPA1Input.value = '';
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
    GPA2Input.value = '';
  })
}

if (AddWork) {
  AddWork.addEventListener('click', function () {
    if (WorkExperience1.style.display == 'block' && WorkExperience2.style.display == 'block' && WorkExperience3.style.display == 'block' && WorkExperience4.style.display == 'block') {
      MaxAlertWork.style.display = 'block'
      setTimeout(function () {
        MaxAlertWork.style.display = 'none'
      }, 3000);
      return;
    }
    if (WorkExperience1.style.display === 'none') {
      WorkExperience1.style.display = 'block';
      return;
    }

    if (WorkExperience2.style.display === 'none') {
      WorkExperience2.style.display = 'block';
      return;
    }

    if (WorkExperience3.style.display === 'none') {
      WorkExperience3.style.display = 'block';
      return;
    }

    if (WorkExperience4.style.display === 'none') {
      WorkExperience4.style.display = 'block';
      return;
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

if (DeleteWork3) {
  DeleteWork3.addEventListener('click', function () {
    WorkExperience3.style.display = 'none';
    CompanyName3.value = '';
    WorkLocation3.value = '';
    Position3.value = '';
    WorkType3.value = '';
    WorkStartDate3Month.value = '';
    WorkStartDate3Year.value = '';
    WorkEndDate3Month.value = '';
    WorkEndDate3Year.value = '';
    WorkDescription3textarea.value = '';
  })
}

if (DeleteWork4) {
  DeleteWork4.addEventListener('click', function () {
    WorkExperience4.style.display = 'none';
    CompanyName4.value = '';
    WorkLocation4.value = '';
    Position4.value = '';
    WorkType4.value = '';
    WorkStartDate4Month.value = '';
    WorkStartDate4Year.value = '';
    WorkEndDate4Month.value = '';
    WorkEndDate4Year.value = '';
    WorkDescription4textarea.value = '';
  })
}

// if (AddLanguage) {
//   AddLanguage.addEventListener('click', function () {
//     if (languag1.style.display == 'none') {
//       languag1.style.display = 'flex';
//       return;
//     }

//     if (language2.style.display == 'none') {
//       language2.style.display = 'flex';
//       return;
//     }

//     if (MaxAlertLanguage.style.display == 'none') {
//       MaxAlertLanguage.style.display = 'block';
//     }
//   })
// }


// if (DeleteLanguage1) {
//   DeleteLanguage1.addEventListener('click', function () {
//     languag1.style.display = 'none';
//     language1name.value = '';
//     language1level.value = '';
//   })
// }

// if (DeleteLanguage2) {
//   DeleteLanguage2.addEventListener('click', function () {
//     language2.style.display = 'none';
//     language2name.value = '';
//     language2level.value = '';
//   })
// }


// if (AddAward) {
//   AddAward.addEventListener('click', function () {
//     if (Award1.style.display == 'none') {
//       Award1.style.display = 'flex';
//       return;
//     }

//     if (Award2.style.display == 'none') {
//       Award2.style.display = 'flex';
//       return;
//     }

//     if (MaxAlertAward.style.display == 'none') {
//       MaxAlertAward.style.display = 'block';
//     }
//   })
// }


// if (DeleteAward1) {
//   DeleteAward1.addEventListener('click', function () {
//     Award1.style.display = 'none';
//     Award1year.value = '';
//     Award1name.value = '';
//   })
// }

// if (DeleteAward2) {
//   DeleteAward2.addEventListener('click', function () {
//     Award2.style.display = 'none';
//     Award2year.value = '';
//     Award2name.value = '';
//   })
// }

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
      WorkEndDate0Month.style.transition = 'box-shadow .3s, background-color 10000s, border .3s';
      WorkEndDate0Year.style.transition = 'box-shadow .3s, background-color 10000s, border .3s';
    }
  })
}

if (identificationInput) {
  identificationInput.addEventListener('click', function () {
    if (identificationInput.checked) {
      InfoofDEI.style.display = 'block'
    } else {
      InfoofDEI.style.display = 'none'
      let disabilityInputPrev = disabilityInput.previousElementSibling;
      disabilityInput.checked = 'false';
      disabilityInputPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent';

      let veteranInputPrev = veteranInput.previousElementSibling;
      veteranInput.checked = 'false';
      veteranInputPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent';

      raceSelect.value = 'I prefer not to say';
      genderSelect.value = '';
      ReligionSelect.value = 'I prefer not to say';
    }
  })
}


fetchData();


function dofillUserInfo(userInfo) {
  // tab1
  firstNameInput.value = userInfo.basic_info?.first_name;
  lastNameInput.value = userInfo.basic_info?.last_name;
  let phoneGroup = userInfo.basic_info?.phone?.split(" ")

  if (phoneGroup.length > 1) {
    // 设置默认值
    // var phonegrid = document.querySelector('.phonegrid');
    // phonegrid.style.alignItems = 'center';
    // var iti = window.intlTelInput(phoneNumberInput1, {
    //   initialCountry: "auto",
    //   separateDialCode: true,
    //   customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
    //     return selectedCountryPlaceholder + " " + selectedCountryData.dialCode;
    //   }
    // });

    // 设置默认值
    if (phoneGroup[0]) {
      iti.setNumber(phoneGroup[0]);
      phoneNumberInput1.value = phoneGroup[0];
    }
    phoneNumberInput2.value = phoneGroup[1];
  } else {
    phoneNumberInput2.value = userInfo.basic_info?.phone;
  }

  emailInput.value = userInfo.basic_info?.email;
  // const dateArr = userInfo.basic_info?.birthday?.split(" ");
  // dateInput.value = dateArr[2];
  // selectMonthSelect.value = dateArr[1];
  // selectMonthSelect.style.color = "black";
  // yearInput.value = dateArr[0];
  locationInput.value = userInfo.basic_info?.location;
  fullNameInput.value = userInfo.basic_info?.full_name;
  AddressInput.value = userInfo.basic_info?.address;
  expected_salaryInput.value = userInfo.basic_info?.expected_salary;


  //tab2
  SchoolName0Input.value = userInfo.school_infos[0]?.name;
  Major0Input.value = userInfo.school_infos[0]?.major;
  DegreeType0Input.value = userInfo.school_infos[0]?.degree;
  GPA0Input.value = userInfo.school_infos[0]?.school_gpa;
  DegreeType0Input.style.color = "black";
  const StartDateInput0Arr = userInfo.school_infos[0]?.start_date?.replace(/ /g, "-")?.split("-");
  if (userInfo.school_infos[0]?.start_date?.length == 4) {
    StartDate0Input1.value = userInfo.school_infos[0]?.start_date;
    StartDate0Input0.value = "";
  } else {
    if (StartDateInput0Arr) {
      // 找出年份位置
      const yearIndex = StartDateInput0Arr.findIndex(part => part.length === 4);
      if (yearIndex !== -1) {
        StartDate0Input1.value = StartDateInput0Arr[yearIndex];
        
        // 检查年份相邻的数字
        const beforeYear = yearIndex > 0 ? parseInt(StartDateInput0Arr[yearIndex - 1]) : null;
        const afterYear = yearIndex < StartDateInput0Arr.length - 1 ? parseInt(StartDateInput0Arr[yearIndex + 1]) : null;
        
        StartDate0Input0.value = "";  // 默认为空
        if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
          StartDate0Input0.value = StartDateInput0Arr[yearIndex - 1];
        } else if (afterYear && afterYear > 0 && afterYear <= 12) {
          StartDate0Input0.value = StartDateInput0Arr[yearIndex + 1];
        }
      }
    }
  }
  
  const EndDateInput0Arr = userInfo.school_infos[0]?.end_date?.replace(/ /g, "-")?.split("-");
  if (userInfo.school_infos[0]?.end_date?.length == 4) {
    EndDate0Input1.value = userInfo.school_infos[0]?.end_date;
    EndDate0Input0.value = "";
  } else {
    if (EndDateInput0Arr) {
      // 找出年份位置
      const yearIndex = EndDateInput0Arr.findIndex(part => part.length === 4);
      if (yearIndex !== -1) {
        EndDate0Input1.value = EndDateInput0Arr[yearIndex];
        
        // 检查年份相邻的数字
        const beforeYear = yearIndex > 0 ? parseInt(EndDateInput0Arr[yearIndex - 1]) : null;
        const afterYear = yearIndex < EndDateInput0Arr.length - 1 ? parseInt(EndDateInput0Arr[yearIndex + 1]) : null;
        
        EndDate0Input0.value = "";  // 默认为空
        if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
          EndDate0Input0.value = EndDateInput0Arr[yearIndex - 1];
        } else if (afterYear && afterYear > 0 && afterYear <= 12) {
          EndDate0Input0.value = EndDateInput0Arr[yearIndex + 1];
        }
      }
    }
  }

  const isExistSchoolInfo1 = userInfo.school_infos[1]?.name ||
    userInfo.school_infos[1]?.major ||
    userInfo.school_infos[1]?.degree ||
    userInfo.school_infos[1]?.start_date ||
    userInfo.school_infos[1]?.end_date ||
    userInfo.school_infos[1]?.school_gpa;

  if (isExistSchoolInfo1) {
    SchoolName1Input.value = userInfo.school_infos[1]?.name;
    Major1Input.value = userInfo.school_infos[1]?.major;
    DegreeType1Input.value = userInfo.school_infos[1]?.degree;
    GPA1Input.value = userInfo.school_infos[1]?.school_gpa;
    DegreeType1Input.style.color = "black";

    if (userInfo.school_infos[1]?.start_date?.length == 4) {
      StartDate1Input1.value = userInfo.school_infos[1]?.start_date;
      StartDate1Input0.value = "";
    } else {
      const StartDateInput1Arr = userInfo.school_infos[1]?.start_date?.replace(/ /g, "-")?.split("-");
      if (StartDateInput1Arr) {
        // 找出年份位置
        const yearIndex = StartDateInput1Arr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          StartDate1Input1.value = StartDateInput1Arr[yearIndex];
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(StartDateInput1Arr[yearIndex - 1]) : null;
          const afterYear = yearIndex < StartDateInput1Arr.length - 1 ? parseInt(StartDateInput1Arr[yearIndex + 1]) : null;
          
          StartDate1Input0.value = "";  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            StartDate1Input0.value = StartDateInput1Arr[yearIndex - 1];
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            StartDate1Input0.value = StartDateInput1Arr[yearIndex + 1];
          }
        }
      }
    }
    
    if (userInfo.school_infos[1]?.end_date?.length == 4) {
      EndDate1Input1.value = userInfo.school_infos[1]?.end_date;
      EndDate1Input0.value = "";
    } else {
      const EndDateInput1Arr = userInfo.school_infos[1]?.end_date?.replace(/ /g, "-")?.split("-");
      if (EndDateInput1Arr) {
        // 找出年份位置
        const yearIndex = EndDateInput1Arr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          EndDate1Input1.value = EndDateInput1Arr[yearIndex];
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(EndDateInput1Arr[yearIndex - 1]) : null;
          const afterYear = yearIndex < EndDateInput1Arr.length - 1 ? parseInt(EndDateInput1Arr[yearIndex + 1]) : null;
          
          EndDate1Input0.value = "";  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            EndDate1Input0.value = EndDateInput1Arr[yearIndex - 1];
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            EndDate1Input0.value = EndDateInput1Arr[yearIndex + 1];
          }
        }
      }
    }
    Education1.style.display = 'block';
  }

  const isExistSchoolInfo2 = userInfo.school_infos[2]?.name ||
    userInfo.school_infos[2]?.major ||
    userInfo.school_infos[2]?.degree ||
    userInfo.school_infos[2]?.start_date ||
    userInfo.school_infos[2]?.end_date ||
    userInfo.school_infos[2]?.school_gpa;
  if (isExistSchoolInfo2) {
    SchoolName2Input.value = userInfo.school_infos[2]?.name;
    Major2Input.value = userInfo.school_infos[2]?.major;
    DegreeType2Input.value = userInfo.school_infos[2]?.degree;
    GPA2Input.value = userInfo.school_infos[2]?.school_gpa;
    DegreeType2Input.style.color = "black";
    if (userInfo.school_infos[2]?.start_date?.length == 4) {
      StartDate2Input1.value = userInfo.school_infos[2]?.start_date;
      StartDate2Input0.value = "";
    } else {
      const StartDateInput2Arr = userInfo.school_infos[2]?.start_date?.replace(/ /g, "-")?.split("-");
      if (StartDateInput2Arr) {
        // 找出年份位置
        const yearIndex = StartDateInput2Arr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          StartDate2Input1.value = StartDateInput2Arr[yearIndex];
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(StartDateInput2Arr[yearIndex - 1]) : null;
          const afterYear = yearIndex < StartDateInput2Arr.length - 1 ? parseInt(StartDateInput2Arr[yearIndex + 1]) : null;
          
          StartDate2Input0.value = "";  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            StartDate2Input0.value = StartDateInput2Arr[yearIndex - 1];
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            StartDate2Input0.value = StartDateInput2Arr[yearIndex + 1];
          }
        }
      }
    }
    
    if (userInfo.school_infos[2]?.end_date?.length == 4) {
      EndDate2Input1.value = userInfo.school_infos[2]?.end_date;
      EndDate2Input0.value = "";
    } else {
      const EndDateInput2Arr = userInfo.school_infos[2]?.end_date?.replace(/ /g, "-")?.split("-");
      if (EndDateInput2Arr) {
        // 找出年份位置
        const yearIndex = EndDateInput2Arr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          EndDate2Input1.value = EndDateInput2Arr[yearIndex];
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(EndDateInput2Arr[yearIndex - 1]) : null;
          const afterYear = yearIndex < EndDateInput2Arr.length - 1 ? parseInt(EndDateInput2Arr[yearIndex + 1]) : null;
          
          EndDate2Input0.value = "";  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            EndDate2Input0.value = EndDateInput2Arr[yearIndex - 1];
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            EndDate2Input0.value = EndDateInput2Arr[yearIndex + 1];
          }
        }
      }
    }
    Education2.style.display = 'block';
  }

  //tab3
  WorkEndDate0stillwork.checked = userInfo.job_infos[0]?.now_working;
  let WorkEndDate0stillworkPrev = WorkEndDate0stillwork.previousElementSibling;
  if (userInfo.job_infos[0]?.now_working) {
    WorkEndDate0Month.disabled = true;
    WorkEndDate0Year.disabled = true;
    WorkEndDate0stillworkPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked';
  } else {
    if (userInfo.job_infos[0]?.end_date?.length == 4) {
      WorkEndDate0Year.value = userInfo.job_infos[0]?.end_date || '';
      WorkEndDate0Month.value = '';
    } else {
      const EndDateInput0JobArr = userInfo.job_infos[0]?.end_date?.replace(/ /g, "-")?.split("-");
      if (EndDateInput0JobArr) {
        // 找出年份位置
        const yearIndex = EndDateInput0JobArr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          WorkEndDate0Year.value = EndDateInput0JobArr[yearIndex] || '';
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(EndDateInput0JobArr[yearIndex - 1]) : null;
          const afterYear = yearIndex < EndDateInput0JobArr.length - 1 ? parseInt(EndDateInput0JobArr[yearIndex + 1]) : null;
          
          WorkEndDate0Month.value = '';  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            WorkEndDate0Month.value = EndDateInput0JobArr[yearIndex - 1] || '';
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            WorkEndDate0Month.value = EndDateInput0JobArr[yearIndex + 1] || '';
          }
        }
      }
    }
  }
  CompanyName0.value = userInfo.job_infos[0]?.company_name;
  WorkLocation0.value = userInfo.job_infos[0]?.location;
  Position0.value = userInfo.job_infos[0]?.position;
  WorkType0.value = userInfo.job_infos[0]?.work_type;
  WorkType0.style.color = "black";
  WorkDescription0textarea.value = userInfo.job_infos[0]?.description;
  if (userInfo.job_infos[0]?.start_date?.length == 4) {
    WorkStartDate0Year.value = userInfo.job_infos[0]?.start_date || '';
    WorkStartDate0Month.value = '';
  } else {
    const StartDateInput0JobArr = userInfo.job_infos[0]?.start_date?.replace(/ /g, "-")?.split("-");
    if (StartDateInput0JobArr) {
      // 找出年份位置
      const yearIndex = StartDateInput0JobArr.findIndex(part => part.length === 4);
      if (yearIndex !== -1) {
        WorkStartDate0Year.value = StartDateInput0JobArr[yearIndex] || '';
        
        // 检查年份相邻的数字
        const beforeYear = yearIndex > 0 ? parseInt(StartDateInput0JobArr[yearIndex - 1]) : null;
        const afterYear = yearIndex < StartDateInput0JobArr.length - 1 ? parseInt(StartDateInput0JobArr[yearIndex + 1]) : null;
        
        WorkStartDate0Month.value = '';  // 默认为空
        if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
          WorkStartDate0Month.value = StartDateInput0JobArr[yearIndex - 1] || '';
        } else if (afterYear && afterYear > 0 && afterYear <= 12) {
          WorkStartDate0Month.value = StartDateInput0JobArr[yearIndex + 1] || '';
        }
      }
    }
  }

  const isExistJobInfo1 = userInfo.job_infos[1]?.company_name ||
    userInfo.job_infos[1]?.location ||
    userInfo.job_infos[1]?.position ||
    userInfo.job_infos[1]?.work_type ||
    userInfo.job_infos[1]?.description ||
    userInfo.job_infos[1]?.start_date ||
    userInfo.job_infos[1]?.end_date;
  if (isExistJobInfo1) {
    CompanyName1.value = userInfo.job_infos[1]?.company_name;
    WorkLocation1.value = userInfo.job_infos[1]?.location;
    Position1.value = userInfo.job_infos[1]?.position;
    WorkType1.value = userInfo.job_infos[1]?.work_type;
    WorkType1.style.color = "black";
    WorkDescription1textarea.value = userInfo.job_infos[1]?.description;
    if (userInfo.job_infos[1]?.start_date?.length == 4) {
      WorkStartDate1Year.value = userInfo.job_infos[1]?.start_date || '';
      WorkStartDate1Month.value = '';
    } else {
      const StartDateInput1JobArr = userInfo.job_infos[1]?.start_date?.replace(/ /g, "-")?.split("-");
      if (StartDateInput1JobArr) {
        // 找出年份位置
        const yearIndex = StartDateInput1JobArr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          WorkStartDate1Year.value = StartDateInput1JobArr[yearIndex] || '';
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(StartDateInput1JobArr[yearIndex - 1]) : null;
          const afterYear = yearIndex < StartDateInput1JobArr.length - 1 ? parseInt(StartDateInput1JobArr[yearIndex + 1]) : null;
          
          WorkStartDate1Month.value = '';  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            WorkStartDate1Month.value = StartDateInput1JobArr[yearIndex - 1] || '';
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            WorkStartDate1Month.value = StartDateInput1JobArr[yearIndex + 1] || '';
          }
        }
      }
    }
    
    if (userInfo.job_infos[1]?.end_date?.length == 4) {
      WorkEndDate1Year.value = userInfo.job_infos[1]?.end_date || '';
      WorkEndDate1Month.value = '';
    } else {
      const EndDateInput1JobArr = userInfo.job_infos[1]?.end_date?.replace(/ /g, "-")?.split("-");
      if (EndDateInput1JobArr) {
        // 找出年份位置
        const yearIndex = EndDateInput1JobArr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          WorkEndDate1Year.value = EndDateInput1JobArr[yearIndex] || '';
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(EndDateInput1JobArr[yearIndex - 1]) : null;
          const afterYear = yearIndex < EndDateInput1JobArr.length - 1 ? parseInt(EndDateInput1JobArr[yearIndex + 1]) : null;
          
          WorkEndDate1Month.value = '';  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            WorkEndDate1Month.value = EndDateInput1JobArr[yearIndex - 1] || '';
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            WorkEndDate1Month.value = EndDateInput1JobArr[yearIndex + 1] || '';
          }
        }
      }
    }
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
    CompanyName2.value = userInfo.job_infos[2]?.company_name;
    WorkLocation2.value = userInfo.job_infos[2]?.location;
    Position2.value = userInfo.job_infos[2]?.position;
    WorkType2.value = userInfo.job_infos[2]?.work_type;
    WorkType2.style.color = "black";
    WorkDescription2textarea.value = userInfo.job_infos[2]?.description;
    if (userInfo.job_infos[2]?.start_date?.length == 4) {
      WorkStartDate2Year.value = userInfo.job_infos[2]?.start_date || '';
      WorkStartDate2Month.value = '';
    } else {
      const StartDateInput2JobArr = userInfo.job_infos[2]?.start_date?.replace(/ /g, "-")?.split("-");
      if (StartDateInput2JobArr) {
        // 找出年份位置
        const yearIndex = StartDateInput2JobArr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          WorkStartDate2Year.value = StartDateInput2JobArr[yearIndex] || '';
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(StartDateInput2JobArr[yearIndex - 1]) : null;
          const afterYear = yearIndex < StartDateInput2JobArr.length - 1 ? parseInt(StartDateInput2JobArr[yearIndex + 1]) : null;
          
          WorkStartDate2Month.value = '';  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            WorkStartDate2Month.value = StartDateInput2JobArr[yearIndex - 1] || '';
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            WorkStartDate2Month.value = StartDateInput2JobArr[yearIndex + 1] || '';
          }
        }
      }
    }
    
    if (userInfo.job_infos[2]?.end_date?.length == 4) {
      WorkEndDate2Year.value = userInfo.job_infos[2]?.end_date || '';
      WorkEndDate2Month.value = '';
    } else {
      const EndDateInput2JobArr = userInfo.job_infos[2]?.end_date?.replace(/ /g, "-")?.split("-");
      if (EndDateInput2JobArr) {
        // 找出年份位置
        const yearIndex = EndDateInput2JobArr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          WorkEndDate2Year.value = EndDateInput2JobArr[yearIndex] || '';
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(EndDateInput2JobArr[yearIndex - 1]) : null;
          const afterYear = yearIndex < EndDateInput2JobArr.length - 1 ? parseInt(EndDateInput2JobArr[yearIndex + 1]) : null;
          
          WorkEndDate2Month.value = '';  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            WorkEndDate2Month.value = EndDateInput2JobArr[yearIndex - 1] || '';
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            WorkEndDate2Month.value = EndDateInput2JobArr[yearIndex + 1] || '';
          }
        }
      }
    }
    WorkExperience2.style.display = 'block';
  }

  const isExistJobInfo3 = userInfo.job_infos[3]?.company_name ||
  userInfo.job_infos[3]?.location ||
  userInfo.job_infos[3]?.position ||
  userInfo.job_infos[3]?.work_type ||
  userInfo.job_infos[3]?.description ||
  userInfo.job_infos[3]?.start_date ||
  userInfo.job_infos[3]?.end_date
if (isExistJobInfo3) {
  CompanyName3.value = userInfo.job_infos[3]?.company_name;
  WorkLocation3.value = userInfo.job_infos[3]?.location;
  Position3.value = userInfo.job_infos[3]?.position;
  WorkType3.value = userInfo.job_infos[3]?.work_type;
  WorkType3.style.color = "black";
  WorkDescription3textarea.value = userInfo.job_infos[3]?.description;
  if (userInfo.job_infos[3]?.start_date?.length == 4) {
    WorkStartDate3Year.value = userInfo.job_infos[3]?.start_date || '';
    WorkStartDate3Month.value = '';
  } else {
    const StartDateInput3JobArr = userInfo.job_infos[3]?.start_date?.replace(/ /g, "-")?.split("-");
    if (StartDateInput3JobArr) {
      // 找出年份位置
      const yearIndex = StartDateInput3JobArr.findIndex(part => part.length === 4);
      if (yearIndex !== -1) {
        WorkStartDate3Year.value = StartDateInput3JobArr[yearIndex] || '';
        
        // 检查年份相邻的数字
        const beforeYear = yearIndex > 0 ? parseInt(StartDateInput3JobArr[yearIndex - 1]) : null;
        const afterYear = yearIndex < StartDateInput3JobArr.length - 1 ? parseInt(StartDateInput3JobArr[yearIndex + 1]) : null;
        
        WorkStartDate3Month.value = '';  // 默认为空
        if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
          WorkStartDate3Month.value = StartDateInput3JobArr[yearIndex - 1] || '';
        } else if (afterYear && afterYear > 0 && afterYear <= 12) {
          WorkStartDate3Month.value = StartDateInput3JobArr[yearIndex + 1] || '';
        }
      }
    }
  }
  
  if (userInfo.job_infos[3]?.end_date?.length == 4) {
    WorkEndDate3Year.value = userInfo.job_infos[3]?.end_date || '';
    WorkEndDate3Month.value = '';
  } else {
    const EndDateInput3JobArr = userInfo.job_infos[3]?.end_date?.replace(/ /g, "-")?.split("-");
    if (EndDateInput3JobArr) {
      // 找出年份位置
      const yearIndex = EndDateInput3JobArr.findIndex(part => part.length === 4);
      if (yearIndex !== -1) {
        WorkEndDate3Year.value = EndDateInput3JobArr[yearIndex] || '';
        
        // 检查年份相邻的数字
        const beforeYear = yearIndex > 0 ? parseInt(EndDateInput3JobArr[yearIndex - 1]) : null;
        const afterYear = yearIndex < EndDateInput3JobArr.length - 1 ? parseInt(EndDateInput3JobArr[yearIndex + 1]) : null;
        
        WorkEndDate3Month.value = '';  // 默认为空
        if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
          WorkEndDate3Month.value = EndDateInput3JobArr[yearIndex - 1] || '';
        } else if (afterYear && afterYear > 0 && afterYear <= 12) {
          WorkEndDate3Month.value = EndDateInput3JobArr[yearIndex + 1] || '';
        }
      }
    }
  }
  WorkExperience3.style.display = 'block';
}

  const isExistJobInfo4 = userInfo.job_infos[4]?.company_name ||
    userInfo.job_infos[4]?.location ||
    userInfo.job_infos[4]?.position ||
    userInfo.job_infos[4]?.work_type ||
    userInfo.job_infos[4]?.description ||
    userInfo.job_infos[4]?.start_date ||
    userInfo.job_infos[4]?.end_date
  if (isExistJobInfo4) {
    CompanyName4.value = userInfo.job_infos[4]?.company_name;
    WorkLocation4.value = userInfo.job_infos[4]?.location;
    Position4.value = userInfo.job_infos[4]?.position;
    WorkType4.value = userInfo.job_infos[4]?.work_type;
    WorkType4.style.color = "black";
    WorkDescription4textarea.value = userInfo.job_infos[4]?.description;
    if (userInfo.job_infos[4]?.start_date?.length == 4) {
      WorkStartDate4Year.value = userInfo.job_infos[4]?.start_date || '';
      WorkStartDate4Month.value = '';
    } else {
      const StartDateInput4JobArr = userInfo.job_infos[4]?.start_date?.replace(/ /g, "-")?.split("-");
      if (StartDateInput4JobArr) {
        // 找出年份位置
        const yearIndex = StartDateInput4JobArr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          WorkStartDate4Year.value = StartDateInput4JobArr[yearIndex] || '';
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(StartDateInput4JobArr[yearIndex - 1]) : null;
          const afterYear = yearIndex < StartDateInput4JobArr.length - 1 ? parseInt(StartDateInput4JobArr[yearIndex + 1]) : null;
          
          WorkStartDate4Month.value = '';  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            WorkStartDate4Month.value = StartDateInput4JobArr[yearIndex - 1] || '';
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            WorkStartDate4Month.value = StartDateInput4JobArr[yearIndex + 1] || '';
          }
        }
      }
    }
    
    if (userInfo.job_infos[4]?.end_date?.length == 4) {
      WorkEndDate4Year.value = userInfo.job_infos[4]?.end_date || '';
      WorkEndDate4Month.value = '';
    } else {
      const EndDateInput4JobArr = userInfo.job_infos[4]?.end_date?.replace(/ /g, "-")?.split("-");
      if (EndDateInput4JobArr) {
        // 找出年份位置
        const yearIndex = EndDateInput4JobArr.findIndex(part => part.length === 4);
        if (yearIndex !== -1) {
          WorkEndDate4Year.value = EndDateInput4JobArr[yearIndex] || '';
          
          // 检查年份相邻的数字
          const beforeYear = yearIndex > 0 ? parseInt(EndDateInput4JobArr[yearIndex - 1]) : null;
          const afterYear = yearIndex < EndDateInput4JobArr.length - 1 ? parseInt(EndDateInput4JobArr[yearIndex + 1]) : null;
          
          WorkEndDate4Month.value = '';  // 默认为空
          if (beforeYear && beforeYear > 0 && beforeYear <= 12) {
            WorkEndDate4Month.value = EndDateInput4JobArr[yearIndex - 1] || '';
          } else if (afterYear && afterYear > 0 && afterYear <= 12) {
            WorkEndDate4Month.value = EndDateInput4JobArr[yearIndex + 1] || '';
          }
        }
      }
    }
    WorkExperience4.style.display = 'block';
  }
  

  // // tab4
  // Citizenship.value = userInfo.legal_info?.citizenship;
  // USVisaTyoeSelect.value = userInfo.legal_info?.work_visa_type;
  // USVisaTyoeSelect.style.color = "black";

  // // permanentResident.checked = userInfo.legal_info?.permanent_resident;
  // // let permanentResidentPrev = permanentResident.previousElementSibling;
  // // if (userInfo.legal_info.permanent_resident) {
  // //   permanentResidentPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent w--redirected-checked';
  // // }

  // needSponsorship.checked = userInfo.legal_info?.need_sponsorship;
  // let needSponsorshipPrev = needSponsorship.previousElementSibling;
  // if (userInfo.legal_info.need_sponsorship) {
  //   needSponsorshipPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent w--redirected-checked';
  // }

  // hasCriminalRecord.checked = userInfo.legal_info?.has_criminal_record;
  // let hasCriminalRecordPrev = hasCriminalRecord.previousElementSibling;
  // if (userInfo.legal_info.has_criminal_record) {
  //   hasCriminalRecordPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent w--redirected-checked';
  // }

  // pendingCriminalCase.checked = userInfo.legal_info?.pending_criminal_case;
  // let pendingCriminalCasePrev = pendingCriminalCase.previousElementSibling;
  // if (userInfo.legal_info.pending_criminal_case) {
  //   pendingCriminalCasePrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent w--redirected-checked';
  // }

  // tab5
  identificationInput.checked = userInfo.dei_info?.agree_to_provide_dei;
  let identificationInputPrev = identificationInput.previousElementSibling;
  if (userInfo.dei_info.agree_to_provide_dei) {
    identificationInputPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent w--redirected-checked';
  }

  disabilityInput.checked = userInfo.dei_info?.disability;
  let disabilityInputPrev = disabilityInput.previousElementSibling;
  if (userInfo.dei_info?.disability) {
    disabilityInputPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent w--redirected-checked';
  }

  veteranInput.checked = userInfo.dei_info?.veteran;
  let veteranInputPrev = veteranInput.previousElementSibling;
  if (userInfo.dei_info?.veteran) {
    veteranInputPrev.className = 'w-checkbox-input w-checkbox-input--inputType-custom checkbox independent w--redirected-checked';
  }

  raceSelect.value = userInfo.dei_info?.race;
  raceSelect.style.color = "black";
  genderSelect.value = userInfo.dei_info?.gender;
  genderSelect.style.color = "black";
  ReligionSelect.value = userInfo.dei_info?.religion;
  ReligionSelect.style.color = "black";

  // tab6
  LinkedinURL.value = userInfo.additional_info.linkedin_url || '';
  GitHubURL.value = userInfo.additional_info?.github;
  PortfolioURL.value = userInfo.additional_info?.portfolio;
  PersonalWebsiteURL.value = userInfo.additional_info?.website;
  // language0name.value = userInfo.additional_info?.language_infos[0]?.language;
  // language0level.value = userInfo.additional_info?.language_infos[0]?.level;
  // language0level.style.color = "black";
  // const isExistLanguageInfos1 = userInfo.additional_info?.language_infos[1]?.language || userInfo.additional_info?.language_infos[1]?.level
  // if (isExistLanguageInfos1) {
  //   language1name.value = userInfo.additional_info?.language_infos[1]?.language;
  //   language1level.value = userInfo.additional_info?.language_infos[1]?.level;
  //   language1level.style.color = "black";
  //   languag1.style.display = 'flex';
  // }
  // const isExistLanguageInfos2 = userInfo.additional_info.language_infos[2]?.language || userInfo.additional_info.language_infos[2]?.level
  // if (isExistLanguageInfos2) {
  //   language2name.value = userInfo.additional_info?.language_infos[2]?.language;
  //   language2level.value = userInfo.additional_info?.language_infos[2]?.level;
  //   language2level.style.color = "black";
  //   language2.style.display = 'flex';
  // }

  // Award0year.value = userInfo.additional_info?.award_infos[0]?.time;
  // Award0name.value = userInfo.additional_info?.award_infos[0]?.name;

  // const isExistAwardInfos1 = userInfo.additional_info?.award_infos[1]?.time || userInfo.additional_info?.award_infos[1]?.name
  // if (isExistAwardInfos1) {
  //   Award1year.value = userInfo.additional_info?.award_infos[1]?.time;
  //   Award1name.value = userInfo.additional_info?.award_infos[1]?.name;
  //   Award1.style.display = 'flex';
  // }

  // const isExistAwardInfos2 = userInfo.additional_info.award_infos[2]?.time || userInfo.additional_info.award_infos[2]?.name
  // if (isExistAwardInfos2) {
  //   Award2year.value = userInfo.additional_info?.award_infos[2]?.time;
  //   Award2name.value = userInfo.additional_info?.award_infos[2]?.name;
  //   Award2.style.display = 'flex';
  // }

  SelfDescriptionTextArea.value = userInfo.additional_info?.description;
}

async function fetchData() {
  try {
    const response = await fetch(`https://api.jobwizard.ai/profile/get_profile?ms_token=${cookie_ms_token}`);
    if (response.ok) {
      AddInfo_FormTabs.style.opacity = 1;
      const data = await response.json();
      // 在这里处理响应数据
      userInfo = data.data;
      // 执行其他步骤
      dofillUserInfo(userInfo);
      doSomethingElse();
      displayFileList();
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
function isTrueEmail(value) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  // 验证文本内容是否为邮箱
  const isEmail = emailRegex.test(value);

  return isEmail;
}

function isYearInRange(yearString) {
  const year = parseInt(yearString, 10); // 将字符串转换为整数
  return year >= 1900 && year <= 2100; // 判断数字是否在范围内
}


function isRequired(value, element, textId) {
  // Remove all the required actions temporarily
  // if (!value) {
  //   const ErrorInput = document.getElementById(textId);
  //   ErrorInput.innerText = 'Required.';
  //   ErrorInput.style.display = 'flex';
  //   if ((element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'number' || element.type === 'email')) || (element.tagName === 'SELECT') || (element.tagName === 'TEXTAREA')) {
  //     element.style.borderColor = "#c70000";
  //   }
  // }
}

function optMonth(month) {
  let Month = month;
  if (month.length == 1) {
    Month = '0' + month;
  }
  return Month;
}

function cleanErrorText(textIdGroup) {
  for (i = 0; i < textIdGroup.length; i++) {
    const ErrorInput = document.getElementById(textIdGroup[i].textId);
    if ((textIdGroup[i].element.tagName === 'INPUT' && (textIdGroup[i].element.type === 'text' || textIdGroup[i].element.type === 'number' || textIdGroup[i].element.type === 'email')) || (textIdGroup[i].element.tagName === 'SELECT') || (textIdGroup[i].element.tagName === 'TEXTAREA')) {
      textIdGroup[i].element.style.borderColor = "";
    }
    ErrorInput.style.display = 'none';
    ErrorInput.innerText = '';
  }
}

function doSomethingElse() {
  if (saveTab1Button) {
    saveTab1Button.addEventListener('click', function () {
      const Saving = document.getElementById('Saving-1');
      const ToBeSaved = document.getElementById('ToBeSaved-1');
      Saving.style.display = 'flex';
      ToBeSaved.style.display = 'none';
      backTab1.style.pointerEvents = "none";
      var firstNameValue = firstNameInput.value;
      var lastNameValue = lastNameInput.value;
      var phoneNumberValue1 = phoneNumberInput1.value;
      var phoneNumberValue2 = phoneNumberInput2.value;
      console.log(phoneNumberInput1.value, '===phoneNumberInput1.value333333333333===');
      var phoneNumber = phoneNumberValue1 + " " + phoneNumberValue2;
      console.log(phoneNumber, '===phoneNumber99999999===');
      var emailValue = emailInput.value;
      // var dateValue = dateInput.value;
      // var selectMonthValue = selectMonthSelect.options[selectMonthSelect.selectedIndex]?.value;
      // var yearValue = yearInput.value;
      var locationValue = locationInput.value;
      var fullNameValue = fullNameInput.value;
      var addressValue = AddressInput.value;
      var expected_salaryValue = expected_salaryInput.value
      // var birthday = yearValue + " " + selectMonthValue + " " + dateValue;

      const boolean = !firstNameValue || !lastNameValue || !phoneNumberValue2 || !emailValue || !locationValue

      cleanErrorText([
        {
          textId: 'FirstName-AlertText',
          element: firstNameInput,
        },
        {
          textId: 'LastName-AlertText',
          element: lastNameInput,
        },
        {
          textId: 'Phone-AlertText',
          element: phoneNumberInput2,
        },
        {
          textId: 'Email-AlertText',
          element: emailInput,
        },
        {
          textId: 'Location-AlertText',
          element: locationInput,
        }])

      // if (boolean) {
      //   isRequired(firstNameValue, firstNameInput, 'FirstName-AlertText');
      //   isRequired(lastNameValue, lastNameInput, 'LastName-AlertText');
      //   // isRequired(phoneNumberValue1, phoneNumberInput1, 'Phone-AlertText');
      //   isRequired(phoneNumberValue2, phoneNumberInput2, 'Phone-AlertText');
      //   isRequired(emailValue, emailInput, 'Email-AlertText');
      //   isRequired(locationValue, locationInput, 'Location-AlertText');
      //   backTab1.style.pointerEvents = "auto";
      //   Saving.style.display = 'none';
      //   ToBeSaved.style.display = 'flex';
      //   return;
      // }

      if (emailValue) {
        if (!isTrueEmail(emailValue)) {
          const ErrorInput = document.getElementById('Email-AlertText');
          ErrorInput.innerText = 'Invalid email format.';
          ErrorInput.style.display = 'flex';
          emailInput.style.borderColor = "#c70000";
          backTab1.style.pointerEvents = "auto";
          Saving.style.display = 'none';
          ToBeSaved.style.display = 'flex';
          return;
        }
      }

      var url = `https://api.jobwizard.ai/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var data = {
        "basic_info": {
          "first_name": firstNameValue,
          "last_name": lastNameValue,
          "email": emailValue,
          "phone_number": phoneNumber,
          "location": locationValue,
          "full_name": fullNameValue,
          "address": addressValue,
          "expected_salary": expected_salaryValue
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
            backTab1.style.pointerEvents = "auto";
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab2.style.pointerEvents = "auto";
            MenuTab2.click();
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
      backTab2.style.pointerEvents = "none";
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
      var GPA0InputValue = GPA0Input.value;
      var GPA1InputValue = GPA1Input.value;
      var GPA2InputValue = GPA2Input.value;


      var DegreeType0InputValue = DegreeType0Input.options[DegreeType0Input.selectedIndex]?.value;
      var DegreeType1InputValue = DegreeType1Input.options[DegreeType1Input.selectedIndex]?.value;
      var DegreeType2InputValue = DegreeType2Input.options[DegreeType2Input.selectedIndex]?.value;
      var StartDate0Input = optMonth(StartDate0Input0Value) + '-' + StartDate0Input1Value;
      var StartDate1Input = optMonth(StartDate1Input0Value) + '-' + StartDate1Input1Value;
      var StartDate2Input = optMonth(StartDate2Input0Value) + '-' + StartDate2Input1Value;
      var EndDate0Input = optMonth(EndDate0Input0Value) + '-' + EndDate0Input1Value;
      var EndDate1Input = optMonth(EndDate1Input0Value) + '-' + EndDate1Input1Value;
      var EndDate2Input = optMonth(EndDate2Input0Value) + '-' + EndDate2Input1Value;


      var url = `https://api.jobwizard.ai/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var school_infos = [];
      var educationGroup0 = {
        "name": SchoolName0InputValue,
        "major": Major0InputValue,
        "degree": DegreeType0InputValue,
        "start_date": StartDate0Input,
        "end_date": EndDate0Input,
        "school_gpa": GPA0InputValue
      };
      var educationGroup1 = {
        "name": SchoolName1InputValue,
        "major": Major1InputtValue,
        "degree": DegreeType1InputValue,
        "start_date": StartDate1Input,
        "end_date": EndDate1Input,
        "school_gpa": GPA1InputValue
      };
      var educationGroup2 = {
        "name": SchoolName2InputValue,
        "major": Major2InputValue,
        "degree": DegreeType2InputValue,
        "start_date": StartDate2Input,
        "end_date": EndDate2Input,
        "school_gpa": GPA2InputValue
      };
      school_infos.push(educationGroup0);
      if (Education1.style.display === 'block') {
        school_infos.push(educationGroup1);
      }

      if (Education2.style.display === 'block') {
        school_infos.push(educationGroup2);
      }

      function checkTab2Boolean() {
        if (Education1.style.display === 'block' && Education2.style.display === 'block') {
          const boolean = !SchoolName0InputValue || !SchoolName1InputValue || !SchoolName2InputValue || !Major0InputValue || !Major1InputtValue || !Major2InputValue || !DegreeType0InputValue || !DegreeType1InputValue || !DegreeType2InputValue || !StartDate0Input0Value || !StartDate1Input0Value || !StartDate2Input0Value || !StartDate0Input1Value || !StartDate1Input1Value || !StartDate2Input1Value || !EndDate0Input0Value || !EndDate1Input0Value || !EndDate2Input0Value || !EndDate0Input1Value || !EndDate1Input1Value || !EndDate2Input1Value
          return boolean;
        } else if (Education1.style.display === 'block' && Education2.style.display === 'none') {
          const boolean = !SchoolName0InputValue || !SchoolName1InputValue || !Major0InputValue || !Major1InputtValue || !DegreeType0InputValue || !DegreeType1InputValue || !StartDate0Input0Value || !StartDate1Input0Value || !StartDate0Input1Value || !StartDate1Input1Value || !EndDate0Input0Value || !EndDate1Input0Value || !EndDate0Input1Value || !EndDate1Input1Value
          return boolean;
        } else if (Education1.style.display === 'none' && Education2.style.display === 'block') {
          const boolean = !SchoolName0InputValue || !SchoolName2InputValue || !Major0InputValue || !Major2InputValue || !DegreeType0InputValue || !DegreeType2InputValue || !StartDate0Input0Value || !StartDate2Input0Value || !StartDate0Input1Value || !StartDate2Input1Value || !EndDate0Input0Value || !EndDate2Input0Value || !EndDate0Input1Value || !EndDate2Input1Value
          return boolean;
        } else if (Education1.style.display === 'none' && Education2.style.display === 'none') {
          const boolean = !SchoolName0InputValue || !Major0InputValue || !DegreeType0InputValue || !StartDate0Input0Value || !StartDate0Input1Value || !EndDate0Input0Value || !EndDate0Input1Value
          return boolean;
        }
      }
      const boolean = checkTab2Boolean();

      cleanErrorText([
        {
          textId: "SchoolName0-AlertText",
          element: SchoolName0Input,
        },
        {
          textId: 'Major0-AlertText',
          element: Major0Input,
        },
        {
          textId: 'DegreeType0-AlertText',
          element: DegreeType0Input,
        },
        {
          textId: 'EduStartDate0-AlertText',
          element: StartDate0Input0,
        },
        {
          textId: 'EduStartDate0-AlertText',
          element: StartDate0Input1,
        },
        {
          textId: 'EduEndDate0-AlertText',
          element: EndDate0Input0,
        },
        {
          textId: 'EduEndDate0-AlertText',
          element: EndDate0Input1,
        },
        {
          textId: 'SchoolName1-AlertText',
          element: SchoolName1Input,
        },
        {
          textId: 'Major1-AlertText',
          element: Major1Input,
        },
        {
          textId: 'DegreeType1-AlertText',
          element: DegreeType1Input,
        },
        {
          textId: 'EduStartDate1-AlertText',
          element: StartDate1Input0,
        },
        {
          textId: 'EduStartDate1-AlertText',
          element: StartDate1Input1,
        },
        {
          textId: 'EduEndDate1-AlertText',
          element: EndDate1Input0,
        },
        {
          textId: 'EduEndDate1-AlertText',
          element: EndDate1Input1,
        },
        {
          textId: 'SchoolName2-AlertText',
          element: SchoolName2Input,
        },
        {
          textId: 'Major2-AlertText',
          element: Major2Input,
        },
        {
          textId: 'DegreeType2-AlertText',
          element: DegreeType2Input,
        },
        {
          textId: 'EduStartDate2-AlertText',
          element: StartDate2Input0,
        },
        {
          textId: 'EduStartDate2-AlertText',
          element: StartDate2Input1,
        },
        {
          textId: 'EduEndDate2-AlertText',
          element: EndDate2Input0,
        },
        {
          textId: 'EduEndDate2-AlertText',
          element: EndDate2Input1,
        },
      ]);


      // if (boolean) {
      //   if (Education1.style.display === 'block' && Education2.style.display === 'block') {
      //     isRequired(SchoolName0InputValue, SchoolName0Input, 'SchoolName0-AlertText');
      //     isRequired(SchoolName1InputValue, SchoolName1Input, 'SchoolName1-AlertText');
      //     isRequired(SchoolName2InputValue, SchoolName2Input, 'SchoolName2-AlertText');
      //     isRequired(Major0InputValue, Major0Input, 'Major0-AlertText');
      //     isRequired(Major1InputtValue, Major1Input, 'Major1-AlertText');
      //     isRequired(Major2InputValue, Major2Input, 'Major2-AlertText');
      //     isRequired(DegreeType0InputValue, DegreeType0Input, 'DegreeType0-AlertText');
      //     isRequired(DegreeType1InputValue, DegreeType1Input, 'DegreeType1-AlertText');
      //     isRequired(DegreeType2InputValue, DegreeType2Input, 'DegreeType2-AlertText');
      //     isRequired(StartDate0Input0Value, StartDate0Input0, 'EduStartDate0-AlertText');
      //     isRequired(StartDate1Input0Value, StartDate1Input0, 'EduStartDate1-AlertText');
      //     isRequired(StartDate2Input0Value, StartDate2Input0, 'EduStartDate2-AlertText');
      //     isRequired(StartDate0Input1Value, StartDate0Input1, 'EduStartDate0-AlertText');
      //     isRequired(StartDate1Input1Value, StartDate1Input1, 'EduStartDate1-AlertText');
      //     isRequired(StartDate2Input1Value, StartDate2Input1, 'EduStartDate2-AlertText');
      //     isRequired(EndDate0Input0Value, EndDate0Input0, 'EduEndDate0-AlertText');
      //     isRequired(EndDate1Input0Value, EndDate1Input0, 'EduEndDate1-AlertText');
      //     isRequired(EndDate2Input0Value, EndDate2Input0, 'EduEndDate2-AlertText');
      //     isRequired(EndDate0Input1Value, EndDate0Input1, 'EduEndDate0-AlertText');
      //     isRequired(EndDate1Input1Value, EndDate1Input1, 'EduEndDate1-AlertText');
      //     isRequired(EndDate2Input1Value, EndDate2Input1, 'EduEndDate2-AlertText');

      //   } else if (Education1.style.display === 'block' && Education2.style.display === 'none') {
      //     isRequired(SchoolName0InputValue, SchoolName0Input, 'SchoolName0-AlertText');
      //     isRequired(SchoolName1InputValue, SchoolName1Input, 'SchoolName1-AlertText');
      //     isRequired(Major0InputValue, Major0Input, 'Major0-AlertText');
      //     isRequired(Major1InputtValue, Major1Input, 'Major1-AlertText');
      //     isRequired(DegreeType0InputValue, DegreeType0Input, 'DegreeType0-AlertText');
      //     isRequired(DegreeType1InputValue, DegreeType1Input, 'DegreeType1-AlertText');
      //     isRequired(StartDate0Input0Value, StartDate0Input0, 'EduStartDate0-AlertText');
      //     isRequired(StartDate1Input0Value, StartDate1Input0, 'EduStartDate1-AlertText');
      //     isRequired(StartDate0Input1Value, StartDate0Input1, 'EduStartDate0-AlertText');
      //     isRequired(StartDate1Input1Value, StartDate1Input1, 'EduStartDate1-AlertText');
      //     isRequired(EndDate0Input0Value, EndDate0Input0, 'EduEndDate0-AlertText');
      //     isRequired(EndDate1Input0Value, EndDate1Input0, 'EduEndDate1-AlertText');
      //     isRequired(EndDate0Input1Value, EndDate0Input1, 'EduEndDate0-AlertText');
      //     isRequired(EndDate1Input1Value, EndDate1Input1, 'EduEndDate1-AlertText');

      //   } else if (Education1.style.display === 'none' && Education2.style.display === 'block') {
      //     isRequired(SchoolName0InputValue, SchoolName0Input, 'SchoolName0-AlertText');
      //     isRequired(SchoolName2InputValue, SchoolName2Input, 'SchoolName2-AlertText');
      //     isRequired(Major0InputValue, Major0Input, 'Major0-AlertText');
      //     isRequired(Major2InputValue, Major2Input, 'Major2-AlertText');
      //     isRequired(DegreeType0InputValue, DegreeType0Input, 'DegreeType0-AlertText');
      //     isRequired(DegreeType2InputValue, DegreeType2Input, 'DegreeType2-AlertText');
      //     isRequired(StartDate0Input0Value, StartDate0Input0, 'EduStartDate0-AlertText');
      //     isRequired(StartDate2Input0Value, StartDate2Input0, 'EduStartDate2-AlertText');
      //     isRequired(StartDate0Input1Value, StartDate0Input1, 'EduStartDate0-AlertText');
      //     isRequired(StartDate2Input1Value, StartDate2Input1, 'EduStartDate2-AlertText');
      //     isRequired(EndDate0Input0Value, EndDate0Input0, 'EduEndDate0-AlertText');
      //     isRequired(EndDate2Input0Value, EndDate2Input0, 'EduEndDate2-AlertText');
      //     isRequired(EndDate0Input1Value, EndDate0Input1, 'EduEndDate0-AlertText');
      //     isRequired(EndDate2Input1Value, EndDate2Input1, 'EduEndDate2-AlertText');

      //   } else if (Education1.style.display === 'none' && Education2.style.display === 'none') {
      //     isRequired(SchoolName0InputValue, SchoolName0Input, 'SchoolName0-AlertText');
      //     isRequired(Major0InputValue, Major0Input, 'Major0-AlertText');
      //     isRequired(DegreeType0InputValue, DegreeType0Input, 'DegreeType0-AlertText');
      //     isRequired(StartDate0Input0Value, StartDate0Input0, 'EduStartDate0-AlertText');
      //     isRequired(StartDate0Input1Value, StartDate0Input1, 'EduStartDate0-AlertText');
      //     isRequired(EndDate0Input0Value, EndDate0Input0, 'EduEndDate0-AlertText');
      //     isRequired(EndDate0Input1Value, EndDate0Input1, 'EduEndDate0-AlertText');
      //   }
      //   backTab2.style.pointerEvents = "auto";
      //   Saving.style.display = 'none';
      //   ToBeSaved.style.display = 'flex';
      //   return;
      // }

      if (Education1.style.display === 'block' && Education2.style.display === 'block') {
        let Education1count = 0;
        if (StartDate0Input1Value) {
          const isInRange = isYearInRange(StartDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate0Input1.style.borderColor = "#c70000";
            Education1count++;
          }
        }

        if (EndDate0Input1Value) {
          const isInRange = isYearInRange(EndDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate0Input1.style.borderColor = "#c70000";
            Education1count++;
          }
        }

        if (StartDate1Input1Value) {
          const isInRange = isYearInRange(StartDate1Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate1-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate1Input1.style.borderColor = "#c70000";
            Education1count++;
          }
        }

        if (EndDate1Input1Value) {
          const isInRange = isYearInRange(EndDate1Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate1-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate1Input1.style.borderColor = "#c70000";
            Education1count++;
          }
        }


        if (StartDate2Input1Value) {
          const isInRange = isYearInRange(StartDate2Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate2-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate2Input1.style.borderColor = "#c70000";
            Education1count++;
          }
        }

        if (EndDate2Input1Value) {
          const isInRange = isYearInRange(EndDate2Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate2-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate2Input1.style.borderColor = "#c70000";
            Education1count++;
          }
        }
        if (Education1count > 0) {
          backTab2.style.pointerEvents = "auto";
          Saving.style.display = 'none';
          ToBeSaved.style.display = 'flex';
          return;
        }
      } else if (Education1.style.display === 'block' && Education2.style.display === 'none') {
        let Education2count = 0;
        if (StartDate0Input1Value) {
          const isInRange = isYearInRange(StartDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate0Input1.style.borderColor = "#c70000";
            Education2count++;
          }
        }

        if (EndDate0Input1Value) {
          const isInRange = isYearInRange(EndDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate0Input1.style.borderColor = "#c70000";
            Education2count++;
          }
        }

        if (StartDate1Input1Value) {
          const isInRange = isYearInRange(StartDate1Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate1-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate1Input1.style.borderColor = "#c70000";
            Education2count++;
          }
        }

        if (EndDate1Input1Value) {
          const isInRange = isYearInRange(EndDate1Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate1-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate1Input1.style.borderColor = "#c70000";
            Education2count++;
          }
        }
        if (Education2count > 0) {
          backTab2.style.pointerEvents = "auto";
          Saving.style.display = 'none';
          ToBeSaved.style.display = 'flex';
          return;
        }

      } else if (Education1.style.display === 'none' && Education2.style.display === 'block') {
        let Education3count = 0;
        if (StartDate0Input1Value) {
          const isInRange = isYearInRange(StartDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate0Input1.style.borderColor = "#c70000";
            Education3count++;
          }
        }

        if (EndDate0Input1Value) {
          const isInRange = isYearInRange(EndDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate0Input1.style.borderColor = "#c70000";
            Education3count++;
          }
        }

        if (StartDate2Input1Value) {
          const isInRange = isYearInRange(StartDate2Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate2-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate2Input1.style.borderColor = "#c70000";
            Education3count++;
          }
        }

        if (EndDate2Input1Value) {
          const isInRange = isYearInRange(EndDate2Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate2-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate2Input1.style.borderColor = "#c70000";
            Education3count++;
          }
        }
        if (Education3count > 0) {
          backTab2.style.pointerEvents = "auto";
          Saving.style.display = 'none';
          ToBeSaved.style.display = 'flex';
          return;
        }
      } else if (Education1.style.display === 'none' && Education2.style.display === 'none') {
        let Education4count = 0;
        if (StartDate0Input1Value) {
          const isInRange = isYearInRange(StartDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduStartDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            StartDate0Input1.style.borderColor = "#c70000";
            Education4count++;
          }
        }

        if (EndDate0Input1Value) {
          const isInRange = isYearInRange(EndDate0Input1Value);
          if (!isInRange) {
            const ErrorInput = document.getElementById('EduEndDate0-AlertText');
            ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
            ErrorInput.style.display = 'flex';
            EndDate0Input1.style.borderColor = "#c70000";
            Education4count++;
          }
        }
        if (Education4count > 0) {
          backTab2.style.pointerEvents = "auto";
          Saving.style.display = 'none';
          ToBeSaved.style.display = 'flex';
          return;
        }
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
            backTab2.style.pointerEvents = "auto";
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab3.style.pointerEvents = "auto";
            MenuTab3.click();
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
      backTab3.style.pointerEvents = "none";
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

      var CompanyName3Value = CompanyName3.value;
      var WorkLocation3Value = WorkLocation3.value;
      var Position3Value = Position3.value;
      var WorkType3Value = WorkType3.value;
      var WorkStartDate3MonthValue = WorkStartDate3Month.value;
      var WorkStartDate3YearValue = WorkStartDate3Year.value;
      var WorkEndDate3MonthValue = WorkEndDate3Month.value;
      var WorkEndDate3YearValue = WorkEndDate3Year.value;
      var WorkDescription3textareaValue = WorkDescription3textarea.value;

      var CompanyName4Value = CompanyName4.value;
      var WorkLocation4Value = WorkLocation4.value;
      var Position4Value = Position4.value;
      var WorkType4Value = WorkType4.value;
      var WorkStartDate4MonthValue = WorkStartDate4Month.value;
      var WorkStartDate4YearValue = WorkStartDate4Year.value;
      var WorkEndDate4MonthValue = WorkEndDate4Month.value;
      var WorkEndDate4YearValue = WorkEndDate4Year.value;
      var WorkDescription4textareaValue = WorkDescription4textarea.value;

      var WorkType0Value = WorkType0.options[WorkType0.selectedIndex]?.value;
      var WorkType1Value = WorkType1.options[WorkType1.selectedIndex]?.value;
      var WorkType2Value = WorkType2.options[WorkType2.selectedIndex]?.value;
      var WorkType3Value = WorkType3.options[WorkType3.selectedIndex]?.value;
      var WorkType4Value = WorkType4.options[WorkType4.selectedIndex]?.value;


      var WorkStartDate0Value = optMonth(WorkStartDate0MonthValue) + '-' + WorkStartDate0YearValue;
      var WorkStartDate1Value = optMonth(WorkStartDate1MonthValue) + '-' + WorkStartDate1YearValue;
      var WorkStartDate2Value = optMonth(WorkStartDate2MonthValue) + '-' + WorkStartDate2YearValue;
      var WorkStartDate3Value = optMonth(WorkStartDate3MonthValue) + '-' + WorkStartDate3YearValue;
      var WorkStartDate4Value = optMonth(WorkStartDate4MonthValue) + '-' + WorkStartDate4YearValue;

      var WorkEndDate0Value = optMonth(WorkEndDate0MonthValue) + '-' + WorkEndDate0YearValue;
      var WorkEndDate1Value = optMonth(WorkEndDate1MonthValue) + '-' + WorkEndDate1YearValue;
      var WorkEndDate2Value = optMonth(WorkEndDate2MonthValue) + '-' + WorkEndDate2YearValue;
      var WorkEndDate3Value = optMonth(WorkEndDate3MonthValue) + '-' + WorkEndDate3YearValue;
      var WorkEndDate4Value = optMonth(WorkEndDate4MonthValue) + '-' + WorkEndDate4YearValue;


      var url = `https://api.jobwizard.ai/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
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
      var job_info3 = {
        "company_name": CompanyName3Value,
        "location": WorkLocation3Value,
        "position": Position3Value,
        "work_type": WorkType3Value,
        "now_working": false,
        "description": WorkDescription3textareaValue,
        "start_date": WorkStartDate3Value,
        "end_date": WorkEndDate3Value
      };
      var job_info4 = {
        "company_name": CompanyName4Value,
        "location": WorkLocation4Value,
        "position": Position4Value,
        "work_type": WorkType4Value,
        "now_working": false,
        "description": WorkDescription4textareaValue,
        "start_date": WorkStartDate4Value,
        "end_date": WorkEndDate4Value
      };
      job_infos.push(job_info0);
      if (WorkExperience1.style.display === 'block') {
        job_infos.push(job_info1);
      }

      if (WorkExperience2.style.display === 'block') {
        job_infos.push(job_info2);
      }

      if (WorkExperience3.style.display === 'block') {
        job_infos.push(job_info3);
      }

      if (WorkExperience4.style.display === 'block') {
        job_infos.push(job_info4);
      }



      function checkTab3Boolean() {
        if (WorkEndDate0stillworValue) {
          if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'block') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue || !CompanyName1Value || !WorkLocation1Value || !Position1Value || !WorkType1Value || !WorkDescription1textareaValue || !WorkStartDate1MonthValue || !WorkStartDate1YearValue || !WorkEndDate1MonthValue || !WorkEndDate1YearValue || !CompanyName2Value || !WorkLocation2Value || !Position2Value || !WorkType2Value || !WorkDescription2textareaValue || !WorkStartDate2MonthValue || !WorkStartDate2YearValue || !WorkEndDate2MonthValue || !WorkEndDate2YearValue
            return boolean;
          } else if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'none') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue || !CompanyName1Value || !WorkLocation1Value || !Position1Value || !WorkType1Value || !WorkDescription1textareaValue || !WorkStartDate1MonthValue || !WorkStartDate1YearValue || !WorkEndDate1MonthValue || !WorkEndDate1YearValue
            return boolean;
          } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'block') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue || !CompanyName2Value || !WorkLocation2Value || !Position2Value || !WorkType2Value || !WorkDescription2textareaValue || !WorkStartDate2MonthValue || !WorkStartDate2YearValue || !WorkEndDate2MonthValue || !WorkEndDate2YearValue

            return boolean;
          } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'none') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue

            return boolean;
          }
        } else {
          if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'block') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue || !WorkEndDate0MonthValue || !WorkEndDate0YearValue || !CompanyName1Value || !WorkLocation1Value || !Position1Value || !WorkType1Value || !WorkDescription1textareaValue || !WorkStartDate1MonthValue || !WorkStartDate1YearValue || !WorkEndDate1MonthValue || !WorkEndDate1YearValue || !CompanyName2Value || !WorkLocation2Value || !Position2Value || !WorkType2Value || !WorkDescription2textareaValue || !WorkStartDate2MonthValue || !WorkStartDate2YearValue || !WorkEndDate2MonthValue || !WorkEndDate2YearValue
            return boolean;
          } else if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'none') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue || !WorkEndDate0MonthValue || !WorkEndDate0YearValue || !CompanyName1Value || !WorkLocation1Value || !Position1Value || !WorkType1Value || !WorkDescription1textareaValue || !WorkStartDate1MonthValue || !WorkStartDate1YearValue || !WorkEndDate1MonthValue || !WorkEndDate1YearValue
            return boolean;
          } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'block') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue || !WorkEndDate0MonthValue || !WorkEndDate0YearValue || !CompanyName2Value || !WorkLocation2Value || !Position2Value || !WorkType2Value || !WorkDescription2textareaValue || !WorkStartDate2MonthValue || !WorkStartDate2YearValue || !WorkEndDate2MonthValue || !WorkEndDate2YearValue

            return boolean;
          } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'none') {
            const boolean = !CompanyName0Value || !WorkLocation0Value || !Position0Value || !WorkType0Value || !WorkDescription0textareaValue || !WorkStartDate0MonthValue || !WorkStartDate0YearValue || !WorkEndDate0MonthValue || !WorkEndDate0YearValue

            return boolean;
          }
        }
      }
      const boolean = checkTab3Boolean();

      cleanErrorText([
        {
          textId: "CompanyName0-AlertText",
          element: CompanyName0,
        },
        {
          textId: 'WorkLocation0-AlertText',
          element: WorkLocation0,
        },
        {
          textId: 'Position0-AlertText',
          element: Position0,
        },
        {
          textId: 'WorkType0-AlertText',
          element: WorkType0,
        },
        {
          textId: 'WorkStartDate0-AlertText',
          element: WorkStartDate0Month,
        },
        {
          textId: 'WorkStartDate0-AlertText',
          element: WorkStartDate0Year,
        }, {
          textId: 'WorkEndDate0-AlertText',
          element: WorkEndDate0Month,
        },
        {
          textId: 'WorkEndDate0-AlertText',
          element: WorkEndDate0Year,
        },
        {
          textId: 'WorkDescription0-AlertText',
          element: WorkDescription0textarea,
        },
        {
          textId: 'CompanyName1-AlertText',
          element: CompanyName1,
        },
        {
          textId: 'WorkLocation1-AlertText',
          element: WorkLocation1,
        },
        {
          textId: 'Position1-AlertText',
          element: Position1,
        },
        {
          textId: 'WorkType1-AlertText',
          element: WorkType1,
        },
        {
          textId: 'WorkStartDate1-AlertText',
          element: WorkStartDate1Month,
        },
        {
          textId: 'WorkStartDate1-AlertText',
          element: WorkStartDate1Year,
        },
        {
          textId: 'WorkEndDate1-AlertText',
          element: WorkEndDate1Month,
        },
        {
          textId: 'WorkEndDate1-AlertText',
          element: WorkEndDate1Year,
        },
        {
          textId: 'WorkDescription1-AlertText',
          element: WorkDescription1textarea,
        },
        {
          textId: 'CompanyName2-AlertText',
          element: CompanyName2,
        },
        {
          textId: 'WorkLocation2-AlertText',
          element: WorkLocation2,
        },
        {
          textId: 'Position2-AlertText',
          element: Position2,
        },
        {
          textId: 'WorkType2-AlertText',
          element: WorkType2,
        },
        {
          textId: 'WorkStartDate2-AlertText',
          element: WorkStartDate2Month,
        },
        {
          textId: 'WorkStartDate2-AlertText',
          element: WorkStartDate2Year,
        },
        {
          textId: 'WorkEndDate2-AlertText',
          element: WorkEndDate2Month,
        }, {
          textId: 'WorkEndDate2-AlertText',
          element: WorkEndDate2Year,
        },
        {
          textId: 'WorkDescription2-AlertText',
          element: WorkDescription2textarea,
        },
      ]);


      // if (boolean) {
      //   if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'block') {
      //     isRequired(CompanyName0Value, CompanyName0, 'CompanyName0-AlertText');
      //     isRequired(CompanyName1Value, CompanyName1, 'CompanyName1-AlertText');
      //     isRequired(CompanyName2Value, CompanyName2, 'CompanyName2-AlertText');
      //     isRequired(WorkLocation0Value, WorkLocation0, 'WorkLocation0-AlertText');
      //     isRequired(WorkLocation1Value, WorkLocation1, 'WorkLocation1-AlertText');
      //     isRequired(WorkLocation2Value, WorkLocation2, 'WorkLocation2-AlertText');
      //     isRequired(Position0Value, Position0, 'Position0-AlertText');
      //     isRequired(Position1Value, Position1, 'Position1-AlertText');
      //     isRequired(Position2Value, Position2, 'Position2-AlertText');
      //     isRequired(WorkType0Value, WorkType0, 'WorkType0-AlertText');
      //     isRequired(WorkType1Value, WorkType1, 'WorkType1-AlertText');
      //     isRequired(WorkType2Value, WorkType2, 'WorkType2-AlertText');
      //     isRequired(WorkStartDate0MonthValue, WorkStartDate0Month, 'WorkStartDate0-AlertText');
      //     isRequired(WorkStartDate1MonthValue, WorkStartDate1Month, 'WorkStartDate1-AlertText');
      //     isRequired(WorkStartDate2MonthValue, WorkStartDate2Month, 'WorkStartDate2-AlertText');
      //     isRequired(WorkStartDate0YearValue, WorkStartDate0Year, 'WorkStartDate0-AlertText');
      //     isRequired(WorkStartDate1YearValue, WorkStartDate1Year, 'WorkStartDate1-AlertText');
      //     isRequired(WorkStartDate2YearValue, WorkStartDate2Year, 'WorkStartDate2-AlertText');
      //     isRequired(WorkEndDate1MonthValue, WorkEndDate1Month, 'WorkEndDate1-AlertText');
      //     isRequired(WorkEndDate2MonthValue, WorkEndDate2Month, 'WorkEndDate2-AlertText');
      //     isRequired(WorkEndDate1YearValue, WorkEndDate1Year, 'WorkEndDate1-AlertText');
      //     isRequired(WorkEndDate2YearValue, WorkEndDate2Year, 'WorkEndDate2-AlertText');
      //     isRequired(WorkDescription0textareaValue, WorkDescription0textarea, 'WorkDescription0-AlertText');
      //     isRequired(WorkDescription1textareaValue, WorkDescription1textarea, 'WorkDescription1-AlertText');
      //     isRequired(WorkDescription2textareaValue, WorkDescription2textarea, 'WorkDescription2-AlertText');
      //     if (!WorkEndDate0stillworValue) {
      //       isRequired(WorkEndDate0MonthValue, WorkEndDate0Month, 'WorkEndDate0-AlertText');
      //       isRequired(WorkEndDate0YearValue, WorkEndDate0Year, 'WorkEndDate0-AlertText');
      //     }

      //   } else if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'none') {
      //     isRequired(CompanyName0Value, CompanyName0, 'CompanyName0-AlertText');
      //     isRequired(CompanyName1Value, CompanyName1, 'CompanyName1-AlertText');
      //     isRequired(WorkLocation0Value, WorkLocation0, 'WorkLocation0-AlertText');
      //     isRequired(WorkLocation1Value, WorkLocation1, 'WorkLocation1-AlertText');
      //     isRequired(Position0Value, Position0, 'Position0-AlertText');
      //     isRequired(Position1Value, Position1, 'Position1-AlertText');
      //     isRequired(WorkType0Value, WorkType0, 'WorkType0-AlertText');
      //     isRequired(WorkType1Value, WorkType1, 'WorkType1-AlertText');
      //     isRequired(WorkStartDate0MonthValue, WorkStartDate0Month, 'WorkStartDate0-AlertText');
      //     isRequired(WorkStartDate1MonthValue, WorkStartDate1Month, 'WorkStartDate1-AlertText');
      //     isRequired(WorkStartDate0YearValue, WorkStartDate0Year, 'WorkStartDate0-AlertText');
      //     isRequired(WorkStartDate1YearValue, WorkStartDate1Year, 'WorkStartDate1-AlertText');
      //     isRequired(WorkEndDate1MonthValue, WorkEndDate1Month, 'WorkEndDate1-AlertText');
      //     isRequired(WorkEndDate1YearValue, WorkEndDate1Year, 'WorkEndDate1-AlertText');
      //     isRequired(WorkDescription0textareaValue, WorkDescription0textarea, 'WorkDescription0-AlertText');
      //     isRequired(WorkDescription1textareaValue, WorkDescription1textarea, 'WorkDescription1-AlertText');
      //     if (!WorkEndDate0stillworValue) {
      //       isRequired(WorkEndDate0MonthValue, WorkEndDate0Month, 'WorkEndDate0-AlertText');
      //       isRequired(WorkEndDate0YearValue, WorkEndDate0Year, 'WorkEndDate0-AlertText');
      //     }
      //   } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'block') {
      //     isRequired(CompanyName0Value, CompanyName0, 'CompanyName0-AlertText');
      //     isRequired(CompanyName2Value, CompanyName2, 'CompanyName2-AlertText');
      //     isRequired(WorkLocation0Value, WorkLocation0, 'WorkLocation0-AlertText');
      //     isRequired(WorkLocation2Value, WorkLocation2, 'WorkLocation2-AlertText');
      //     isRequired(Position0Value, Position0, 'Position0-AlertText');
      //     isRequired(Position2Value, Position2, 'Position2-AlertText');
      //     isRequired(WorkType0Value, WorkType0, 'WorkType0-AlertText');
      //     isRequired(WorkType2Value, WorkType2, 'WorkType2-AlertText');
      //     isRequired(WorkStartDate0MonthValue, WorkStartDate0Month, 'WorkStartDate0-AlertText');
      //     isRequired(WorkStartDate2MonthValue, WorkStartDate2Month, 'WorkStartDate2-AlertText');
      //     isRequired(WorkStartDate0YearValue, WorkStartDate0Year, 'WorkStartDate0-AlertText');
      //     isRequired(WorkStartDate2YearValue, WorkStartDate2Year, 'WorkStartDate2-AlertText');
      //     isRequired(WorkEndDate2MonthValue, WorkEndDate2Month, 'WorkEndDate2-AlertText');
      //     isRequired(WorkEndDate2YearValue, WorkEndDate2Year, 'WorkEndDate2-AlertText');
      //     isRequired(WorkDescription0textareaValue, WorkDescription0textarea, 'WorkDescription0-AlertText');
      //     isRequired(WorkDescription2textareaValue, WorkDescription2textarea, 'WorkDescription2-AlertText');
      //     if (!WorkEndDate0stillworValue) {
      //       isRequired(WorkEndDate0MonthValue, WorkEndDate0Month, 'WorkEndDate0-AlertText');
      //       isRequired(WorkEndDate0YearValue, WorkEndDate0Year, 'WorkEndDate0-AlertText');
      //     }
      //   } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'none') {
      //     isRequired(CompanyName0Value, CompanyName0, 'CompanyName0-AlertText');
      //     isRequired(WorkLocation0Value, WorkLocation0, 'WorkLocation0-AlertText');
      //     isRequired(Position0Value, Position0, 'Position0-AlertText');
      //     isRequired(WorkType0Value, WorkType0, 'WorkType0-AlertText');
      //     isRequired(WorkStartDate0MonthValue, WorkStartDate0Month, 'WorkStartDate0-AlertText');
      //     isRequired(WorkStartDate0YearValue, WorkStartDate0Year, 'WorkStartDate0-AlertText');
      //     isRequired(WorkDescription0textareaValue, WorkDescription0textarea, 'WorkDescription0-AlertText');
      //     if (!WorkEndDate0stillworValue) {
      //       isRequired(WorkEndDate0MonthValue, WorkEndDate0Month, 'WorkEndDate0-AlertText');
      //       isRequired(WorkEndDate0YearValue, WorkEndDate0Year, 'WorkEndDate0-AlertText');
      //     }
      //   }
      //   backTab3.style.pointerEvents = "auto";
      //   Saving.style.display = 'none';
      //   ToBeSaved.style.display = 'flex';
      //   return;
      // }

      // if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'block') {
      //   let work1count = 0;
      //   if (WorkStartDate0YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate0Year.style.borderColor = "#c70000";
      //       work1count++;
      //     }
      //   }

      //   if (WorkEndDate0YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate0Year.style.borderColor = "#c70000";
      //       work1count++;
      //     }
      //   }

      //   if (WorkStartDate1YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate1YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate1-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate1Year.style.borderColor = "#c70000";
      //       work1count++;
      //     }
      //   }

      //   if (WorkEndDate1YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate1YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate1-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate1Year.style.borderColor = "#c70000";
      //       work1count++;
      //     }
      //   }


      //   if (WorkStartDate2YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate2YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate2-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate2Year.style.borderColor = "#c70000";
      //       work1count++;
      //     }
      //   }

      //   if (WorkEndDate2YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate2YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate2-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate2Year.style.borderColor = "#c70000";
      //       work1count++;
      //     }
      //   }
      //   if (work1count > 0) {
      //     backTab3.style.pointerEvents = "auto";
      //     Saving.style.display = 'none';
      //     ToBeSaved.style.display = 'flex';
      //     return;
      //   }
      // } else if (WorkExperience1.style.display === 'block' && WorkExperience2.style.display === 'none') {
      //   let work2count = 0;
      //   if (WorkStartDate0YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate0Year.style.borderColor = "#c70000";
      //       work2count++;
      //     }
      //   }

      //   if (WorkEndDate0YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate0Year.style.borderColor = "#c70000";
      //       work2count++;
      //     }
      //   }

      //   if (WorkStartDate1YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate1YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate1-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate1Year.style.borderColor = "#c70000";
      //       work2count++;
      //     }
      //   }

      //   if (WorkEndDate1YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate1YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate1-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate1Year.style.borderColor = "#c70000";
      //       work2count++;
      //     }
      //   }

      //   if (work2count > 0) {
      //     backTab3.style.pointerEvents = "auto";
      //     Saving.style.display = 'none';
      //     ToBeSaved.style.display = 'flex';
      //     return;
      //   }
      // } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'block') {
      //   let work3count = 0;
      //   if (WorkStartDate0YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate0Year.style.borderColor = "#c70000";
      //       work3count++;
      //     }
      //   }

      //   if (WorkEndDate0YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate0Year.style.borderColor = "#c70000";
      //       work3count++;
      //     }
      //   }

      //   if (WorkStartDate2YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate2YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate2-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate2Year.style.borderColor = "#c70000";
      //       work3count++;
      //     }
      //   }

      //   if (WorkEndDate2YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate2YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate2-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate2Year.style.borderColor = "#c70000";
      //       work3count++;
      //     }
      //   }

      //   if (work3count > 0) {
      //     backTab3.style.pointerEvents = "auto";
      //     Saving.style.display = 'none';
      //     ToBeSaved.style.display = 'flex';
      //     return;
      //   }
      // } else if (WorkExperience1.style.display === 'none' && WorkExperience2.style.display === 'none') {
      //   let work4count = 0;
      //   if (WorkStartDate0YearValue) {
      //     const isInRange = isYearInRange(WorkStartDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkStartDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkStartDate0Year.style.borderColor = "#c70000";
      //       work4count++;
      //     }
      //   }

      //   if (WorkEndDate0YearValue) {
      //     const isInRange = isYearInRange(WorkEndDate0YearValue);
      //     if (!isInRange) {
      //       const ErrorInput = document.getElementById('WorkEndDate0-AlertText');
      //       ErrorInput.innerText = 'Please enter a year between 1900 and 2100.';
      //       ErrorInput.style.display = 'flex';
      //       WorkEndDate0Year.style.borderColor = "#c70000";
      //       work4count++;
      //     }
      //   }

      //   if (work4count > 0) {
      //     backTab3.style.pointerEvents = "auto";
      //     Saving.style.display = 'none';
      //     ToBeSaved.style.display = 'flex';
      //     return;
      //   }
      // }

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
            backTab3.style.pointerEvents = "auto";
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab5.style.pointerEvents = "auto";
            MenuTab5.click();
          }

          return response.json();
        }).catch(error => {
        });
    });
  }
  // if (saveTab4Button) {
  //   saveTab4Button.addEventListener('click', function () {
  //     let Saving = document.getElementById('Saving-5');
  //     let ToBeSaved = document.getElementById('ToBeSaved-5');
  //     backTab4.style.pointerEvents = "none";
  //     Saving.style.display = 'flex';
  //     ToBeSaved.style.display = 'none';
  //     var CitizenshipValue = Citizenship.value;
  //     var USVisaTypeOption = USVisaTyoeSelect.options[USVisaTyoeSelect.selectedIndex]?.value;

  //     const boolean = !CitizenshipValue || !USVisaTypeOption

  //     cleanErrorText([
  //       {
  //         textId: 'Citizenship-AlertText',
  //         element: Citizenship,
  //       },
  //       {
  //         textId: 'USVisaType-AlertText',
  //         element: USVisaTyoeSelect,
  //       }
  //     ])

  //     if (boolean) {
  //       isRequired(CitizenshipValue, Citizenship, 'Citizenship-AlertText');
  //       isRequired(USVisaTypeOption, USVisaTyoeSelect, 'USVisaType-AlertText');

  //       backTab4.style.pointerEvents = "auto";
  //       Saving.style.display = 'none';
  //       ToBeSaved.style.display = 'flex';
  //       return;
  //     }

  //     var url = `https://api.jobwizard.ai/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
  //     var data = {
  //       "legal_info": {
  //         "citizenship": CitizenshipValue,
  //         "work_visa_type": USVisaTypeOption,
  //         "need_sponsorship": needSponsorship.checked,
  //         "has_criminal_record": hasCriminalRecord.checked,
  //         "pending_criminal_case": pendingCriminalCase.checked
  //       }
  //     };
  //     var options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     };

  //     if (!cookie_ms_token) {
  //       return;
  //     }


  //     fetch(url, options)
  //       .then(response => {
  //         if (response.status == 200) {
  //           backTab4.style.pointerEvents = "auto";
  //           let Saving = document.getElementById('Saving-5');
  //           let ToBeSaved = document.getElementById('ToBeSaved-5');
  //           Saving.style.display = 'none';
  //           ToBeSaved.style.display = 'flex';
  //           MenuTab5.style.pointerEvents = "auto";
  //           MenuTab5.click();
  //         }

  //         return response.json();
  //       }).catch(error => {
  //       });
  //   });
  // }

  if (saveTab5Button) {
    saveTab5Button.addEventListener('click', function () {
      let Saving = document.getElementById('Saving-4');
      let ToBeSaved = document.getElementById('ToBeSaved-4');
      backTab5.style.pointerEvents = "none";
      Saving.style.display = 'flex';
      ToBeSaved.style.display = 'none';
      var raceOption = raceSelect.options[raceSelect.selectedIndex]?.value;
      var genderOption = genderSelect.options[genderSelect.selectedIndex]?.value;
      var ReligionOption = ReligionSelect.options[ReligionSelect.selectedIndex]?.value;

      const boolean = !raceOption || !genderOption || !ReligionOption

      cleanErrorText([
        {
          textId: 'Race-AlertText',
          element: raceSelect,
        },
        {
          textId: 'Gender-AlertText',
          element: genderSelect,
        },
        {
          textId: 'Religion-AlertText',
          element: ReligionSelect,
        }
      ])

      // if (boolean) {
      //   isRequired(raceOption, raceSelect, 'Race-AlertText');
      //   isRequired(genderOption, genderSelect, 'Gender-AlertText');
      //   isRequired(ReligionOption, ReligionSelect, 'Religion-AlertText');

      //   backTab5.style.pointerEvents = "auto";
      //   Saving.style.display = 'none';
      //   ToBeSaved.style.display = 'flex';
      //   return;
      // }

      var url = `https://api.jobwizard.ai/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var data = {
        "dei_info": {
          "agree_to_provide_dei": identificationInput.checked,
          "race": raceOption,
          "gender": genderOption,
          "religion": ReligionOption,
          "disability": disabilityInput.checked,
          "veteran": veteranInput.checked
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
            backTab5.style.pointerEvents = "auto";
            Saving.style.display = 'none';
            ToBeSaved.style.display = 'flex';
            MenuTab6.style.pointerEvents = "auto";
            MenuTab6.click();
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
      backTab6.style.pointerEvents = "none";
      Saving.style.display = 'flex';
      ToBeSaved.style.display = 'none';
      var LinkedinURLValue = LinkedinURL.value;
      var GitHubURLValue = GitHubURL.value;
      var PortfolioURLValue = PortfolioURL.value;
      var PersonalWebsiteURLValue = PersonalWebsiteURL.value
      // var language0nameValue = language0name.value;
      // var language1nameValue = language1name.value;
      // var language2nameValue = language2name.value;
      // var language0levelValue = language0level.options[language0level.selectedIndex]?.value;
      // var language1levelValue = language1level.options[language1level.selectedIndex]?.value;
      // var language2levelValue = language2level.options[language2level.selectedIndex]?.value;
      var SelfDescriptionTextAreaValue = SelfDescriptionTextArea.value;
      // var Award0yearValue = Award0year.value;
      // var Award1yearValue = Award1year.value;
      // var Award2yearValue = Award2year.value;
      // var Award0nameValue = Award0name.value;
      // var Award1nameValue = Award1name.value;
      // var Award2nameValue = Award2name.value;


      var url = `https://api.jobwizard.ai/profile/update_profile?` + '&ms_token=' + cookie_ms_token;
      var language_infos = [];
      // var language_info0 = {
      //   "language": language0nameValue,
      //   "level": language0levelValue
      // };
      // var language_info1 = {
      //   "language": language1nameValue,
      //   "level": language1levelValue
      // };
      // var language_info2 = {
      //   "language": language2nameValue,
      //   "level": language2levelValue
      // };

      var award_infos = [];
      // var award_info0 = {
      //   "time": Award0yearValue,
      //   "name": Award0nameValue
      // };
      // var award_info1 = {
      //   "time": Award1yearValue,
      //   "name": Award1nameValue
      // };
      // var award_info2 = {
      //   "time": Award2yearValue,
      //   "name": Award2nameValue
      // };
      // language_infos.push(language_info0);
      // if (languag1.style.display === 'flex') {
      //   language_infos.push(language_info1);
      // }

      // if (language2.style.display === 'flex') {
      //   language_infos.push(language_info2);
      // }

      // award_infos.push(award_info0);
      // if (Award1.style.display === 'flex') {
      //   award_infos.push(award_info1);
      // }

      // if (Award2.style.display === 'flex') {
      //   award_infos.push(award_info2);
      // }

      var data = {
        "additional_info": {
          "linkedin_url": LinkedinURLValue,
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
            // 打开一个特定岗位页面来给用户测试
            // window.open('https://airtable.com/appQynbTNIRoTOt6Q/shrWbHxenXI3aPitF/tbllTF0zzhbMMHYGm/viw7SOFwlmbdIeSzm?blocks=hide', '_blank');
            window.location.href = "https://www.jobwizard.ai/onboarding/registration-complete?resource=add-info"
            backTab6.style.pointerEvents = "auto";
            // const Saving = document.getElementById('Saving-6');
            // const ToBeSaved = document.getElementById('ToBeSaved-6');
            // Saving.style.display = 'none';
            // ToBeSaved.style.display = 'flex';
          }

          return response.json();
        }).catch(error => {
        });
    });
  }
}
