const questionsList = [
    {
        titels: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="1" max="" step="1" placeholder="18" required="">
            <label for="numerique" data-fr> ans</label>
            <label for="check1" data-ar> سنة</label>
        </div>
        <br>
    </div>`,
		
        number: 1,
		type: 1
	},
	{
		titels: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 2,
		type: 1
	},
	{
		titels: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
		choices: `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check"   
            value="" min="34" max="42" step="0.1" placeholder="37,0" required="">
            <label for="numerique" data-fr> degrés</label>
        </div>
        <br>
        </div>`,
		number: 3,
		type: 2
	},
	
	{
		titels: 'Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label  chak" for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
        number: 4,
		type: 1
	},
	{
		titels:
			'Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?',
            choices: `<div class="radio_G">
            <div class="option">
                <input type="radio" value="oui" id="oui" name="check" />
                <label  chak" for="oui" data-fr> OUI</label>
            
            </div>
            <br>
            <div class="option">
                <input type="radio" value="non"  id="non" name="check" />
                <label   for="non" data-fr> NON</label>
    
            </div>
             </div>`,
        number: 5,
		type: 1
	},
	{
		titels: 'Avez-vous un mal de gorge apparu ces derniers jours ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 6,
		type: 1
	},
	{
		titels: 'Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 7,
		type: 1
	},
	{
		titels: 'Avez-vous une fatigue inhabituelle ces derniers jours ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 8,
		type: 1
	},
	{
		titels: "Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 9,
		type: 1
	},
	{
		titels:
			'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',
            choices: `<div class="radio_G">
            <div class="option">
                <input type="radio" value="oui" id="oui" name="check" />
                <label   for="oui" data-fr> OUI</label>
            
            </div>
            <br>
            <div class="option">
                <input type="radio" value="non"  id="non" name="check" />
                <label   for="non" data-fr> NON</label>
    
            </div>
             </div>`,
		number: 10,
		type: 1
	},
	{
		titels: 'Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?',
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label  chak" for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 11,
		type: 2
	},
	{
		titels: `Comment vous sentez-vous ?`,
        choices:  `<div class="radio_3">
        <div class="radio_D">
            <div class="option3">
                <input type="radio" id="check3" name="check" />
                <label for="check3" data-fr> Fatigué</label>
                <label for="check3" data-ar> نعم</label>
            </div>
            <br>
            <div class="option3">
                <input type="radio" id="check4" name="check" />
                <label for="check4" data-fr> Trop fatigué</label>
                <label for="check4" data-ar> لا</label>

            </div>
        </div>
        <div class="radio_D">
            <div class="option3">
                <input type="radio" id="check5" name="check" />
                <label for="check5" data-fr> Bien</label>
                <label for="check5" data-ar> نعم</label>
            </div>
            <br>
            <div class="option3">
                <input type="radio" id="check6" name="check" />
                <label for="check6" data-fr> Moyen</label>
                <label for="check6" data-ar> لا</label>

            </div>
        </div>
    </div>`,
        
		number: 12,
		type: 2
	},
	{
		titels: `Quel est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices:  `<div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="" max="" step="1" placeholder="0 cm" required="">
            <label for="numerique" data-fr> cm</label>
            <label for="check1" data-ar> سم</label>
        </div>
        <br>
    </div>`,
		number: 13,
		type: 2
	},
	{
		titels: `Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: ` <div class="radio_2">
        <div class="option2">
            <input id="numerique" class="input-text " type="number" name="check" aria-describedby="text-suffix" 
            title="Ces dernières 48 heures, quelle a été votre température la plus élevée ?" 
            value="" min="" max="" step="1" placeholder="0 cm" required="">
            <label for="numerique" data-fr> kg</label>
            <label for="check1" data-ar> كج</label>
        </div>
        <br>
    </div>`,
        
        
        
        
     
		number: 14,
		type: 1
	},
	{
		titels: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
		choices: `   <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr>Ne sait pas</label>
            <label for="check21" data-ar> لا</label>

        </div>
    </div>`,
		number: 15,
		type: 1
	},
	{
		titels: `Êtes-vous diabétique ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 16,
		type: 1
	},
	{
		titels: `Avez-vous ou avez-vous eu un cancer ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 17,
		type: 1
	},
	{
		titels: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ? Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 18,
		type: 1
	},
	{
		titels: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 19,
		type: 1
	},
	{
		titels: `Avez-vous une maladie chronique du foie ?`,
		choices: `<div class="radio_G">
        <div class="option">
            <input type="radio" value="oui" id="oui" name="check" />
            <label   for="oui" data-fr> OUI</label>
        
        </div>
        <br>
        <div class="option">
            <input type="radio" value="non"  id="non" name="check" />
            <label   for="non" data-fr> NON</label>

        </div>
         </div>`,
		number: 20,
		type: 1
	},
	{
		titels: `Êtes-vous enceinte ?`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> Non applicable</label>
            <label for="check21" data-ar> </label>

        </div>
    </div>`,
		number: 21,
		type: 1
	},
	{
		titels: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> Ne sait pas</label>
            <label for="check21" data-ar> ل</label>

        </div>
    </div>`,
		number: 22,
		type: 1
	},
	{
		titels: `Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: ` <div class="radio_4">
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> OUI</label>
            <label for="check10" data-ar> نعم</label>
        </div>
        
        <div class="option4">
            <input type="radio" id="non" name="check" />
            <label for="non" data-fr> NON</label>
            <label for="check20" data-ar> لا</label>

        </div>
        <div class="option4">
            <input type="radio" id="oui" name="check" />
            <label for="oui" data-fr> Ne sait pas</label>
            <label for="check21" data-ar> </label>

        </div>
    </div>`,
		number: 23,
		type: 1
	}
];

            let currentQuestion = 0;
         
            let préambul = document.querySelector('.click');
            let next = document.querySelector('.click2');
            let précedent = document.querySelector('.click3');
           
            let qst = document.querySelector('.question');
            let test = document.querySelector('.test');
            let info = document.querySelector('.question_info');

            let check = document.getElementsByName('check');
            let Qst = document.querySelector('.change');

            let form = document.querySelector('.form');
            
            let answers=[];
            function changeQuestion(conteur){

                let firstqst = questionsList.find((now) =>{
                    return now.number == conteur;
                });

             Qst.textContent = firstqst.titels;
             form.innerHTML = firstqst.choices ;


            }






            
           //  info.style.display = "none";
           // btnPrevious.style.display = "none";
           // btnNext.style.display = "none";

            // function bar(progression) {
            //     progress.firstElementChild.style.width = `${100/23*progression}%`;
            //     progress.firstElementChild.style.backgroundColor = 'blue';
            // } 

          //  function retrieveAnswer(name) {
           //     return document.querySelector("input[name=" + name + "]:checked");
           // }



           // function loadQuestion (questionIndex) {
           // let q = questions[questionIndex];
          //  qst.textContent = q.question;
          //  form.innerHTML = q.input;

          //  }



          //  function startTest() {
          //  currentQuestion = 0;
          //  preambule.style.display = "none";
          //  loadQuestion(0);
         //   btnNext.style.display = "";
         //   btnPrevious.style.display = "none";
         //   qst.style.display = "";
         //   form.style.display = "";
         //   btnNext.textContent = " la question suivante";
         //   info.style.display = "block" ;
         //   }

         //   function loadNextQuestion() {

            
         //   var q = questions[currentQuestion];
            //    if(retrieveAnswer(q.name) == null) {
            //     alert("please enter your answer");
            //     return;
            //    } else {
            //      answers.push(retrieveAnswer(q.name).value == "true");
            //      console.log(answers);
            //    }

            //    currentQuestion++;
           //     btnPrevious.style.display = "block";  //ou bien = "" pour annuler le display none
            //    info.style.display = "none" ;
            //    if (currentQuestion == totalQuestions - 1) {
            //    btnNext.textContent = "terminer";
             //       } 
            //    if (currentQuestion == totalQuestions) {
            //    preambule.style.display = "block";
             //   qst.style.display = "none";
             //   form.style.display = "none";
             //   btnNext.style.display = "none";
              //  btnPrevious.style.display = "none";
              //  } 
              //  else {
              //  loadQuestion(currentQuestion);
                //    }
            
            
          //  }


        //    function loadPreviousQuestion() {
          //      currentQuestion--;
          //      btnNext.textContent = " la question suivante";
           //     if (currentQuestion == 0) {
            //    btnPrevious.style.display = "none";
            //    info.style.display = "block" ;
            //    }
             //    loadQuestion(currentQuestion);
             //    bar(currentQuestion);
           //  }