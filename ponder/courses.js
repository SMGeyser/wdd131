const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
  };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
          

document.querySelector('img').setAttribute('src', aCourse.logo);
document.querySelector('img').setAttribute('alt', aCourse.name);
document.querySelector('img').style.width = '100px';


`                  
<!-- Open Graph (Facebook, LinkedIn, etc.) -->
<meta property="og:type" content="Courses">
<meta property="og:title" content="Course enrollment">
<meta property="og:description" content="enrolling students">
<meta property="og:url" content="https://smgeyser.github.io/wdd131/ponder/courses.html">
<meta property="og:image" content="images/js-logo.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Put Page Title Here">
<meta name="twitter:description" content="Put Page Description Here">
<meta name="twitter:image" content="https://yourURLofSocialPreviewImageHere.png">

<!-- One favicon (ICO works everywhere) -->
<link rel="icon" href="/favicon.ico">

<!-- One Apple Touch Icon (iOS home screen) -->
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png"></link>
`