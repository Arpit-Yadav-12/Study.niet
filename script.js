// //Fetching the locally stored json file.
// function fetchJSONData() {
//     fetch("./db.json")
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error
//                     (`HTTP error! Status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((data) => 
//               console.log(data))
//         .catch((error) => 
//                console.error("Unable to fetch data:", error));
// }
// fetchJSONData()


// fetch("db.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

async function fetchData(uniqueCode) {
    try {
      const response = await fetch('test.json');
      const data = await response.json();
      if (uniqueCode === 'a01'){
        const a01Data = data.a01;
        for (const obj of a01Data){
          console.log(`Name: ${obj.name}`);
          console.log(`Sub Code: ${obj.sub_code}`);
        }
      } else {
        console.log('invalid');
      }
    } catch (error) {
      console.error('Error:', error);
    }
}

// //Selecting the course and semester selected by the user
// const selectBox2 = document.getElementById("select-wrapper2");
// selectBox2.addEventListener("change", handleSelectChange1);

// function handleSelectChange1(event) {
//     const selectedCourse = event.target.value;
//     console.log(selectedCourse);
//     return selectedCourse;
// }

// const selectBox3 = document.getElementById("select-wrapper3");
// selectBox3.addEventListener("change", handleSelectChange2);

// function handleSelectChange2(event) {
//     const selectedSemester = event.target.value;
//     console.log(selectedSemester);
// }

// const anchor = document.getElementById('ppts&pdfs');
// anchor.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log('Anchor tag was clicked!');
// });



// FETCHING THE COURSE AND SEMESTER SELECTED BY THE USER IN THE SELECT TAG
document.getElementById('ppts&pdfs').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    
    // Fetching input values
    const course = document.getElementById('course-selection');
    const semester = document.getElementById('semester-selection');

    // Logging data
    console.log(course.value);
    console.log(semester.value);

    let uniqueCode = course.value + semester.value;
    console.log(uniqueCode);
    fetchData(uniqueCode);
});






   

