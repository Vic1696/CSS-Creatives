$(document).ready(function () {
    var $messages = $('.messages-content');
    
    let i = 0;
    let msgId = 0;

    //Array to hold the responses
    let responses = [
        [], [], [], [], [], [], [], [], [], []
    ];

    let question_options = [
        {
            question: "Have you heard about Sunlight 2 in 1 Auto",
            question_number: 1,
            options: ["Yes", "No", "Not Sure"],
        },
        {
            question: "Sunlight 2 in 1 Auto is the number one made for machine detergent in Kenya",
            question_number: 2,
            options: ["Great. Tell me more"],
        },
        {
            question: "Sunlight 2 in 1 Auto is ideal for washing machines because it is gentler and requires less water every cycle than normal washing powder",
            question_number: 3,
            options: "",
        },
        {
            question: "What would you like to know more about sunlight 2 in 1 Auto",
            question_number: 4,
            options: ["How to use", "Where to buy", "Learn more"],
        },
        {
            question: "If elections were held today, who would you vote for President?",
            question_number: 5,
            // options: ["William Ruto", "Fred Matiangi", "Raila Odinga", "Musalia Mudavadi", "Kalonzo Musyoka", "Gideon Moi", "Others"]
            options: "",
        },
        {
            question: "Who, between Uhuru Kenyatta and William Ruto, do you trust the most?",
            question_number: 6,
            options: ["Uhuru Kenyatta", "William Ruto"],
        },
        {
            question: "Who, between Uhuru Kenyatta and William Ruto, do you consider most honest?",
            question_number: 7,
            options: ["Uhuru Kenyatta", "William Ruto"],
        },
        {
            question: "If a referendum on the constitutional changes proposed in the BBI was held today, would you vote for or against the changes?",
            question_number: 8,
            options: ["For", "Against"]
        },
        {
            question: "Do you support one man, one vote, one shilling policy?",
            question_number: 9,
            options: ["Yes", "No"]
        },
        {
            question: "Enter your email below to receive your results, or press skip to finish survey.",
            question_number: 10,
            options: ""
        }
    ];

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
        if (msgId === 9) {
            msg = $('.message-input').val();
            let text = msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
            if ($.trim(msg) == '') {
                return false;
            }
            // if (msgId === 3) {
            //     $('<div class="message message-personal">' + text + '</div>').appendTo($('.mCSB_container')).addClass('new');
            //     responses[msgId].push(text);
            // }
            if (msgId === 9) {
                document.querySelector(`.question_${msgId}_options`).style.display = 'none';
                $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
                responses[msgId].push(msg);
            }
            sendAdSurveyResponse(msgId + 1, text);
            sendBannerEngagementEvent(`question_${msgId + 1}_input_entered`);
            $('.message-input').val(null);
            text = "";
            msgId++;
        }

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

    // Questions with multiple choices
    let questionOneOptions = `
    <div class="candidates question_0_options">
        <ul>
            <li class="option" data-value="Yes">Yes</li>
        </ul>
        <ul>
            <li class="option" data-value="No">No</li>
        </ul>
        <ul>
            <li class="option" data-value="Not-sure">Not Sure</li>
        </ul>
    </div>`;

    let questionTwoOptions = `
    <div class="options question_1_options">
        <ul>
            <li class="option" data-value="Great Tell Me More">Great Tell Me More</li>
        </ul>
    </div>`;
    let questionThreeOptions = ``;
    // let questionThreeOptions = `
    // <div class="options question_2_options">
        
    // </div>`;

    // let questionFourOptions = `
    // <div class="options question_3_options">
    //     <ul>
    //         <li class="option" data-value="How To Use">How To Use</li>
    //     </ul>
    //      <ul>
    //         <li class="option" data-value="Where To Buy">Where To Buy</li>
    //     </ul>
    //        <ul>
    //         <li class="option" data-value="Learn More">Learn More</li>
    //     </ul>
    // </div>`;
    let questionFourOptions = ``;

    let candidatesDiv = `
    <div class="candidates question_4_options">
        <ul>
            <li class="option" data-value="William Ruto">William Ruto</li>
            <li class="option" data-value="Fred Matiangi">Fred Matiangi</li>
            <li class="option" data-value="Raila Odinga">Raila Odinga</li>
            <li class="option" data-value="Musalia Mudavadi">Musalia Mudavadi</li>
        </ul>
        <ul> 
        <li class="option" data-value="Kalonzo Musyoka">Kalonzo Musyoka</li>
        <li class="option" data-value="Gideon Moi">Gideon Moi</li>  
            <li class="option" data-value="Others">Others</li>
        </ul>
    </div>`;
    let questionFiveOptions = ``;
    let questionSixOptions = `
    <div class="options question_5_options">
        <ul>
            <li class="option" data-value="Uhuru Kenyatta">Uhuru Kenyatta</li>
        </ul>
        <ul>
            <li class="option" data-value="William Ruto">William Ruto</li>
        </ul>
    </div>`;

    let questionSevenOptions = `
    <div class="options question_6_options">
        <ul>
            <li class="option" data-value="Uhuru Kenyatta">Uhuru Kenyatta</li>
        </ul>
        <ul>
            <li class="option" data-value="William Ruto">William Ruto</li>
        </ul>
    </div>`;

    let questionEightOptions = `
    <div class="options question_7_options">
        <ul>
            <li class="option" data-value="For">For</li>
        </ul>
        <ul>
            <li class="option" data-value="Against">Against</li>
        </ul>
    </div>`;

    let questionNineOptions = `
    <div class="options question_8_options">
        <ul>
            <li class="option" data-value="Yes">Yes</li>
        </ul>
        <ul>
            <li class="option" data-value="No">No</li>
        </ul>
    </div>`;

    let questionTenOptions = `
    <div class="options question_9_options">
        <ul>
            <li class="option skip" data-value="Skip">Skip</li>
        </ul>
    </div>`;

    let choice = '';

    function clickedChoice() {
        if (msgId === 10) return;
        // if (msgId === 9) {
        //     let questionOptionsDiv = document.querySelector(`.question_${msgId}_options`);
        //     let skipBtn = questionOptionsDiv.querySelector('.skip');

        //     skipBtn.addEventListener('click', () => {
        //         let choice = skipBtn.getAttribute("data-value");
        //         insertChoiceMade(choice);
        //         responses[msgId].push(choice);
        //         questionOptionsDiv.style.display = 'none';
        //         sendAdSurveyResponse(msgId + 1, choice);
        //         sendBannerEngagementEvent(`question_${msgId + 1}_option_${choice}_selected`);
        //         choice = '';
        //         msgId++;
        //         return;
        //     });
        // }
        if (msgId !== 10 ) {
            if(Fake[i].options != ""){
                let questionOptionsDiv = document.querySelector(`.question_${msgId}_options`);
                let options = questionOptionsDiv.querySelectorAll('.option');
                options.forEach((option, i) => {
                    option.addEventListener('click', () => {
                        choice = options[i].getAttribute("data-value");
                        let first_word = choice.split(" ")[0];
                        insertChoiceMade(choice);
                        questionOptionsDiv.style.display = 'none';
                        responses[msgId].push(choice);
                        sendAdSurveyResponse(msgId + 1, choice);
                        sendBannerEngagementEvent(`question_${msgId + 1}_option_${first_word}_selected`);
                        choice = '';
                        msgId++;
                        console.log(msgId);
                        return;
                    });
                });
            }else{
                console.log(`${msgId} Question has no options`);
                choice = '';
                fakeMessage();
                insertChoiceMade(choice);
                responses[msgId].push(choice);
                msgId++;
                console.log(msgId);
                return;
            }
          
        }

    }

    var Fake = [
        {
            question: 'Have you heard about Sunlight 2 in 1 Auto',
            options: questionOneOptions,
        },
        {
            question: 'Sunlight 2 in 1 Auto is the number one made for machine detergent in Kenya',
            options: questionTwoOptions
        },
        {
            question: 'Sunlight 2 in 1 Auto is ideal for washing machines because it is gentler and requires less water every cycle than normal washing powder',
            options: questionThreeOptions
        },
        {
            question: 'What would you like to know more about sunlight 2 in 1 Auto',
            options: questionFourOptions
        },
        {
            question: 'If elections were held today, who would you vote for President?',
            options: questionFiveOptions
        },
        {
            question: 'Who, between Uhuru Kenyatta and William Ruto, do you trust the most?',
            options: questionSixOptions
        },
        {
            question: 'Who, between Uhuru Kenyatta and William Ruto, do you consider most honest?',
            options: questionSevenOptions
        },
        {
            question: 'If a referendum on the constitutional changes proposed in the BBI was held today, would you vote for or against the changes?',
            options: questionEightOptions
        },
        {
            question: 'Do you support 1 man, 1 vote, 1 shilling policy?',
            options: questionNineOptions
        },
        {
            question: 'Enter your email below to receive your results, or press skip to finish survey.',
            options: questionTenOptions
        },
    ];


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
                console.log(responses)
                return;
            } else {
                $('<div class="message new"><figure class="avatar"><img src="images/sunlight.png" /></figure>' + Fake[i].question + '<br>' + Fake[i].options +'</div>').appendTo($('.mCSB_container')).addClass('new');
                clickedChoice();
                updateScrollbar();
                console.log(Fake[i].options);
                i++;
            }

        }, 1000 + (Math.random() * 20) * 100);
    }




    function sendAdSurveyResponse(question_number, response) {
        //  console.log(unique_id);

        let data = {
            "banner_id": creative_id,
            "banner_name": options.banner_name,
            "impression_unique_id": unique_id,
            ...question_options[question_number - 1],
            response: [response]
        };

        //   console.log(data);

        (async () => {
            const rawResponse = await fetch('https://dxp.mediapal.net/api/leadgen/adsurvey/create/1292044', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            //   const content = await rawResponse.json();

            //   console.log(content);
        })();
    }
});



