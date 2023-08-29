


// getting data from json file and storing it in an array
const res = fetch('data.json')
            .then(res => res.json())
            .then(res => {

              console.log(res)

              const html = res.map(element=> {

                let backgroundStyle, textStyle = '';
                switch(element.category) {
                  case 'Reaction':
                    backgroundStyle = 'bg--red-white-95';
                    textStyle = 'text--red';
                    break;
                  case 'Memory':
                    backgroundStyle = 'bg--yellow-white-95';
                    textStyle = 'text--yellow';
                    break;
                  case 'Verbal':
                    backgroundStyle = 'bg--green-white-95';
                    textStyle = 'text--green';
                    break;
                  case 'Visual':
                    backgroundStyle = 'bg--blue-white-95';
                    textStyle = 'text--blue';
                    break;
                  default:
                }
              
                return `<li class="summary__item flex flex--align-center ${backgroundStyle}">
                  <div class="flex flex--align-center">
                      <img class="summary__icon" src="${element.icon}" alt="reaction">
                      <span class="text ${textStyle}">${element.category}</span>
                  </div>
                  <div flex flex--align-center>
                      <span class="text text--bold">${element.score}</span>
                      <span class="text">&nbsp;/ 100</span>
                  </div>
                </li>`
              });

              console.log(html)

              document.querySelector('.summary__list').innerHTML = html.join('');
          });
    

