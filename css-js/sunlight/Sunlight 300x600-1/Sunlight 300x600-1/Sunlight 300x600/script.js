$(document).ready(function () {
    var $messages = $('.messages-content');
    
    let i = 0;
    let msgId = 0;

    //Array to hold the responses
    let responses = [
        [], [], [], [], [], [], [], [], [], []
    ];

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
    $(window).load(function () {
        $messages.mCustomScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 100);
    });

    function updateScrollbar() {
        $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
            scrollInertia: 10,
            timeout: 0
        });
    }

    // Inserts message
    function insertMessage() {
        if (msgId === 10) return;
        if (msgId !== 9) clickedChoice();
        // if (msgId === 9) {
            msg = $('.message-input').val();
            let text = msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
            if ($.trim(msg) == '') {
                return false;
            }
            // if (msgId === 9) {
                document.querySelector(`.question_${msgId}_options`).style.display = 'none';
                $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
                responses[msgId].push(msg);
            // }
            $('.message-input').val(null);
            text = "";
            msgId++;
        // }

        updateScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 1000 + (Math.random() * 20) * 100);
    }

    // Inserts message when choice is clicked
    function insertChoiceMade(choice) {
        if (choice == '') {
            return false;
        }
        $('<div class="message message-personal">' + choice + '</div>').appendTo($('.mCSB_container')).addClass('new');
        $('.message-input').val(null);
        updateScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 1000 + (Math.random() * 20) * 100);
    }

    // Inserts choice selected
    $('.message-submit').click(function () {
        if (msgId === 9) insertMessage();
    });

    // Inserts typed text
    $(window).on('keydown', function (e) {
        if (msgId === 9) {
            if (e.which == 13) {
                insertMessage();
                return false;
            }
        } else {
            e.preventDefault();
        }
    });

 questions = [
    'Have you heard about Sunlight 2 in 1 Auto',
    'Sunlight 2 in 1 Auto is the number one made for machine detergent in Kenya',
    'Sunlight 2 in 1 Auto is ideal for washing machines because it is gentler and requires less water every cycle than normal washing powder',
    'What would you like to know more about sunlight 2 in 1 Auto',
    'If elections were held today, who would you vote for President?',
    'Who, between Uhuru Kenyatta and William Ruto, do you trust the most?',
    'If a referendum on the constitutional changes proposed in the BBI was held today, would you vote for or against the changes?',
    // 'Do you support 1 man, 1 vote, 1 shilling policy?',
    // 'Enter your email below to receive your results, or press skip to finish survey.',
 ];
 trailing = 
    {
        one: [
            'Sunlight comes in 2 in 1 form and is designed to keep your hands safe',
            'Sunlight 2 in 1 Auto is the number one made for machine detergent in Kenya',
            // 'Sunlight 2 in 1 Auto is ideal for washing machines because it is gentler and requires less water every cycle than normal washing powder',
        ],
        two: [
            'What would you like to know more about sunlight 2 in 1 Auto',
            'If elections were held today, who would you vote for President?',
            // 'Who, between Uhuru Kenyatta and William Ruto, do you trust the most?',
        ],
        three: [
            'If a referendum on the constitutional changes proposed in the BBI was held today, would you vote for or against the changes?',
            'Do you support 1 man, 1 vote, 1 shilling policy?',
            // 'Enter your email below to receive your results, or press skip to finish survey.',
        ]
    };
 
    var Fake = [
        {
            question: questions[0],
            // options: questionOptions[0],
            trailers: trailing.one,
        },
        {
            question: questions[1],
            // options: questionOptions[1],
            trailers: trailing.one,
        },
        {
            question: questions[2],
            // options: questionOptions[2],
            trailers: trailing.one,
        },
        {
            question: questions[3],
            // options:questionOptions[3],
            trailers: trailing.one,
        },
        {
            question: questions[4],
            // options:questionOptions[4],
            trailers: trailing.one,
        },
        {
            question: questions[5],
            // options: questionOptions[5],
            trailers: trailing.one,
        },
        {
            question: questions[6],
            // options: questionOptions[6],
            trailers: trailing.one,
        },
        // {
        //     question: questions[7],
        //     // options: questionOptions[7],
        //     trailers: trailing.one,
        // },
        // {
        //     question: questions[8],
        //     // options: questionOptions[8],
        //     trailers: trailing.one,
        // },
        // {
        //     question: questions[9],
        //     // options: questionOptions[9],
        //     trailers: trailing.one,
        // },
    ];
        //dynamic multiple choices
        let choices = [
            ['Yes', 'No', 'Maybe', 'Great tell me more'],
            [
              'Why not 100% natural',
              'Does it contain alcohol',
              'Perfume?',
              'Preservatives',
            ],
            [
              'What do you mean by natural origin',
              'View on site',
              'Skip'
            ]
          ];
    
          let questionOptions = [];
    
          function generateOptions(choices){
            for (let i = 0; i < choices.length; i++) {
                let questionOptionsHTML = `
                  <div class="candidates question_${i}_options">
                    <ul>
                `;
                for (let j = 0; j < choices[i].length; j++) {
                  questionOptionsHTML += `
                      <li class="option" data-value="${choices[i][j]}">${choices[i][j]}</li>
                  `;
                }
                questionOptionsHTML += `
                    </ul>
                  </div>
                `;
                questionOptions.push(questionOptionsHTML);
              }
        // return questionOptions;
    }
    generateOptions(choices);
    // Update the options in the Fake array
    for (let i = 0; i < Fake.length; i++) {
        Fake[i].options = questionOptions[i];
        // console.log(Fake[i]);
    }
    function displayTrailers(trail){
        updateScrollbar();
        setTimeout(function () {
            $('<div class="message loading new"><figure class="avatar"><img src="images/sunlight.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
            $('.message.loading').remove();
            $('<div class="message new"><figure class="avatar"><img src="images/sunlight.png" /></figure>' + trail + '<br>').appendTo($('.mCSB_container')).addClass('new');
            updateScrollbar();

        }, 1000 + (Math.random() * 20) * 100);
    }

    function clickedChoice() {
        if (msgId === 10) return;
       
        let questionOptionsDiv = document.querySelector(`.question_${msgId}_options`);
        if (questionOptionsDiv) {
            let options = questionOptionsDiv.querySelectorAll('.option');
            options.forEach((option, i) => {
                option.addEventListener('click', () => {
                    // console.log(msgId);
                    choice = options[i].getAttribute("data-value");
                    // console.log(choice);
                    index = choices[i].indexOf(choice);
                    // console.log(`Index ${index}`);
                    // console.log(choices[i]);
                    let nextChoices = choices[i].filter((_, i) => i !== index);

                    // console.log(nextChoices);
                    // console.log(choices);
                    choices = [
                        ...choices,
                        nextChoices
                    ]
                    console.log(choices);
                    insertChoiceMade(choice);
                    questionOptionsDiv.style.display = 'none';
                    responses[msgId].push(choice);
                    msgId++;
                    // sendAdSurveyResponse(msgId + 1, choice);
                    // sendBannerEngagementEvent(`question_${msgId + 1}_option_${first_word}_selected`);
                    // choice = '';

                    // console.log(questionOptions);
                    setTimeout(() => {
                        Fake[i].trailers.forEach(trailer => displayTrailers(trailer));
                        }, 1000);
                    return;
                });
             
              
            });
        }
        generateOptions(choices);
        // Update the options in the Fake array
        for (let i = msgId; i < Fake.length; i++) {
            Fake[i].options = null;
            Fake[i].options = questionOptions[i];
           
        }
        console.log(questionOptions[4]);
        console.log(choices);
    }
    // Loads next question
    function fakeMessage() {
        if ($('.message-input').val() != '') {
            return false;
        }
        $('<div class="message loading new"><figure class="avatar"><img src="images/sunlight.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();

        setTimeout(function () {
            $('.message.loading').remove();
            if (i === 10) {
                $('<div class="message new"><figure class="avatar"><img src="images/sunlight.png" /></figure>' + 'Thank you for completing the survey.' + '</div>').appendTo($('.mCSB_container')).addClass('new');
                updateScrollbar();
                document.querySelector('.message-box').style.display = 'none';
                // console.log(responses)
                return;
            } else {
                $('<div class="message new"><figure class="avatar"><img src="images/sunlight.png" /></figure>' + Fake[i].question + '<br>' + Fake[i].options +'</div>').appendTo($('.mCSB_container')).addClass('new');
                clickedChoice();
                updateScrollbar();
                // console.log(Fake[i].options);
                i++;
            }

        }, 1000 + (Math.random() * 20) * 100);
    }

});



