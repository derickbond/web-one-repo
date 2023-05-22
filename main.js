
    // Select the header and main elements

    const header = document.querySelector('header');

    const mainElem = document.querySelector('main');

    // Get the height of the header using the offsetHeight property

    const headerHeight = header.offsetHeight;

    // Set the margin-top of the main element to the height of the header

    mainElem.style.marginTop = `${headerHeight}px`;

    function getRandomColor() {

      const shadesOfWhite = [

    '#f7f7f7',

    '#f0f0f0',

    '#e9e9e9',

    '#e2e2e2',

    '#dbdbdb',

    '#d4d4d4',

    '#cccccc',

    '#c5c5c5',

    '#bebebe',

    '#b7b7b7',

    '#b0b0b0',

    '#a9a9a9',

    '#a2a2a2',

    '#9b9b9b',

    '#949494',

    '#8c8c8c',

    '#858585',

    '#7e7e7e',

    '#777777',

    '#707070'

  ];

      // generate a random index between 0 and the length of the shadesOfWhite array

      const randomIndex = Math.floor(Math.random() * shadesOfWhite.length);

      // return the color at the randomly generated index

      return shadesOfWhite[randomIndex];

    }

    // set the initial background color of the main element

    mainElem.style.backgroundColor = '#eee';

    // add event listener to change the background color on click

    mainElem.addEventListener('click', function() {

      // generate a random shade of white/grey

      const randomColor = getRandomColor();

      // set the background color of the main element to the random shade

      mainElem.style.backgroundColor = randomColor;

    });

    //Nav Toggle 

    const navToggle = document.getElementById('nav-toggle');

    const nav = document.querySelector('nav');

    document.addEventListener('click', function(event) {

      // Check if the click event occurred outside the navigation menu and the toggle checkbox

      if (!nav.contains(event.target) && event.target !== navToggle) {

        // Check if the navigation menu is currently open

        if (navToggle.checked) {

          // Uncheck the toggle checkbox to close the navigation menu

          navToggle.checked = false;

        }

      }

      // Check if a navigation link was clicked

      if (event.target.tagName === 'A' && navToggle.checked) {

        // Uncheck the toggle checkbox to close the navigation menu

        navToggle.checked = false;

      }

    });

    navToggle.addEventListener('click', function(event) {

      // Check if the toggle checkbox was clicked again

      if (event.target === navToggle && !navToggle.checked) {

        // Uncheck the toggle checkbox to close the navigation menu

        navToggle.checked = false;

      }

    });

    // Set the launch date and time in EAT timezone

    const launchDate = new Date("May 06, 2023 00:00:00 GMT+0300");

    // Get the countdown container

    const countdownContainer = document.getElementById("countdown-container");

    // Check if the countdown container exists

    if (countdownContainer) {

      // Update the countdown timer every second

      setInterval(() => {

        // Calculate the time difference between now and the launch date

        const now = new Date();

        const timeDiff = launchDate.getTime() - now.getTime();

        // Calculate the remaining days, hours, minutes, and seconds

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Get the elements to update in the DOM

        const daysEl = document.getElementById("days");

        const hoursEl = document.getElementById("hours");

        const minutesEl = document.getElementById("minutes");

        const secondsEl = document.getElementById("seconds");

        // Update the countdown timer in the DOM

        if (daysEl && hoursEl && minutesEl && secondsEl) {

          daysEl.innerText = Math.abs(days);

          hoursEl.innerText = Math.abs(hours);

          minutesEl.innerText = Math.abs(minutes);

          secondsEl.innerText = Math.abs(seconds);

        }

      }, 1000);

    } else {

      console.error("Countdown container not found");

    }

    //Limit phone number input 

    const countryCodeInput = document.getElementById('country-code');

    const phoneNumberInput = document.getElementById('phone-number');

    countryCodeInput.addEventListener('click', (event) => {

      if (!event.target.value.startsWith('+')) {

        event.target.value = '+' + event.target.value;

      }

    });

    countryCodeInput.addEventListener('input', (event) => {

      const countryCode = event.target.value.substring(0, 4);

      event.target.value = countryCode;

    });

    phoneNumberInput.addEventListener('input', (event) => {

      const phoneNumber = event.target.value.slice(0, 9);

      event.target.value = phoneNumber;

    });

    //Submit button color

    const submitButton = document.querySelector('button[type="submit"]');

    function handleSubmit(event) {

      event.preventDefault();

      // Submit form using default submission

      event.target.submit();

      // Change button color to grey

      submitButton.style.backgroundColor = "grey";

    }

    

    //star rating

    //Team members toggle

    const teamMembers = document.querySelectorAll('.team-members li');

    teamMembers.forEach(member => {

      member.addEventListener('click', () => {

        member.querySelector('.link').classList.toggle('expanded');

      });

    });

    //Accordion

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {

      const content = header.nextElementSibling;

      header.setAttribute('aria-expanded', 'false');

      content.setAttribute('aria-hidden', 'true');

      header.addEventListener('click', () => {

        const isOpen = header.getAttribute('aria-expanded') === 'true';

        header.setAttribute('aria-expanded', !isOpen);

        content.setAttribute('aria-hidden', isOpen);

        header.classList.toggle('active');

        if (isOpen) {

          content.style.maxHeight = null;

        } else {

          content.style.maxHeight = content.scrollHeight + "px";

        }

      });

    });

    // Select the form element

    const donationForm = document.querySelector('.donation-form');

    // Add event listener for form submission

    donationForm.addEventListener('submit', (event) => {

      // Prevent the form from submitting normally

      event.preventDefault();

      // Get the donation URL and open it in a new tab

      const donationUrl = 'https://www.mchanga.africa/fundraiser/68835';

      window.open(donationUrl, '_blank');

      // Display the thank you message

      const thankYouMessage = document.querySelector('#thank-you');

      thankYouMessage.classList.remove('hidden');

    });
