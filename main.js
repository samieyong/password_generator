const output = document.getElementById('output');
const options = document.querySelectorAll('.option input');
const btn = document.querySelector('.btn');
let charCount = document.querySelector('.char-count');
let rangeBar = document.getElementById('range');
const copyIcon = document.querySelector('.copy-icon');
let strength = document.getElementById('strength');
let level1 = document.querySelector('.level-1');
let level2 = document.querySelector('.level-2');
let level3 = document.querySelector('.level-3');
let level4 = document.querySelector('.level-4');
let rangeValue = 10;

// Set range value to the value of character length
rangeBar.addEventListener('input', () => {
   rangeValue = rangeBar.value;
   charCount.textContent = rangeValue;
});

// Monitor options and set password strength
options.forEach((option) => {
   option.addEventListener('click', () => {
      let level = 0;
      console.log(level);
      options.forEach((option2) => {
         if (option2.checked) {
            level += 1;
            console.log(level);
         }
      });
      switch (level) {
         case 0:
            level1.style.backgroundColor = '';
            level2.style.backgroundColor = '';
            level3.style.backgroundColor = '';
            level4.style.backgroundColor = '';
            strength.textContent = 'POOR';
            break;
         case 1:
            level1.style.backgroundColor = 'red';
            level2.style.backgroundColor = '';
            level3.style.backgroundColor = '';
            level4.style.backgroundColor = '';
            strength.textContent = 'POOR';
            break;
         case 2:
            level1.style.backgroundColor = 'yellow';
            level2.style.backgroundColor = 'yellow';
            level3.style.backgroundColor = '';
            level4.style.backgroundColor = '';
            strength.textContent = 'MEDIUM';
            break;
         case 3:
            level1.style.backgroundColor = 'yellow';
            level2.style.backgroundColor = 'yellow';
            level3.style.backgroundColor = 'yellow';
            level4.style.backgroundColor = '';
            strength.textContent = 'MEDIUM';
            break;
         case 4:
            level1.style.backgroundColor = 'green';
            level2.style.backgroundColor = 'green';
            level3.style.backgroundColor = 'green';
            level4.style.backgroundColor = 'green';
            strength.textContent = 'STRONG';
            break;

         default:
            break;
      }
   });
});

//function to generate password
function generatePassword() {
   const content = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '1234567890',
      symbols: '!@#$%^&*()_+=-~<>?/|[]{}',
   };
   let tempPassword = '';
   let password = '';
   options.forEach((option) => {
      if (option.checked) {
         tempPassword += content[option.id];
      }
   });

   for (let count = 1; count <= rangeValue; count++) {
      password += tempPassword.charAt(
         Math.floor(Math.random() * tempPassword.length)
      );
   }
   output.value = password;
}

btn.addEventListener('click', generatePassword);

// copy
copyIcon.addEventListener('click', () => {
   navigator.clipboard.writeText(output.value);
   copyIcon.textContent = 'check';
   setTimeout(() => {
      copyIcon.textContent = 'copy_all';
   }, 1500);
});
