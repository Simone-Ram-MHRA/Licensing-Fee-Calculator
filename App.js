import { useCallback } from 'react';

import 'survey-core/modern.min.css';
// import 'survey-core/survey.min.css';
import { StylesManager, Model, youtubeTags } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("modern");

const surveyJson = {
  "elements": [
    {
        "type": "radiogroup",
        "name": "question1",
        "title": "What is the type of your application?",
        "isRequired": true,
        "colCount": 4,
        "choices": [
          "Initial marketing authorisation application", 
          "Variation"
        ]
    },{
      "type": "radiogroup",
      "name": "question2",
      "title": "What is the scope of your application?",
      "isRequired": true,
      "colCount": 1,
      "choices": [
        "National (any other case including hybrid applications)",
     "MRDC reliance procedure - Application for GB or UK excluding GB unfettered access route",
     "EC Decision reliance procedure - Automatic recognition application", 
     "Unfettered access route to GB (Previously granted by EU)",
     "Incoming mutual recognition procedure for sale or supply in Northern Ireland and Unfettered access route for UKMA(GB)", 
     "Decentralised procedure for sale or supply in Northern Ireland and Unfettered access route for UKMA(GB)",
     "European reference product application for sale or supply in Northern Ireland"
      ]
  },{
    "type": "radiogroup",
    "name": "question3",
    "title": "Has the active substance(s) of your product previously been authorised in the UK?",
    "isRequired": true,
    "colCount": 4,
    "choices": [
      "Yes", 
      "No"
    ]
},{
  "type": "radiogroup",
  "name": "question4",
  "title": "Please confirm the legal basis of your application or whether you intend to submit an extension application:",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Regulation 50 (previously Article 8(3) of Directive 2001/83/EC)", 
    "Regulation 50 Article 8(3)",
    "Abridged (Previously Article 10 of Directive 2001/83/EC)"
  ]
},{
  "type": "radiogroup",
  "name": "question5",
  "title": "Is the legal basis of your application?Is the legal basis of your application?",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Hybrid application - Regulation 52 (previously Article 10.3 of Directive 2001/83/EC)", 
          "Generic Hybrid", 
          "Well-established Use", 
          "New Fixed Combination",
          "Informed Consent",
          "Biosimilars",
          "Generic Product"
  ]
},{
  "type": "radiogroup",
  "name": "question6",
  "title": "Please confirm the legal basis of your application or whether you intend to submit an extension application:?",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Regulation 50 (previously Article 8(3) of Directive 2001/83/EC)", 
    "Regulation 50 Article 8(3)", 
     "Article 10"
  ]
},{
  "type": "radiogroup",
  "name": "question7",
  "title": "Is the legal basis of your application ?",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Hybrid application - Regulation 52 (previously Article 10.3 of Directive 2001/83/EC)", 
        "10(3) - Generic Hybrid",
        "10(a) - Well-established use",
        "10(b) - New Fixed Combination",
        "10(c) - Informed Consent",
        "10(4) – Biosimilars",
        "10(1) - Generic Product"
  ]
},{
  "type": "radiogroup",
  "name": "question8",
  "title": "Does any of the following apply to your application(s) ?",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "The application lists a new source of active substance not covered by: A European Pharmacopoeia certificate of suitability (CEP) or An ASMF which has been assessed and accepted as part of an authorised medicinal product in the UK", 
    "The application concerns a new route/method of synthesis for active substance.",
    "The application concerns use of the active substance for a new population or a new clinical indication.",
    "The application concerns a new route of administration, or a new method of administration to the site of action or absorption.",
    "The product is presented as a modified/controlled release dosage form or presented as a metered dose/powder inhaler.",  
    "The application is for a sterile product which uses a new sterilisation method or container material in direct contact with the product.",
    "The application for a new influenza vaccine, or a new manufacturer of strain, or an influenza vaccine using a new manufacturer or manufacturing process.",
    "The application includes a new excipient not previously used in the UK.",
    "None of the above"
  ]
},{
  "type": "radiogroup",
  "name": "question9",
  "title": "Does your application relate to ?",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Type IA/IAIN/IA Group", 
    "Type IB", 
    "Type II", 
    "THR",
    "Homeopathic"
  ]
},{
  "type": "radiogroup",
  "name": "question10",
  "title": "Does your application consist of a ?",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Single",
    "Group"
  ]
},{
  "type": "radiogroup",
  "name": "question11",
  "title": "What is the route of your variation?",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "National", 
    "Chapter II of EC 1234/2008 and/or Reliance/Recognition"
  ]
},{
  "type": "radiogroup",
  "name": "question12",
  "title": "Do any of the below changes apply to your Type II procedure (Type II Complex variation):",
  "description": "Quality changes: -	Reformulation of the product introducing a novel excipient that has previously not been included in a medicinal product -	A new route of synthesis that has not previously been assessed and a Ph Eur Certificate of Suitability is not available* -	New method of sterilisation of the product* -	New container materials for a sterile product* -	New active ingredient manufacturer not previously approved to manufacture the active ingredient concerned and who does not hold a Ph Eur Certificate of Suitability for the substance concerned*. -	Flu Vaccine – new manufacturer or process -	Reformulation of the product that is supported by bioavailability studies -	Change in the product’s preservative system -	Change in excipients which significantly affects the pharmaceutical or therapeutic properties. * Specific to the active ingredient. Clinical changes: -	Variation applications supported by the results of clinical trials or other data (including pharmacological and toxicological tests as -	Well as extensive evidence from post marketing experience or publications) that need to be newly assessed. If you are submitting separate related variations and only one is supported by clinical data, that variation will attract a complex fee and the others will attract a standard fee -	If two or more concurrent applications are supported by substantial amounts of data each, that have not previously been assessed, they will each attract a complex fee",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Yes", 
    "No"
  ]
},{
  "type": "radiogroup",
  "name": "question13",
  "title": "Does your application concern a change to the indications for use in either of the following scenarios (Type II Extended Complex variation)?",
  "description": "(a) in a therapeutic area for which the product was not previously indicated for use; or (b) in respect of an organ, or any other part of the human body for which the product was not previously indicated for use, if the application is supported by data which comprises or includes the results of clinical trials or physicochemical, microbiological or pharmacological and toxicological tests.",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Yes", 
    "No"
  ]
},{
  "type": "rating",
  "name": "question14",
  "title": "How many additional Strengths/Licences are you submitting? (If none, leave it as 1)",
  "description": "Information for bulk applications: Where the submission does not include bulk applications, leave 0 in the box below and then press enter. In order to bulk a single, group variation or Worksharing procedure, the below criteria must apply: 1.	The changes are to authorisations registered under the same company number. 2.	The changes are identical across the lead and bulk members, and rely on the same supporting data. (QRD updates to the SPC do not need to meet this requirement) 3.	The authorisations included are not a combination of Mutual Recognition and National licences. Please note that the above bullet points 1 and 3 do not apply for Worksharing.",
  "isRequired": true,
  "rateMin": 1,
  "rateMax": 20,
  "minRateDescription": "(Most unlikely)",
  "maxRateDescription": "(Most likely)",
  "colCount": 1,
  "choices": [
    "Yes", 
    "No"
  ]
},{
  "type": "radiogroup",
  "name": "question15",
  "title": "Is your application a:",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Standard",
    "Complex",  
    "New Excipient",
    "Administrative",
  ]
},{
  "type": "radiogroup",
  "name": "question16",
  "title": "Is your application a:",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "National Rules Scheme",
    "Simplified Scheme",  
  ]
},{
  "type": "radiogroup",
  "name": "question17",
  "title": "Is your application a:",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "Standard variation application",
    "New indication",
    "Other applications (for up to 30 variations where no further medical, technical or scientific assessment is required)",
    "Other applications (for any subsequent variations where no further medical, technical or scientific assessment is required)",  
  ]
},{
  "type": "radiogroup",
  "name": "question18",
  "title": "Is your application a:",
  "isRequired": true,
  "colCount": 1,
  "choices": [
    "New technical",
    "Other applications (for up to 30 variations where no further medical, technical or scientific assessment is required)",
    "Other applications (for any subsequent variations where no further medical, technical or scientific assessment is required)",  
  ]
}]
};

function App() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    // const results = JSON.stringify(sender.data);
    // // alert(results);
    // console.log(results);
    console.log(sender.data)
    var question1= sender.data["question1"]
    var question2= sender.data["question2"]
    var question3= sender.data["question3"]
    var question4= sender.data["question4"]
    var question5= sender.data["question5"]
    var question6= sender.data["question6"]
    var question7= sender.data["question7"]
    var question8= sender.data["question8"]
    var question9= sender.data["question9"]
    var question10= sender.data["question10"]
    var question11= sender.data["question11"]
    var question12= sender.data["question12"]
    var question13= sender.data["question13"]
    var question14= sender.data["question14"] 
    var question15= sender.data["question15"]
    var question16= sender.data["question16"]
    var question17= sender.data["question17"]
    var question18= sender.data["question18"]


    switch (question1) {
      case 'Initial marketing authorisation application':
        console.log('+1');
        switch (question2){
          case 'National (any other case including hybrid applications)':
          case 'MRDC reliance procedure - Application for GB or UK excluding GB unfettered access route':
          case 'EC Decision reliance procedure - Automatic recognition application':
          case 'Unfettered access route to GB (Previously granted by EU)':
          case 'Incoming mutual recognition procedure for sale or supply in Northern Ireland and Unfettered access route for UKMA(GB)':
          case 'Decentralised procedure for sale or supply in Northern Ireland and Unfettered access route for UKMA(GB)':
          case 'European reference product application for sale or supply in Northern Ireland':
            console.log('+2');
            switch (question3){
              case 'Yes':
                console.log('+3');
                switch (question4){
                  case 'Regulation 50 (previously Article 8(3) of Directive 2001/83/EC)':
                    console.log("+4")
                    break;
                  case 'Regulation 50 Article 8(3)':
                    console.log('+4');
                    break;
                  case 'Abridged (Previously Article 10 of Directive 2001/83/EC)':
                    console.log("+4")
                    switch (question5){
                      case 'Hybrid application - Regulation 52 (previously Article 10.3 of Directive 2001/83/EC)':
                        console.log("+5")
                        case 'Generic Hybrid':
                        console.log("+5")
                        break;
                        case 'Well-established Use':
                        console.log("+5")
                        break;
                        case 'New Fixed Combination':
                        console.log("+5")
                        break;
                        case 'Informed Consent':
                        console.log("+5")
                        break;
                        case 'Biosimilars':
                        console.log("+5")
                        break;
                        case 'Generic Product':
                        console.log("+5")
                        break;
                        default:
                        console.log(`Sorry1`);
                    }
                    break;
                  default:
                    console.log(`Sorry1`);
                }
                break;
              case 'No':
                console.log('+3')
              default:
                console.log(`Sorry2`);
            }
            break;
          default:
            console.log(`Sorry3`);
        }
        break;
      case 'Variation':
        console.log("-1");
        break;
      default:
        console.log(`Sorry4`);
    }
    

    // if (question1 == "Initial marketing authorisation application"){
    //   console.log("yes")
    // }else{
    //   console.log("NO")
    // }
    
    }
  ,[]);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default App;
