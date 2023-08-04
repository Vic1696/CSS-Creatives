if (msgId === 2|| msgId === 3 ||msgId === 4 ||msgId === 5 ||msgId === 6 ||msgId === 7 ||msgId === 8) {
    $('<div class="message loading new"><figure class="avatar"><img src="images/sunlight.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();
 
    setTimeout(function () {
        $('.message.loading').remove();
        if (i === 10) {
            $('<div class="message new"><figure class="avatar"><img src="images/sunlight.png" /></figure>' + 'Thank you for completing the survey.' + '</div>').appendTo($('.mCSB_container')).addClass('new');
            updateScrollbar();
            // document.querySelector('.message-box').style.display = 'none';
            // console.log(responses)
            return;
        } else {
            $('<div class="message new"><figure class="avatar"><img src="images/sunlight.png" /></figure>' + Fake[i].question + '<br>' + Fake[i].options + '</div>').appendTo($('.mCSB_container')).addClass('new');
            clickedChoice();
            updateScrollbar();
            msgId++;
            i++;
            console.log(msgId);
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
                console.log('No options');
            }
            
        }
    }, 1000 + (Math.random() * 20) * 100);


} 