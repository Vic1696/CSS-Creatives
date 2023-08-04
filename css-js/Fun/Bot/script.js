$(document).ready(function(){
    var $messages = $('.messages-content');

    let i = 0;
    let msgId = 0;

    //Responses
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

















})