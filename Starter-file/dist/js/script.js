

        
           const questions = [{ // 0
            question: `Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 1
            question: `quelle est votre température?`,
            input: `<input  class ="test2__input"  type="number" id="number" name="temperature-degre" aria-describedby="text-suffix" min="34" max="42"
            step="0.1" placeholder="37.0" value = "" required=""> <label>température</label><br>`,
            type: 2
        
        },
        { // 2
            question: `Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        
        },
        { // 3
            question: `Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        
        { // 4
            question: `Avez-vous un mal de gorge apparu ces derniers jours ? `,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 5
            question: `Ces dernières 24 heures, avez-vous de la diarrhée ?Avec au moins 3 selles molles.`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 6
            question: `Ces derniers jours, avez-vous une fatigue inhabituelle ?`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 7
            question: `Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 8
            question: `Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 9
            question: `Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?`,
            input: `<input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 10
            question: `Comment vous sentez-vous ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Mal</label><br>
            <input type="radio" name="qst" value="oui">
            <label>Très mal</label><br>
            <input type="radio"name="qst" value="non">
            <label>Assez bien</label><br>
            <input type="radio" name="qst" value="non">
            <label>bien</label><br>`,
            type: 1
        },
        { // 11
            question: `Quelle est votre taille ?`,
            input: `
            <input  class ="test2__input" id="number" type="number" name="two" aria-describedby="text-suffix" 
            step="0.1"  required="">
            <label>cm</label><br>`,
            type: 2
        },
        
        { // 12
            question: `Quel est votre âge ?`,
            input: `
            <input  class ="test2__input" id="number" type="number" name="two" aria-describedby="text-suffix" 
            step="0.1"  required=""> 
            <label>ans</label><br>`,
            type: 2
        },
        { // 13
            question: `Quel est votre poids ? `,
            input: `
            <input  class ="test2__input" id="number" type="number" name="two" aria-describedby="text-suffix" 
            step="0.1"  required="">
            <label>Kgs</label><br>`,
            type: 2
        
        },
        { // 14
            question: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>
            <input type="radio" name="qst" value="jsp" >
            <label>Ne sait pas</label><br>`,
            type: 1
        
        },
        { // 15
            question: `Êtes-vous diabétique ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 16
            question: `Avez-vous ou avez-vous eu un cancer ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        }, { // 17
            question: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        }, { // 18
            question: `Avez-vous une insuffisance rénale chronique dialysée ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        }, { // 19
            question: `Avez-vous une maladie chronique du foie ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>`,
            type: 1
        },
        { // 20 
            question: `Êtes-vous enceinte ?`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>
            <input type="radio" name="qst"  >
            <label>Non applicable</label><br>`,
            type: 1
        },
        { // 21
            question: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>
            <input type="radio" name="qst">
            <label>Ne sait pas</label><br>`,
            type: 1
        },
        { // 22 
            question: `Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
            input: `
            <input type="radio" name="qst" value="oui">
            <label>Oui</label><br>
            <input type="radio" name="qst" value="non">
            <label>Non</label><br>
            <input type="radio" name="qst">
            <label>Ne sait pas</label><br>`,
            type: 1
        },
        
        
        ];
        
        let currentQuestion = 0;
        const totalQuestions = questions.length;
        let progress = document.querySelector("#progress");
        const preambule = document.querySelector("#preambule");
        const start = document.querySelector("#start");
        const qst = document.querySelector("#qst");
        const form = document.querySelector("#form");
        const info = document.querySelector("#test-info");
        const btnPrevious = document.querySelector("#btn-previous");
        const btnNext = document.querySelector("#btn-next");
        let result = document.querySelector("#result__test");
        let resultBtn = document.querySelector("#result__btn");
        let answers = [];
        
        
        
        
        
        info.style.display = "none";
        btnPrevious.style.display = "none";
        btnNext.style.display = "none";
        result.style.display= "none";
        resultBtn.style.display = "none";
        
      
        // loading questions from  the array
        
        function loadQuestion(questionIndex) {
        let q = questions[questionIndex];
        qst.textContent = q.question;
        form.innerHTML = q.input;
        
        }
        
        
        
        function updateProgress(num) {
            const initial_width = 100 / 22;
            const progressInd = document.getElementById("currentIndice");
            const indice = document.getElementById("indice");
        
            progressInd.style.width = (num -1) * initial_width + "%";
            indice.innerText = num ;
          }
        
        
        
        
        
        
        // starting the test
        
        function startTest() {
        currentQuestion = 0;
        preambule.style.display = "none";
        loadQuestion(0);
        btnNext.style.display = "";
        btnPrevious.style.display = "none";
        qst.style.display = "";
        form.style.display = "";
        btnNext.textContent = " la question suivante";
        info.style.display = "block";
        
        }
        
        
        // loading the next question 
        
        function loadNextQuestion() {
        
        const inputNumber = document.querySelector("#number");
        const inputs = document.querySelector("input");
        
        if (inputs.id === 'number') { // oui if (questions[currentQuestion].type === 2) 
        
            answers.push(parseFloat(inputNumber.value));
            console.log(answers);
        
        } else if (questions[currentQuestion].type === 1) {
            var valeur = document.querySelector('input[name=qst]:checked');
            if (valeur === null) {
                alert("please enter your answer");
                return;
            } else {
                answers.push(valeur.value);
                console.log(answers);
            }
        
        }
      
        
        currentQuestion++;
        btnPrevious.style.display = "block"; //ou bien = "" pour annuler le display none
        info.style.display = "none";
        if (currentQuestion == totalQuestions - 1) {
            btnNext.textContent = "terminer";
        }
        if (currentQuestion == totalQuestions) {
            // preambule.style.display = "block";
            qst.style.display = "none";
            form.style.display = "none";
            btnNext.style.display = "none";
            btnPrevious.style.display = "none";
            getResult(answers);
        
        
        
        } else {
            loadQuestion(currentQuestion);
        }
        
        
        }
        
        
        // loading the previous question
        
        function loadPreviousQuestion() {
        currentQuestion--;
        btnNext.textContent = " la question suivante";
        if (currentQuestion == 0) {
            btnPrevious.style.display = "none";
            info.style.display = "block";
        }
        loadQuestion(currentQuestion);
        answers.pop();
        }
        
        // restart the test 
        
        function restartTest () {
        resultBtn.style.display = "none";
        result.style.display = "none";
        preambule.style.display= "block";
        start.style.display = "block";
        
        
        }
        
        // facteur pronostique 
        
        function facteurPronostique(age, hypertensionCardio, diabetique, cancer, maladieRespir, insuffisanceRenale, maladieFoie, enceinte, defenseImmuno, traitementImmuno) {
        var calculFacteurPronostique = 0
        if (age >= 70) {
            calculFacteurPronostique++;
        }
        if (hypertensionCardio == "oui") {
            calculFacteurPronostique++;
        }
        if (diabetique == "oui") {
            calculFacteurPronostique++;
        }
        if (cancer == 'oui') {
            calculFacteurPronostique++;
        }
        if (maladieRespir == 'oui') {
            calculFacteurPronostique++;
        }
        if (insuffisanceRenale == 'oui') {
            calculFacteurPronostique++;
        }
        if (maladieFoie == 'oui') {
            calculFacteurPronostique++;
        }
        if (enceinte == 'oui') {
            calculFacteurPronostique++;
        }
        if (defenseImmuno == 'oui') {
            calculFacteurPronostique++;
        }
        if (traitementImmuno == 'oui') {
            calculFacteurPronostique++;
        }
        
        return calculFacteurPronostique;
        
        }
        
        // facteur de gravité mineur
        
        function facteurGraviteMineur(fievre, fatigue, malaise) {
        var calculFacteurGraviteMineur = 0;
        if (fievre >= 39) {
            calculFacteurGraviteMineur++;
        }
        if (fatigue == 'oui') {
            calculFacteurGraviteMineur++;
        }
        if (malaise == 'oui') {
            calculFacteurGraviteMineur++;
        }
        return calculFacteurGraviteMineur;
        }
        
        // facteur de gravité majeur
        
        function facteurGraviteMajeur(geneRespira, difficultéAlimentation, fievre) {
        var calculFacteurGraviteMajeur = 0;
        if (geneRespira == 'oui') {
            calculFacteurGraviteMajeur++;
        }
        if (difficultéAlimentation == 'oui') {
            calculFacteurGraviteMajeur++;
        }
        if (fievre <= 35.4) {
            calculFacteurGraviteMajeur++;
        }
        return calculFacteurGraviteMajeur;
        }
        
        //algo------------------------------------------- 
        
        function getResult(answers) {
        console.log("test")
        var pronostique = facteurPronostique(answers[12], answers[14], answers[15], answers[16], answers[9], answers[18], answers[19], answers[20], answers[21], answers[22]);
        var mineur = facteurGraviteMineur(answers[1], answers[7], answers[10]);
        var majeur = facteurGraviteMajeur(answers[9], answers[8], answers[1]);
        
        
        var toux = answers[2];
        var gorge = answers[4];
        var courbature = answers[3];
        var diarrhee = answers[5];
        
        if (answers[0] == "oui" || toux == "oui" && gorge == "oui" || toux == "oui" && courbature == "oui" || answers[0] == "oui" && diarrhee == "oui") {
            if (majeur >= 1) {
                result.innerHTML = " <p> Appel 141. </p>"
                result.style.display = "block";
                resultBtn.style.display = "block";
            } else if (pronostique == 0) {
        
                if ((majeur == 0) && (mineur == 0) && (answers[12] < 50))
                    result.innerHTML = " <p> Sans facteur de gravité & <50 ans : nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. </p>"
                result.style.display = "block";
                resultBtn.style.display = "block";
        
                if ((majeur == 0) && (mineur == 0) && (answers[12] >= 50 && answers[12] <= 60)) {
                    result.innerHTML = " <p> téléconsultation ou médecin généraliste ou visite à domicile. </p>"
                    result.style.display = "block";
                    resultBtn.style.display = "block";
                }
            } else if (pronostique >= 1) {
                if ((mineur == 0) && (majeur == 0)) {
                    result.innerHTML = " <p> téléconsultation ou médecin généraliste ou visite à domicile. </p>"
                    result.style.display = "block";
                    resultBtn.style.display = "block";
                }
                if ((mineur >= 2)) {
                    result.innerHTML = "<p> appel 141 </p>";
                    result.style.display = "block";
                    resultBtn.style.display = "block";
                }
            }
        
        
        } else if ((answers[0] == "oui") && (toux == "oui ")) {
        
        if (majeur >= 1) {
            result.innerHTML = "<p> appel 141 </p>";
            result.style.display = "block";
            resultBtn.style.display = "block";
        
        } else if (pronostique == 0) {
            if (((mineur == 0) && (majeur == 0)) || ((mineur >= 1) && (majeur == 0))) {
                result.innerHTML = "<p>téléconsultation ou médecin généraliste ou visite à domicile </p>";
                result.style.display = "block";
                resultBtn.style.display = "block";
            } else if (pronostique >= 1) {
                if ((mineur == 0) && (majeur == 0)) {
                    result.innerHTML = "<p>téléconsultation ou médecin généraliste ou visite à domicile </p>";
                    result.style.display = "block";
                    resultBtn.style.display = "block";
                }
        
                if (mineur == 1) {
                    result.innerHTML = "<p>téléconsultation ou médecin généraliste ou visite à domicile </p>";
                    result.style.display = "block";
                    resultBtn.style.display = "block";
                }
                if (mineur >= 2) {
                    result.innerHTML = "<p> appel 141 </p>";
                    result.style.display = "block";
                    resultBtn.style.display = "block";
                }
            }
        }
        
        
        } else if (answers[0] == "oui" || (toux == "oui") || (gorge == "oui") || (courbature == "oui")) {
        if (mineur == 0 && majeur == 0) {
            result.innerHTML = "<p> Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute. </p>";
            result.style.display = "block";
            resultBtn.style.display = "block";
        }
        if (((mineur >= 1) || (majeur >= 1)) || (pronostique == 1)) {
            result.innerHTML = "<p> Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. </p>";
            result.style.display = "block";
            resultBtn.style.display = "block";
        }
        } else {
        result.innerHTML = "<p> Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil. </p>";
        result.style.display = "block";
        resultBtn.style.display = "block";
        }
        }
        
        
        
        
        
        