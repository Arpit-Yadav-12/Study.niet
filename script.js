//FETCHING (LOCALLY STORED JSON FILE).
async function fetchData(uniqueCode) {
    try {
      const response = await fetch('db.json');
      const data = await response.json();
      
      //CSE-SEM1
      if (uniqueCode === 'a01'){
        const a01Data = data.a01;
        console.log(a01Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a01Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE SEM-2
      else if (uniqueCode === 'a02'){
        const a02Data = data.a02;
        console.log(a02Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a02Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }
      
      //CSE SEM-3
      else if (uniqueCode === 'a03'){
        const a03Data = data.a03;
        console.log(a03Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a03Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE SEM-4
      else if (uniqueCode === 'a04'){
        const a04Data = data.a04;
        console.log(a04Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a04Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE SEM-5
      else if (uniqueCode === 'a05'){
        const a05Data = data.a05;
        console.log(a05Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a05Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE SEM-6
      else if (uniqueCode === 'a06'){
        const a06Data = data.a06;
        console.log(a06Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a06Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE SEM-7
      else if (uniqueCode === 'a07'){
        const a07Data = data.a07;
        console.log(a07Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a07Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE SEM-8
      else if (uniqueCode === 'a08'){
        const a08Data = data.a08;
        console.log(a08Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        a08Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-1
      else if (uniqueCode === 'b01'){
        const b01Data = data.b01;
        console.log(b01Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b01Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-2
      else if (uniqueCode === 'b02'){
        const b02Data = data.b02;
        console.log(b02Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b02Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-3
      else if (uniqueCode === 'b03'){
        const b03Data = data.b03;
        console.log(b03Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b03Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-4
      else if (uniqueCode === 'b04'){
        const b04Data = data.b04;
        console.log(b04Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b04Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-5
      else if (uniqueCode === 'b05'){
        const b05Data = data.b05;
        console.log(b05Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b05Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-6
      else if (uniqueCode === 'b06'){
        const b06Data = data.b06;
        console.log(b06Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b06Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-7
      else if (uniqueCode === 'b07'){
        const b07Data = data.b07;
        console.log(b07Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b07Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      //CSE(R) SEM-8
      else if (uniqueCode === 'b08'){
        const b08Data = data.b08;
        console.log(b08Data);
        //MAKING THE DIV CONTAINERS FOR THE PDFs BASED ON NO. OF SUBJECTS
        const container = document.getElementById('content-div-main');
        let contentContainer = document.getElementById("new-container");
        if (contentContainer) {
          container.removeChild(contentContainer);
        }
        const newContainer = document.createElement("div");
        newContainer.id = "new-container";
        container.appendChild(newContainer);
        b08Data.forEach(div => {
          const divElement = `
          <div class="content-div" id="content-div">
              <div class="content-div-heading" id="content-div-heading">${div.name} - ${div.subcode}</div>
              <div class="content-div-pptpdf" id="content-div-pptpdf">
                <div class="unit1" id="unit1">
                  <a href="${div.ppts[0]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 1</p>
                </div>
                <div class="unit2" id="unit2">
                  <a href="${div.ppts[1]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 2</p>
                </div>
                <div class="unit3" id="unit3">
                  <a href="${div.ppts[2]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 3</p>
                </div>
                <div class="unit4" id="unit4">
                  <a href="${div.ppts[3]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 4</p>
                </div>
                <div class="unit5" id="unit5">
                  <a href="${div.ppts[4]}" id="pptlink"><i class="fa-solid fa-file" style="color: #ffe68a;"></i></a>
                  <p>Unit 5</p>
                </div>
              </div>
          </div>
          `;
          newContainer.innerHTML += divElement;
        });

        const anchors = document.querySelectorAll('#pptlink');

        // Loop through each anchor tag
        anchors.forEach(anchor => {
          // Check if the anchor tag has an href attribute
          if (anchor.hasAttribute('href')) {
            // Check if the href attribute value is "#" or empty
            if (anchor.getAttribute('href').trim() === '#' || anchor.getAttribute('href').trim() === '') {
              // If it's "#" or empty, add an event listener for click
              anchor.addEventListener('click', function(event) {
                // Display an alert for empty or "#" href
                alert("Sorry for the inconvenience, file is currently unavailable. Help us by contributing.");
                // Prevent the default action of the anchor tag (e.g., following the link)
                event.preventDefault();
              });
            } else {
              // If the href is not empty or "#", add target="_blank"
              anchor.setAttribute('target', '_blank');
            }
          }
        });
      }

      

      else {
        console.log('invalid');
      }

    } catch (error) {
      console.error('Error:', error);
    }
}

// function handleClick() {
//   if (this.href === "") {
//     alert("The link is empty!");
//   } else {
//     // Redirect to the link
//     window.location.href = this.href;
//   }
// }


  

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








   

